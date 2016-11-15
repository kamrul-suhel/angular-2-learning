import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {UserComponent} from "./user/user.component";
import {AboutusComponent} from "./aboutus/aboutus.component";

const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'user/:id',
    component : UserComponent
  },
  {
    path : 'aboutus',
    component : AboutusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RoutingProjectRoutingModule { }
