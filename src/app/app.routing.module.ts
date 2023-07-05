import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CinepolisComponent } from "./utl/cinepolis/cinepolis.component";
import { DistanciaComponent } from "./utl/distancia/distancia.component";
import { ResistenciaComponent } from "./utl/resistencia/resistencia.component";
import { PizzasComponent } from "./utl/pizzas/pizzas.component";

const routes:Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'Cinepolis', component: CinepolisComponent},
    {path: 'Distancia', component: DistanciaComponent},
    {path: 'Resistencia', component: ResistenciaComponent},
    {path: 'Pizzas', component: PizzasComponent},
    /*{path: '**', component: PageNotFoundComponent},*/

]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}