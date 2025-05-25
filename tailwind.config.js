module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 4s linear infinite',
        'spin-fast': 'spin 0.8s linear infinite',
      },
    },
  },
  plugins: [],
};
