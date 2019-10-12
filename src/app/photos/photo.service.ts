import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Photo } from './photo';

const API = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  ListFromServer(userName: string){
    return this.http
    .get<Photo[]>( API + '/' + userName + '/photos');
  }

  listFromUserPaginated(userName: string, page: number) {
    const params = new HttpParams()
        .append('page', page.toString());

    return this.http
        .get<Photo[]>(API + '/' + userName + '/photos', { params: params });
  }
  
}
