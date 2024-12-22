const express = require('express');
const app = express();

app.use(express.json());

function fibonacci(num) {
    if (num < 2) {
        return num;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}

// Route handler
app.get('/api/calculate', (req, res) => {
   try{
    const value = parseInt(req.query.value);
    res.json({originalValue:value,result:fibonacci(value)});
   }catch(e){
    res.status(422).json({error: 'Invalid input, please provide a positive integer.',value : req.query.value});
   }
});


app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});
