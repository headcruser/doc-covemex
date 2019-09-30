module.exports = {
  title: '',
  description: 'Documentacion ERP Covemex',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Catamaran:300,700|Miriam+Libre'}],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
  ],
  themeConfig: 
  {
    logo: '/logo.jpg',
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Créditos', link: '/credits' },
      { text: 'Covemex', link: 'https://www.covemex.com/' },
    ],
    search: true,
    sidebar:[
      {
        title: 'Documentacion',
        collapsable: true,
        children:[
          '/documentacion/instalacion',
          '/documentacion/configuracion',
          '/documentacion/estructura',
          '/documentacion/despliegue',
        ]
      },{
        title:"Modulos",
        collapsable:true,
        children:[
          '/modulos/viajes',
          '/modulos/materia-prima',
          '/modulos/almacen',
          '/modulos/preparacion',
          '/modulos/congelacion',
          '/modulos/embolsadora',
          '/modulos/recursos-humanos',
          '/modulos/ventas'
        ]
      }
    ],
  },
}