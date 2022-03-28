import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  alumnos: any[] = [
    { nombre: "Rodriguez", cursada: [{ materia: "matematicas", nota: 8 }, { materia: "fisica", nota: 2 }, { materia: "algebra", nota: 6 }], promedio: 32 },
    { nombre: "Gastaldi", cursada: [{ materia: "matematicas", nota: 7 }, { materia: "fisica", nota: 4 }, { materia: "algebra", nota: 9 }], promedio: 21 },
    { nombre: "Suller", cursada: [{ materia: "matematicas", nota: 8 }, { materia: "fisica", nota: 3 }, { materia: "algebra", nota: 8 }], promedio: 26 },
    { nombre: "Gasparin", cursada: [{ materia: "matematicas", nota: 7 }, { materia: "fisica", nota: 8 }, { materia: "algebra", nota: 1 }], promedio: 19 },
    { nombre: "Meincke", cursada: [{ materia: "matematicas", nota: 3 }, { materia: "fisica", nota: 4 }, { materia: "algebra", nota: 9 }], promedio: 43 },
    { nombre: "Canadas", cursada: [{ materia: "matematicas", nota: 7 }, { materia: "fisica", nota: 8 }, { materia: "algebra", nota: 4 }], promedio: 35 },
  ]


  constructor() {
  }

  ngOnInit(): void {
  }

  recursar(nombre: string) {
    console.log("Felicitaciones " + nombre + " Tu inscripcion a recursar se realizo con exito!")
  }

}