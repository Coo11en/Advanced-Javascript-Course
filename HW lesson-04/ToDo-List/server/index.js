const path = require('path')
const fs = require('fs')
const express = require('express')
const app = express()

const port = 3000;

const tasks_path = path.resolve(__dirname, './data/tasks.json')
const static_dir = path.resolve(__dirname, '../dist/')

app.use(express.static(static_dir))
app.use(express.json())


app.get('/api/v1/tasks', (req, res) => {
    fs.readFile(tasks_path, 'utf-8', (err, data) => {
        console.log("OK")
        if (!err) {
            res.send(data);
        } else {
            res.status(500).send(err)
        }
    })
})

app.post('/api/v1', (req, res) => {
    fs.readFile(tasks_path, 'utf-8', (err, data) => {


        if (!err) {
            const task = JSON.parse(data);
            console.log(req.body);
            task.push(req.body);
            fs.writeFile(tasks_path, JSON.stringify(task), 'utf-8', (err, data) => {
                res.sendStatus(201);
            })
        } else {
            res.status(500).send(err)
        }
    })
})

// app.delete('/api/v1/cart:id', (req, res) => {
//     fs.readFile(cart_path, 'utf-8', (err, data) => {
//       if (!err) {
//         const cart = JSON.parse(data);
//         for (let i = 0; i < cart.length; i++) {
//           if (cart[i] == req.body) {
//             index = i;
//             break;
//           }
//         }
//         cart.splice(index, 1);
//         fs.writeFile(cart_path, JSON.stringify(cart), 'utf-8', (err, data) => {
//           res.sendStatus(201)
//         })
//       } else {
//         res.status(500).send(err)
//       }
//     })
//   })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})