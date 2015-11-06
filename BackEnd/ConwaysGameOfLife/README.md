#ConwaysGameOfLife

##Rules:
 - Any live cell with fewer than two live neighbours dies, as if caused by under-population.
 - Any live cell with two or three live neighbours lives on to the next generation.
 - Any live cell with more than three live neighbours dies, as if by over-population.
 - Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

###Instructions
1. Create a unit tests project within this solution
2. Write some tests for your implementation of Conways Game Of Life:
    1. Create a test file in the test project.
    2. Create a ConwaysGameOfLife class in the ConwaysGameOfLife project that implements the Board interface.
    3. Write tests for all the rules and implement them.

In order to visualize your particular class, change the class that is being initialized on the first line of the MainWindow constructor.

######I suggest that your implementation's constructor take an argument that sets up the initial board state.