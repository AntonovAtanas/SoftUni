const router = require('express').Router()

router.get('/catalog', (req, res) => {


    res.render('./pets/catalog');
})

router.get('/add', (req, res) => {
    res.render('./pets/create');
})

module.exports = router