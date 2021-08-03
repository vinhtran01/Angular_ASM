import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product/product-inteface';
import { ProductsService } from '../service/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {
  product: Product | undefined;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductsService, private router: Router) {
    this.activatedRoute.params.subscribe(params => {
      this.productService.getDetail(params.id).subscribe(data => {
        this.product = data
      })
    })
  }

  ngOnInit(): void {
  }

  OnhandleUpdate() {
    if (this.product !== undefined) {
      this.productService.updateProduct(this.product).subscribe(data => {
        console.log('successfully, data: ', data)
        this.router.navigate(['/products'])
      })
    }
  }

}
