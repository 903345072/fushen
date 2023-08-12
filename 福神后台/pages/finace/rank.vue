<template>
	<view>
		<bar-title bgColor="bg-white" :isBack="true" >
			<block slot="content">销售排行</block>
		</bar-title>
		
		<view style="width: 100%;margin: 60rpx 40rpx;">
			<view style="display: flex;align-items: center;">
				<text style="flex: 1;">用户名</text>
				<text style="flex: 1;">消费</text>
				<text style="flex: 1;">提现</text>
				<text style="flex: 1;">充值</text>
			</view>
			
			<view v-for="(item,index) in data" style="display: flex;align-content: center;line-height: 60rpx;">
				<view style="flex: 1;">{{item.real_name}}</view>
				<view style="flex: 1;">{{item.child_xf}}</view>
				<view style="flex: 1;">{{item.child_tx}}</view>
				<view style="flex: 1;">{{item.child_cz}}</view>
			</view>
		</view>
	</view>
</template>

<script>
		import barTitle from '@/components/zaiui-common/basics/bar-title';
	export default{
		name:"rank",
		components:{
			barTitle
		},
		data(){
			return {
				data:[]
			}
		},
		onLoad() {
			this.$api.getRank().then(res=>{
				this.data = res.data
			})
		}
	}
</script>

<style>
</style>
