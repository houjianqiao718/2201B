<template>
	<div class="home">
		<h1>H2201B点名表</h1>
		<div class="time">{{ newTime }}</div>
		<div class="content">
			<ul class="left">
				<li>
					<div
						v-for="item in studentLists"
						:key="item"
						:style="{ backgroundImage: item.color }"
					>
						<span>{{ item.name }}</span>
					</div>
				</li>
			</ul>
			<div class="right">
				<div>
					天选之人：
					<span class="opc">
						<span v-if="name.length == 0">天子不死,诸将皆退</span>
						<span v-else>{{ name }}</span>
					</span>
				</div>
				<div class="btn">
					<button @click="solo">单人点名</button>
					<button @click="double">双人点名</button>
					<button @click="schoolboy">男生点名</button>
					<button @click="schollgirl">女生点名</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { ref, reactive, toRefs, nextTick } from 'vue';
	import { useStore } from 'vuex';
	import { useRouter, useRoute } from 'vue-router';
	export default {
		setup(props, ctx) {
			const store = useStore();
			const router = useRouter();
			const route = useRoute();
			const data = reactive({
				/**学生数据 */
				studentList: [
					{
						id: 1,
						name: '张世权',
						sex: 0,
					},
					{
						id: 2,
						name: '吴倩',
						sex: 1,
					},
					{
						id: 3,
						name: '李宏恩',
						sex: 0,
					},
					{
						id: 4,
						name: '宋增杰',
						sex: 0,
					},
					{
						id: 5,
						name: '杨志豪',
						sex: 0,
					},
					{
						id: 6,
						name: '郝嫚嫚',
						sex: 1,
					},
					{
						id: 7,
						name: '侯建荞',
						sex: 1,
					},
					{
						id: 8,
						name: '程怀博',
						sex: 0,
					},
					{
						id: 9,
						name: '江萌洋',
						sex: 1,
					},
					{
						id: 10,
						name: '周璇',
						sex: 1,
					},
					{
						id: 11,
						name: '张建雨',
						sex: 0,
					},
					{
						id: 12,
						name: '孙铭',
						sex: 0,
					},
					{
						id: 13,
						name: '孙旭瑶',
						sex: 1,
					},
					{
						id: 14,
						name: '章奥博',
						sex: 0,
					},
					{
						id: 15,
						name: '王伟宸',
						sex: 0,
					},
					{
						id: 16,
						name: '代伊涵',
						sex: 0,
					},
					{
						id: 17,
						name: '邓林科',
						sex: 0,
					},
					{
						id: 18,
						name: '张立',
						sex: 0,
					},
					{
						id: 19,
						name: '李妍',
						sex: 1,
					},
					{
						id: 20,
						name: '薛翔元',
						sex: 0,
					},
					{
						id: 21,
						name: '郑锋',
						sex: 0,
					},
					{
						id: 22,
						name: '巴钦',
						sex: 0,
					},
					{
						id: 23,
						name: '张宗耀',
						sex: 0,
					},
					{
						id: 24,
						name: '章涵语',
						sex: 0,
					},
					{
						id: 25,
						name: '高鹏亚',
						sex: 0,
					},
					{
						id: 26,
						name: '付高聪',
						sex: 0,
					},
					{
						id: 27,
						name: '宋海宇',
						sex: 0,
					},
					{
						id: 28,
						name: '王龙翔',
						sex: 0,
					},
					{
						id: 29,
						name: '徐婉颖',
						sex: 1,
					},
					{
						id: 30,
						name: '韩雨泽',
						sex: 0,
					},
					{
						id: 31,
						name: '刘艺',
						sex: 1,
					},
				],
				studentLists: [
					{
						id: 1,
						name: '张世权',
						sex: 0,
					},
					{
						id: 2,
						name: '吴倩',
						sex: 1,
					},
					{
						id: 3,
						name: '李宏恩',
						sex: 0,
					},
					{
						id: 4,
						name: '宋增杰',
						sex: 0,
					},
					{
						id: 5,
						name: '杨志豪',
						sex: 0,
					},
					{
						id: 6,
						name: '郝嫚嫚',
						sex: 1,
					},
					{
						id: 7,
						name: '侯建荞',
						sex: 1,
					},
					{
						id: 8,
						name: '程怀博',
						sex: 0,
					},
					{
						id: 9,
						name: '江萌洋',
						sex: 1,
					},
					{
						id: 10,
						name: '周璇',
						sex: 1,
					},
					{
						id: 11,
						name: '张建雨',
						sex: 0,
					},
					{
						id: 12,
						name: '孙铭',
						sex: 0,
					},
					{
						id: 13,
						name: '孙旭瑶',
						sex: 1,
					},
					{
						id: 14,
						name: '章奥博',
						sex: 0,
					},
					{
						id: 15,
						name: '王伟宸',
						sex: 0,
					},
					{
						id: 16,
						name: '代伊涵',
						sex: 0,
					},
					{
						id: 17,
						name: '邓林科',
						sex: 0,
					},
					{
						id: 18,
						name: '张立',
						sex: 0,
					},
					{
						id: 19,
						name: '李妍',
						sex: 1,
					},
					{
						id: 20,
						name: '薛翔元',
						sex: 0,
					},
					{
						id: 21,
						name: '郑锋',
						sex: 0,
					},
					{
						id: 22,
						name: '巴钦',
						sex: 0,
					},
					{
						id: 23,
						name: '张宗耀',
						sex: 0,
					},
					{
						id: 24,
						name: '章涵语',
						sex: 0,
					},
					{
						id: 25,
						name: '高鹏亚',
						sex: 0,
					},
					{
						id: 26,
						name: '付高聪',
						sex: 0,
					},
					{
						id: 27,
						name: '宋海宇',
						sex: 0,
					},
					{
						id: 28,
						name: '王龙翔',
						sex: 0,
					},
					{
						id: 29,
						name: '徐婉颖',
						sex: 1,
					},
					{
						id: 30,
						name: '韩雨泽',
						sex: 0,
					},
					{
						id: 31,
						name: '刘艺',
						sex: 1,
					},
				],

				/**时间 */
				newTime: '',
				/**随机名字 */
				name: '',
			});
			/**dom加载完成以后的监听回调 */
			nextTick(() => {
				// data.studentList.forEach((ele) => {
				// 	ele.color = randomColor();
				// });
				data.studentLists.forEach((ele) => {
					ele.color = randomColor();
				});
			});
			/**rgb随机数 */
			const randomParam = () => {
				var r = Math.floor(Math.random() * 256);
				var g = Math.floor(Math.random() * 256);
				var b = Math.floor(Math.random() * 256);
				var rgb = +r + ',' + g + ',' + b;
				return rgb;
			};
			//封装随机数
			const Nonce = (list) => {
				var max = list;
				var min = 0;
				return Math.floor(Math.random() * (max - min) + min);
			};
			/**随机颜色 */
			const randomColor = () => {
				var color = '-webkit-linear-gradient(right, rgb('
					.concat(randomParam(), '), rgb(')
					.concat(randomParam(), '))');
				return color;
			};
			/**时间 */
			function getTime() {
				//时间补零
				var data = new Date();
				let year = data.getFullYear();
				let month = data.getMonth();
				month = month < 10 ? '0' + month : month;
				let day = data.getDate();
				day = day < 10 ? '0' + day : day;
				let hours = data.getHours();
				hours = hours < 10 ? '0' + hours : hours;
				let minutes = data.getMinutes();
				minutes = minutes < 10 ? '0' + minutes : minutes;
				let seconds = data.getSeconds();
				seconds = seconds < 10 ? '0' + seconds : seconds;
				return (
					year +
					'-' +
					month +
					'-' +
					day +
					' ' +
					hours +
					':' +
					minutes +
					':' +
					seconds
				);
			}
			/***定时器 */
			setInterval(() => {
				data.newTime = getTime();
			}, 1000);
			/**单人点名 */
			const solo = () => {
				let index = Nonce(data.studentList.length);
				data.name = data.studentList[index].name;
				data.studentList.splice([Nonce(index)], 1);
				if (data.studentList.length == 0) {
					data.studentList = [...data.studentLists];
				}
			};
			/**双人点名 */
			const double = () => {
				let aIndex = Nonce(data.studentList.length);
				let bIndex = Nonce(data.studentList.length);
				let a = data.studentList[aIndex].name;
				let b = data.studentList[bIndex].name;
				data.name = a + '-' + b;
				data.studentList.splice(aIndex, 1);
				data.studentList.splice(bIndex, 1);
				if (data.studentList.length <= 1) {
					data.studentList = [...data.studentLists];
				}
				console.log(data.studentList);
			};
			/**男生点名 */
			const schoolboy = () => {
				let list = data.studentList.filter((ele) => ele.sex == 0);
				console.log(data.studentList.length);
				let index = Nonce(list.length);
				data.name = list[index].name;
			};
			/**女生点名 */
			const schollgirl = () => {
				let list = data.studentList.filter((ele) => ele.sex == 1);
				console.log(data.studentList.length);
				let index = Nonce(list.length);
				data.name = list[index].name;
			};
			return {
				...toRefs(data),
				randomColor,
				getTime,
				solo,
				double,
				schoolboy,
				schollgirl,
			};
		},
	};
