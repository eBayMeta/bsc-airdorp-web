<template>
	<div class="main-container">
		<div class="bg">
			<div class="ellipse"></div>
			<div class="ellipse-1"></div>
		</div>
		<div class="flex-column-fc">
			<div class="rectangle">
				<span class="invite-link">{{ $t('Invite Link') }}</span>
				<div @click="copyd" class="rectangle-2">
					<div class="icon-link"></div>
					<span class="xf-fa-db">{{ data.inviteLink }}</span>
					<div class="edit-copy"></div>
				</div>
				<div class="line"></div>
				<div  class="flex-row-fe">
					<span class="direct-invite">{{ $t('Direct invite') }}</span>
					<div  class="iconly-sharp-arrow-up"></div>
				</div>
				<div class="flex-row-c">
					<div class="frame">
						<div class="frame-3">
							<div v-for="( e , i ) in address" :key="i" class="group-4">
								<div class="icon-users-5">
									<div class="vuesax-bold-user-octagon-6"></div>
								</div>
								<span @click="movetoC(e)" class="text-6">{{$t("Details")}}{{">"}}</span>
								<span class="text-7">{{ e.userAddress }}</span>
							</div>

						</div>
					</div>
					<div class="rectangle-1d"></div>
				</div>
			</div>






			<div class="img-level">
				<div class="ellipse-22"></div>
				<div class="ellipse-23"></div>
				<span class="lv-i">Lv {{ numberToRoman(data.contributionLevel) }}</span><span
					class="slash">{{ data.contributionValue || 0 }}/100</span>
					<span class="boost-score">{{ $t("Boost Score")}}</span>
			</div>
			<div class="img-team-right"></div>
			<!-- <div class="img-team-left"></div> -->
		</div>
		<BottomMenu :active="'team'"></BottomMenu>
		<messageModel :infos="infos" @confirm="messageCommit" :address="ttsaddress" :show="messageCommitshow"/>
	</div>
</template>


<script>

import BottomMenu from '../../components/bottom-menu/index.vue'
import { getcontribution, getPushList,getPushCount } from '../../api/index.js'
import { copyText } from '../../composables/useCopyText.js'
import messageModel from "../../components/model.vue"
export default {
	// ✅ 在这里注册通用组件
	components: {
		BottomMenu,
		messageModel,
	},

	data() {
		return {
			messageCommitshow:false,
			ttsaddress:"",
			title: 'Hello',
			data: {},
			infos:"",
			address: [
				
				
			]
		}
	},



	onLoad() {
		if (window.sessionStorage.getItem("account")) {
			this.account = window.sessionStorage.getItem("account")
			this.getcontribution()
		}	
	},
	methods: {
		messageCommit(){
			this.messageCommitshow = false
		},
		async  movetoC(e){
			console.log(e)
			this.ttsaddress= e.oldaddress
			let data = await getPushCount(this.ttsaddress);
			console.log(data.data.data.totalCount)
			this.infos = data.data.data.totalCount
			this.messageCommitshow = true;
		},
		copyd(){
			console.log(this.data.inviteLink)
			copyText(this.data.inviteLink)
			uni.showToast({
				  title: this.$t("messagesuceess"),  
				    icon: 'success',  
				    duration: 2000  
			})
		},
		numberToRoman(num) {
			const map = {
				0: "0",
				1: 'I',
				2: 'II',
				3: 'III',
				4: 'IV',
				5: 'V',
				6: 'VI',
				7: 'VII',
				8: 'VIII',
				9: 'IX',
				10: 'X'
			};
			return map[num] || ''; // 返回对应的罗马数字，如果num不在map中则返回空字符串
		},
		async getcontribution() {
			let data = await getcontribution(this.account);
			this.data = data.data.data
			let str = await getPushList(this.account)
			this.address = str.data.data.content.map(e=>{
				e.oldaddress = e.userAddress;
				e.userAddress = e.userAddress.substr(0,15) + "......" +e.userAddress.substr(e.userAddress.length-8,8) 
				return e;
			})
			// this.address = this.address.map(e=>{
			// 	e.oldaddress = e.userAddress;
			// 	e.userAddress = e.userAddress.substr(0,15) + "......" +e.userAddress.substr(e.userAddress.length-8,8) 
				
			// 	return e;
			// })
		}
	}
}
</script>



