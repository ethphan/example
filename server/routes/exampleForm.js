const express = require('express')
const router = express.Router()
const FormSchema = require('../models/form')

// creating form submit
router.post('/', async (req,res) => {
    const formValue = new FormSchema({
        name: req.body.name,
        dob: req.body.dob,
        option: req.body.option,
        attachment: req.body.attachment
    })
    try {
        const newSubmit = await formValue.save()
        res.status(201).json(newSubmit)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

module.exports = router