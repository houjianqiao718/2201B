# **vue2知识点总结**

### 自我介绍

````text
	面试官你好，我叫侯建荞，来面试的是咱们公司的前端岗位。之前的话也是一直从事于web方面的工作，可以熟练的掌握vue2、vue3、小程序等，然后我接触前端也有两三年时间了，期间的话也有写过挺多的项目，主要任务就是设计页面样式和页面交互逻辑。最后希望能通过这次面试成功进入贵公司和大家一起学习和交流，我的介绍完毕，谢谢！
````

### Vue

#### vue介绍与描述

- 动态构建用户界面的渐进式JavaScript框架

####  Vue的特点

- 遵循MVVM模式
- 编码简洁，体积小，运行效率高，适合移动/PC端开发
- 它本身只关注UI，可以引入其它第三方库开发项目

#### Vue周边库

- vue-cli：vue脚手架
- vue-resource
- axios
- vue-router：路由
- vuex：状态管理
- element-ui：基于vue的UI组件库（PC端）

#### 初始vue

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>初识vue</title>
    <!-- 引入Vue -->
    <script src="../js/vue.js"></script>
</head>
<body>
    <!-- 准备好一个容器 -->
    <div id="root">
        <h1>Hello！{{name}}!</h1>
    </div>

    <script>
        Vue.config.productionTip = false // 阻止vue在启动时生成生产提示
        new Vue({
            el:'#root', //el用于指定当前Vue实例为哪个容器服务，值通常为css选择器字符串
            data:{ //data用于存储数据，数据共el所指定的容器去使用
                name:'JOJO'
            }
        })
    </script>
