import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductapiService } from '../service/productapi.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public pId : string = "";
  public products : any;
  public searchForm : FormGroup;
  public searchText :string;
  constructor(private router : Router, private productapiService : ProductapiService, private formBuilder: FormBuilder) { 
    this.searchForm = this.formBuilder.group({
      search : [""]
    });
    this.searchText = "";
  }
 
  ngOnInit(): void {
      this.productapiService.getProducts(this.searchText).subscribe((res) => {  
        this.products = res;
        console.log("Yesss");
        console.log(this.products);
      },
      (error) => {
        console.log(error);
        console.log("Yesss");
      }
    );
  }
  addClick(){
    this.router.navigate(["/products/create"]);
  }

  deleteClick(id : string){
    console.log(id);
    this.productapiService.deleteProduct(parseInt(id)).subscribe((res) => {
      console.log(res);
      window.location.reload();
    },
    (error) => {
      console.log(error);
    });
  }

  updateClick(id : string){
    this.pId = id;
  }

  onSubmit(form : any){
    if(form.valid){
      this.searchText= form.value.search;
        this.productapiService.getProducts(this.searchText).subscribe((res) => {  
          this.products = res;
          console.log("Yesss");
          console.log(this.products);
        },
        (error) => {
          console.log(error);
          console.log("Yesss");
        }
      );
    }
  }

}
