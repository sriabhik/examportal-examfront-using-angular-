import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import baseUrl from 'src/app/services/helper';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  categories=[
    {
      cid:'',
      title:''
    },
  ]
    quizData=
      {
        title:'',
        description:'',
        maxMarks:'',
        numberOfQuestions:'',
        active:true,
        category:{
          cid:''
        }
      };
    
  constructor(private _category:CategoryService,private _http:HttpClient,private _quiz:QuizService) { }

  ngOnInit(): void {
    this._category.categories().subscribe((data:any)=>{
      this.categories = data;
    },(error)=>{
      console.log(error);
      Swal.fire("Error!","Something Went Wrong")
      
    })
  }
 formSubmit(){
    if(this.quizData.title.trim() == ''|| this.quizData.title ==null){
      Swal.fire("Missing","Title Required")
      return;
      
    }
    else if(this.quizData.description.trim() == ''|| this.quizData.description==null){
      Swal.fire("Missing","Description Required")
      return;
    }
    this._quiz.addQuiz(this.quizData).subscribe((success)=>{
      console.log("Success");
      Swal.fire("Successfull","Quiz Added Successfully ")
      this.quizData=
      {
        title:'',
        description:'',
        maxMarks:'',
        numberOfQuestions:'',
        active:true,
        category:{
          cid:''
        }
      };
    },(error)=>{
      console.log(error);
      Swal.fire("Unsuccessfull","Failed")
    })
  }
}
