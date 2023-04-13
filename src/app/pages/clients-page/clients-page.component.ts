import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ClientModel } from 'src/app/models/client.model';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-clients-page',
  templateUrl: './clients-page.component.html',
  styleUrls: ['./clients-page.component.scss']
})
export class ClientsPageComponent implements OnInit {

  constructor(private clientsService: ClientsService) { }

  protected clientsList!: ClientModel[];

  @Output() clientAdded = new EventEmitter<ClientModel>();

  ngOnInit(): void {
    this.clientsService.getClients().subscribe((clients) => {
      this.clientsList = clients;
    })
  }

  addNewClient(): void {
    const newClient = {
      cnp: '',
      name: 'Toparceanu',
      firstName: 'George',
      birthDate: '10/10/1992',
      countryOfBirth: 'Romania',
      countyOfBirth: 'IASI',
      cityOfBirth: 'IASI',
      accountCurrency: 'RON'
    } as ClientModel;
    const newClientList = [newClient];
    let newList = newClientList.concat(this.clientsList);
    console.log('added client to concatenated list')
    this.clientsList = newList;
  }

}