</body>
</html>
```

 **注意：** 

- 想让Vue工作，就必须创建一个Vue实例，且要传入一个配置对象
- root容器里的代码依然符合html规范，只不过混入了一些特殊的Vue语法
- root容器里的代码被称为Vue模板
- Vue实例与容器是一一对应的
- 真实开发中只有一个Vue实例，并且会配合着组件一起使用
- `{{xxx}}`中的xxx要写js表达式，且xxx可以自动读取到data中的所有属性
- 一旦data中的数据发生变化，那么模板中用到该数据的地方也会自动更新

#### 模板语法

Vue模板语法包括两大类： 

1.  插值语法： 
   - 功能：用于解析标签体内容
   - 写法：`{{xxx}}`，xxx是js表达式，且可以直接读取到data中的所有区域
2.  指令语法： 
   - 功能：用于解析标签（包括：标签属性、标签体内容、绑定事件…）
   - 举例：<a v-bind:href="xxx">或简写为<a :href="xxx"> , xxx同样要写js表达式，且可以直接读取到data中的所有属性 
   - 备注：Vue中有很多的指令，且形式都是v-xxx

#### 数据绑定

 Vue中有2种数据绑定的方式： 

1. 单向绑定（`v-bind`）：数据只能从data流向页面

2. 双向绑定（`v-model`）：数据不仅能从data流向页面，还可以从页面流向data

   备注： 

   1. 双向绑定一般都应用在表单类元素上（ 如：<input>、 <select> 、<textarea>  等 ）
   2. `v-model:value`可以简写为`v-model`，因为`v-model`默认收集的就是value值

####  el与data的两种写法

 el有2种写法： 

1. 创建Vue实例对象的时候配置el属性
2. 先创建Vue实例，随后再通过`vm.$mount('#root')`指定el的值

 data有2种写法： 

1. 对象式

2. 函数式

   目前哪种写法都可以，以后学到组件时，data必须使用函数，否则会报错

#### MVVM模型

- M：模型（Model），data中的数据

- V：视图（View），模板代码

- VM：视图模型（ViewModel），Vue实例

   **总结：** 

  - data中所有的属性，最后都出现在了vm身上
  - vm身上所有的属性 及 Vue原型身上所有的属性，在Vue模板中都可以直接使用

#### Vue中的数据代理

1. Vue中的数据代理通过vm对象来代理data对象中属性的操作（读/写）
2. Vue中数据代理的好处：更加方便的操作data中的数据
3.  基本原理： 
   - 通过`object.defineProperty()`把data对象中所有属性添加到vm上。
   - 为每一个添加到vm上的属性，都指定一个getter/setter。
   - 在getter/setter内部去操作（读/写）data中对应的属性。

#### 事件处理

##### 1. 事件的基本用法

- 使用`v-on:xxx`或`@xxx`绑定事件，其中xxx是事件名
- 事件的回调需要配置在methods对象中，最终会在vm上
- methods中配置的函数，不要用箭头函数！否则this就不是vm了
- methods中配置的函数，都是被Vue所管理的函数，this的指向是vm或组件实例对象
- `@click="demo"`和`@click="demo($event)"`效果一致，但后者可以传参

##### 2. 事件修饰符

- prevent：阻止默认事件（常用）

- stop：阻止事件冒泡（常用）

- once：事件只触发一次（常用）

- capture：使用事件的捕获模式

- self：只有`event.target`是当前操作的元素时才触发事件

- passive：事件的默认行为立即执行，无需等待事件回调执行完毕

   修饰符可以连续写，比如：`@click.prevent.stop="showInfo"` 

##### 3. 键盘事件

Vue中常用的按键别名： 

- 回车：enter

- 删除：delete (捕获“删除”和“退格”键)

- 退出：esc

- 空格：space

- 换行：tab (特殊，必须配合keydown去使用)

- 上：up

- 下：down

- 左：left

- 右：right

   **注意：** 

  1. 系统修饰键（用法特殊）：ctrl、alt、shift、meta 
     - 配合keyup使用：按下修饰键的同时，再按下其他键，随后释放其他键，事件才被触发
     - 配合keydown使用：正常触发事件
  2. 可以使用keyCode去指定具体的按键，比如：`@keydown.13="showInfo"`，但不推荐这样使用
  3. `Vue.config.keyCodes.自定义键名 = 键码`，可以自定义按键别名

#### 计算属性( computed )

- 定义：要用的属性不存在，需要通过已有属性计算得来。
- 原理：底层借助了`Objcet.defineproperty()`方法提供的getter和setter。
-  get函数什么时候执行？ 
  - 初次读取时会执行一次
  - 当依赖的数据发生改变时会被再次调用

- 优势：与methods实现相比，内部有缓存机制（复用），效率更高，调试方便
-  备注： 
  - 计算属性最终会出现在vm上，直接读取使用即可
  - 如果计算属性要被修改，那必须写set函数去响应修改，且set中要引起计算时依赖的数据发生改变
  - 如果计算属性确定不考虑修改，可以使用计算属性的简写形式

#### 监视属性( watch )

- 当被监视的属性变化时，回调函数自动调用，进行相关操作
- 监视的属性必须存在，才能进行监视
- 监视可以进行异步操作
-  监视属性有两种写法： 
  - 创建Vue时传入watch配置
  - 通过`vm.$watch`监视

#####  深度监视 

- Vue中的watch默认不监测对象内部值的改变（一层）
- 在watch中配置`deep:true`可以监测对象内部值的改变（多层）
-  备注： 
  - Vue自身可以监测对象内部值的改变，但Vue提供的watch默认不可以
  - 使用watch时根据监视数据的具体结构，决定是否采用深度监视

##### 监视属性简写

-  如果监视属性除了handler没有其他配置项的话，可以进行简写。 

  ```vue
  <script type="text/javascript">
  	Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
  		
      const vm = new Vue({
          el:'#root',
          data:{
              isHot:true,
          },
          computed:{
              info(){
                  return this.isHot ? '炎热' : '凉爽'
              }
          },
          methods: {
              changeWeather(){
                  this.isHot = !this.isHot
              }
          },
          watch:{
              //正常写法
              isHot:{
  				handler(newValue,oldValue){
  					console.log('isHot被修改了',newValue,oldValue)
  				}
  			}, 
              //简写
              isHot(newValue,oldValue){
  				console.log('isHot被修改了',newValue,oldValue,this)
  			}
          }
      })
  
      //正常写法
      vm.$watch('isHot',{
          handler(newValue,oldValue){
              console.log('isHot被修改了',newValue,oldValue)
          }
      })
      //简写
      vm.$watch('isHot',function(newValue,oldValue){
          console.log('isHot被修改了',newValue,oldValue,this)
      })
  </script>
  ```

  

#####  computed和watch之间的区别 

- computed能完成的功能，watch都可以完成
- watch能完成的功能，computed不一定能完成，例如：watch可以进行异步操作
-  两个重要的小原则： 
  - 所有被Vue管理的函数，最好写成普通函数，这样this的指向才是vm 或 组件实例对象
  - 所有不被Vue所管理的函数（定时器的回调函数、ajax的回调函数等、Promise的回调函数），最好写成箭头函数，这样this的指向才是vm 或 组件实例对象。

####  绑定样式

-  class样式： 

  - 写法：`class="xxx"`，xxx可以是字符串、对象、数组
  - 字符串写法适用于：类名不确定，要动态获取
  - 对象写法适用于：要绑定多个样式，个数不确定，名字也不确定
  - 数组写法适用于：要绑定多个样式，个数确定，名字也确定，但不确定用不用

-  style样式： 

  - `:style="{fontSize: xxx}"`其中xxx是动态值

  - `:style="[a,b]"`其中a、b是样式对象

    

#### 条件渲染

-  v-if： 

  -  写法： 
    - `v-if="表达式"`
    - `v-else-if="表达式"`
    - `v-else`

  - 适用于：切换频率较低的场景
  - 特点：不展示的DOM元素直接被移除
  - 注意：`v-if`可以和`v-else-if`、`v-else`一起使用，但要求结构不能被打断

-  v-show： 
  - 写法：`v-show="表达式"`
  - 适用于：切换频率较高的场景
  - 特点：不展示的DOM元素未被移除，仅仅是使用样式隐藏掉

-  使用`v-if`的时，元素可能无法获取到，而使用`v-show`一定可以获取到 

#### 列表渲染

-  `v-for`指令： 
  - 用于展示列表数据
  - 语法：<li v-for="(item, index) in xxx" :key="yyy"> ，其中key可以是index，也可以是遍历对象的唯一标识
  - 可遍历：数组、对象、字符串（用的少）、指定次数（用的少）

##### key的作用与原理( key的内部原理 )

- 虚拟DOM中key的作用：
  - key是虚拟DOM中对象的标识，当数据发生变化时，Vue会根据【新数据】生成【新的虚拟DOM】，随后Vue进行【新虚拟DOM】与【旧虚拟DOM】的差异比较

-  对比规则： 
  -  旧虚拟DOM中找到了与新虚拟DOM相同的key： 
    - 若虚拟DOM中内容没变, 直接使用之前的真实DOM
    - 若虚拟DOM中内容变了, 则生成新的真实DOM，随后替换掉页面中之前的真实DOM
  - 旧虚拟DOM中未找到与新虚拟DOM相同的key：创建新的真实DOM，随后渲染到到页面

-  用index作为key可能会引发的问题： 
  - 若对数据进行逆序添加、逆序删除等破坏顺序操作：会产生没有必要的真实DOM更新 ==> 界面效果没问题, 但效率低
  - 若结构中还包含输入类的DOM：会产生错误DOM更新 ==> 界面有问题

-  开发中如何选择key? 
  - 最好使用每条数据的唯一标识作为key，比如id、手机号、身份证号、学号等唯一值
  - 如果不存在对数据的逆序添加、逆序删除等破坏顺序的操作，仅用于渲染列表，使用index作为key是没有问题的

##### 列表过滤

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>列表过滤</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<div id="root">
			<h2>人员列表</h2>
			<input type="text" placeholder="请输入名字" v-model="keyWord">
			<ul>
				<li v-for="(p,index) of filPersons" :key="index">
					{{p.name}}-{{p.age}}-{{p.sex}}
				</li>
			</ul>
		</div>

		<script type="text/javascript">
			Vue.config.productionTip = false

			new Vue({
				el:'#root',
				data:{
					keyWord:'',
					persons:[
						{id:'001',name:'马冬梅',age:19,sex:'女'},
						{id:'002',name:'周冬雨',age:20,sex:'女'},
						{id:'003',name:'周杰伦',age:21,sex:'男'},
						{id:'004',name:'温兆伦',age:22,sex:'男'}
					]
				},
				computed:{
					filPersons(){
						return this.persons.filter((p)=>{
							return p.name.indexOf(this.keyWord) !== -1
						})
					}
				}
			})
		</script>
	</body>
</html>
```

