import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class ServerService {

  constructor(private http: Http) {}

  storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://angular-course-784a1.firebaseio.com/data.json',
    //   servers,
    //   {headers: headers});
    return this.http.put('https://angular-course-784a1.firebaseio.com/data.json',
      servers,
      {headers: headers});
  }

  getServers() {
    return this.http.get('https://angular-course-784a1.firebaseio.com/data')
      .pipe(map((response: Response) => {
        const data = response.json();
        for ( const server of data ) {
          server.name = 'FETCHED_' + server.name;
        }
        return data;
      }))
      .pipe(catchError((error: Response) => {
        console.log(error);
        return throwError('Something went wrong');
      }));
  }

}
