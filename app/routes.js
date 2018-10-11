var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
});

//accessbility route

router.get('/accessibility_questions02', function (req, res){
var needs = req.query.needs
if (needs === 'false') {
res.redirect('question_01')
} else {
res.render('accessibility_questions02')}

});

//question 1

router.get('/question_02', function (req, res){
var everused = req.query.everused
if (everused === 'No') {
res.redirect('question_03')
} else {
res.render('question_02')}
});

//question 2

router.get('/question_04', function (req, res){
var stilluse = req.query.stilluse
if (stilluse === 'No') {
res.redirect('question_03_true')
} else {
res.render('question_04')}
});

//question 3
/*
router.get('/category3', function (req, res){
var wantto = req.query.wantto

if (wantto === 'No' ) {
  res.redirect('category1')
}
else {
  res.render('category3')
}
});
*/
//question 3true

router.get('/category3', function (req, res){
var yes_want = req.query.yes_want
var wantto = req.query.wantto
var everused = req.session.data['everused']


if (everused === 'Yes' && yes_want === 'No' ) {
  res.redirect('category2')
}

else if (everused === 'No' && wantto === 'No' ) {
  res.redirect('category1')
}

else {
  res.render('category3')
}
});



//question 4

router.get('/helpCompletingTasks', function (req, res){

var likeusing = req.query.likeusing

if (likeusing === 'No') {

res.redirect('category4')

} else {

res.render('helpCompletingTasks')}

});

router.get('/canTheyDoThese', function (req, res) {
  var needHelp = req.query.needHelp

  if (needHelp === 'regularly') {
    res.redirect('/category5')
  } else {
    res.render('canTheyDoThese')
  }
})

router.get('/category6', function (req, res) {
  var basicTasks = req.query.basicTasks
  var needHelp = req.session.data['needHelp']

  if (basicTasks === 'true' && needHelp === 'rarely') {
    res.redirect('/advancedSkills')
  } else  if (basicTasks === 'true') {
    res.redirect('category7')
  } else {
    res.render('category6')
  }
})

//question 2

router.get('/category9', function (req, res){
var advancedSkills = req.query.advancedSkills
if (advancedSkills === 'false') {
res.redirect('category8')
} else {
res.render('category9')}
});

//end option




module.exports = router
