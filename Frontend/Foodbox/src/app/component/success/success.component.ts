import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {
  public grandTotal !: number;
  public name : string = '';

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.name = localStorage.getItem('name')!;
    this.cartService.getfooditems()
    .subscribe(res=>{
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }

  emptycart(){
    this.cartService.removeAllCart();
  }


}
