<template>
	<div class="main-container">
		<div class="flex-row-fa">
			<div class="logo"></div>
			<div class="rights">
				<div v-show="show" @click="connectWallet" class="rectangle"><span class="connect">Connect</span></div>
				<div @click="islang=!islang" class="vuesax-linear-global">
					<!-- 增加一个语言切换菜单 -->
				</div>
			</div>
		</div>
		<div v-show="islang" class="language-menu" style="position: absolute;right: 25px;top:40px;z-index:30">
			<div v-for="lang in languages" :key="lang.code" @click="changeLanguage(lang.code)">
				{{ lang.name }}
			</div>
		</div><strong></strong>
		<span class="project-name ">
			<!-- {{$t('ProjectName')}} -->
			<img style="width: 30%;" src="/static/LOGOshu.png" alt="" />
		</span>


		<span class="project-introduction" :class="{'zhlacosas':$i18n.locale=='zh'?true:false}">{{$t('titles')}}</span>
		<div class="flex-row-d">
			<div class="rectangle-1">
				<div class="flex-column-f">
					<div class="img-person">
						<div class="profile-user">
							<div style="background-color: #FFF;" class="profile-user-2">
								<svg width="70" height="60" viewBox="0 0 70 60" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M10.0806 30.6377C18.7563 24.8951 32.8044 24.8952 41.4185 30.6377C45.3087 33.2312 47.4393 36.7513 47.4702 40.5488C47.4702 44.3773 45.3087 47.8971 41.4185 50.5215C37.096 53.4237 31.4148 54.875 25.7339 54.875C20.053 54.8749 14.3717 53.4237 10.0493 50.5215C6.15928 47.928 3.99854 44.4079 3.99854 40.6104C3.99868 36.8129 6.15957 33.262 10.0806 30.6377ZM41.1411 26.4395C47.9645 24.4635 56.548 25.791 61.8276 30.0518C64.6679 32.3365 66.1192 35.208 65.8413 38.1719C65.5943 41.1667 63.6792 43.7597 60.4683 45.5195C57.3808 47.2176 53.4906 48.0204 49.6313 47.9277C51.8542 45.921 53.1508 43.4207 53.3979 40.7656C53.7067 36.9372 51.8859 33.2622 48.2427 30.3291C46.1741 28.6928 43.7654 27.3966 41.1411 26.4395ZM25.7339 -6.875C33.8231 -6.875 40.3999 -0.298234 40.3999 7.79102C40.3688 15.7257 34.1631 22.1479 26.2593 22.4258H26.0435C25.8582 22.3949 25.6108 22.3949 25.3638 22.4258C17.2747 22.1479 11.0691 15.7257 11.0688 7.79102C11.0688 -0.298085 17.6448 -6.87476 25.7339 -6.875ZM47.687 -0.484375C53.7384 -1.00913 59.1416 3.49912 59.6665 9.6123C60.1604 15.602 55.8995 20.8504 50.0024 21.5605H49.8481C49.6629 21.5605 49.4771 21.5613 49.3228 21.623C46.3281 21.7773 43.5807 20.8193 41.5122 19.0596C44.6921 16.2191 46.5135 11.9582 46.1431 7.32715C45.9269 4.82646 45.0628 2.54169 43.7661 0.59668C44.9393 0.010148 46.2978 -0.360886 47.687 -0.484375Z"
										fill="url(#paint0_linear_97_518)" />
									<defs>
										<linearGradient id="paint0_linear_97_518" x1="34.9368" y1="-6.875" x2="34.9368"
											y2="54.875" gradientUnits="userSpaceOnUse">
											<stop stop-color="white" stop-opacity="0.15" />
											<stop offset="1" stop-color="white" stop-opacity="0" />
										</linearGradient>
									</defs>
								</svg>

							</div>
						</div>
					</div>
					<!-- <span class="person">人</span> -->
				</div>
				<div class="flex-column-ecc">
					<div class="rectangle-3">

					</div>
					<span class="total-users">{{ $t("hom1") }}</span><span class="asia-pacific"></span><span
						class="text-7">{{data.totalUsers}}
						<i style="font-size: 12px;font-style: normal;">{{$t("person")}}</i>
					</span>
				</div>
			</div>
			<div class="rectangle-4">
				<div class="flex-column-e">
					<div class="img-train">
						<div class="vuesax-bold-flash">
							<div style="background-color: #FFF;" class="vuesax-bold-flash-5">
								<svg width="70" height="60" viewBox="0 0 70 60" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<mask id="mask0_67_2370" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0"
										y="0" width="70" height="60">
										<rect width="70" height="60" fill="#D9D9D9" />
									</mask>
									<g mask="url(#mask0_67_2370)">
										<path
											d="M57.2072 20.8399H47.1647V-2.56009C47.1647 -8.02009 44.2072 -9.12509 40.5997 -5.03009L37.9997 -2.07259L15.9972 22.9524C12.9747 26.3649 14.2422 29.1599 18.7922 29.1599H28.8347V52.5599C28.8347 58.0199 31.7922 59.1249 35.3997 55.0299L37.9997 52.0724L60.0022 27.0474C63.0247 23.6349 61.7572 20.8399 57.2072 20.8399Z"
											fill="url(#paint0_linear_67_2370)" />
									</g>
									<defs>
										<linearGradient id="paint0_linear_67_2370" x1="37.9997" y1="-7.50293"
											x2="37.9997" y2="57.5027" gradientUnits="userSpaceOnUse">
											<stop stop-color="white" stop-opacity="0.15" />
											<stop offset="1" stop-color="white" stop-opacity="0" />
										</linearGradient>
									</defs>
								</svg>

							</div>
						</div>
					</div>
				</div>
				<div class="flex-column-ca">
					<div class="rectangle-6"></div>
					<span class="total-training">{{ $t("hom2") }}</span><span
						class="total-count">{{data.totalTrainingCount}} <i
							style="font-size: 12px;font-style: normal;">{{$t("time")}}</i></span>
				</div>
			</div>
		</div>

		<div class="bg-home">
			<!-- <video object-fit="cover" id="myVideo" :controls="false" src="/static/main-hero.mp4" playsinline="playsinline"
				controlsList="nodownload nofullscreen" autoplay="autoplay" muted="muted" loop="loop"
				style="width: 100vw;height: 100vh;object-fit: fill;" fill></video> -->

		</div>

		<BottomMenu :active="'home'"></BottomMenu>

	</div>


