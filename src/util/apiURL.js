export const apiURL = () => {
	return window.location.hostname === 'localhost'
		? 'http://localhost:9090'
		: 'https://pure-sea-03440.herokuapp.com/'
}
