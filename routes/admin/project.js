var express = require('express');
var router = express.Router();
var projectsService = require('../../services/projectService');

router.get('/', function(req, res, next) {
  var project = projectsService.getProjects();
  
  var data = {
    project: project
  };

  res.render('admin/projects/index', data);
});

router.get('/create', function(req, res, next) {

  res.render('admin/projects/create');
});

router.post('/create', function(req, res, next) {
  var project = projectsService.getProjects();

  var newId = project.length + 1;

  var newProject = {};
  newProject.id = newId;
  newProject.title = req.body.title;
  newProject.image = req.body.image;
  newProject.description = req.body.description;
  newProject.body = req.body.postBody;

  projectsService.saveProjects(newProject);

  res.redirect('/admin/projects');
});

module.exports = router;