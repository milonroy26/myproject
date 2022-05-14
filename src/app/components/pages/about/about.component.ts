import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public informations:any;

  constructor() { }

  ngOnInit(): void {
    this.informations = JSON.parse(localStorage.getItem("informations") || '')
  }

}
