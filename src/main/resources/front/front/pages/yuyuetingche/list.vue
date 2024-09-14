<template>
<!-- category 2 -->
<mescroll-uni @init="mescrollInit" :up="upOption" :down="downOption" @down="downCallback" @up="upCallback">
	<view class="content">
		<view :style='{"padding":"20rpx  0  120rpx 0px","background":"#162A68","flexDirection":"column","display":"flex","width":"100%","position":"relative","height":"auto"}'>
			<view class="cu-bar bg-white search" :style='{"padding":"4rpx","margin":"0  20rpx","borderRadius":"20rpx","background":"rgba(255,255,255,0)","display":"flex","height":"auto"}'>
				<picker v-if="queryList.length>1" mode="selector" :range="queryList" range-key="queryName" :value="queryIndex" @change="queryChange">
					<view :style='{"width":"40rpx","display":"none","height":"auto"}'>
						<text class="icon iconfont icon-jiantou18" :style='{"width":"40rpx","fontSize":"40rpx","lineHeight":"80rpx","color":"#666"}'></text>
					</view>
				</picker>
				<view :style='{"margin":"0 12rpx 0 0","position":"relative","flex":"1","height":"100rpx"}' v-if="queryIndex==0" class="search-form round">
					<text class="icon iconfont icon-fangdajing07" :style='{"color":"#666","left":"0px","textAlign":"center","width":"80rpx","fontSize":"32rpx","lineHeight":"96rpx","position":"absolute","right":"0px"}'></text>
					<input :style='{"border":"0","padding":"12rpx 20rpx 12rpx 80rpx","color":"#666","borderRadius":"40rpx","background":"#fff","width":"100%","lineHeight":"100%","fontSize":"28rpx","height":"100%"}' v-model="searchForm.tingchechangmingcheng" type="text" placeholder="停车场名称" ></input>
				</view>
				<view :style='{"margin":"0 12rpx 0 0","position":"relative","flex":"1","height":"100rpx"}' v-if="queryIndex==1" class="search-form round">
					<text class="icon iconfont icon-fangdajing07" :style='{"color":"#666","left":"0px","textAlign":"center","width":"80rpx","fontSize":"32rpx","lineHeight":"96rpx","position":"absolute","right":"0px"}'></text>
					<input :style='{"border":"0","padding":"12rpx 20rpx 12rpx 80rpx","color":"#666","borderRadius":"40rpx","background":"#fff","width":"100%","lineHeight":"100%","fontSize":"28rpx","height":"100%"}' v-model="searchForm.cheweileixing" type="text" placeholder="车位类型" ></input>
				</view>
				<button :style='{"border":"0","padding":"0px","margin":"0","color":"#ffffff","borderRadius":"40rpx","background":"linear-gradient(to right, #2DF1FD, #2148D9)","width":"156rpx","lineHeight":"100%","fontSize":"32rpx","fontWeight":"400"}' @tap="search" class="cu-btn shadow-blur round">搜索</button>
			</view>
			

			<view :style='{"margin":"20rpx 0 0 37%","flexWrap":"wrap","display":"flex","zIndex":"2"}'>
				<view @click="sortClick('addtime')" :style='{"border":"0","padding":"0 12rpx","margin":"0 8rpx 0 0","outline":"0","borderRadius":"8rpx","background":"none","display":"flex"}'>
					<text :style='{"color":"#fff","lineHeight":"48rpx","fontSize":"24rpx"}'>按日期</text>
					<text v-if="listSort!='addtime'" class="icon iconfont icon-shijian18" :style='{"margin":"0 4rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#fff"}'></text>
					<text v-else-if="listSort=='addtime'&&listOrder=='asc'" class="icon iconfont icon-shijian18" :style='{"margin":"0 4rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#fff"}'></text>
					<text v-else-if="listSort=='addtime'&&listOrder=='desc'" class="icon iconfont icon-shijian18" :style='{"margin":"0 4rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"#fff"}'></text>
				</view>
			</view>
			<view :style='{"padding":"0 20rpx","margin":"20rpx 0","flexWrap":"wrap","background":"#162A68","display":"flex","position":"relative","height":"auto"}'>
			<!-- 样式1 -->
			<view class="uni-product-list" :style='{"padding":"120rpx 20rpx  0 20rpx","margin":"0 ","borderRadius":"16rpx 16rpx","alignItems":"flex-start","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20240110/32684fc98f5f4a79a7b03f8dc479f388.png)  no-repeat  top / 100% auto,rgba(225,225,225,0.5) ","flex":"1","display":"flex","width":"73%","justifyContent":"space-between","height":"auto"}'>
				<view @tap="onDetailTap(product)" class="uni-product" :style='{"margin":"0 0 20rpx","backgroundColor":"#fff","borderRadius":"20rpx","flexWrap":"wrap","background":"linear-gradient(to bottom, #2DF1FD, #2148D9)","display":"flex","width":"48%","overflow-x":"hidden","position":"relative","height":"auto"}' v-for="(product,index) in list" :key="index">
					<view class="uni-product-title" :style='{"padding":"4rpx 20rpx","color":"#FFFFFF","width":"100%","lineHeight":"1.4","fontSize":"32rpx","fontWeight":"400","order":"1"}'>{{product.tingchechangmingcheng}}</view>
					<image :style='{"padding":"0","margin":"20rpx","objectFit":"cover","borderRadius":"20rpx","display":"block","width":"calc(100% - 40rpx)","height":"260rpx","order":"2"}' mode="aspectFill" class="uni-product-image" v-if="preHttp(product.cheweitupian)" :src="product.cheweitupian.split(',')[0]"></image>
					<image :style='{"padding":"0","margin":"20rpx","objectFit":"cover","borderRadius":"20rpx","display":"block","width":"calc(100% - 40rpx)","height":"260rpx","order":"2"}' mode="aspectFill" class="uni-product-image" v-else :src="product.cheweitupian?baseUrl+product.cheweitupian.split(',')[0]:''"></image>
					<view class="uni-product-title" :style='{"padding":"4rpx 20rpx","color":"#FFFFFF","width":"100%","lineHeight":"1.4","fontSize":"32rpx","fontWeight":"400","order":"1"}'>{{product.shoufeibiaozhun}}</view>
					<view class="uni-product-title" :style='{"padding":"4rpx 20rpx","color":"#FFFFFF","width":"100%","lineHeight":"1.4","fontSize":"32rpx","fontWeight":"400","order":"1"}'>车辆状态:{{product.cheliangzhuangtai}}</view>

					<view :style='{"padding":" 10rpx 0 0 20rpx","background":"#fff","display":"flex","flex-grow":"1","order":"4"}'>
						<text class="icon iconfont icon-shijian21" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"18rpx","color":"#666"}'></text>
						<text :style='{"color":"#666","lineHeight":"1.5","fontSize":"18rpx"}'>{{product.addtime}}</text>
					</view>
					<view :style='{"width":"100%","padding":"0 20rpx","background":"#fff","order":"6"}'>
						<text class="icon iconfont icon-geren16" :style='{"margin":"0 4rpx 0 0","lineHeight":"1.5","fontSize":"24rpx","color":"#666"}'></text>
						<text :style='{"color":"#666","lineHeight":"1.5","fontSize":"24rpx"}'>{{product.yonghuzhanghao}}</text>
					</view>
					<!-- #ifdef MP-WEIXIN -->
					<view :style='{"padding":" 10rpx","background":"#fff","display":"flex","width":"100%","justifyContent":"space-between","height":"auto","order":"11"}'>
						<view :style='{"display":"flex"}' v-if="(userid && isAuth('yuyuetingche','修改')) || (!userid && isAuthFront('yuyuetingche','修改'))" @tap.stop.proevent="onUpdate" :data-row="product">
							<text :style='{"margin":"0 8rpx 0 0","fontSize":"20rpx","lineHeight":"1","color":"#666","display":"inline-block"}' class="cuIcon-edit"></text>
							<text :style='{"fontSize":"20rpx","lineHeight":"1","color":"#666","display":"inline-block"}'>修改</text>
						</view>
						<view :style='{"display":"flex"}' v-if="(userid && isAuth('yuyuetingche','删除')) || (!userid && isAuthFront('yuyuetingche','删除'))" @tap.stop.proevent="onDelete" :data-row="product">
							<text :style='{"margin":"0 8rpx 0 0","fontSize":"20rpx","lineHeight":"1","color":"#666","display":"inline-block"}' class="cuIcon-delete"></text>
							<text :style='{"fontSize":"20rpx","lineHeight":"1","color":"#666","display":"inline-block"}'>删除</text>
						</view>
					</view>
					<!-- #endif -->
					<!-- #ifndef MP-WEIXIN -->
					<view :style='{"padding":" 10rpx","background":"#fff","display":"flex","width":"100%","justifyContent":"space-between","height":"auto","order":"11"}'>
						<view :style='{"display":"flex"}' v-if="(userid && isAuth('yuyuetingche','修改')) || (!userid && isAuthFront('yuyuetingche','修改'))" @tap.stop.proevent="onUpdateTap(product)">
							<text :style='{"margin":"0 8rpx 0 0","fontSize":"20rpx","lineHeight":"1","color":"#666","display":"inline-block"}' class="cuIcon-edit"></text>
							<text :style='{"fontSize":"20rpx","lineHeight":"1","color":"#666","display":"inline-block"}'>修改</text>
						</view>
						<view :style='{"display":"flex"}' v-if="(userid && isAuth('yuyuetingche','删除')) || (!userid && isAuthFront('yuyuetingche','删除'))" @tap.stop.proevent="onDeleteTap(product.id)">
							<text :style='{"margin":"0 8rpx 0 0","fontSize":"20rpx","lineHeight":"1","color":"#666","display":"inline-block"}' class="cuIcon-delete"></text>
							<text :style='{"fontSize":"20rpx","lineHeight":"1","color":"#666","display":"inline-block"}'>删除</text>
						</view>
					</view>
					<!-- #endif -->
				</view>
			</view>
			
			
			

			

			</view>
			
			
			
		</view>

		<button :style='{"border":"0","boxShadow":"0 2rpx 12rpx rgba(0,0,0,.3)","color":"rgb(255, 255, 255)","bottom":"40rpx","right":"120rpx","outline":"none","borderRadius":"100%","background":"rgb(255, 170, 51)","width":"80rpx","lineHeight":"80rpx","fontSize":"28rpx","position":"absolute","height":"80rpx","zIndex":"999"}' v-if="userid && isAuth('yuyuetingche','新增')" class="add-btn" @click="onAddTap()">新增</button>
		<button :style='{"border":"0","boxShadow":"0 2rpx 12rpx rgba(0,0,0,.3)","color":"rgb(255, 255, 255)","bottom":"40rpx","right":"120rpx","outline":"none","borderRadius":"100%","background":"rgb(255, 170, 51)","width":"80rpx","lineHeight":"80rpx","fontSize":"28rpx","position":"absolute","height":"80rpx","zIndex":"999"}' v-if="!userid && isAuthFront('yuyuetingche','新增')" class="add-btn" @click="onAddTap()">新增</button>
	</view>
