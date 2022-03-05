import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, RouterLink } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {
  
  catId:any
  quiz:any
  constructor(
            private _route:ActivatedRoute,
            private _quiz:QuizService) { }

  ngOnInit(): void {
 
    this._route.params.subscribe((params)=>{
      this.catId = params['catId']
      console.log(params);
      if(this.catId==0){
        this._quiz.getActiveQuizzes().subscribe((data:any)=>{
          this.quiz = data
          console.log(this.catId);
          
        },(error)=>{
          Swal.fire("error","Something Went Wrong","error")
        })
    }
    else if(this.catId =='welcome'){
       
    }
    else{
        console.log(this.catId);
        this._quiz.getActiveQuizzesOfCategory(this.catId).subscribe((data:any)=>{
          this.quiz = data;
        },(error)=>{
          Swal.fire("error","Somthing went Wrong","error")
          return;
        })
       
        
        
    }
    })

    
  }

}
