const defaultState = [
	{
	id: 1,
	brand: 'Topps',
	year: '1984',
	player: 'Dan Marino',
	card_number: '123',
	image: 'https://www.oldsportscards.com/wp-content/uploads/2017/07/1984-Topps-123-Dan-Marino-Rookie-Card-209x300.jpg',
	rookie: true,
	value: '100'
	}
]

export const cardsReducer = (state=[], action) => {
	switch(action.type) {
		case 'LOAD_CARDS':
			return action.payload
		default:
			return state
	}
}