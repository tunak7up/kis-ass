const { sequelize, Route, Npp, Area, Region } = require('../sequelize');

async function getAllRoutes() {
  return await Route.findAll({
    include: [
      {
        model: Npp,
        attributes: ['npp_name'],
        include: {
          model: Area,
          attributes: ['area_name'],
          include: {
            model: Region,
            attributes: ['region_name']
          }
        }
      }
    ],
    attributes: ['route_name'],
    order: [
      [sequelize.col('npp->area->region.region_name'), 'ASC'],
      [sequelize.col('npp->area.area_name'), 'ASC'],
      [sequelize.col('npp.npp_name'), 'ASC'],
      ['route_name', 'ASC']
    ]
  });
}

module.exports = { getAllRoutes };
