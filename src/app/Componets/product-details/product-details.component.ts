import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../Models/i-product';
import { ActivatedRoute, Router } from '@angular/router';
import { Products_with_apiService } from '../../Services/products_with_api.service';
import { Categories_with_apiService } from '../../Services/categories_with_api.service';
import { ICategory } from '../../Models/i-category';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct | undefined = undefined;
  categoryName: string | undefined = undefined;
  //? all products ids
  productsIDs: number[] = [];
  currentIndex: number = 0;
  constructor(
    private ProductService: Products_with_apiService,
    private CategoryService: Categories_with_apiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    // let id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.ProductService.getAllProductsData().subscribe((result) => {
      result.forEach((product) => {
        this.productsIDs.push(product.id);
      });
    });
    let id = 0;
    this.activatedRoute.paramMap.subscribe((params) => {
      id = Number(params.get('id'));
      this.ProductService.getProductByID(id).subscribe((product) => {
        this.product = product;
      });
      if (this.product != undefined) {
        this.CategoryService.getCategoryByID(
          this.product.category_id
        ).subscribe((category) => {
          this.categoryName = category.name;
        });
      }
    });
    //?
  }

  goToPrevious(id: number) {
    this.currentIndex = this.productsIDs.indexOf(id);
    this.router.navigate([
      'productDetails',
      this.productsIDs[--this.currentIndex],
    ]);
  }
  goToNext(id: number) {
    this.currentIndex = this.productsIDs.indexOf(id);
    this.router.navigate([
      'productDetails',
      this.productsIDs[++this.currentIndex],
    ]);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  updateProductData(id: number) {
    //? go to product form data
    this.router.navigate(['/editProduct', id]);
  }
  deleteProductData(id: number) {
    //? delete product from api
    this.ProductService.deleteProdutcByID(id).subscribe((result) => {
      this.router.navigate(['/home']);
      console.log('product deleted successfully', result);
    });
  }
}
