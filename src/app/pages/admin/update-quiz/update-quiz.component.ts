import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {
  qId = 0
  quiz:any;
  categories=[
    {
      cid:'',
      title:''
    },
  ]
  // ActivatedRoute Use to fetch Dynamic data
  constructor(  private _route:ActivatedRoute,
                private _quiz:QuizService,
                private _category:CategoryService,
                private _router:Router) { }

  ngOnInit(): void {
    this.qId =  this._route.snapshot.params['qid'];
    this._quiz.getQuiz(this.qId).subscribe((data:any)=>{
      this.quiz = data;
      console.log(data);
      
    },(error)=>{
      Swal.fire("Error","Something Went Wrong","error")
    })

    //loading categories
    this._category.categories().subscribe((data:any)=>{
      this.categories = data;
    },(error)=>{
      console.log(error);
      Swal.fire("Error!","Something Went Wrong")
      
    })
  }
  formSubmit(){
    if(this.quiz.title.trim() == ''|| this.quiz.title ==null){
      Swal.fire("Missing","Title Required")
      return;
      
    }
    else if(this.quiz.description.trim() == ''|| this.quiz.description==null){
      Swal.fire("Missing","Description Required")
      return;
    }
    this._quiz.updateQuiz(this.quiz).subscribe((success)=>{
      console.log("Success");
      Swal.fire("Successfull","Quiz Updated Successfully ","success").then((e)=>{
        this._router.navigate(['/admin/quizzes'])
      })
      this.quiz=
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
      Swal.fire("Unsuccessfull","Failed","error")
    })
  }
}
