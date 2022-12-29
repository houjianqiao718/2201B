// 接口的高阶用法 关键字interface
// 特点: 相同名字的interface会合并,如果属性名相同,会以第一个接口名称定义为准
interface Person {
    name: string
    age: number
    sex: number,
    isJob: boolean,
    hobby: string[]
    former: number
    formerName: [string,string,string]
}
interface Person {
    idCard?: string  // ?代表非必传，可有可无
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