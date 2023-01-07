import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private tokenStorageService: TokenStorageService, public router: Router) { }

  ngOnInit(): void {
  }
  logout(): void {
    
    this.tokenStorageService.signOut();
    this.router.navigate(['login']);
  }
}
