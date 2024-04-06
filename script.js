1./*class Movie{
    constructor(title,studio,rating="PG"){
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    } 
 }
 const obj = new Movie("Casino Royale","Eon Productions","PG13")
 const obj1 = new Movie("vikram","Raaj kamal Filims International")
 const obj2 = new Movie("joe","Vision Cinema House",18)
 const obj3 = new Movie("Thunivu","Zee studios")
 const obj4 = new Movie("Singapore Saloon","vels film International ltd")
 console.log(obj.title,obj.studio,obj.rating);
 console.log(obj1.title,obj1.studio,obj1.rating);
 console.log(obj2.title,obj2.studio,obj2.rating);
 console.log(obj3.title,obj3.studio,obj3.rating);
 console.log(obj4.title,obj4.studio,obj4.rating);

2.Circle - Class

class Circle {
  get Color() {}
  set Color(C) {
    this.Color =C;
  }
  get toString() {
    return `"Circle[radius=${this.radius},Color =${this.Color}]"`;
  }
  get area() {
    return Math.PI * Math.pow(this.radius, 2);
  }
  get circumference() {
    return 2 * Math.PI * this.radius;
  }
}
let obj = new Circle(1.0, "red");
console.log(obj.Color);
console.log(obj.radius);
console.log(obj.toString);
console.log(obj.area);
console.log(obj.circumference);
obj.radius = 3.5;
console.log(obj.radius);
obj.Color = "green";
console.log(obj.Color);


3.//Class person

class Person{
    constructor(names,age,qualification,skills,email){
        this.names=names;
        this.age=age;
        this.qualification=qualification;
        this.skills=skills;
        this.email=email;
    }
}
const obj = new Person("Karthik",21,"Bsc","HTML CSS JAVASCRIPT","karthikkarthi1.d@gamil.com")
console.log(obj.names,obj.age,obj.qualification,obj.skills,obj.email)
*/