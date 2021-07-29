import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private conexion:HttpClient) { 


  }

  agregarempleado=(nombre:string,cargo:string)=>{
    
    return this.conexion.post("http://localhost:5432/empleado",{nombre:nombre,cargo:cargo})
  }
}
