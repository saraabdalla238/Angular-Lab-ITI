import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.css'],
})
export class HeaderContainerComponent implements OnInit {
  ImageUrl:string='../../assets/img/twitter.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
