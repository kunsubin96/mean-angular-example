import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BookService } from './services/book.service';
import { UserService } from './services/user.service';
import { AppRoutingModule } from './/app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpModule } from '@angular/http';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { DetailBookComponent } from './detail-book/detail-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyFilterPipe } from './book/my_filter_piple';
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HeaderBarComponent,
    FooterBarComponent,
    HomeComponent,
    BookComponent,
    CreateBookComponent,
    DetailBookComponent,
    EditBookComponent,
    LoginComponent,
    RegisterComponent,
    MyFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [BookService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
