// Function.prototype.call2 = function(context){
//   context.fn = this;
//   context.fn();
//   delete context.fn
// }
// let obj = {
//   val: 2
// }
// function foo(){
//   console.log(this.val);
// }
// foo.call2(obj);



// Function.prototype.call2 = function(){
//   const context = arguments[0];
//   const args = [...arguments].slice(1);
//   context.fn = this;
//   context.fn(...args);
//   delete context.fn
// }

// Function.prototype.call2 = function(context,...args){
//   context.fn = this;
//   context.fn(...args);
//   delete context.fn
// }

// Function.prototype.call2 = function(context){
//   var context = context || window;
//   context.fn = this;

//   let args = [...arguments].slice(1);
//   let result = context.fn(...args);

//   delete context.fn;

//   return result;
// }

// 最终版
Function.prototype.call2=function(context,...args){
  if(typeof context === 'undefined' || context === null){
    context = window;
  }
  let SymbolFn = Symbol();
  context[SymbolFn] = this;
  let result = context[SymbolFn](...args);
  delete context[SymbolFn];
  return result;
}
let obj = {
  val: 2
}
function info(name, age){
  console.log(name);
  console.log(age);
  console.log(this.val);
}
info.call2(obj,'Tom',18)