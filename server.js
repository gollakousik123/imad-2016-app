var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={
'article-one':{  title: 'article2/golla kousik',
       heading: 'article two',
       date:'sep27,2016',
       content: `   <p>
            this is the  content for my second article     this is the  content for my first article     this is the  content for my first article
              </p>
              <p>
                      this is the  content for my second article    this is the  content for my first article    this is the  content for my first article
              </p>
              <p>
                      this is the  content for my second article    this is the  content for my first article    this is the  content for my first article
                  
                  
              </p>`},

    'article-two': { 
        title: 'article2/golla kousik',
       heading: 'article two',
       date:'sep27,2016',
       content: `   <p>
            this is the  content for my second article     this is the  content for my first article     this is the  content for my first article
              </p>
              <p>
                      this is the  content for my second article    this is the  content for my first article    this is the  content for my first article
              </p>
              <p>
                      this is the  content for my second article    this is the  content for my first article    this is the  content for my first article
                  
                  
              </p>`
      
       },
       'atricle-three':{  title: 'article3/golla kousik',
       heading: 'article three',
       date:'sep27,2016',
       content: `   <p>
            this is the  content for my second article     this is the  content for my first article     this is the  content for my first article
              </p>`
              
             
       },
};
function createTemplate (data){
var title=data.title;
var date =data.date;
var heading =data.heading;
var content =data.content;

var htmlTemplate = `
<html>
<head>
  <title>MART</title>
  <meta charset="utf-8"/>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
  <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,700' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" type="text/css" href="main.css">
   <link href="/ui/style.css" rel="stylesheet" />
</head>
<body>
<header class="container">
  <div class="row">
     <h1 class="col-sm-4">MART</h1>
   <nav class="col-sm-8 text-right">
     <p>newest</p>
      <p>catalogue</p>
      <p>contact</p>
    </nav>
    
  </div>
  <section class="jumbotron">
 <div class="container">
  <div class="row text-center">
    <h2>BASICS LIFE</h2>
      <h3>CASUALS</h3>
      <a class="btn btn-primary" href="#" role="button">See all</a>
    </div>
    </div>
</section>
</header>
 <section class="container">
   <div class="row">
    <figure class="col-sm-6">
      <p>kitchen</p>
     <img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/kitchen.jpg"/>
     </figure>
     <figure class="col-sm-6">
       <p>woodwork</p>
       <img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/woodwork.jpg"/>
     </figure>
       </div>
    <div class="row">
       
    <figure class="col-sm-6">
      <p>gifts</p>
      <img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/gifts.jpg"/>
    
    </figure>
    <figure class="col-sm-6">
      <p>antiques</p>
      <img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/antique.jpg"/>
    </figure>
  </div>
      </section>
  <footer class="container">
    <div class="row">
      <p class="col-sm-4">
        &copy; 2016 Skillfair
      </p>
      <ul class="col-sm-8">
        <li class="col-sm-1"> <img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/instagram.svg"></li>
  <li class="col-sm-1"> <img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/twitter.svg"> </li>
  <li class="col-sm-1"><img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/facebook.svg"> </li>
  <li class="col-sm-1"> <img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/medium.svg"> </li>
      </ul>
    </div>
    
  </footer>


<section>
    <div class="row">
        <h3 id="gender">gender</h3>
        

<form action="demo_form.asp">
  <label for="male">Male</label>
  <input type="radio" name="gender" id="male" value="male"><br>
  <label for="female">Female</label>
  <input type="radio" name="gender" id="female" value="female"><br>
  <label for="other">Other</label>
  <input type="radio" name="gender" id="other" value="other"><br><br>
  <input type="submit" value="Submit">
</form>

        
    </div>
</section>


</body>
</html>
`
;
return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName',function(req,res){
 var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});
 









app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
    
});
