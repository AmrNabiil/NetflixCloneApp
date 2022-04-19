import { Cast, Credits } from './../models/cast';
import { ResultsEntity } from './../models/movies';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Movies} from '../models/movies';
import { Videos } from '../models/videos';

const enum endpoint {
  latest = '/movie/latest',
  now_playing = '/movie/now_playing',
  popular = '/movie/popular',
  top_rated = '/movie/top_rated',
  upcoming = '/movie/upcoming',
  trending = '/trending/all/week',
  originals = '/discover/tv'
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private URL = 'https://api.themoviedb.org/3';
  // tslint:disable-next-line:variable-name
  private api_key = environment.api;

  constructor(private http: HttpClient) {
  }

  getMovie(id:string): Observable<ResultsEntity> {
    return this.http.get<ResultsEntity>(`${this.URL}/movie/${id}`, {
      params: {
        api_key: this.api_key
      }
    });
  }

  getVideos(id:string): Observable<Videos> {
    return this.http.get<Videos>(`${this.URL}/movie/${id}/videos`, {
      params: {
        api_key: this.api_key
      }
    });
  }

  getSimilar(id:string): Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}/movie/${id}/similar`, {
      params: {
        api_key: this.api_key
      }
    });
  }

  getCast(id:string): Observable<Credits> {
    return this.http.get<Credits>(`${this.URL}/movie/${id}/credits`, {
      params: {
        api_key: this.api_key
      }
    });
  }

  getUpcoming(): Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}${endpoint.upcoming}`, {
      params: {
        api_key: this.api_key
      }
    });
  }

  getNowPlaying(): Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}${endpoint.now_playing}`, {
      params: {
        api_key: this.api_key
      }
    });
  }

  getOriginals(): Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}${endpoint.originals}`, {
      params: {
        api_key: this.api_key
      }
    });
  }

  getPopularMovies(): Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}${endpoint.popular}`, {
      params: {
        api_key: this.api_key
      }
    });
  }

  getTopRated(): Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}${endpoint.top_rated}`, {
      params: {
        api_key: this.api_key
      }
    });
  }

  getTrending(): Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}${endpoint.trending}`, {
      params: {
        api_key: this.api_key
      }
    });
  }

}
