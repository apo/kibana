require('plugins/kibana/discover/index');
require('plugins/kibana/visualize/index');
require('plugins/kibana/dashboard/index');
require('plugins/kibana/settings/index');
require('plugins/kibana/doc/index');

var moment = require('moment-timezone');

var chrome = require('ui/chrome');
var routes = require('ui/routes');
var modules = require('ui/modules');

var kibanaLogoUrl = require('ui/images/ly.png');

routes
.otherwise({
  redirectTo: `/${chrome.getInjected('kbnDefaultAppId', 'discover')}`
});

chrome
.setBrand({
  'logo': 'url(' + kibanaLogoUrl + ') left no-repeat',
  'smallLogo': 'url(' + kibanaLogoUrl + ') left no-repeat'
})
.setNavBackground('#222222')
.setTabDefaults({
  resetWhenActive: true,
  lastUrlStore: window.sessionStore,
  activeIndicatorColor: '#656a76'
})
.setTabs([
  {
    id: 'discover',
    title: '发现'
  },
  {
    id: 'visualize',
    title: '视图',
    activeIndicatorColor: function () {
      return (String(this.lastUrl).indexOf('/visualize/step/') === 0) ? 'white' : '#656a76';
    }
  },
  {
    id: 'dashboard',
    title: '仪表盘'
  },
  {
    id: 'settings',
    title: '设置'
  },
  {
    id: 'logout',
    title: '退出',
    baseUrl: '/users/sign_out'
  }
])
.setRootController('kibana', function ($scope, $rootScope, courier, config) {
  function setDefaultTimezone() {
    moment.tz.setDefault(config.get('dateFormat:tz'));
  }

  // wait for the application to finish loading
  $scope.$on('application.load', function () {
    courier.start();
  });

  $scope.$on('init:config', setDefaultTimezone);
  $scope.$on('change:config.dateFormat:tz', setDefaultTimezone);
});
