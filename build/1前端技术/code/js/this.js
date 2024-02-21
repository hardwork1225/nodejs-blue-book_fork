function Person(name) {
  this.name = name;
}
Person.prototype.play = function () {
  console.log(this + '====>' + this.name);
};

function Student(name) {
  this.name = name;
}
var per = new Person('人');
var stu = new Student('学生');
per.play();
// 复制了一个新的play方法
var ff = per.play.bind(stu);
ff();
