Function.prototype.apply2 = function(context,args){
  if(typeof context === 'undefined' || context === null){
    context = window;
  }
  let SymbolFn = Symbol();
  context[SymbolFn]=this;
  let result = context[SymbolFn](...args);
  delete context[SymbolFn];
  return result;
}

let obj = {
  val: 2
}
function info(name,age){
  console.log(name);
  console.log(age);
  console.log(this.val);
}
info.apply2(obj,["Jack",19])