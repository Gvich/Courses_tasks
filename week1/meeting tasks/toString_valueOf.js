Object.prototype.valueOf = function () {
    // console.log("obj_valueOf");
    return Math.random() * 1000
};

Object.prototype.toString = function () {
    // console.log("obj_toString");
    return "abcd";
};
  
const obj = {
    [Symbol.toPrimitive](hint) {
        if (hint === 'number') {
        // console.log(hint, 'hint')
          return this.valueOf()
        }
        if (hint === 'string') {
          return this.toString();
        }
        return this.toString();
      }
};  
console.log(obj + obj); // obj_toString
console.log(obj - obj); // obj_valueOf
console.log(obj * obj); // obj_valueOf
console.log(obj / obj); // obj_valueOf

/*Object.prototype.toString = () => {
    console.log( 'obj_toString')
    return 'abcd'
}

Object.prototype.valueOf = () => {
    console.log( 'obj_valueOf')
    return Math.random() * 1000
}

Date.prototype.valueOf = () => {
    console.log('date_valueOf')
    return Math.random() * 1000
}

Date.prototype.toString = () => {
    console.log('date_toString')
    return 'abcd'
}

const obj = {}
const obj2 = {}
const date = new Date()
const date2 = new Date()

console.log("" + obj + obj2, date + date2, obj2 + date2)*/

  


  
  