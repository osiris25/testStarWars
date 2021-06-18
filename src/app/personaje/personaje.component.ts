import { Component} from '@angular/core';
import { StartWarsService } from '../servicio/start-wars.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent  {
  
  constructor(private startWarsService: StartWarsService) { }
  get busqueda(){
    return this.startWarsService.resultados;
  }
  
  
  }

  

