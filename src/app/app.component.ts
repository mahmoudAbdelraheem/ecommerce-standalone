import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsListComponent } from "./Componets/products-list/products-list.component";
import { FooterComponent } from "./Componets/footer/footer.component";
import { HeaderComponent } from "./Componets/header/header.component";
import { ContentParentComponent } from "./Componets/content-parent/content-parent.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductsListComponent, FooterComponent, HeaderComponent, ContentParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecommerce-standalone';
}
