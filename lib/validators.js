function StringValidator(val) {
  return val == 'something';
}
function NumberValidator(val) {
  Number.min = 0;
  return val == 1;
}
