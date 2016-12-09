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
  <title>skillfair</title>
  <meta charset="utf-8"/>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
  <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,700' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" type="text/css" href="main.css">
   <link href="/ui/style.css" rel="stylesheet" />
</head>
<body>
<header class="container">
  <div class="row">
     <h1 class="col-sm-4">kalpana show room</h1>
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


</body>
</html>

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
  console.log(`IMAD course app listening on port ${port}!`);
});
