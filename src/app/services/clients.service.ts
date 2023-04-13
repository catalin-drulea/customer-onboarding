import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject, switchMap, tap } from "rxjs";
import { ClientModel } from "../models/client.model";
import { AuthService } from "./auth.service";

@Injectable({providedIn: 'root'})
export class ClientsService {

  public clientList!: ClientModel[];

  constructor(
    private http: HttpClient, 
    private authService: AuthService) 
    {
      this.getClients();
    }

  getClients(): Observable<ClientModel[]> {
    return this.authService.getToken().pipe(
      switchMap(value => {
        const getMockJson = this.http.get<ClientModel[]>('/assets/mock/client-mock.json', {
          headers: {'Authorization' : value.token}
        })
        return getMockJson;
      }),
      tap(value => {
        console.log(`getClients - ${this.clientList}`)
        this.clientList = value;
      })
    )
  }
}