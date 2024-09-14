<template>
	<div class="navbar">
		<div class="title" :style='{"display":"block","order":"2"}'>
			<el-image v-if="false" class="title-img" :style='{"width":"44px","objectFit":"cover","borderRadius":"100%","float":"left","height":"44px"}' src="http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg" fit="cover" />
			<span class="title-name" :style='{"padding":"0 0 0 12px","lineHeight":"auto","fontSize":"20px","color":"inherit","float":"left","fontWeight":"600"}'>{{this.$project.projectName}}</span>
		</div>
		<!--
		<div class="right" :style='{"position":"absolute","right":"20px","top":"8px","display":"flex"}'>
			<div :style='{"cursor":"pointer","margin":"0 5px","lineHeight":"44px","color":"#333"}' class="nickname">{{this.$storage.get('role')}} {{this.$storage.get('adminName')}}</div>
			<div :style='{"cursor":"pointer","margin":"0 5px","lineHeight":"44px","color":"#666"}' class="logout" @click="onLogout">退出登录</div>
		</div>
		-->
		
		<el-dropdown @command="handleCommand" trigger="click" :style='{"fontSize":"inherit","position":"absolute","right":"30px","color":"inherit","display":"inline-block"}'>
		  <div class="el-dropdown-link" :style='{"alignItems":"center","display":"flex"}'>
		    <el-image v-if="user" :style='{"width":"32px","margin":"0 10px","objectFit":"cover","borderRadius":"100%","display":"inline-block","height":"32px"}' :src="avatar?this.$base.url + avatar : require('@/assets/img/avator.png')" fit="cover"></el-image>
		    <span :style='{"color":"#2bb3c0","lineHeight":"32px","fontSize":"inherit"}'>{{this.$storage.get('adminName')}}</span>
		    <span class="icon iconfont icon-xiala" :style='{"color":"#2bb3c0","margin":"0 0 0 5px","fontSize":"14px"}'></span>
		  </div>
		  <el-dropdown-menu class="top-el-dropdown-menu" slot="dropdown">
		    <el-dropdown-item class="item1" :command="''">首页</el-dropdown-item>
		    <el-dropdown-item class="item2" :command="'center'">我的信息</el-dropdown-item>
		    <el-dropdown-item class="item4" :command="'logout'">退出登录</el-dropdown-item>
		  </el-dropdown-menu>
		</el-dropdown>
		<el-dialog :title="remindForm.title" :append-to-body="true" :visible.sync="remindVisibie" width="60%">
			<div v-html="remindForm.content"></div>
		</el-dialog>
		
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				dialogVisible: false,
				ruleForm: {},
				user: null,
				remindVisibie: false,
				remindForm: {},
				timesAll: null,
				timesOnce: null,
			};
		},
		created() {
			if (this.$storage.get('sessionTable') != 'users') {
				this.getRecommendAll()
				this.getRecommendOnce()
			}
		},
		computed: {
			avatar(){
				return this.$storage.get('headportrait')?this.$storage.get('headportrait'):''
			}
		},
		destroyed() {
			if (this.$storage.get('sessionTable') != 'users') {
				clearTimeout(this.timesAll)
				clearTimeout(this.timesOnce)
			}
		},
		mounted() {
			let sessionTable = this.$storage.get("sessionTable")
			this.$http({
				url: sessionTable + '/session',
				method: "get"
			}).then(({
				data
			}) => {
				if (data && data.code === 0) {
					if(sessionTable == 'yonghu') {
						this.$storage.set('headportrait',data.data.touxiang)
					}
					if(sessionTable == 'yonghu') {
						this.$storage.set('headportrait',data.data.chepaizhaopian)
					}
					if(sessionTable == 'users') {
						this.$storage.set('headportrait',data.data.image)
					}
					this.$storage.set('userForm',JSON.stringify(data.data))
					this.user = data.data;
					this.$storage.set('userid',data.data.id);
				} else {
					let message = this.$message
					message.error(data.msg);
				}
			});
		},
		methods: {
			compareDate(s1, s2) {
				return ((new Date(s1.replace(/-/g, "\/"))) > (new Date(s2.replace(/-/g, "\/"))));
			},
			async getRecommendAll() {
				let that = this
				this.$http({
					url: 'popupremind/list',
					method: 'get',
					params: {
						type: '全局'
					}
				}).then(async res => {
					if (res.data && res.data.code == 0) {
						for (let x in res.data.data.list) {
							if (this.compareDate(this.getCurDateTime(), res.data.data.list[x]
								.remindtime)) {
								await this.$http({
									url: 'storeup/page',
									method: 'get',
									params: {
										refid: res.data.data.list[x].id,
										tablename: 'popupremind',
										type: '61',
									}
								}).then(obj => {
									if (obj.data && obj.data.code == 0) {
										if (!obj.data.data.list.length) {
											this.$notify({
												title: res.data.data.list[x].title,
												dangerouslyUseHTMLString: true,
												message: res.data.data.list[x].brief,
												duration: 0,
												position: 'bottom-right',
												onClick() {
													that.remindForm = res.data.data.list[x]
													that.remindVisibie = true
												}
											})
											this.$http({
												url: 'storeup/add',
												method: 'post',
												data: {
													userid: this.$storage.get('userid'),
													refid: res.data.data.list[x].id,
													tablename: 'popupremind',
													name: res.data.data.list[x].title,
													type: '61',
												}
											})
										}
									}
								})
							}
						}
						this.timesAll = setTimeout(() => {
							this.getRecommendAll()
						}, 10000)
					}
				})
			},
			async getRecommendOnce() {
				let that = this
				this.$http({
					url: 'popupremind/page',
					method: 'get',
					params: {
						type: '个人'
					}
				}).then(async res => {
					if (res.data && res.data.code == 0) {
						for (let x in res.data.data.list) {
							if (this.compareDate(this.getCurDateTime(), res.data.data.list[x]
								.remindtime)) {
								await this.$http({
									url: 'storeup/page',
									method: 'get',
									params: {
										refid: res.data.data.list[x].id,
										tablename: 'popupremind',
										type: '61',
									}
								}).then(obj => {
									if (obj.data && obj.data.code == 0) {
										if (!obj.data.data.list.length) {
											this.$notify({
												title: res.data.data.list[x].title,
												dangerouslyUseHTMLString: true,
												message: res.data.data.list[x].brief,
												duration: 0,
												position: 'top-right',
												onClick() {
													that.remindForm = res.data.data.list[x]
													that.remindVisibie = true
												}
											})
											this.$http({
												url: 'storeup/add',
												method: 'post',
												data: {
													userid: this.$storage.get('userid'),
													refid: res.data.data.list[x].id,
													tablename: 'popupremind',
													name: res.data.data.list[x].title,
													type: '61',
												}
											})
										}
									}
								})
							}
						}
						this.timesOnce = setTimeout(() => {
							this.getRecommendOnce()
						}, 10000)
					}
				})
			},
			handleCommand(name) {
				if (name == 'front') {
					this.onIndexTap()
				} else if (name == 'logout') {
					this.onLogout()
				} else if (name == 'board'){
					this.toBoard()
				} else if (name == 'backUp'){
					this.backUp()
				} else {
					let router = this.$router
					name = '/'+name
					router.push(name)
				}
			},
			
			onLogout() {
				let storage = this.$storage
				let router = this.$router
				storage.clear()
				this.$store.dispatch('tagsView/delAllViews')
				router.replace({
					name: "login"
				});
			},
			onIndexTap(){
				window.location.href = `${this.$base.indexUrl}`
			},
		}
	};
