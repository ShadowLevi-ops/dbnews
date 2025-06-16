# Double Bay Newsagency Website

A modern, responsive website for Double Bay Newsagency featuring a comprehensive catalog system and service directory.

## 🌟 Features

- **Modern Design**: Clean, minimalistic design with orange and purple accent colors
- **Interactive Catalog System**: Detailed product catalogs for all service categories
- **Responsive Layout**: Mobile-first design that works on all devices
- **Service Categories**:
  - Magazines & Newspapers
  - Cards & Wraps
  - Stationery
  - Gifts
  - Lotto & OPAL Cards
  - Printing Services
- **Local Business Directory**: Showcase of nearby businesses
- **Contact Information**: Complete business details and hours

## 🚀 Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Static Export** - Optimized for Netlify deployment

## 📦 Project Structure

```
src/
├── app/
│   ├── catalog/[category]/    # Dynamic catalog pages
│   ├── services/              # Services overview
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Homepage
└── components/
    ├── Navbar.tsx            # Navigation component
    └── Footer.tsx            # Footer component
```

## 🛠️ Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**: Navigate to `http://localhost:3000`

## 🌐 Deployment to Netlify

### Option 1: Direct Deployment (Recommended)

1. **Build the project locally**:
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**:
   - Go to [Netlify](https://netlify.com)
   - Drag and drop the `out` folder to deploy
   - Or connect your Git repository for automatic deployments

### Option 2: Git-based Deployment

1. **Push to GitHub/GitLab**:
   ```bash
   git remote add origin <your-repo-url>
   git push -u origin master
   ```

2. **Connect to Netlify**:
   - Link your repository in Netlify dashboard
   - Build settings are automatically configured via `netlify.toml`

## ⚙️ Build Configuration

The project includes:

- **netlify.toml**: Netlify deployment configuration
- **Static Export**: Next.js configured for static generation
- **SEO Optimized**: Meta tags and structured content
- **Performance**: Optimized images and assets

## 📧 Contact Information

**Double Bay Newsagency**
- Address: 390 New South Head Road, Double Bay NSW 2028
- Phone: (02) 93273222
- Email: doublebaynews@gmail.com
- Fax: (02) 93272228

**Business Hours**:
- Monday-Saturday: 6AM-5PM
- Sunday: 7AM-2PM

## 📄 License

This project is built for Double Bay Newsagency. All rights reserved.

---

Built with ❤️ using Next.js and Tailwind CSS
