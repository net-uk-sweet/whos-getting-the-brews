'use strict';
/* globals angular, _ */

angular.module('brewApp', [/* Module dependancies */])
	.controller('MainCtrl', function($scope) {

		$scope.people = [
			{
				firstName: 'Nigel',
				lastName: 'Conde',
				image: 'assets/Nigel Conde.jpg',
				selected: false
			},
			{
				firstName: 'Witold',
				lastName: 'Szpur',
				image: 'assets/Witold Szpur.jpg',
				selected: false
			},
			{
				firstName: 'Martin',
				lastName: 'Paton',
				image: 'assets/Martin Paton.jpg',
				selected: false
			},
			{
				firstName: 'Ross',
				lastName: 'Tyler',
				image: 'assets/Ross Tyler.jpg',
				selected: false
			},
			{
				firstName: 'Stelios',
				lastName: 'Issaias',
				image: 'assets/Stelios Issaias.jpg',
				selected: false
			},
			{
				firstName: 'Tom',
				lastName: 'Dickie',
				image: 'assets/Tom Dickie.jpg',
				selected: false
			},
			{
				firstName: 'Paul',
				lastName: 'Gruffydd',
				image: 'assets/Paul Gruffydd.jpg',
				selected: false
			},
			{
				firstName: 'Oliver',
				lastName: 'Reece',
				image: 'assets/Oliver Reece.jpg',
				selected: false
			},
			{
				firstName: 'Simon',
				lastName: 'Mawdsley',
				image: 'assets/Simon Mawdsley.jpg',
				selected: false
			}
		];

		function getSelected() {
			return _.where($scope.people, { selected: true });
		}

		$scope.choose = function() {

			var selected = getSelected(),
				random = Math.floor(Math.random() * selected.length);

			$scope.chosen = selected[random];
			$scope.chosen.selected = false;
		};

		$scope.hasSelected = function() {
			return getSelected().length;
		};
	});