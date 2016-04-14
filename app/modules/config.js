import angular from 'angular';
import uirouter from 'angular-ui-router';


function config($stateProvider) {
  $stateProvider
  .state('index', {
    url: "/",
    controller: 'TodosController as todosCtrl',
    template: require('./view.html')
  });
}


export default config;
