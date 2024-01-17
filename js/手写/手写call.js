let obj = {
  value: 10
}

Function.prototype.call2=function(context, ...args){
  context = context || window;

  let SymbolFn = Symbol();
  context[SymbolFn] = this;

  let result = context[SymbolFn](...args)
  delete context[SymbolFn];
  return result;

}

function info(name,age){
  console.log(this.value);
  console.log(name);
  console.log(age);
}

info.call2(obj,"Tom",18)