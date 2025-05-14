import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../../components/product-item/product-item.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products$!: Observable<Product[]>; // Usato "$" per convenzione Observable

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products$ = this.productService.getAll(); // Recupero dati da servizio
  }

  onAddToCart(product: Product) {
    console.log('Aggiunto al carrello:', product);
  }
}
