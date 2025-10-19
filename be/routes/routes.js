const express = require('express');
const router = express.Router();
const pool = require('../db');

// Lấy danh sách Vùng (Region)
router.get('/regions', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query('SELECT * FROM region ORDER BY region_id');
    connection.release();
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Lấy danh sách Khu vực (Area) theo Region ID
router.get('/areas/:regionId', async (req, res) => {
  try {
    const { regionId } = req.params;
    const connection = await pool.getConnection();
    const [rows] = await connection.query(
      'SELECT * FROM area WHERE region_id = ? ORDER BY area_id',
      [regionId]
    );
    connection.release();
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Lấy danh sách NPP theo Area ID
router.get('/npps/:areaId', async (req, res) => {
  try {
    const { areaId } = req.params;
    const connection = await pool.getConnection();
    const [rows] = await connection.query(
      'SELECT * FROM npp WHERE area_id = ? ORDER BY npp_id',
      [areaId]
    );
    connection.release();
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Lấy danh sách Route theo NPP ID
router.get('/routes/:nppId', async (req, res) => {
  try {
    const { nppId } = req.params;
    const connection = await pool.getConnection();
    const [rows] = await connection.query(
      'SELECT * FROM route WHERE npp_id = ? ORDER BY route_id',
      [nppId]
    );
    connection.release();
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;