import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ProfildialogComponent } from '../profildialog/profildialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private tokenStorageService: TokenStorageService, public router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(ProfildialogComponent, {
      width: '500px',
      height: '220px',
      
    });
  }

  logout(): void {

    this.tokenStorageService.signOut();
    this.router.navigate(['login']);
  }
}
