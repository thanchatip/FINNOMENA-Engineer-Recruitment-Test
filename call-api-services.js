// this file using for call external services which cannot direct call because of CORS problem
const express = require('express')
const app = express()
const fetch = require('node-fetch')
var cors = require('cors')
const port = 3000

app.use(cors())

app.get('/get-funds-by-range', async (req, res) => {

    if(req.query.period) {
        const period = req.query.period
        var url = `https://storage.googleapis.com/finno-ex-re-v2-static-staging/recruitment-test/fund-ranking-${period}.json`;
    }

    fetch(url)
        .then(res => res.json())
        .then(result => {
           return res.status(200).json({
               error: { code: 0, message: 'success' },
               data: result.data
            })
        }).catch(err => {
            res.send(err);
        });
})

app.listen(port, () => {
  console.log("service listening at %s", port)
})