##### 列表排序

```vue
<body>
    <div id="root">
        <h2>人员列表</h2>
        <input type="text" placeholder="请输入名字" v-model="keyWord">
        <button @click="sortType = 2">年龄升序</button>
		<button @click="sortType = 1">年龄降序</button>
		<button @click="sortType = 0">原顺序</button>
        <ul>
            <li v-for="(p,index) of filPersons" :key="p.id">
                {{p.name}}-{{p.age}}-{{p.sex}}
            </li>
        </ul>
    </div>
    
    <script>
        new Vue({
            el:'#root',
            data:{
                persons:[
                    {id:'001',name:'马冬梅',age:30,sex:'女'},
				    {id:'002',name:'周冬雨',age:45,sex:'女'},
				    {id:'003',name:'周杰伦',age:21,sex:'男'},
				    {id:'004',name:'温兆伦',age:22,sex:'男'}
                ],
                keyWord:'',
                sortType:0,//0代表原顺序，1代表升序，3代表降序
            },
            computed:{
                filPersons(){
                    const arr = this.persons.filter((p)=>{
                        return p.name.indexOf(this.keyWord) !== -1
                    })
                    if(this.sortType){
                        arr.sort((p1, p2)=>{
                            return this.sortType ===1 ? p2.age-p1.age : p1.age-p2.age
                        })
                    }
                    return arr
                }
            }
        })
    </script>
</body>
```

##### Vue数据监视

-  Vue监视数据的原理： 
  - vue会监视data中所有层次的数据

-  如何监测对象中的数据？ 
  - 通过setter实现监视，且要在`new Vue`时就传入要监测的数据 
  - 对象中后追加的属性，Vue默认不做响应式处理
  -  如需给后添加的属性做响应式，请使用如下API： 
    - `Vue.set(target,propertyName/index,value)`
    - `vm.$set(target,propertyName/index,value)`

-  如何监测数组中的数据？ 
  -  通过包裹数组更新元素的方法实现，本质就是做了两件事： 
    - 调用原生对应的方法对数组进行更新
    - 重新解析模板，进而更新页面

-  在Vue修改数组中的某个元素一定要用如下方法： 
  - 使用这些API：`push()`、`pop()`、`shift()`、`unshift()`、`splice()`、`sort()`、`reverse()`
  - `Vue.set()` 或 `vm.$set()`

-  **特别注意**：`Vue.set()` 和 `vm.$set()` 不能给vm 或 vm的根数据对象（data等） 添加属性 

#### 收集表单数据

- 若： <input type="text"/> ，则`v-model`收集的是value值，用户输入的内容就是value值
- 若： <input type="radio"/> ，则`v-model`收集的是value值，且要给标签配置value属性
- 若： <input type="checkbox"/> 
  - 没有配置value属性，那么收集的是checked属性（勾选 or 未勾选，是布尔值）
  -  配置了value属性： 
    - `v-model`的初始值是非数组，那么收集的就是checked（勾选 or 未勾选，是布尔值）
    - `v-model`的初始值是数组，那么收集的就是value组成的数组

#####  `v-model`的三个修饰符

- lazy：失去焦点后再收集数据
- number：输入字符串转为有效的数字
- trim：输入首尾空格过滤

#### 过滤器

- 定义：对要显示的数据进行特定格式化后再显示（适用于一些简单逻辑的处理）。
- 有全局过滤器和局部过滤器
-  语法： 
  - 注册过滤器：`Vue.filter(name,callback)` 或 `new Vue{filters:{}}`
  - 使用过滤器：`{{ xxx | 过滤器名}}` 或 `v-bind:属性 = "xxx | 过滤器名"`

-  备注： 
  - 过滤器可以接收额外参数，多个过滤器也可以串联
  - 并没有改变原本的数据，而是产生新的对应的数据

####  内置指令

-  之前学过的指令： 
  - `v-bind`：单向绑定解析表达式，可简写为`:`	
  - `v-model`：双向数据绑定
  - `v-for`：遍历数组 / 对象 / 字符串
  - `v-on`：绑定事件监听，可简写为`@`
  - `v-if`：条件渲染（动态控制节点是否存在）
  - `v-else`：条件渲染（动态控制节点是否存在）
  - `v-show`：条件渲染 (动态控制节点是否展示)

-  `v-text`指令： 
  - 作用：向其所在的节点中渲染文本内容
  - 与插值语法的区别：`v-text`会替换掉节点中的内容，`{{xx}}`则不会。

- v-html指令
  - 作用：向指定节点中渲染包含html结构的内容
  -  与插值语法的区别： 
    - `v-html`会替换掉节点中所有的内容，`{{xx}}`则不会
    - `v-html`可以识别html结构
  -  严重注意：`v-html`有安全性问题！！！ 
    - 在网站上动态渲染任意HTML是非常危险的，容易导致XSS攻击
    - 一定要在可信的内容上使用`v-html`，永远不要用在用户提交的内容上！！！

- v-cloak指令
  - 本质是一个特殊属性，Vue实例创建完毕并接管容器后，会删掉`v-cloak`属性
  - 使用css配合`v-cloak`可以解决网速慢时页面展示出`{{xxx}}`的问题

