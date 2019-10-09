
class Node {
  constructor(data, priority) {
    this.data = data
    this.priority = priority
    this.next = null
  }
}

const log = any => process.stdout.write(any) 

class PriorityQueue {
  constructor() {
    this.first = null
  }

  print() {
    let result = ''
    let part = ''
    let curr = this.first
    let ctr = 0
    while (curr) {
      if (!curr) {
        break
      }
      if (ctr === 0) {
        part = `${curr.data}`
        log(part)
        result += part
      } else {
        part = ` -> ${curr.data}`
        log(part)
        result += part
      }
      ctr++
      curr = curr.next
    }

    part = ' -> null\n'
    log(part)
    result += part

    return result.trim()
  }

  add(data, priority) {
    const node = new Node(data, priority)
    if (!this.first) {
      this.first = node
      return node
    }

    if (priority > this.first.priority) {
      node.next = this.first
      this.first = node
      return node
    }

    let curr = this.first
    let next = this.first.next

    while (curr) {
      if (next == null) {
        curr.next = node
        return node
      } else if (priority > next.priority) {
        curr.next = node
        node.next = next
        return node
      }
      
      curr = curr.next
      next = curr.next
    }
  }

  remove() {
    const first = this.first
    this.first = this.first.next
    return first.data
  }
}

module.exports = PriorityQueue
