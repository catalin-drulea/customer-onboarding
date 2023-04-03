import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ClientModel } from "../models/client.model";

@Injectable({providedIn: 'root'})
export class ClientsService {

  constructor(private http: HttpClient) {}

  getClients(): Observable<ClientModel[]> {
    return this.http.get<ClientModel[]>('/assets/mock/client-mock.json');
    return of([]);
  }
}