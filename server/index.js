import express from 'express';
import {Worker} from "worker_threads"
const app = express();

app.get('/non-blocking', (req, res) => {
    console.log('Get request')
    res.status(200).send({ success: true, value: 100 })
})

app.get('/blocking/:number', (req, res) => {
    const number = parseInt(req.params.number);
    const worker = new Worker('./worker.js', {
        workerData: number
    })
    worker.on('message', (result) => {
        res.status(200).send({
            success: true,
            value: result
        })
    });
    worker.on('error', err => {
        res.status(500).send(`Worker thread error: ${err.message}`);
    });

    worker.on('exit', code => {
        if (code !== 0) {
            res.status(500).send(`Worker thread stopped with exit code ${code}`);
        }
    });

})


app.listen(3001, () => {
    console.log("Server is running in 3001")
})