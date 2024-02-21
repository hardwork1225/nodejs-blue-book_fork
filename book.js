module.exports = {
  title: 'Node.js蓝宝书',
  author: 'ZL & KY',
  lang: 'zh-cn',
  description: 'Stay Hungry. Stay Foolish.',
  plugins: [
    'livereload',
    '-lunr',
    '-sharing',
    '-search',
    '-favicon',
    'expandable-chapters',
    'theme-lou',
    'back-to-top-button',
    '-search-pro',
    'flexible-alerts',
  ],
  pluginsConfig: {
    'flexible-alerts': {
      style: 'flat',
      note: {
        label: 'Note',
        icon: 'fa fa-info-circle',
        className: 'info',
      },
      tip: {
        label: 'Tips',
        icon: 'fa fa-lightbulb-o',
        className: 'tip',
      },
      warning: {
        label: 'Warning',
        icon: 'fa fa-exclamation-triangle',
        className: 'warning',
      },
      danger: {
        label: 'Danger',
        icon: 'fa fa-ban',
        className: 'danger',
      },
      comment: {
        label: 'Comment',
        icon: 'fa fa-commenting',
      },
      question: {
        label: 'Question',
        icon: 'fa fa-question-circle',
      },
    },
    'theme-lou': {
      color: '#298aff', // 主题色
      favicon: 'assets/favicon.ico',
      logo: 'assets/logo.png',
      autoNumber: 3, // 自动编号到几级标题
      appleTouchIconPrecomposed152:
        'assets/apple-touch-icon-precomposed-152.png',
      'hide-elements': [
        '.summary .gitbook-link',
        '.summary .divider',
        '.header-inner .title',
      ],
      copyright: {
        author: 'ZL & KY',
      },
    },
  },
  variables: {
    themeLou: {
      footer: {
        donate: {
          button: '赞赏',
          avatar:
            'http://xkapp-uat.oss-cn-hangzhou.aliyuncs.com/2e7a3f70-80ab-4b50-93ec-a04dfeef949b/avatar-100.png',
          nickname: '作者',
          message: '随意打赏，但不要超过一顿早餐钱 💕',
          text: '『 赠人玫瑰 🌹 手有余香 』',
          wxpay:
            'http://xkapp-uat.oss-cn-hangzhou.aliyuncs.com/2e7a3f70-80ab-4b50-93ec-a04dfeef949b/wxpay-any-200.png',
          alipay:
            'http://xkapp-uat.oss-cn-hangzhou.aliyuncs.com/2e7a3f70-80ab-4b50-93ec-a04dfeef949b/alipay-any-200.png',
        },
      },
    },
  },
};
