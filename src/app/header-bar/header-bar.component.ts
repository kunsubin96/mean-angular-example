import { Component, OnInit, OnChanges } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {
 
  currentUser:any;
  constructor(private userService:UserService,private router:Router) { }
  ngOnInit() {
      this.currentUser=JSON.parse(localStorage.getItem('currentUser'));
      console.log(JSON.stringify(this.currentUser));
  }
  logout(){
		this.userService.logout();
		this.router.navigate(['/']);
	}
}
