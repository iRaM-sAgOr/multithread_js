import { Worker, isMainThread, parentPort, workerData } from 'worker_threads';

if (!isMainThread) {
    // Worker thread logic
    const cpuIntensiveTask = workerData => {
        // Simulated CPU-intensive task (e.g., calculating a large Fibonacci number)
        function fibonacci(n) {
            if (n <= 1) {
                return n;
            }
            return fibonacci(n - 1) + fibonacci(n - 2);
        }

        const result = fibonacci(workerData);
        parentPort.postMessage(result); // Send the result back to the main thread
    };

    cpuIntensiveTask(workerData);
}