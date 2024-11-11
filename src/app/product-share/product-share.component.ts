import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-share',
  templateUrl: './product-share.component.html',
})
export class ProductShareComponent {
  share() {
    alert('this product has been shared');
  }
}
