import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FiltersComponent } from './filters/filters.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { CartComponent } from './cart/cart.component';
import { ProductThumbnailComponent } from './product-thumbnail/product-thumbnail.component';
import { SortFiltersComponent } from './sort-filters/sort-filters.component';

import { DataService } from './data.service';
import { CartService } from './cart.service';
import { UrlFormComponent } from './url-form/url-form.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { PayuComponent } from './payu/payu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './chart/chart.component';
import { GoogleChartsModule } from 'angular-google-charts';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    FiltersComponent,
    ShowcaseComponent,
    CartComponent,
    ProductThumbnailComponent,
    SortFiltersComponent,
    UrlFormComponent,
    PayuComponent,
    DashboardComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    SlickCarouselModule,
    GoogleChartsModule,
    RouterModule.forRoot([
      { path: '', component: DashboardComponent },
      { path: 'payu', component: PayuComponent },
      { path: 'chart', component: ChartComponent },
    ])
  ],
  providers: [
    DataService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
