export const apiURL = () => {
	return window.location.hostname === 'localhost'
		? 'http://localhost:9090'
		: 'https://sheltered-island-89188.herokuapp.com'
}
