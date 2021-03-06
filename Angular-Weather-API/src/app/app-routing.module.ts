import { SanJoseComponent } from './sanjose/sanjose.component';
import { SeattleComponent } from './seattle/seattle.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { WashingtonComponent } from './washington/washington.component';
import { ChicagoComponent } from './chicago/chicago.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: 'burbank',component: BurbankComponent },
  { path: 'chicago',component: ChicagoComponent },
  { path: 'dallas',component: DallasComponent },
  { path: 'sanjose',component: SanJoseComponent },
  { path: 'seattle',component: SeattleComponent },
  { path: 'washington',component: WashingtonComponent },


  // redirect to /sanjose if there is nothing in the url
  { path: '', pathMatch: 'full', redirectTo: '/sanjose' },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }