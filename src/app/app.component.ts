import { Component } from '@angular/core';
import { EmpleadoService } from './empleado.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    nombre:string = ""
    cargo:string = ""

    guardar=()=>{
      this.empleadoservice.agregarempleado(this.nombre,this.cargo).subscribe((resultado)=>{
        alert("naisu")
      console.log("awdwef")
      })
    }  

    constructor(private empleadoservice:EmpleadoService) { 

    }
}
