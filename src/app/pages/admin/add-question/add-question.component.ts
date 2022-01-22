import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
 
  qId:any;
  qTitle:any
  //to hold question recieved from form
  question={
    quiz:{
      qid:''
    },
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:''
  }
  constructor(
    private _route:ActivatedRoute,
    private _question:QuestionService
  ) { }

  ngOnInit(): void {
    this.qId =this._route.snapshot.params['qid'];
    this.qTitle =this._route.snapshot.params['title'];
    //here is bracket qid used is from backend variable qid in quiz
    //this is assigning value to qid in quiz
    this.question.quiz['qid'] = this.qId
  }
  formSubmit(){
    if(this.question.content.trim()==''|| this.question.content==null){
     Swal.fire("Missing","Content Required","info")
     return
    }
    this._question.addQuestion(this.question).subscribe((success)=>{
      Swal.fire("Successfull","Question Added","success")
     this.question={
        quiz:{
          qid:''
        },
        content:'',
        option1:'',
        option2:'',
        option3:'',
        option4:'',
        answer:''
      }
    },(error)=>{
      Swal.fire("UnsuccessFull","Something Went Wrong","error")
    })
  } 
}
