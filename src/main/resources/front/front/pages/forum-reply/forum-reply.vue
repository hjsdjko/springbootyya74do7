<template>
<view class="content">
	<view :style='{"width":"100%","padding":"20rpx 0 120rpx 0","position":"relative","background":" #162A68","height":"100%"}'>
		<form :style='{"padding":"40rpx 20rpx","margin":"0 20rpx","borderRadius":"20rpx","background":"rgba(255,255,255,0.3)","display":"block","position":"relative","height":"auto"}'>
			<view :style='{"width":"100%","padding":"0 24rpx","margin":"0 0 20rpx 0","background":"#141332","height":"auto"}'>
				<xia-editor :style='{"padding":"0","margin":"0px","color":"#666","flex":"1","background":"rgba(255, 255, 255, 0)","lineHeight":"88rpx","height":"auto"}' v-model="content" @editorChange="contentChange" placeholder="回复"></xia-editor>
			</view>
			<view :style='{"width":"100%","padding":"0 20rpx ","margin":"40rpx 0","background":"none","height":"auto"}'>
				<button :style='{"border":"0","padding":"0px","color":"#fff","borderRadius":"50rpx","background":"linear-gradient(to right, #2DF1FD, #2148D9)","width":"100%","letterSpacing":"2rpx","lineHeight":"88rpx","fontSize":"36rpx","fontWeight":"900","height":"88rpx"}' @tap="onReplyTap" class="bg-red margin-tb-sm">提交回复</button>
			</view>
		</form>
	</view>
</view>
</template>

<script>
    import xiaEditor from '@/components/xia-editor/xia-editor'
	export default {
		data() {
			return {
				pid: '',
				content: '',
				username: '',
                avatarurl: '',
				user: {},
			}
		},
        components: {
            xiaEditor
        },
		async onLoad(options) {
			this.pid = options.pid;
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
            if(table == `yonghu`){
                this.username = this.user.yonghuzhanghao
            }
		},
		methods: {
            contentChange(e) {
                this.content = e
            },
			async onReplyTap() {
                this.avatarurl = uni.getStorageSync('headportrait')?uni.getStorageSync('headportrait'):'';
                var sensitiveWords = "";
                var sensitiveWordsArr = [];
                if(sensitiveWords) {
                    sensitiveWordsArr = sensitiveWords.split(",");
                }
                for(var i=0; i<sensitiveWordsArr.length; i++){
                    //全局替换
                    var reg = new RegExp(sensitiveWordsArr[i],"g");
                    //判断内容中是否包括敏感词
                    if (this.content.indexOf(sensitiveWordsArr[i]) > -1) {
                        // 将敏感词替换为 **
                        this.content = this.content.replace(reg,"**");
                    }
                }
				await this.$api.save('forum',{
					parentid: this.pid,
					content: this.content,
                    avatarurl: this.avatarurl,
					username: this.username
				});
				this.$utils.msgBack('回复成功');
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
</style>
