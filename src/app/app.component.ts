import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service'; 
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'videoflix';
  isLoggedIn: boolean = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
/*     this.isLoggedIn = !!this.tokenStorageService.getToken() // ob islogged in einen inhalt hat, wird hier kontrolliert

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();

    }
    if (this.isLoggedIn === false) {
      this.router.navigate(['login'])
    } */
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}