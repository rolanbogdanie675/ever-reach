// Filename: ComplexCode.js

// This complex code demonstrates an implementation of a maze-solving algorithm.
// It uses a depth-first search algorithm to find a path from the start point to the end point in a maze represented by a 2D array.

// The maze is represented by a 2D array, where:
// 0 represents a wall
// 1 represents an open path
// S represents the starting point
// E represents the end point

const maze = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 0, 'S', 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0],
  [0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 1, 0, 0, 0, 'E', 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
  [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

// Define constants for directions
const DIRECTIONS = {
  UP: [-1, 0],
  RIGHT: [0, 1],
  DOWN: [1, 0],
  LEFT: [0, -1],
};

// Function to solve the maze using depth-first search (DFS)
function solveMaze() {
  const start = findStartPoint(); // Find the starting point in the maze
  const path = []; // Store the path to the end point

  dfs(start[0], start[1], path); // Perform DFS from the starting point

  return path;
}

// Function to perform depth-first search (DFS)
function dfs(row, col, path) {
  if (!isValidCell(row, col)) return false; // Base case: Reached an invalid cell

  if (maze[row][col] === 'E') return true; // Base case: Reached the end point

  maze[row][col] = '*'; // Mark current cell as visited

  for (const direction in DIRECTIONS) {
    const [dx, dy] = DIRECTIONS[direction];

    const newRow = row + dx;
    const newCol = col + dy;

    if (dfs(newRow, newCol, path)) {
      // Recursive call
      path.push([newRow, newCol]); // Add current cell to the path
      return true;
    }
  }

  return false; // No path found from this cell
}

// Function to find the starting point in the maze
function findStartPoint() {
  for (let row = 0; row < maze.length; row++) {
    for (let col = 0; col < maze[row].length; col++) {
      if (maze[row][col] === 'S') {
        return [row, col];
      }
    }
  }

  return null; // No start point found
}

// Function to check if a cell is valid (within the maze boundary)
function isValidCell(row, col) {
  return (
    row >= 0 &&
    row < maze.length &&
    col >= 0 &&
    col < maze[row].length &&
    maze[row][col] !== 0 &&
    maze[row][col] !== '*'
  );
}

// Solve the maze and print the path
const path = solveMaze();
console.log("Path:", path);

// Output the maze with the path
for (let row = 0; row < maze.length; row++) {
  let rowStr = '';
  for (let col = 0; col < maze[row].length; col++) {
    if (maze[row][col] === '*') {
      rowStr += '# '; // Represent visited cells with #
    } else if (maze[row][col] !== 0) {
      rowStr += maze[row][col] + ' ';
    } else {
      rowStr += '  ';
    }
  }
  console.log(rowStr);
}

// Note: This is a simplified implementation without error handling or optimizations. It serves as a demonstration of a complex code structure.