function changeContext(func, obj) {
  // Your code here

  const res = func.bind(obj);
  return res();
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;
