import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('username') username:ElementRef;
  @ViewChild('password') password:ElementRef;
  @ViewChild('firstname') firstname:ElementRef;
  @ViewChild('lastname') lastname:ElementRef;
  usr={
    username:"",
    password:"",
    firstname:"",
    lastname:""
  };
  constructor(private userService:UserService) { }

  ngOnInit() {

  }

  register(username,password,firstname,lastname){
    this.usr.username=username;
    this.usr.password=password;
    this.usr.firstname=firstname;
    this.usr.lastname=lastname;
    this.usr.password=md5(Config.encryptionMd5+this.usr.password);
    this.userService.register(this.usr).subscribe((data) => {
        if(data.status==true){
            alert(data.data);
            $( "#register" ).trigger( "click" );
            this.username.nativeElement.value="";
            this.password.nativeElement.value="";
            this.firstname.nativeElement.value="";
            this.lastname.nativeElement.value="";
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
