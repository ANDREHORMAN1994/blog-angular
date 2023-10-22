import { IArticle } from './types';
import { environment } from '../../environments/environment';
import { mockAPi } from './mockApi';

export const requestNewsApi = async (): Promise<IArticle[] | null> => {
	try {
		if (environment.production) {
			return mockAPi.articles;
		} else {
			const endpoint = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${environment.apiKey}`;
			const response = await fetch(endpoint);
			const { articles } = await response.json();
			return articles;
		}
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const formatDate = (date: string): Date => {
	const dateSliced = date.slice(0, -1);
	return new Date(dateSliced);
};
