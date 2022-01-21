import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit {

  qId:any;
  qTitle:any;
  questions = [
  {
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:''

  }
]
  constructor(
    private _route:ActivatedRoute,
    private _question:QuestionService
    ) { }

  ngOnInit(): void {
    this.qId = this._route.snapshot.params['qid']
    this.qTitle = this._route.snapshot.params['title']
    
    //fetch Questions
    this._question.getQuestionOfQuiz(this.qId).subscribe((data:any)=>{
      this.questions = data;
      console.log(data);
      
    },(error)=>{
      Swal.fire("Error","Something Went Wrong","error")
      console.log(error);
      
    })
  }

}
