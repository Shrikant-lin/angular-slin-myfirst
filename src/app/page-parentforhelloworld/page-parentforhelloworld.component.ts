import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-parentforhelloworld',
  templateUrl: './page-parentforhelloworld.component.html',
  styleUrls: ['./page-parentforhelloworld.component.css']
})
export class PageParentforhelloworldComponent implements OnInit {
namefromparent = 'Angular';
  constructor() { }

  ngOnInit() {
  }

  ParentEventRaised() 
  {
     window.alert("Parent method raised from Child Event..");
  }

}