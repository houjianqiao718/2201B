// number类型
let num1: number = 1
let num2: number = 2
let sum: number = num1 + num2

// string类型
let str1: string = "hello"
let str2: string = "TS"
let str: string = str1 + str2

// boolean类型
let bool: boolean = true

// 数组类型Array
// 有两种创建方式：第一种字面量；第二种new Array
let arr1: number[] = [1, 2, 3]; // 数组包数字
let arr2: Array<number> = [1, 2, 3]; // Array<number>泛型语法
let arr3: string[] = ["1", "2", "3"]  // 数组包字符串
let arr4: Array<string> = ["1", "2", "3"]; // Array<number>泛型语法

// 元祖 tuple
// 概念: 长度有限，元组组成的内容的属性 类型不是单一的
let tuple: [number,string,boolean] = [1,'2', true];

// null undefind
// 既为类型，又为值
let a: null = null;
let b: undefined = undefined

// object的对象
// object | null 类型断言
// declare function create(o:object | null) : void
// create({props: 0})
// create(3222)  // 类型“number”的参数不能赋给类型“object”的参数
// create("dddd") // 类型“string”的参数不能赋给类型“object”的参数。
// create(undefined) // Error类型“undefined”的参数不能赋给类型“object  null”的参数

// 简单对象类型
let obj: { name: string, age: number }
obj = {name: "张三", age: 18}

// any任意类型
let names: any = "string"
names = 123

// enum 枚举
/**
 * 特点: 1.常用来封装code吗等固定一下比较
 *      2.如果一开始没有设置状态码，成递增形式进行增加
 *      3，只能是数字的状态码进行递增，其他形式均报错
*/
enum CODE {
    SUCCESS = 200,
    ERROR = 500,
}
console.log(CODE.SUCCESS); // 200
console.log(CODE['ERROR']); // 500

enum CODE1 {
    SUCCESS,
    ERROR,
    WARING
}
console.log(CODE1.SUCCESS); // 0
console.log(CODE1['ERROR']); // 1
console.log(CODE1.WARING); // 2


// void
// 定义函数的：表示函数没有返回值
function getName1 (name:string, age: number): void {
    console.log();
}
function getName2 (name: string,age: number): string {
    return name + age
}

// 交叉类型 &
interface use {
    name: string,
    age: number
}
interface per {
    sex: number
}
type allInfo = use & per
let persons: use & per = {name: "张三", age: 18, sex: 1}


// 联合类型 |
// 满足其中的任意一个
let allType: number | string
allType = 66
allType = "hello"
// allType = false  报错：原因不能将类型“boolean”分配给类型“string | number”


// 类型断言
// 尖括号写法
let strs: any = "to";
let strLength: number = (<string>strs).length;
// as写法
let strs1: any = "to be or not to be";
let strLength1: number = (strs1 as string).length;


// interface 类似于对象: {}代码块
// 接口的高阶用法
interface Person {
    name: string
    age: number
    sex: number,
    isJob: boolean,
    hobby: string[]
    former: number
    formerName: [string,string,string]
}
let person: Person = { 
    name: "张三",
    age: 18,
    sex: 1,
    isJob: true,
    hobby: ["唱歌", "睡觉"],
    former: 6,
    formerName: ["1110","2220", "3330"]
}