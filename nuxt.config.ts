// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
    devtools: {enabled: true}
})
