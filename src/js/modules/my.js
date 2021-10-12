export default () => {
  const obj = { a: 1, b: 2 };
  const newObj = { ...obj, c: 3 };
  console.log('this is module', newObj);
  [1, 2, 3].includes(2);
};
