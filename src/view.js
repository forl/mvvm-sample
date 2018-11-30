import ViewModel from './view-model';
import Model from './model';

function init() {
  const sampleInput = document.getElementById('sample-input');
  const sampleInputSync = document.getElementById('sample-input-sync');

  const model = new Model();
  const viewModel = new ViewModel(model);

  viewModel.bind(sampleInput, 'sample-input');
  viewModel.bind(sampleInputSync, 'sample-input');
}

export default init;