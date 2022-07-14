/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#F0CF65",

                    secondary: "#0d4f91",

                    accent: "#F0F3BD",

                    neutral: "#1C1B27",

                    "base-100": "#f9dc5c",

                    info: "#A5CEE9",

                    success: "#10846D",

                    warning: "#B5880D",

                    error: "#ED214D",
                },
            },
        ],
    },
};
