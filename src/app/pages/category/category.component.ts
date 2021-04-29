import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestApiService } from 'app/services/rest-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories = [];
  closeResult: string;
  categoryName: string;
  selectedCategory;
  constructor(private restApiService: RestApiService, private modalService: NgbModal, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.getCategory()
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
  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onSave(modal) {
    const obj = {
      name: this.categoryName
    }
    this.restApiService.addCateogry(obj).then(res => {
      if (res && res.code === 200) {
        modal.close();
        this.getCategory()
      }
    }).catch(err => {
      console.log('error is', err);
    })
    this.categoryName = ''
  }
  onEdit(modal, category) {
    this.selectedCategory = JSON.parse(JSON.stringify(category));
    const activeModal = this.modalService.open(modal);
  }
  onDelete(category) {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.restApiService.deleteCategory(category._id).then(res => {
          if (res && res.code === 200) {
            Swal.fire(
              'Deleted!',
              'Category has been deleted.',
              'success'
            )
            this.getCategory()
          }
        }).catch(err => {
          console.log('error is', err);
        })

      }
    })
  }
  onEditSave(modal) {
    const obj = {
      name: this.selectedCategory.name
    }
    this.restApiService.editCateogry(this.selectedCategory._id, obj).then(res => {
      if (res && res.code === 200) {
        modal.close()
        this.getCategory()
      }
    }).catch(err => {
      console.log('error is', err);
    })
  }
}
