<template>
<view class="content">
	<view class="box" :style='{"width":"100%","padding":"320rpx 0  0 0","position":"relative","background":"url(http://codegen.caihongy.cn/20231227/c92d1ce6d55e45f68d05adf10a270bdf.gif) no-repeat center top / 100% auto,#fff","height":"inherit"}'>
		<view :style='{"padding":"40rpx 20rpx","backgroundSize":"100%","backgroundRepeat":"no-repeat","backgroundImage":"url(http://codegen.caihongy.cn/20231224/65c44a78b9684f42b8a415dc818a5770.png) ","display":"block","height":"auto"}'>
			<image :style='{"width":"140rpx","margin":"120rpx  0  80rpx 40rpx","borderRadius":"20rpx","display":"block","height":"140rpx"}' src="http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg" mode="aspectFill"></image>
			<view :style='{"width":"100%","margin":"20rpx auto 20rpx","alignItems":"center","display":"flex","height":"auto"}' v-if="tableName=='yonghu'" class="uni-form-item uni-column">
				<view :style='{"padding":"0","color":"#A2A2A2","textAlign":"left","width":"200rpx","lineHeight":"88rpx","fontSize":"28rpx","fontWeight":"400"}' class="label">用户账号：</view>
				<input :style='{"padding":"0","margin":"0","borderColor":"#000000","color":"#A2A2A2","flex":"1","background":"transparent","borderWidth":"0 0 2rpx  0","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","maxWidth":"60%"}'  v-model="ruleForm.yonghuzhanghao"  type="text"  class="uni-input" name="" placeholder="用户账号" />
			</view>
			<view :style='{"width":"100%","margin":"20rpx auto 20rpx","alignItems":"center","display":"flex","height":"auto"}' v-if="tableName=='yonghu'" class="uni-form-item uni-column">
				<view :style='{"padding":"0","color":"#A2A2A2","textAlign":"left","width":"200rpx","lineHeight":"88rpx","fontSize":"28rpx","fontWeight":"400"}' class="label">密码：</view>
				<input :style='{"padding":"0","margin":"0","borderColor":"#000000","color":"#A2A2A2","flex":"1","background":"transparent","borderWidth":"0 0 2rpx  0","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","maxWidth":"60%"}'  v-model="ruleForm.mima" type="password"  class="uni-input" name="" placeholder="密码" />
			</view>
			<view :style='{"width":"100%","margin":"20rpx auto 20rpx","alignItems":"center","display":"flex","height":"auto"}' v-if="tableName=='yonghu'" class="uni-form-item uni-column">
				<view :style='{"padding":"0","color":"#A2A2A2","textAlign":"left","width":"200rpx","lineHeight":"88rpx","fontSize":"28rpx","fontWeight":"400"}' class="label">确认密码：</view>
				<input :style='{"padding":"0","margin":"0","borderColor":"#000000","color":"#A2A2A2","flex":"1","background":"transparent","borderWidth":"0 0 2rpx  0","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","maxWidth":"60%"}' v-model="ruleForm.mima2" type="password" class="uni-input" name="" placeholder="确认密码" />
			</view>
			<view :style='{"width":"100%","margin":"20rpx auto 20rpx","alignItems":"center","display":"flex","height":"auto"}' v-if="tableName=='yonghu'" class="uni-form-item uni-column">
				<view :style='{"padding":"0","color":"#A2A2A2","textAlign":"left","width":"200rpx","lineHeight":"88rpx","fontSize":"28rpx","fontWeight":"400"}' class="label">用户姓名：</view>
				<input :style='{"padding":"0","margin":"0","borderColor":"#000000","color":"#A2A2A2","flex":"1","background":"transparent","borderWidth":"0 0 2rpx  0","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","maxWidth":"60%"}'  v-model="ruleForm.yonghuxingming"  type="text"  class="uni-input" name="" placeholder="用户姓名" />
			</view>
            <view :style='{"width":"100%","margin":"20rpx auto 20rpx","alignItems":"center","display":"flex","height":"auto"}' v-if="tableName=='yonghu'" class="">
				<view :style='{"padding":"0","color":"#A2A2A2","textAlign":"left","width":"200rpx","lineHeight":"88rpx","fontSize":"28rpx","fontWeight":"400"}' class="label">性别：</view>
				<picker :style='{"width":"60%","margin":"0 0 40rpx  20rpx","display":"flex","height":"auto"}' v-if="tableName=='yonghu'"  @change="yonghuxingbieChange" :value="yonghuxingbieIndex" :range="yonghuxingbieOptions">
					<view>
						<view :style='{"margin":"0 0 0  -20rpx ","borderColor":"#000","color":"#A2A2A2","flex":"1","borderWidth":"0 0 2rpx 0","lineHeight":"88rpx","fontSize":"28rpx","borderStyle":"solid","fontWeight":"400"}' class="uni-input">{{ruleForm.xingbie?ruleForm.xingbie:"请选择性别"}}</view>
					</view>
				</picker>
			</view>
			<view :style='{"width":"100%","margin":"20rpx auto 20rpx","alignItems":"center","display":"flex","height":"auto"}' v-if="tableName=='yonghu'" class="uni-form-item uni-column">
				<view :style='{"padding":"0","color":"#A2A2A2","textAlign":"left","width":"200rpx","lineHeight":"88rpx","fontSize":"28rpx","fontWeight":"400"}' class="label">用户电话：</view>
				<input :style='{"padding":"0","margin":"0","borderColor":"#000000","color":"#A2A2A2","flex":"1","background":"transparent","borderWidth":"0 0 2rpx  0","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","maxWidth":"60%"}'  v-model="ruleForm.yonghudianhua"  type="text"  class="uni-input" name="" placeholder="用户电话" />
			</view>
            <view :style='{"width":"100%","margin":"20rpx auto 20rpx","alignItems":"center","display":"flex","height":"auto"}' v-if="tableName=='yonghu'" @tap="yonghutouxiangTap" class="">
				<view :style='{"padding":"0","color":"#A2A2A2","textAlign":"left","width":"200rpx","lineHeight":"88rpx","fontSize":"28rpx","fontWeight":"400"}' class="label">头像：</view>
				<image :style='{"width":"160rpx","borderRadius":"16rpx","display":"block","height":"160rpx"}' v-if="ruleForm.touxiang" class="avator" :src="baseUrl+ruleForm.touxiang" mode=""></image>
                <image :style='{"width":"160rpx","borderRadius":"16rpx","display":"block","height":"160rpx"}' v-else class="avator" src="../../static/gen/upload.png" mode=""></image>
            </view>
			<view :style='{"width":"100%","margin":"20rpx auto 20rpx","alignItems":"center","display":"flex","height":"auto"}' v-if="tableName=='yonghu'" class="uni-form-item uni-column">
				<view :style='{"padding":"0","color":"#A2A2A2","textAlign":"left","width":"200rpx","lineHeight":"88rpx","fontSize":"28rpx","fontWeight":"400"}' class="label">车牌号：</view>
				<input :style='{"padding":"0","margin":"0","borderColor":"#000000","color":"#A2A2A2","flex":"1","background":"transparent","borderWidth":"0 0 2rpx  0","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","maxWidth":"60%"}'  v-model="ruleForm.chepaihao"  type="text"  class="uni-input" name="" placeholder="车牌号" />
			</view>
            <view :style='{"width":"100%","margin":"20rpx auto 20rpx","alignItems":"center","display":"flex","height":"auto"}' v-if="tableName=='yonghu'" @tap="yonghuchepaizhaopianTap" class="">
				<view :style='{"padding":"0","color":"#A2A2A2","textAlign":"left","width":"200rpx","lineHeight":"88rpx","fontSize":"28rpx","fontWeight":"400"}' class="label">车牌照片：</view>
				<image :style='{"width":"160rpx","borderRadius":"16rpx","display":"block","height":"160rpx"}' v-if="ruleForm.chepaizhaopian" class="avator" :src="baseUrl+ruleForm.chepaizhaopian" mode=""></image>
                <image :style='{"width":"160rpx","borderRadius":"16rpx","display":"block","height":"160rpx"}' v-else class="avator" src="../../static/gen/upload.png" mode=""></image>
            </view>
			<button :style='{"border":"0","padding":"0px","margin":"40rpx 0 0 40rpx ","color":"rgb(255, 255, 255)","borderRadius":"90rpx","background":"linear-gradient(to right, #2DF1FD, #2148D9)","width":"85%","letterSpacing":"2rpx","lineHeight":"90rpx","fontSize":"36rpx","fontWeight":"900","height":"90rpx"}' class="btn-submit" @tap="register" type="primary">注册</button>
			
			<view class="idea1" :style='{"width":"100%","background":"red","display":"none","height":"80rpx"}'>idea1</view>
			<view class="idea2" :style='{"width":"100%","background":"red","display":"none","height":"80rpx"}'>idea2</view>
			<view class="idea3" :style='{"width":"100%","background":"red","display":"none","height":"80rpx"}'>idea3</view>
		</view>
	</view>
