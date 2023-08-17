import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userId!: number;
  user: any;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) { 
    this.userId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.usersService.getUser(this.userId).subscribe(res => {
      console.log(res);
      this.user = res;
    })
  }

}
