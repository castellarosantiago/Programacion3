const Turno = require("./../mock/entities/turnos.entity.js");
const Config = require("./../../config/config.js");
<<<<<<< HEAD
const jwt = requite("jsonwebtoken");

class TurnosModel {
  constructor() {
    this.data = [];
    //hardcodear para probar con una instancia de turno despues
  }

  create(turno) {
=======
const turnosController = require("../../controllers/API/turnos.controller.js");
const jwt = require("jsonwebtoken");

class TurnosModel {
  constructor() {
    this.turnos = [];
    this.id = 1;
  }

  async getTurnosByPaciente(idPaciente) {
    return new Promise((resolve, reject) => {
      
        const turno = this.data.find((t) => t.idPaciente === idPaciente);
        

        if (turno === undefined) {
          reject(new Error("Paciente no encontrado"))
         
        }else{
          resolve(turno);
        }
   
    });
  }
  crearNuevoTurno(turno) {
    return new Promise((resolve, reject) => {

      
        const turnoDisponible = this.data.find((t) => t.id === id);
      if(turnoDisponible== undefined){
        reject(new Error("Paciente no encontrado"));
      }else{
        resolve(turnoDisponible)
    }
    })
  }


  mostrarListaTurnos(){
    return Promise.resolve(this.turnos);
  }

  getTurnosDisponibles(){
    return Promise.resolve(this.turnos.filter(t => t.idPaciente == undefined));
  }
  
  getTurnosDePaciente(idPaciente){
    return Promise.resolve(this.turnos.filter(t => t.idPaciente === idPaciente));
  }
}





/*class TurnosModel {
  constructor() {
    this.turnos = [];
    this.id = 1;
    //hardcodear para probar con una instancia de turno despues
  }

async getTurnosByPaciente(idPaciente){
  return this.turnos.filter(turno => turno.idPaciente === Number(idPaciente));
}

async deleteTurno(idTurno){
  const turnoIndex = this.turnos.findIndex(turno=> turno.idTurno === Number(idTurno));
  if (turnoIndex === -1) throw new Error('Turno no encontrado, verifique el id');
  return this.turnos.splice(turnoIndex, 1)[0];
}

async createTurno(idPaciente, fecha, hora){
  const nuevoTurno = {id:this.id++, idPaciente, fecha, hora}
  this.turnos.push(nuevoTurno);
  return nuevoTurno;
}*/

/*create(turno) {
>>>>>>> db4b9ee2610cf625e1ab12fbcc42944b53c0943c
    if (!turno) {
      throw new Error("No envio ningun dato");
    } else {
      return turno;
    }
    return new Promise((resolve, reject) => {
      try {
        turno.id = this.id;
        this.id++;
        const turnoEncontrado = this.data.find(
          (t) => t.idPaciente === Paciente.id
        );
        if (turnoEncontrado === null) {
          this.data.push(turno);
        } else {
          throw new Error("El turno ya se ecnuentra asignado");
        }
        resolve(turno);
      } catch (error) {
        reject(error);
      }
    });
  }

  delete(id) {
    new Promise((resolve, reject) => {
      try {
        const turnoEncontrado = this.data.find(
<<<<<<< HEAD
          (t) => t.idPaciente === Paciente.id
=======
          (t) => t.id == id
>>>>>>> db4b9ee2610cf625e1ab12fbcc42944b53c0943c
        );
        if (!turnoEncontrado) {
          throw new Error("No se puede cancelar un turno no asignado");
        }
        const pos = this.data.indexOf(turnoEncontrado);
        this.data.splice(pos, 1);
      } catch (error) {
        reject(error);
      }
    });

<<<<<<< HEAD
    
  }
}
=======

  }

  getAllTurnos(){
    return new Promise((resolve, reject)=>{
        resolve(this.data);
    });
  }

getTurnoById(id){
    return new Promise((resolve, reject)=>{
        try{
            const identificadorTurno = Number(id);
            const turnoEncontrado = this.data.find((t)=>t.idPaciente=== identificadorTurno);
            if(!turnoEncontrado){
                throw new Error("el id es incorrecto");
            }
            resolve(turnoEncontrado);
        }catch(error){
            reject(error);
        }
    });
}
}
*/

module.exports = new TurnosModel();
>>>>>>> db4b9ee2610cf625e1ab12fbcc42944b53c0943c
