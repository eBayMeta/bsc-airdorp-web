
// 主要复制函数
export async function copyText(text) {
  try {
    // 优先使用现代 Clipboard API (Chrome 66+, Firefox 63+, Safari 13.1+)
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return { success: true, method: 'clipboard-api' };
    }
    
    // 降级到 execCommand 方法
    return copyTextFallback(text);
    
  } catch (error) {
    console.warn('Clipboard API failed, trying fallback method:', error);
    // 如果 Clipboard API 失败，尝试降级方法
    return copyTextFallback(text);
  }
}

// 降级方法：使用 execCommand
function copyTextFallback(text) {
  try {
    // 创建临时文本区域
    const textArea = document.createElement('textarea');
    textArea.value = text;
    
    // 设置样式使其不可见
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    textArea.style.top = '-9999px';
    textArea.style.opacity = '0';
    textArea.style.pointerEvents = 'none';
    textArea.setAttribute('readonly', '');
    
    document.body.appendChild(textArea);
    
    // 选择文本
    textArea.select();
    textArea.setSelectionRange(0, 99999); // 兼容移动端
    
    // 执行复制
    const successful = document.execCommand('copy');
    
    // 清理
    document.body.removeChild(textArea);
    
    if (successful) {
      return { success: true, method: 'execCommand' };
    } else {
      throw new Error('execCommand copy failed');
    }
    
  } catch (error) {
    console.error('Fallback copy method failed:', error);
    return { 
      success: false, 
      error: error.message,
      method: 'failed'
    };
  }
}

// 复制输入框或文本区域的内容
function copyFromElement(element) {
  try {
    if (!element) {
      throw new Error('Element not found');
    }
    
    // 如果是输入框或文本区域
    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
      element.select();
      element.setSelectionRange(0, 99999);
      
      const successful = document.execCommand('copy');
      return { 
        success: successful, 
        method: 'element-select',
        text: element.value 
      };
    }
    
    // 如果是其他元素，获取文本内容
    const text = element.textContent || element.innerText || '';
    return copyText(text);
    
  } catch (error) {
    console.error('Copy from element failed:', error);
    return { 
      success: false, 
      error: error.message,
      method: 'failed'
    };
  }
}

// 增强版复制函数 - 带回调和提示
async function copyWithCallback(text, options = {}) {
  const {
    onSuccess = () => {},
    onError = () => {},
    showAlert = false,
    alertDuration = 2000
  } = options;
  
  const result = await copyText(text);
  
  if (result.success) {
    onSuccess(result);
    
    if (showAlert) {
      showCopyAlert('复制成功！', 'success', alertDuration);
    }
  } else {
    onError(result);
    
    if (showAlert) {
      showCopyAlert('复制失败：' + (result.error || '未知错误'), 'error', alertDuration);
    }
  }
  
  return result;
}

// 简单的提示框实现
function showCopyAlert(message, type = 'success', duration = 2000) {
  // 移除已存在的提示
  const existingAlert = document.querySelector('.copy-alert');
  if (existingAlert) {
    existingAlert.remove();
  }
  
  // 创建提示框
  const alert = document.createElement('div');
  alert.className = 'copy-alert';
  alert.textContent = message;
  
  // 样式
  Object.assign(alert.style, {
    position: 'fixed',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '12px 24px',
    borderRadius: '6px',
    color: 'white',
    fontSize: '14px',
    fontWeight: '500',
    zIndex: '10000',
    transition: 'opacity 0.3s ease',
    backgroundColor: type === 'success' ? '#10b981' : '#ef4444',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
  });
  
  document.body.appendChild(alert);
  
  // 自动消失
  setTimeout(() => {
    alert.style.opacity = '0';
    setTimeout(() => {
      if (alert.parentNode) {
        alert.parentNode.removeChild(alert);
      }
    }, 300);
  }, duration);
}

// 检测浏览器复制支持情况
function checkCopySupport() {
  return {
    clipboardAPI: !!(navigator.clipboard && window.isSecureContext),
    execCommand: document.queryCommandSupported ? document.queryCommandSupported('copy') : false,
    secureContext: window.isSecureContext || false
  };
}
