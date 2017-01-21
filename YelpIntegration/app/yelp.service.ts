import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { YelpInfo } from './yelpinfo';

@Injectable()
export class YelpService{
  private baseUrl: string = 'http://localhost:56919/api/Search/marble-brewery-westside-tap-room-albuquerque';

  constructor(private http : Http){
  }

  getAll(): Observable<YelpInfo[]>{
    let yelpInfo$ = this.http
      .get(`${this.baseUrl}`)
      .map(mapYelpInfo);
      return yelpInfo$;
  }

}


function mapYelpInfo(response:Response): YelpInfo[]{
   // The response of the API has a results
   // property with the actual results
   return response.json().results.map(toYelpInfo)
}

function toYelpInfo(r:any): YelpInfo{
  let yelpinfo = <YelpInfo>({
    id : r.id,
    name: r.name,
  });
  console.log('Parsed yelpinfo:', yelpinfo);
  return yelpinfo;
}



function mapYelpInfos(response:Response): YelpInfo{
  // toPerson looks just like in the previous example
  return toYelpInfo(response.json());
}