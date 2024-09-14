
<template>
<view>
<mescroll-uni @init="mescrollInit" :up="upOption" :down="downOption" @down="downCallback" @up="upCallback">
	<view class="content">
		<view class="container" :style='{"width":"100%","background":"#162A68","position":"relative"}'>
						<swiper :style='{"width":"calc(100% - 80rpx)","margin":"0 40rpx 40rpx 40rpx ","borderRadius":"40rpx","background":"none","display":"block","height":"360rpx"}' class="swiper" :indicator-dots='true' :autoplay='true' :circular='true' indicator-active-color='#000000' indicator-color='rgba(0, 0, 0, .3)' :duration='500' :interval='5000' :vertical='false'>
				<swiper-item :style='{"width":"100%","borderRadius":"40rpx","background":"none","height":"360rpx"}' v-for="(swiper,index) in swiperList" :key="index">
					<image :style='{"width":"100%","objectFit":"contain","borderRadius":"40rpx","background":"rgba(255,255,255,0.5)","display":"block","height":"360rpx"}' mode="aspectFill" v-if="swiper.substring(0,4)=='http'" :src="swiper"></image>
					<image :style='{"width":"100%","objectFit":"contain","borderRadius":"40rpx","background":"rgba(255,255,255,0.5)","display":"block","height":"360rpx"}' mode="aspectFill" v-else :src="baseUrl+swiper"></image>
				</swiper-item>
			</swiper>
												            <view :style='{"borderRadius":"40rpx 40rpx 0 0","flexWrap":"wrap","background":"none","display":"flex","height":"auto"}' class="detail-content">

				<view :style='{"padding":"6rpx 20rpx","borderColor":"#ccc","margin":"0 auto","flexWrap":"wrap","borderWidth":"0 0 0px 0","background":"rgba(255,255,255,0.5)","display":"flex","width":"calc(100% - 80rpx)","borderStyle":"solid","height":"auto","order":"1"}' class="detail-list-item title">
					<view :style='{"padding":"0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="lable">停车场名称：</view>
					<view :style='{"padding":"0px","margin":"0 0 0 40rpx","lineHeight":"48rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}' class="text">{{detail.tingchechangmingcheng}}</view>
				</view>
				<view :style='{"padding":"6rpx 20rpx","borderColor":"#ccc","margin":"0 auto","flexWrap":"wrap","borderWidth":"0 0 0px 0","background":"rgba(255,255,255,0.5)","display":"flex","width":"calc(100% - 80rpx)","borderStyle":"solid","height":"auto","order":"1"}' class="detail-list-item title">
					<view :style='{"padding":"0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="lable">小时/元：</view>
					<view :style='{"padding":"0px","margin":"0 0 0 40rpx","lineHeight":"48rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}' class="text">{{detail.shoufeibiaozhun}}</view>
				</view>
				<view :style='{"padding":"6rpx 20rpx","borderColor":"#ccc","margin":"0 auto","flexWrap":"wrap","borderWidth":"0 0 0px 0","background":"rgba(255,255,255,0.5)","display":"flex","width":"calc(100% - 80rpx)","borderStyle":"solid","height":"auto","order":"1"}' class="detail-list-item title">
					<view :style='{"padding":"0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="lable">出场状态：</view>
					<view :style='{"padding":"0px","margin":"0 0 0 40rpx","lineHeight":"48rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}' class="text">{{detail.chuchangzhuangtai}}</view>
				</view>

				<view class="detail-list-item" :style='{"padding":"6rpx 20rpx","borderColor":"#ccc","margin":"0 auto","flexWrap":"wrap","borderWidth":"0 0 0px 0","background":"rgba(255,255,255,0.5)","display":"flex","width":"calc(100% - 80rpx)","borderStyle":"solid","height":"auto","order":"1"}'>
					<view class="lable" :style='{"padding":"0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>区域：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0 0 0 40rpx","lineHeight":"48rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}'>{{detail.quyu}}</view>
				</view>
				<view class="detail-list-item" :style='{"padding":"6rpx 20rpx","borderColor":"#ccc","margin":"0 auto","flexWrap":"wrap","borderWidth":"0 0 0px 0","background":"rgba(255,255,255,0.5)","display":"flex","width":"calc(100% - 80rpx)","borderStyle":"solid","height":"auto","order":"1"}'>
					<view class="lable" :style='{"padding":"0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>车位类型：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0 0 0 40rpx","lineHeight":"48rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}'>{{detail.cheweileixing}}</view>
				</view>
				<view class="detail-list-item" :style='{"padding":"6rpx 20rpx","borderColor":"#ccc","margin":"0 auto","flexWrap":"wrap","borderWidth":"0 0 0px 0","background":"rgba(255,255,255,0.5)","display":"flex","width":"calc(100% - 80rpx)","borderStyle":"solid","height":"auto","order":"1"}'>
					<view class="lable" :style='{"padding":"0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>入场时间：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0 0 0 40rpx","lineHeight":"48rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}'>{{detail.ruchangshijian}}</view>
				</view>
				<view class="detail-list-item" :style='{"padding":"6rpx 20rpx","borderColor":"#ccc","margin":"0 auto","flexWrap":"wrap","borderWidth":"0 0 0px 0","background":"rgba(255,255,255,0.5)","display":"flex","width":"calc(100% - 80rpx)","borderStyle":"solid","height":"auto","order":"1"}'>
					<view class="lable" :style='{"padding":"0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>用户账号：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0 0 0 40rpx","lineHeight":"48rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}'>{{detail.yonghuzhanghao}}</view>
				</view>
				<view class="detail-list-item" :style='{"padding":"6rpx 20rpx","borderColor":"#ccc","margin":"0 auto","flexWrap":"wrap","borderWidth":"0 0 0px 0","background":"rgba(255,255,255,0.5)","display":"flex","width":"calc(100% - 80rpx)","borderStyle":"solid","height":"auto","order":"1"}'>
					<view class="lable" :style='{"padding":"0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>用户姓名：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0 0 0 40rpx","lineHeight":"48rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}'>{{detail.yonghuxingming}}</view>
				</view>
				<view class="detail-list-item" :style='{"padding":"6rpx 20rpx","borderColor":"#ccc","margin":"0 auto","flexWrap":"wrap","borderWidth":"0 0 0px 0","background":"rgba(255,255,255,0.5)","display":"flex","width":"calc(100% - 80rpx)","borderStyle":"solid","height":"auto","order":"1"}'>
					<view class="lable" :style='{"padding":"0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>车牌号：</view>
					<view  class="text" :style='{"padding":"0px","margin":"0 0 0 40rpx","lineHeight":"48rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}'>{{detail.chepaihao}}</view>
				</view>
				<view class="detail-list-item" :style='{"margin":"0 0 24rpx 0","borderColor":"#ccc","borderWidth":"0 0 0px 0","display":"none","width":"100%","borderStyle":"solid","height":"auto","order":"3"}'>
      		        <image :style='{"width":"80rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' v-if="detail.chepaizhaopian" :src="baseUrl+detail.chepaizhaopian"></image>
				</view>








				<view class="bottom-content bg-white tabbar border shop" :style='{"padding":"20rpx 0","margin":"0 auto","flexWrap":"wrap","background":"none","display":"flex","width":"calc(100% - 40rpx)","height":"auto","order":"50"}'>

					<button :style='{"border":"0","padding":"0 20rpx","margin":"0 20rpx 20rpx","color":"rgb(255, 255, 255)","borderRadius":"4rpx","background":"#41c52b","display":"inline-block","width":"auto","fontSize":"28rpx","lineHeight":"80rpx","height":"80rpx"}' v-if="userid&&isAuth('cheliangruchang','出场')" @tap="onAcrossTap('cheliangchuchang','','','chuchangzhuangtai','已出场',chuchangzhuangtaiCrossSelect[0])" class="cu-btn bg-brown round shadow-blur" >出场</button>
					<button :style='{"border":"0","padding":"0 20rpx","margin":"0 20rpx 20rpx","color":"rgb(255, 255, 255)","borderRadius":"4rpx","background":"#41c52b","display":"inline-block","width":"auto","fontSize":"28rpx","lineHeight":"80rpx","height":"80rpx"}' v-if="!userid&&isAuthFront('cheliangruchang','出场')" @tap="onAcrossTap('cheliangchuchang','','','chuchangzhuangtai','已出场',chuchangzhuangtaiCrossSelect[0])" class="cu-btn bg-brown round shadow-blur" >出场</button>
					
				</view>
			</view>
		</view>
	</view>
