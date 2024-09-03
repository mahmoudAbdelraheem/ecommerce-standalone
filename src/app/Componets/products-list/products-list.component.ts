import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProduct } from '../../Models/i-product';
import { CommonModule } from '@angular/common';
import { ImgShadowDirective } from '../../Directives/img-shadow.directive';
import { Router } from '@angular/router';
import { Products_with_apiService } from '../../Services/products_with_api.service';
import { ICategory } from '../../Models/i-category';
import { Categories_with_apiService } from '../../Services/categories_with_api.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [FormsModule, CommonModule, ImgShadowDirective],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent implements OnInit {
  clientName: string;
  searchedProducts: IProduct[] = [];
  categoryList: ICategory[] = [];
  constructor(
    private productService: Products_with_apiService,
    private categoryService: Categories_with_apiService,
    private router: Router
  ) {
    this.clientName = 'Mahmoud';
  }

  ngOnInit(): void {
    this.productService.getAllProductsData().subscribe({
      next: (productsList) => {
        this.searchedProducts = productsList;
      },
    });

    this.categoryService.getAllCategories().subscribe({
      next: (categoryList) => {
        this.categoryList = categoryList;
      }
    })
  }

  showThanks: boolean = false;
  currentData = new Date();
  // addToCart(product:IProduct) {
  //   console.log(product.quantity);
  //   if(product.quantity>0){
  //     product.quantity=product.quantity-1;
  //   }
  //   this.currentData = new Date();
  //   this.showThanks=!this.showThanks;
  // }

  searchByCategory(category: number):void {
    
    if(category == 0){
      this.productService.getAllProductsData().subscribe((result) => {
        this.searchedProducts = result;
      });
    }else {
      this.productService.getProductsByCategoryID(category).subscribe((result) => {
        this.searchedProducts = result;
      });
    }
 
}
  set findByCategory(value: number) {
    console.log(value);
    this.searchByCategory(value);
  }

  @Input() set setPrice(value: number) {
   this.searchByPrice(value);
  }
  searchByPrice(price: number):void {
    console.log(price);
    if(price == 0 || price == null){
      this.productService.getAllProductsData().subscribe((result) => {
        this.searchedProducts = result;
      });
    }else{
      this.productService.getAllProductsData().subscribe((result) => {
        this.searchedProducts = result.filter(product => product.price <= price);
      });

    }
  }

  @Output() addProductTocartEvent = new EventEmitter<IProduct>();

  addToCart(product: IProduct) {
    this.addProductTocartEvent.emit(product);
  }

  goToProductDetails(id: number) {
    this.router.navigate(['productDetails', id]);
  }
}
