export default class ExampleService {
    constructor($http) {
		this.$http = $http;
    }
	
	// Example service function
	getData () {
		return this.$http({method: 'GET', url: './api' });
	}
}

ExampleService.$inject = ['$http'];