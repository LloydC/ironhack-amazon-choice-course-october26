import { fileURLToPath, URL } from 'node:url'
import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    {
      name: 'restaurants-json-api',
      configureServer(server) {
        server.middlewares.use('/api/restaurants', async (request, response, next) => {
          if (!['POST', 'PUT', 'DELETE'].includes(request.method)) {
            next()
            return
          }

          try {
            const dataPath = path.resolve(process.cwd(), 'src/data/restaurants.json')
            const restaurants = JSON.parse(await readFile(dataPath, 'utf8'))
            const requestId = request.url.split('/').filter(Boolean)[0]

            if (request.method === 'DELETE') {
              const id = Number(requestId)
              const restaurantIndex = restaurants.findIndex((item) => item.id === id)

              if (restaurantIndex === -1) {
                response.statusCode = 404
                response.setHeader('Content-Type', 'application/json')
                response.end(JSON.stringify({ error: 'Restaurant not found' }))
                return
              }

              const deletedRestaurant = restaurants.splice(restaurantIndex, 1)[0]
              await writeFile(dataPath, `${JSON.stringify(restaurants, null, 2)}\n`)
              response.statusCode = 200
              response.setHeader('Content-Type', 'application/json')
              response.end(JSON.stringify(deletedRestaurant))
              return
            }

            let body = ''
            for await (const chunk of request) {
              body += chunk
            }

            const restaurant = JSON.parse(body)
            const requiredFields = ['name', 'mark', 'hours', 'rating', 'status', 'color', 'logo', 'image']
            const missingField = requiredFields.find((field) => !String(restaurant[field] ?? '').trim())

            if (missingField) {
              response.statusCode = 400
              response.setHeader('Content-Type', 'application/json')
              response.end(JSON.stringify({ error: `Missing required field: ${missingField}` }))
              return
            }

            if (request.method === 'PUT') {
              const id = Number(requestId)
              const restaurantIndex = restaurants.findIndex((item) => item.id === id)

              if (restaurantIndex === -1) {
                response.statusCode = 404
                response.setHeader('Content-Type', 'application/json')
                response.end(JSON.stringify({ error: 'Restaurant not found' }))
                return
              }

              restaurants[restaurantIndex] = {
                id,
                name: restaurant.name.trim(),
                mark: restaurant.mark.trim(),
                hours: restaurant.hours.trim(),
                rating: restaurant.rating.trim(),
                status: restaurant.status,
                color: restaurant.color,
                logo: restaurant.logo.trim(),
                image: restaurant.image.trim(),
              }
            } else {
              const nextId = restaurants.reduce((highest, item) => Math.max(highest, Number(item.id) || 0), 0) + 1

              restaurants.push({
                id: nextId,
                name: restaurant.name.trim(),
                mark: restaurant.mark.trim(),
                hours: restaurant.hours.trim(),
                rating: restaurant.rating.trim(),
                status: restaurant.status,
                color: restaurant.color,
                logo: restaurant.logo.trim(),
                image: restaurant.image.trim(),
              })
            }

            await writeFile(dataPath, `${JSON.stringify(restaurants, null, 2)}\n`)
            response.statusCode = request.method === 'POST' ? 201 : 200
            response.setHeader('Content-Type', 'application/json')
            response.end(JSON.stringify(restaurants.at(-1)))
          } catch (error) {
            response.statusCode = 500
            response.setHeader('Content-Type', 'application/json')
            response.end(JSON.stringify({ error: error.message }))
          }
        })
      },
    },
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
