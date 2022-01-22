import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private _route:ActivatedRoute,private _quiz:QuizService) { }

  ngOnInit(): void {
 
    this._route.params.subscribe((params)=>{
      this.catId = params['catId']
    })

    if(this.catId==0){
        this._quiz.quizzes().subscribe((data:any)=>{
          this.quiz = data
          console.log(this.catId);
          
        },(error)=>{
          Swal.fire("error","Something Went Wrong","error")
        })
    }
    else{
        console.log(this.catId);
        alert(this.catId)
        this.quiz=[]
    }
  }

}
