import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { formatDate } from 'src/app/utils/functions';
import { IArticle } from 'src/app/utils/types';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnChanges {
	@Input() news!: IArticle[];
	@Input() isLoading!: boolean;
	new: IArticle | null = null;
	placeholderImg: string = '/assets/placeholder.png';
	date: Date = new Date();

	ngOnChanges({ news, isLoading }: SimpleChanges): void {
		if (!isLoading.currentValue) {
			this.new = news.currentValue[0];
			this.date = formatDate(news.currentValue[0].publishedAt);
		}
	}
}
