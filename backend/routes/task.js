const express = require('express')
const router = express.Router()

const {
getAllTaks,
createTask,
getTask,
updateTask,
deleteTask
} = require('../controllers/taskController')

router.route('/').get(getAllTaks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router
