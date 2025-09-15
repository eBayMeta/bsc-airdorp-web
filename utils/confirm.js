// utils/confirm.js
class ConfirmUtil {
  constructor() {
    this.isShowing = false;
  }
  
  /**
   * 显示确认对话框
   * @param {Object} options 配置选项
   * @returns {Promise} 返回Promise，resolve(true)表示确认，resolve(false)表示取消
   */
  show(options = {}) {
    return new Promise((resolve) => {
      if (this.isShowing) {
        resolve(false);
        return;
      }
      
      this.isShowing = true;
      
      const defaultOptions = {
        title: '提示',
        content: '确定要执行此操作吗？',
        confirmText: '确定',
        cancelText: '取消',
        confirmColor: '#007aff',
        cancelColor: '#666666'
      };
      
      const config = { ...defaultOptions, ...options };
      
      uni.showModal({
        title: config.title,
        content: config.content,
        confirmText: config.confirmText,
        cancelText: config.cancelText,
        confirmColor: config.confirmColor,
        cancelColor: config.cancelColor,
        success: (res) => {
          this.isShowing = false;
          resolve(res.confirm);
        },
        fail: () => {
          this.isShowing = false;
          resolve(false);
        }
      });
    });
  }
  
  /**
   * 显示删除确认框
   * @param {String} itemName 要删除的项目名称
   * @returns {Promise}
   */
  showDeleteConfirm(itemName = '此项') {
    return this.show({
      title: '删除确认',
      content: `确定要删除${itemName}吗？删除后无法恢复。`,
      confirmText: '删除',
      cancelText: '取消',
      confirmColor: '#ff4757'
    });
  }
  
  /**
   * 显示登录确认框
   * @returns {Promise}
   */
  showLoginConfirm() {
    return this.show({
      title: '登录提示',
      content: '当前未登录，是否跳转到登录页面？',
      confirmText: '去登录',
      cancelText: '稍后再说',
      confirmColor: '#2ed573'
    });
  }
  
  /**
   * 显示退出确认框
   * @returns {Promise}
   */
  showLogoutConfirm() {
    return this.show({
      title: '退出确认',
      content: '确定要退出登录吗？',
      confirmText: '退出',
      cancelText: '取消',
      confirmColor: '#ff6b35'
    });
  }
  
  /**
   * 显示保存确认框
   * @returns {Promise}
   */
  showSaveConfirm() {
    return this.show({
      title: '保存确认',
      content: '是否保存当前修改的内容？',
      confirmText: '保存',
      cancelText: '不保存',
      confirmColor: '#2ed573'
    });
  }
  
  /**
   * 显示网络错误重试确认框
   * @returns {Promise}
   */
  showRetryConfirm() {
    return this.show({
      title: '网络错误',
      content: '网络连接失败，是否重试？',
      confirmText: '重试',
      cancelText: '取消',
      confirmColor: '#007aff'
    });
  }
  
  /**
   * 显示权限申请确认框
   * @param {String} permission 权限名称
   * @returns {Promise}
   */
  showPermissionConfirm(permission) {
    return this.show({
      title: '权限申请',
      content: `应用需要获取${permission}权限才能正常使用，是否授权？`,
      confirmText: '授权',
      cancelText: '拒绝',
      confirmColor: '#007aff'
    });
  }
}

// 创建单例
const confirmUtil = new ConfirmUtil();

export default confirmUtil;

// 使用示例：
/*
// 1. 基础用法
import confirmUtil from '@/utils/confirm.js'

// 使用async/await
async handleDelete() {
  const confirmed = await confirmUtil.showDeleteConfirm('这条记录');
  if (confirmed) {
    // 执行删除操作
    console.log('用户确认删除');
  } else {
    console.log('用户取消删除');
  }
}

// 使用Promise
confirmUtil.show({
  title: '自定义标题',
  content: '自定义内容',
  confirmText: '好的',
  cancelText: '算了'
}).then(confirmed => {
  if (confirmed) {
    // 用户点击确认
  } else {
    // 用户点击取消
  }
});

// 2. 快捷方法
confirmUtil.showLoginConfirm().then(confirmed => {
  if (confirmed) {
    uni.navigateTo({ url: '/pages/login/login' });
  }
});

// 3. 在方法中使用
methods: {
  async onDeleteClick() {
    const confirmed = await confirmUtil.showDeleteConfirm('这个文件');
    if (confirmed) {
      this.performDelete();
    }
  },
  
  async onLogoutClick() {
    const confirmed = await confirmUtil.showLogoutConfirm();
    if (confirmed) {
      this.logout();
    }
  }
}
*/