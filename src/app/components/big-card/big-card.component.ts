import { Component } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
	placeholderImg: string = 'https://blog.iprocess.com.br/wp-content/uploads/2021/11/placeholder.png';
	date: Date = new Date();
}
