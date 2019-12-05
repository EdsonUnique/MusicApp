export default [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      { path: '/', redirect: '/index' },
      { path: '/index', component : './musicStore/index' , title : 'index'},
      { path: '/main', component : './musicStore/main' , title : 'zzz'},
      { path: '/audioPlay', component : './musicStore/audioPlay' , title : '222'},

      { path: '/musicStore', component : './musicStore/mainMusicStore' , title : 'sss'},
      { path: '/userCenter', component : './userCenter/mainUserCenter' , title : 'ccc'},
      //
      {
        path:'/playMusic',
        component:'./musicStore/main',
      },

      ],
  },



]
