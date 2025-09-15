<template>

	<div class="rectangle-7">
		<div :style="{right:active=='user'?'0px':active=='team'?'25%':'auto',left:active=='training'?'25%':'auto'}" class="img-tab-high"></div>
		<div class="frame">
			<div class="icon-tab-high">
				<div class="vuesax-bold-home" :class="{'home':active=='home'}" @click="goIndex()"></div>
			</div>
			<div class="icon-tab-default">
				<div class="flash-circle" :class="{'training':active=='training'}"  @click="goTraining()"></div>
			</div>
			<div class="icon-tab-default-8">
				<div class="profile-user-9" :class="{'team':active=='team'}" @click="goTeam()"></div>
			</div>
			<div class="icon-tab-default-a">
				<div class="profile-circle" :class="{'user':active=='user'}" @click="goCenter()"></div>
			</div>
		</div>
	</div>

</template>




<script>
	export default {
		props: ['active'],
		methods: {

			goIndex() {
				uni.navigateTo({
					url: '/pages/index/index'
				})
			},

			goTraining() {
				uni.navigateTo({
					url: '/pages/training/index'
				})
			},

			goTeam() {
				uni.navigateTo({
					url: '/pages/team/index'
				})
			},

			goCenter() {
				uni.navigateTo({
					url: '/pages/center/index'
				})
			}





		}
	}
</script>


<style scoped>
	.rectangle-7 {
		position: fixed;
		width: 284px;
		height: 64px;
		background: #aebfff30;
		background-size: cover;
		z-index: 6;
		border-radius: 16px;
		bottom: 50px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 9999;
	}

	.img-tab-high {
		position: absolute;
		width: 78px;
		height: 64px;
		top: 0;
		right: 7px;
		background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-11/hV3Tg3XkNg.png) no-repeat center;
		background-size: cover;
		z-index: 7;
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
		z-index: 8;
	}

	.icon-tab-high {
		flex-shrink: 0;
		position: relative;
		width: 26px;
		height: 26px;
		z-index: 9;
	}

	.vuesax-bold-home {
		position: absolute;
		width: 26px;
		height: 26px;
		top: 0;
		left: 0;
		background: url(/static/home.png) no-repeat center;
		background-size: cover;
		z-index: 10;
	}

	.icon-tab-default {
		flex-shrink: 0;
		position: relative;
		width: 26px;
		height: 26px;
		z-index: 11;
	}

	.flash-circle {
		position: absolute;
		width: 26px;
		height: 26px;
		top: 0;
		left: 0;
		background: url(/static/Vector.png) no-repeat center;
		background-size: cover;
		z-index: 12;
	}

	.icon-tab-default-8 {
		flex-shrink: 0;
		position: relative;
		width: 26px;
		height: 26px;
		z-index: 13;
	}

	.profile-user-9 {
		position: absolute;
		width: 26px;
		height: 26px;
		top: 0;
		left: 0;
		background: url(/static/kDUO4Qb9dO.svg) no-repeat center;
		background-size: cover;
		z-index: 14;
	}

	.icon-tab-default-a {
		flex-shrink: 0;
		position: relative;
		width: 26px;
		height: 26px;
		z-index: 15;
	}

	.profile-circle {
		position: absolute;
		width: 26px;
		height: 26px;
		top: 0;
		left: 0;
		background: url(/static/WAcW7ax5aG.svg) no-repeat center;
		background-size: cover;
		z-index: 16;
	}
	.user{
		background: url(/static/auser.png) !important;
	}
	.team{
		background: url(/static/Union.png) no-repeat !important;
		background-position: center;
	}
	/* .flash-circle */
	.training{
		background: url(/static/flash-circle.png) no-repeat !important;
		background-position: center;
	}
	.home{
		background: url(/static/ahome.png) no-repeat !important;
		background-position: center;
		    background-size: 26px 26px !important;
	}
</style>