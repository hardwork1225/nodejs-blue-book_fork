class Person {
  constructor(name, age) {
    this.name = name; // this指该类的实例对象
    this.age = age;
  }
  speak() {
    // speak方法在类的原型对象上，供实例调用
    // 通过Person实例调用speak时，speak中的this是Person实例
    // 通过call、bind等方法调用speak，this指向被改变
    console.log(`My name is ${this.name}, I am ${this.age} years old.`);
  }
}

class Student extends Person {
  constructor(name, age, school) {
    super(name, age); // 调用父类构造函数
    this.school = school;
  }
  study() {
    // study方法在类的原型对象上，供实例调用
    // 通过Student实例调用study时，study中的this是Student实例
    console.log(`I study in ${this.school}.`);
  }
}

const stu1 = new Student('Tom', 18, 'ECNU');

stu1.speak(); // My name is Tom, I am 18 years old.
stu1.study(); // I study in ECNU school.
