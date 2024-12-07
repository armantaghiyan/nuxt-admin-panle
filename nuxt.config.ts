// https://nuxt.com/docs/api/configuration/nuxt-config

import { resolve } from 'path';

export default defineNuxtConfig({
    devtools: {enabled: true},

    modules: ['@nuxtjs/i18n', '@pinia/nuxt'],

    imports: {
        dirs: ['utils/**/*.ts'],
    },

    components: [
        {path: '~/components', pathPrefix: false},
    ],

    css: ['~/assets/css/main.css'],
    ssr: false,
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    app: {
        head: {
            htmlAttrs: {
                lang: 'en',
                dir: 'ltr',
            },
            link: [
                {rel: 'stylesheet', href: '/tabler/css//tabler-icons.min.css'},
                {rel: 'stylesheet', href: '/tabler/css//tabler-icons-filled.min.css'},
                {rel: 'stylesheet', href: '/tabler/css//tabler-icons-outline.min.css'},
            ],
        }
    },

    i18n: {
        lazy: false,
        strategy: "no_prefix",
        defaultLocale: "en",
        langDir: "",
        locales: [
            {code: "en", label: 'En', iso: "en-US", file: 'en.js', dir: 'ltr', fontClass: 'public-sans'},
            {code: "fa", label: 'Fa', iso: "fa", file: 'fa.js', dir: 'rtl', fontClass: 'vazirmatn'},
        ],
    },

    vite: {
        build: {
            cssCodeSplit: false,
        },
    },

    compatibilityDate: '2024-04-03',
})