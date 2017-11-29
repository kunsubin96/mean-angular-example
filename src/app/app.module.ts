import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BookService } from './services/book.service';
import { UserService } from './services/user.service';
import { AppRoutingModule } from './/app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { CreateBookComponent } from './create-book/create-book.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HeaderBarComponent,
    FooterBarComponent,
    HomeComponent,
    BookComponent,
    CreateBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [BookService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
