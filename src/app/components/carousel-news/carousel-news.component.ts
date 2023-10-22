import { Component, Input } from '@angular/core';
import { IArticle } from 'src/app/utils/types';

@Component({
  selector: 'app-carousel-news',
  templateUrl: './carousel-news.component.html',
  styleUrls: ['./carousel-news.component.css']
})
export class CarouselNewsComponent {
	@Input() news!: IArticle[];
	@Input() isLoading!: boolean;
	colorTitle: string = '#121212';
}
