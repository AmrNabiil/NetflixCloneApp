import { ResultsEntity } from './../../models/movies';
import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {Movies} from '../../models/movies';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
   @Input() sliderConfig;
   @Input() movies: Movies;
   @Input() title: string;

  constructor(     private router: Router,
    ) { }

  ngOnInit(): void {
  }

  openMovieDetails(movie): void {
    this.router.navigate(['/movie', movie.id]);
  }

}
