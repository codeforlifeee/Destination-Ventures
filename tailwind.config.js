/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Header: prefers 'The Seasons' if provided, then Playfair Display as open alternative
        'season': ['"The Seasons"', '"Playfair Display"', 'serif'],
        // Subheading
        'poppins': ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // Body: prefers 'Canva Sans' if available, falls back to Inter/system
        'canva-sans': ['"Canva Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#1F4E8C',
        darkBlue: '#1A202C',
        orange: '#2B6CB0',
        teal: '#2F7FA3',
        lightGray: '#F7FAFC',
        accent: '#81E6D9',
      },
      transitionDuration: {
        400: '400ms',
      },
      scale: {
        120: '1.2',
      },
      rotate: {
        360: '360deg',
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          'from': {
            opacity: '0',
          },
          'to': {
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
}

