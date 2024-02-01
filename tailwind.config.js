const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.{js,ts,tsx,jsx}",
        // "./resources/js/components/",
        "./resources/js/pages/*.tsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            colors: {
                primary: "#1D6758",
                secondary: "#62B196",
            },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
