import { Component, OnInit } from '@angular/core';
import { requestNewsApi } from 'src/app/utils/functions';
import { IArticle } from 'src/app/utils/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	protected news: IArticle[] = [];
	isLoading: boolean = true;

	ngOnInit(): void {
		try {
			this.getNews();
		} catch (error) {
			console.log(error);
		}
	}

	async getNews() {
		const articles = await requestNewsApi();
		if (articles) {
			setTimeout(() => {
				this.news = articles;
				this.isLoading = false;
			}, 1000);
		}
	}
}
