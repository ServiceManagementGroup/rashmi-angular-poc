import { Component } from '@angular/core';
import { trigger,state,style,transition,animate } from '@angular/animations';
import { ProductService } from './productservice';
import { Product } from './product';

@Component({
  selector: 'app-attribute-view',
  templateUrl: './attribute-view.component.html',
  styleUrls: ['./attribute-view.component.css'],
  animations: [
    trigger('rowExpansionTrigger', [
        state('void', style({
            transform: 'translateX(-10%)',
            opacity: 0
        })),
        state('active', style({
            transform: 'translateX(0)',
            opacity: 1
        })),
        transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
]
})
export class AttributeViewComponent {

  displayEdit!: boolean;
  products: Product[] = [];

  
constructor(private productService: ProductService) { }
  
  showEditDialog() {
  this.displayEdit = true;
}
ngOnInit() {
    //this.productService.getProductsSmall().then(data => this.products = data);
    this.productService.getProductsWithOrdersSmall().then(data => this.products = data);
}
}
