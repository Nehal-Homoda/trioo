/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["selector", '[data-mode="dark"]'],
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {},
        colors: {
            background: "#FFFFFF",
            surface: "#F4F6FA",
            "on-surface": "#000000",
            primary: "#FFB200",
            "primary-darken": "#CC5500",
            "secondary-lighten": "#ffffff",
            secondary: "#eeeeee",
            "secondary-darken": "#E0E0E0",
            error: "#B00020",
            info: "#2196F3",
            success: "#4CAF50",
            warning: "#FB8C00",
            "brand-color-text-default": "#10151B",
            "brand-color-text-muted": "#546E7A",
            "brand-color-link-accent": "#0550ae",
            "brand-color-link-accent-muted": "#304d66",
        },
    },
    plugins: [],

};

