import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user :any;
  constructor(public login:LoginService) { }

  ngOnInit(): void {
    //this is geting data from local stroage
    this.user = this.login.getUser();

    //get data from server
    // this.login.getCurrentUser().subscribe((user:any)=>{
    //   this.user=user;
    // },
    // (error)=>{
    //   console.log(error);
      
    ///}
    //)
  }

}
