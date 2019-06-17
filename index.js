// add solution here
function theBeatlesPlay (musicians, instruments) {
  var empty = [];
  for (var i = 0; i < musicians.length; i++) {
    var middleword = " plays"
    var statement = console.log(musicians[i] + middleword + instruments[i])
    empty.push(statement)
    }
  return empty
}