<style scoped>
:root {
	--default-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
		Ubuntu, "Helvetica Neue", Helvetica, Arial, "PingFang SC",
		"Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
		"Source Han Sans CN", sans-serif;
}

.main-container {
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

.main-container {
	position: relative;
	width: 100vw;
	height: 115vh;
	margin: 0 auto;
	background: #101c63;
	overflow: hidden;
	padding-bottom: 75px;
}

.bg {
	position: absolute;
	width: 100vw;
	height: 115vh;
	top: 0;
	left: 0;
	background: linear-gradient(180deg, #2132a1, #1a1375);
	overflow: hidden;
}

.ellipse {
	position: absolute;
	width: 317px;
	height: 275px;
	top: -127px;
	left: 171px;
	background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/W3fXjwEZUv.png) no-repeat center;
	background-size: cover;
	filter: blur(70px);
	z-index: 1;
}

.ellipse-1 {
	position: absolute;
	width: 335px;
	height: 153px;
	top: 22px;
	left: -200px;
	background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/78SLtXwi6C.png) no-repeat center;
	background-size: cover;
	filter: blur(60px);
	z-index: 2;
}

.flex-column-fc {
	position: absolute;
	height: 100vh;
	top: 0px;
	right: 0;
	left: 0px;
	z-index: 70;
}

.rectangle {
	position: relative;
	width: 90vw;
	/* height: 285px; */
	margin: 0 auto;
	top: 291px;
	font-size: 0px;
	background: linear-gradient(180deg, #141383 0%, #3F1DB1 100%);

	background-size: cover;
	z-index: 22;
	overflow: visible auto;
	border-radius: 16px;
	backdrop-filter: blur(1px);
}

.invite-link {
	display: block;
	position: relative;
	height: 20px;
	margin: 18px 0 0 16px;
	font-family: PingFang SC, var(--default-font-family);
	font-size: 16px;
	font-weight: 600;
	line-height: 19.6px;
	text-align: left;
	text-transform: capitalize;
	white-space: nowrap;
	background: linear-gradient(179.52deg, #87a9ff, #ffffff);
	z-index: 63;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

.rectangle-2 {
	position: relative;
	width: 90%;
	height: 40px;
	margin: 10px 5%;
	background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/2WzOYBAGco.png) no-repeat center;
	background-size: cover;
	z-index: 64;
	border-radius: 6px;
	margin-bottom: 0;
	    display: flex;
	    align-items: center;
	    justify-content: space-around;
}

.edit-copy {
	/* position: absolute; */
	width: 6.1%;
	height: 52.94%;
	/* top: 23.53%;
	left: 90.51%; */
	background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/hgrofGD0LO.png) no-repeat center;
	background-size: 100% 100%;
	z-index: 67;
	overflow: hidden;
}

.icon-link {
	/* position: absolute; */
	width: 15px;
	height: 15px;
	/* top: 11px;
	left: 10px; */
	background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/d5NOERiDcO.png) no-repeat center;
	background-size: cover;
	z-index: 66;
	overflow: hidden;
}

.xf-fa-db {
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	/* position: absolute; */
	height: 11px;
	top: 12px;
	left: 28px;
	color: rgba(255, 255, 255, 0.6);
	font-family: PT Mono, var(--default-font-family);
	font-size: 10px;
	font-weight: 400;
	line-height: 11px;
	text-align: left;
	text-overflow: ellipsis;
	white-space: nowrap;
	z-index: 65;
	overflow: hidden;
	width: 80%;
	text-transform: ellipsis;
}

.line {
	position: relative;
	width: 90%;
	height: 0.5px;
	margin: 16px auto;
	background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/kWd1if0XzK.png) no-repeat center;
	background-size: cover;
	border: 0.5px solid #FFFFFF1A;
	z-index: 68;
}

