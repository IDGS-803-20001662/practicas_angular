import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CinepolisComponent  } from '../cinepolis/cinepolis.component';
import { FormsModule } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    CinepolisComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatFormFieldModule,
  ],
  exports:[
    CinepolisComponent
  ],
})

export class CinepolisModuleModule { }
