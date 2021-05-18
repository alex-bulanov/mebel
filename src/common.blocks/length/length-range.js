import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

const lengthRange = document.getElementById('length-range');

if (lengthRange) {
  noUiSlider.create(lengthRange, {
    start: [400, 2000],
    connect: true,
    step: 1,
    range: {
      min: [1],
      max: [2000],
    },
  });

  const input0 = document.getElementById('length-0');
  const input1 = document.getElementById('length-1');

  const inputs = [input0, input1];

  lengthRange.noUiSlider.on('update', (values, handle) => {
    inputs[handle].value = Math.round(values[handle]);
  });

  const setlengthRange = (i, value) => {
    const arr = [null, null];
    arr[i] = value;
    lengthRange.noUiSlider.set(arr);
  };

  inputs.forEach((el, index) => {
    el.addEventListener('change', (e) => {
      setlengthRange(index, e.currentTarget.value);
    });
  });
}
