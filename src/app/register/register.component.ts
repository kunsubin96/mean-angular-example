import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {md5} from '../untils/md5';
import {Config} from '../config';
declare var $:any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  usr={
    username:"",
    password:"",
    firstname:"",
    lastname:""
  };
  constructor(private userService:UserService) { }

  ngOnInit() {

  }

  register(){
     this.usr.password=md5(Config.encryptionMd5+this.usr.password);
     this.userService.register(this.usr).subscribe((data) => {
        if(data.status==true){
            alert(data.data);
            $( "#register" ).trigger( "click" );
            this.usr={
              username:"",
              password:"",
              firstname:"",
              lastname:""
            };
        }else{
            alert(data.data);
        }
     },(error)=>{
       alert(error);
     });
  }
  cancel(){
    $( "#register" ).trigger( "click" );
    this.usr={
      username:"",
      password:"",
      firstname:"",
      lastname:""
    };
  }
}
