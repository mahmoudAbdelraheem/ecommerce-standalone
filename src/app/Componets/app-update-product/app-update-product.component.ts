import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Categories_with_apiService } from '../../Services/categories_with_api.service';
import { ICategory } from '../../Models/i-category';
import { Products_with_apiService } from '../../Services/products_with_api.service';
import { IProduct } from '../../Models/i-product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-app-update-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app-update-product.component.html',
  styleUrl: './app-update-product.component.scss',
})
export class AppUpdateProductComponent implements OnInit {
  selectedCategoryID: string = '0';
  selectedImage: string = '';
  categoryList: ICategory[] = [];
  imagesList: string[] = [];
  productID: string|null = null;
  product: IProduct = {} as IProduct;
  constructor(
    private categoryService: Categories_with_apiService,
    private prodductService: Products_with_apiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.productID = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.productID!=null && this.productID!='-1'){
      this.prodductService.getProductByID(Number(this.productID)).subscribe({
        next: (product) => {
          if(product!=null ){
            this.product = product;
          }
        },
      })
    }
    console.log(this.productID , this.product);
      this.prodductService.getAllProductsData()
      .subscribe((result) => {
        this.imagesList = result.map((p) => p.image);
      });
    this.categoryService.getAllCategories().subscribe({
      next: (categoryList) => {
        this.categoryList = categoryList;
      },
    });
  }

  saveProductData() {
    if(this.productID!=null && this.productID!='-1'){
      this.prodductService.updateProduct(this.product).subscribe({
        next: (result) => {
          console.log(result);
          this.router.navigate(['/home']);
        }
      });
    }else {
      console.log('add new product');
      this.prodductService.addNewProduct(this.product).subscribe({
        next: (result) => {
          console.log(result);
          this.router.navigate(['/home']);
        }
      })
    }
  }
}
