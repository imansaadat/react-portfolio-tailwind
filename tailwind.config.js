/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm:"480px",
      md:"768px",
      lg:"992px",
      xl:"1280px",
    },
    extend: {
      fontFamily:{
        raleway: ["Raleway","sans-serif"]
      },
      colors:{
        primaryColor : '#0a192f',
        textColor: '#8892b0',
        pinkColor: '#db2777',
        whiteColor: '#fff',
        blueColor: '#2563eb',
        darkColor: '#333333',
        greenColor: '#6fc2b0',
        grayColor: '#565f69',
      },
      boxShadow: {
        primaryShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        shadowInput : '0 0 10px #8892b0'
      },
    },
  },
  plugins: [],
}