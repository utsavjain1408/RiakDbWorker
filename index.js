import express from 'express';
import bodyParser from 'body-parser'
import riak from 'basho-riak-client'
var config = require('./config');

let app = express();
const PORT =3000;
var router = express.Router();

router.get('/', (req,res)=>{
    res.send(`Server is running on ${PORT}`);
    var client = config.createClient(function (e, c) {
        if (e) {
            throw new Error(e);
        }
        client.ping(function (err, rslt) {
            if (err) {
                throw new Error(err);
            } else {
                // On success, ping returns true
                //assert(rslt === true);
                //logger.info('[TasteOfRiakIntro] ping is successful');
                //save_people();
                console.log(`Ping ho gaya !! Ping Successfull`)
            }
        });
    })
})

app.listen(PORT, (err, res) => {
    if(err){
        console.log('Err Hai')
    }
    console.log(`Server Port ${PORT} pe chal raha hai! `)
})