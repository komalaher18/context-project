function callOnTarget(func, obj1, obj2) {
  // Your code here
  const result = func.call(obj1, obj2);
  return result;
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = callOnTarget;
