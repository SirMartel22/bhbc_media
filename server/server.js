const express = require('express')
const cors = require('cors')

//getting dotenv connection
const dotenv = require("dotenv");

// get supabase connection
const { createClient } = require('@supabase/supabase-js');

// const path = require('path')
// const fs = require('fs')

const bodyParser = require('body-parser');

dotenv.config();

const app = express();

const port = 5000;

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);


//configuring middleware
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    credentials: true,
}))
app.use(express.urlencoded({
    extended: true,
}))

app.post('/server/server', async (req, res) => {
    const { name, username, email, phone, whatsapp, subunit } = req.body
    console.log(req.body);

    try {
        //insert data into supabase table
        const { data, error } = await supabase.from('media-db').insert(req.body);
        console.log(data)
        
        if (error) {
            console.log("Supabase Insert Error:", error);
            return res.status(500).json({message: "Failed to register: ", error })
        }
        res.json({
            message: "You've Successfully Signup - Expect a mail soon",
            data: {name, username, email, phone, whatsapp, subunit}
        })
    } catch (error) {
        console.log(`This Error: ${error} cause data not to sent`)
    }
})




app.listen(port, ()=> console.log(`server is running on port: ${port}`))