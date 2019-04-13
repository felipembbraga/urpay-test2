const express = require('express')
const ToDo = require('./todo.model')

const router = express.Router()

// Cadastro
router.post('/', async function(req, res) {
    try {
        const todo = new ToDo(req.body)
        await todo.save()
        res.send(todo)
    } catch(error) {
        res.status(400).send({
            error: true,
            message: error.message
        })
    }
})

// Listagem
router.get('/', async function(_req, res) {
    try {
        const todos = await ToDo.find({}).exec()
        res.send(todos)
    } catch(error) {
        res.status(400).send({
            error: true,
            message: error.message
        })
    }
})

// Consulta por id
router.get('/:id', async function(req, res) {
    try {
        const todo = await ToDo.findById(req.params.id).exec()
        res.send(todo)
    } catch(error) {
        res.status(400).send({
            error: true,
            message: error.message
        })
    }
})

// Atualizar
router.put('/:id', async function(req, res) {
    try {
        const todo = await ToDo.findById(req.params.id).exec()
        todo.set(req.body)
        await todo.save()
        res.send(todo)
    } catch(error) {
        res.status(400).send({
            error: true,
            message: error.message
        })
    }
})

// Deletar
router.delete('/:id', async function(req, res) {
    try {
        const todo = await ToDo.findById(req.params.id).exec()
        await todo.delete()
        res.send(todo)
    } catch(error) {
        res.status(400).send({
            error: true,
            message: error.message
        })
    }
})


module.exports = router