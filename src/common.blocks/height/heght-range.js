import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

const heightRange = document.getElementById('height-range');

if (heightRange) {
  noUiSlider.create(heightRange, {
    start: [1, 240],
    connect: true,
    step: 1,
    range: {
      min: [1],
      max: [240],
    },
  });

  const input0 = document.getElementById('height-0');
  const input1 = document.getElementById('height-1');

  const inputs = [input0, input1];

  heightRange.noUiSlider.on('update', (values, handle) => {
    inputs[handle].value = Math.round(values[handle]);
  });

  const setheightRange = (i, value) => {
    const arr = [null, null];
    arr[i] = value;
    heightRange.noUiSlider.set(arr);
  };

  inputs.forEach((el, index) => {
    el.addEventListener('input', (e) => {
      setheightRange(index, e.currentTarget.value);
    });
  });
}
