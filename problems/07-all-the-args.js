function allTheArgs(func, ...args) {
  // Your code here
  const result = func.bind(null, ...args);
  return result;
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
