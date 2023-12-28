Function.prototype.call2 = function(context, ...args){
  if(typeof context === 'undefined' || context === null){
    context = window;
  }
  const SysbolFn = Symbol();
  context[SysbolFn] = this;
  const result = context[SysbolFn](...args);
  delete context[SysbolFn];
  return result;
}

const obj = {
  val: 1,
}
function info(name, age){
  console.log(name);
  console.log(age);
  console.log(this.val);
}
info.call2(obj,'Tom',18)