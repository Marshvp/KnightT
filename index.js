/*
    Knight Travails
    build a function knightMoves that shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way.

    possible moves for a knight
    x = [2, 1, -1, -2, -2, -1, 1, 2]
    y = [1, 2, 2, 1, -1, -2, -2, -1]


    

*/

function inBounds(x, y) {
    if(x < 0 || x > 7 || y < 0 || y > 7) {
        return false
    }
    return true
}

function knightMoves(start, end) {

    const knight_moves = [[2, 1], [1, 2], [-1, 2], [-2, 1], [-2, -1], [-1, -2], [1, -2], [2, -1]];

    let queue = [];
    queue.push([start, [start]]);

    let visited = new Set([`${start}`]);

    while(queue.length > 0) {
        let [currentPos, path] = queue.shift();
        let[x, y] = currentPos;

        if(x ===end[0] && y === end[1]) {
            return `Shortest Path is: ${path.map(pos => `(${pos})`).join(' -> ')}`
        }
        knight_moves.forEach(([dx, dy]) => {
            let nextX = x + dx;
            let nextY = y + dy;
            
            if (inBounds(nextX, nextY) && !visited.has(`${nextX},${nextY}`)) {
                visited.add(`${nextX},${nextY}`);
                queue.push([[nextX, nextY], [...path, [nextX, nextY]]]); // Enqueue
            }
        });
    }
    
    return null; // If no path is found
    
}

const start = [0, 0];
console.log(knightMoves(start, [7, 7]));