const express = require('express');
const cors = require('cors');
const { sequelize } = require('./sequelize');
const routeRouter = require('./router/route.router');

const app = express();
app.use(cors());
app.use(express.json());

// dùng router
app.use('/api/routes', routeRouter);

sequelize.authenticate()
  .then(() => console.log('✅ DB connected'))
  .catch(err => console.error('❌ DB connection error:', err));

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
