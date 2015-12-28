define(function (require) {
  var $ = require('jquery');
  var app = require('ui/modules').get('apps/discover');
  var html = require('plugins/kibana/discover/components/field_chooser/discover_field.html');
  var _ = require('lodash');

  require('ui/directives/css_truncate');
  require('ui/directives/field_name');


  app.directive('discoverField', function ($compile) {
    return {
      restrict: 'E',
      template: html,
      replace: true,
      link: function ($scope, $elem) {
        var detailsElem;
        var detailScope = $scope.$new();

        var detailsHtml = require('plugins/kibana/discover/components/field_chooser/lib/detail_views/string.html');

        var init = function () {
          if ($scope.field.details) {
            $scope.toggleDetails($scope.field, true);
          }
        };

        var getWarnings = function (field) {
          var warnings = [];

          if (!field.scripted) {
            if (!field.doc_values && field.type !== 'boolean' && !(field.analyzed && field.type === 'string')) {
              warnings.push('Doc values are not enabled on this field. This may lead to excess heap consumption when visualizing.');
            }

            if (field.analyzed && field.type === 'string') {
              warnings.push('这是一个被分析的字符串字段.' +
                ' 被分析的字符串是唯一的, 会使用大量内存来可视化.' +
                ' 诸如foo-bar这样的值会被拆分为 foo 和 bar.');
            }

            if (!field.indexed) {
              warnings.push('此字段不能被索引且不能被可视化.');
            }
          }


          if (field.scripted) {
            warnings.push('脚本化字段会占用较长时间来执行.');
          }

          if (warnings.length > 1) {
            warnings = warnings.map(function (warning, i) {
              return (i > 0 ? '\n' : '') + (i + 1) + ' - ' + warning;
            });
          }

          return warnings;

        };

        $scope.toggleDisplay = function (field) {
          // inheritted param to fieldChooser
          $scope.toggle(field.name);
          if (field.display) $scope.increaseFieldCounter(field);

          // we are now displaying the field, kill it's details
          if (field.details) {
            $scope.toggleDetails(field);
          }
        };

        $scope.toggleDetails = function (field, recompute) {
          if (_.isUndefined(field.details) || recompute) {
            // This is inherited from fieldChooser
            $scope.details(field, recompute);
            detailScope.$destroy();
            detailScope = $scope.$new();
            detailScope.warnings = getWarnings(field);

            detailsElem = $(detailsHtml);
            $compile(detailsElem)(detailScope);
            $elem.append(detailsElem);
          } else {
            delete field.details;
            detailsElem.remove();
          }
        };

        init();
      }
    };
  });
});
