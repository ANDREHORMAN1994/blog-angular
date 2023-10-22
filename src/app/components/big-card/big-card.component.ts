import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { formatDate } from 'src/app/utils/functions';
import { IArticle } from 'src/app/utils/types';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnChanges {
	@Input() new!: IArticle;
	@Input() isLoading!: boolean;
	@Input() colorTitle!: string;
	placeholderImg: string = '/assets/placeholder.png';
	date: Date = new Date();

	ngOnChanges(change: SimpleChanges): void {
		if (!change["isLoading"].currentValue) {
			this.date = formatDate(change["new"].currentValue.publishedAt);
		}
	}
}
