import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8000/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'video/mp4' })
};
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) { }


  //getmovies
  getAllMovies(): Observable<any> {
    return this.http.get(API_URL + 'movieAPI/', httpOptions);
  }
  /*  getMovies(): Observable<any> {
     return this.http.get(API_URL + 'ocean', { responseType: 'video/mp4' });
   } */
  getMovies(): Observable<any> {
    return this.http.get(API_URL + 'movieST/ocean/', httpOptions);
    /* title in als parameter übergeben und in value der methode */
  }
  /*   getUserBoard(): Observable<any> {
      return this.http.get(API_URL + 'user', { responseType: 'text' });
    }
  
    getModeratorBoard(): Observable<any> {
      return this.http.get(API_URL + 'mod', { responseType: 'text' });
    }
  
    getAdminBoard(): Observable<any> {
      return this.http.get(API_URL + 'admin', { responseType: 'text' });
    } */
}