import { Component, OnInit,Input } from '@angular/core';
import { Iproduct } from '../iproduct';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
@Input() product?:Iproduct ;
  constructor() { }

  ngOnInit(): void {
  }

}
