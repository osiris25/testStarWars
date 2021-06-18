import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StartWarsService {

  resultados : any[]=[];
  ordenado: any[]=[];
  Personajeordenado: any;
  constructor(private http : HttpClient) { }

  data(personaje:string){
  console.log(personaje);
    this.http.get(`https://rickandmortyapi.com/api/character/?name=${personaje}`)
    .subscribe((resp:any )=>{
        this.resultados=resp.results;
     
    })
  }
    personajeOrdenado(orden:string){
      this.http.get(`https://rickandmortyapi.com/api/character`)
      .subscribe((resp:any )=>{
        this.ordenado=resp.results.sort((a:any,b:any)=>b.name-a.name);
       

     
    })

    }
    
  

  
  
}

