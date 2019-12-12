const mix = require('laravel-mix')
require('laravel-mix-purgecss')

mix
  .js('resources/js/bbc.js', 'js')
  .postCss('resources/css/bbc.css', 'css')
  .options({
    postCss: [
      require('postcss-import')(),
      require('tailwindcss')(),
      require('postcss-nesting')(),
    ],
  })
  .purgeCss({
    folders: ['templates', 'layouts', 'partials', 'resources'],
    whitelist: ['a', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'ol', 'ul', 'li'],
  })
 
