// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    app: {
        head: {
            link: [
                {rel: 'stylesheet', href: '/tabler/css//tabler-icons.min.css'},
                {rel: 'stylesheet', href: '/tabler/css//tabler-icons-filled.min.css'},
                {rel: 'stylesheet', href: '/tabler/css//tabler-icons-outline.min.css'},
            ],
        }
    },
    compatibilityDate: '2024-04-03',
})
