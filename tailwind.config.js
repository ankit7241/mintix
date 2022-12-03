/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primaryBg: "#0A0B0D",
                secondaryBg: "#191B20",
                lightGray: "#979797",
                darkGray: "#606060"

            },
            backgroundImage: {
                primaryGradient: "linear-gradient(93.22deg, #F7C0EC 0.53%, #A7BDEA 100%), linear-gradient(93.22deg, #FF5137 0.53%, #FD16D5 100%);",
                secondaryGradient: "linear-gradient(93.22deg, #FF5137 0.53%, #FD16D5 100%);",
                transparentGradient: "linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 100%)",
            }
        },
    },
    plugins: [],
}
