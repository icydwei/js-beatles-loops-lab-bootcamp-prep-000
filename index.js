// add solution here
function theBeatlesPlay (musicians, instruments) {
  var joiner = [];
  for (let i = 0; i < musicians.length; i++) {
    joiner.push(console.log(`${musicians[i]} plays ${instruments[i]}`))
  }
  return joiner
}