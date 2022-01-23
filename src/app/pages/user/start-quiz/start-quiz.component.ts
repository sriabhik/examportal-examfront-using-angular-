import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit {
  
  qid:any

  constructor(
    private locationStrategy:LocationStrategy,
    // activatedRoute is used to recieved data
    private _route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.preventBackButton();
  }
  preventBackButton() {
    history.pushState(null,  location.href);
    this.locationStrategy.onPopState(() => {
      history.pushState(null, location.href);
    })
  }

}
