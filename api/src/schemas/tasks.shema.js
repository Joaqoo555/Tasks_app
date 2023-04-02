const { Schema, model } = require("mongoose");

const TasksSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    
  },

}, {
    timestamps: true
});
const Tasks = model("Tasks", TasksSchema)

module.exports = Tasks