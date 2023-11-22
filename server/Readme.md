1. Initially two apis here
2. one blocking that will take too many time to response
3. Non blocking api will response quickly
4. This is the issue, During any blocking api call, non blocking api will also got hanges
5. We need to initialize worker to calculate all the blocking works


State Two
1. Here we generate the workers that will calculate the CPU intensive work
