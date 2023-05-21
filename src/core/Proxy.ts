const props = {
    test: 'test',
    _privateProp: 'testP',
};
  
type Target = {
    test: string,
    _privateProp: string
}

const proxyProps = new Proxy(props, {
  get(target: Target, prop: keyof Target) {
    if (prop.indexOf('_') === 0) {
      throw new Error("Нет прав");
    } else {
      const value: Function | string = target[prop];
      return (typeof value === 'function') ? (value as Function).bind(target) : value;
    }
  },
  set(target: Target, prop: keyof Target, val) {
    if (prop.indexOf('_') === 0) {
      throw new Error("Нет прав");
    } else {
      target[prop] = val;
      return true;
    }
  },
  deleteProperty(target: Target, prop: keyof Target) {
    if (prop.indexOf('_') === 0) {
      throw new Error("Нет прав");
    } else {
      delete target[prop];
      return true;
    }
  }
});