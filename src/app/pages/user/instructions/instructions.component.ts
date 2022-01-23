import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
  qId:any
  quiz:any
  constructor(
    private _route:ActivatedRoute,
    private _quiz :QuizService,
    private _router:Router
  ) { }

  ngOnInit(): void {
    this.qId = this._route.snapshot.params['qid']
    console.log(this.qId);
  
    
    this._quiz.getQuiz(this.qId).subscribe((data:any)=>{
      this.quiz=data
      console.log(data);
      
    },(error)=>{
      console.log(error);
      Swal.fire("error","something went wrong","error")
    })
    
  }
  startQuiz(){
    Swal.fire({
      icon:'info',
      title:"Continue With Quiz?",
      confirmButtonText:'Start Quiz',
      
      showCancelButton:true,
    
    }).then((result)=>{
      if(result.isConfirmed){
        this._router.navigate(['/start/'+this.qId]) 
      }
    })
  }
}
