import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css'],
})
export class CinepolisComponent {
  nombre!:string;
  cantPersonas!:number;
  tarjetaCineco:string = "NO";
  cantBoletas!:number;
  pago!:number;
  respuesta!:string;
  valido:boolean = false;

  opcionesTarjeta=[
    'SI', 'NO'
  ];

  indicarPago():void
  {
    this.validar();
    if (this.valido)
    {
      this.calcularPago();
    }
  }

  validar():void
  {
    if(this.cantBoletas > (7 * this.cantPersonas))
    {
      this.pago = 0;
      this.respuesta = "No puedes comprar más de 7 boletas por persona";
    }
    else
    {
      this.valido = true;
    }
  }

  calcularPago(): void
  {
    if (this.cantBoletas > 5)
    {
      this.pago = (this.cantBoletas * 12) - ((this.cantBoletas * 12) * 0.15);
      this.respuesta = ", tienes un descuento de 15%";
    }
    else if (this.cantBoletas <= 5 && this.cantBoletas >= 3)
    {
      this.pago = (this.cantBoletas * 12) - ((this.cantBoletas * 12) * 0.10);
      this.respuesta = ", tienes un descuento de 10%";
    }
    else
    {
      this.pago = (this.cantBoletas * 12);
      this.respuesta = ", no tienes descuento por número de boletas";
    }

    if (this.tarjetaCineco == "SI")
    {
      this.pago = this.pago - ((this.pago) * 0.10);
      this.respuesta = this.respuesta + ", además del 10% por tarjeta CINECO";
    }

    this.respuesta = this.nombre + this.respuesta;
  }

}
