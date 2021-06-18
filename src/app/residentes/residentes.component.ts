import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StartWarsService } from '../servicio/start-wars.service';

@Component({
  selector: 'app-residentes',
  templateUrl: './residentes.component.html',
  styleUrls: ['./residentes.component.css']
})
export class ResidentesComponent {
  @ViewChild('desc') desc!:ElementRef<HTMLInputElement>;

  constructor(private startWarsService: StartWarsService) { }

 get resul(){
    return this.startWarsService.ordenado;
  }



}
