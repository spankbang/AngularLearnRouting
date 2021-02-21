import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };
  id_ = 0

  constructor(
    private serversService: ServersService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    
    this.server = this.serversService.getServer(this.id_-1);
    console.log("fuck this shit" + this.server)
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(params['id']-1);
      }
    )
  }
  onLoadServers() {
    this.route.navigate(['/servers'], { relativeTo: this.activatedRoute })

    
    // this.route.navigate(['servers'], { relativeTo: this.activatedRoute })
    // NOW There is the difference between  "servers" and "/servers" as we have added the { relativeTo: this.activatedRoute }
  }

}
