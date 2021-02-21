import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  }
  onLoadServers() {


    // this.route.navigate(['servers'])


    // ====>>>>> 
    //  this.route.navigate(['servers'])  and this.route.navigate(['/servers']) these two weill reflect same behaviour 
    //  because navigate() method does'nt know that where is absolute path is ? and hence both i.e. servers and /servers
    //  won't give any error.
    //  BUT ,



    this.route.navigate(['servers'] )






  }
}
