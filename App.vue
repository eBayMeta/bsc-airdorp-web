<script>
	export default {
		
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url(/static/stylesheet.css);
	/*每个页面公共css */
	.uni-modal {
	    position: fixed;
	    z-index: 999;
	    width: 80%;
	    max-width: 300px;
	    top: 50%;
	    left: 50%;
	    transform: translate(-50%, -50%);
	    background-color: #272f58ed;
	    text-align: center;
	    border-radius: 19px;
	    overflow: hidden;
	}
	.uni-modal__title{
		color:#FFF;
	}
	.uni-modal__bd{
		color:#FFF;
	}
	
	/* 全局背景色 */
	.page {
	  background-color: #0d104f;
	}
	
	body {
	  background-color: #0d104f;
	}
</style>