</view>
</template>

<script>
    import multipleSelect from "@/components/momo-multipleSelect/momo-multipleSelect";
	export default {
		data() {
			return {
                yonghuxingbieOptions: [],
                yonghuxingbieIndex: 0,
				ruleForm: {
                yonghuzhanghao: '',
                mima: '',
                yonghuxingming: '',
                xingbie: '',
                yonghudianhua: '',
                touxiang: '',
                chepaihao: '',
                chepaizhaopian: '',
				},
				tableName:""
			}
		},
        components: {
            multipleSelect
        },
        computed: {
            baseUrl() {
                return this.$base.url;
            },
        },
		async onLoad() {
			let res = [];
			let table = uni.getStorageSync("loginTable");
            this.tableName = table;

                        // 自定义下拉框值
			if(this.tableName=='yonghu'){
                this.yonghuxingbieOptions = "男,女".split(',');
				this.ruleForm.xingbie=this.yonghuxingbieOptions[0]
			}
			
			this.styleChange()
		},
		methods: {

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
					// document.querySelectorAll('.uni-input .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.registerFrom.content.input.backgroundColor
					// })
				})
			},
			// 获取uuid
			getUUID () {
				return new Date().getTime();
			},
			// 注册
			async register() {
				if((!this.ruleForm.yonghuzhanghao) && `yonghu` == this.tableName){
					this.$utils.msg(`用户账号不能为空`);
					return
				}
				if((!this.ruleForm.mima) && `yonghu` == this.tableName){
					this.$utils.msg(`密码不能为空`);
					return
				}
                if(`yonghu` == this.tableName && (this.ruleForm.mima!=this.ruleForm.mima2)){
                    this.$utils.msg(`两次密码输入不一致`);
                    return
                }
				if(`yonghu` == this.tableName && this.ruleForm.yonghudianhua&&(!this.$validate.isMobile(this.ruleForm.yonghudianhua))){
					this.$utils.msg(`用户电话应输入手机格式`);
					return
				}
				await this.$api.register(`${this.tableName}`, this.ruleForm);
				this.$utils.msgBack('注册成功');;
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
