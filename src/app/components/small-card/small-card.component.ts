import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-small-card',
	templateUrl: './small-card.component.html',
	styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent implements OnInit {
	placeholderImg: string = '/assets/placeholder.png';
	date: Date = new Date();

	ngOnInit(): void {
		const initialDate: Date = new Date('2023-01-01');
		const finalDate: Date = new Date('2023-12-31');
		this.randomDate(initialDate, finalDate);
	}

	randomDate(start: Date, end: Date): void {
		const random: Date = new Date(
			start.getTime() + Math.random() * (end.getTime() - start.getTime())
		);
		this.date = random;
	}
}
