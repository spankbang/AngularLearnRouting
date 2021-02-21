import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router) { }

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
}
