import express from 'express'  
const app = express() 
app.use(express.static( 'public'))  
app.listen( process.env.PORT, () => console.log("Express is Live."))