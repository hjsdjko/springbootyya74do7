<template>
<view class="content">
	<view :style='{"minHeight":"100vh","width":"100%","padding":"20rpx 0 120rpx 0","background":" #162A68","height":"auto"}'>
		<form :style='{"padding":"40rpx 20rpx","margin":"0 20rpx","borderRadius":"20rpx","flexWrap":"wrap","background":"rgba(255,255,255,0.3)","display":"flex","height":"auto"}' class="app-update-pv">
			<view :style='{"padding":"0","borderColor":"#ccc","margin":"20rpx auto 20rpx","alignItems":"center","borderWidth":"0","background":"none","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#fff","textAlign":"left"}' class="title">停车场名称</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"#141332","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.tingchechangmingcheng" v-model="ruleForm.tingchechangmingcheng" placeholder="停车场名称"  type="text"></input>
			</view>
			<view :style='{"padding":"0","borderColor":"#ccc","margin":"20rpx auto 20rpx","alignItems":"center","borderWidth":"0","background":"none","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#fff","textAlign":"left"}' class="title">区域</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"#141332","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.quyu" v-model="ruleForm.quyu" placeholder="区域"  type="text"></input>
			</view>
			<view :style='{"padding":"0","borderColor":"#ccc","margin":"20rpx auto 20rpx","alignItems":"center","borderWidth":"0","background":"none","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#fff","textAlign":"left"}' class="title">车位类型</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"#141332","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.cheweileixing" v-model="ruleForm.cheweileixing" placeholder="车位类型"  type="text"></input>
			</view>
			<view :style='{"padding":"0","borderColor":"#ccc","margin":"20rpx auto 20rpx","alignItems":"center","borderWidth":"0","background":"none","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="" @tap="cheweitupianTap">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#fff","textAlign":"left"}' class="title">车位图片</view>
				<image :style='{"width":"50rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"50rpx"}' class="avator" v-if="ruleForm.cheweitupian" :src="baseUrl+ruleForm.cheweitupian.split(',')[0]" mode="aspectFill"></image>
				<image :style='{"width":"50rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"50rpx"}' class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
			</view>
			<view :style='{"padding":"0","borderColor":"#ccc","margin":"20rpx auto 20rpx","alignItems":"center","borderWidth":"0","background":"none","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#fff","textAlign":"left"}' class="title">小时/元</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"#141332","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.shoufeibiaozhun" v-model="ruleForm.shoufeibiaozhun" placeholder="小时/元" type="digit"></input>
			</view>
			<view :style='{"padding":"0","borderColor":"#ccc","margin":"20rpx auto 20rpx","alignItems":"center","borderWidth":"0","background":"none","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class=" select">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#fff","textAlign":"left"}' class="title">车辆状态</view>
				<picker :disabled="ro.cheliangzhuangtai" :style='{"width":"100%","padding":"0 24rpx","borderRadius":"8rpx","flex":"1","background":"#141332","height":"auto"}' @change="cheliangzhuangtaiChange" :value="cheliangzhuangtaiIndex" :range="cheliangzhuangtaiOptions">
					<view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"28rpx","color":"#666"}' class="uni-input">{{ruleForm.cheliangzhuangtai?ruleForm.cheliangzhuangtai:"请选择车辆状态"}}</view>
				</picker>
			</view>
			<view :style='{"padding":"0","borderColor":"#ccc","margin":"20rpx auto 20rpx","alignItems":"center","borderWidth":"0","background":"none","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#fff","textAlign":"left"}' class="title">预约时间</view>
				<input :disabled="ro.yuyueshijian" :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"#141332","fontSize":"28rpx","height":"80rpx"}' v-model="ruleForm.yuyueshijian" placeholder="预约时间" @tap="toggleTab('yuyueshijian')"></input>
			</view>
			<view :style='{"padding":"0","borderColor":"#ccc","margin":"20rpx auto 20rpx","alignItems":"center","borderWidth":"0","background":"none","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#fff","textAlign":"left"}' class="title">用户账号</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"#141332","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.yonghuzhanghao" v-model="ruleForm.yonghuzhanghao" placeholder="用户账号"  type="text"></input>
			</view>
			<view :style='{"padding":"0","borderColor":"#ccc","margin":"20rpx auto 20rpx","alignItems":"center","borderWidth":"0","background":"none","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#fff","textAlign":"left"}' class="title">用户姓名</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"#141332","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.yonghuxingming" v-model="ruleForm.yonghuxingming" placeholder="用户姓名"  type="text"></input>
			</view>
 

			
			<view :style='{"width":"100%","margin":"40rpx 0","flexDirection":"column","display":"flex","height":"inherit"}' class="btn" >
				<button :style='{"border":"0","padding":"0px","margin":"20rpx 0 ","color":"#FFFFFF","borderRadius":"90rpx","background":"linear-gradient(to right, #2DF1FD, #2148D9)","letterSpacing":"2rpx","lineHeight":"90rpx","fontSize":"36rpx","fontWeight":"900","height":"90rpx"}' @tap="onSubmitTap" class="bg-red">提交</button>
			</view>
		</form>

		<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="yuyueshijianConfirm" ref="yuyueshijian" themeColor="#333333"></w-picker>
	</view>
