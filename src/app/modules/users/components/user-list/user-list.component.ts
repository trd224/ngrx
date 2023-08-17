import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users!: any[];

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.usersService.getUserList().subscribe((res:any[]) => {
      this.users = res;
      //console.log(this.users);
    })
  }

  

}
