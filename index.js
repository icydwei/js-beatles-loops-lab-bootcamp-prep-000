// add solution here
function theBeatlesPlay (musicians, instruments) {
  var empty = [];
  for (let i = 0; i < musicians.length; i++) {
    empty.push(console.log(`${musicians[i]} plays ${instruments[i]}`))
  }
  return empty
}