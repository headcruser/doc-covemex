module.exports = {
  title: 'Covemex',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Catamaran:300,700|Miriam+Libre' }]
  ],
  description: 'Plataforma web Covemex',
  themeConfig: 
  {
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Créditos', link: '/credits' },
      { text: 'Covemex', link: 'https://www.covemex.com/' },
    ],
    search: true,
    sidebar:[
      {
        title: 'Introducción',
        collapsable: true,
        children:[
          '/instalacion',
          '/configuracion',
          '/estructura',
          '/despliegue',
        ]
      },
    ]
  },
}