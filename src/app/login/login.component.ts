import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(private router: Router) { }

  login(uname: string, pass: string) {
    sessionStorage.setItem('username', uname);
    sessionStorage.setItem('password', pass);
    this.router.navigateByUrl('/dashboard').then(() => {
      window.location.reload();
    });
  }
  ngOnInit(): void {
  }

}
