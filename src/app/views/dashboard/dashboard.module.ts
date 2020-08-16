import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';


const routes: Routes = [
  {
      path: '',
      component: DashboardComponent
  }
];
@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
