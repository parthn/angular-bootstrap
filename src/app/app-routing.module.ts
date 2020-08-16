import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './layout/main/main.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path: '',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'custom_pipe',
        loadChildren: () => import('./views/custom_pipe/custom_pipe.module').then(m => m.CustomPipeModule),
        canActivate: [AuthGuard],
      }
    ]
  },
  { path: '',   redirectTo: '', pathMatch: 'full' }, 
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
