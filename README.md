# Personal Portfolio v2

A modern, responsive personal portfolio built with React, Vite, and Tailwind CSS. Features a clean design with dark/light theme toggle and smooth animations.

## Features

- 🎨 Modern, responsive design
- 🌙 Dark/light theme toggle
- ✨ Smooth scrolling animations
- 📱 Mobile-friendly
- ⚡ Fast loading with Vite
- 🎯 Smooth scrolling navigation
- 🖼️ Project showcase with images
- 📧 Contact section with social links

## Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Animations**: CSS animations and transitions
- **Icons**: Custom SVG icons
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Personal-Porfolio-v2
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the Vite configuration and deploy

The project includes:
- `vercel.json` - Vercel configuration
- `.nvmrc` - Node.js version specification
- Optimized build configuration

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the contents of the `dist/` folder to your hosting provider

## Project Structure

```
src/
├── App.jsx              # Main application component
├── main.jsx             # Application entry point
├── index.css            # Global styles
├── ThemeContext.jsx     # Theme context provider
├── ThemeToggle.jsx      # Theme toggle component
└── VantaBackground.jsx  # Animated background component
```

## Customization

### Adding Projects

Edit the projects array in `src/App.jsx` to add or modify your projects.

### Changing Colors

Update the Tailwind configuration in `tailwind.config.js` to customize the color scheme.

### Modifying Content

Update the content in `src/App.jsx` to personalize your portfolio.

## Troubleshooting

### Vercel Deployment Issues

If you encounter build errors on Vercel:

1. Ensure Node.js version is 18 or higher
2. Check that all dependencies are properly installed
3. Verify the `vercel.json` configuration
4. Check the build logs for specific error messages

### Local Development Issues

1. Clear node_modules and reinstall: `rm -rf node_modules && npm install`
2. Clear Vite cache: `npm run build -- --force`
3. Check for port conflicts if the dev server won't start

## License

This project is open source and available under the [MIT License](LICENSE).
