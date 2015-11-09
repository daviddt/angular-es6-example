import angular from 'angular';
import example from './example-component/example.js'

angular.module('app', [
	'example'
]);

angular.bootstrap(document, ['app']);