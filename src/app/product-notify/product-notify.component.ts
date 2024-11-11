import { Component, Input } from '@angular/core';
import { Product } from 'products';

@Component({
  selector: 'app-product-notify',
  templateUrl: './product-notify.component.html',
})
export class ProductNotifyComponent {
  @Input() product!: Product;

  notifiyMe() {
    alert('You will be notified when the product goes on sale');
  }
}
