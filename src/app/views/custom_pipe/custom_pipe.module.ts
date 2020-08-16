import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPipeComponent } from './custom_pipe.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
      path: '',
      component: CustomPipeComponent
  }
];
@NgModule({
  declarations: [
    CustomPipeComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [CustomPipeComponent]
})
export class CustomPipeModule { }
