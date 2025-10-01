# 🌤️ Weather Finder

A modern weather app built with React, TypeScript, and Vite. Features dynamic backgrounds that change based on weather conditions and responsive design for all devices.

## ✨ Features

- 🎨 **Dynamic backgrounds** - UI adapts to current weather conditions
- 📱 **Fully responsive** - works perfectly on desktop, tablet, and mobile
- ⚡ **Fast & modern** - built with Vite for optimal performance
- 🌐 **Real-time data** - powered by OpenWeatherMap API
- 🎭 **Smooth animations** - glassmorphism effects and transitions

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Create .env file and add your API key
VITE_WEATHER_API_KEY=your_openweathermap_api_key

# Run dev server
npm run dev
```

Get your free API key at [OpenWeatherMap](https://openweathermap.org/api)

## 🛠️ Tech Stack

- React 18 + TypeScript
- Vite
- React Router
- Ant Design
- CSS Modules
- OpenWeatherMap API

## 📦 Project Structure

```
src/
├── components/
│   ├── Home.tsx          # Search page
│   └── Weather.tsx       # Weather details
├── styles/
│   ├── home.module.css
│   └── weather.module.css
└── utils/
    └── weatherApi.ts     # API functions
```

## 🎨 Weather Themes

Background gradients change based on conditions:

- ☀️ Clear - warm yellow-orange
- ☁️ Cloudy - soft blue
- 🌧️ Rain - deep blue
- ⛈️ Thunderstorm - dark grey
- ❄️ Snow - cold white-grey
- 🌫️ Fog/Mist - muted grey

## 🔧 Available Scripts

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Lint code
```

## 📝 License

MIT
