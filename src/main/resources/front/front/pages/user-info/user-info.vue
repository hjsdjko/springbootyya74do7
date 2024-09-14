<template>
<view class="content">
	<view class="box" :style='{"minHeight":"100%","width":"100%","padding":"20rpx 0 120rpx 0","position":"relative","background":" #162A68","height":"auto"}'>
		<view :style='{"padding":"40rpx 20rpx","margin":"20rpx","borderRadius":"20rpx","background":"rgba(255,255,255,0.3)","display":"block","position":"relative","height":"auto"}'>
			<view :style='{"width":"100%","padding":"0 24rpx","margin":"0 0 20rpx 0","background":"#141332","height":"auto"}' v-if="tableName=='yonghu'" class="">
				<view class="title" :style='{"padding":"0 20rpx 0 0","color":"#333","textAlign":"right","display":"none","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx"}'>用户账号</view>
				<input :style='{"border":"0","margin":"0px","color":"#666","flex":"1","background":"#141332","width":"100%","fontSize":"28rpx","height":"88rpx"}' disabled="true"  v-model="ruleForm.yonghuzhanghao" placeholder="用户账号"></input>
			</view>
			<view :style='{"width":"100%","padding":"0 24rpx","margin":"0 0 20rpx 0","background":"#141332","height":"auto"}' v-if="tableName=='yonghu'" class="">
				<view class="title" :style='{"padding":"0 20rpx 0 0","color":"#333","textAlign":"right","display":"none","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx"}'>用户姓名</view>
				<input :style='{"border":"0","margin":"0px","color":"#666","flex":"1","background":"#141332","width":"100%","fontSize":"28rpx","height":"88rpx"}'   v-model="ruleForm.yonghuxingming" placeholder="用户姓名"></input>
			</view>
			<view v-if="tableName=='yonghu'" :style='{"width":"100%","padding":"0 24rpx","margin":"0 0 20rpx 0","background":"#141332","height":"auto"}' class=" select">
				<view :style='{"padding":"0 20rpx 0 0","color":"#333","textAlign":"right","display":"none","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx"}' class="title">性别</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}'  @change="yonghuxingbieChange" :value="yonghuxingbieIndex" :range="yonghuxingbieOptions">
					<view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"28rpx","color":"#666"}' class="uni-input picker-select-input">{{ruleForm.xingbie?ruleForm.xingbie:"请选择性别"}}</view>
				</picker>
			</view>
			<view :style='{"width":"100%","padding":"0 24rpx","margin":"0 0 20rpx 0","background":"#141332","height":"auto"}' v-if="tableName=='yonghu'" class="">
				<view class="title" :style='{"padding":"0 20rpx 0 0","color":"#333","textAlign":"right","display":"none","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx"}'>用户电话</view>
				<input :style='{"border":"0","margin":"0px","color":"#666","flex":"1","background":"#141332","width":"100%","fontSize":"28rpx","height":"88rpx"}'   v-model="ruleForm.yonghudianhua" placeholder="用户电话"></input>
			</view>
			<view :style='{"width":"100%","padding":"0 24rpx","margin":"0 0 20rpx 0","background":"#141332","height":"auto"}' v-if="tableName=='yonghu'" @tap="yonghutouxiangTap" class="">
				<view class="title" :style='{"padding":"0 20rpx 0 0","color":"#333","textAlign":"right","display":"none","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx"}'>头像</view>
				<image :style='{"width":"80rpx","padding":"10rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' v-if="ruleForm.touxiang" style="margin: 0;" class="avator" :src="baseUrl+ruleForm.touxiang" mode=""></image>
				<image :style='{"width":"80rpx","padding":"10rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' v-else class="avator" style="margin: 0;" src="../../static/gen/upload.png" mode=""></image>
			</view>
			<view :style='{"width":"100%","padding":"0 24rpx","margin":"0 0 20rpx 0","background":"#141332","height":"auto"}' v-if="tableName=='yonghu'" class="">
				<view class="title" :style='{"padding":"0 20rpx 0 0","color":"#333","textAlign":"right","display":"none","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx"}'>车牌号</view>
				<input :style='{"border":"0","margin":"0px","color":"#666","flex":"1","background":"#141332","width":"100%","fontSize":"28rpx","height":"88rpx"}'   v-model="ruleForm.chepaihao" placeholder="车牌号"></input>
			</view>
			<view :style='{"width":"100%","padding":"0 24rpx","margin":"0 0 20rpx 0","background":"#141332","height":"auto"}' v-if="tableName=='yonghu'" @tap="yonghuchepaizhaopianTap" class="">
				<view class="title" :style='{"padding":"0 20rpx 0 0","color":"#333","textAlign":"right","display":"none","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx"}'>车牌照片</view>
				<image :style='{"width":"80rpx","padding":"10rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' v-if="ruleForm.chepaizhaopian" style="margin: 0;" class="avator" :src="baseUrl+ruleForm.chepaizhaopian" mode=""></image>
				<image :style='{"width":"80rpx","padding":"10rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' v-else class="avator" style="margin: 0;" src="../../static/gen/upload.png" mode=""></image>
			</view>
			<view :style='{"width":"calc(100% - 40rpx)","margin":"40rpx 0","background":"none","flexDirection":"column","display":"flex","height":"auto"}' class="btn">
				<button @tap="update()" class="cu-btn lg" :style='{"border":"0","padding":"0px","margin":"20rpx 0","color":"rgb(255, 255, 255)","borderRadius":"48rpx","background":"linear-gradient(to right, #2DF1FD, #2148D9)","width":"100%","letterSpacing":"2rpx","lineHeight":"92rpx","fontSize":"36rpx","fontWeight":"900","height":"92rpx"}'>保存</button>
				<button @tap="logout()" class="cu-btn lg" :style='{"border":"0","padding":"0px","margin":"0","color":"rgb(255, 255, 255)","borderRadius":"48rpx","background":"linear-gradient(to right, #2DF1FD, #2148D9)","width":"100%","letterSpacing":"2rpx","lineHeight":"92rpx","fontSize":"36rpx","fontWeight":"900","height":"92rpx"}'>退出登录</button>
			</view>
		</view>
	</view>
