import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StartWarsService } from '../servicio/start-wars.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent  {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;
  constructor(private startWarsService: StartWarsService) { }
  
  buscar(){
  const valor = this.txtBuscar.nativeElement.value;
    if(valor.trim().length===0){
      return;
    }
    if(valor==='desc'){
    this.startWarsService.personajeOrdenado(valor);
    this.txtBuscar.nativeElement.value="";
    }
    this.startWarsService.data(valor);
    this.txtBuscar.nativeElement.value="";
   
  }

}
