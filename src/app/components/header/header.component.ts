import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public pageTitle = 'Client Onboarding';

  protected clientCount!: number;

  constructor(private clientsService: ClientsService) { }

  ngOnInit(): void {
    console.log(`clientService: ${this.clientsService.clientList}`)
    this.clientCount = this.clientsService.clientList.length;
  }
}
