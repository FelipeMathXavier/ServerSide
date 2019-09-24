// rotas para cada pagina desejada 
var express = require('express');
var router = express.Router();
var postsService = require('../services/postsService');
var projectService = require('../services/projectService');
var executiveService = require ('../services/executiveService');

/* GET home page. */
router.get('/', function(req, res, next) {
  var posts = postsService.getPosts().slice(0,3);

  res.render('index', { title: 'Blog', posts: posts });
});

router.get('/posts/:postId', function(req, res, next) {
  var postId = req.params.postId;

  var posts = postsService.getPosts();

  var post = posts.filter((post) => post.id == postId)[0];

  res.render('post', { title: post.title, post: post });

});

router.get('/posts', function(req, res, next){
  var posts = postsService.getPosts();

  res.render('index', {title: 'posts', posts: posts });
});

router.get('/projects', function(req, res, next){
  var projects = projectService.getProjects();

  res.render('all-projects', {title: 'Todos os Projetos', projects: projects});
});

router.get ('/projects/:projectId', function(req, res, next){
  var projectId = req.params.projectId;

  var projects = projectService.getProjects();

  var project = projects.filter((project) =>project.id == projectId)[0];

  res.render('projects', {title:'Projetos', project: project});

});

router.get('/executives', function(req, res, next){
  var executives = executiveService.getExecutive();

  res.render('all_executive', {title: 'Todos os Executivos', executives: executives});
});

router.get('/executives/:executivesId', function(req, res, next) {
  var executivesId = req.params.executivesId;

  var executives = executiveService.getExecutive();

  var executives = executives.filter((executives) => executives.id == executivesId)[0];

  res.render('executive', { title: executives.nome, executives: executives });

});

module.exports = router;
