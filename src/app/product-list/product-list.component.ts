import { Component } from '@angular/core';
import { products } from 'products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;

  share() {
    alert('this product has been shared');
  }
  notifiyMe() {
    alert('You will be notified when the product goes on sale');
  }
}
