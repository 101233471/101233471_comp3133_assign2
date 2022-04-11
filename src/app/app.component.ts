import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '101233471_comp3133_assign2';

  data:any;

  constructor(private http: HttpClient){
    this.http.get('http://localhost:8000').subscribe(data => {
    this.data = data//['Names'];
    console.log(this.data);
    }, error => console.error(error));
  }
}
