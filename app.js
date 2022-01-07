//Loads our env if we are in development 
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

//Includes all of our dependencies
const express = require('express')
const app = express()

const flash = require('express-flash')
const session = require('express-session')


//Stores users
const users = []

//Sets ejs as view engine
app.set('view-engine', 'ejs')

app.use(express.urlencoded({ extended: false }))

//Set up secret key located in the .env file
app.use(flash())
app.use(session({
    secret: '10004434344343344343',
    resave: false,
    saveUninitialized: false
}))

//Sets view route for our index page
app.get('/dashboard', (req, res) => {
    res.render('index.ejs')
})
app.get('/', (req, res) => {
    res.redirect('/login');
})

app.route('/user_info')
.get((req, res) => {
    const start = req.query.start;
    const end = req.query.end;

    const data = [
        {name: 'ehsan', age: '20', gender: 'male', contact_no: '03122449350', note: '12345556' },
        {name: 'ehsan', age: '21', gender: 'male', contact_no: '03122449350', note: '12345556' },
        {name: 'ehsan', age: '22', gender: 'male', contact_no: '03122449350', note: '12345556' },
        {name: 'ehsan', age: '23', gender: 'male', contact_no: '03122449350', note: '12345556' },
        {name: 'ehsan', age: '24', gender: 'male', contact_no: '03122449350', note: '12345556' },
        {name: 'ehsan', age: '25', gender: 'male', contact_no: '03122449350', note: '12345556' },
        {name: 'ehsan', age: '26', gender: 'male', contact_no: '03122449350', note: '12345556' },
        {name: 'ehsan', age: '27', gender: 'male', contact_no: '03122449350', note: '12345556' },
        {name: 'ehsan', age: '28', gender: 'male', contact_no: '03122449350', note: '12345556' },
        {name: 'ehsan', age: '30', gender: 'male', contact_no: '03122449350', note: '12345556' },
        {name: 'ehsan', age: '31', gender: 'male', contact_no: '03122449350', note: '12345556' },
        {name: 'ehsan', age: '32', gender: 'male', contact_no: '03122449350', note: '12345556' },
        {name: 'ehsan', age: '33', gender: 'male', contact_no: '03122449350', note: '12345556' },
        {name: 'ehsan', age: '34', gender: 'male', contact_no: '03122449350', note: '12345556' },
        {name: 'ehsan', age: '35', gender: 'male', contact_no: '03122449350', note: '12345556' },
        {name: 'ehsan', age: '36', gender: 'male', contact_no: '03122449350', note: '12345556' },
        {name: 'ehsan', age: '37', gender: 'male', contact_no: '03122449350', note: '12345556' },
        {name: 'ehsan', age: '38', gender: 'male', contact_no: '03122449350', note: '12345556' },
        {name: 'ehsan', age: '39', gender: 'male', contact_no: '03122449350', note: '12345556' },
        {name: 'ehsan', age: '40', gender: 'male', contact_no: '03122449350', note: '12345556' },
        {name: 'ehsan', age: '40', gender: 'male', contact_no: '03122449350', note: '12345556' },
        {name: 'ehsan', age: '40', gender: 'male', contact_no: '03122449350', note: '12345556' },
        {name: 'ehsan', age: '40', gender: 'male', contact_no: '03122449350', note: '12345556' },
        {name: 'ehsan', age: '40', gender: 'male', contact_no: '03122449350', note: '12345556' },
        {name: 'ehsan', age: '40', gender: 'male', contact_no: '03122449350', note: '12345556' },
        {name: 'ehsan', age: '40', gender: 'male', contact_no: '03122449350', note: '12345556' },
        {name: 'ehsan', age: '40', gender: 'male', contact_no: '03122449350', note: '12345556' },
        {name: 'ehsan', age: '40', gender: 'male', contact_no: '03122449350', note: '12345556' },
        {name: 'ehsan', age: '40', gender: 'male', contact_no: '03122449350', note: '12345556' },
        {name: 'ehsan', age: '40', gender: 'male', contact_no: '03122449350', note: '12345556' },
        {name: 'ehsan', age: '40', gender: 'male', contact_no: '03122449350', note: '12345556' },
        {name: 'ehsan', age: '40', gender: 'male', contact_no: '03122449350', note: '12345556' },
        {name: 'ehsan', age: '40', gender: 'male', contact_no: '03122449350', note: '12345556' },

        {name: 'ehsan', age: '40', gender: 'male', contact_no: '03122449350', note: '12345556' },
        {name: 'ehsan', age: '40', gender: 'male', contact_no: '03122449350', note: '12345556' },





        {name: 'ehsan', age: '40', gender: 'male', contact_no: '03122449350', note: '12345556' },
        {name: 'ehsan', age: '40', gender: 'male', contact_no: '03122449350', note: '12345556' },
        {name: 'ehsan', age: '40', gender: 'male', contact_no: '03122449350', note: '12345556' },
        {name: 'ehsan', age: '40', gender: 'male', contact_no: '03122449350', note: '12345556' },
        {name: 'ehsan', age: '40', gender: 'male', contact_no: '03122449350', note: '12345556' },
        {name: 'ehsan', age: '40', gender: 'male', contact_no: '03122449350', note: '12345556' },
        {name: 'ehsan', age: '40', gender: 'male', contact_no: '03122449350', note: '12345556' },


        {name: 'ehsan', age: '40', gender: 'male', contact_no: '03122449350', note: '12345556' },{name: 'ehsan', age: '40', gender: 'male', contact_no: '03122449350', note: '12345556' },
        {name: 'ehsan', age: '40', gender: 'male', contact_no: '03122449350', note: '12345556' },
        {name: 'ehsan', age: '40', gender: 'male', contact_no: '03122449350', note: '12345556' },
        {name: 'ehsan', age: '40', gender: 'male', contact_no: '03122449350', note: '12345556' },

        {name: 'ehsan', age: '40', gender: 'male', contact_no: '03122449350', note: '12345556' },
        {name: 'ehsan', age: '40', gender: 'male', contact_no: '03122449350', note: '12345556' },
        {name: 'ehsan', age: '40', gender: 'male', contact_no: '03122449350', note: '12345556' },
        {name: 'ehsan', age: '40', gender: 'male', contact_no: '03122449350', note: '12345556' },
        {name: 'ehsan', age: '40', gender: 'male', contact_no: '03122449350', note: '12345556' },
        {name: 'ehsan', age: '40', gender: 'male', contact_no: '03122449350', note: '12345556' },
    ]     
    res.send({status: 200, data: data.slice(start, end), totalCount: data.length })
})


//Sets view route for our login page
app.get('/login', (req, res) => {
    console.log("HERRRRE")
    res.render('login.ejs')
});



//Handles Login
app.post('/login', (req,res) => {
    
    const {email, password} = req.body
    if(email === 'admin' && password === 'pass'){
        res.redirect('/dashboard');
        
    }
    else{
        
        res.redirect('/login');
    }
    
})






//Runs app on port 3000
app.listen(4000)
console.log("Server running on port 4000...")