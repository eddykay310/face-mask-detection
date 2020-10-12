const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const db = {
    users: [
        {
            id: '123',
            name: 'Kwabena',
            email: 'kwabena@gmail.com',
            password: 'banku',
            entries: 0,
            joined: new Date()
        },
        {
            id: '124',
            name: 'Ama',
            email: 'ama@gmail.com',
            password: 'waakye',
            entries: 0,
            joined: new Date()
        }
    ]
}

app.get('/', (req, res)=> {
    res.send('server is working')
})

app.post('/signin', (req, res)=> {
    req.body.email === db.users[0].email && req.body.password === db.users[0].password ?
    res.json('success'):
    res.status(400).json('error logging in');
})

app.post('/register', (req, res)=> {
    const{email, name, password} = req.body;
    db.users.push({
        id: '125',
        name: name,
        email: email,
        password: password,
        entries: 0,
        joined: new Date()
    })
    res.json(db.users[db.users.length-1])
})

app.listen(3000, ()=> {
    console.log('app is running on port 3000')
})