.flex-row-fe {
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	width: 90%;
	height: 20px;
	margin: 12px 0 0 16px;
	z-index: 62;
}

.direct-invite {
	flex-shrink: 0;
	position: relative;
	height: 20px;
	font-family: PingFang SC, var(--default-font-family);
	font-size: 16px;
	font-weight: 600;
	line-height: 19.6px;
	text-align: left;
	text-transform: capitalize;
	white-space: nowrap;
	background: linear-gradient(179.52deg, #87a9ff, #ffffff);
	z-index: 61;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

.iconly-sharp-arrow-up {
	flex-shrink: 0;
	position: relative;
	width: 16px;
	height: 16px;
	background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/2JJLs4yoJT.png) no-repeat center;
	background-size: cover;
	z-index: 62;
}

.flex-row-c {
	position: relative;
	width: 90%;
	height: 123px;
	margin: 16px 0 0 16px;
	z-index: 69;
}

.frame {
	position: absolute;
	width: 100%;
	height: 123px;
	top: 0;
	left: 0;
	z-index: 23;
	overflow: hidden;
	overflow-y: auto;
}

.frame-3 {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	flex-wrap: nowrap;
	gap: 12px;
	position: absolute;
	width: 100%;
	height: 184px;
	top: 0;
	left: 0;
	z-index: 24;
}

.group {
	flex-shrink: 0;
	position: relative;
	width: 293px;
	height: 16px;
	z-index: 25;
}

.icon-users {
	position: absolute;
	width: 16px;
	height: 16px;
	top: 0;
	left: 0;
	z-index: 28;
}

.vuesax-bold-user-octagon {
	position: absolute;
	width: 16px;
	height: 16px;
	top: 0;
	left: 0;
	background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/PuXPUWMRRL.png) no-repeat center;
	background-size: cover;
	z-index: 29;
}

.text-4 {
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	position: absolute;
	height: 14px;
	top: 1px;
	left: 195px;
	color: rgba(255, 255, 255, 0.6);
	font-family: PingFang SC, var(--default-font-family);
	font-size: 10px;
	font-weight: 400;
	line-height: 14px;
	text-align: left;
	text-overflow: ellipsis;
	white-space: nowrap;
	z-index: 27;
	overflow: hidden;
}

.text-5 {
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	position: absolute;
	height: 11px;
	top: 2px;
	left: 22px;
	color: #ffffff;
	font-family: PT Mono, var(--default-font-family);
	font-size: 10px;
	font-weight: 400;
	line-height: 11px;
	text-align: left;
	text-overflow: ellipsis;
	white-space: nowrap;
	z-index: 26;
	overflow: hidden;
}

.group-4 {
	flex-shrink: 0;
	position: relative;
	width: 100%;
	height: 16px;
	z-index: 30;
}

.icon-users-5 {
	position: absolute;
	width: 16px;
	height: 16px;
	top: 0;
	left: 0;
	z-index: 33;
}

.vuesax-bold-user-octagon-6 {
	position: absolute;
	width: 16px;
	height: 16px;
	top: 0;
	left: 0;
	background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/woCTekkEoY.png) no-repeat center;
	background-size: cover;
	z-index: 34;
}

.text-6 {
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	height: 14px;
	color: rgba(255, 255, 255, 0.6);
	font-family: PingFang SC, var(--default-font-family);
	font-size: 10px;
	font-weight: 400;
	line-height: 14px;
	text-align: left;
	text-overflow: ellipsis;
	white-space: nowrap;
	z-index: 32;
	overflow: hidden;
	float: right;
}

.text-7 {
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	position: absolute;
	height: 11px;
	top: 2px;
	left: 22px;
	color: #ffffff;
	width: 50%;
	font-family: PT Mono, var(--default-font-family);
	font-size: 10px;
	font-weight: 400;
	line-height: 11px;
	text-align: left;
	text-overflow: ellipsis;
	white-space: nowrap;
	z-index: 31;
	overflow: hidden;
}

.group-7 {
	flex-shrink: 0;
	position: relative;
	width: 293px;
	height: 16px;
	z-index: 35;
}

