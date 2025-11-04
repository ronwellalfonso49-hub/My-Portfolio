# Deployment Guide

This guide will help you deploy your personal portfolio to Netlify or Vercel.

## Prerequisites

- GitHub account
- Netlify account (for Netlify deployment)
- Vercel account (for Vercel deployment)

## Option 1: Deploy to Netlify

### Method 1: Drag and Drop (Quickest)

1. Build your project:
   ```bash
   npm run build
   ```

2. Go to [Netlify](https://netlify.com) and sign in
3. Drag and drop the `dist` folder to the deploy area
4. Your site will be live with a random URL
5. You can customize the URL in Site Settings

### Method 2: Git Integration (Recommended)

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com) and sign in
3. Click "New site from Git"
4. Connect your GitHub account and select your repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Method 3: Netlify CLI

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Login to Netlify:
   ```bash
   netlify login
   ```

3. Deploy:
   ```bash
   netlify deploy --prod --dir=dist
   ```

## Option 2: Deploy to Vercel

### Method 1: Git Integration (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and sign in
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite configuration
6. Click "Deploy"

### Method 2: Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel --prod
   ```

## Custom Domain (Optional)

### For Netlify:
1. Go to Site Settings > Domain Management
2. Add your custom domain
3. Configure DNS settings as instructed

### For Vercel:
1. Go to Project Settings > Domains
2. Add your custom domain
3. Configure DNS settings as instructed

## Environment Variables

If you need environment variables:

### Netlify:
1. Go to Site Settings > Environment Variables
2. Add your variables

### Vercel:
1. Go to Project Settings > Environment Variables
2. Add your variables

## Performance Optimization

Both platforms offer excellent performance out of the box, but you can optimize further:

1. **Image Optimization**: Use WebP format and lazy loading
2. **Code Splitting**: Already implemented with Vite
3. **CDN**: Both platforms provide global CDN
4. **Caching**: Configure proper cache headers

## Monitoring

- **Netlify**: Built-in analytics and form handling
- **Vercel**: Built-in analytics and performance monitoring

## Troubleshooting

### Common Issues:

1. **Build Fails**: Check your build command and dependencies
2. **404 on Refresh**: Ensure redirect rules are configured
3. **Slow Loading**: Optimize images and check bundle size

### Support:

- [Netlify Documentation](https://docs.netlify.com/)
- [Vercel Documentation](https://vercel.com/docs)

## Security

- Use HTTPS (enabled by default)
- Keep dependencies updated
- Use environment variables for sensitive data
- Enable security headers

## Backup

- Keep your code in version control (GitHub)
- Regular backups of your content
- Document your deployment process

