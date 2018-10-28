import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }

  getRequest() {
    return this.http.get ('http://jsonplaceholder.typicode.com/todos');
   

  };
  

  
  
 
}
