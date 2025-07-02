/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./src/**/*.{html,js}",
  ],
  theme: {
    fontSize: {
      "xs": "0.625rem",
      "sm": "0.8125rem",
      "base": "1rem",
      "lg": "1.25rem",
      "xl": "1.5625rem",
      "2xl": "1.9375rem",
      "3xl": "2.4375rem",
      "4xl": "3.0625rem"
    },
    fontFamily: {
      'sans': ['"Plus Jakarta Sans"', 'sans-serif'],
    },
    boxShadow: {
      "xs": "0px 1px 2px 0px rgba(10,13,18,0.05)",
      "sm": "0px 1px 2px 0px rgba(10,13,18,0.06), 0px 1px 3px 0px rgba(10,13,18,0.1)",
      "md": "0px 1px 2px 0px rgba(10,13,18,0.06), 0px 1px 3px 0px rgba(10,13,18,0.1)",
      "lg": "0px 4px 6px -2px rgba(10,13,18,0.03), 0px 12px 16px -4px rgba(10,13,18,0.08)",
      "xl": "0px 8px 8px -4px rgba(10,13,18,0.03), 0px 20px 24px -4px rgba(10,13,18,0.08)",
      "2xl": "0px 24px 48px -12px rgba(10,13,18,0.18)",
      "3xl": "0px 32px 64px -12px rgba(10,13,18,0.14)"
    },
    extend: {
      colors: {
        "primary": {
          "green-50": "#f8fee6",
          "green-100": "#e8fcb0",
          "green-200": "#ddfa8a",
          "green-300": "#cef854",
          "green-400": "#c5f733",
          "green-500": "#b6f500",
          "green-600": "#a6df00",
          "green-700": "#81ae00",
          "green-800": "#648700",
          "green-900": "#4c6700",
          "dark-green-50": "#e9f2ee",
          "dark-green-100": "#bad7ca",
          "dark-green-200": "#98c3b0",
          "dark-green-300": "#69a88c",
          "dark-green-400": "#4c9775",
          "dark-green-500": "#1f7d53",
          "dark-green-600": "#1c724c",
          "dark-green-700": "#16593b",
          "dark-green-800": "#11452e",
          "dark-green-900": "#0d3523",
        },
        "secondary": {
          "cream-50": "#fffffc",
          "cream-100": "#fffdf4",
          "cream-200": "#fffdef",
          "cream-300": "#fffce8",
          "cream-400": "#fffbe3",
          "cream-500": "#fffadc",
          "cream-600": "#e8e4c8",
          "cream-700": "#b5b29c",
          "cream-800": "#8c8a79",
          "cream-900": "#6b695c"
        },
        "info": {
          "50": "#eaf4ff",
          "100": "#beddfd",
          "200": "#9fccfd",
          "300": "#73b5fc",
          "400": "#58a6fb",
          "500": "#2e90fa",
          "600": "#2a83e4",
          "700": "#2166b2",
          "800": "#194f8a",
          "900": "#133c69"
        },
        "gray": {
          "50": "#f1f1f2",
          "100": "#d3d5d8",
          "200": "#bec0c5",
          "300": "#a0a3aa",
          "400": "#8d9199",
          "500": "#717680",
          "600": "#676b74",
          "700": "#50545b",
          "800": "#3e4146",
          "900": "#2f3236"
        },
        "error": {
          "50": "#feeceb",
          "100": "#fac5c1",
          "200": "#f8a9a3",
          "300": "#f5827a",
          "400": "#f36960",
          "500": "#f04438",
          "600": "#da3e33",
          "700": "#aa3028",
          "800": "#84251f",
          "900": "#651d18"
        },
        "warning": {
          "50": "#fef4e6",
          "100": "#fdddb3",
          "200": "#fbcc8e",
          "300": "#fab55a",
          "400": "#f9a63a",
          "500": "#f79009",
          "600": "#e18308",
          "700": "#af6606",
          "800": "#884f05",
          "900": "#683c04"
        },
        "success": {
          "50": "#e7f8f0",
          "100": "#b6e9d1",
          "200": "#92deba",
          "300": "#60cf9b",
          "400": "#41c588",
          "500": "#12b76a",
          "600": "#10a760",
          "700": "#0d824b",
          "800": "#0a653a",
          "900": "#084d2d"
        }
      },
    },
  },
  plugins: [],
}