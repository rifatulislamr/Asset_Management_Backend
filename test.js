// const express = require('express');
// const mysql = require('mysql2');
// const bodyParser = require('body-parser');
// require('dotenv').config();

// const app = express();
// const port = 5000;

// // Middleware to parse JSON data
// app.use(bodyParser.json());

// // Database connection
// const pool = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
// });

// const db = pool.promise();


// //This is test page.....
// app.get('/', (req, res) => {
//     console.log('this is my backend page');
//     res.send('<h1>Welcome to the Home Page</h1><p>This is the home page of your Express.js app.</p>');
// });



// // // Route to create a new asset
// // app.post('/api/assets', (req, res) => {
// //     const { asset_name, description, purchase_date, status } = req.body;
// //     const query = `INSERT INTO assets (asset_name, description, purchase_date, status) VALUES (?, ?, ?, ?)`;
// //     db.query(query, [asset_name, description, purchase_date, status], (err, result) => {
// //         if (err) throw err;
// //         res.send('Asset created successfully');
// //     });
// // });



// // Route to create a new asset
// app.post('/api/assets', (req, res) => {
//     const { asset_name, description, purchase_date, status } = req.body;

//     // Prepare the SQL query
//     const query = `INSERT INTO assets (asset_name, description, purchase_date, status) VALUES (?, ?, ?, ?)`;

//     // Execute the query
//     db.query(query, [asset_name, description, purchase_date, status], (err, result) => {
//         if (err) {
//             // Handle the error and send an appropriate response
//             return res.status(500).json({
//                 error: 'Failed to create asset',
//                 details: err.message,
//             });
//         }

//         // Send a successful response with the created asset ID
//         res.status(201).json({
//             message: 'Asset created successfully',
//             assetId: result.insertId,
//         });
//     });
// });




// // // Create a new asset
// // app.post('/api/assets', async (req, res) => {
// //     const { asset_name, description, purchase_date } = req.body;
// //     try {
// //         const [result] = await db.execute(
// //             'INSERT INTO assets (asset_name, description, purchase_date, status) VALUES (?, ?, ?, ?)',
// //             [asset_name, description, purchase_date, 'active']
// //         );
// //         res.status(201).json({ message: 'Asset created successfully', assetId: result.insertId });
// //     } catch (err) {
// //         res.status(500).json({ error: 'Failed to create asset', details: err.message });
// //     }
// // });

// // Get all assets
// app.get('/api/assets', async (req, res) => {
//     try {
//         const [rows] = await db.execute('SELECT * FROM assets');
//         res.status(200).json(rows);
//     } catch (err) {
//         res.status(500).json({ error: 'Failed to retrieve assets', details: err.message });
//     }
// });

// // Transfer asset to another location
// app.post('/api/assets/transfer', async (req, res) => {
//     const { asset_id, location_id, transfer_date } = req.body;
//     try {
//         await db.execute(
//             'INSERT INTO asset_location (asset_id, location_id, transfer_date) VALUES (?, ?, ?)',
//             [asset_id, location_id, transfer_date]
//         );
//         res.status(200).json({ message: 'Asset transferred successfully' });
//     } catch (err) {
//         res.status(500).json({ error: 'Failed to transfer asset', details: err.message });
//     }
// });

// // Retire an asset
// app.put('/api/assets/retire/:id', async (req, res) => {
//     const { id } = req.params;
//     const { retired_date } = req.body;
//     try {
//         await db.execute(
//             'UPDATE assets SET retired_date = ?, status = ? WHERE asset_id = ?',
//             [retired_date, 'retired', id]
//         );
//         res.status(200).json({ message: 'Asset retired successfully' });
//     } catch (err) {
//         res.status(500).json({ error: 'Failed to retire asset', details: err.message });
//     }
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
// });




// const express = require('express');
// const mysql = require('mysql2');
// const bodyParser = require('body-parser');
// const cors = require('cors'); // Import the cors package
// require('dotenv').config();

// const app = express();
// const port = 5000;

// // Middleware to parse JSON data
// // app.use(bodyParser.json());

// app.use(cors({ origin: 'http://localhost:3000' })); // Replace with your allowed origin

// // Enable CORS for all routes
// app.use(cors()); // This will allow all origins. You can configure it as needed.

// // Database connection
// const pool = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
// });

// const db = pool.promise();

// // This is test page.....
// app.get('/', (req, res) => {
//     console.log('this is my backend page');
//     res.send('<h1>Welcome to the Home Page</h1><p>This is the home page of your Express.js app.</p>');
// });

// // Route to create a new asset
// app.post('/api/assets', (req, res) => {
//     const { asset_name, description, purchase_date, status } = req.body;

//     // Prepare the SQL query
//     const query = `INSERT INTO assets (asset_name, description, purchase_date, status) VALUES (?, ?, ?, ?)`;

//     // Execute the query
//     db.query(query, [asset_name, description, purchase_date, status], (err, result) => {
//         if (err) {
//             // Handle the error and send an appropriate response
//             return res.status(500).json({
//                 error: 'Failed to create asset',
//                 details: err.message,
//             });
//         }

//         // Send a successful response with the created asset ID
//         res.status(201).json({
//             message: 'Asset created successfully',
//             assetId: result.insertId,
//         });
//     });
// });

// // Get all assets
// app.get('/api/assets', async (req, res) => {
//     try {
//         const [rows] = await db.execute('SELECT * FROM assets');
//         res.status(200).json(rows);
//     } catch (err) {
//         res.status(500).json({ error: 'Failed to retrieve assets', details: err.message });
//     }
// });

// // Transfer asset to another location
// app.post('/api/assets/transfer', async (req, res) => {
//     const { asset_id, location_id, transfer_date } = req.body;
//     try {
//         await db.execute(
//             'INSERT INTO asset_location (asset_id, location_id, transfer_date) VALUES (?, ?, ?)',
//             [asset_id, location_id, transfer_date]
//         );
//         res.status(200).json({ message: 'Asset transferred successfully' });
//     } catch (err) {
//         res.status(500).json({ error: 'Failed to transfer asset', details: err.message });
//     }
// });

// // Retire an asset
// app.put('/api/assets/retire/:id', async (req, res) => {
//     const { id } = req.params;
//     const { retired_date } = req.body;
//     try {
//         await db.execute(
//             'UPDATE assets SET retired_date = ?, status = ? WHERE asset_id = ?',
//             [retired_date, 'retired', id]
//         );
//         res.status(200).json({ message: 'Asset retired successfully' });
//     } catch (err) {
//         res.status(500).json({ error: 'Failed to retire asset', details: err.message });
//     }
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
// });