- v-once指令
  - `v-once`所在节点在初次动态渲染后，就视为静态内容了
  - 以后数据的改变不会引起`v-once`所在结构的更新，可以用于优化性能

- v-pre指令
  - 跳过其所在节点的编译过程。
  - 可利用它跳过：没有使用指令语法、没有使用插值语法的节点，会加快编译

#### 自定义指令

-  自定义指令定义语法： 

  -  局部指令： 

    ```vue
     new Vue({															
     	directives:{指令名:配置对象}   
     }) 		
    ```

    ```vue
     new Vue({															
     	directives:{指令名:回调函数}   
     }) 	
    ```

  -  全局指令： 

    - Vue.directive(指令名,配置对象)
    - Vue.directive(指令名,回调函数)

-  配置对象中常用的3个回调函数： 
  - `bind(element,binding)`：指令与元素成功绑定时调用
  - `inserted(element,binding)`：指令所在元素被插入页面时调用
  - `update(element,binding)`：指令所在模板结构被重新解析时调用

-  备注： 
  - 指令定义时不加“v-”，但使用时要加“v-”
  -  指令名如果是多个单词，要使用kebab-case命名方式，不要用camelCase命名 

#### 自定义事件

- 一种组件间通信的方式，适用于：==子组件 > 父组件

- 使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件（事件的回调在A中）

-  绑定自定义事件： 

  - 第一种方式，在父组件中： <Demo @atguigu="test"/> 或 <Demo v-on:atguigu="test"/> 

  -  第二种方式，在父组件中： 

    ```vue
    <Demo ref="demo"/>
    ...
    mounted(){
        this.$refs.demo.$on('atguigu',data)
    }
    ```

  - 若想让自定义事件只能触发一次，可以使用`once`修饰符，或`$once`方法

- 触发自定义事件：`this.$emit('atguigu',数据)`
- 解绑自定义事件：`this.$off('atguigu')`
- 组件上也可以绑定原生DOM事件，需要使用`native`修饰符
- 注意：通过`this.$refs.xxx.$on('atguigu',回调)`绑定自定义事件时，回调要么配置在methods中，要么用箭头函数，否则this指向会出问题！

#### Vue生命周期

- 又名：生命周期回调函数、生命周期函数、生命周期钩子
- 是什么？：Vue在关键时刻帮我们调用的一些特殊名称的函数
- 生命周期函数的名字不可更改，但函数的具体内容是程序员根据需求编写的
- 生命周期函数中的this指向是vm 或 组件实例对象
  - `beforeCreate `：在实例初始化之后，数据观测(data observer) 之前被调用。
  - `created`：实例已经创建完成，因为它是最早触发的原因可以进行一些数据，资源的请求。
  - `beforeMount `：在挂载开始之前被调用：相关的 render 函数首次被调用。
  - `mounted`：发送ajax请求、启动定时器、绑定自定义事件、订阅消息等初始化操作
  - `beforeUpdate` ：可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
  - `updated`： 可以执行依赖于 DOM 的操作。在大多数情况下，应该要避免在此期间更改状态，因为这可能会导致更新无限循环。该钩子在服务器端渲染期间不被调用。
  - `beforeDestroy`：清除定时器、解绑自定义事件、取消订阅消息等收尾工作
  - `destroyed `：Vue 实例销毁后调用。调用后， Vue实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。 该钩子在服务器端渲染期间不被调用

-   关于销毁Vue实例： 
  - 销毁后借助Vue开发者工具看不到任何信息
  - 销毁后自定义事件会失效，但原生DOM事件依然有效
  - 一般不会在`beforeDestroy`操作数据，因为即便操作数据，也不会再触发更新流程了
