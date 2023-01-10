import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TokenStorageService } from './token-storage.service';


const AUTH_API = 'http://localhost:8000/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isLogedIn = false;
  constructor(private http: HttpClient, private token: TokenStorageService) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login/', {
      email,
      password
    }) .pipe(
      map(response => {
        this.isLogedIn = true;
        console.log(response)
        return response;
      })
    );
}

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup/', {
      username,
      email,
      password
    }).pipe(
      map(response => {
        this.isLogedIn = false;
        console.log(response)
        return response;
      })
    );;
  }


  isLoggedIn() {
    console.log(this.token.getToken())
    return !!this.token.getToken()
  }

}