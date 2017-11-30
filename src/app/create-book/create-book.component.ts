import { Component, OnInit,Input } from '@angular/core';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  book={};
  @Input('addBook') books:any;
  constructor(private bookService:BookService, private router:Router) { }

  ngOnInit() {

  }
  saveBook():void{
    this.bookService.createBook(this.book).subscribe((data) => {
      if(data.status==true){
        $("#addBook").modal("hide");
        this.books.push(this.book);
      }else{
        alert('Not create book!');
      }
    },(error)=>{
      console.log(error);
    });
  }
}
