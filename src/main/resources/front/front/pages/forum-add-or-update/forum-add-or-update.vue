<template>
<view class="content">
	<view :style='{"width":"100%","padding":"20rpx 0 120rpx 0","position":"relative","background":" #162A68","height":"100%"}'>
		<form :style='{"padding":"40rpx 20rpx","margin":"0 20rpx","borderRadius":"20rpx","background":"rgba(255,255,255,0.3)","display":"block","position":"relative","height":"auto"}'>
			<view :style='{"width":"100%","padding":"0 24rpx","margin":"0 0 20rpx 0","background":"#141332","height":"auto"}'>
				<input :style='{"border":"0","margin":"0px","color":"#666","flex":"1","background":"#141332","fontSize":"28rpx","height":"88rpx"}' v-model="forum.title" placeholder="标题"></input>
			</view>
			<view :style='{"width":"100%","padding":"0 24rpx","margin":"0 0 20rpx 0","background":"#141332","height":"auto"}'>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}' @change="setIsDoneTap" :value="index" :range="options">
					<view class="uni-picker-type" :style='{"width":"100%","lineHeight":"80rpx","fontSize":"28rpx","color":"#666"}'>{{options[index]}}</view>
				</picker>
			</view>
			<view :style='{"width":"100%","padding":"0 24rpx","margin":"0 0 20rpx 0","background":"#141332","height":"auto"}'>
				<xia-editor :style='{"padding":"0","margin":"0px","color":"#666","flex":"1","background":"rgba(255, 255, 255, 0)","lineHeight":"88rpx","height":"auto"}' v-model="forum.content" @editorChange="contentChange" placeholder="内容"></xia-editor>
			</view>
			<view :style='{"width":"100%","padding":"0 20rpx ","margin":"40rpx 0","background":"none","height":"auto"}'>
				<button :style='{"border":"0","padding":"0px","color":"#fff","borderRadius":"50rpx","background":"linear-gradient(to right, #2DF1FD, #2148D9)","width":"100%","letterSpacing":"2rpx","lineHeight":"88rpx","fontSize":"36rpx","fontWeight":"900","height":"88rpx"}' @tap="onSubmitTap" class="bg-red margin-tb-sm">确认提交</button>
			</view>
		</form>
	</view>
</view>
</template>

<script>
    import xiaEditor from '@/components/xia-editor/xia-editor';
	export default {
		data() {
			return {
				forum: {
					content: '',
					id: '',
					title: '',
					isdone: '开放',
					parentid: 0
				},
				index: 0,
				options: ['开放', '关闭'],
				username: '',
				user: {}
			}
		},
        components: {
            xiaEditor
        },
		async onLoad(options) {
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
            if(table == `yonghu`){
                this.username = this.user.yonghuzhanghao
            }
			if (options.id) {
				this.id = options.id;
				let res = await this.$api.info('forum',this.id);
				this.forum = res.data
			}
			this.styleChange()
		},
		methods: {
            contentChange(e) {
                this.forum.content = e
            },
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.my-publish-pv .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.myPublishForm.content.input.backgroundColor
					// })
				})
			},
			async onSubmitTap() {
				this.forum.username = this.username;
				if (this.id) {
					await this.$api.update('forum',this.forum);
				} else {
					await this.$api.save('forum',this.forum);
				}
				this.$utils.msgBack('操作成功');
			},
			setIsDoneTap(e) {
				// this.forum.isdone = e;
				this.index = e.target.value
				this.forum.isdone = this.options[this.index]
			},
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
</style>