.icon-users-8 {
	position: absolute;
	width: 16px;
	height: 16px;
	top: 0;
	left: 0;
	z-index: 38;
}

.vuesax-bold-user-octagon-9 {
	position: absolute;
	width: 16px;
	height: 16px;
	top: 0;
	left: 0;
	background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/DyzWnEnsrU.png) no-repeat center;
	background-size: cover;
	z-index: 39;
}

.date-time {
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	position: absolute;
	height: 14px;
	top: 1px;
	left: 195px;
	color: rgba(255, 255, 255, 0.6);
	font-family: PingFang SC, var(--default-font-family);
	font-size: 10px;
	font-weight: 400;
	line-height: 14px;
	text-align: left;
	text-overflow: ellipsis;
	white-space: nowrap;
	z-index: 37;
	overflow: hidden;
}

.random-string {
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	position: absolute;
	height: 11px;
	top: 2px;
	left: 22px;
	color: #ffffff;
	font-family: PT Mono, var(--default-font-family);
	font-size: 10px;
	font-weight: 400;
	line-height: 11px;
	text-align: left;
	text-overflow: ellipsis;
	white-space: nowrap;
	z-index: 36;
	overflow: hidden;
}

.group-a {
	flex-shrink: 0;
	position: relative;
	width: 293px;
	height: 16px;
	z-index: 40;
}

.icon-users-b {
	position: absolute;
	width: 16px;
	height: 16px;
	top: 0;
	left: 0;
	z-index: 43;
}

.vuesax-bold-user-octagon-c {
	position: absolute;
	width: 16px;
	height: 16px;
	top: 0;
	left: 0;
	background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/dZXOFDX1K0.png) no-repeat center;
	background-size: cover;
	z-index: 44;
}

.date-time-d {
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	position: absolute;
	height: 14px;
	top: 1px;
	left: 195px;
	color: rgba(255, 255, 255, 0.6);
	font-family: PingFang SC, var(--default-font-family);
	font-size: 10px;
	font-weight: 400;
	line-height: 14px;
	text-align: left;
	text-overflow: ellipsis;
	white-space: nowrap;
	z-index: 42;
	overflow: hidden;
}

.random-string-e {
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	position: absolute;
	height: 11px;
	top: 2px;
	left: 22px;
	color: #ffffff;
	font-family: PT Mono, var(--default-font-family);
	font-size: 10px;
	font-weight: 400;
	line-height: 11px;
	text-align: left;
	text-overflow: ellipsis;
	white-space: nowrap;
	z-index: 41;
	overflow: hidden;
}

.group-f {
	flex-shrink: 0;
	position: relative;
	width: 293px;
	height: 16px;
	z-index: 45;
}

.icon-users-10 {
	position: absolute;
	width: 16px;
	height: 16px;
	top: 0;
	left: 0;
	z-index: 48;
}

.vuesax-bold-user-octagon-11 {
	position: absolute;
	width: 16px;
	height: 16px;
	top: 0;
	left: 0;
	background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/K6cVGHMd1K.png) no-repeat center;
	background-size: cover;
	z-index: 49;
}

.date-time-12 {
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	position: absolute;
	height: 14px;
	top: 1px;
	left: 195px;
	color: rgba(255, 255, 255, 0.6);
	font-family: PingFang SC, var(--default-font-family);
	font-size: 10px;
	font-weight: 400;
	line-height: 14px;
	text-align: left;
	text-overflow: ellipsis;
	white-space: nowrap;
	z-index: 47;
	overflow: hidden;
}

.random-string-13 {
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	position: absolute;
	height: 11px;
	top: 2px;
	left: 22px;
	color: #ffffff;
	font-family: PT Mono, var(--default-font-family);
	font-size: 10px;
	font-weight: 400;
	line-height: 11px;
	text-align: left;
	text-overflow: ellipsis;
	white-space: nowrap;
	z-index: 46;
	overflow: hidden;
}

.group-14 {
	flex-shrink: 0;
	position: relative;
	width: 293px;
	height: 16px;
	z-index: 50;
}

