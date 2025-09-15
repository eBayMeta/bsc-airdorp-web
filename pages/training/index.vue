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
			<div class="training-reward-increase">
				<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clip-path="url(#clip0_67_2555)">
						<path
							d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
							stroke="white" stroke-opacity="0.6" stroke-width="0.8" stroke-linecap="round"
							stroke-linejoin="round" />
						<path d="M6 8V6" stroke="white" stroke-opacity="0.6" stroke-width="0.8" stroke-linecap="round"
							stroke-linejoin="round" />
						<path d="M6 4H6.00417" stroke="white" stroke-opacity="0.6" stroke-width="0.8"
							stroke-linecap="round" stroke-linejoin="round" />
					</g>
					<defs>
						<clipPath id="clip0_67_2555">
							<rect width="12" height="12" fill="white" />
						</clipPath>
					</defs>
				</svg>
				<span class="training-reward-increase-c">{{ ($t("TraTip1")) }} </span>
				<span class="max-10000" style="color: #FFE228;"> {{ training.rewardIncrement }} </span>
				<span style="margin-left: 5px;" class="training-reward-increase-b"> {{ ($t("highest")) }} </span>
				<span class="reward-500" style="color: #FFE228;"> {{ training.rewardFixed }} </span>
				<span class="reward-points"> {{ ($t("points")) }} </span>

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
					<input @focus="navshows = false" @blur="navshows = true" style="font-size: 12px;" v-model="bindAddress"
						type="text">
					<!-- 0x405f4FA0d255bC4A980F464936d1EAdeA12A298F -->
				</span>
			</div>
			<div class="img-button1">
				<div @click="bind" class="frame1">
					<div class="frame-2" v-show="canBind"><span class="bind-now">{{ $t("Bind Now") }}</span>
					</div>
					<div class="frame-2" v-show="Start"><span class="bind-now">
							<image style="height: 15px;width: 15px;" src="/static/flash.png" mode=""></image>
							{{ $t("Start training") }}
						</span></div>
					<div class="frame-2" v-show="timeShow"><span class="bind-now">
							<image style="height: 15px;width: 15px;" src="/static/clock.png" mode=""></image>
							{{ $t("Cooling down") }} {{ time }}
						</span></div>
				</div>
			</div>
		</div>

		<!-- <div class="img-train"></div> -->

		<BottomMenu v-show="navshows" :active="'training'"></BottomMenu>



	</div>
</template>


<script>
import BottomMenu from '../../components/bottom-menu/index.vue'
import { getTraining, getPayType, bindTraining, training } from "../../api/index"
import useBNBTransfer from '@/composables/useBNBTransfer'

const { sendBNB, debugAmountConversion, error, isLoading } = useBNBTransfer()
export default {
	// 在这里注册通用组件
	components: {
		BottomMenu
	},

	data() {
		return {
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


	onShow() {
		if (window.sessionStorage.getItem("account")) {
			this.address = window.sessionStorage.getItem("account")
			this.getTraining()
		}
		if (window.sessionStorage.getItem("invite")) {
			this.bindAddress = window.sessionStorage.getItem("invite");
		}
	},
	methods: {
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
					let data = await getPayType("bind");
					let data1 = data.data.data;
					const transactionHash = await sendBNB(window.sessionStorage.getItem("account"), data1.receiveAddress, data1.receiveAmount)
					if (transactionHash.txHash) {
						let data2 = await bindTraining(this.address, transactionHash.txHash, this.bindAddress, data1.receiveAddress, data1.receiveAmount)
					}
					uni.setStorageSync("down", "asdad")
				}
				if (this.Start) {
					let data = await getPayType("training");
					let data1 = data.data.data
					const transactionHash = await sendBNB(window.sessionStorage.getItem("account"), data1.receiveAddress, data1.receiveAmount)
					if (transactionHash.txHash) {
						let data2 = await training(this.address, transactionHash.txHash, data1.receiveAddress, data1.receiveAmount)
					}
				}
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
	margin: 30px 10px;
	margin-bottom: 0;
	border: 0.5px solid;
	border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.2) 100%);
	color: #FFF;
	padding: 15px 15px;
	font-size: 14px;
	overflow: hidden;
}

.train-points {
	font-size: 16px;
	margin-bottom: 5px;
	display: block;
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
	margin: 15px;
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

.bind-to-superior {
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
	width: 100%;
	background: linear-gradient(180deg, #242FFF 0%, #5BA8FF 100%);
	border: 0.5px solid;
	height: 40px;
	border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.37) 0%, rgba(204, 137, 255, 0.35) 100%);
	box-shadow: 0px -2px 6px 0px #DDE4FF33 inset;
	border-radius: 35px;
	margin: 15px 0;
	line-height: 40px;
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
</style>