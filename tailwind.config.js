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
                'base': 'rgb(68, 64, 80)',

                'gray-1': '#f8f7fa',
            }
        },
    },
    plugins: [],
}

