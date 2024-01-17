let obj = {
  value: 10
}
Function.prototype.apply2=function(context,args){
  context = context || window;

  const SymbolFn = Symbol();

  context[SymbolFn] = this;

  let result = args ? context[SymbolFn](...args) : context[SymbolFn]();

  delete context[SymbolFn];
  return result;
}

function info(name,age){
  console.log(this.value);
  console.log(name);
  console.log(age);
}

info.apply2(obj,["Tom",18])