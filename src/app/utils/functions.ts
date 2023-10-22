import { IArticle } from "./types";

const apiKey = '2014137f0f5f4b1aa2d6e4212b2fbb49';
const endpoint= `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

export const requestNewsApi = async (): Promise<IArticle[] | null> => {
	try {
		const response = await fetch(endpoint);
		const { articles } = await response.json();
		console.log(articles);
		return articles;
	} catch (error) {
		console.log(error);
		return null;
	}
}

export const formatDate = (date: string): Date => {
	const dateSliced = date.slice(0, -1);
	return new Date(dateSliced);
}
