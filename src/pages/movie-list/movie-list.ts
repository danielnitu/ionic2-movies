import { Component, OnInit, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Movie } from './movie';
import { MovieService } from './movie.service';
import { MovieDetailPage } from '../movie-detail/movie-detail'; 

@IonicPage()
@Component({
  selector: 'page-movie-list',
  templateUrl: 'movie-list.html',
  providers: [ MovieService ],
  inputs: ['listType']
})
export class MovieListPage implements OnInit {
  errorMessage: string;
  movies: Movie[];
  mode = 'Observable';

  constructor(private movieService: MovieService, public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.getMovies('popular'); 
  }

  getMovies(listType: string) {
    this.movieService
      .getMovies(listType)
      .subscribe(
        movies => this.movies = movies,
        error => this.errorMessage = <any>error);
  }

  getDetails(event, movie) {
    this.navCtrl.push(MovieDetailPage, {
      movie: movie
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieListPage');
  }

}
