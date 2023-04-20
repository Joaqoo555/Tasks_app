const { Schema, model } = require("mongoose");

const TasksSchema = new Schema({
  title: {
    type: String,
    required: [true, 'El titulo es requerido.'],
    unique: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ['to do', 'in progress', 'done'],
    default: 'to do'
  }
}, {
    timestamps: true
});
const Tasks = model("Tasks", TasksSchema)

module.exports = Tasks


/*
const usuarioSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'El correo electrónico es obligatorio'],
    unique: true,
    validate: {
      validator: function(valor) {
        // Validar formato de correo electrónico
        // y retornar verdadero o falso según el resultado
      },
      message: 'El correo electrónico debe tener un formato válido'
    }
  },
  // otras propiedades del esquema...
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

*/