export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,
    target: 'static',
    generate: {
        routes: [
            '/blog/audit-pentest', 
            '/blog/audit-pentest',
            '/blog/data-viz-elk',
            '/blog/data-viz-rsyslog',
            '/blog/sql-injection',
            '/blog/sql-blind-injection',
            '/blog/linux-ha'
        ]
    },
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
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/main.css'
    ],


    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        '@nuxtjs/dotenv',
        '@nuxtjs/axios',
        '@nuxtjs/tailwindcss',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        '@nuxtjs/critters',
        'bootstrap-vue/nuxt',
        '@nuxt/content',
        '@nuxtjs/axios', ['nuxt-mail', {
            message: {
                to: 'kalidou1309@gmail.com',
            },
            smtp: {
                host: "smtp.mailtrap.io",
                port: 2525
            }
        }],
    ],

    critters: {
        // Options passed directly to critters: https://github.com/GoogleChromeLabs/critters#critters-2
        config: {
          // Default: 'media'
          preload: 'swap',
        },
      },

    axios: {
        baseURL: process.env.NODE_ENV === 'development' ?
            'http://localhost:3000' : 'https://kalidou.me/'
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