</template>



<script>
	import BottomMenu from '../../components/bottom-menu/index.vue'
	import {
		getList
	} from "../../api/index"
	import {
		detectAndSwitchToBNB
	} from "../../composables/useBNBContent.js"
	import CustomConfirm from "@/components/message.vue"
	export default {
		// ✅ 在这里注册通用组件
		components: {
			BottomMenu,
			CustomConfirm
		},

		data() {
			return {
				islang: false,
				title: 'Hello',
				show: false,
				data: {},
				languages: [{
						code: 'en',
						name: 'English',
						flag: '/static/mg.png'
					},
					{
						code: 'zh',
						name: '中文',
						flag: '/static/cha (1).png'
					},

					{
						code: 'jp',
						name: '日本語',
						flag: '/static/ri.png'
					},
					{
						code: 'hy',
						name: "한국어",
						flag: '/static/han.png'
					},
					// {
					// 	code: 'yy',
					// 	name:"粤语",
					// 	flag: '/static/ao.png'
					// },
					// {
					// 	code: 'vi',
					// 	name:"Tiếng Việt",
					// 	flag: '/static/yue.png'
					// }
				]
			}
		},
		mounted() {
			detectAndSwitchToBNB().then(e => {
				if (!e) {
					uni.showToast({
						text: "请切换到BNB网络"
					})
				}
			})
			window.ethereum.request({
				method: 'wallet_addEthereumChain',
				params: [{
					chainId: '0x38', // BSC主网链ID
					chainName: 'Binance Smart Chain',
					nativeCurrency: {
						name: 'BNB',
						symbol: 'BNB',
						decimals: 18
					},
					rpcUrls: ['https://bsc-dataseed.binance.org/'],
					blockExplorerUrls: ['https://bscscan.com']
				}]
			});

			if (typeof window.ethereum !== 'undefined') {
				this.show = true;
			} else {
				this.show = false;
			}
			this.connectWallet()
		},


		onLoad() {
			console.log(this.$route.query.invite)
			// 检测是否有invite query里面
			if (this.$route.query.invite) {
				window.sessionStorage.setItem("invite", this.$route.query.invite)
			}
			// 直接从地址获取query


		},
		methods: {
			changeLanguage(locale) {
				console.log(locale)
				this.$i18n.locale = locale;
				uni.setStorageSync("locale", locale)
				let message = '';
				switch (locale) {
					case 'zh':
						message = '语言已切换为中文';
						break;
					case 'en':
						message = 'Language switched to English';
						break;
					case 'jp':
						message = '言語が日本語に切り替えられました';
						break;
					case 'hy':
						message = '언어가 한국어로 전환되었습니다';
						break;
					case 'yy':
						message = '語言已切換為粵語';
						break;
					case 'vi':
						message = 'Ngôn ngữ đã chuyển sang tiếng Việt';
						break;
					default:
						message = 'Language switched';
				}
				uni.showToast({
					title: message,
					icon: 'success',
					duration: 1500
				});
				this.islang = false
			},
			async getList() {
				let data = await getList(window.sessionStorage.getItem("account"));
				this.data = data.data.data
			},
			// changeLanguage() {
			// 	uni.navigateTo({
			// 		url:"/pages/useLang/useLang"
			// 	})
			// 	// this.$i18n.locale = this.$i18n.locale == 'en' ? 'zh' : 'en'; // 切换语言
			// },
			async connectWallet() {
				try {
					uni.setStorageSync("isconnrctWallet",
						"true")
					const accounts = await window.ethereum.request({
						method: 'eth_requestAccounts'
					});
					this.accounts = accounts;
					window.sessionStorage.setItem("account", this.accounts)
					this.show = false;
					this.getList()
				} catch (error) {
					console.error('用户拒绝授权:', error);
				}
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
		height: 100vh;
		margin: 0 auto;
		background: #0d104f;
		overflow: hidden;
	}

	.flex-row-fa {
		position: relative;
		margin: 10px;
		z-index: 17;
		height: 32px;
		display: flex;
		justify-content: space-between;
	}

	.rights {
		display: flex;
		align-items: center;
		width: 35vw;
		justify-content: flex-end;
	}

	.logo {
		width: 119px;
		height: 35px;
		/* background: url(/static/logo.png) no-repeat center; */
		background-size: cover;
		z-index: 17;
	}

	.rectangle {
		width: 80px;
		height: 28px;
		border: 0.5px solid #ffffff;
		z-index: 1;
		text-align: center;
		border-radius: 18px;
		margin-right: 15px;
	}

	.connect {
		height: 17px;
		color: #ffffff;
		font-family: PingFang SC, var(--default-font-family);
		font-size: 12px;
		font-weight: 500;
		line-height: 28px;
		text-align: left;
		white-space: nowrap;
		z-index: 4;
		text-align: center;
		/* margin-right: 15px; */
	}

	.vuesax-linear-global {
		width: 22px;
		height: 22px;
		background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/qEzJY6u5x4.png) no-repeat center;
		background-size: cover;
		z-index: 3;
	}

	.project-name {
		position: relative;
		/* display: flex;
		align-items: flex-start;
		justify-content: center; */

		/* width: 285px; */
		/* height: 45px; */
		/* margin: 119px 0 0 45px; */
		/* font-family: AldoApache, var(--default-font-family); */
		font-family: 'Aldo the Apache';
		font-weight: normal;
		font-style: normal;
		font-size: 50px;
		font-weight: 400;
		line-height: 45px;
		text-align: center;
		text-transform: uppercase;
		white-space: nowrap;
		background: linear-gradient(172.16deg, #B9CDFF 6.05%, #FFFFFF 51%);
		z-index: 16;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		left: 0;
		text-align: center;
		width: 100vw;
		display: block;
		top: 3vh;
		color: transparent;
		-webkit-background-clip: text;
	}

	.project-introduction {
		display: flex;
		align-items: flex-start;
		justify-content: center;
		position: relative;
		width: 327px;
		height: 34px;
		color: rgba(255, 255, 255, 0.6);
		font-family: 'Aldo the Apache';
		font-weight: 500;
		line-height: 34px;
		text-align: center;
		z-index: 16;
		top: 5vh;
		left: 50%;
		transform: translateX(-50%);
		font-size: 28px;
		color: #FFF;
	}

	.flex-row-d {
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;
		/* width: 327px; */
		height: 160px;
		/* margin: 161px 0 0 24px; */
		z-index: 23;
		width: 90vw;
		left: 50%;
		top: 35vh;
		transform: translateX(-50%);
	}

	.rectangle-1 {
		flex-shrink: 0;
		position: relative;
		background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/LN0ZgmU140.png) no-repeat center;
		background-size: cover;
		z-index: 19;
		border-radius: 16px;
		backdrop-filter: blur(1px);
		width: calc(45VW - 7.5px);
		height: 160px;
		margin-right: 15px;
	}

	.flex-column-f {
		position: absolute;
		width: 70px;
		top: 0;
		right: 0px;
		z-index: 33;
	}

	.img-person {
		position: relative;
		width: 70px;
		height: 60px;
		margin: 0 0 0 0;
		z-index: 20;
		-webkit-mask-image: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/N7QgngFVdP.png);
		-webkit-mask-size: cover;
	}

	.profile-user {
		position: absolute;
		width: 111.43%;
		height: 130%;
		top: -23.33%;
		left: 0;
		z-index: 21;
	}

	.profile-user-2 {
		position: absolute;
		width: 78px;
		height: 78px;
		top: 0;
		left: 0;
		background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/2jO8rzFeJB.png) no-repeat center;
		background-size: cover;
		z-index: 22;
	}

	.person {
		display: block;
		position: relative;
		height: 15px;
		margin: 59px 0 0 7px;
		color: rgba(255, 255, 255, 0.6);
		font-family: PingFang SC, var(--default-font-family);
		font-size: 11px;
		font-weight: 400;
		line-height: 15px;
		text-align: left;
		white-space: nowrap;
		z-index: 33;
	}

	.flex-column-ecc {
		position: absolute;
		top: 18px;
		left: 15px;
		z-index: 34;
	}

	.rectangle-3 {
		position: relative;
		width: 24px;
		height: 2px;
		margin: 0 0 0 1px;
		background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/JBQq4bcqFW.png) no-repeat center;
		background-size: cover;
		z-index: 29;
	}

	.total-users {
		display: block;
		position: relative;
		height: 20px;
		margin: 10px 0 0 0;
		font-family: PingFang SC, var(--default-font-family);
		font-size: 20px;
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

	.asia-pacific {
		display: block;
		position: relative;
		height: 14px;
		margin: 6px 0 0 0;
		color: rgba(255, 255, 255, 0.5);
		font-family: PingFang SC, var(--default-font-family);
		font-size: 10px;
		font-weight: 400;
		line-height: 14px;
		text-align: left;
		white-space: nowrap;
		z-index: 34;
	}

	.text-7 {
		display: block;
		position: relative;
		height: 35px;
		margin: 32px 0 0 1px;
		color: #ffffff;
		font-family: DIN-Alternate-Widget, var(--default-font-family);
		font-size: 23px;
		font-weight: 700;
		line-height: 35px;
		text-align: left;
		white-space: nowrap;
		background: linear-gradient(179.8deg, #b9cdff, #ffffff);
		z-index: 31;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.rectangle-4 {
		flex-shrink: 0;
		position: relative;
		width: calc(45VW - 7.5px);
		height: 160px;
		background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/LWFekjT84P.png) no-repeat center;
		background-size: cover;
		z-index: 23;
		border-radius: 16px;
		backdrop-filter: blur(1px);
	}

	.flex-column-e {
		position: absolute;
		width: 70px;
		height: 134px;
		top: 0;
		left: 88px;
		z-index: 35;
	}

	.img-train {
		position: relative;
		width: 70px;
		height: 60px;
		margin: 0 0 0 0;
		z-index: 24;
		-webkit-mask-image: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/eUOV5YYpey.png);
		-webkit-mask-size: cover;
		right: 0;
	}

	.vuesax-bold-flash {
		position: absolute;
		width: 111.43%;
		height: 130%;
		top: -23.33%;
		left: -1.43%;
		z-index: 25;
	}

	.vuesax-bold-flash-5 {
		position: relative;
		width: 78px;
		height: 78px;
		margin: 0 0 0 0px;
		background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/hduW7n7uYt.png) no-repeat center;
		background-size: cover;
		z-index: 26;
		right: 0
	}

	.times {
		display: block;
		position: relative;
		height: 15px;
		margin: 59px 0 0 5px;
		color: rgba(255, 255, 255, 0.6);
		font-family: PingFang SC, var(--default-font-family);
		font-size: 11px;
		font-weight: 400;
		line-height: 15px;
		text-align: left;
		white-space: nowrap;
		z-index: 35;
	}

	.flex-column-ca {
		position: absolute;
		height: 119px;
		top: 18px;
		left: 13px;
		z-index: 32;
	}

	.rectangle-6 {
		position: relative;
		width: 24px;
		height: 2px;
		margin: 0 0 0 1px;
		background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/dn3wbc1jL4.png) no-repeat center;
		background-size: cover;
		z-index: 27;
	}

	.total-training {
		display: block;
		position: relative;
		height: 20px;
		margin: 10px 0 0 0;
		font-family: PingFang SC, var(--default-font-family);
		font-size: 20px;
		font-weight: 600;
		line-height: 19.6px;
		text-align: left;
		text-transform: capitalize;
		white-space: nowrap;
		background: linear-gradient(179.52deg, #87a9ff, #ffffff);
		z-index: 30;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.total-count {
		display: block;
		position: relative;
		height: 35px;
		margin: 52px 0 0 1px;
		color: #ffffff;
		font-family: DIN-Alternate-Widget, var(--default-font-family);
		font-size: 23px;
		font-weight: 700;
		line-height: 35px;
		text-align: left;
		white-space: nowrap;
		background: linear-gradient(179.8deg, #b9cdff, #ffffff);
		z-index: 32;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.bg-home {
		position: absolute;
		width: 100vw;
		height: 100vh;
		top: -10vh;
		left: 0;
		background: url(/static/123.webp) no-repeat center;
		background-size: 100% 100%;
		overflow: hidden;
		/* background: url(/static/home.mp4); */
	}

	.language-menu {
		width: 30vw;
		background-color: #FFF;
		position: relative;
	}

	.language-menu {
		border-radius: 10px;
	}

	.language-menu>div {
		height: 30px;
		line-height: 30px;
		text-align: center;
	}

	.zhlacosas {
		content: " ";
		/* 创建一个伪元素 */
		font-family: "DIN-Medium-2", "SimHei", sans-serif;
		/* 中文 */
	}
</style>