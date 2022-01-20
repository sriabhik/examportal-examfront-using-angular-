import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {

  categories=[
  {
    cid:23,
    title:'programming',
    description:'testing'
  },
  {
    cid:23,
    title:'programming',
    description:'testing'
  },
  {
    cid:23,
    title:'programming',
    description:'testing'
  }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
