import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../shared/product.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {

  @Input() products: Product[];
  slideConfig = {'slidesToShow': 1, 'slidesToScroll': 1};

  constructor(private cartService: CartService) {

  }

  ngOnInit() {
  }
}