</mescroll-uni>
</template>

<script>
	export default {
		data() {
			return {
				btnColor: ['#409eff','#67c23a','#909399','#e6a23c','#f56c6c','#356c6c','#351c6c','#f093a9','#a7c23a','#104eff','#10441f','#a21233','#503319'],
				queryList:[
					{
						queryName:"停车场名称",
					},
					{
						queryName:"车位类型",
					},
				],
				queryIndex: 0,
				list: [],
				lists: [],
                userid: '',
				mescroll: null, //mescroll实例对象
				downOption: {
					auto: false //是否在初始化后,自动执行下拉回调callback; 默认true
				},
				upOption: {
					noMoreSize: 5, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
					textNoMore: '~ 没有更多了 ~',
				},
				hasNext: true,
				searchForm:{},
				CustomBar: '0',
				listSort: 'id',
				listOrder: 'desc',
			};
		},
		watch: {
		},
		mounted() {
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},
		},
		async onShow() {
			this.btnColor = this.btnColor.sort(()=> {
				return (0.5-Math.random());
			});
			this.hasNext = true
			// 重新加载数据
			if (this.mescroll) this.mescroll.resetUpScroll()
		},
		onLoad(options) {
            if(options.userid) {
                this.userid=options.userid;
            } else {
                this.userid = "";
            }
			this.hasNext = true
			// 重新加载数据
			if (this.mescroll) this.mescroll.resetUpScroll()
		},
		components: {
		},
		methods: {
			uGetRect(selector, all) {
				return new Promise(resolve => {
					uni.createSelectorQuery()
					.in(this)
					[all ? 'selectAll' : 'select'](selector)
					.boundingClientRect(rect => {
						if (all && Array.isArray(rect) && rect.length) {
							resolve(rect);
						}
						if (!all && rect) {
							resolve(rect);
						}
					})
					.exec();
				});
			},
			cloneData(data) {
				return JSON.parse(JSON.stringify(data));
			},
			sortClick(type){
				if(this.listSort==type){
					if(this.listOrder == 'desc'){
						this.listOrder = 'asc'
					}else{
						this.listOrder = 'desc'
					}
				}else{
					this.listSort = type
					this.listOrder = 'desc'
				}
				this.search()
			},
            priceChange(price) {
                return Number(price).toFixed(2);
            },
            preHttp(str) {
                return str && str.substr(0,4)=='http';
            },
			//查询条件切换
			queryChange(e) {
				this.queryIndex=e.detail.value;
				this.searchForm.tingchechangmingcheng="";
				this.searchForm.cheweileixing="";
			},
			//类别搜索
			// mescroll组件初始化的回调,可获取到mescroll对象
			mescrollInit(mescroll) {
				this.mescroll = mescroll;
			},
			/*下拉刷新的回调 */
			downCallback(mescroll) {
				this.hasNext = true
				// 重置分页参数页数为1
				mescroll.resetUpScroll()
			},
			/*上拉加载的回调: mescroll携带page的参数, 其中num:当前页 从1开始, size:每页数据条数,默认10 */
			async upCallback(mescroll) {
				let params = {
					page: mescroll.num,
					limit: mescroll.size
				}
				params['sort'] = this.listSort;
				params['order'] = this.listOrder;

				if(this.searchForm.tingchechangmingcheng){
					params['tingchechangmingcheng'] = '%' + this.searchForm.tingchechangmingcheng + '%'
				}
				if(this.searchForm.cheweileixing){
					params['cheweileixing'] = '%' + this.searchForm.cheweileixing + '%'
				}
                let res = {}
                if(this.userid) {
                    res = await this.$api.page(`yuyuetingche`, params);
                } else {
                    res = await this.$api.list(`yuyuetingche`, params);
                }
				// 如果是第一页数据置空
				if (mescroll.num == 1) this.list = [];
				
				this.list = this.list.concat(res.data.list);
				let length = Math.ceil(this.list.length/6)
				let arr = [];
				for (let i = 0; i<length; i++){
					arr[i] = this.list.slice(i*6, (i+1)*6)
				}
				this.lists = arr
				if (res.data.list.length == 0) this.hasNext = false;
				mescroll.endSuccess(mescroll.size, this.hasNext);
			},
			// 详情
			onDetailTap(item) {
                uni.setStorageSync("useridTag",this.userid);
				this.$utils.jump(`./detail?id=${item.id}&userid=`+this.userid)
			},
			onUpdate(e){
				this.onUpdateTap(e.currentTarget.dataset.row)
			},
			// 修改
			onUpdateTap(row){
                uni.setStorageSync("useridTag",this.userid);
				this.$utils.jump(`./add-or-update?id=${row.id}`)
			},
			// 添加
			onAddTap(){
                uni.setStorageSync("useridTag",this.userid);
				this.$utils.jump(`./add-or-update`)
			},
			onDelete(e){
				this.onDeleteTap(e.currentTarget.dataset.row.id)
			},
			onDeleteTap(id){
				var _this = this;
				uni.showModal({
					title: '提示',
					content: '是否确认删除',
					success: async function(res) {
						if (res.confirm) {
							await _this.$api.del('yuyuetingche', JSON.stringify([id]));
							_this.hasNext = true
							// 重置分页参数页数为1
							_this.search()
						}
					}
				});
			},
			// 搜索
			async search(){
				this.mescroll.num = 1
				let searchForm = {
					page: this.mescroll.num,
					limit: this.mescroll.size
				}
				searchForm['sort'] = this.listSort;
				searchForm['order'] = this.listOrder;

				if(this.searchForm.tingchechangmingcheng){
					searchForm['tingchechangmingcheng'] = '%' + this.searchForm.tingchechangmingcheng + '%'
				}
				if(this.searchForm.cheweileixing){
					searchForm['cheweileixing'] = '%' + this.searchForm.cheweileixing + '%'
				}
                let res = {};
                if(this.userid) {
                    res = await this.$api.page(`yuyuetingche`, searchForm);
                } else {
                    res = await this.$api.list(`yuyuetingche`, searchForm);
                }
				// 如果是第一页数据置空
				if (this.mescroll.num == 1) this.list = [];
				this.list = this.list.concat(res.data.list);
				let length = Math.ceil(this.list.length/6)
				let arr = [];
				for (let i = 0; i<length; i++){
					arr[i] = this.list.slice(i*6, (i+1)*6)
				}
				this.lists = arr
				if (res.data.list.length == 0) this.hasNext = false;
				this.mescroll.endSuccess(this.mescroll.size, this.hasNext);
			}
		}
	};
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
	
	.category-one .tab {
		cursor: pointer;
		padding: 0 20rpx;
		color: #fff;
		background: red;
		display: inline-block;
		width: auto;
		font-size: 28rpx;
		line-height: 80rpx;
	}
	
	.category-one .tab.active {
		cursor: pointer;
		padding: 0 20rpx;
		color: #fff;
		background: #000;
		display: inline-block;
		width: auto;
		font-size: 28rpx;
		line-height: 80rpx;
	}
	
	.category-two .tab {
		cursor: pointer;
		border-radius: 20rpx;
		padding: 0;
		margin: 20rpx 40rpx 0 0;
		color: #000000;
		background: rgba(255,255,255,.5);
		display: inline-block;
		width: 100%;
		font-size: 28rpx;
		line-height: 136rpx;
		text-align: center;
		height: 136rpx;
	}
	
	.category-two .tab.active {
		cursor: pointer;
		border-radius: 20rpx;
		padding: 0;
		color: #fff;
		background: linear-gradient(to right, #2DF1FD, #2148D9);
		display: inline-block;
		width: 100%;
		font-size: 28rpx;
		line-height: 136rpx;
		text-align: center;
		height: 136rpx;
	}
	
	.category-three .tab {
		cursor: pointer;
		padding: 0;
		color: #fff;
		background: burlywood;
		display: inline-block;
		width: 100%;
		font-size: 28rpx;
		line-height: 80rpx;
		text-align: center;
	}
	
	.category-three .tab.active {
		cursor: pointer;
		padding: 0;
		color: #fff;
		background: #000;
		display: inline-block;
		width: 100%;
		font-size: 28rpx;
		line-height: 80rpx;
		text-align: center;
	}
</style>
