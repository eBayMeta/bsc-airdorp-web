<!-- components/CustomConfirm.vue -->
<template>
	<view class="custom-confirm-overlay" v-if="show" @tap="handleOverlayTap">
		<view class="custom-confirm-container" @tap.stop>
			<img src="@/static/img_withdrawal.png" class="iamgesd" alt="" />
			<view class="confirm-header" v-if="title">
				<text class="confirm-title">{{ title }}</text>
			</view>

			<view class="confirm-content">
				<text class="confirm-message">
					The withdrawal quantity this time
				</text>
				<h3 class="confirm-info">
					{{infos}}
				</h3>
			</view>

			<view class="confirm-actions">
				<button class="confirm-btn confirm-btn-primary" @tap="handleConfirm"
					:style="{ backgroundColor: confirmColor, color: confirmTextColor }">
					{{$t("Confirms")}}
				</button>

				<button class="confirm-btn cancel-btn" @tap="handleCancel" :style="{ color: cancelColor }">
					{{$t("Cancel")}}

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
				default: 'Initiate withdrawal'
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
			},
			infos:{
				type:String
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
		/* 	background: #FFFFFF14;
	background: linear-gradient(167.91deg, #90E1FF 8.82%, #89A2FF 64.99%);
	background: radial-gradient(50% 50% at 50% 50%, #3474FF 0%, rgba(32, 24, 181, 0) 100%);
	background: linear-gradient(178.64deg, #93F4FF 1.16%, #8CBCFF 66.12%);
	background: linear-gradient(180deg, #ABBAFF 0%, #FFFFFF 100%);
	background: linear-gradient(180deg, #FFFFFF 0%, #ABBAFF 100%);
	background: #FFFFFF33;
	background: #FFFFFF1A;
	background: #FFFFFF0F; */
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 9999;
	}

	.custom-confirm-container {
		/* background-color: #ffffff; */
		background: url(/static/alterbg.png);
		border-radius: 12px;
		width: 280px;
		max-width: 90%;
		/* overflow: hidden; */
		/* height: 288px; */
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
	}

	.confirm-header {
		padding: 0px 20px 10px;
		text-align: center;
	}

	.confirm-title {
		font-size: 18px;
		font-weight: 600;
		color: #333333;
	}

	.confirm-content {
		padding: 10px 20px;
		width: 70%;
		margin: 0 auto;
		text-align: center;
		background: #2042D71A;
		border-radius: 5%;
		margin-bottom: 10px;
		font-size: 11px;
	}

	.confirm-message {
		font-size: 12px;
		color: #666666;
		line-height: 1.5;
	}

	.confirm-actions {
		/* display: flex; */
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
		flex-wrap: wrap;
		width: 80%;
	}

	.cancel-btn {
		border-right: 1px solid #f0f0f0;
		color: #666666;
		height: 40px;
		margin-bottom: 15px;
		border: none;
		font-size: 14px;
	}

	.cancel-btn:active {
		background-color: #f5f5f5;
	}

	.confirm-btn-primary {
		background: linear-gradient(180deg, #242FFF 0%, #5BA8FF 100%);
		/* background-color: #007aff; */
		height: 40px;
		color: #ffffff;
		margin-bottom: 10px;
		border-radius: 20px;
		font-size: 14px;
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

	.iamgesd {
		width: 100px;
		height: 100px;
		margin: 0 auto;
		display: block;
		margin-top: -40px;
	}

	.confirm-info {
		height: 50px;
		line-height: 50px;
		font-size: 18px;
	}

	uni-button:after {
		border: none;
	}
</style>