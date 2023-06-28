import { Component } from '@angular/core';

@Component({
  selector: 'app-resistencia',
  templateUrl: './resistencia.component.html',
  styleUrls: ['./resistencia.component.css']
})
export class ResistenciaComponent {
  banda1!:string;
  banda2!:string;
  banda3!:string;
  tolerancia!:string;

  colorb1!:string;
  colorb2!:string;
  colorb3!:string;
  colortol!:string;

  labelb1!:string;
  labelb2!:string;
  labelb3!:string;
  labeltol!:string;

  vb12!:string;
  vb123!:number;
  vtol!:number;

  vmax!:number;
  vmin!:number;

  calcular():void
  {
    this.vb12 = this.banda1 + this.banda2;
    this.vb123 = parseInt(this.vb12) * parseInt(this.banda3);
    this.vtol = this.vb123 * parseFloat(this.tolerancia);

    this.vmax = this.vb123 + this.vtol;
    this.vmin = this.vb123 - this.vtol;

    //BANDA 1
    switch(this.banda1)
    {
      case '0':
        this.labelb1 = 'Negro';
        this.colorb1 = "background: #16110b; color: white";
        break;

      case '1':
        this.labelb1 = 'Marron';
        this.colorb1 = "background: #884c21; color: white";
        break;

      case '2':
        this.labelb1 = "Rojo";
        this.colorb1 = "background: #fa0505; color: white";
        break;

      case '3':
        this.labelb1 = "Naranja";
        this.colorb1 = "background: #fe9800; color: black";
        break;

      case '4':
        this.labelb1 = "Amarillo";
        this.colorb1 = "background: #fefe00; color: black";
        break;

      case '5':
        this.labelb1 = "Verde";
        this.colorb1 = "background: #70ac46; color: white";
        break;

      case '6':
        this.labelb1 = "Azul";
        this.colorb1 = "background: #2e74b4; color: white";
        break;

      case '7':
        this.labelb1 = "Violeta";
        this.colorb1 = "background: #702f9f; color: white";
        break;

      case '8':
        this.labelb1 = "Gris";
        this.colorb1 = "background: #585858; color: white";
        break;

      case '9':
        this.labelb1 = "Blanco";
        this.colorb1 = "background: #fefefe; color: black";
        break;
    }

    //BANDA 2
    switch(this.banda2)
    {
      case '0':
        this.labelb2 = 'Negro';
        this.colorb2 = "background: #16110b; color: white";
        break;

      case '1':
        this.labelb2 = 'Marron';
        this.colorb2 = "background: #884c21; color: white";
        break;

      case '2':
        this.labelb2 = "Rojo";
        this.colorb2 = "background: #fa0505; color: white";
        break;

      case '3':
        this.labelb2 = "Naranja";
        this.colorb2 = "background: #fe9800; color: black";
        break;

      case '4':
        this.labelb2 = "Amarillo";
        this.colorb2 = "background: #fefe00; color: black";
        break;

      case '5':
        this.labelb2 = "Verde";
        this.colorb2 = "background: #70ac46; color: white";
        break;

      case '6':
        this.labelb2 = "Azul";
        this.colorb2 = "background: #2e74b4; color: white";
        break;

      case '7':
        this.labelb2 = "Violeta";
        this.colorb2 = "background: #702f9f; color: white";
        break;

      case '8':
        this.labelb2 = "Gris";
        this.colorb2 = "background: #585858; color: white";
        break;

      case '9':
        this.labelb2 = "Blanco";
        this.colorb2 = "background: #fefefe; color: black";
        break;
    }

    //BANDA 3
    switch(this.banda3)
    {
      case '1':
        this.labelb3 = 'Negro';
        this.colorb3 = "background: #16110b; color: white";
        break;

      case '10':
        this.labelb3 = 'Marron';
        this.colorb3 = "background: #884c21; color: white";
        break;

      case '100':
        this.labelb3 = "Rojo";
        this.colorb3 = "background: #fa0505; color: white";
        break;

      case '1000':
        this.labelb3 = "Naranja";
        this.colorb3 = "background: #fe9800; color: black";
        break;

      case '10000':
        this.labelb3 = "Amarillo";
        this.colorb3 = "background: #fefe00; color: black";
        break;

      case '100000':
        this.labelb3 = "Verde";
        this.colorb3 = "background: #70ac46; color: white";
        break;

      case '1000000':
        this.labelb3 = "Azul";
        this.colorb3 = "background: #2e74b4; color: white";
        break;

      case '10000000':
        this.labelb3 = "Violeta";
        this.colorb3 = "background: #702f9f; color: white";
        break;

      case '100000000':
        this.labelb3 = "Gris";
        this.colorb3 = "background: #585858; color: white";
        break;

      case '1000000000':
        this.labelb3 = "Blanco";
        this.colorb3 = "background: #fefefe; color: black";
        break;

      case '0.1':
        this.labelb3 = "Dorado";
        this.colorb3 = "background: #b1a000; color: black";
        break;
      
      case '0.01':
        this.labelb3 = "Plateado";
        this.colorb3 = "background: #a5a5a5; color: black";
        break;
    }

    //TOLERANCIA
    switch(this.tolerancia)
    {
      case '0.05':
        this.labeltol = 'Dorado';
        this.colortol = "background: #b1a000; color: black";
        break;

      case '0.10':
        this.labeltol = 'Plateado';
        this.colortol = "background: #a5a5a5; color: black";
        break;

      case '0.20':
        this.labeltol = "Sin banda";
        this.colortol = "background: #fefefe; color: black";
        break;
    }

  }


}
