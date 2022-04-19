import { Video } from './../../models/videos';
import { ResultsEntity } from './../../models/movies';
import { MovieService } from './../../services/movie.service';
import { Component, ElementRef, OnInit, ViewChild, Input, OnDestroy, Output } from '@angular/core';
import { Movies } from 'src/app/models/movies';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cast, Credits } from 'src/app/models/cast';
import { Videos } from 'src/app/models/videos';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  @ViewChild('stickHeader') header: ElementRef;
  headerBGUrl: string;

  movie:ResultsEntity;
  movieID: string;
  routeSub: Subscription;
  movieSub: Subscription;
  similar: Movies;
  popular: Movies;
  subs: Subscription[];
  credits: Credits;
  @Output()videos: Videos;


  sliderConfig = {
    slidesToShow: 8,
    slidesToScroll: 2,
    arrows: true,
    autoplay: false
  };

  constructor( private activatedRoute: ActivatedRoute,
              private movieService: MovieService    ) { }

  ngOnInit(): void {

    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.movieID = params['id'];
      this.getMovieDetails(this.movieID);
    });
    this.subs.push(this.movieService.getPopularMovies().subscribe(data => this.popular = data));
  }


  getMovieDetails(id: string): void {
    this.movieSub = this.movieService
    .getMovie(id)
    .subscribe((movieResp: ResultsEntity) => {
      this.movie = movieResp;
    });

    this.movieService.getSimilar(id).subscribe((similarMovies: Movies) => {
      this.similar = similarMovies;
    });
    this.movieService.getPopularMovies().subscribe((pop: Movies) => {
      this.popular = pop;
    });
    this.movieService.getCast(id).subscribe((creds: Credits) => {
      this.credits = creds;
    });
    this.movieSub = this.movieService
    .getVideos(id)
    .subscribe((vids: Videos) => {
      this.videos = vids;
    })



  }

  ngOnDestroy(): void {
    if (this.movieSub) {
      this.movieSub.unsubscribe();
    }

    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
    this.subs.map(s => s.unsubscribe());

  }

}
