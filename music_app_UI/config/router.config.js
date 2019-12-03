export default [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      { path: '/', redirect: '/musicStore' },
      { path: '/musicStore', component : './musicStore/mainMusicStore' , title : 'zzz'},
      { path: '/userCenter', component : './userCenter/mainUserCenter' , title : 'ccc'},

      {
        path:'/musicStore/playMusic',
        component:'./musicStore/playMusic',
      },

      ],
  },



]
