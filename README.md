# Luxury RSVP

A beautiful RSVP invitation web app built with Next.js, Tailwind CSS, and custom fonts.

## Features
- Elegant invitation homepage with gold-accented fonts
- RSVP form page
- Responsive and mobile-friendly design

## Setup Instructions

### 1. Clone the Repository
```
git clone <your-repo-url>
cd luxury-rsvp
```

### 2. Install Dependencies
Using pnpm (recommended):
```
pnpm install --legacy-peer-deps
```
Or with npm:
```
npm install --legacy-peer-deps
```
Or with yarn:
```
yarn install
```

### 3. Run the Development Server
```
pnpm dev
```
Or:
```
npm run dev
```
Or:
```
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

### 4. Build for Production
```
pnpm build
```
Or:
```
npm run build
```
Or:
```
yarn build
```

### 5. Start the Production Server
```
pnpm start
```
Or:
```
npm start
```
Or:
```
yarn start
```

## Customization
- Edit `app/page.tsx` for the invitation homepage.
- Edit `app/rsvp/page.tsx` and `rsvp-form.js` for the RSVP form.
- Fonts are loaded via Google Fonts in `app/layout.tsx`.
- Styles are managed with Tailwind CSS (`tailwind.config.ts`).

## License
MIT
