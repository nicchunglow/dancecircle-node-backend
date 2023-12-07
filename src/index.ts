// index.ts
import 'dotenv'
import sequelize from '@/src/utils/db'
import app from '@/src/app'

const PORT = process.env.PORT || 3000 || 3001

sequelize
  .sync()
  .then(() => {
    console.log('Database synchronized')
  })
  .catch((error) => {
    console.error('Error synchronizing database:', error)
  })

sequelize
  .authenticate()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on PORT http://localhost:${PORT}`)
    })
  })
  .catch((error) => {
    console.error('Unable to connect to the database: ', error)
  })
