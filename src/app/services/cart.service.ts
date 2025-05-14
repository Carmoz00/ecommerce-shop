import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  private itemsSubject = new BehaviorSubject<Product[]>([]);
  /** esponi solo l’observable pubblico */
  readonly items$: Observable<Product[]> = this.itemsSubject.asObservable();

  /** aggiunge un prodotto */
  add(product: Product): void {
    this.itemsSubject.next([...this.itemsSubject.value, product]);
  }

  /** pulisce il carrello */
  clear(): void {
    this.itemsSubject.next([]);
  }
}
