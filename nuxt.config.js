import dotenv from "dotenv";
dotenv.config();

console.log(' my email : ', process.env.MY_EMAIL)

export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

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
        '@nuxtjs/dotenv'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        'nuxt-fullpage.js',
        '@nuxtjs/dotenv',
        '@nuxtjs/axios', ['nuxt-mail', {
            message: {
                to: `${process.env.MY_EMAIL}`,
            },
            // smtp: {
            //     host: "smtp.mailtrap.io",
            //     port: 2525,
            //     auth: {
            //         user: process.env.USER,
            //         pass: process.env.PASS
            //     }
            // }

            smtp: {
                service: 'gmail',
                auth: {
                    user: `${process.env.MY_EMAIL}`,
                    pass: `${process.env.MY_MDP}`,
                },
            },
        }],
    ],

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