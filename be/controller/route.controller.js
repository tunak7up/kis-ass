const routeService = require('../service/route.service');

async function getAllRoutes(req, res) {
  try {
    const data = await routeService.getAllRoutes();
    const result = data.map(rt => ({
      Miền: rt.npp.area.region.region_name,
      'Khu vực': rt.npp.area.area_name,
      'Nhà phân phối': rt.npp.npp_name,
      'Tuyến bán hàng': rt.route_name
    }));
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { getAllRoutes };
