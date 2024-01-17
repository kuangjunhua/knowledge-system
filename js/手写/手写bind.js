// Function.prototype.bind2 = function(context){
//   let self = this;
//   let args = Array.prototype.slice.call(arguments,1); // bind时的参数
//   return function(){
//     const bindFnArgs = Array.prototype.slice.call(arguments); // 调用返回函数时的参数
//     return self.apply(context,args.concat(bindFnArgs));
//   }
// }
// let obj={
//   val:10
// }
// function info(name, age){
//   console.log(name);
//   console.log(age);
//   console.log(this.val);
// }
// const bindFn = info.bind2(obj,'Jack');
// bindFn(19);

/** bind返回的函数作为构造函数时this的指向会发生变化 */
var value = 2;
var foo = {
  value: 1,
}
function bar(name,age){
  console.log(this.value);
  console.log(name);
  console.log(age);
}
bar.prototype.friend = "Jack";
// var bindBar = bar.bind(foo,'Tom');
// var obj = new bindBar(18);
// console.log(obj);
Function.prototype.bind2 = function(context){
  let self = this;
  let args = Array.prototype.slice.call(arguments,1);

  let bindFn = function(){
    let bindFnArgs = Array.prototype.slice.call(arguments);
    return self.apply(this instanceof bindFn ? this : context, args.concat(bindFnArgs));
  }
  return bindFn;
}
let bindBar = bar.bind2(bar, 'Lucy');
let obj = new bindBar(19);
console.log(obj);