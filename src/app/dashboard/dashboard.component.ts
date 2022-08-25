import { Component, OnInit } from '@angular/core';
import { Source, Users } from '../services/getuser';
import { GetuserService } from '../services/getuser.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: Users[] = [];
  constructor(public usersService: GetuserService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((source: Source) => {
      this.users = source.data;
    });
  }

}
