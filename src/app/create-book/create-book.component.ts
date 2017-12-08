import { Component, OnInit,Input } from '@angular/core';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';
import {FormBuilder,FormGroup} from '@angular/forms';
declare var $:any;
@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  bookForm:FormGroup;
  @Input('addBook') books:any;
  constructor(private bookService:BookService, private router:Router ,private formBuilder:FormBuilder) { }

  ngOnInit() {
      this.bookForm=this.formBuilder.group({
        isbn: [],
        title:[],
        author:[],
        publisher:[],
        published_date:[],
        price:[]
      })
  }
  saveBook():void{
    this.bookService.createBook(this.bookForm.value).subscribe((data) => {
      if(data.status==true){
        $("#addBook").modal("hide");
        this.books.push(this.bookForm.value);
        this.bookForm.reset();
      }else{
        alert('Not create book!');
      }
    },(error)=>{
      console.log(error);
    });
  }
  
}
