import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestApiService } from 'app/services/rest-api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders = []
  selectedproduct
  baseUrl = environment.baseUrl;
  constructor(private restApiService: RestApiService, private modalService: NgbModal, public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.getorders()
  }
  getorders() {
    this.restApiService.getOrders().then(res => {
      if (res && res.code === 200) {
        this.orders = res.data
        console.log('this.orders : ', this.orders);
      }
    }).catch(err => {
      console.log('error is', err);
    })
  }
  openPopup(content, item?) {
    console.log('item: ', item);
    if (item) {
      this.selectedproduct = item.products
    }
    this.modalService.open(content);
  }
}
