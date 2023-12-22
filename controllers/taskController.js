import Task from '../models/Task.js';

async function createTask(req, res) {
  try {
    const { title, description, status } = req.body;
    const userId = req.userId;

    const task = new Task({
      title: title,
      description: description,
      status: status,
      user: userId,
    });

    await task.save();

    res.status(201).send(task);
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).send('Error creating task.');
  }
}


async function getTasks(req, res) {
  try {
    const userId = req.userId;

    const tasks = await Task.find({ user: userId });

    res.status(200).send(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).send('Error fetching tasks.');
  }
}


async function updateTask(req, res) {
  try {
    const { taskId } = req.params;
    const { title, description, status } = req.body;

    const task = await Task.findByIdAndUpdate(
      taskId,
      { title, description, status },
      { new: true }
    );

    if (!task) {
      return res.status(404).send('Task not found.');
    }

    res.status(200).send(task);
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).send('Error updating task.');
  }
}


async function deleteTask(req, res) {
  try {
    const { taskId } = req.params;

    const deletedTask = await Task.findByIdAndDelete(taskId);

    if (!deletedTask) {
      return res.status(404).send('Task not found.');
    }

    res.status(204).send();
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).send('Error deleting task.');
  }
}


export { createTask, getTasks, updateTask, deleteTask };
