[![Netlify Status](https://api.netlify.com/api/v1/badges/f22b221c-d838-4c3a-a3dc-778685397372/deploy-status)](https://app.netlify.com/sites/maximerichard/deploys)

## todo

readme
meta de partage
redirect https://github.com/kentcdodds/kentcdodds.com/blob/master/static/_redirects https://docs.netlify.com/routing/redirects/
404 page  
accessibilite  
projects  
blog/writing  
api share web.dev  
webmention https://css-tricks.com/ jumping-into-webmentions-with-nextjs-or-not/  
notes  
flux rss
multiple theme

## Notes

-   start de base + suivre tuto tailwind sur leur site
-   tailwind css avec autoprefixer + cssnano
-   Voir les differnts plugins
-   Revoir ses SVG https://jakearchibald.github.io/svgomg/ (reduire le poids + clean)
-   json+ld, validateur https://search.google.com/structured-data/testing-tool/u/0/, https://search.google.com/test/rich-results
-   card preview https://cards-dev.twitter.com/validator, https://metatags.io/, https://developers.facebook.com/tools/debug/
-   web.manifest, pwa, https://web.dev/add-manifest/
-   https://browserl.ist/, https://www.gatsbyjs.org/docs/browser-support/#specify-what-browsers-your-project-supports-using-browserslist
-   improve images https://imgbot.net/, https://www.remove.bg/
-   static form https://www.staticforms.xyz/ vs netlify forms
-   https://responsively.app/ multiple view design
-   publier rapidement pour tester et commencer le referencement
-   check dns https://toolbox.googleapps.com/apps/dig/#NS/maximerichard.dev
    -   maximerichard.dev. 0 A 104.198.14.52
    -   www.maximerichard.dev. 0 CNAME maximerichard.dev.
    -   dig +nocmd +noall +answer maximerichard.dev A @dns109.ovh.net
    -   dig +nocmd +noall +answer www.maximerichard.dev A @dns109.ovh.net
    -   google-site-verification dans ovh
