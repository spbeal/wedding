# Wedding Website

A beautiful, modern wedding website built with React, TypeScript, and Material-UI (MUI).

## Features

- 🎨 Modern, responsive design with Material-UI
- 📸 Photo gallery section
- 📅 Interactive wedding schedule timeline
- 🍽️ Menu display
- ✉️ RSVP section with email link
- 📱 Fully responsive for all devices

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Yarn

### Installation

1. Install dependencies:
```bash
yarn install
```

2. Start the development server:
```bash
yarn dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
yarn build
```

The built files will be in the `dist` directory.

## Customization

### Update Wedding Details

1. **Names and Date**: Edit `src/components/Hero.tsx`
   - Change "John & Jane" to your names
   - Update the wedding date
   - Modify the location text

2. **Schedule**: Edit `src/components/Schedule.tsx`
   - Update the `scheduleItems` array with your timeline

3. **Menu**: Edit `src/components/Menu.tsx`
   - Update the `menuCategories` array with your menu items

4. **RSVP Email**: Edit `src/components/RSVP.tsx`
   - Replace `your-email@example.com` with your actual email address
   - Update the RSVP deadline date

5. **Theme Colors**: Edit `src/App.tsx`
   - Modify the theme palette colors to match your wedding colors

### Adding Images

1. Add your images to the `src/assets/images/` folder
2. Name them:
   - `photo1.jpg`
   - `photo2.jpg`
   - `photo3.jpg`
   - etc.

The website will automatically display up to 6 images. You can add more by:
1. Adding the image file to `src/assets/images/`
2. Importing it in `src/components/Photos.tsx`
3. Adding it to the `photoPaths` array

## Deploying to GitHub Pages

### Automatic Deployment (Recommended)

1. Push your code to a GitHub repository
2. Go to your repository Settings → Pages
3. Under "Source", select "GitHub Actions"
4. The workflow (`.github/workflows/deploy.yml`) will automatically deploy when you push to the `main` branch

### Manual Deployment

1. Build the project:
```bash
yarn build
```

2. The `dist` folder contains the static files
3. Follow GitHub Pages instructions to deploy the `dist` folder

**Note**: Make sure your repository name matches the `base` path in `vite.config.ts`. If your repo is named `wedding`, the base is already set correctly. If it's different, update the `base` property in `vite.config.ts`.

## Project Structure

```
wedding/
├── src/
│   ├── assets/
│   │   └── images/      # Add your wedding photos here
│   ├── components/
│   │   ├── Hero.tsx     # Hero section with names and date
│   │   ├── NavBar.tsx   # Navigation bar
│   │   ├── Photos.tsx   # Photo gallery
│   │   ├── Schedule.tsx # Wedding timeline
│   │   ├── Menu.tsx     # Menu display
│   │   ├── RSVP.tsx     # RSVP section
│   │   └── Footer.tsx   # Footer
│   ├── App.tsx          # Main app component with theme
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── .github/
│   └── workflows/
│       └── deploy.yml   # GitHub Actions deployment
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── yarn.lock
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Material-UI (MUI)** - Component library and theming
- **Vite** - Build tool and dev server
- **GitHub Actions** - CI/CD for deployment

## License

This project is for personal use.