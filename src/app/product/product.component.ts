import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsService } from '../service/product.service';
import { Product } from './product-inteface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Output() productEvent = new EventEmitter<Product>()
  products: Product[] | undefined;

  selectedProduct: Product | undefined;


  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(data => this.products = data)
  }


  handleRemove(id: number): void {
    this.productsService.removeProduct(id).subscribe(data => {
      this.products = this.products?.filter(item => item.id != data.id)
    })
  }



}
