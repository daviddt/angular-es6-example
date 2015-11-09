import angular from 'angular';

import ExampleController from './example-controller/example-controller.js';
import ExampleDirective from './example-directive/example-directive.js';
import ExampleService from './example-service/example-service.js';

export default angular.module('example', [])
	.controller('exampleController', ExampleController)
	.service('exampleService', ExampleService)
	.directive('exampleDirective', () => new ExampleDirective);