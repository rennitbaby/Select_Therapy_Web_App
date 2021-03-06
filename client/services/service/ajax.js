(function() {
	'use strict';
	angular.module('services.ajaxService', [])
		.service('ajaxService', ['$http', '$q', ajaxServiceHandler]);

		function ajaxServiceHandler($http, $q) {

			this.get = function(route, configObj) {
				var deferred = $q.defer();
				if (configObj){
					$http.get(route, configObj)
						.then(function(success) {
							deferred.resolve(success);
						}, 
						function(failure) {
							deferred.reject(failure);
						});
				}else{
					$http.get(route)
						.then(function(success) {
							deferred.resolve(success);
						}, 
						function(failure) {
							deferred.reject(failure);
						});
				}
				return deferred.promise;
			};
			
			this.post = function(route, data, configObj) {
				var deferred = $q.defer();
				
				$http.post(route, data, configObj)
					.then(function(success) {
						deferred.resolve(success);
					}, 
					function(failure) {	
						deferred.reject(failure);
					});
				return deferred.promise;
			};

			this.put = function(route, data) {
				var deferred = $q.defer();

				$http.put(route, data)
					.then(function(success) {
						deferred.resolve(success);
					}, 
					function(failure) {
						deferred.reject(failure);
					});
				return deferred.promise;
			};

			this.delete = function(route) {
				//ajax delete
				var deferred = $q.defer();

				$http.delete(route)
					.then(function(success) {
						deferred.resolve(success);
				}, 
					function(failure) {
						deferred.reject();
					});
				return deferred.promise;
			};
		}
}());