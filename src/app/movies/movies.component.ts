import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MatDialog } from '@angular/material/dialog';
import { MovieplayerComponent } from './movieplayer/movieplayer.component';
import { MoviesService } from '../services/movies.service';
import { AuthenticationService } from '../services/authentication.service';
import { VgApiService } from '@videogular/ngx-videogular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth.guard';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  content?: string;
  preload: string = 'auto';
  isLoggedIn: boolean = false;
  constructor(public dialog: MatDialog, private movieService: MoviesService, private router: Router, private vgapi: VgApiService, private token: TokenStorageService, private authGuard: AuthGuard, private authServ: AuthenticationService) { }

  ngOnInit(): void {
   
    this.movieService.getAllMovies().subscribe((x) => console.log(x))



  }
  onPlayerReady(api: VgApiService) {
    this.vgapi = api;
    this.vgapi.getDefaultMedia().subscriptions.loadedMetadata.subscribe(
      this.playVideo.bind(this)
    );
  }

  playVideo() {
    this.vgapi.play();
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

