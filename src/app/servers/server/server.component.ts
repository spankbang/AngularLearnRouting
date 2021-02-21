import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(
    private serversService: ServersService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.server = this.serversService.getServer(1);
  }
  onLoadServers() {
    this.route.navigate(['/servers'], { relativeTo: this.activatedRoute })

    
    // this.route.navigate(['servers'], { relativeTo: this.activatedRoute })
    // NOW There is the difference between  "servers" and "/servers" as we have added the { relativeTo: this.activatedRoute }
  }

}
