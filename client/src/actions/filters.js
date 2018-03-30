export const sortBy = (filter) => {
	const filters = filter.split(' ');
	return {
		type:'SET_FILTER',
		payload: { filterBy: filters[0], orderBy: filters[1], organizedBy: filters[2], organizedOrder: filters[3] }
	}
};