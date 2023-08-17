import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient,
  ) { }

  getUserList(){
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUser(id:number){
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users/' + id);
  }
}
