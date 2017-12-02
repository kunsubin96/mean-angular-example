import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../services/book.service';
declare var $:any;
@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  @Input('bookEdit') book:any;
  constructor(private bookService:BookService) { }

  ngOnInit() {
    
  }
  saveBook(){
    this.bookService.updateBook(this.book).subscribe((data) => {
      if(data.status==true){
        $("#editBook").modal("hide");
      }else{
        alert(data.data);
      }
    },(error)=>{
      alert(error);
    });
  }
}
