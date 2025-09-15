<!-- components/CustomConfirm.vue -->
<template>
  <view class="custom-confirm-overlay" v-if="show" @tap="handleOverlayTap">
    <view class="custom-confirm-container" @tap.stop>
      <view class="confirm-header" v-if="title">
        <text class="confirm-title">{{ title }}</text>
      </view>
      
      <view class="confirm-content">
        <text class="confirm-message">{{ message }}</text>
      </view>
      
      <view class="confirm-actions">
        <button 
          class="confirm-btn cancel-btn" 
          @tap="handleCancel"
          :style="{ color: cancelColor }"
        >
          {{ cancelText }}
        </button>
        <button 
          class="confirm-btn confirm-btn-primary" 
          @tap="handleConfirm"
          :style="{ backgroundColor: confirmColor, color: confirmTextColor }"
        >
          {{ confirmText }}
        </button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'CustomConfirm',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '提示'
    },
    message: {
      type: String,
      default: '确定要执行此操作吗？'
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmColor: {
      type: String,
      default: '#007aff'
    },
    confirmTextColor: {
      type: String,
      default: '#ffffff'
    },
    cancelColor: {
      type: String,
      default: '#666666'
    },
    maskClosable: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleConfirm() {
      this.$emit('confirm');
      this.$emit('update:show', false);
    },
    
    handleCancel() {
      this.$emit('cancel');
      this.$emit('update:show', false);
    },
    
    handleOverlayTap() {
      if (this.maskClosable) {
        this.handleCancel();
      }
    }
  }
}
</script>

<style scoped>
.custom-confirm-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.custom-confirm-container {
  background-color: #ffffff;
  border-radius: 12px;
  width: 280px;
  max-width: 90%;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.confirm-header {
  padding: 20px 20px 10px;
  text-align: center;
  border-bottom: 1px solid #f0f0f0;
}

.confirm-title {
  font-size: 18px;
  font-weight: 600;
  color: #333333;
}

.confirm-content {
  padding: 20px;
  text-align: center;
}

.confirm-message {
  font-size: 16px;
  color: #666666;
  line-height: 1.5;
}

.confirm-actions {
  display: flex;
  border-top: 1px solid #f0f0f0;
}

.confirm-btn {
  flex: 1;
  height: 50px;
  border: none;
  background-color: transparent;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cancel-btn {
  border-right: 1px solid #f0f0f0;
  color: #666666;
}

.cancel-btn:active {
  background-color: #f5f5f5;
}

.confirm-btn-primary {
  background-color: #007aff;
  color: #ffffff;
}

.confirm-btn-primary:active {
  opacity: 0.8;
}

/* 动画效果 */
.custom-confirm-overlay {
  animation: fadeIn 0.3s ease-out;
}

.custom-confirm-container {
  animation: scaleIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes scaleIn {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>