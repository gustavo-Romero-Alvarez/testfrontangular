import { Component,OnInit } from '@angular/core';
import { MedicoService } from './../app/_service/medico.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'testfrontangular';
  constructor(
    private medicoservice: MedicoService
    
  ) { }
  ngOnInit(): void {
     console.log("sin error")
     this.getmedico();
  }

  getmedico(){
    this.medicoservice.listar().subscribe(data => {
      console.log(data);   
    });
  }
}
