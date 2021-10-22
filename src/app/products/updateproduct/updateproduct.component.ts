import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductapiService } from 'src/app/service/productapi.service';
import * as myjson from "src/assets/data/imgmap.json";
@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
  @Input() productId :string;
  // public updateProduct : any;
  public updateForm : FormGroup;
  public image : any;
  constructor(private router : Router, private formBuilder: FormBuilder,private productapiService : ProductapiService ) {
    this.updateForm = this.formBuilder.group({
      productid:["",[Validators.required]],
      name: ["",[Validators.required]],
      price:["",[Validators.required]],
      description:["",Validators.required],
      category:["",Validators.required],
      image:["",Validators.required],
      seller:["",Validators.required]
  });
   }

  ngOnInit(): void {
    console.log(myjson);
    this.image = myjson;
    // this.productapiService.getProduct(parseInt(this.productId)).subscribe((res) => {
    //   console.log(res);
    //   this.updateProduct = res;
    // },
    // (error) => {
    //   console.log(error);
    // });
  }

  onSubmit(form : any){
    if(form.valid){
      console.log(form.value.image);
      this.productapiService.addProduct({"id": form.value.productid,"name" : form.value.name , "price" : parseFloat(form.value.price) , "description" : form.value.description , "category" : form.value.category , "imagePath" : form.value.image, "seller" : form.value.seller}).subscribe((res) => {
        console.log(res);
        window.location.reload();
      },
      (error) => {
        console.log(error);
      });
    }
  }

}
