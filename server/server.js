const express = require('express');

const app = express();

app.get("/api", (req, res) => {
    res.json(
        {
            "users":
                ["userOne", "userTwo", "userThree"]
        }
    )
    console.log(res.json());
})

const port = 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})