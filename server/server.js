const express = require("express")
const multer = require('multer')
const cors = require('cors')

// getting dotenv connection
const dotenv = require('dotenv');

//get supabase connection
const { createClient } = require('@supabase/supabase-js');


const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser') 

dotenv.config();

const app = express();

const port = 5000

//getting supabase key and url
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);


//configuring middleware
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173', "http://127.0.0.1:5173"],
    credentials: true,
}))
app.use(express.urlencoded({
    extended: true,
}))


app.post('/server/server', async (req, res) => {

    const { name, username, email, phone, whatsapp, subunit } = req.body
    console.log(req.body)

    try {
        //insert data into supabase table
        const { data, error } = await supabase
            .from('media-db')
            .insert([{ name, username, email, phone, whatsapp, subunit }]);
    
        if (error) {
            console.error("Supabase Insert Error: ", error);
            return res.status(500).json({message: "Failed to register: ", error})
        }
        res.json({
            message: "Thanks for Registering - Expect a mail in your inbox soon",
            data: {name, username, email, phone, whatsapp, subunit}
        })
        
    } catch (err) {
        console.error("Server Error", err)
    }
    
})

// ADD THIS: GET route for your form endpoint
app.get('/server/server', (req, res) => {
    res.json({
        message: "Form endpoint is working",
        method: "This endpoint accepts POST requests for form submissions",
        expectedFields: ["name", "username", "email", "phone", "whatsapp", "subunit"]
    });
});

app.listen( port, () => console.log(`Server is running on port: ${port}`))