- ![img](https://img-blog.csdnimg.cn/img_convert/934db3f17c6daded6578bdf1a769d9dc.png) 

#### Vue组件化编程

##### 模块与组件、模块化与组件化

###### 1. 模块

- 理解：向外提供特定功能的 js 程序，一般就是一个 js 文件
- 为什么：js 文件很多很复杂
- 作用：复用 js，简化 js 的编写，提高 js 运行效率

###### 2. 组件

- 定义：用来实现局部功能的代码和资源的集合
- 为什么：一个界面的功能很复杂
- 作用：复用编码，简化项目编码，提高运行效率

###### 3. 模块化

-  当应用中的 js 都以模块来编写的，那这个应用就是一个模块化的应用 

###### 4. 组件化

-  当应用中的功能都是多组件的方式来编写的，那这个应用就是一个组件化的应用 

#####  组件基本使用

######  Vue中使用组件的三大步骤： 

- 定义组件(创建组件)
- 注册组件
- 使用组件(写组件标签)

######  如何定义一个组件？ 

-  使用`Vue.extend(options)`创建，其中`options`和`new Vue(options)`时传入的`options`几乎一样，但也有点区别： 
-  el不要写，为什么？ 
  -  最终所有的组件都要经过一个vm的管理，由vm中的el决定服务哪个容器 

-  data必须写成函数，为什么？ 
  -  避免组件被复用时，数据存在引用关系 

######  如何注册组件？ 

- 局部注册：`new Vue`的时候传入`components`选项
- 全局注册：`Vue.component('组件名',组件)`

- 编写组件标签： <school></school> 

##### 组件注意事项

-  关于组件名： 
  -  一个单词组成： 
    - 第一种写法（首字母小写）：school
    - 第二种写法（首字母大写）：School
  -  多个单词组成： 
    - 第一种写法（kebab-case命名）：my-school
    - 第二种写法（CamelCase命名）：MySchool （需要Vue脚手架支持）
  -  备注： 
    - 组件名尽可能回避HTML中已有的元素名称，例如：h2、H2都不行
    - 可以使用name配置项指定组件在开发者工具中呈现的名字

-  关于组件标签： 
  - 第一种写法： <school></school> 
  - 第二种写法： <school/> 
  - 备注：不使用脚手架时， <school/> 会导致后续组件不能渲染

- 一个简写方式：`const school = Vue.extend(options)`可简写为：`const school = options`

#### ref属性

- 被用来给元素或子组件注册引用信息（id的替代者）
- 应用在`html`标签上获取的是真实DOM元素，应用在组件标签上获取的是组件实例对象（vc）
-  使用方式 
  - 打标识：  <h1 ref="xxx"></h1> 或 <School ref="xxx"></School> 
  - 获取：`this.$refs.xxx`

####  props配置项

- 功能：让组件接收外部传过来的数据

- 传递数据： <Demo name="xxx"/> 

-  接收数据： 

  - 第一种方式（只接收）：`props:['name']`

  - 第二种方式（限制数据类型）：`props:{name:String}`

  -  第三种方式（限制类型、限制必要性、指定默认值）： 

    ```vue
    props:{
        name:{
        	type:String, //类型
            required:true, //必要性
            default:'JOJO' //默认值
        }
    }
    ```

    

- props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据 

#### mixin混入

- 功能：可以把多个组件共用的配置提取成一个混入对象

-  使用方式： 

  -  定义混入： 

    ```vue
    const mixin = {
        data(){....},
        methods:{....}
        ....
    }
    ```

  -  使用混入： 

    - 全局混入：`Vue.mixin(xxx)`
    - 局部混入：`mixins:['xxx']`

-  备注： 
  -  组件和混入对象含有同名选项时，这些选项将以恰当的方式进行“合并”，在发生冲突时以组件优先。 
  -  同名生命周期钩子将合并为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子之前调用。 

#### plugin插件

- - 功能：用于增强Vue

  - 本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据

  -  定义插件： 

    ```vue
    plugin.install = function (Vue, options) {
            // 1. 添加全局过滤器
            Vue.filter(....)
        
            // 2. 添加全局指令
            Vue.directive(....)
        
            // 3. 配置全局混入
            Vue.mixin(....)
        
            // 4. 添加实例方法
            Vue.prototype.$myMethod = function () {...}
            Vue.prototype.$myProperty = xxxx
        }
    ```

- 使用插件：`Vue.use(plugin)`

#### scoped样式

- 作用：让样式在局部生效，防止冲突
- 写法：  <style scoped>  
-  `scoped`样式一般不会在`App.vue`中使用 

#### 全局事件总线

-  全局事件总线是一种可以在任意组件间通信的方式，本质上就是一个对象。
- 它必须满足以下条件：
  - 所有的组件对象都必须能看见他 
  - 这个对象必须能够使用`$on`、`$emit`和`$off`方法去绑定、触发和解绑事件 

#### $nextTick

-  `$nextTick(回调函数)`可以将回调延迟到下次 DOM 更新循环之后执行 
- 语法：`this.$nextTick(回调函数)`
- 作用：在下一次 DOM 更新结束后执行其指定的回调
- 什么时候用？：当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行

#### slot插槽

- 作用：让父组件可以向子组件指定位置插入html结构，也是一种组件间通信的方式，适用于==父组件 > 子组件

- 分类：默认插槽、具名插槽、作用域插槽

-  使用方式： 

  -  默认插槽： 

    ```vue
    父组件中：
            <Category>
               	<div>html结构1</div>
            </Category>
    子组件中：
            <template>
                <div>
                   	<slot>插槽默认内容...</slot>
                </div>
            </template> 
    ```

  -  具名插槽： 

    ```vue
    父组件中：
            <Category>
                <template slot="center">
                 	 <div>html结构1</div>
                </template>
    
                <template v-slot:footer>
                   	<div>html结构2</div>
                </template>
            </Category>
    子组件中：
            <template>
                <div>
                   	<slot name="center">插槽默认内容...</slot>
                    <slot name="footer">插槽默认内容...</slot>
                </div>
            </template>
    ```

  -  作用域插槽： 

    - 理解：数据在组件的自身，但根据数据生成的结构需要组件的使用者来决定。（games数据在Category组件中，但使用数据所遍历出来的结构由App组件决定）

      ```vue
      父组件中：
      		<Category>
      			<template scope="scopeData">
      				<!-- 生成的是ul列表 -->
      				<ul>
      					<li v-for="g in scopeData.games" :key="g">{{g}}</li>
      				</ul>
      			</template>
      		</Category>
      
      		<Category>
      			<template slot-scope="scopeData">
      				<!-- 生成的是h4标题 -->
      				<h4 v-for="g in scopeData.games" :key="g">{{g}}</h4>
      			</template>
      		</Category>
      子组件中：
              <template>
                  <div>
                      <slot :games="games"></slot>
                  </div>
              </template>
      		
              <script>
                  export default {
                      name:'Category',
                      props:['title'],
                      //数据在子组件自身
                      data() {
                          return {
                              games:['红色警戒','穿越火线','劲舞团','超级玛丽']
                          }
                      },
                  }
              </script>
      ```

      #### 

#### Vuex

##### Vuex是什么

- 概念：专门在 Vue 中实现集中式状态（数据）管理的一个 Vue 插件，对 vue 应用中多个组件的共享状态进行集中式的管理（读/写），也是一种组件间通信的方式，且适用于任意组件间通信

#####  什么时候使用Vuex

- 多个组件依赖于同一状态
- 来自不同组件的行为需要变更同一状态

##### vuex的运行原埋

- 在组件中通过dispatch调用actions中的方法，在actions方法中commits调用mutations中的方法、在mutations中的方法中可以直接操作state中的数据，只要state中的数据发生改变就会立刻响应到组件的视图上。 (异步)
- 在组件中通过commit调用mutations中的方法，在mutations中的方法中可以直接操作state中的数据，只要state中的数据发生改变就会立刻响应到组件的视图上。 (同步)

##### vuex核心及使用

- state 存储数据 
  - 组件中使用 this.$store.state.

- mutations 对象 里面是方法，可以直接操作state中的数据
  - 注意: commit只能传一个参数 如果需要传递多个数据用复杂数据类型 比如 数组 对象
  - 是同步数据
  - 在组件中 this.$store.commit(“模块名/方法名"参数)

- getters 是最state中的数据做逻辑处理 类似于计算属性
  - 在组件中 this.$store.getters.方法名
  - 在模块中同理: this.Sstore.getters.模块名.方法名

- actions 也是可以操作数据，但是不能直接操作数据 它调用mutations中的方法来操作的数据
  - actions中的方法是异步的 mutations中的方法是同步的
  - 在组件中异步修改数据:
    - 在组件中通过dispatch调用actions中的方法，在actions中调用mutations中的方法，在mutations中可以直接操作state中的数据
  - 在组件中 this.$store.dispatch(“模块名/方法名”，参数)
  - this.$store.commit('模块名/actions方法名’，具体值)

- modules模块化

##### vuex中的数据刷新丢失怎么办

- 手动的将数据添加到本地存储中
- 可以使用vuex数据的持久化
  - 下载插件：npm i vuex-persistedstate 
  - 导入插件：store里 import pers from 'vuex-persistedstate'
  - 挂载插件： 跟state同级的地方写plugins: [pers()]
    - 默认的使用localStorage, 还可以配置成sessionStorage
    - plugins: [pers(localstorage: window.sessionStoragel)]

##### vuex的映射函数

- 在组件中 将该组件用到的数据或者方法映射到组件中
- 映射mutations中的方法
  - 在组件中导入 mapMutations
  - import (mapMutations]from "vuex
  - 在组件中注册
    - 在methods中注册方法
    - methods:[...mapMutations([addMes，方法名])]	
  - 当成自己的方法就行		
    - this.addMes

- 映射state中的数据
  - 同mutations顺序一样，不过是在需要computed中注册的

- 映射getters中的数据
  - 同mutations顺序一样，也是在computed中注册的

- 映射actins的写法
  - 同mutations顺序一样，是在methos中注册使用

#### Vue Router路由

#####  1. vue-router的理解

- vue 的一个插件库，专门用来实现SPA 应用

##### 2. 对SPA应用的理解

- 单页 Web 应用（single page web application，SPA）
- 整个应用只有一个完整的页面
- 点击页面中的导航链接不会刷新页面，只会做页面的局部更新
- 数据需要通过ajax请求获取

##### 3. 路由的理解

-  什么是路由? 
  - 一个路由就是一组映射关系（key - value）
  - key 为路径，value 可能是 function 或 componen

-  路由分类 
  -  后端路由： 
    - 理解：value 是 function，用于处理客户端提交的请求
    - 工作过程：服务器接收到一个请求时，根据请求路径找到匹配的函数来处理请求，返回响应数据
  -  前端路由： 
    - 理解：value 是 component，用于展示页面内容
    - 工作过程：当浏览器的路径改变时，对应的组件就会显示

##### 4. 基本路由

- 安装`vue-router`，命令：`npm i vue-router`
- 应用插件：`Vue.use(VueRouter)`
-  编写router配置项
-  实现切换（`active-class`可配置高亮样式）
- 指定展示位： <router-view></router-view> 

##### 5. 几个注意事项

-  路由组件通常存放在`pages`文件夹，一般组件通常存放在`components`文件夹 
- 通过切换，“隐藏”了的路由组件，默认是被销毁掉的，需要的时候再去挂载
- 每个组件都有自己的`$route`属性，里面存储着自己的路由信息
- 整个应用只有一个router，可以通过组件的`$router`属性获取到

##### 6. 多级路由

-  配置路由规则，使用children配置项
- 跳转（要写完整路径）： <router-link to="/home/news">News</router-link> 

#####  7. 路由的query参数

-  传递参数： 

  ```vue
  <!-- 跳转并携带query参数，to的字符串写法 -->
  <router-link :to="/home/message/detail?id=666&title=你好">跳转</router-link>
  				
  <!-- 跳转并携带query参数，to的对象写法 -->
  <router-link :to="{
  	path:'/home/message/detail',
  	query:{
  		id:666,
          title:'你好'
  	}
  }">跳转</router-link>
  ```

-  接收参数： 

  ```vue
  $route.query.id
  $route.query.title
  ```

##### 8. 命名路由

- 作用：可以简化路由的跳转

-  如何使用： 

  -  给路由命名： 

    ```vue
    {
    	path:'/demo',
    	component:Demo,
    	children:[
    		{
    			path:'test',
    			component:Test,
    			children:[
    				{
                        name:'hello' //给路由命名
    					path:'welcome',
    					component:Hello,
    				}
    			]
    		}
    	]
    }
    ```

  -  简化跳转： 

    ```vue
    <!--简化前，需要写完整的路径 -->
    <router-link to="/demo/test/welcome">跳转</router-link>
    
    <!--简化后，直接通过名字跳转 -->
    <router-link :to="{name:'hello'}">跳转</router-link>
    
    <!--简化写法配合传递参数 -->
    <router-link 
    	:to="{
    		name:'hello',
    		query:{
    		    id:666,
                title:'你好'
    		}
    	}"
    >跳转</router-link>
    ```

    

##### 9. 路由的params参数

-  配置路由，声明接收`params`参数： 

  ```vue
  {
  	path:'/home',
  	component:Home,
  	children:[
  		{
  			path:'news',
  			component:News
  		},
  		{
  			component:Message,
  			children:[
  				{
  					name:'xiangqing',
  					path:'detail/:id/:title', //使用占位符声明接收params参数
  					component:Detail
  				}
  			]
  		}
  	]
  }
  ```

-  传递参数： 

  ```vue
  <!-- 跳转并携带params参数，to的字符串写法 -->
  <router-link :to="/home/message/detail/666/你好">跳转</router-link>
  				
  <!-- 跳转并携带params参数，to的对象写法 -->
  <router-link 
  	:to="{
  		name:'xiangqing',
  		params:{
  		   id:666,
              title:'你好'
  		}
  	}"
  >跳转</router-link>
  ```

-  特别注意：路由携带params参数时，若使用to的对象写法，则不能使用path配置项，必须使用name配置！ 

-  接收参数： 

  ```vue
  $route.params.id
  $route.params.title
  ```

##### 10. 路由的props配置

-  作用：让路由组件更方便的收到参数 

  ```vue
  {
  	name:'xiangqing',
  	path:'detail/:id',
  	component:Detail,
  
  	//第一种写法：props值为对象，该对象中所有的key-value的组合最终都会通过props传给Detail组件
  	// props:{a:900}
  
  	//第二种写法：props值为布尔值，布尔值为true，则把路由收到的所有params参数通过props传给Detail组件
  	// props:true
  	
  	//第三种写法：props值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件
  	props(route){
  		return {
  			id:route.query.id,
  			title:route.query.title
  		}
  	}
  }
  ```

##### 11. 路由跳转的replace方法

- 作用：控制路由跳转时操作浏览器历史记录的模式
- 浏览器的历史记录有两种写入方式：`push`和`replace`，其中`push`是追加历史记录，`replace`是替换当前记录。路由跳转时候默认为`push`方式
- 开启`replace`模式： <router-link replace ...>News</router-link> 

##### 12. 编程式路由导航

- 作用：不借助 <router-link> 实现路由跳转，让路由跳转更加灵活

- 具体编码：

  ```vue
  this.$router.push({
  	name:'xiangqing',
      params:{
          id:xxx,
          title:xxx
      }
  })
  
  this.$router.replace({
  	name:'xiangqing',
      params:{
          id:xxx,
          title:xxx
      }
  })
  this.$router.forward() //前进
  this.$router.back() //后退
  this.$router.go() //可前进也可后退
  ```

##### 13. 缓存路由组件

- 作用：让不展示的路由组件保持挂载，不被销毁

-  具体编码： 

  ```vue
  //缓存一个路由组件
  <keep-alive include="News"> //include中写想要缓存的组件名，不写表示全部缓存
      <router-view></router-view>
  </keep-alive>
  
  //缓存多个路由组件
  <keep-alive :include="['News','Message']"> 
      <router-view></router-view>
  </keep-alive>
  ```

##### 14. activated和deactivated

- `activated`和`deactivated`是路由组件所独有的两个钩子，用于捕获路由组件的激活状态
-  具体使用 :
  - `activated`路由组件被激活时触发
  - `deactivated`路由组件失活时触发

#### 路由守卫

- 作用：对路由进行权限控制

- 分类：全局守卫、独享守卫、组件内守卫

-  全局守卫： 

  ```vue
  //全局前置守卫：初始化时执行、每次路由切换前执行
  router.beforeEach((to,from,next)=>{
  	console.log('beforeEach',to,from)
  	if(to.meta.isAuth){ //判断当前路由是否需要进行权限控制
  		if(localStorage.getItem('school') === 'atguigu'){ //权限控制的具体规则
  			next() //放行
  		}else{
  			alert('暂无权限查看')
  		}
  	}else{
  		next() //放行
  	}
  })
  
  //全局后置守卫：初始化时执行、每次路由切换后执行
  router.afterEach((to,from) => {
  	console.log('afterEach',to,from)
  	if(to.meta.title){ 
  		document.title = to.meta.title //修改网页的title
  	}else{
  		document.title = 'vue_test'
  	}
  })
  ```

-  独享守卫： 

  ```vue
  beforeEnter(to,from,next){
  	console.log('beforeEnter',to,from)
      if(localStorage.getItem('school') === 'atguigu'){
          next()
      }else{
          alert('暂无权限查看')
      }
  }
  ```

-  组件内守卫： 

  ```vue
  //进入守卫：通过路由规则，进入该组件时被调用
  beforeRouteEnter (to, from, next) {...},
  //离开守卫：通过路由规则，离开该组件时被调用
  beforeRouteLeave (to, from, next) {...},
  ```

#### 路由的两种工作模式

- 对于一个url来说，什么是hash值？—— #及其后面的内容就是hash值
- hash值不会包含在 HTTP 请求中，即：hash值不会带给服务器
-  hash模式： 
  - 地址中永远带着#号，不美观
  - 若以后将地址通过第三方手机app分享，若app校验严格，则地址会被标记为不合法
  - 兼容性较好
-  history模式： 
  - 地址干净，美观
  - 兼容性和hash模式相比略差
  - 应用部署上线时需要后端人员支持，解决刷新页面服务端404的问题

#### 虚拟 dom

- 虚拟dom就是一个普通的js对象。是一个用来描述真实dom结构的js对象，因为他不是真实dom，所以才叫虚拟dom。
- 虚拟dom可以很好的跟踪当前dom状态，因为他会根据当前数据生成一个描述当前dom结构的虚拟dom，然后数据发送变化时，又会生成一个新的虚拟dom，而这两个虚拟dom恰恰保存了变化前后的状态。然后通过diff算法，计算出两个前后两个虚拟dom之间的差异，得出一个更新的最优方法（哪些发生改变，就更新哪些）。可以很明显的提升渲染效率以及用户体验。

#### diff算法

- Diff算法的步骤：
  - js 对象表示真实的 dom 结构，就是我们说的生成一个虚拟 dom，再用虚拟 dom 构建一个真的 dom 树，放到页面中。 
  - 状态改变的时候生成一个新的虚拟 dom 跟旧的进行对比，这个对比的过程就是 diff 算法，通过 patch 对象记录差异 
  - 把记录的差异用在第一个虚拟 dom 构建的真实的 dom 上，视图就更新了

- Vue 的 diff 算法是平级⽐较，不考虑跨级⽐较的情况。内部采⽤深度递归的⽅式+双指针⽅式⽐较
- diff 算法就是对虚拟 dom 进行对比，并返回一个 patch 对象，这个对象的作用是存储两个节点不同的地方，最后用 patch 里记录的信息去局部更新真实的 dom

#### data为什么是一个函数

- 概念：
  - 因为组件是可复用的vue实例，一个组件被创建好之后，就可能被用在各个地方。组件不管被复用了多少次，组件中的data数据都应该是相互隔离，互不影响的。基于这一理念，组件每复用一次，data数据就应该被复制一次，之后，当某一处复用的地方组件内data数据被改变时，其他复用地方组件的data数据不受影响
  - 如果组件中的data写成一个函数，数据以函数返回值形式定义，这样每复用一次组件，就会返回一份新的data【类似于给每个组件实例创建一个私有的数据空间，让各个组件实例维护各自的数据】

- 什么情况下是对象
  - 当我们 new Vue() 创建根实例时，此时也是创建了根组件，此组件不会被复用而造成对象内属性一变其他复用组件也跟着变的问题，此时data可以写成对象形式而不是函数返回对象的形式。
  - 根实例对象data可以是对象也可以是函数（根实例是单例），不会产生数据污染情况

- 什么情况下是函数
  - 组件实例对象data必须为函数，目的是为了防止多个组件实例对象之间共用一个data，产生数据污染

#### 数据变了视图不更新的原因

- 数组
  - 通过下标的形式修改数组,修改的内容并没有被object.definproty添加getter和setter属性,没有变成响应式的数据,所以无法被检测到
  - 解决办法: 
    - 调用数组的方法: push, unshift,pop
    - Vue.set(target, 下标, 内容) // 全局的使用方法
    - this.$set(和上面一样)
    - this.$focusUpdated 强制更新视图

- 对象
  - 深层次的对象修改其中的一个对象属性,无法被检测到

#### v-for 与 v-if 的优先级

- v-for 的优先级⾼. 因为 v-for 的时候我们才开始渲染 dom 元素,这个 v-if 还⽆法进⾏判断.
- v-for 和 v-if 不能同时使⽤,我们可以通过标签,⽐如 div 或者 template 标签来进⾏包裹,把 v-if 写到包裹的标签上⾯(写到 v-for 外⾯)

#### cookie, sessionStoragelocalStrorage的区别

- cookie在浏览器和服务器间来回传递。sessionStorage和localStorage不会；
- sessionStorage和localStorage的存储空间更大；
- sessionStorage和localStorage有更多丰富易用的接口；
- sessionStorage和localStorage各自独立的存储空间； 

##### 三者的区别和特点

- cookie是网站为了标示用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）。
-  cookie数据始终在同源的http请求中携带（即使不需要），即会在浏览器和服务器间来回传递。
- sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存 

##### 存储大小： 

- cookie数据大小不能超过4K。 
- sessionStorage和localStorage虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。

##### 有期时间：

-  localStorage：存储持久数据，浏览器关闭后数据不丢失除非主动删除数据
- sessionStorage：数据在当前浏览器窗口关闭后自动删除
- cookie：设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭。

#### 组件传值

##### 父传子

- 首先在使用子组件的标签上 通过自定义属性传递变量 在子组件中 通过 props 接受 在接收的时候有两种接收方式 数组形式 和 对象形式 对象形式可以规定传来的变量的数据类型（type）默认值（default）以及是否必填（required）

##### 子传父

- 首先在使用子组件的标签上定义一个自定义事件 在子组件里通过 this.$emit 去调用这个自定义事件 $emit 方法的第一个参数是自定义事件的名字 第二个参数是就是子组件要传递给父组件的变量 最后在父组件接收使用就可以了

##### 兄弟组件

- 利用中央事件总线 eventbus 在 main.js 中 把一个空的 vue 实例挂载在 vue 的原型上起名叫$bus 传数据的时候用this.$bus.$emit传 在要接受数据的子组件 在 created钩子函数中 用$on 方法接收

##### Vuex

- vuex 进行组件通信 把公共的数据存在 vuex 里就可以实现组件之间都能使用这个数据了

##### v-model

- v-model 就是 :value 和 @input 事件的合写 如果在一个子组件上使用 v-model 也能实现父子组件之间的通信

##### $attr + $listener

- 如果父组件 A 下面有子组件 B 子组件 B 下面又有子组件 C 如果 a 组件的变量和方法想要传给组件 C 的时候 就用到这个方法 适用于多级组件传值 在 B 组件中给 C 组件绑定 v-bind=“a t t r s " v − o n = " attrs" v-on="attrs"v−on="listeners” 然后在 C 组件中就可以直接使用 a 传来的属性和方法了 简单来说:attrs与attrs与attrs与listeners 是两个对象,attrs里存放的是父组件中绑定的非Props属性,attrs 里存放的是父组件中绑定的非 Props 属性，attrs里存放的是父组件中绑定的非Props属性，listeners 里存放的是父组件中绑定的非原生事件

##### provide 和 inject 

- provide 和 inject 父组件通过通过 provide 提供变量 子组件中通过 inject 注入变量，不论嵌套了几层子组件 都能通过 inject 来调用 provide 的数据这种写法传的数据是不响应的

##### $parent和$children

- $parent和$children 在子组件内可以直接通过$parent对父组件进行操作，在父组件内可以直接通过$children 对子组件进行操作 在父组件调用子组件时候要加下标也就是$children 是一个数组 因为可以有很多个子组件

##### 本地存储

- 本地存储来完成组件通信 localStorage sessionStorage

#### 跨域

- 产生的原因
  - 因为浏览器的同源策略的原因，一旦域名，ip,端口，协议，任何一个不同就好产生跨域的问题
- 解决跨域的方式
  - CORS
  - window.domain
  - location.href
  - proxy(本地)
  - jsop
    - 限制
      - 需要服务的支持
      - 只能发起GET请求
  - Script src解决跨域 img src
  - nginx(线上代理的方式解决跨域)

#### http和https的区别

- https协议需要到CA申请证书，一般免费证书较少，因而需要一定费用。
- http是超文本传输协议，信息是明文传输，https则是具有安全性的ssl/tls加密传输协议。
- http和https使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443。
- http的连接很简单，是无状态的；HTTPS协议是由SSL/TLS+HTTP协议构建的可进行加密传输、身份认证的网络协议，比http协议安全。