import { Component } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { PruebaService } from '../../servicios/prueba/prueba.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
//Instanciar en una variable el formulario reactivo
formularioForm;
//FIN Instanciar en una variable el formulario reactivo
//Crear un constructor: Esto permita inicializar variables con atributos y valores
constructor(private formBuilder: FormBuilder, private pruebaSrv:PruebaService){
  this.formularioForm = this.formBuilder.group({
    nombre: '',
    apellido: ''
  });
}  
//FIN Crear un constructor: Esto permita inicializar variables con atributos y valores

//Creamos un programa principal al cargar la web. Este se ejecuta al momento de cargar la página Web
ngOnInit() {
  console.log("hola");
}
//Fin programa principal

enviarDatos(){
  //Podemos crear una variable donde almacenaremos los datos capturados (opcional)
  let datos_formulario = this.formularioForm.value;
  //Fin variable datos formulario

  //Imprimir por consola los datos capturados en la variable
  console.log(datos_formulario);
  console.warn('Los datos capturados son:', this.formularioForm.value);
  this.formularioForm.reset();
  
  //Fin imprimir por consola
}

//Función que activa un función  del servicio Prueba
activar_invocable_1(){
  let dato_desde_servicio;
  dato_desde_servicio = this.pruebaSrv.invocable_1();
  console.log(dato_desde_servicio);
}

activar_invocable_2(){
  let dato_desde_servicio;
  dato_desde_servicio = this.pruebaSrv.invocable_2();
  console.log(dato_desde_servicio);
}

activar_invocable_3(){
  let dato_desde_servicio;
  dato_desde_servicio = this.pruebaSrv.invocable_3();
  console.log(dato_desde_servicio);
}

invocable_sumar(){
  let dato_desde_servicio = this.pruebaSrv.sumar(3)
  console.log(dato_desde_servicio);
}

invocable_sumar2(){
  let dato_desde_servicio = this.pruebaSrv.sumar2(5,6)
  console.log(dato_desde_servicio);
}

invocar_promedio(){
  let promedio_desde_servicio = this.pruebaSrv.promedio(2,3);
  if(promedio_desde_servicio < 4){
    console.log(promedio_desde_servicio);
    console.log('Reprobado');
  }else{
    console.log(promedio_desde_servicio);
    console.log('Aprobó')
  }
  console.log(promedio_desde_servicio);
}
}
