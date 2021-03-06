import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private _http:HttpClient) { }

  public getQuestionOfQuiz(qId:any){
      return this._http.get(`${baseUrl}/question/quiz/all/${qId}`)
  }

  //adding question
  public addQuestion(question:any){
    return this._http.post(`${baseUrl}/question/`,question)
  }

  //question
  public deleteQuestion(questionId:any){
    return this._http.delete(`${baseUrl}/question/${questionId}`)
  }
  //get all quiz
  public getQuestionOfQuizForTest(qId:any){
    return this._http.get(`${baseUrl}/question/quiz/${qId}`)
}  
}
