const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const functions = require('./functions');

const app = express();

app.post('/signup', (req, res) => {
    res.json({
        message: 'SignUp'
    })
});

app.get('/signin', (req, res) => {
    const user = { id: 3 };
    const token = jwt.sign({ user }, config.secret, { expiresIn: 86400 });
    res.json({
        token
    });
});

app.get('/signout', (req, res) => {
    res.json({
        message: 'SignOut'
    })
});

app.get('/protected', functions.ensureToken, (req, res) => {
    jwt.verify(req.token, config.secret, (err, data) => {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({
                text: 'Protected response',
                data
            });
        }
    });
});

module.exports = app;