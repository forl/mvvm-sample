class Model {

  _model = {
    'sample-input': 'init data',
  };

  _listeners = [];
  
  _notify = (attribute, value) => {
    for (let i = 0; i < this._listeners.length; i++) {
      this._listeners[i](attribute, value);
    }
  }

  subscribe = (listener) => {
    this._listeners.push(listener);
  }

  setValue = (attribute, value) => {
    this._model[attribute] = value;
    this._notify(attribute, value);
  }

  getValue = (attribute) => {
    return this._model[attribute];
  }
}

export default Model;