<template>
	<div class="main-container">
		<div class="bg">
			<div class="ellipse"></div>
			<div class="ellipse-7"></div>
		</div>
		<div class="rectangle-8">
			<span class="train-points">{{ ($t("Training Points")) }}</span>
			<div class="rectangle-9">
				<div style="display:flex;align-items: center;">
					<div class="rectangle-a" style="margin-right: 5px;">
					</div>
					<span class="comma"> AIXA</span>
				</div>
				<span class="aip">{{ training.totalAixa }}</span>
			</div>
			<div class="icon-tips"></div>
		</div>
		<div class="rectangle">
			<div class="img-animation">

			</div>
			<span v-show="canBind" class="bind-to-superior">{{ $t("Bind to Superior") }}</span>
			<div v-show="canBind" class="rectangle-1">
				<div class="icon-link">
					<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g opacity="0.6" clip-path="url(#clip0_67_2543)">
							<path
								d="M5.00024 6.49998C5.21497 6.78705 5.48892 7.02457 5.80352 7.19645C6.11812 7.36833 6.466 7.47054 6.82357 7.49615C7.18114 7.52176 7.54004 7.47017 7.87592 7.34487C8.2118 7.21958 8.5168 7.02352 8.77025 6.76998L10.2702 5.26998C10.7256 4.79848 10.9776 4.16697 10.9719 3.51148C10.9662 2.85599 10.7033 2.22896 10.2398 1.76544C9.77627 1.30192 9.14924 1.03899 8.49375 1.0333C7.83826 1.0276 7.20675 1.27959 6.73524 1.73498L5.87524 2.58998"
								stroke="white" stroke-width="0.857143" stroke-linecap="round" stroke-linejoin="round" />
							<path
								d="M6.99986 5.50011C6.78513 5.21305 6.51118 4.97552 6.19658 4.80364C5.88198 4.63176 5.5341 4.52955 5.17653 4.50395C4.81896 4.47834 4.46006 4.52993 4.12418 4.65522C3.7883 4.78051 3.4833 4.97658 3.22986 5.23011L1.72986 6.73011C1.27446 7.20162 1.02247 7.83312 1.02817 8.48862C1.03387 9.14411 1.29679 9.77114 1.76031 10.2347C2.22383 10.6982 2.85086 10.9611 3.50635 10.9668C4.16184 10.9725 4.79335 10.7205 5.26486 10.2651L6.11986 9.41011"
								stroke="white" stroke-width="0.857143" stroke-linecap="round" stroke-linejoin="round" />
						</g>
						<defs>
							<clipPath id="clip0_67_2543">
								<rect width="12" height="12" fill="white" />
							</clipPath>
						</defs>
					</svg>
				</div>
				<span class="xf-fa-db-c-a-fd-e-a-de-a-a-f">
					<input @focus="navshows = false" @blur="navshows = true" style="font-size: 12px;"
						v-model="bindAddress" type="text">
					<!-- 0x405f4FA0d255bC4A980F464936d1EAdeA12A298F -->
				</span>
			</div>
			
			<div class="img-button1">
				<div @click="bind" v-show="!isloading" class="frame1">
					<div class="frame-2" v-show="canBind"><span class="bind-now" style="font-size: 20px;">{{ $t("Bind Now") }}</span>
					</div>
					<div class="frame-2" v-show="Start"><span class="bind-now" style="font-size: 20px;">
							<svg width="11" height="14" viewBox="0 0 11 14" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M9.44001 6.14644H7.38001V1.34644C7.38001 0.226436 6.77334 -0.000231117 6.03334 0.839769L5.50001 1.44644L0.986674 6.57977C0.366674 7.27977 0.626674 7.8531 1.56001 7.8531H3.62001V12.6531C3.62001 13.7731 4.22667 13.9998 4.96667 13.1598L5.50001 12.5531L10.0133 7.41977C10.6333 6.71977 10.3733 6.14644 9.44001 6.14644Z"
									fill="white" />
							</svg>

							{{ $t("Start training") }}
						</span></div>
					<div class="frame-2" v-show="timeShow"><span class="bind-now">
							<svg width="15" height="14" viewBox="0 0 15 14" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M7.50016 0.333496C3.82683 0.333496 0.833496 3.32683 0.833496 7.00016C0.833496 10.6735 3.82683 13.6668 7.50016 13.6668C11.1735 13.6668 14.1668 10.6735 14.1668 7.00016C14.1668 3.32683 11.1735 0.333496 7.50016 0.333496ZM10.4002 9.38016C10.3068 9.54016 10.1402 9.62683 9.96683 9.62683C9.88016 9.62683 9.7935 9.60683 9.7135 9.5535L7.64683 8.32016C7.1335 8.0135 6.7535 7.34016 6.7535 6.74683V4.0135C6.7535 3.74016 6.98016 3.5135 7.2535 3.5135C7.52683 3.5135 7.7535 3.74016 7.7535 4.0135V6.74683C7.7535 6.98683 7.9535 7.34016 8.16016 7.46016L10.2268 8.6935C10.4668 8.8335 10.5468 9.14016 10.4002 9.38016Z"
									fill="white" />
							</svg>

							{{ $t("Cooling down") }} {{ time }}
						</span>
					</div>
				</div>
				
				<div v-show="isloading" class="frame1">
					<div class="frame-2">
						<span class="bind-now logidng">
							<svg t="1758193145024" class="icon" viewBox="0 0 1105 1024" version="1.1"
								xmlns="http://www.w3.org/2000/svg" p-id="4777" width="200" height="200">
								<path
									d="M990.723072 342.87616a115.0976 115.0976 0 0 0-99.75808 57.91744 116.38784 116.38784 0 0 0 0 115.83488 115.0976 115.0976 0 0 0 99.75808 57.91744c63.63136 0 115.2-51.85536 115.2-115.83488 0-63.97952-51.56864-115.83488-115.2-115.83488zM566.787072 18.5344a13.86496 13.86496 0 0 0-13.824 13.90592 13.80352 13.80352 0 1 0 25.8048 6.9632 13.96736 13.96736 0 0 0 0-13.9264 13.80352 13.80352 0 0 0-11.9808-6.94272zM354.819072 0c-15.2576 0-27.648 12.45184-27.648 27.79136 0 15.36 12.3904 27.81184 27.648 27.81184 15.27808 0 27.648-12.45184 27.648-27.81184 0-15.36-12.36992-27.79136-27.648-27.79136zM188.931072 101.92896A41.5744 41.5744 0 0 0 147.459072 143.64672 41.5744 41.5744 0 0 0 188.931072 185.344a41.5744 41.5744 0 0 0 41.472-41.69728 41.5744 41.5744 0 0 0-41.472-41.71776zM59.907072 417.01376c-21.4016 0-41.1648 11.4688-51.87584 30.1056a60.5184 60.5184 0 0 0 0 60.25216 59.84256 59.84256 0 0 0 51.87584 30.1056c21.4016 0 41.18528-11.4688 51.89632-30.1056a60.5184 60.5184 0 0 0 0-60.25216 59.84256 59.84256 0 0 0-51.89632-30.1056zM202.755072 732.09856c-40.71424 0-73.728 33.1776-73.728 74.1376 0 40.93952 33.01376 74.1376 73.728 74.1376 40.73472 0 73.728-33.19808 73.728-74.1376 0-40.96-32.99328-74.1376-73.728-74.1376zM534.531072 847.93344a87.4496 87.4496 0 0 0-75.81696 44.01152 88.4736 88.4736 0 0 0 0 88.04352A87.4496 87.4496 0 0 0 534.531072 1024a87.4496 87.4496 0 0 0 75.83744-44.032 88.4736 88.4736 0 0 0 0-88.02304 87.4496 87.4496 0 0 0-75.83744-44.032zM861.699072 690.3808c-55.99232 0-101.376 45.64992-101.376 101.94944 0 56.29952 45.38368 101.92896 101.376 101.92896s101.376-45.62944 101.376-101.92896c0-56.32-45.38368-101.94944-101.376-101.94944z"
									p-id="4778" fill="#ffffff"></path>
							</svg> </span>
					</div>
				</div>
			</div>


		</div>

		<!-- <div class="img-train"></div> -->

		<BottomMenu v-show="navshows" :active="'training'"></BottomMenu>

		<!-- <CustomConfirm :infos="infos" @confirm="confirm" :show="bindShow" :title="$t('SystemPrompt')"></CustomConfirm> -->

	</div>
