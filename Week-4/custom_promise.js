const STATE = {
    PENDING: 'PENDING',
    FULFILLED: 'FULFILLED',
    REJECTED: 'REJECTED',
  }
  
  class MyPromise {
    constructor(callback) {
      //Initial state of promise is empty
      this.state = STATE.PENDING;
      this.value = undefined;
      this.handlers = [];
      try {
        callback(this._resolve, this._reject)
      } catch (err) {
        this._reject(err);
      }
    }
  
    _resolve = (value) => {}
    _reject  = (error) => {}
  
    then(onSuccess, onFail) {}
    catch(onFail) {}
    finally(callback) {}
  }
  