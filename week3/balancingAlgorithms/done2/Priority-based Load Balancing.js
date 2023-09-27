class LoadBalancer {
    constructor() {
        this.queues = {};
        this.workers = {};
    }

    addRequest(priority, request) {
        if (!this.queues[priority]) {
            this.queues[priority] = [];
        }
        this.queues[priority].push(request);

        // Start processing requests if not already started
        if (!this.workers[priority]) {
            this.startWorker(priority);
        }
    }

    startWorker(priority) {
        const worker = () => {
            if (this.queues[priority].length > 0) {
                const request = this.queues[priority].shift();
                // console.log(`Processing request with priority ${priority}: ${request}`);

                // Simulate request processing time
                setTimeout(() => {
                    console.log(`Finished processing request with priority ${priority}: ${request}`);
                    worker(); // Continue processing
                }, Math.random() * 1000); // Simulated processing time between 0 to 2 seconds
            } else {
                this.workers[priority] = null; // No more tasks, worker is free
            }
        };

        this.workers[priority] = worker;
        worker();
    }
}

const loadBalancer = new LoadBalancer();

// Add requests with different priorities
loadBalancer.addRequest(1, "Request 1 (Low Priority)");
loadBalancer.addRequest(2, "Request 2 (Medium Priority)");
loadBalancer.addRequest(3, "Request 3 (High Priority)");
loadBalancer.addRequest(1, "Request 4 (Low Priority)");
loadBalancer.addRequest(3, "Request 5 (High Priority)");
loadBalancer.addRequest(2, "Request 6 (Medium Priority)");

// Output will show that high-priority requests are processed faster

