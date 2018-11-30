class ViewModel {
  constructor(model) {
    this._model = model;
  }

  bind = (viewElement, modelAttribute) => {
    viewElement.value = this._model.getValue(modelAttribute);
    
    // model -> view 的同步
    this._model.subscribe((attribute, value) => {
      console.log(`model -> view: ${value}`);
      document.getElementsByName(attribute).forEach(elem => {
        elem.value = value;
      });
    });

    // view -> model 的同步
    viewElement.addEventListener('input', () => {
      console.log(`view -> model: ${viewElement.value}`);
      this._model.setValue(viewElement.name, viewElement.value);
    });
  }
}

export default ViewModel;