</script>

<style lang="scss">
	li {
		list-style: none;
	}
	html,
	body {
		height: 100%;
		font-family: STKaiti;
		background-image: url(../assets/xxxx.gif);
		overflow: hidden;
	}

	h1 {
		height: 240px;
		line-height: 240px;
		text-align: center;
		color: #fff;
		font-size: 40px;
	}

	.time {
		height: 40px;
		line-height: 40px;
		width: 100%;
		padding: 0 100px;
		color: #fff;
		font-size: 28px;
		text-align: right;
	}

	.content {
		width: 100%;
		height: calc(100% - 280px);
		display: flex;
	}

	.left {
		width: 50%;
		height: 100%;
		padding: 20px 10px 0 120px;
	}

	.left li {
		width: 100%;
		display: flex !important;
		flex-wrap: wrap;
		height: 74px;
	}

	.left li div {
		flex: 20%;
		display: inline-block;
		text-align: center;
		line-height: 74px;
		font-size: 30px;
		background-image: -webkit-linear-gradient(bottom, #8b03e0, #140bff);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.right {
		width: 50%;
		height: 100%;
		padding: 100px 0 0 70px;
	}

	.right div:nth-child(1) {
		font-size: 36px;
		color: #fff;
		margin-bottom: 280px;
	}

	.right div:nth-child(1) .opc {
		font-size: 50px;
		font-weight: bold;
		background-image: -webkit-linear-gradient(bottom, #e02803, #0f0aa7);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.right .btn {
		width: 480px;
		display: flex;
		justify-content: space-between;
	}

	.right .btn button {
		border: 0;
		outline: none;
		padding: 8px 20px;
		background-color: #67c23a;
		color: #fff;
		border-radius: 16px;
		cursor: pointer;
	}

	audio {
		position: fixed;
		top: 220px;
		left: 50%;
		margin-left: -10px;
		height: 20px;
		width: 20px;
	}
</style>
