var express = require('express');
var router= express.Router();
var mongojs = require('mongojs');

// @ de mon base de données avec laquel
// mon code communique pour recupérer la liste des films

var db = mongojs('mongodb://orcun:orcun@ds111791.mlab.com:11791/mytasklist_bad');


// cette fonction recupere tous les films de la base de données

router.get('/movies',function(req,res,next)
{
    db.tasks.find(function (err,tasks) {
        if(err) {
            res.send(err)
        }
        res.json(tasks);
    })
});

//Get single movie
router.get('/tasks/:id',function(req,res,next)
{
    db.tasks.findOne({_id:mongojs.ObjectId(req.params.id)}, function (err,task) {
        if(err) {
            res.send(err)
        }
        res.json(task);
    })
});


//
// router.post('/tasks',function(req,res,next)
// {
//     var task=req.body;
//     if(!task.title || (task.isDone + '')) {
//         res.status(400);
//         res.json({
//             'error': 'Bad Data'
//         });
//     }
//     else
//     {
//         db.tasks.save(task,function (err,task) {
//             if(err)
//             {
//                 res.send(err)
//             }
//             res.json(task)
//         })
//     }
//
// });
//
// //Delete single task
//
// router.delete('/tasks/:id',function(req,res,next)
// {
//     db.tasks.remove({_id:mongojs.ObjectId(req.params.id)}, function (err,task) {
//         if(err) {
//             res.send(err)
//         }
//         res.json(task);
//     })
// });
//
// //Update single task
//
// router.put('/tasks/:id',function(req,res,next)
// {
//     var task = req.body;
//     var updTask = {
//         isDone:false,
//         title:''
//     };
//     if(task.isDone) {
//         updTask.isDone = task.isDone;
//
//     }
//     if(task.isDone) {
//         updTask.title = task.isDone;
//
//     }
//     if(!updTask) {
//         res.status(400);
//         res.json({
//             'error':'Bad data'
//         })
//     }
//     else
//     {
//         db.tasks.update({_id:mongojs.ObjectId(req.params.id)},updTask, {}, function (err,task) {
//             if(err) {
//                 res.send(err)
//             }
//             res.json(task);
//         })
//     }
//
// });

module.exports= router;