import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product-inteface';
import { ProductsService } from '../service/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  product: Product = {
    id: Math.floor(Math.random()),
    name: '',
    description: '',
    status: true,
    img: '',
    price: 0
  }
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }

  onHandleAdd() {
    this.productsService.addProduct(this.product).subscribe(data => console.log(data))
    // console.log(this.product)
  }


}
