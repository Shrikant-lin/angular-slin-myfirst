import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-loginform',
  templateUrl: './page-loginform.component.html',
  styleUrls: ['./page-loginform.component.css']
})
export class PageLoginformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

function(){
// Get the modal
var modal = document.getElementById('id01');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
}


}