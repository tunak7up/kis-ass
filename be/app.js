const express = require('express');
const mysql = require('mysql2');
const port = 3000;
const app = express();
const fs = require('fs');
const db = mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    database: 'sale',
    password: '123456'
});
db.connect((err) => {
    if(err) {
        console.error('connection failed', err); 
        return; 
    }
    console.log('Database connected');
});
app.listen(port, () => {
    console.log(`Connected to port ${port}`);
});

app.get('/region', (req, res) => {
    const sql = `
    SELECT
    r.region_name     AS "Miền",
    a.area_name       AS "Khu vực",
    n.npp_name        AS "Nhà phân phối",
    rt.route_name     AS "Tuyến bán hàng"
FROM route rt
JOIN npp n   ON rt.npp_id = n.npp_id
JOIN area a  ON n.area_id = a.area_id
JOIN region r ON a.region_id = r.region_id
ORDER BY r.region_name, a.area_name, n.npp_name, rt.route_name;
`;
    db.query(sql, (err, results) => {
        if(err) { 
        console.error('Khong fetch duoc api', err); 
        return;
    }
    // res.json(results);
    
    res.json(results);
    });    
}); 