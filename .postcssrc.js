// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
    "plugins": {
      "postcss-import": {},
      "postcss-url": {},
      // to edit target browsers: use "browserslist" field in package.json //只能说平时多学习英文，需要兼容浏览器的前缀的时候 去看看https://juejin.im/post/5b8cff326fb9a019fd1474d6   里面有对应的设置
      "autoprefixer": {
         browsers: ['Android >= 4.0', 'iOS >= 7']  //   添加浏览器前缀 安卓4.0版本，ios 7.0版本以上  // package.json已经加了
      },
    //   'postcss-pxtorem': {
    //     rootValue: 110,
    //     propList: ['*']
    //   }
    }
  }
