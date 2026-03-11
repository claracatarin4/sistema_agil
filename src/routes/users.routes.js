const express = require('express');
const repo = require("../data/users.memory");

const router = express.Router();

router.get("/", (req, res) => {
    const page = Number(req.query.page || 1);
    const limit = Number(req.query.limit || 10);

    const all = repo.getAll();
    const start = (page - 1) * limit;
    const items = all.slice(start, start + limit);

    res.status(200).json({page, limit, total: all.length, items});
});

//POST

router.post("/", (req, res) => {
    const name = req.body.name;
    const user = repo.create(name);
    res.status(201).json({user});
});

//PUT

router.put("/:id", (req, res) => {
    const id = number(req.params.id);
    const name = req.body.name;

    const user = repo.update(id,name);
    if(user == null)
        res.status(404).json({message: "Usuário não encontrado"});

    res.status(200).json({user})

})

module.exports = router;