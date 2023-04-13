import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TokenModel } from "../models/token.model";

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  getToken(): Observable<TokenModel> {
    return this.http.get<TokenModel>('/assets/mock/token.json');
  }
}