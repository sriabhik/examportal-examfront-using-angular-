import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit {
  // color: ThemePalette = 'primary';
  // mode: ProgressSpinnerMode = 'determinate';
  // value = 50;
  
  timer:any
  qid:any
  questions:any
  isSubmit = false
  ///video 41
  marksGot = 0
  correctAnswers = 0
  attempted = 0
  marksSingle = 0
  constructor(
    private locationStrategy:LocationStrategy,
    // activatedRoute is used to recieved data
    private _route:ActivatedRoute,
    private _question:QuestionService
  ) { }

  ngOnInit(): void {
    this.preventBackButton();
    this.qid=this._route.snapshot.params['qid']
    this.loadQuestion();
    
   
  }
  loadQuestion() {
    this._question.getQuestionOfQuizForTest(this.qid).subscribe((data:any)=>{
      this.questions=data
      this.timer = this.questions.length*1*60;
      this.questions.forEach((q:any)=>{
        q['givenAnswer']='';
      })
        this.startTimer()
    },(error)=>{
      console.log(error);
      Swal.fire("error","something error from our side,try again","error")
    })
  }
  preventBackButton() {
    history.pushState(null,  location.href);
    this.locationStrategy.onPopState(() => {
      history.pushState(null, location.href);
    })
  }
  submitQuiz(){
    
    Swal.fire({
      icon:'info',
      title:"Submit Quiz?",
      confirmButtonText:'submit',
      
      showCancelButton:true,
    
    }).then((result)=>{
      if(result.isConfirmed)
        this.isEval();
      
    })
  }
    startTimer(){
      let t =window.setInterval(()=>{
        if(this.timer<=0){
          this.isEval()
          clearInterval(t);
        }else{
          this.timer--;
        }
      },1000)
    }

    getFormattedTime(){
      let min = Math.floor(this.timer/60)
      let sec = this.timer-min*60
      return`${min}  minutes : ${sec} :seconds`;
    }

    isEval(){
      this.marksGot = 0
      this.correctAnswers = 0
      this.attempted = 0
      this.marksSingle = 0
      this.isSubmit=true
        this.questions.forEach((q:any)=>{
          console.log(q.answer)
          console.log(q.givenAnswer);
          
          if(q.answer.trim()!='' && q.answer.trim()==q.givenAnswer.trim()){
           
            this.marksSingle = this.questions[0].quiz.maxMarks/this.questions.length;
            console.log(this.marksSingle);
            
            ++this.correctAnswers;
          }
          if(q.givenAnswer.trim() !=''){
            this.attempted++
          }
    
        })
      
        this.marksGot = this.correctAnswers*this.marksSingle;
    }
}

