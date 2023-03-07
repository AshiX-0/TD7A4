const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        const app = express();
        app.get('/', (req, res) => {
            try {
                const data = fs.readFileSync('./assets/dynamic.txt', 'utf8');
                res.send(data);
            } catch (error) {
                console.log(error);
                res.send('Error while reading file').status(500);
            }        
        });

        app.listen(process.env.PORT || 3000, () => console.log('Server started'));
    })
    .catch(err => {
        console.log(err)
        process.exit(1);
    });