</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
    import xiaEditor from '@/components/xia-editor/xia-editor';
    import multipleSelect from "@/components/momo-multipleSelect/momo-multipleSelect";
	export default {
		data() {
			return {
				cross:'',
				ruleForm: {
				tingchechangmingcheng: '',
				quyu: '',
				cheweileixing: '',
				cheweitupian: '',
				shoufeibiaozhun: '',
			        cheliangzhuangtai: '待入场' ,
				yuyueshijian: '',
				yonghuzhanghao: '',
				yonghuxingming: '',
				},
				cheliangzhuangtaiOptions: [],
				cheliangzhuangtaiIndex: 0,
				// 登录用户信息
				user: {},
                ro:{
                   tingchechangmingcheng : false,
                   quyu : false,
                   cheweileixing : false,
                   cheweitupian : false,
                   shoufeibiaozhun : false,
                   cheliangzhuangtai : false,
                   yuyueshijian : false,
                   yonghuzhanghao : false,
                   yonghuxingming : false,
                },
			}
		},
		components: {
			wPicker,
            xiaEditor,
            multipleSelect,
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},



		},
		async onLoad(options) {
            this.ruleForm.yuyueshijian = this.$utils.getCurDateTime();

			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			
			// ss读取
			this.ruleForm.yonghuzhanghao = this.user.yonghuzhanghao
			this.ro.yonghuzhanghao = true;
			this.ruleForm.yonghuxingming = this.user.yonghuxingming
			this.ro.yonghuxingming = true;

            this.ro.cheliangzhuangtai = true;

			// 自定义下拉框值
			this.cheliangzhuangtaiOptions = "已入场,待入场".split(',')

			// 如果有登录，获取登录后保存的userid
			this.ruleForm.userid = uni.getStorageSync("appUserid")
			if (options.refid) {
				// 如果上一级页面传递了refid，获取改refid数据信息
				this.ruleForm.refid = options.refid;
				this.ruleForm.nickname = uni.getStorageSync("nickname");
			}
			// 如果是更新操作
			if (options.id) {
				this.ruleForm.id = options.id;
				// 获取信息
				res = await this.$api.info(`yuyuetingche`, this.ruleForm.id);
				this.ruleForm = res.data;
			}
			// 跨表
			this.cross = options.cross;
			if(options.cross){
				var obj = uni.getStorageSync('crossObj');
				for (var o in obj){
					if(o=='tingchechangmingcheng'){
					this.ruleForm.tingchechangmingcheng = obj[o];
					this.ro.tingchechangmingcheng = true;
					continue;
					}
					if(o=='quyu'){
					this.ruleForm.quyu = obj[o];
					this.ro.quyu = true;
					continue;
					}
					if(o=='cheweileixing'){
					this.ruleForm.cheweileixing = obj[o];
					this.ro.cheweileixing = true;
					continue;
					}
					if(o=='cheweitupian'){
					this.ruleForm.cheweitupian = obj[o].split(",")[0];
					this.ro.cheweitupian = true;
					continue;
					}
					if(o=='shoufeibiaozhun'){
					this.ruleForm.shoufeibiaozhun = obj[o];
					this.ro.shoufeibiaozhun = true;
					continue;
					}
					if(o=='cheliangzhuangtai'){
					this.ruleForm.cheliangzhuangtai = obj[o];
					this.ro.cheliangzhuangtai = true;
					continue;
					}
					if(o=='yuyueshijian'){
					this.ruleForm.yuyueshijian = obj[o];
					this.ro.yuyueshijian = true;
					continue;
					}
					if(o=='yonghuzhanghao'){
					this.ruleForm.yonghuzhanghao = obj[o];
					this.ro.yonghuzhanghao = true;
					continue;
					}
					if(o=='yonghuxingming'){
					this.ruleForm.yonghuxingming = obj[o];
					this.ro.yonghuxingming = true;
					continue;
					}
				}
			}
			this.styleChange()
            this.$forceUpdate()
			
			if (uni.getStorageSync('raffleType') && uni.getStorageSync('raffleType') != null) {
				uni.removeStorageSync('raffleType')
				setTimeout(() => {
					this.onSubmitTap()
				}, 300)
			}
		},
		methods: {
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.app-update-pv . .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.addUpdateForm.input.content.backgroundColor
					// })
				})
			},

			// 多级联动参数


			// 日长控件选择日期时间
			yuyueshijianConfirm(val) {
				console.log(val)
				this.ruleForm.yuyueshijian = val.result;
				this.$forceUpdate();
			},

			// 下拉变化
			cheliangzhuangtaiChange(e) {
				this.cheliangzhuangtaiIndex = e.target.value
				this.ruleForm.cheliangzhuangtai = this.cheliangzhuangtaiOptions[this.cheliangzhuangtaiIndex]
			},

			cheweitupianTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.cheweitupian = 'upload/' + res.file;
					_this.$forceUpdate();
					_this.$nextTick(()=>{
						_this.styleChange()
					})
				});
			},

			getUUID () {
				return new Date().getTime();
			},
			async onSubmitTap() {
//跨表计算判断
				var obj;
				if(this.ruleForm.shoufeibiaozhun&&(!this.$validate.isNumber(this.ruleForm.shoufeibiaozhun))){
					this.$utils.msg(`小时/元应输入数字`);
					return
				}
				//更新跨表属性
				var crossuserid;
				var crossrefid;
				var crossoptnum;
				if(this.cross){
                    uni.setStorageSync('crossCleanType',true);
					var statusColumnName = uni.getStorageSync('statusColumnName');
					var statusColumnValue = uni.getStorageSync('statusColumnValue');
					if(statusColumnName!='') {
                        if(!obj) {
						    obj = uni.getStorageSync('crossObj');
                        }
						if(!statusColumnName.startsWith("[")) {
							for (var o in obj){
								if(o==statusColumnName){
									obj[o] = statusColumnValue;
								}

							}
							var table = uni.getStorageSync('crossTable');
							await this.$api.update(`${table}`, obj);
						} else {
						       crossuserid=Number(uni.getStorageSync('appUserid'));
						       crossrefid=obj['id'];
						       crossoptnum=uni.getStorageSync('statusColumnName');
						       crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
						}
					}
				}
				if(crossrefid && crossuserid) {
					this.ruleForm.crossuserid=crossuserid;
					this.ruleForm.crossrefid=crossrefid;
					let params = {
						page: 1,
						limit:10,
						crossuserid:crossuserid,
						crossrefid:crossrefid,
					}
					let res = await this.$api.list(`yuyuetingche`, params);
					if (res.data.total >= crossoptnum) {
						this.$utils.msg(uni.getStorageSync('tips'));
                        uni.removeStorageSync('crossCleanType');
						return false;
					} else {
                //跨表计算
						if(this.ruleForm.id){
							await this.$api.update(`yuyuetingche`, this.ruleForm);
						}else{
							await this.$api.add(`yuyuetingche`, this.ruleForm);
						}
						this.$utils.msgBack('提交成功');
					}
				} else {
                //跨表计算
					if(this.ruleForm.id){
						await this.$api.update(`yuyuetingche`, this.ruleForm);
					}else{
						await this.$api.add(`yuyuetingche`, this.ruleForm);
					}
					this.$utils.msgBack('提交成功');
				}
			},
			optionsChange(e) {
				this.index = e.target.value
			},
			bindDateChange(e) {
				this.date = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			toggleTab(str) {
				if(this.ro[str]){
					return false
				}
				this.$refs[str].show();
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
