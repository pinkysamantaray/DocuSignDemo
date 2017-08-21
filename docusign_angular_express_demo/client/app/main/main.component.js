import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {

  awesomeThings = [];

  /*@ngInject*/
  constructor($http,$window) {
    this.$http = $http;
    this.docusignTest =  () => {
      console.log('hi');
      this.$http.get('/api/docusign')
      .then(response => {
        console.log(response.data.url);
        $window.location.href = response.data.url;
      });
    };
  }

  $onInit() {
    this.$http.get('/api/things')
      .then(response => {
        this.awesomeThings = response.data;
      });
  }
}

export default angular.module('docusignAngularExpressDemoApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
