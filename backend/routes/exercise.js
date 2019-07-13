const router = require('express').Router()
let Exercise = require('../models/exercise.model')



router.route('/').get(async (req, res) => {
    try {
        const exercise = await Exercise.find()
        res.json(exercise)
    } catch (err) {
        res.status(400).json('Error: ' + err)
    }
})

router.route('/add').post(async (req, res) => {
    try {
        const { username, description, duration, date } = req.body

        const newExercise = new Exercise({
            username,
            description,
            duration,
            date
        })

        await newExercise.save()
        res.json('Exercise added!')
    } catch (err) {
        res.status(400).json('Error: ' + err)
    }
})

router.route('/:id').get(async (req, res) => {
    try {
        const exercise = await Exercise.findById(req.params.id)
        res.json(exercise)
    } catch (err) {
        res.status(400).json('Error: ' + err)
    }
})

router.route('/update/:id').post(async (req, res) => {
    const id = req.params.id
    const { username, description, duration, date } = req.body
    try {
        const exercise = await Exercise.findByIdAndUpdate(id, { username, description, duration, date })
        res.json(exercise)
    } catch (err) {
        res.status(400).json('Error: ' + err)
    }
})
router.route('/:id').delete(async (req, res) => {
    const id = req.params.id
    try {
        const exercise = await Exercise.findByIdAndDelete(id)
        if(exercise === null) res.json('Could not found this record.')
        if(exercise !== null) res.json('Exercise deleted!')
    } catch (err) {
        res.status(400).json('Error: ' + err)
    }
})

module.exports = router