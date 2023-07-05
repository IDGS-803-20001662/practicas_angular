import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPedidos } from '../pizzas';
import { IPizza } from '../pizzas';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent {

  // PEDIDOS
  pedidoForm!:FormGroup;
  fecha:Date = new Date();
  pedidos: IPedidos[] = [];

  dia:number = this.fecha.getDate();
  mes:number = this.fecha.getMonth() + 1;
  anio:number = this.fecha.getFullYear();
  fechaFormateada:string = `${this.padLeft(this.dia)}/${this.padLeft(this.mes)}/${this.padLeft(this.anio)}`;
  mostrarAlerta:boolean = false;

  padLeft(numero: number): string {
    return numero < 10 ? `0${numero}` : numero.toString();
  }


  //PIZZAS
  pizzaForm!:FormGroup; 
  pizzas: IPizza[] = [];
  
  totalMostrar:number = 0;

  constructor(private readonly fb: FormBuilder)
  {
    this.pedidoForm = this.initFormPedido();
    this.pizzaForm = this.initFormPizza();
  }

  initFormPedido():FormGroup
  {
    return this.fb.group
    ({
      nombre:['', [Validators.required, Validators.minLength(3)]],
      direccion:['', [Validators.required, Validators.minLength(5)]],
      telefono:['', [Validators.required, Validators.minLength(10), Validators.pattern('^[0-9]+$')]],
    })
  }

  initFormPizza():FormGroup
  {
    return this.fb.group
    ({
      tamanio:['', [Validators.required]],
      ingredientes:[[], [Validators.required]],
      num:['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    })
  }

  onSubmitPedido():void
  {
    this.mostrarAlerta = true;
  }

  cancelarPedido():void
  {
    this.mostrarAlerta = false;
  }

  confirmarPedido():void
  {
    console.log('Form-> ', this.pedidoForm.value);
    this.agregarPedido();
    this.pedidoForm.reset();
    this.pizzas = [];
    this.totalMostrar = 0;
    this.mostrarAlerta = false;
  }

  agregarPedido():void
  {
    let nuevoPedido:IPedidos = 
    {nombre:this.pedidoForm.get('nombre')?.value,
      direccion: this.pedidoForm.get('direccion')?.value,
      telefono: this.pedidoForm.get('telefono')?.value,
      fecha: this.fechaFormateada,
      total: this.calcularTotal()}

    this.pedidos.push(nuevoPedido);
  }

  calcularTotal():number
  {
    let total:number = 0;

    for (let i = 0; i < this.pizzas.length; i++) {
      total = total + this.pizzas[i].subtotal;
    }
    return total;
  }

  onSubmitPizza():void
  {
    console.log('Form-> ', this.pizzaForm.value);
    this.agregarPizza();
    this.pizzaForm.reset();
  }

  agregarPizza():void
  {
    let nuevaPizza:IPizza = 
    {tamanio:this.pizzaForm.get('tamanio')?.value,
        ingredientes: this.pizzaForm.get('ingredientes')?.value,
        num: this.pizzaForm.get('num')?.value,
        subtotal: this.calcularSubtotal()}

    this.pizzas.push(nuevaPizza);
    this.totalMostrar = this.calcularTotal();
  }

  calcularSubtotal():number
  {
    let subtotal:number = 0;
    let tm:string = this.pizzaForm.get('tamanio')?.value;
    let ing:string[] = this.pizzaForm.get('ingredientes')?.value;
    let num:number = this.pizzaForm.get('num')?.value;

    if(tm == "Chica")
    {
      subtotal = 40;
    }
    else if (tm == "Mediana")
    {
      subtotal = 80;
    }
    else if (tm == "Grande")
    {
      subtotal = 120;
    }

    for (let i = 0; i < ing.length; i++) {
      if (ing[i] == "Piña")
      {
        subtotal = subtotal + 10;
      }
      else if (ing[i] == "Jamon")
      {
        subtotal = subtotal + 10;
      }
      else if (ing[i] == "Champiñones")
      {
        subtotal = subtotal + 10;
      }
      else if (ing[i] == "Queso")
      {
        subtotal = subtotal + 0;
      }
    }

    subtotal = subtotal * num;

    return subtotal;
  }

  borrarPizza(index:number):void
  {
    this.pizzas.splice(index, 1);
    this.totalMostrar = this.calcularTotal();
  }

  verPedidosDia():void
  {
    
  }

  verPedidosMes():void
  {

  }

}
