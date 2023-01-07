import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MatDialog } from '@angular/material/dialog';
import { MovieplayerComponent } from './movieplayer/movieplayer.component';
import { MoviesService } from '../services/movies.service';
import { AuthenticationService } from '../services/authentication.service'; 

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  content?: string;
  constructor(public dialog: MatDialog, private movieService: MoviesService) { }

  ngOnInit(): void {



    this.movieService.getMovies().subscribe(
      (data) => {
        console.log(data)
      },
      (err) => {
        console.log(err)
      }
    );
  }


  startMoviePlayer() {
    this.dialog.open(MovieplayerComponent, {
      height: '98vh',
      width: '90vw'
      /* data: {
        animal: 'panda',
      } */
    });
  }
}

