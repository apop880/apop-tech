const sharp = require('sharp');
require('dotenv').config();

module.exports = {
  origin: 'https://apop.tech',
  lang: 'en',
  srcDir: 'src',
  distDir: 'public',
  rootDir: process.cwd(),
  build: {},
  prefix: '',
  server: {},
  debug: {
    stacks: false,
    hooks: false,
    performance: false,
    build: false,
    automagic: false,
  },
  hooks: {
    // disable: ['elderWriteHtmlFileToPublic'], // this is used to disable internal hooks. Uncommenting this would disabled writing your files on build.
  },
  plugins: {
    '@elderjs/plugin-markdown': {
      routes: [],
      useElderJsPluginImages: true
    },
    // '@elderjs/plugin-browser-reload': {
    //   // this reloads your browser when nodemon restarts your server.
    //   port: 8080,
    // },
    '@elderjs/plugin-images': {
      folders: [
          {
              src: '/images/*', // glob of where your original images are. Relative to rootDir/process.cwd() defined in your elder.config.js. Careful with **.
              output: '/images/', // where files should be put within the distDir defined in your elder.config.js.
          },
          {
            src: '/uploads/*', // glob of where your original images are. Relative to rootDir/process.cwd() defined in your elder.config.js. Careful with **.
            output: '/uploads/', // where files should be put within the distDir defined in your elder.config.js.
        },
      ],
      placeholder: {
        resize: {
          width: 20,
          fit: sharp.fit.cover,
        },
        jpeg: {
          quality: 50,
          progressive: true,
          optimizeScans: true,
          chromaSubsampling: '4:2:0',
          trellisQuantisation: true,
          quantisationTable: 2,
        },
      },
    },
    'elderjs-plugin-google-fonts': {
      fonts: {
        'Poppins': ['400', '700'],
        'Alegreya': ['600'],
      },
      swap: true,
    }
  },
  shortcodes: { closePattern: '}}', openPattern: '{{' },
};
