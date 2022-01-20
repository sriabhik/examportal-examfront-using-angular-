import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  category=
  {
    title:'',
    description:''
  }
  constructor(private _category:CategoryService,private _snake:MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.category.title.trim() == ''|| this.category.title ==null){
      Swal.fire("Missing","Title Required")
      
    }
    else if(this.category.description.trim() == ''|| this.category.description==null){
      Swal.fire("Missing","Description Required")
    }
    this._category.addCategory(this.category).subscribe((success)=>{
      console.log("Success");
      Swal.fire("Successfull","Category Added Successfully ")
      this.category.title=''
      this.category.description=''
    },(error)=>{
      console.log(error);
      Swal.fire("Unsuccessfull","Failed")
    })
  }
}
