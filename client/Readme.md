First Commit
1. Find the prime number list from 1 to given number
2. This is a CPU intensive work
3. For big number we can not control other works like change the BG color
4. This code is working with single thread
5. We are going to make it multi threaded

Second Commit
1. Here we create a worker that can take any work and return the result
2. Main threat will initiate the worker threat and assign a task
3. Main threat will not be busy during the calculation of worker threat exicution