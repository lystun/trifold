export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'trifold',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: "author", content: "Olatunde Okegbemi" },
            { hid: 'description', name: 'description', content: 'An all-encompassing marriage app that gives you faith-based curated answers to prevailing marital issues.' },
        ],

        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/icon.png' },
            { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' },
            { rel: 'stylesheet', href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Poppins:wght@400;700&display=swap"},
        ],


        script : [
            { src: "https://code.jquery.com/jquery-3.3.1.slim.min.js", },
            { src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js", },
            { src: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js", },
            
            { src: "/js/purpose.core.js" },
            { src: "/js/purpose.js" },
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        'quill/dist/quill.snow.css',
        'quill/dist/quill.bubble.css',
        'quill/dist/quill.core.css',
        '~/assets/libs/@fortawesome/fontawesome-free/css/all.min.css',
        '~/assets/css/purpose-blue-light.css',
        '~/assets/css/main.css',
    ],

    router: {
        middleware: [
            'clearValidationErrors',
        ]
    },

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        { src: '~/plugins/axios.js' },
        { src: '~/plugins/vue-typed.js' },
        { src: '~/plugins/vue-paginate.js' },
        { src: "~plugins/vue-quill-editor.js", ssr: false },
        { src: '~/plugins/mixins/user.js' },
        { src: '~/plugins/mixins/validation.js' },
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        '@nuxtjs/moment',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        '@nuxtjs/auth',
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        '@nuxtjs/toast',
        '@nuxtjs/style-resources',
        [ 
            'nuxt-sweetalert2', 
            {
                confirmButtonColor : '#4A164B',
                cancelButtonColor : '#808080',
            }
        ],
    ],
    
    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {
        baseURL : "https://trifold-api.herokuapp.com/api/v1/",
        // baseURL : "http://127.0.0.1:8080/api/v1"
    },
    
    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: { url: '/auth/login', method: 'post', propertyName: 'token' },
                    // logout: { url: '/users/logout', method: 'post' },
                    user: { url: '/users/me', method: 'get', propertyName: 'data' },
                },
            }
        },
        
        redirect: false
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {

    },
    loading: {
        color: '#fff',
        height: '2px'
    },

    styleResources: {
        scss: [
            '~assets/scss/*.scss',
        ],
    },

    toast: {
        duration: '10000',
        iconPack: 'fontawesome'
    }
}
