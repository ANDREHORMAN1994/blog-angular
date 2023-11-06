import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
import { IArticle } from 'src/app/utils/types';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
	protected news: IArticle[] = [];
	isLoading: boolean = true;

	constructor(private service: UtilityService) {}

	ngOnInit(): void {
		this.getNews();
	}

	getNews() {
		this.service.requestGetNews().subscribe({
			next: ({ articles }: { articles: IArticle[] }) => {
				setTimeout(() => {
					const articlesWithImage = articles.filter((n) => n.urlToImage);
					this.news = articlesWithImage;
					this.isLoading = false;
				}, 1000);
			},
			error: (error: Error) => console.log(error.message),
		});
	}
}
