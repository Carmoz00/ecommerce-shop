import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../../components/product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Maglietta Angular',
      description: '100% cotone',
      price: 19.99,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Tazza Dev',
      description: 'Ceramica di alta qualità',
      price: 9.99,
      imageUrl: 'https://via.placeholder.com/150',
    },
    // …altri dummy products
  ];

  onAddToCart(product: Product) {
    console.log('Aggiunto al carrello:', product);
    // qui in seguito invocheremo il servizio carrello
  }
}
