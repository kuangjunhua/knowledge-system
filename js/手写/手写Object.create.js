function inherit(obj){
  if (obj === null) throw TypeError();
  if(Object.create){
    return Object.create(obj);
  }

  if( typeof obj !== 'object' && typeof obj !== 'function') throw TypeError();

  function f(){};
  f.prototype = obj;
  return new f();
}
