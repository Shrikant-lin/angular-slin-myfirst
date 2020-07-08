import { Component, OnInit,Input } from '@angular/core';
import {Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.css']
})
export class HelloworldComponent implements OnInit {
  isDisabled: boolean = false;
  @Input() iamchild :string;
  @Output() OnClickChildToParent =  new EventEmitter();

  constructor() { }

  ngOnInit() {     
      
  }

}