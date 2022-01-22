import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {

  categories:any;
  constructor(private _category:CategoryService) { }

  ngOnInit(): void {
    this._category.categories().subscribe((data:any)=>{
      this.categories = data;
      console.log(data); 
      },(error)=>{
        Swal.fire("error","Something Went Wrong","error")
      })
  }

}
