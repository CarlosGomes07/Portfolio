const router = require('express').Router();

router.get('/', (req, res) =>{
    //acess db
    const data = [{
        id:1,
        name: 'my frist project',
        createdAt: '2022-09-10'
    }]
    res.json({
        'sucess' : true,
        data: data
    });
});

module.exports = router;
