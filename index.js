// add solution here
function theBeatlesPlay (musicians, instruments) {
  var empty = [];
  for (var i = 0; i < musicians.length; i++) {
    var statement = console.log(musicians[i], " plays", instruments[i])
    empty[i] = statement;
  }
  return empty
}