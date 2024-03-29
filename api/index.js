const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static('public'))

router.get('/',function(req,res){
  res.sendFile(path.join('button.html', {root: path.join(__dirname, 'public')}));
  //__dirname : It will resolve to your project folder.
});


//add the router
app.use(express.static(__dirname + '/static'));

app.use('/', router);
app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

module.exports = app
