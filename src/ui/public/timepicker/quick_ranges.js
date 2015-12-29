define(function (require) {
  var module = require('ui/modules').get('kibana');

  module.constant('quickRanges', [
    { from: 'now/d',    to: 'now/d',    display: '今天 ',                 section: 0 },
    { from: 'now/w',    to: 'now/w',    display: '本周     ',             section: 0 },
    { from: 'now/M',    to: 'now/M',    display: '本月      ',            section: 0 },
    { from: 'now/y',    to: 'now/y',    display: '本年     ',             section: 0 },
    { from: 'now/d',    to: 'now',      display: '到目前为止的一天',      section: 0 },
    { from: 'now/w',    to: 'now',      display: '周初至今',              section: 0 },
    { from: 'now/M',    to: 'now',      display: '月初至今',              section: 0 },
    { from: 'now/y',    to: 'now',      display: '年初至今    ',          section: 0 },

    { from: 'now-1d/d', to: 'now-1d/d', display: '昨天     ',             section: 1 },
    { from: 'now-2d/d', to: 'now-2d/d', display: '前天                ',  section: 1 },
    { from: 'now-7d/d', to: 'now-7d/d', display: '上一周本日        ',    section: 1 },
    { from: 'now-1w/w', to: 'now-1w/w', display: '上一周       ',         section: 1 },
    { from: 'now-1M/M', to: 'now-1M/M', display: '上一月        ',        section: 1 },
    { from: 'now-1y/y', to: 'now-1y/y', display: '上一年       ',         section: 1 },

    { from: 'now-15m',  to: 'now',      display: '15 分钟前      ',       section: 2 },
    { from: 'now-30m',  to: 'now',      display: '30 分钟前      ',       section: 2 },
    { from: 'now-1h',   to: 'now',      display: '1 小时前   ',           section: 2 },
    { from: 'now-4h',   to: 'now',      display: '4 小时前    ',          section: 2 },
    { from: 'now-12h',  to: 'now',      display: '12 小时前    ',         section: 2 },
    { from: 'now-24h',  to: 'now',      display: '24 小时前    ',         section: 2 },
    { from: 'now-7d',   to: 'now',      display: '7 天前     ',           section: 2 },

    { from: 'now-30d',  to: 'now',      display: '30 天前     ',          section: 3 },
    { from: 'now-60d',  to: 'now',      display: '60 天前     ',          section: 3 },
    { from: 'now-90d',  to: 'now',      display: '90 天前     ',          section: 3 },
    { from: 'now-6M',   to: 'now',      display: '6 月前       ',         section: 3 },
    { from: 'now-1y',   to: 'now',      display: '1 年前     ',           section: 3 },
    { from: 'now-2y',   to: 'now',      display: '2 年前      ',          section: 3 },
    { from: 'now-5y',   to: 'now',      display: '5 年前      ',          section: 3 },

  ]);

});
