export const sortBy = (filter) => {
	const filterType = filter.split(' ')[0];
	const order = filter.split(' ')[1];
	return {
		type:'SET_FILTER',
		payload: { filter: filterType, order: order }
	}
};