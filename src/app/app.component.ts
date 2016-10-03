import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  count: number;

  onChange(data: number) {
    console.log('onChange', data);
    this.count = data;
  }
}
