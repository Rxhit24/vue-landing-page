export async function onRequest(context) {
    const userAgent = context.request.headers.get("User-Agent") || "";

    // List of bot patterns
    const botPatterns = [
        /Googlebot/i, /Bingbot/i, /DuckDuckBot/i, /Slurp/i,
        /Yahoo/i, /Yandex/i, /Baidu/i, /facebookexternalhit/i, /Twitterbot/i
    ];

    const isBot = botPatterns.some(pattern => pattern.test(userAgent));

    if (isBot) {
        // Redirect bots to prerendered pages
        const url = new URL(context.request.url);
        if(url.pathname == '/'){
            return context.env.ASSETS.fetch(`https://vue-landing-page.pages.dev/prerendered/index.html`);
        }
        return context.env.ASSETS.fetch(`https://vue-landing-page.pages.dev/prerendered${url.pathname}.html`);
    }

    // Serve Vue app normally
    return context.next();
}
