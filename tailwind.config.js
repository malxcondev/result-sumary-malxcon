/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          Lightred: 'hsl(0, 100%, 67%)',
          Lightredlight: 'hsla(0, 100%, 67%, 0.1);',
          Orangeyyellow: 'hsl(39, 100%, 56%)',
          Orangeyyellowlight: 'hsla(39, 100%, 56%, 0.1)',
          Greenteal: 'hsl(166, 100%, 37%)',
          Greenteallight: 'hsla(166, 100%, 37%, 0.1)',
          Cobaltblue: 'hsl(234, 85%, 45%)',
          Cobaltbluelight: 'hsla(234, 85%, 45%, 0.1)',
        },
        gradients: {
          Lightslateblue: "hsl(252, 100%, 67%)",
          Lightroyalblue: "hsl(241, 81%, 54%)",
        },
        neutral: {
          Paleblue: "hsl(221, 100%, 96%)",
          Lightlavender: "hsl(241, 100%, 89%)",
          Darkgrayblue: "hsl(224, 30%, 27%)",
        },
      },
    },
  },
  plugins: [],
}

