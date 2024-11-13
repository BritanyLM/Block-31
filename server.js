// TODO: this file :)
const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello employees!");

});



app.listen(PORT, () => {
   console.log(`Listening on port ${PORT}.`); 
});

const employees = require("./employees");

app.get("/employees", (req, res) =>{
    res.json(employees);
});

app.get("/employees/:id", (req, res) => {
    const {id} = req.params;
    if (id < 0 || id >= employees.length) {
        res.status(404).send("employee does not exist");

    } else {
        res.json(employees[id]);
    }


});