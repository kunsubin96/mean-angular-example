import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books:any;
  bookDetail:any;
  text_search:any;
  constructor(private bookService:BookService,private router:Router) { }

  ngOnInit() {
      this.bookService.getAllBooks().subscribe((data) => {
        if(data.status==true){
          this.books = data.data;
        }else{
          this.books=null;
        }
      },(error)=>{
        alert(error);
      });
  }
  deleteBook(book:any, id:any):any{
    this.bookService.deleteBook(id).subscribe((data)=>{
      if(data.status==true){
         var index=this.books.indexOf(book);
         this.books.splice(index,1);
      }else{
         alert(data.data);
      }
    },(error)=>{
        alert(error);
    });
  }
  showDetail(book){
     this.bookDetail=book;
  }
  editBook(book){
    this.bookDetail=book;
  }
  search(){
    
  }
}
