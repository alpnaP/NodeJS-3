function apiCall(arg, callback) {
    if (typeof arg !== 'string')
      return process.nextTick(callback,
                              new TypeError('argument should be string'));
  }