const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('sale', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql'
});

const Region = require('./models/region')(sequelize, DataTypes);
const Area = require('./models/area')(sequelize, DataTypes);
const Npp = require('./models/npp')(sequelize, DataTypes);
const Route = require('./models/route')(sequelize, DataTypes);

// Định nghĩa quan hệ
Region.hasMany(Area, { foreignKey: 'region_id' });
Area.belongsTo(Region, { foreignKey: 'region_id' });

Area.hasMany(Npp, { foreignKey: 'area_id' });
Npp.belongsTo(Area, { foreignKey: 'area_id' });

Npp.hasMany(Route, { foreignKey: 'npp_id' });
Route.belongsTo(Npp, { foreignKey: 'npp_id' });

module.exports = { sequelize, Region, Area, Npp, Route };
