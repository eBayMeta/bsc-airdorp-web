<template>
	<view class="container">
		<view class="view">
			<ul>
				<li v-for="language in languages" :key="language.code" @click="changeLanguage(language.code)">
					<img style="width: 30px;" :src="language.flag" alt="" />
					<span>{{language.name}}</span>
					<view class="check" v-if="$i18n.locale === language.code">
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M15.8334 5L7.50008 13.3333L4.16675 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</view>
				</li>
			</ul>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				languages: [
					{
						code: 'zh',
						name: '中文',
						flag: '/static/cha (1).png'
					},
					{
						code: 'en',
						name: 'English',
						flag: '/static/mg.png'
					},
					{
						code: 'jp',
						name: '日本語',
						flag: '/static/ri.png'
					},
					{
						code: 'hy',
						name:"한국어",
						flag: '/static/han.png'
					},
					// {
					// 	code: 'yy',
					// 	name:"粤语",
					// 	flag: '/static/ao.png'
					// },
					{
						code: 'vi',
						name:"Tiếng Việt",
						flag: '/static/yue.png'
					}
				]
			}
		},
		methods: {
			changeLanguage(locale) {
				this.$i18n.locale = locale;
				let message = '';
				switch(locale) {
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
			}
		}
	}
</script>

<style>
	.container{
		background: linear-gradient(180deg, #2132a1, #1a1375);
		height: 100vh;
		overflow: hidden;
	}
	.header {
		padding: 20px 0;
		text-align: center;
	}
	.title {
		color: white;
		font-size: 24px;
		font-weight: bold;
	}
	.view{
		width: 90vw;
		background-color: #ffffff17;
		margin: 15px auto;
		border-radius: 10px;
	}
	.section-title {
		color: white;
		font-size: 16px;
		margin: 0 0 20px 20px;
		display: block;
		opacity: 0.8;
	}
	.view ul{
		list-style: none;
		margin:0;
		padding: 0;
	}
	.view ul li {
		height: 60px;
		line-height:60px;
		padding: 0 20px;
		border-bottom: 1px solid #333;
		color: #FFF;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.view ul li:last-child {
		border-bottom: none;
	}
	.view ul li img {
		width: 30px;
		height: 20px;
		margin-right: 15px;
	}
	.view ul li span {
		flex: 1;
		font-size: 16px;
	}
	.check {
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
