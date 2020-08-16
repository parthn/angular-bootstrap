import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPipeComponent } from './custom_pipe.component';
import { Routes, RouterModule } from '@angular/router';
import { ReverseStringPipe } from './../../pipes/reverse-string.pipe';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
      path: '',
      component: CustomPipeComponent
  }
];
@NgModule({
  declarations: [
    CustomPipeComponent,
    ReverseStringPipe    
  ],
  imports: [
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [CustomPipeComponent]
})
export class CustomPipeModule { }
