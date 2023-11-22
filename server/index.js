import express from 'express';

const app = express();

app.get('/non-blocking', (req, res) => {
    console.log('Get request')
    res.status(200).send({ success: true, value: 100 })
})

app.get('/blocking', (req, res) => {
    let result = 0;
    for (let i = 0; i <= 10000000000; i++) {
        result += i;
    }
    res.status(200).send({
        success: true,
        value: result
    })
})


app.listen(3001, () => {
    console.log("Server is running in 3001")
})