import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    server: {
        port: 8000, // default: 3000
        host: '0.0.0.0' // default: localhost
    }
    // other configs
})
