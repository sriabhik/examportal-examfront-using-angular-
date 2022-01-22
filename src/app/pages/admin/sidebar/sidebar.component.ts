import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  constructor(private login:LoginService) { 
    
 
  }

  ngOnInit(): void {
 
  }
  public logout(){
    this.login.logout();
    
    window.location.reload();
    
    
    // window.location.href="/login"
  }
}
