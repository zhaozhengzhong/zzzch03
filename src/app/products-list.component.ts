import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Product } from './product';
// import { Variable } from '@angular/compiler/src/render3/r3_ast';
// import { ProductRowComponent } from './product-row.component';
var x = 0;
@Component({
    selector: 'products-list',
    templateUrl: 'products-list.component.html',
    styleUrls: ['products-list.component.css'],
    inputs: ['productsList']
})
export class ProductListComponent {
    productsList: Product[];
    @Output() productSelected: EventEmitter<Product>;
    currentProduct: Product = null;
    constructor() {
        this.productSelected = new EventEmitter();
        // console.log('In product list!');
    }
    // ngOnInit(): void {
    //     console.log(this.productsList);
    //     console.log(x++);
    // }
    onpcl(product: Product) {
        this.currentProduct = product;
        console.log(product.name);
        this.productSelected.emit(product);
    }
    isSle(product: Product) {
        if (this.currentProduct == null || product == null) {
            return false;
        }
        return product.sku == this.currentProduct.sku;
    }
}