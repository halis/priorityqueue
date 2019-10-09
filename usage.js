
const PriorityQueue = require('./priorityqueue')

const q = new PriorityQueue()
q.add('a', 10)
q.add('b', 100)
q.add('c', 20)
q.add('d', 0)
q.add('e', 200)

let answer = q.print()
if (answer !== 'e -> b -> c -> a -> d -> null') {
  console.log({ answer })
  throw new Error('fail: e -> b -> c -> a -> d -> null')
}

answer = q.remove()
if (answer !== 'e') {
  throw new Error('fail: e')
}
answer = q.remove()
if (answer !== 'b') {
  throw new Error('fail: b')
}
answer = q.remove()
if (answer !== 'c') {
  throw new Error('fail: c')
}

answer = q.print()
if (answer !== 'a -> d -> null') {
  throw new Error('fail: a -> d -> null')
}
