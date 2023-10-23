export const formatDate = (date: string): Date => {
	const dateSliced = date.slice(0, -1);
	return new Date(dateSliced);
};
