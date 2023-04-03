const express = require('express');
const app = express();
const Students =require('./views/Students.jsx')

//---requires
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use((req, res, next) => {
  console.log('I run for all routes');
  next();
});
//near the top, around other app.use() calls
app.use(express.urlencoded({extended:false}));
//----middleware
app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Student HW App!</h1>');
});

app.get('/students', (req, res) => {
  res.render('Index',{students: Students})
});
//Index
//Routes
app.get('/students/new', (req, res) => {
  res.render('New');
});
// New
app.post('/students', (req, res)=>{
 req.body.enrolled= true
req.body.grades=[]
req.body.grade= 0

  Students.push(req.body);
  console.log(Students);
  res.redirect('/students'); //send the user back to /fruits  res.redirect('/fruits'); /
});

app.get('/students/:indexOfStudentsArray', function(req, res){
  res.render('Show', {
      student: Students[req.params.indexOfStudentsArray], 
      idx: req.params.indexOfStudentsArray, 
  });
});

// ---POST
app.post('/students/:indexOfStudentsArray', function(req, res){
  console.log(req.body)
  Students[req.params.indexOfStudentsArray].grades.push(req.body)
  res.redirect('/students/:indexOfStudentsArray');
});

//-----show
app.listen(3000, () => {
  console.log('listening');
});
// server