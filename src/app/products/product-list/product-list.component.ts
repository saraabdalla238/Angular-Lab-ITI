import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../iproduct';
import { ProductsServeService } from '../products-serve.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  allProducts?: Iproduct[];
  slectedProduct?:Iproduct;

  constructor(private productServe:ProductsServeService) { }

  ngOnInit(): void {
    this.allProducts = this.productServe.getAllProducts() 
  }
  prod(e:any){
    this.slectedProduct=e;
  }
}
