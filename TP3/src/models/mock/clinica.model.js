


const turnosModel = require("./turnos.models.js")
const pacientesModel = require("./pacientes.models.js")


class ModeloClinica {
    getAllPacientes(){
        return PacientesModel.list();
    }

    getAllTurnos(){
        return turnosModel.mostrarListaTurnos();
    }

    async getPacientesConTurnos(){
        const pacientes = await pacientesModel.list();
        const turnos = await turnosModel.getAllTurnos();
        return pacientes.map(p => ({
            ...p,
            turnos: turnos.filter(t => t.idPaciente === paciente.id)
        }));
    }

      // elimina el paciente con id = id
  borrarPacientes(id) {
    new Promise((resolve,reject)=>{
      try {
       const pacienteEncontrado = this.data.find((p) => p.id == id);
       if(!pacienteEncontrado){
         throw new Error("el id no es válido");
       }
       const pos = this.data.indexOf(pacienteEncontrado);
       this.data.splice(pos, 1);
       resolve(pacienteEncontrado); // elimina el elemento de la posición pos del arreglo
      } catch (error) {
       reject(error);
    }
    })

   
  }
}

module.exports = new ModeloClinica();





