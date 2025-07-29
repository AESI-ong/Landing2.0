/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", // Asegúrate de que esto ya esté en tu comando o ponlo aquí
    ],
    theme: {
        // Aquí extendemos el tema de Tailwind, en lugar de reemplazarlo.
        extend: {
            // Mapeamos tus fuentes personalizadas
            fontFamily: {
                sans: ['"M PLUS Rounded 1c"', 'Arial', 'sans-serif'],
            },
            // Mapeamos tus colores de marca personalizados
            colors: {
                'amarillo-aesi': '#f6d70e',
                'rojo-aesi': '#cd2027',
                'azul-aesi': '#2c6db6',
                'verde-aesi': '#55b948',
            },
        },
    },
    plugins: [],
};