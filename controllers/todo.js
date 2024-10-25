const { title } = require("process");
const Todo = require("../models/Todo");

exports.addTodo = async (req, res) => {
    try {
        if (!req.body.title || req.body.title.trim().length === 0) throw { title: "Title is required" }
        const newTodo = new Todo({
            title: req.body.title
        })
        const todo = await newTodo.save();
        res.status(200).json({ success: true, data: todo })
    } catch (err) {
        res.status(500).json({ success: false, err })
    }
}

exports.fechTodos = async (req, res) => {
    try {
        const todos = await Todo.find()
        if (todos.length === 0) {
            res.status(404).json({ success: true, message: "Todo is empty!" })
            return;
        }

        res.status(200).json({ success: true, data: todos })
    }
    catch {
        res.status(500).json({ success: false, err })
    }
}

exports.updateTodo = async (req, res) => {
    try {
        const id = req.params.id
        const todo = await Todo.findByIdAndUpdate(id, { $set: { title: req.body.title } }, { new: true })
        res.status(200).json({ success: true, data: todo,message:"Todo is updated" })
    } catch (err) {
        res.status(500).json({ success: false, err })
    }
}

exports.deleteTodo = async (req, res) => {

    try {
        const todo = await Todo.deleteOne({_id:req.params.id});
        res.status(200).json({success:true,data:todo,message:"Todo is deleted"})
    } catch (err) {
        res.status(500).json({ success: false, err })
    }

}
 