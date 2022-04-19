import { Videos } from '../../models/videos';
import { Component, ElementRef, OnInit, ViewChild, Input, OnDestroy } from '@angular/core';
import { Movies, ResultsEntity } from 'src/app/models/movies';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cast, Credits } from 'src/app/models/cast';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})


export class VideoComponent implements OnInit {

  movie:ResultsEntity;
  @Input()videos: Videos;
  movieID: string;
  routeSub: Subscription;
  movieSub: Subscription;
  vidsrc0:string;
  vidsrc1:string;


  sliderConfig = {
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    autoplay: false
  };
  constructor(private activatedRoute: ActivatedRoute,
    private movieService: MovieService ) { }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.movieID = params['id'];
      this.getMovieVideos(this.movieID);
    });

    this.vidsrc0= "https://youtube.com/embed/"+ this.videos.results[0].key
    this.vidsrc1= "https://youtube.com/embed/"+ this.videos.results[1].key

  }


  getMovieVideos(id:string): void {
    this.movieSub = this.movieService
    .getVideos(id)
    .subscribe((vids: Videos) => {
      this.videos = vids;
    });

  }

  ngOnDestroy(): void {
    if (this.movieSub) {
      this.movieSub.unsubscribe();
    }

    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }

  }

}

