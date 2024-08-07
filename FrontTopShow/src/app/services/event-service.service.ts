import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  constructor(private http: HttpClient) { 


  }

  login(param:any): Observable<Array<any>> {
    const API_SERVER =  environment.URL_eventos +'admin/logers';
  
  //Post options pass it to HttpHeaders Class 
   const httpOptions = {
      headers: new HttpHeaders(),
  };
   //const service = this.dataObj.restAPI.filter((m: any) => m.name === 'Paises')[0];
  let data=this.http.post<Array<any>>( API_SERVER,param,httpOptions).pipe(
    catchError(this.handleError))
   console.log(data)
  
   return data
  }

  getEvent(): Observable<Array<any>> {
    const API_SERVER =  environment.URL_eventos +'get/event';
   const headers: any ={
     "Authorization": 'Bearer ' 
  };
  //Post options pass it to HttpHeaders Class 
   const httpOptions = {
      headers: new HttpHeaders(headers),
  };
   //const service = this.dataObj.restAPI.filter((m: any) => m.name === 'Paises')[0];
  let data=this.http.get<Array<any>>( API_SERVER,httpOptions).pipe(
    catchError(this.handleError))
   console.log(data)
   return data
  }

  getEventByTipo(): Observable<Array<any>> {
    const API_SERVER =  environment.URL_eventos +'get/event/tipo';
   const headers: any ={
     "Authorization": 'Bearer ' 
  };
  //Post options pass it to HttpHeaders Class 
   const httpOptions = {
      headers: new HttpHeaders(headers),
  };
   //const service = this.dataObj.restAPI.filter((m: any) => m.name === 'Paises')[0];
  let data=this.http.get<Array<any>>( API_SERVER,httpOptions).pipe(
    catchError(this.handleError))
   console.log(data)
   return data
  }

  putEvento(param:any): Observable<any> {
    const API_SERVER =  environment.URL_eventos +'put/event';
   const headers: any ={
     "Authorization": 'Bearer ' 
  };
  //Post options pass it to HttpHeaders Class 
   const httpOptions = {
      headers: new HttpHeaders(headers),
  };
   //const service = this.dataObj.restAPI.filter((m: any) => m.name === 'Paises')[0];
  let data=this.http.post<any>( API_SERVER,param,httpOptions).pipe(
    catchError(this.handleError))
   console.log(data)
  
   return data
  }

  cambiarContra(param:any): Observable<any> {
    const API_SERVER =  environment.URL_eventos +'public/cpass/webusers';
   const headers: any ={
     "Authorization": 'Bearer ' 
  };
  //Post options pass it to HttpHeaders Class 
   const httpOptions = {
      headers: new HttpHeaders(headers),
  };
   //const service = this.dataObj.restAPI.filter((m: any) => m.name === 'Paises')[0];
  let data=this.http.post<any>( API_SERVER,param,httpOptions).pipe(
    catchError(this.handleError))
   console.log(data)
  
   return data
  }
  recuperarPass(param:any): Observable<any> {
    const API_SERVER =  environment.URL_eventos +'public/rpass/webusers';
   const headers: any ={
     "Authorization": 'Bearer ' 
  };
  //Post options pass it to HttpHeaders Class 
   const httpOptions = {
      headers: new HttpHeaders(headers),
  };
   //const service = this.dataObj.restAPI.filter((m: any) => m.name === 'Paises')[0];
  let data=this.http.post<any>( API_SERVER,param,httpOptions).pipe(
    catchError(this.handleError))
   console.log(data)
  
   return data
  }

  
  upload(param:any): Observable<any> {
    const API_SERVER =  environment.URL_eventos +'upload';
   const headers: any ={
     "Authorization": 'Bearer ' 
  };
  //Post options pass it to HttpHeaders Class 
   const httpOptions = {
      headers: new HttpHeaders(headers),
  };
   //const service = this.dataObj.restAPI.filter((m: any) => m.name === 'Paises')[0];
   return this.http.post<any>( API_SERVER,param,httpOptions).pipe(
    catchError(this.handleError))
   
  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error(error.error?.error? error.error.error : 'Ha ocurrido un error por favor intente más tarde.'));
  }


}
