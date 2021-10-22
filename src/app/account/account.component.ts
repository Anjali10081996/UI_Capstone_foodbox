import { Component, OnInit } from '@angular/core';
import { UserapiService } from '../service/userapi.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  public user : any;
  constructor(private userapiService : UserapiService) { }

  ngOnInit(): void {
    let username = sessionStorage.getItem("username");
    this.userapiService.getUsers().subscribe((res) => {
    const array = Object.values(res)[0];
    for(let a in array){
      if(username == array[a]["username"]){
        this.user = {"name" : array[a]["username"], "walletBalance" : array[a]["walletBalance"]};
      }
    }
    
    },
    (error)=>{
      console.log(error);
    });
  }

}
