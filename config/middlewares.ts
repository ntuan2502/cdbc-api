export default [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "script-src": [
            "https://cdn.ckeditor.com",
            "https://cdbc-api.onrender.com",
            "https://api.tun.io.vn",
          ],
          "connect-src": ["https://proxy-event.ckeditor.com"],
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
