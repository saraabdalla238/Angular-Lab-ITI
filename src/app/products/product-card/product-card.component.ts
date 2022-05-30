import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Iproduct } from '../iproduct';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
@Input() product?:Iproduct ;
@Output()productSelected:EventEmitter<Iproduct>=new EventEmitter<Iproduct>();
constructor() { }

  ngOnInit(): void {
  }
  titleClecked(){
    this.productSelected?.emit(this.product);
  }

}
