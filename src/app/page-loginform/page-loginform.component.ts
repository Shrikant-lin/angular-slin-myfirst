import { Component, OnInit } from '@angular/core';
import { PageCommonService } from '../page-common.service';

@Component({
  selector: 'app-page-loginform',
  templateUrl: './page-loginform.component.html',
  styleUrls: ['./page-loginform.component.css']
})
export class PageLoginformComponent implements OnInit {
  message :string;

  constructor(private servicecall : PageCommonService) { }

  ngOnInit() {
  }

  Onloginbtnclick(){
      window.alert("Onloginbtnclick raised...");
      this.message = this.servicecall.getlogindata();
      window.alert(this.message);

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