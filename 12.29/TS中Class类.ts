/**TS中类的定义*/
class Peoples {
    name: string
    age: number
    constructor(name: string, age){
        this.name = name
        this.age = age
    }
    sport():string{
        return `${this.name}会跳舞`
    }
}
//对类进行实例化
let p1 = new Peoples('老六', 18)
// 调用类的方法
console.log(p.sport()); // 老六会跳舞

//获取类的属性
console.log(p.age); // 18



/**类的继承*/
class Animal {
    name: string
    constructor(name) {
        this.name = name;
    }
    getName(): string {
        return this.name;
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
}
let dog = new Dog('萨摩耶');
console.log(dog.name);  // 萨摩耶
console.log(dog.getName()); // 萨摩耶