import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MoviesComponent } from '../movies.component';

@Component({
  selector: 'app-movieplayer',
  templateUrl: './movieplayer.component.html',
  styleUrls: ['./movieplayer.component.scss']
})
export class MovieplayerComponent implements OnInit {
  title:string;
 
  constructor(public dialogRef: MatDialogRef<MovieplayerComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }
  
  ngOnInit() {
    console.log(this.data)
  }
  /*  https://blog.openreplay.com/playing-videos-in-angular-with-ngx-videogular/ */
}
