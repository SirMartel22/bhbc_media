const express = require('express')
const {createClient} = require('@supabase/supabase-js')

const app = express();


const port = 5000

const SUPABASE_URL = "https://hjhfvgleatyqzhuyeyzb.supabase.co";
const SUPABASE_ANON_KEY ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhqaGZ2Z2xlYXR5cXpodXlleXpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUzNzk4NTIsImV4cCI6MjA3MDk1NTg1Mn0.zD1SBGtcwSp3TUj3lgesYZP0khKDf3jykG4-ecFMhFc"

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

app.use(express.json());

const jsonData = [
        {
        "name": "John Doe",
        "username": "johndoe",
        "email": "johndoe@example.com",
        "phone": "08164404932",
        "whatsapp": "08164404932",
        "subunit": "livestream",
        "headshot": "none"
    },

       {
        "name": "John Doe",
        "username": "johndoe",
        "email": "johndoe@example.com",
        "phone": "08164404932",
        "whatsapp": "08164404932",
        "subunit": "livestream",
        "headshot": "none"
    }
]

app.get('/users', (req, res) => {
    res.send('Hello Word')
})

app.get('/media-db', async (req, res) => {
    const { data, error } = await supabase.from('media-db').select('*');
    if (error) {
        console.error(error);
        return res.status(500).json({
            error: error.message
        });
    }
    res.json(data);
});

app.post('/media-db', async (req, res) => {
    // const { name, username, email, phone, whatsapp, subunit, headshot } = req.body;
    const { data, error } = await supabase.from('media-db').insert(jsonData);
    if (error) {
        console.error(error);
        return res.status(500).json({
            error: error.message
        });
        res.status(201).json(data);
    }
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})