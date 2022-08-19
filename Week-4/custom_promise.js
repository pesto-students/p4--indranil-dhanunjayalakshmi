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
  
    _resolve = (value) => {
      this.updateResult(value, STATE.FULFILLED);
    }
    _reject  = (error) => {
      this.updateResult(error, STATE.REJECTED);
    }
  
    updateResult(value, state) {
      setTimeout(() => {
        if (this.state !== STATE.PENDING) {
          return;
        }
  
        if(isThenable(value)) {
          return value.then(this._resolve, this._reject);
        }
  
        this.value = value;
        this.state = state;
  
        this.executeHandlers();
        
      }, 0);
    }
  
    then(onSuccess, onFail) {}
    catch(onFail) {}
    finally(callback) {}
  }
  