# VueJs project with npm pacakges such as   
- `vue-router`  to achieve routes  
- `@unhead/vue` to achieve dynamic meta properties


# Steps
## 1️⃣ Use Puppeteer to Pre-Render Vue Pages ##
- Since Apache serves only static files, we must generate pre-rendered HTML files at build time.

- Step 1: Install Puppeteer

- Step 2: Run a Pre-Rendering Script (prerender.js)
    - In `prerender.js` define all the routes that need to be prerendered eg:  `const PAGES = ["/", "/about", "/contact"];`

- Step 3: Run the Pre-Rendering Script
    Start the Vue App Locally

    `sh npm run build `

    `sh npm run dev` - Or, if you’re already running it on localhost:5173, skip this step.

    (Note: Vite Build generates a build files inside dist folder)

    Generate Pre-Rendered Pages

    ` sh node prerender.js`

    This creates a prerendered/ folder containing pre-rendered pages (index.html, about.html, etc.).

## 2️⃣ Deploy Pre-Rendered Pages to Apache ##
Upload the dist/ folder to your Apache server next to your Vue prerendered/ folder.

Your server structure should look like this:

    /var/www/html/
    ├── dist/           (vue app)
    ├── prerendered/    (Pre-rendered pages)
    ├── .htaccess       (Apache config)

## 3️⃣ Configure Apache to Serve Pre-Rendered Pages to Bots ##
Modify or create a `.htaccess` file in `/var/www/html/:`

*apache*

*# Since Vite Build generates a build files inside dist folder #*

    # Redirect search engine bots to pre-rendered pages
    RewriteEngine On

    # List of search engine bots
    RewriteCond %{HTTP_USER_AGENT} (Googlebot|Bingbot|DuckDuckBot|YandexBot|Twitterbot|FacebookExternalHit) [NC]
    RewriteCond %{DOCUMENT_ROOT}/prerendered%{REQUEST_URI}.html -f
    RewriteRule ^(.*)$ /prerendered/$1.html [L]

    # Serve Vue app normally for users
    RewriteCond %{DOCUMENT_ROOT}/dist%{REQUEST_URI} -f
    RewriteRule ^(.*)$ /dist/$1 [L]

    # Default to Vue index.html (SPA behavior)
    RewriteRule ^ index.html [L]

    ✅ How It Works
    If a search engine bot (Googlebot, Bingbot, etc.) visits /about, Apache serves /prerendered/about.html (pre-rendered).
    If a user visits /about, Apache serves /dist/index.html (Vue SPA).
    If the requested page doesn't exist, Apache defaults to Vue's index.html.

## 4️⃣ Verify SEO ##
- Test Locally
    Visit your site normally:
    http://yourdomain.com/about should load the Vue app.

- *Simulate Googlebot:*

    `sh curl -A "Googlebot" http://yourdomain.com/about`

    It should return the pre-rendered HTML.

Google Tests

    - Google Mobile-Friendly Test:
        👉 https://search.google.com/test/mobile-friendly
    - Google Search Console (URL Inspection):
        👉 https://search.google.com/search-console