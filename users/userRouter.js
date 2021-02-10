const router = require('express').Router();
const users = require('./userModel');
const errorHandler = require('../utils/errorHandler');

router.get('/', (req, res) => {
    users.get().then(users => {
        res.status(200).json(users);
    }).catch(err => {
        errorHandler(res, err, 500, 'Unable to retrieve users.');
    });
});

router.get('/:id', (req, res) => {
    res.status(200).json(req.user);
});

router.post('/', (req, res) => {
    users.insert(req.body).then(user => {
        res.status(201).json(user);
    }).catch(err => {
        errorHandler(res, err, 500, 'Could not add user.');
    });
});

router.put('/:id', (req, res) => {
    users.update(req.body, req.params.id).then(user => {
        res.status(200).json(user);
    }).catch(err => {
        errorHandler(res, err, 500, 'Could not update user.');
    });
});

router.delete('/:id', (req, res) => {
    users.remove(req.params.id).then(numDeleted => {
        res.status(200).json(req.user);
    }).catch(err => {
        errorHandler(res, err, 500, "The user could not be removed");
    });
});

module.exports = router;