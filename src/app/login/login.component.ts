import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import {md5} from '../untils/md5';
import {Config} from '../config';
declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={
    username:"",
    password:""
  };
  constructor(private userService:UserService, private router:Router) { }

  ngOnInit() {

  }
  login(){
    this.user.password=md5(Config.encryptionMd5+this.user.password);
    this.userService.login(this.user).subscribe((data) => {
        if(data.status==true){
          $("#login").modal("hide");
        }else{
          alert(data.data);
        }
    },(error)=>{
      alert(error);
    });
  }
}
