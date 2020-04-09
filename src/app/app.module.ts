import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductDepartmentComponent } from './product-department.component';
import { ProductImageComponent } from './product-image.component';
import { ProductListComponent } from './products-list.component';
import { ProductPriceComponent } from './product-price.component';
import { ProductRowComponent } from './product-row.component';

// import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDepartmentComponent,
    ProductImageComponent,
    ProductListComponent,
    ProductPriceComponent,
    ProductRowComponent
    // ArticleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
