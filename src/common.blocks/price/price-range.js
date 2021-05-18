import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

const priceRange = document.getElementById('price-range');

if (priceRange) {
  noUiSlider.create(priceRange, {
    start: [100, 343342],
    connect: true,
    step: 1,
    range: {
      min: [100],
      max: [343342],
    },
  });

  const input0 = document.getElementById('price-0');
  const input1 = document.getElementById('price-1');

  const inputs = [input0, input1];

  priceRange.noUiSlider.on('update', (values, handle) => {
    inputs[handle].value = Math.round(values[handle]);
  });

  const setPriceRange = (i, value) => {
    const arr = [null, null];
    arr[i] = value;
    priceRange.noUiSlider.set(arr);
  };

  inputs.forEach((el, index) => {
    el.addEventListener('change', (e) => {
      setPriceRange(index, e.currentTarget.value);
    });
  });
}