</template>


<script>
	import BottomMenu from '../../components/bottom-menu/index.vue'
	import {
		getTraining,
		getPayType,
		bindTraining,
		training
	} from "../../api/index"
	import useBNBTransfer from '@/composables/useBNBTransfer'
	import CustomConfirm from "@/components/message.vue"
	const {
		sendBNB,
		debugAmountConversion,
		error,
		isLoading
	} = useBNBTransfer()
	export default {
		// 在这里注册通用组件
		components: {
			BottomMenu,
			CustomConfirm
		},

		data() {
			return {
				isloading: false,
				bindShow: false,
				infos: "messagge",
				bindAddress: "",
				title: 'Hello',
				training: {},
				time: "00:00:00",
				canBind: false,
				Start: false,
				timeShow: false,
				navshows: true
			}
		},
		onLoad() {
			uni.setStorageSync("down", "")
		},


		async onShow() {
			if (!window.sessionStorage.getItem("account")) {
				try {
					uni.setStorageSync("isconnrctWallet",
						"true")
					const accounts = await window.ethereum.request({
						method: 'eth_requestAccounts'
					});
					this.accounts = accounts;
					window.sessionStorage.setItem("account", this.accounts)
				} catch (error) {
					console.error('用户拒绝授权:', error);
				}
			}
			if (window.sessionStorage.getItem("account")) {
				this.address = window.sessionStorage.getItem("account")
				this.getTraining()
			}
			if (window.sessionStorage.getItem("invite")) {
				this.bindAddress = window.sessionStorage.getItem("invite");
			}
		},
		methods: {
			confirm() {
				this.bindShow = false
			},
			async getTraining() {
				let data = await getTraining(this.address)
				this.training = data.data.data
				if (!this.training.canBind) {
					this.canBind = true;
					return;
				}
				this.canBind = false;
				if (this.training.canTrain) {
					this.Start = true;
				} else {
					// 1. 取后端给的上次训练时间
					const lastTime = new Date(this.training.trainingLastTime).getTime();

					// 2. 计算12小时对应的毫秒数
					const intervalMs = this.training.trainingIntervalHours * 60 * 60 * 1000; // 12小时 -> 43200000

					// 3. 下一次可训练的时间
					const nextTime = lastTime + intervalMs;

					// 4. 当前时间
					const now = new Date().getTime(); // 当前本地时间（浏览器环境）

					// 5. 如果未到时间，计算剩余秒数并启动倒计时
					if (now < nextTime) {
						const remainingSeconds = Math.floor((nextTime - now) / 1000);
						this.countDown(remainingSeconds);
						this.Start = false;
						this.timeShow = true;
					} else {
						// 已经可以训练
						this.Start = true;
						this.timeShow = false;
					}
				}
			},
			countDown(secent) {
				let timer = setInterval(() => {
					secent--
					this.time = this.getFormatTime(secent)
					if (secent < 0) {
						clearInterval(timer)
					}
				}, 1000);
			},
			getFormatTime(scoped) {
				// 秒数转小时分钟秒
				let h = Math.floor(scoped / 60 / 60)
				let m = Math.floor(scoped / 60 % 60)
				let s = Math.floor(scoped % 60)
				// 补0
				h = h < 10 ? '0' + h : h
				m = m < 10 ? '0' + m : m
				s = s < 10 ? '0' + s : s
				return `${h}:${m}:${s}`
			},
			async bind() {
				// 增加防抖函数效果
				clearTimeout(this.timers);
				this.timers = setTimeout(async () => {
					// 防抖函数的代码
					if (this.canBind) {
						if (!this.bindAddress) {
							uni.showToast({
								title: "Please enter the binding address",
								icon: "none"
							})
							return
						}
						if (uni.getStorageSync("down")) {

							return;
						}
						this.isloading = true
						let data = await getPayType("bind");
						let data1 = data.data.data;
						const transactionHash = await sendBNB(window.sessionStorage.getItem("account"),
							data1.receiveAddress, data1.receiveAmount)
						if (transactionHash.txHash) {
							let data2 = await bindTraining(this.address, transactionHash.txHash, this
								.bindAddress, data1.receiveAddress, data1.receiveAmount)
							this.infos = this.$t("bindSucess")
							this.bindShow = true;
						}
						uni.setStorageSync("down", "asdad")
					}
					if (this.Start) {
						let data = await getPayType("training");
						let data1 = data.data.data
						this.isloading = true
						const transactionHash = await sendBNB(window.sessionStorage.getItem("account"),
							data1.receiveAddress, data1.receiveAmount)
						if (transactionHash.txHash) {
							let data2 = await training(this.address, transactionHash.txHash, data1
								.receiveAddress, data1.receiveAmount)
							this.infos = this.$t("startSucess")
							this.bindShow = true;
						}
						
					}
					this.isloading = false;
					this.getTraining()
				}, 500); // 500ms 防抖时间

			},


		}
	}
