import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-file',
  templateUrl: './error-file.component.html',
  styleUrls: ['./error-file.component.css']
})
export class ErrorFileComponent implements OnInit {

  errmsg:string

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.errmsg = this.activatedRoute.snapshot.data['message']
    this.activatedRoute.data.subscribe(
      (data: Data) => {
        this.errmsg  = data['message']
      }
    )
  }

}