</script>


<style lang="scss" scoped>
	.top-el-dropdown-menu {
				border: 1px solid #EBEEF5;
				border-radius: 4px;
				padding: 10px 0;
				box-shadow: 0 0px 0px 0 rgba(0,0,0,.1);
				margin: 18px 0;
				background: #FFF;
			}
	
	.top-el-dropdown-menu li.el-dropdown-menu__item.item1 {
				cursor: pointer;
				padding: 0 20px;
				margin: 0;
				outline: 0;
				color: #606266;
				background: #fff;
				font-size: 14px;
				line-height: 36px;
				list-style: none;
			}
	
	.top-el-dropdown-menu li.el-dropdown-menu__item.item1:hover {
				background: #ecf5ff;
			}
	
	.top-el-dropdown-menu li.el-dropdown-menu__item.item2 {
				cursor: pointer;
				padding: 0 20px;
				margin: 0;
				outline: 0;
				color: #606266;
				background: #fff;
				font-size: 14px;
				line-height: 36px;
				list-style: none;
			}
	
	.top-el-dropdown-menu li.el-dropdown-menu__item.item2:hover {
				background: #ecf5ff;
			}
	
	.top-el-dropdown-menu li.el-dropdown-menu__item.item3 {
				cursor: pointer;
				padding: 0 20px;
				margin: 0;
				outline: 0;
				color: #606266;
				background: #fff;
				font-size: 14px;
				line-height: 36px;
				list-style: none;
			}
	
	.top-el-dropdown-menu li.el-dropdown-menu__item.item3:hover {
				background: #ecf5ff;
			}
	
	.top-el-dropdown-menu li.el-dropdown-menu__item.item4 {
				cursor: pointer;
				padding: 0 20px;
				margin: 0;
				outline: 0;
				color: #606266;
				background: #fff;
				font-size: 14px;
				line-height: 36px;
				list-style: none;
			}
	
	.top-el-dropdown-menu li.el-dropdown-menu__item.item4:hover {
				background: #ecf5ff;
			}
</style>
