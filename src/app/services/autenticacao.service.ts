import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LoginCommand } from './../commands/login.command';
import 'rxjs/add/operator/map'
import { RequestOptions } from '@angular/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AutenticacaoService {
  
  private baseUrl: string = 'http://localhost:10428/v1/'
  constructor(private http: HttpClient) {

  }

  public autenticar(loginCommand: LoginCommand): Observable<string> {      
    return this.http.post<string>(`${this.baseUrl}autenticar`, loginCommand);
  }

}
