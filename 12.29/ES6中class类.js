/**es6中类的定义*/

// 声明类
class People {
    // 类的属性
    constructor(name, age) {
        this.name = name
        this.age = age
    } // 构造器，实例化方法的时候触发
    // 类的方法
    sport(){
        return this.name + "会唱歌"
    } 
}
// 对类进行实例化
let p = new People('张三',18)

// 调用类的方法
console.log(p.sport()); // 张三会唱歌

//获取类的属性
console.log(p.age); // 18