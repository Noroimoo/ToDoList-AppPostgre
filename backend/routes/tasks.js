const router = require('express').Router();
let Task = require('../models/task.model');

router.route('/').get((req, res) => {
    Task.select("*").from("tasks")
        .then(tasks => {
            res.json(tasks)
        })
        .catch(error => {
            res.status(400).json('Error: ' + error)
        });
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const status = req.body.status;

    Task.insert({title: title, description: description, status: status})
        .into("tasks")
        .then(() => {
            res.json('Task added!')
        })
        .catch(error => {
            res.status(400).json('Error: ' + error)
        });
});

router.route('/update/:id').post((req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const status = req.body.status;

    Task('tasks')
    .where("id", "=", req.params.id)
    .update({
        title: title,
        description: description,
        status: status
    })
    .then(() => res.json('Task updated!'))
    .catch(error => res.status(400).json('Error: ' + error));
});

router.route('/:id').delete((req, res) => {
    Task("tasks")
      .where('id', '=', req.params.id) 
      .del()
      .then(() => res.json('Task deleted.'))
      .catch(error => res.status(400).json('Error: ' + error));
  });
  

router.route('/:id').get((req, res) => {
    Task.from("tasks")
        .where('id', '=', req.params.id)
        .select('*')
        .then(task => {
          res.json(task);
        })
        .catch(error => {
          res.status(400).json('Error: ' + error)
        });
  });

module.exports = router;
