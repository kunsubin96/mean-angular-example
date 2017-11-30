import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { CreateBookComponent } from './create-book/create-book.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path:'home',component:HomeComponent},
  {path:'book',component:BookComponent},
  { path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{useHash:false})],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}