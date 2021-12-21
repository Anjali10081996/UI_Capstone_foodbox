import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderapiService {

  private url:string = "http://65.1.107.222:8083/api/v1/order";
  constructor(private httpClient : HttpClient) { }
  
  public getOrders(){
    return this.httpClient.get(this.url+"/getorders");
  }

  public getOrder(id : number){
    return this.httpClient.get(`${this.url}/getorder/${id}`);
  }

  public addOrder(order : any){
    return this.httpClient.post(this.url+"/addorder", order);
  }

  public updateOrder(order : any, id : number){
    return this.httpClient.put(`${this.url}/updateorder/${id}`,order);
  }

  public deleteOrder(id : number){
    return this.httpClient.delete(`${this.url}/deleteorder/${id}`);
  }
}
