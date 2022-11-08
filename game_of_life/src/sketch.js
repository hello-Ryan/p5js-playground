function create2DArray(rows, cols) {
  let arr = new Array(rows);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(cols);
    for (let j = 0; j < cols; j++) {
      arr[i][j] = floor(random(2));
    }
  }
  return arr
}
let grid;
let cols;
let rows;
let squareSize = 40

function setup() {
  createCanvas(800,800);
  cols = width / squareSize
  rows = height / squareSize
  grid = create2DArray(rows,cols)
}

function draw() {
  background(0)
  

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * squareSize;
      let y = j * squareSize;
      if (grid[i][j]==1) {
        fill(255);
        rect(x,y,squareSize, squareSize);
      }
    }
  }




}
