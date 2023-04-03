import { Component, OnInit } from '@angular/core';
import { ClientModel } from 'src/app/models/client.model';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {

  protected clientsList: ClientModel[] = [];
  displayedColumns: string[] = [
    'cnp',
    'name',
    'firstName',
    'birthDate',
    'countryOfBirth',
    'countyOfBirth',
    'cityOfBirth',
    'accountCurrency'
    ];

  constructor(
    private clientsService: ClientsService
  ) { }

  ngOnInit(): void {
    this.clientsService.getClients().subscribe((clients) => {
      this.clientsList = clients;
    })
  }

}
