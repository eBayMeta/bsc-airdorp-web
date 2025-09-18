<template>
	<div class="main-container">
		<div class="flex-row-b">
			<div class="ellipse"></div>
			<div class="ellipse-1"></div>
		</div>
		<div class="flex-row-be">
			<span class="xf-fa-db">{{ fromAddress(account) }}</span>
			<div class="edit-copy"></div>
		</div>

		<div class="flex-row-aeb" style="color: #FFF;display: flex;justify-content: center;">			 
			
			<img v-show="userinfo.userType === 'NORMAL_USER'"  src="/static/img_lv1.png"  style="width:78px;height:27px;" alt="lv1"> 
			<img v-show="userinfo.userType === 'SUPER_NODE'"   src="/static/img_lv2.png"  style="width:78px;height:27px;" alt="lv1"> 
			<img v-show="userinfo.userType === 'GENESIS_NODE'" src="/static/img_lv3.png"  style="width:78px;height:27px;" alt="lv1">
			 

		</div>
		<div class="flex-row-b-2">
			<div :class="{ 'active': tipsCtinm == 1 }" @click="tipsCtinm = tipsCtinm == 1 ? 0 : 1" class="rectangle-3">
				<span class="comma">{{ userinfo['AIXA'] }}</span>
				<div class="rectangle-4"></div>
				<span class="usdc">AIXA</span>
			</div>
			<div :class="{ 'active': tipsCtinm == 2 }" @click="tipsCtinm = tipsCtinm == 2 ? 0 : 2" class="rectangle-5">
				<span class="comma-6">{{ userinfo['USDC'] }}</span>
				<div class="rectangle-78"></div>
				<span class="usdc">USDC</span>
			</div>
		</div>
		<div class="img-button">
			<span @click="withdraw" class="withdraw-reward">{{ $t("Withdraw Reward") }}</span>
		</div>
		<span class="traning-rewards">{{ $t("Traning Rewards") }}</span>
		<div class="rectangle-8">
			<div class="rectangle-9"></div>
			<div>
				<span class="number-20304">{{ userinfo.trainingTotalAIXA }}</span><span class="usdc-12">AIXA</span>
			</div>
		</div>
		<span class="team-rewards">{{ $t("Team Rewards") }}</span>
		<div class="rectangle-b">
			<div class="rectangle-c"></div>
			<div>
				<span class="number-20304-d">{{ userinfo.teamTotalAIXA }}</span><span class="usdc-12">AIXA</span>
			</div>
		</div>
		<div class="rectangle-f">
			<div class="rectangle-10"></div>
			<div>
				<span class="comma-11">{{ userinfo.teamTotalUSDC }}</span><span class="usdc-12">USDC</span>
			</div>
		</div>



		<!--   <div class="rectangle-13">
      <div class="img-tab-high"></div>
      <div class="frame">
        <div class="icon-tab-default"><div class="vuesax-bold-home"></div></div>
        <div class="icon-tab-default-14">
          <div class="vuesax-bold-flash-circle"></div>
        </div>
        <div class="icon-tab-default-15">
          <div class="vuesax-bold-profile-user"></div>
        </div>
        <div class="icon-tab-high">
          <div class="vuesax-bold-profile-circle"></div>
        </div>
      </div>
    </div>
	 -->


		<div class="bg">
			<div class="ellipse-16"></div>
			<div class="ellipse-17"></div>
		</div>


		<BottomMenu :active="'user'"></BottomMenu>
		<CustomConfirm :infos="infos" @confirm="confirm" @cancel="cancel" :show="alterCommit" />
		<MessageComponent :infos="infos1" @confirm="confirm1" :show="bindShow" :title="$t('SystemPrompt')" />

	</div>
</template>



