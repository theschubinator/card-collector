export const loadUserCards = () => ({
	type: 'LOAD_CARDS'
})


export const saveCard = (data) => {
	alert(`${data.brand} - ${data.player} was saved`)
}