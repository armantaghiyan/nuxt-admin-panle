/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {

            colors: {
                primary: '#7367f0',

                'base': 'rgb(68, 64, 80)',

                'gray-1': '#f8f7fa',
                'gray-2': 'rgb(209, 208, 212)',
                'gray-3': '#82808B',
            }
        },
    },
    plugins: [],
}

