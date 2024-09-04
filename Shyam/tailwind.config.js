/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    // Add paths to your files here
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(0deg, rgba(2,21,38,1) 0%, rgba(19,33,58,1) 100%)',
      },
      fontFamily: {
        fontt: ['"JetBrains Mono"', 'monospace'],
        fontt2: ['Arial', 'monospace'],
        fontt3: ['"Space Grotesk"', 'monospace'],
      },
      keyframes: {
        bounceSmall: {
          // '0%, 100%': { transform: 'translateY(0px)' },
          // '50%': { transform: 'translateY(-5px)' },
          // '0%': { transform: 'translateY(0)' },
          // '50%': { transform: 'translateY(5px)' }, // Adjusted to move only 5px vertically
          // '100%': { transform: 'translateY(0)' } 
        }
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite', // Example of slower bounce
        'bounce-fast': 'bounce 0.5s infinite', // Example of faster bounce
        'spin-slow': 'spin 3s linear infinite',
      },
      backgroundImage: {
        'slash': "url('Shyam/src/components/assets/bg.png')",
      },
    },
  },
  plugins: [],
};