</mescroll-uni>
</view>
</template>

<script>
	export default {
		data() {
			return {
				btnColor: ['#409eff','#67c23a','#909399','#e6a23c','#f56c6c','#356c6c','#351c6c','#f093a9','#a7c23a','#104eff','#10441f','#a21233','#503319'],
				id: '',
                userid: '',
				detail: {},
				swiperList: [],
				commentList: [],
				mescroll: null, //mescroll实例对象
				downOption: {
					auto: false //是否在初始化后,自动执行下拉回调callback; 默认true
				},
				upOption: {
					noMoreSize: 3, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
					textNoMore: '~ 没有更多了 ~',
				},
				hasNext: true,
				user: {},
                chuchangzhuangtaiCrossSelect:'已出场,待出场'.split(','),
				count: 0,
				timer: null,
				title:'',
			}
		},
		components: {
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},
		},
		async onLoad(options) {
			// #ifdef APP-PLUS
			let page = getCurrentPages()
			this.href = this.baseUrl + 'front/h5/#/' + page[page.length - 1].route
			// #endif
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			this.id = options.id;
            if(options.userid) {
                this.userid = options.userid;
            }
			// 渲染数据
			this.init();
		},
		// #ifdef MP-WEIXIN
		onShareAppMessage(){
			var obj = {
				title: this.title,
				imageUrl: this.swiperList[0]?this.baseUrl + this.swiperList[0]: ''
			}
			return obj
		},
		// #endif
        onUnload() {
            if(this.timer) {
                clearInterval(this.timer);
            }
        },
		async onShow(options) {
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			this.btnColor = this.btnColor.sort(()=> {
				return (0.5-Math.random());
			});
			let crossCleanType = uni.getStorageSync('crossCleanType')
            if(crossCleanType) {
				uni.removeStorageSync('crossCleanType')
                res = await this.$api.info('cheliangruchang', this.id);
                this.detail = res.data;
				this.title = this.detail.tingchechangmingcheng
            }
		},
		destroyed: function() {
			//window.clearInterval(this.inter);
		},
		methods: {
			// 拨打电话
			callClick(row){
				uni.makePhoneCall({
					phoneNumber: row
				})
			},
			// 支付
			onPayTap(){
				if(!this.user){
					return false
				}
				uni.setStorageSync('paytable','cheliangruchang');
				uni.setStorageSync('payObject',this.detail);
				this.$utils.jump('../pay-confirm/pay-confirm?type=1')
			},
            onDetailTap(item) {
                uni.setStorageSync("useridTag",this.userid);
                this.$utils.jump(`./detail?id=${item.id}&userid=`+this.userid)
            },
			// 跨表
			async onAcrossTap(tableName,crossOptAudit,crossOptPay,statusColumnName,tips,statusColumnValue,type=1){
				if(!this.user){
					return false
				}
				uni.setStorageSync('crossTable','cheliangruchang');
				uni.setStorageSync(`crossObj`, this.detail);
				uni.setStorageSync(`statusColumnName`, statusColumnName);
				uni.setStorageSync(`statusColumnValue`, statusColumnValue);
				uni.setStorageSync(`tips`, tips);
				if(statusColumnName!=''&&!statusColumnName.startsWith("[")) {
					var obj = uni.getStorageSync('crossObj');
					for (var o in obj){
						if(o==statusColumnName && obj[o]==statusColumnValue){
							this.$utils.msg(tips);
							return
						}
					}
				}
				this.$utils.jump(`../${tableName}/add-or-update?cross=true`);
			},
			// 获取详情
			async init(){
                if(this.timer) {
                    clearInterval(this.timer);
                }
				let res = await this.$api.info('cheliangruchang', this.id);
				this.detail = res.data;

				this.title = this.detail.tingchechangmingcheng
				// 轮播图片
				this.swiperList = this.detail.cheweitupian ? this.detail.cheweitupian.split(",") : [];
				

			},
			// mescroll组件初始化的回调,可获取到mescroll对象
			mescrollInit(mescroll) {
				this.mescroll = mescroll;
			},

			/*下拉刷新的回调 */
			downCallback(mescroll) {
				this.hasNext = true
				mescroll.resetUpScroll()
			},

			/*上拉加载的回调: mescroll携带page的参数, 其中num:当前页 从1开始, size:每页数据条数,默认10 */
			async upCallback(mescroll) {
				mescroll.endSuccess(mescroll.size, this.hasNext);

            },



			onChatTap() {
				this.$utils.jump('../chat/chat')
			},
			// 下载
			download(url){
				let _this = this;
				url=_this.$base.url +  url;
				uni.downloadFile({
					url: url,
					success: (res) => {
						if (res.statusCode === 200) {
							_this.$utils.msg('下载成功');
							 window.open(url);
						}
					}
				});
			},
			//
			onCartTabTap() {
				this.$utils.tab('../shop-cart/shop-cart')
			},
		}
	}
</script>

<style lang="scss">
	page {
	  --animate-duration: 1s;
	  --animate-delay: 1s;
	  --animate-repeat: 1;
	}
	
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
	
	.seat-list {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		background: #FFFFFF;
		margin: 20upx;
		border-radius: 20upx;
		padding: 20upx;
		font-size: 30upx;
		.seat-item {
			width: 33.33%;
			display: flex;
			align-items: center;
			flex-direction: column;
			margin-bottom: 20upx;
	
			.seat-icon {
				width: 50upx;
				height: 50upx;
				margin-bottom: 10upx;
			}
		}
	}
	
	audio {
		display: flex;
		flex-direction: column;
	}
	
	.audio /deep/ .uni-audio-default {
		width: inherit;
	}
	

</style>
