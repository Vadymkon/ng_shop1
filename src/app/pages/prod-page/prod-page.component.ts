import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-prod-page',
  templateUrl: './prod-page.component.html',
  styleUrls: ['./prod-page.component.scss']
})
export class ProdPageComponent implements OnInit{

  title = 'ng_shop_1';
  // products: IProduct[] = [];
  loading = false;
//  products$: Observable<IProduct[]>;
  term = '';

  constructor(public productsService : ProductsService, public modalService:ModalService) {}

  ngOnInit(): void {
    this.loading = true;
    //  this.products$ = this.productsService.getAll().pipe(tap(()=>this.loading=false));
    this.productsService.getAll().subscribe(
      (products) => {
        // this.products = products;
        this.loading = false;
      }
    );
  }

//  protected readonly filter = filter;
}
