import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {

  @Input('bookDetail') book:any;
  constructor() { }

  ngOnInit() {
  }

}
