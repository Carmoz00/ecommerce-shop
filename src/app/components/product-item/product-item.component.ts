import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() addToCart = new EventEmitter<Product>();

  onAdd() {
    this.addToCart.emit(this.product);
  }

  hover = false;
}