</script>


<style scoped>
	#myVideo::-webkit-media-controls {
		display: none;
		/* Chrome, Safari, Opera */
	}

	#myVideo::--internal-media-controls-overflow-legacy {
		display: none;
		/* Firefox */
	}

	#myVideo::-ms-media-controls {
		display: none;
		/* IE/Edge */
	}

	:root {
		--default-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
			Ubuntu, "Helvetica Neue", Helvetica, Arial, "PingFang SC",
			"Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
			"Source Han Sans CN", sans-serif;
	}

	/* .main-container {
	  overflow: hidden;
	}
	
	.main-container,
	.main-container * {
	  box-sizing: border-box;
	}
	
	input,
	select,
	textarea,
	button {
	  outline: 0;
	}
	 */
	.main-container {
		width: 100vw;
		min-height: 100vh;
		padding-bottom: 15vh;
		margin: 0 auto;
		overflow: hidden;
		background: linear-gradient(180deg, #2132A2, #1A1376, #101C63);
	}

	.rectangle-8 {
		background: linear-gradient(180deg, rgba(19, 4, 186, 0.3) 0%, rgba(104, 55, 239, 0.3) 100%);
		background-size: cover;
		z-index: 16;
		border-radius: 16px;
		backdrop-filter: blur(1px);
		margin: 50px 10px;
		margin-bottom: 0;
		border: 0.5px solid;
		border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.2) 100%);
		color: #FFF;
		padding: 15px 15px;
		font-size: 14px;
		overflow: hidden;
	}

	.train-points {
		/* font-size: 18px;
		margin-bottom: 5px;
		display: block; */
		
		display: block;
		position: relative;
		width: 90vw;
		height: 20px;
		/* margin: 26px auto; */
		font-family: PingFang SC, var(--default-font-family);
		font-size: 18px;
		font-weight: 600;
		line-height: 19.6px;
		text-align: left;
		text-transform: capitalize;
		white-space: nowrap;
		background: linear-gradient(179.52deg, #87a9ff, #ffffff);
		z-index: 17;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		
	}

	.rectangle-9 {
		/* position: relative; */
		/* width: 100%; */
		height: 38px;
		border: 0.5px solid rgba(255, 255, 255, 0.2);
		z-index: 30;
		border-radius: 10px;
		margin: 15px 0;
		line-height: 38px;
		padding: 0 10px;
		display: flex;
		justify-content: space-between;
	}

	.rectangle-a {
		width: 22px;
		height: 22px;
		background: url(/static/bi.png) no-repeat center;
		background-size: cover;
		z-index: 34;
		font-size: 12px;
	}

	.training-reward-increase {
		font-size: 12px;
		display: flex;
		align-items: center;
	}

	.rectangle {
		/* height: 407px; */
		margin: 35px 15px 15px 15px;
		background: linear-gradient(180deg, #14169E 0%, #3F1DB1 100%);
		background-size: cover;
		z-index: 17;
		overflow: visible auto;
		border-radius: 16px;
		backdrop-filter: blur(1px);
		padding: 15px;
		color: #FFF;
		overflow: hidden;
	}

	/* .bind-to-superior {
		display: block;
		height: 20px;
		font-family: PingFang SC, var(--default-font-family);
		font-size: 16px;
		font-weight: bold;
		line-height: 19.6px;
		text-align: left;
		text-transform: capitalize;
		white-space: nowrap;
		background: #FFF;
		z-index: 19;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		margin-top: 10px;
	} */
	
	
	.bind-to-superior { 
		display: block;
		position: relative;
		width: 90vw;
		height: 20px;
		font-family: PingFang SC, var(--default-font-family);
		font-size: 18px;
		font-weight: 600;
		line-height: 19.6px;
		text-align: left;
		text-transform: capitalize;
		white-space: nowrap;
		background: linear-gradient(179.52deg, #87a9ff, #ffffff);
		z-index: 17;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	

	.rectangle-1 {
		position: relative;
		height: 34px;
		background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/1E9GGKG7A2.png) no-repeat center;
		background-size: cover;
		z-index: 20;
		border-radius: 6px;
		border: 0.5px solid;
		border-image-source: linear-gradient(180deg, rgba(100, 155, 224, 0.33) 0%, rgba(70, 131, 230, 0) 100%);
		font-size: 10px;
		line-height: 34px;
		overflow: hidden;
		padding: 0 10px;
		display: flex;
		align-items: center;
		margin-top: 10px;

	}

	.icon-link {
		margin: 0 5px;
	}

	.xf-fa-db-c-a-fd-e-a-de-a-a-f {
		flex: 1;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.frame1 {
		text-align: center;
		width: 80%;
		background: linear-gradient(180deg, #242FFF 0%, #5BA8FF 100%);
		border: 0.5px solid;
		height: 46px;
		border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.37) 0%, rgba(204, 137, 255, 0.35) 100%);
		box-shadow: 0px -2px 6px 0px #DDE4FF33 inset;
		border-radius: 35px;
		margin: 15px 0;
		line-height: 46px;
		margin: 0 auto;
		font-weight: bold;
		font-size: 16px;
	}

	.bg {
		position: absolute;
		width: 100vw;
		height: 100vh;
		top: 0;
		left: 0;
		overflow: hidden;
		z-index: 0;
	}

	.ellipse {
		position: absolute;
		width: 21vw;
		height: 85px;
		right: 0px;
		background: url(/static/shan.png) no-repeat center;
		background-size: 174px 97px;
		filter: blur(0.1px);
		z-index: 1;
	}

	.ellipse-7 {
		position: absolute;
		width: 335px;
		height: 153px;
		top: 22px;
		left: -200px;
		background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/8bVPDQUXFG.png) no-repeat center;
		background-size: cover;
		filter: blur(60px);
		z-index: 2;
	}

	.img-animation {
		position: relative;
		width: 281px;
		height: 236px;
		margin: 0 auto;
		background: url(/static/tips.gif) no-repeat center;
		background-size: cover;
		z-index: 18;
	}
	.img-button1{
		margin-top: 15px;
	}
	/* 

	
	.icon-link {
	  position: absolute;
	  width: 12px;
	  height: 12px;
	  top: 11px;
	  left: 10px;
	  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/tO215hptXU.png)
	    no-repeat center;
	  background-size: cover;
	  z-index: 22;
	  overflow: hidden;
	}
	.xf-fa-db-c-a-fd-e-a-de-a-a-f {
	  display: flex;
	  align-items: flex-start;
	  justify-content: flex-start;
	  position: absolute;
	  height: 11px;
	  top: 12px;
	  left: 28px;
	  color: rgba(255, 255, 255, 0.6);
	  font-family: PT Mono, var(--default-font-family);
	  font-size: 10px;
	  font-weight: 400;
	  line-height: 11px;
	  text-align: left;
	  white-space: nowrap;
	  z-index: 21;
	}
	.img-button {
	  position: relative;
	  width: 295px;
	  height: 46px;
	  margin: 14px 0 0 16px;
	  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/PcWfdKxoxH.png)
	    no-repeat center;
	  background-size: cover;
	  z-index: 23;
	  overflow: hidden;
	  border-radius: 26px;
	}
	.frame {
	  display: flex;
	  align-items: center;
	  flex-wrap: nowrap;
	  gap: 10px;
	  position: relative;
	  width: 65px;
	  margin: 13px 0 0 115px;
	  z-index: 24;
	}
	.frame-2 {
	  display: flex;
	  align-items: center;
	  flex-wrap: nowrap;
	  flex-shrink: 0;
	  gap: 4px;
	  position: relative;
	  width: 65px;
	  z-index: 25;
	}
	.bind-now {
	  display: flex;
	  align-items: flex-start;
	  justify-content: center;
	  flex-shrink: 0;
	  flex-basis: auto;
	  position: relative;
	  width: 65px;
	  height: 20px;
	  color: #ffffff;
	  font-family: PingFang SC, var(--default-font-family);
	  font-size: 14px;
	  font-weight: 600;
	  line-height: 19.6px;
	  text-align: center;
	  text-transform: capitalize;
	  white-space: nowrap;
	  z-index: 26;
	}
	
	
	 
	.img-train {
	  position: absolute;
	  width: 92px;
	  height: 92px;
	  top: 60px;
	  left: 250px;
	  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/DUyiWuXGYR.png)
	    no-repeat center;
	  background-size: cover;
	  z-index: 3;
	}
	
	.train-points {
	  display: block;
	  position: relative;
	  height: 20px;
	  margin: 18px 0 0 16px;
	  font-family: PingFang SC, var(--default-font-family);
	  font-size: 14px;
	  font-weight: 600;
	  line-height: 19.6px;
	  text-align: left;
	  text-transform: capitalize;
	  white-space: nowrap;
	  background: linear-gradient(179.52deg, #87a9ff, #ffffff);
	  z-index: 28;
	  -webkit-background-clip: text;
	  -webkit-text-fill-color: transparent;
	}

	.comma {
	  display: flex;
	  align-items: flex-start;
	  justify-content: flex-end;
	  position: absolute;
	  width: 51px;
	  height: 16px;
	  top: 10.5px;
	  left: 231.5px;
	  color: #ffffff;
	  font-family: PT Mono, var(--default-font-family);
	  font-size: 14px;
	  font-weight: 400;
	  line-height: 15.68px;
	  text-align: right;
	  white-space: nowrap;
	  z-index: 31;
	}
	.aip {
	  display: flex;
	  align-items: flex-start;
	  justify-content: flex-start;
	  position: absolute;
	  height: 16px;
	  top: 10.5px;
	  left: 39.5px;
	  color: rgba(255, 255, 255, 0.6);
	  font-family: PT Mono, var(--default-font-family);
	  font-size: 14px;
	  font-weight: 400;
	  line-height: 15.68px;
	  text-align: left;
	  white-space: nowrap;
	  z-index: 32;
	}
	.training-reward-increase {
	  position: absolute;
	  width: 168px;
	  height: 13px;
	  top: 96px;
	  left: 32px;
	  font-family: PingFang SC, var(--default-font-family);
	  font-size: 9px;
	  font-weight: 400;
	  line-height: 12.6px;
	  text-align: left;
	  text-overflow: initial;
	  white-space: nowrap;
	  z-index: 36;
	}
	.training-reward-increase-b {
	  position: relative;
	  color: #ffffff;
	  font-family: PingFang SC, var(--default-font-family);
	  font-size: 9px;
	  font-weight: 400;
	  line-height: 12.6px;
	  text-align: left;
	}
	.reward-500 {
	  position: relative;
	  color: #ffe227;
	  font-family: PingFang SC, var(--default-font-family);
	  font-size: 9px;
	  font-weight: 400;
	  line-height: 12.6px;
	  text-align: left;
	}
	.training-reward-increase-c {
	  position: relative;
	  color: #ffffff;
	  font-family: PingFang SC, var(--default-font-family);
	  font-size: 9px;
	  font-weight: 400;
	  line-height: 12.6px;
	  text-align: left;
	}
	.max-10000 {
	  position: relative;
	  color: #ffe227;
	  font-family: PingFang SC, var(--default-font-family);
	  font-size: 9px;
	  font-weight: 400;
	  line-height: 12.6px;
	  text-align: left;
	}
	.reward-points {
	  position: relative;
	  color: #ffffff;
	  font-family: PingFang SC, var(--default-font-family);
	  font-size: 9px;
	  font-weight: 400;
	  line-height: 12.6px;
	  text-align: left;
	}
	.icon-tips {
	  position: absolute;
	  width: 12px;
	  height: 12px;
	  top: 97px;
	  left: 16px;
	  background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/agpvYvNDfK.png)
	    no-repeat center;
	  background-size: cover;
	  z-index: 35;
	  overflow: hidden;
	} */
	.icon {
		width: 20px;
		height: 20px;
		color: #FFF;
	}

	.logidng {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 44px;
	}

	.logidng svg {
		stroke-dasharray: 300;
		stroke-dashoffset: 300;
		animation: svg-loading-rolling 2s linear infinite;
	}

	@keyframes svg-loading-rolling {
		from {
			stroke-dasharray: 600;
			stroke-dashoffset: 600;
			transform: rotate(720deg);
			transform-origin: 50% 50%;
		}
		to {
			stroke-dashoffset: 0;
			transform: rotate(0deg);
			transform-origin:50% 50%;
			/* opacity: 0.1; */
		}
	}
</style>