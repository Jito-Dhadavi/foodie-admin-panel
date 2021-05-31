import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestApiService } from 'app/services/rest-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products = [];
  baseUrl = 'http://localhost:5000/';
  closeResult: string;
  categories = [];
  product = {
    categoryId: '',
    image: null,
    title: ''
  }
  selectedproduct;
  constructor(private restApiService: RestApiService, private modalService: NgbModal, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.getCategory();
    this.getproducts()
  }
  getCategory() {
    this.restApiService.getCategory().then(res => {
      if (res && res.code === 200) {
        this.categories = res.data
      }
    }).catch(err => {
      console.log('error is', err);
    })
  }
  getproducts() {
    this.restApiService.getProducts().then(res => {
      if (res && res.code === 200) {
        this.products = res.data
      }
    }).catch(err => {
      console.log('error is', err);
    })
  }
  openPopup(content, item?) {
    if (item) {
      const obj = {
        categoryId: item.categoryId._id,
        name: item.name,
        price: item.price,
        _id: item._id
      }
      this.selectedproduct = obj
    }
    this.modalService.open(content);
  }
  browse(event) {
    this.product.image = event.target.files[0];
  }
  onSave(modal) {
    this.restApiService.addProduct(this.product).then(res => {
      if (res && res.code === 200) {
        modal.close();
        this.getproducts()
      }
    }).catch(err => {
      console.log('error is', err);
    })
  }
  onDelete(product) {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.restApiService.deleteProduct(product._id).then(res => {
          if (res && res.code === 200) {
            Swal.fire(
              'Deleted!',
              'product has been deleted.',
              'success'
            )
            this.getproducts()
          }
        }).catch(err => {
          console.log('error is', err);
        })

      }
    })
  }
  onEditSave(modal) {
    let obj: any;
    obj = {
      categoryId: this.selectedproduct.categoryId,
      name: this.selectedproduct.name,
      price: this.selectedproduct.price,
    }
    if (this.product.image) {
      obj.image = this.product.image;
    }
    this.restApiService.editProduct(this.selectedproduct._id, obj).then(res => {
      if (res && res.code === 200) {
        modal.close()
        this.getproducts()
      }
    }).catch(err => {
      console.log('error is', err);
    })
  }

}
