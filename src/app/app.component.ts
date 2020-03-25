import { Component, OnInit } from '@angular/core';
// import { LoginService } from './services/login.service';
// import { MiddlewareService } from './services/middleware/middleware.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'plataforma-cib';
  public logged = false;

  constructor(
    // private loginService: LoginService
  ) {
    // this.loginService.getSessionStatus().subscribe(logged => {
    //   this.logged = logged;
    // });
  }

  ngOnInit() {
    // const token = localStorage.getItem('token');
    // this.logged = token ? true : false;
  }
}
