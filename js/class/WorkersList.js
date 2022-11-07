class WorkersList {
    list = [];

    constructor(empty) {

    }
    addWorker(workerObj) {
        if (workerObj instanceof Employee || workerObj instanceof Freelancer) {
            this.list.push(workerObj);
        } else {
            throw new Error('Only valid workers please');
        }
    }

}