import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthSerive } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private route: Router,
    private authService:AuthSerive
  ) { }

  ngOnInit() {
  }
  onLoadServer(id:number) {
    this.route.navigate(
      ['servers', 5, 'edit'],
      {
        queryParams: { allowEdit: '1' },
        fragment:'loading'
      }
    )
  }
  onLogin() {
    this.authService.login()
  }
  onLogout() {
    this.authService.logout()

  }
}
