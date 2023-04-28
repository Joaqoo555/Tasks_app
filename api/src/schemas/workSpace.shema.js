const { Schema, model } = require("mongoose");

const WorckSpaceShema = new Schema({
  title: {
    type: String,
    required: [true, 'El titulo es requerido.'],
    unique: true,
  },
  description: {
    type: String,
  },
  tasks: [{
    type: Schema.Types.ObjectId,
    ref: "Tasks",
    required: true
  }] 
}, {
    timestamps: true
});
const WorckSpace = model("WorckSpace", WorckSpaceShema)

module.exports = WorckSpace