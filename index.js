// import express from "express";
// import { Client } from "@gradio/client";

// const app = express();
// const serverless = require("serverless-http");
// const router = express.Router();
// const port = 3000;

// router.get("/connect", async (req, res) => {
//     try {
//         const clientId = req.query.clientId;

//         if (!clientId) {
//             return res.status(400).json({ error: "Client ID is required!" });
//         }

//         const client = await Client.connect(clientId);

//         const input = req.query.input || "Hello from Node.js!";
//         const predictionResponse = await client.predict(0, [input]);

//         res.json({
//             success: true,
//             clientId: clientId,
//             input: input,
//             predictionResponse: predictionResponse,
//         });
//     } catch (error) {
//         console.error("Error connecting to Gradio client:", error);
//         res.status(500).json({
//             success: false,
//             error: error.message,
//         });
//     }
// });

// app.use("/.netlify/functions/app", router);
// module.exports.handler = serverless(app);


const express = require('express');
const app = express();
const PORT = 4000;

app.get('/home', (req, res) => {
    res.status(200).json('Welcome, your app is working well');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app;