</view>
</template>

<script>

    import xiaEditor from '@/components/xia-editor/xia-editor';
    import multipleSelect from "@/components/momo-multipleSelect/momo-multipleSelect";
	export default {
		data() {
			return {
				ruleForm: {
				},
				tableName:"",
				yonghuxingbieOptions: [],
				yonghuxingbieIndex: 0,
			}
		},
        components: {
            multipleSelect,
			xiaEditor
        },
		computed: {
			baseUrl() {
				return this.$base.url;
			}
		},
		async onLoad() {
			let table = uni.getStorageSync("nowTable");
			let that = this
			let res = {}
			this.tableName = table;
			this.getSession()
			// 自定义下拉框值
			if(this.tableName=='yonghu'){
				this.yonghuxingbieOptions = "男,女".split(',');
				this.yonghuxingbieOptions.forEach((item, index) => {
					if(item==this.ruleForm.xingbie) {
						this.yonghuxingbieIndex = index;
					}
				});
			}
			this.styleChange()
            this.$forceUpdate()
		},
		methods: {
			async getSession(){
				let res = await this.$api.session(this.tableName)
				this.ruleForm = res.data;
			},
            // 下拉变化
            yonghuxingbieChange(e) {
                    this.yonghuxingbieIndex = e.target.value
                    this.ruleForm.xingbie = this.yonghuxingbieOptions[this.yonghuxingbieIndex]
            },
			yonghutouxiangTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.touxiang = 'upload/' + res.file;
					_this.$forceUpdate();
				});
			},
			yonghuchepaizhaopianTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.chepaizhaopian = 'upload/' + res.file;
					_this.$forceUpdate();
				});
			},

            toggleTab(str) {
                this.$refs[str].show();
            },

			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('. .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.userInfoForm.list.input.backgroundColor
					// })
				})
			},
			// 获取uuid
			getUUID () {
				return new Date().getTime();
			},
			logout() {
				uni.clearStorageSync()
				this.$utils.jump('../login/login');
			},
			// 注册
			async update() {

				if((!this.ruleForm.yonghuzhanghao) && `yonghu` == this.tableName){
					this.$utils.msg(`用户账号不能为空`);
					return
				}

				if((!this.ruleForm.mima) && `yonghu` == this.tableName){
					this.$utils.msg(`密码不能为空`);
					return
				}



				if(`yonghu` == this.tableName && this.ruleForm.yonghudianhua&&(!this.$validate.isMobile(this.ruleForm.yonghudianhua))){
					this.$utils.msg(`用户电话应输入手机格式`);
					return
				}



				let table = uni.getStorageSync("nowTable");
				await this.$api.update(table, this.ruleForm);
				this.$utils.msgBack('修改成功');;
				this.getSession()
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
