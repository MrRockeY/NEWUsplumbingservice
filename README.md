# Next.js with Netlify Deployment

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

This site is configured for deployment on Netlify:

1. Connect your repository to Netlify
2. Netlify will automatically detect it's a Next.js site
3. Build command: `npm run build`
4. Publish directory: `.next`

## Environment Variables

Required environment variables:

- `NEXT_PUBLIC_SITE_URL`: Your production URL
- `NETLIFY_NEXT_PLUGIN_SKIP`: "true"

## Notes

- Uses @netlify/plugin-nextjs for SSR support
- Includes client-side routing configuration
- API routes are handled via Netlify Functions
