import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  constructor(private http:HttpClient) { }

  invocable_1(){
    let dato = 'Función 1 Invocada';
    return dato
  }

  invocable_2(){
    let dato = 'Función 2 invocada';
    return dato
  }

  invocable_3(){
    let dato = 'Función 3 invodada';
    return dato
  }

  sumar(numero:any){
    let dato = 5
    return(dato + numero)
  }

  sumar2(numero:any, numero2:any){
    return(numero + numero2)
  }

  promedio(numero1:any, numero2:any){
    return(numero1 + numero2)/2
  }
}
