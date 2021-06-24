function hanoi(n) {
    if (n > 0) {
        move(n, "left", "right", "mid")
    }
}

function move(n, from, to, other) {
    if (n === 1) {
        console.log("move ",n," from ", from, " to ", to)
    }
    else {
        move(n-1,from,other,to)
        console.log("move ",n," from ",from," to ", to)
        move(n-1,other,to,from)
    }
}

hanoi(3)