.icon-users-15 {
	position: absolute;
	width: 16px;
	height: 16px;
	top: 0;
	left: 0;
	z-index: 53;
}

.vuesax-bold-user {
	position: absolute;
	width: 16px;
	height: 16px;
	top: 0;
	left: 0;
	background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/UPtPetcumW.png) no-repeat center;
	background-size: cover;
	z-index: 54;
}

.date-time-16 {
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	position: absolute;
	height: 14px;
	top: 1px;
	left: 195px;
	color: rgba(255, 255, 255, 0.6);
	font-family: PingFang SC, var(--default-font-family);
	font-size: 10px;
	font-weight: 400;
	line-height: 14px;
	text-align: left;
	text-overflow: ellipsis;
	white-space: nowrap;
	z-index: 52;
	overflow: hidden;
}

.random-text {
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	position: absolute;
	height: 11px;
	top: 2px;
	left: 22px;
	color: #ffffff;
	font-family: PT Mono, var(--default-font-family);
	font-size: 10px;
	font-weight: 400;
	line-height: 11px;
	text-align: left;
	text-overflow: ellipsis;
	white-space: nowrap;
	z-index: 51;
	overflow: hidden;
}

.group-17 {
	flex-shrink: 0;
	position: relative;
	width: 293px;
	height: 16px;
	z-index: 55;
}

.icon-users-18 {
	position: absolute;
	width: 16px;
	height: 16px;
	top: 0;
	left: 0;
	z-index: 58;
}

.vuesax-bold-user-19 {
	position: absolute;
	width: 16px;
	height: 16px;
	top: 0;
	left: 0;
	background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/oFyyjyz25W.png) no-repeat center;
	background-size: cover;
	z-index: 59;
}

.date-time-1a {
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	position: absolute;
	height: 14px;
	top: 1px;
	left: 195px;
	color: rgba(255, 255, 255, 0.6);
	font-family: PingFang SC, var(--default-font-family);
	font-size: 10px;
	font-weight: 400;
	line-height: 14px;
	text-align: left;
	text-overflow: ellipsis;
	white-space: nowrap;
	z-index: 57;
	overflow: hidden;
}

.random-text-1b {
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	position: absolute;
	height: 11px;
	top: 2px;
	left: 22px;
	color: #ffffff;
	font-family: PT Mono, var(--default-font-family);
	font-size: 10px;
	font-weight: 400;
	line-height: 11px;
	text-align: left;
	text-overflow: ellipsis;
	white-space: nowrap;
	z-index: 56;
	overflow: hidden;
}

.rectangle-1c {
	position: absolute;
	width: 2px;
	height: 41px;
	top: 0;
	left: 307px;
	background: rgba(255, 255, 255, 0.32);
	z-index: 69;
	border-radius: 1px;
}

.rectangle-1d {
	position: absolute;
	width: 100%;
	height: 43px;
	bottom: 0;
	left: 0;
	background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/cOAAJRELdH.png) no-repeat center;
	background-size: cover;
	z-index: 60;
}

.rectangle-1e {
	position: relative;
	width: 284px;
	height: 64px;
	margin: 55px 0 0 22px;
	background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/S3Vv7j6pni.png) no-repeat center;
	background-size: cover;
	z-index: 4;
	border-radius: 16px;
	backdrop-filter: blur(4px);
}

.img-tab-high {
	position: absolute;
	width: 78px;
	height: 64px;
	top: 0;
	left: 135px;
	background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/9J2aOMABOK.png) no-repeat center;
	background-size: cover;
	z-index: 5;
}

.frame-1f {
	display: flex;
	align-items: center;
	flex-wrap: nowrap;
	gap: 40px;
	position: absolute;
	width: 224px;
	height: 26px;
	top: 20px;
	left: 34px;
	z-index: 6;
}

.icon-tab-default {
	flex-shrink: 0;
	position: relative;
	width: 26px;
	height: 26px;
	z-index: 7;
}

.vuesax-bold-home {
	position: absolute;
	width: 26px;
	height: 26px;
	top: 0;
	left: 0;
	background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/Bk595ox6mW.png) no-repeat center;
	background-size: cover;
	z-index: 8;
}