<script>
	import BottomMenu from '../../components/bottom-menu/index.vue'
	import {
		getCenter,
		withdraw
	} from "../../api/index"
	import {
		ConnectionCloseError
	} from 'web3'
	import confirmUtil from '@/utils/confirm.js'
	import CustomConfirm from "@/components/CustomConfirm.vue"
	import MessageComponent from "@/components/message.vue"
	export default {
		// ✅ 在这里注册通用组件
		components: {
			BottomMenu,
			CustomConfirm,
			MessageComponent
		},

		data() {
			return {
				infos1: "",
				bindShow: false,
				messageShow: true,
				title: 'Hello',
				account: "",
				active: '',
				tipsCtinm: "",
				alterCommit: false,
				userinfo: {
					teamTotalAIXA: 0,
					teamTotalUSDC: 0,
					trainingTotalAIXA: 0
				},
				infos: ""
			}
		},



		onLoad() {
			if (window.sessionStorage.getItem("account")) {
				this.account = window.sessionStorage.getItem("account")
				this.getUserinfo()
			}
		},
		methods: {
			confirm1() {
				this.bindShow = false
			},
			fromAddress(address) {
				console.log(address)
				if (address) {
					return address.substr(0, 5) + "******" + address.substr(-4, 4)
				} else {
					return "user"
				}
			},
			cancel() {
				this.alterCommit = false;
			},
			async confirm() {
				console.log("confirm")
				this.alterCommit = false;
				if (this.tipsCtinm == 1 || this.tipsCtinm == 2) {
					let data = await withdraw(this.account, this.tipsCtinm == 1 ? 'AIXA' : 'USDC')
					if (data.data.message == "可用余额不足") {
						this.infos1 = this.$t("alter1")
						this.bindShow = true;
					} else {
						this.infos1 = this.$t("alter2")
						this.bindShow = true;
					}
				}
			},
			async withdraw() {
				// console.log(this.$t("tipswithdr") )
				if (!this.tipsCtinm) {
					return
				}
				this.infos = (this.tipsCtinm == 1 ? ('AIXA:' + this.userinfo.AIXA) : ('USDC:' + this.userinfo.USDC))
				this.alterCommit = true;

				// console.log("withdraw")
			},
			async getUserinfo() {
				let data = await getCenter(this.account);
				this.userinfo = data.data.data
				for (let pop of data.data.data.userAccounts) {
					this.userinfo[pop.currency] = pop.balance
				}
				// this.userinfo.userType = "NORMAL_USER"
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
		min-height: 100vh;
		margin: 0 auto;
		background: #101c63;
		overflow: hidden;
		padding-bottom: 150px;
	}

	.flex-row-b {
		position: relative;
		width: 90px;
		height: 90px;
		margin: 6vh auto;
		margin-bottom: 1vh;
		z-index: 16;
		overflow: visible auto;
	}

	.ellipse {
		position: relative;
		width: 82px;
		height: 82px;
		margin: 4px 0 0 4px;
		background: url(/static/tx.png) no-repeat center;
		background-size: cover;
		z-index: 16;
		border-radius: 50%;
	}

	.ellipse-1 {
		position: absolute;
		width: 90px;
		height: 90px;
		top: 0;
		left: 0;
		background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/9pYnH40Bic.png) no-repeat center;
		background-size: cover;
		z-index: 15;
		border-radius: 50%;
	}

	.flex-row-be {
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;
		width: 111px;
		height: 13px;
		margin: 0 auto;
		z-index: 50;
	}

	.xf-fa-db {
		flex-shrink: 0;
		position: relative;
		height: 13px;
		color: rgba(255, 255, 255, 0.6);
		font-family: PT Mono, var(--default-font-family);
		font-size: 12px;
		font-weight: 400;
		line-height: 13px;
		text-align: left;
		text-overflow: ellipsis;
		white-space: nowrap;
		z-index: 49;
		overflow: hidden;
		width: 100px;
	}

	.edit-copy {
		flex-shrink: 0;
		position: relative;
		width: 18px;
		height:18px; 
		/* background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/3ad5WGOwcX.png) no-repeat center; */
		background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/hgrofGD0LO.png) no-repeat center;
		background-size: 100% 100%;
		z-index: 50;
		overflow: hidden;
	}

	.flex-row-aeb {
		position: relative;
		width: 150px;
		height: 22px;
		margin: 7px auto;
		margin-bottom: 18px;
		z-index: 56;
		line-height: 26px;
		font-size: 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.game-level {
		position: absolute;
		width: 22px;
		height: 24px;
		top: 0;
		left: 48px;
		/* background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/Jx55YtBO5A.png) no-repeat center; */
		background-size: cover;
		z-index: 56;
	}

	.user-identity {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		position: absolute;
		height: 22px;
		top: 1px;
		left: 0;
		color: #ffffff;
		font-family: PingFang SC, var(--default-font-family);
		font-size: 11px;
		font-weight: 500;
		line-height: 22px;
		text-align: left;
		text-overflow: ellipsis;
		white-space: nowrap;
		z-index: 51;
		overflow: hidden;
		left: -28px;

	}

	.rectangle {
		position: absolute;
		width: 60px;
		height: 20px;
		top: 2px;
		left: 60px;
		background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/PC5N0Cu2jo.png) no-repeat center;
		background-size: cover;
		z-index: 54;
	}

	.level-i {
		display: flex;
		align-items: flex-start;
		justify-content: center;
		position: absolute;
		width: 38px;
		height: 9px;
		top: calc(50% - 4.36px);
		left: 12px;
		color: #ffffff;
		font-family: Roboto, var(--default-font-family);
		font-size: 11px;
		font-weight: 600;
		line-height: 8.789px;
		text-align: center;
		white-space: nowrap;
		z-index: 55;
	}

	.flex-row-b-2 {
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;
		width: 90vw;
		height: 91px;
		margin: 21px auto;
		z-index: 38;
	}

	.rectangle-3 {
		flex-shrink: 0;
		position: relative;
		width: 43vw;
		height: 91px;
		font-size: 0px;
		background: rgba(255, 255, 255, 0.05);
		z-index: 37;
		border-radius: 16px;
		backdrop-filter: blur(1px);
	}

	.comma {
		display: block;
		position: relative;
		height: 32.56px;
		margin: 44px 0 0 16px;
		color: #ffffff;
		font-family: DIN-Alternate-Widget, var(--default-font-family);
		font-size: 28.15999984741211px;
		font-weight: 700;
		line-height: 32.56px;
		text-align: left;
		white-space: nowrap;
		background: linear-gradient(179.8deg, #b9cdff, #ffffff);
		z-index: 39;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.rectangle-4 {
		position: absolute;
		width: 20px;
		height: 20px;
		top: 15px;
		left: 16px;
		background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/r7a3GK5XEY.png) no-repeat center;
		background-size: cover;
		z-index: 44;
	}

	.AIXA {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		position: absolute;
		height: 16px;
		top: 17px;
		left: 40px;
		color: rgba(255, 255, 255, 0.6);
		font-family: PT Mono, var(--default-font-family);
		font-size: 14px;
		font-weight: 400;
		line-height: 15.68px;
		text-align: left;
		white-space: nowrap;
		z-index: 41;
	}

	.rectangle-5 {
		flex-shrink: 0;
		position: relative;
		width: 43vw;
		height: 91px;
		font-size: 0px;
		background: rgba(255, 255, 255, 0.05);
		z-index: 38;
		border-radius: 16px;
		backdrop-filter: blur(1px);
	}

	.comma-6 {
		display: block;
		position: relative;
		height: 32.56px;
		margin: 44px 0 0 16px;
		color: #ffffff;
		font-family: DIN-Alternate-Widget, var(--default-font-family);
		font-size: 28.15999984741211px;
		font-weight: 700;
		line-height: 32.56px;
		text-align: left;
		white-space: nowrap;
		background: linear-gradient(179.8deg, #b9cdff, #ffffff);
		z-index: 40;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.rectangle-78 {
		position: absolute;
		width: 20px;
		height: 20px;
		top: 15px;
		left: 16px;
		background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/ZoNtdNBFTm.png) no-repeat center;
		background-size: cover;
		z-index: 46;
	}

	.usdc {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		position: absolute;
		height: 16px;
		top: 17px;
		left: 40px;
		color: rgba(255, 255, 255, 0.6);
		font-family: PT Mono, var(--default-font-family);
		font-size: 14px;
		font-weight: 400;
		line-height: 15.68px;
		text-align: left;
		white-space: nowrap;
		z-index: 42;
	}

	.img-button {
		position: relative;
		width: 90vw;
		height: 46px;
		margin: 12px auto;
		background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/pQrt1YE0W0.png) no-repeat center;
		background-size: cover;
		z-index: 47;
		overflow: hidden;
		border-radius: 26px;
	}

	.withdraw-reward {
		display: flex;
		align-items: flex-start;
		justify-content: center;
		position: absolute;
		width: 118px;
		height: 20px;
		top: 13px;
		left: calc(50% - 54.5px);
		color: #ffffff;
		font-family: PingFang SC, var(--default-font-family);
		font-size: 16px;
		font-weight: 600;
		line-height: 19.6px;
		text-align: center;
		white-space: nowrap;
		z-index: 48;
	}

	.traning-rewards {
		display: block;
		position: relative;
		width: 90vw;
		height: 20px;
		margin: 26px auto;
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

	.rectangle-8 {
		position: relative;
		width: 90vw;
		height: 42px;
		margin: 12px auto;
		border: 0.5px solid rgba(255, 255, 255, 0.2);
		z-index: 19;
		border-radius: 21px;
	}

	.rectangle-9 {
		position: absolute;
		width: 22px;
		height: 22px;
		top: 9.5px;
		left: 11.5px;
		background: url(/static/bi.png) no-repeat center;
		background-size: cover;
		z-index: 23;
	}

	.number-20304 {
		display: flex;
		align-items: flex-start;
		justify-content: flex-end;
		position: absolute;
		width: 51px;
		height: 16px;
		top: 12.5px;
		right: 12.5px;
		color: #ffffff;
		font-family: PT Mono, var(--default-font-family);
		font-size: 14px;
		font-weight: 400;
		line-height: 15.68px;
		text-align: right;
		white-space: nowrap;
		z-index: 20;
	}

	.AIXA-a {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		position: absolute;
		height: 16px;
		top: 12.5px;
		left: 39.5px;
		color: rgba(255, 255, 255, 0.6);
		font-family: PT Mono, var(--default-font-family);
		font-size: 14px;
		font-weight: 400;
		line-height: 15.68px;
		text-align: left;
		white-space: nowrap;
		z-index: 21;
	}

	.team-rewards {
		display: block;
		position: relative;
		height: 20px;
		margin: 20px auto;
		width: 90vw;
		font-family: PingFang SC, var(--default-font-family);
		font-size: 18px;
		font-weight: 600;
		line-height: 19.6px;
		text-align: left;
		text-transform: capitalize;
		white-space: nowrap;
		background: linear-gradient(179.52deg, #87a9ff, #ffffff);
		z-index: 36;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.rectangle-b {
		position: relative;
		width: 90vw;
		height: 42px;
		margin: 12px auto;
		border: 0.5px solid rgba(255, 255, 255, 0.2);
		z-index: 25;
		border-radius: 21px;
	}

	.rectangle-c {
		position: absolute;
		width: 22px;
		height: 22px;
		top: 9.5px;
		left: 11.5px;
		background: url(/static/bi.png) no-repeat center;
		background-size: cover;
		z-index: 29;
	}

	.number-20304-d {
		display: flex;
		align-items: flex-start;
		justify-content: flex-end;
		position: absolute;
		width: 51px;
		height: 16px;
		top: 12.5px;
		right: 15.5px;
		color: #ffffff;
		font-family: PT Mono, var(--default-font-family);
		font-size: 14px;
		font-weight: 400;
		line-height: 15.68px;
		text-align: right;
		white-space: nowrap;
		z-index: 26;
	}

	.AIXA-e {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		position: absolute;
		height: 16px;
		top: 12.5px;
		left: 39.5px;
		color: rgba(255, 255, 255, 0.6);
		font-family: PT Mono, var(--default-font-family);
		font-size: 14px;
		font-weight: 400;
		line-height: 15.68px;
		text-align: left;
		white-space: nowrap;
		z-index: 27;
	}

	.rectangle-f {
		position: relative;
		width: 90vw;
		height: 42px;
		margin: 10px auto;
		border: 0.5px solid rgba(255, 255, 255, 0.2);
		z-index: 31;
		border-radius: 21px;
	}

	.rectangle-10 {
		position: absolute;
		width: 22px;
		height: 22px;
		top: 9.5px;
		left: 11.5px;
		background: url(/static/u.png) no-repeat center;
		background-size: cover;
		z-index: 35;
	}

	.comma-11 {
		display: flex;
		align-items: flex-start;
		justify-content: flex-end;
		position: absolute;
		width: 51px;
		height: 16px;
		top: 12.5px;
		right: 12.5px;
		color: #ffffff;
		font-family: PT Mono, var(--default-font-family);
		font-size: 14px;
		font-weight: 400;
		line-height: 15.68px;
		text-align: right;
		white-space: nowrap;
		z-index: 32;
	}

	.usdc-12 {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		position: absolute;
		height: 16px;
		top: 12.5px;
		left: 39.5px;
		color: rgba(255, 255, 255, 0.6);
		font-family: PT Mono, var(--default-font-family);
		font-size: 14px;
		font-weight: 400;
		line-height: 15.68px;
		text-align: left;
		white-space: nowrap;
		z-index: 33;
	}

	.rectangle-13 {
		position: relative;
		width: 284px;
		height: 64px;
		margin: 39px 0 0 46px;
		background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/Y2jxyxR45e.png) no-repeat center;
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
		left: 199px;
		background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/EcGattimix.png) no-repeat center;
		background-size: cover;
		z-index: 14;
	}

	.frame {
		display: flex;
		align-items: center;
		flex-wrap: nowrap;
		gap: 40px;
		position: absolute;
		width: 224px;
		height: 26px;
		top: 20px;
		left: 34px;
		z-index: 5;
	}

	.icon-tab-default {
		flex-shrink: 0;
		position: relative;
		width: 26px;
		height: 26px;
		z-index: 6;
	}

	.vuesax-bold-home {
		position: absolute;
		width: 26px;
		height: 26px;
		top: 0;
		left: 0;
		background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/qTFpEgtSQu.png) no-repeat center;
		background-size: cover;
		z-index: 7;
	}

	.icon-tab-default-14 {
		flex-shrink: 0;
		position: relative;
		width: 26px;
		height: 26px;
		z-index: 8;
	}

	.vuesax-bold-flash-circle {
		position: absolute;
		width: 26px;
		height: 26px;
		top: 0;
		left: 0;
		background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/RtWZL7a9J1.png) no-repeat center;
		background-size: cover;
		z-index: 9;
	}

	.icon-tab-default-15 {
		flex-shrink: 0;
		position: relative;
		width: 26px;
		height: 26px;
		z-index: 10;
	}

	.vuesax-bold-profile-user {
		position: absolute;
		width: 26px;
		height: 26px;
		top: 0;
		left: 0;
		background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/sm5wAqO4SD.png) no-repeat center;
		background-size: cover;
		z-index: 11;
	}

	.icon-tab-high {
		flex-shrink: 0;
		position: relative;
		width: 26px;
		height: 26px;
		z-index: 12;
	}

	.vuesax-bold-profile-circle {
		position: absolute;
		width: 26px;
		height: 26px;
		top: 0;
		left: 0;
		background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/JKueZEWJjp.png) no-repeat center;
		background-size: cover;
		z-index: 13;
	}

	.bg {
		position: absolute;
		width: 100vw;
		/* height: 100vh; */
		top: 0;
		left: 0;
		background: linear-gradient(180deg, #2132a1, #1a1375);
		overflow: hidden;
	}

	.ellipse-16 {
		position: absolute;
		width: 317px;
		height: 275px;
		top: -127px;
		left: 171px;
		background: #1539BE;
		background-size: cover;
		filter: blur(70px);
		z-index: 1;
	}

	.ellipse-17 {
		position: absolute;
		width: 335px;
		height: 153px;
		top: 22px;
		left: -200px;
		background: #4F1EA4;
		background-size: cover;
		filter: blur(60px);
		z-index: 2;
	}

	.active {
		border: 1px solid #FFF;
	}
</style>