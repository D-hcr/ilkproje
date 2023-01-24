// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    css: ["bootstrap/dist/css/bootstrap.min.css"], // add
    vite: {
      define: {
        "process.env.DEBUG": false,
      },
    },
    app: {
        head: {
          script: [
            {
              src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",
              type: "text/javascript",
            },
           
          ],
        },
      },
})
