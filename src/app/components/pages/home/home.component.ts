import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public userName = "";
  public userEmail = "";
  public userPassword = "";
  public informations: {name:string, email:string, password:any}[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }
  addData(){
    const userData = {
      name: this.userName,
      email: this.userEmail,
      password: this.userPassword
    }
    this.informations.push(userData);
    const oldData = JSON.parse(localStorage.getItem("informations") || '');
    
    for(let item of oldData){
      this.informations.push(item);
    }
    const strData = JSON.stringify(this.informations)
    localStorage.setItem('informations', strData);
  }

}
