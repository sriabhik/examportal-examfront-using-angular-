import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  //importing user service
  constructor(private userService :UserService,private snack:MatSnackBar) { }

  public user={
    username:'',
    password:'',
    firstname:'',
    lastname:'',
    email:'',
    phone:'',
  }
  ngOnInit(): void {
  }
  formSubmit(){
    if(this.user.username ==''||this.user.username==null){
      this.snack.open("Oops!! User-Name Required","Cancel",
      {duration:2000,verticalPosition:'top',horizontalPosition:'left'})
      Swal.fire('Oops!! UserName Required','Enter Username')
        return;
    }
    //addUser : userService
    this.userService.addUser(this.user).subscribe(
      (data)=>{
        //success
        console.log(data)
        this.snack.open("Registration Successfull","Cancel",{
          duration:2000,verticalPosition:'top',horizontalPosition:'left'
        })
        Swal.fire('Registration Successfull')
      },
      (error)=>
      {
        //fail
        console.log(error)
        this.snack.open("something went wrongs","Cancel",{duration:2000,verticalPosition:'top',horizontalPosition:'left'})
        Swal.fire('Something Went Wrongs')
      }
    );
  }
}
