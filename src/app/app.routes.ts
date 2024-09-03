import { Routes } from '@angular/router';
import { AboutUsComponent } from './Componets/about-us/about-us.component';
import { ContactUsComponent } from './Componets/contact-us/contact-us.component';
import { NotFoundComponent } from './Componets/not-found/not-found.component';
import { ContentParentComponent } from './Componets/content-parent/content-parent.component';
import { ProductDetailsComponent } from './Componets/product-details/product-details.component';
import { AppUpdateProductComponent } from './Componets/app-update-product/app-update-product.component';
import { LoginFormComponent } from './Componets/login-form/login-form.component';
import { loginGuard } from './Gaurds/login.guard';

export const routes: Routes = [
  //? initial route
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  //? dynamic routes
  {
    path: 'home',
    component: ContentParentComponent,
    title: 'home',
    canActivate: [loginGuard],
  },
  {
    path: 'about',
    component: AboutUsComponent,
    title: 'about us',
    canActivate: [loginGuard],
  },
  { path: 'contact', component: ContactUsComponent, title: 'contact us' },
  {
    path: 'productDetails/:id',
    component: ProductDetailsComponent,
    title: 'product details',
    canActivate: [loginGuard],
  },
  {
    path: 'addProduct',
    component: AppUpdateProductComponent,
    title: 'Add new product',
    canActivate: [loginGuard],
  },
  { path: 'loginForm', component: LoginFormComponent, title: 'Login' },
  {
    path: 'editProduct/:id',
    component: AppUpdateProductComponent,
    title: 'Add new product',
  },
  //? not found route
  { path: '**', component: NotFoundComponent, title: 'not found' },
];
