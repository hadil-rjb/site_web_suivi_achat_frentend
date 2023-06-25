import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchatComponent } from './achat/achat.component';
import { TableauComponent } from './tableau/tableau.component';

const routes: Routes = [
  {
    path:'Tableau',
    component:TableauComponent
  },
  {
    path:'Achats',
    component:AchatComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