.icon-tab-default-20 {
	flex-shrink: 0;
	position: relative;
	width: 26px;
	height: 26px;
	z-index: 9;
}

.vuesax-bold-flash-circle {
	position: absolute;
	width: 26px;
	height: 26px;
	top: 0;
	left: 0;
	background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/FrHeoFXKxm.png) no-repeat center;
	background-size: cover;
	z-index: 10;
}

.icon-tab-high {
	flex-shrink: 0;
	position: relative;
	width: 26px;
	height: 26px;
	z-index: 11;
}

.vuesax-bold-profile-user {
	position: absolute;
	width: 26px;
	height: 26px;
	top: 0;
	left: 0;
	background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/ncg3MoVOZG.png) no-repeat center;
	background-size: cover;
	z-index: 12;
}

.icon-tab-default-21 {
	flex-shrink: 0;
	position: relative;
	width: 26px;
	height: 26px;
	z-index: 13;
}

.vuesax-bold-profile-circle {
	position: absolute;
	width: 26px;
	height: 26px;
	top: 0;
	left: 0;
	background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/o1ngYmSVTt.png) no-repeat center;
	background-size: cover;
	z-index: 14;
}

.img-level {
	position: absolute;
	width: 90vw;
	height: 291px;
	top: 0;
	left: 5vw;
	background: url(/static/img_level.png) no-repeat center;
	background-size: cover;
	z-index: 15;
}

.ellipse-22 {
	position: absolute;
	width: 159.776px;
	height: 159.776px;
	top: 50%;
	left: 50%;
	transform: translateY(-50%) translateX(-50%);
	background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/rkGXPmMa8c.png) no-repeat center;
	background-size: cover;
	z-index: 16;
	border-radius: 50%;
}

.ellipse-23 {
	position: absolute;
	width: 86.487px;
	height: 151.748px;
	top: 50%;
	left: 50%;
	transform: translateY(-54%) translateX(-92%);
	background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/VONJpozQig.png) no-repeat center;
	background-size: cover;
	z-index: 17;
}

.lv-i {
	display: flex;
	align-items: flex-start;
	justify-content: center;
	position: absolute;
	height: 38px;
	top: 103.696px;
	left: calc(50% - 32.5px);
	font-family: Aldo the Apache, var(--default-font-family);
	font-size: 43.9990348815918px;
	font-weight: 400;
	line-height: 38px;
	text-align: center;
	white-space: nowrap;
	background: linear-gradient(179.52deg, #9dc3ff, #ffffff);
	z-index: 18;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

.slash {
	display: flex;
	align-items: flex-start;
	justify-content: center;
	position: absolute;
	width: 48px;
	height: 15px;
	top: 150.895px;
	left: calc(50% - 24.43px);
	color: rgba(255, 255, 255, 0.8);
	font-family: PT Mono, var(--default-font-family);
	font-size: 13.19970989227295px;
	font-weight: 400;
	line-height: 14.784px;
	text-align: center;
	white-space: nowrap;
	z-index: 19;
}

.boost-score {
	display: flex;
	align-items: flex-start;
	justify-content: center;
	position: absolute;
	width: 73px;
	height: 14px;
	top: 183px;
	left: calc(50% - 36.53px);
	color: rgba(255, 255, 255, 0.4);
	font-family: PT Mono, var(--default-font-family);
	font-size: 14px;
	font-weight: 400;
	line-height: 12px;
	text-align: center;
	white-space: nowrap;
	z-index: 20;
}

.img-team-right {
	position: absolute;
	width: 42px;
	height: 78px;
	right: 0px;
	top: 5vh;
	background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/ZCpSuMatim.png) no-repeat center;
	background-size: cover;
	z-index: 70;
}

.img-team-left {
	position: absolute;
	width: 30px;
	height: 64px;
	top: 289px;
	left: 0;
	background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/AGYJ2UmPEG.png) no-repeat center;
	background-size: cover;
	z-index: 71;
}
</style>