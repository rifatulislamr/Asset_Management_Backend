const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize express app
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Create MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Your MySQL password
    database: 'asset_management' // Replace with your database name
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});


//This is test page.....
app.get('/', (req, res) => {
    console.log('this is my backend page');
    res.send('<h1>Welcome to the Home Page</h1><p>This is the home page of your Express.js app.</p>');
});



// Route to create a new asset
app.post('/api/assets', (req, res) => {
    const { asset_name, description, purchase_date, retired_date, status } = req.body;
    const query = `INSERT INTO assets (asset_name, description, purchase_date, status) VALUES (?, ?, ?, ?)`;
    db.query(query, [asset_name, description, purchase_date, retired_date, status], (err, result) => {
        if (err) throw err;
        res.send('Asset created successfully');
    });
});



// Route to get all assets
app.get('/api/assets', (req, res) => {
    const query = `SELECT * FROM assets`; // Adjust columns as necessary
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching assets:', err);
            return res.status(500).send('Internal Server Error');
        }
        res.json(results);
    });
});




// // Route to assign an asset to a location
// app.post('/api/assign', (req, res) => {
//     const { asset_id, location_id, transfer_date } = req.body;
//     const query = `INSERT INTO asset_location (asset_id, location_id, transfer_date) VALUES (?, ?, ?)`;
//     db.query(query, [asset_id, location_id, transfer_date], (err, result) => {
//         if (err) throw err;
//         res.send('Asset assigned to location');
//     });
// });

// // Route to transfer an asset
// app.post('/api/transfer', (req, res) => {
//     const { asset_id, new_location_id, transfer_date } = req.body;
//     const query = `UPDATE asset_location SET location_id = ?, transfer_date = ? WHERE asset_id = ?`;
//     db.query(query, [new_location_id, transfer_date, asset_id], (err, result) => {
//         if (err) throw err;
//         res.send('Asset transferred successfully');
//     });
// });

// // Route to retire an asset
// app.post('/api/retire', (req, res) => {
//     const { asset_id, retired_date } = req.body;
//     const query = `UPDATE assets SET retired_date = ?, status = 'retired' WHERE asset_id = ?`;
//     db.query(query, [retired_date, asset_id], (err, result) => {
//         if (err) throw err;
//         res.send('Asset retired');
//     });
// });

// // Route to get all assets with their current locations
// app.get('/api/assets', (req, res) => {
//     const query = `
//     SELECT a.asset_id, a.asset_name, a.description, a.status
//     FROM assets a
//     JOIN asset_location al ON a.asset_id = al.asset_id

//     `;
//     db.query(query, (err, results) => {
//         if (err) throw err;
//         res.json(results);
//     });
// });







// Start the server
app.listen(5000, () => {
    console.log('Backend server running on port 5000');
});





