
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/welfare/welfare","pages/news/news","pages/welfare/second/1","pages/welfare/second/2","pages/news/info1","pages/read/read"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"微信读书","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#7a7e83","selectedColor":"#0faeff","backgroundColor":"#ffffff","list":[{"pagePath":"pages/welfare/welfare","text":"福利","iconPath":"static/liwu.png","selectedIconPath":"static/liwu-hover.png"},{"pagePath":"pages/index/index","text":"首页","iconPath":"static/home.png","selectedIconPath":"static/homeHL.png"},{"pagePath":"pages/read/read","text":"免费阅读","iconPath":"static/book.png","selectedIconPath":"static/book-hover.png"},{"pagePath":"pages/news/news","text":"新闻","iconPath":"static/xinwen.png","selectedIconPath":"static/xinwen-hover.png"}]},"splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"study","compilerVersion":"2.6.5","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/welfare/welfare","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/news/news","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/welfare/second/1","meta":{},"window":{}},{"path":"/pages/welfare/second/2","meta":{},"window":{}},{"path":"/pages/news/info1","meta":{},"window":{}},{"path":"/pages/read/read","meta":{"isQuit":true,"isTabBar":true},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,window:void 0}}}});
