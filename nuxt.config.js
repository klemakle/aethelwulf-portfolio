import dotenv from "dotenv";
dotenv.config();

// console.log(' my email : ', process.env.EMAIL)

export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: true,

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'aethelwulf',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/main.css'
    ],
    // env: {
    //     EMAIL: process.env.EMAIL,
    //     USER: process.env.USER,
    //     PASS: process.env.PASS,
    //     MDP: process.env.MDP
    // },


    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '~/plugins/fullpage', mode: 'client' }
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        '@nuxtjs/dotenv',
        '@nuxtjs/axios'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        'nuxt-fullpage.js',
        '@nuxtjs/axios', ['nuxt-mail', {
            message: {
                to: `kalidou1309@gmail.com`,
            },
            smtp: {
                host: "smtp.mailtrap.io",
                port: 2525,
                auth: {
                    user: '2ace4244d339fb',
                    pass: '8156e3103068b6'
                }
            }


            // smtp: {
            //     service: 'gmail',
            //     auth: {
            //         user: `kalidou1309@gmail.com`,
            //         pass: `console.log(Klema1309)`,
            //     },
            // },
        }],
    ],

    axios: {
        baseURL: process.env.NODE_ENV === 'development' ?
            'http://localhost:3000' : 'https://aethelwulf13.netlify.app/',
    },

    bootstrapVue: {
        icons: false,
        componentPlugins: [],
        directivePlugins: [],
        components: [],
        directives: [],
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        babel: { compact: true }
    }
}