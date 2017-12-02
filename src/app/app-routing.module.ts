import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { AuthGuard } from './filters/auth-guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path:'home',component:HomeComponent},
  {path:'book',component:BookComponent, canActivate:[AuthGuard]},
  { path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{useHash:false})],
  providers: [AuthGuard],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}