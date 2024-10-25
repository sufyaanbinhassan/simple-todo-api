const express = require("express")
const router = express.Router(); 

const {addTodo,fechTodos,updateTodo, deleteTodo} = require ("../controllers/todo")

router.route("/").post(addTodo).get(fechTodos)
router.route("/:id").patch(updateTodo).delete(deleteTodo)

module.exports = router