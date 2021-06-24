import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routesChildren: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', redirectTo: 'dashboard', pathMatch: 'full'},
];

const routes: Routes = [
  {path: 'home', component: HomeComponent, children: routesChildren},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
