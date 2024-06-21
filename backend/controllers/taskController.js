import User from "../models/userModel.js";
import Task from "../models/taskModel.js";

const addTask = async (req, res) => {
  const { title, description } = req.body;
  const userId = req.user.id;
  try {
    const user = await User.findOne({ _id: userId });
    const newTask = new Task({
      title,
      description,
      completed: false,
      userId,
    });

    const task = await newTask.save();
    return res.status(200).json( task );
  } catch (error) {
    console.log("Something wrong in the addTask controller");
    res.status(500).json({ message: error.message });
  }
};

const removeTask = async (req, res) => {
  const { id } = req.body;

  try {
    await Task.findByIdAndDelete(id);
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.log("something wrong in the removeTask controller");
    res.status(501).json({ message: error.message });
  }
};

const getTask = async (req, res) => {
  try {
    const data = await Task.find({ userId: req.user.id });
    res.status(200).json({ data: data });
  } catch (error) {
    console.log("somethings wrong with the getTask controller");
    res.status(501).json({ message: error.message });
  }
};

const updateTask = async (req, res) => {
  const { id } = req.params
  const updateData = req.body

  if( updateData.title === "" ){
    return res.status(401).json({ message : "Title should have something "})
  }

  try {
    let updatedTask = await Task.findOneAndUpdate(id ,updateData, {new : true})

    if(!updateTask){
      return res.status(404).json({ message : "Task not found "})
    }

    res.status(200).json({ message: "Task updated successfully", task : updatedTask });
  } catch (error) {
    console.log("something wrong in the removeTask controller");
    res.status(500).json({ message: error.message });
  }
};

export { addTask, getTask, removeTask, updateTask };
