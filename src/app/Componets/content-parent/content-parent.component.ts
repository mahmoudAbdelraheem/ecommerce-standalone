import { Component } from '@angular/core';
import { ProductsListComponent } from '../products-list/products-list.component';
import { FormsModule } from '@angular/forms';
import { ICart } from '../../Models/i-cart';
import { IProduct } from '../../Models/i-product';
import { CardPipePipe } from '../../Pipes/card-pipe.pipe';
import { RouterModule } from '@angular/router';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-content-parent',
  standalone: true,
  imports: [ProductsListComponent, FormsModule, CardPipePipe, RouterModule],
  templateUrl: './content-parent.component.html',
  styleUrl: './content-parent.component.scss',
})
export class ContentParentComponent {
  searchValue: number = 0;
  categoryName: string = 'select category';
  cart: ICart[] = [];
  cartTotalPrice: number = 0;
  isExits: Boolean = false;

  isUserLogin: boolean = false;

  constructor(private loginService: LoginService) {}
  logout() {
    this.loginService.logout();
    // this.isUserLogin = this.loginService.isLoggedIn;
    this.loginService.userLoginObservable.subscribe({
      next: (isLogin) => {
        console.log(isLogin);
        this.isUserLogin = isLogin;
      },
    });
  }
  addProductToCartFunc(product: IProduct) {
    this.isExits = false;
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].id == product.id) {
        this.cart[i].productQuantity++;
        this.cartTotalPrice += product.price;
        this.cart[i].productTotalPrice += product.price;
        this.isExits = true;
        return;
      }
    }
    if (!this.isExits) {
      this.cart.push({
        id: product.id,
        productName: product.name,
        productPrice: product.price,
        productQuantity: 1,
        productTotalPrice: product.price,
      });
      this.cartTotalPrice += product.price;
    }
  }

  removeProductFromCart(item: ICart) {
    this.cartTotalPrice -= item.productTotalPrice;
    this.cart = this.cart.filter((element) => element.id != item.id);
  }

  cardNumber: string = '0000-0000-0000-0000';
  set setCardNumber(value: string) {
    if (value.length == 16) {
      this.cardNumber = value;
    } else {
      this.cardNumber = '0000-0000-0000-0000';
    }
  }
}
