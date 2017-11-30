import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../services/book.service';
declare var $:any;
@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  modal = {
    "header":"MODAL HEADER",
    "text" : "MODAL TEXT"
   };
  book={title:""};
  @Input('bookEdit') bookEdit:any;

  constructor(private bookService:BookService) { }

  ngOnInit() {

  }
  saveBook(){
  
    alert(this.book.title);
  }
}
