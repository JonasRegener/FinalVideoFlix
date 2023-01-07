import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
{ path: 'login', component: LoginComponent },
{ path: '', redirectTo: 'movies', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
