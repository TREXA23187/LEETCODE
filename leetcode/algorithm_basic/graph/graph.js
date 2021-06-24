class Node {
    constructor(value) {
        this.value = value
        this.in = 0
        this.out = 0
        this.nexts = []
        this.edges = []
    }
}

class Edge {
    constructor(weight, from, to) {
        this.weight = weight
        this.from = from
        this.to = to
    }
}

class Graph {
    constructor() {
        this.nodes = new Map()
        this.edges = new Set()
    }
}

function createGraph(matrix) {
    const graph = new Graph()
    for (let i = 0; i < matrix.length; i++) {
        const weight = matrix[i][0]
        const from = matrix[i][1]
        const to = matrix[i][2]

        if (!graph.nodes.has(from)) {
            graph.nodes.set(from,new Node(from))
        }
        if (!graph.nodes.has(to)) {
            graph.nodes.set(to,new Node(to))
        }

        const fromNode = graph.nodes.get(from)
        const toNode = graph.nodes.get(to)

        const newEdge = new Edge(weight, fromNode, toNode)
        fromNode.nexts.push(toNode)
        fromNode.out++
        toNode.in++
        fromNode.edges.push(newEdge)
        graph.edges.add(newEdge)
    }

    return graph
}

function BFS(node){
    if(node === null){
        return
    }
    const queue = []
    const set = new Set()

    queue.unshift(node)
    set.add(node)
    while (queue.length !== 0){
        let cur = queue.pop()
        console.log(cur.value)
        for(let next of cur.nexts){
            if(!set.has(next)){
                set.add(next)
                queue.unshift(next)
            }
        }
    }
}

function DFS(node){
    if(node === null){
        return
    }
    const stack = []
    const set = new Set()
    stack.push(node)
    set.add(node)
    console.log(node.value)
    while (stack.length!==0){
        let cur = stack.pop()
        for(let next of cur.nexts){
            if(!set.has(next)){
                stack.push(cur)
                stack.push(next)
                set.add(next)
                console.log(next.value)
                break
            }
        }
    }
}

function sortedTopology(graph){
    const inMap = new Map()
    const zeroInQueue = []

    for(let [,node] of graph.nodes){
        // console.log(node)
        inMap.set(node,node.in)
        if(node.in === 0){
            zeroInQueue.unshift(node)
        }
    }

    const result = []
    while(zeroInQueue.length !== 0){
        let cur = zeroInQueue.pop()
        result.push(cur)
        for(let next of cur.nexts){
            inMap.set(next,inMap.get(next)-1)
            if(inMap.get(next) === 0){
                zeroInQueue.unshift(next)
            }
        }
    }
    return result
}

const matrix = [[3,1,2],[1,1,3],[4,2,5],[2,3,4],[5,5,6],[3,4,5],[1,4,2]]

const graph = createGraph(matrix)

// console.log(graph.nodes)
// console.log(graph.edges)

DFS(graph.nodes.get(1))
// for(let n of sortedTopology(graph)){
//     console.log(n.value)
// }
