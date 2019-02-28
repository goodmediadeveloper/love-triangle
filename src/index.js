/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;
  for (var i = 0; i < preferences.length; i++) {
    var x = preferences[i]-1;
    var y = preferences[x]-1;
    if (preferences[y]-1 === i&&x!==y) {
      preferences[i]=null;
      preferences[x]=null
      preferences[y]=null
      count++;
    }
  }
  return count;
};