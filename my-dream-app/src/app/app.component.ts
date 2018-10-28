import { Component } from '@angular/core';

import { RequestsService} from './requests.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'requests';
  list: any = [];
  
  constructor (private requestsService: RequestsService){
   
    this.requestsService.getRequest().subscribe(res => {
      console.log(res);
      this.list = res;
    });
  
   

  

  
  // ngOnInit(): void{
  //   const req = this.http.post ('http://jsonplaceholder.typicode.com/todos', { 
  //     title: 'foo', 
  //     userId: 20, 
  //     completed: true
  //   }) 
  //     .subscribe ( 
  //       res => { 
  //         console. log (res); 
  //       }, 
  //       err => { 
  //         console.log ("сталася помилка"); 
  //       } 
  //     );
  //      this.http.get ('http://jsonplaceholder.typicode.com/todos/5')
  //      .subscribe (
  //       res => { 
  //         console. log (res);
  //       }, 
  //       err => { 
  //         console.log ("сталася помилка"); 
  //       } 
  //      );
  //      this.http.patch ('http://jsonplaceholder.typicode.com/todos/1',  {
  //       "title": "aooooo",
  //   })
        
      
  //       .subscribe ( 
  //         res => { 
  //           console. log (res); 
  //         }, 
  //         err => { 
  //           console.log ("сталася помилка"); 
  //         } 
  //       );
  //       this.http.delete ('http://jsonplaceholder.typicode.com/todos/2') 
  //     .subscribe ( 
  //       res => { 
  //         console. log (res); 
  //       }, 
  //       err => { 
  //         console.log ("сталася помилка"); 
  //       } 
  //     );
      }

  }
  

