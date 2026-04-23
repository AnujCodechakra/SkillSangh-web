const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Mock data for the notice board - in a real app, this might come from a database
const notices = [
    { id: 1, title: 'Welcome to SkillSangh', content: 'Standard welcome protocols initiated. Explore our latest engineering clusters.', date: '2024-04-22', priority: 'low', category: 'System' },
    { id: 2, title: 'Upcoming Workshop', content: 'Join our Node.js masterclass focusing on high-concurrency patterns.', date: '2024-04-25', priority: 'medium', category: 'Event' },
    { id: 3, title: 'System Maintenance', content: 'Brief database migration scheduled for Sunday 02:00 UTC.', date: '2024-04-28', priority: 'high', category: 'Maintenance' },
    { id: 4, title: 'Hackathon v2.0 Announced', content: 'Gear up for our next major challenge focusing on Distributed Systems.', date: '2024-05-02', priority: 'medium', category: 'Event' },
    { id: 5, title: 'New API Documentation', content: 'Public API v2.1 docs have been updated with new telemetry endpoints.', date: '2024-05-05', priority: 'low', category: 'Docs' },
    { id: 6, title: 'Security Audit Success', content: 'Zero critical vulnerabilities found in the latest penetration testing cycle.', date: '2024-05-10', priority: 'low', category: 'Security' }
];

// Middleware to serve static files from both the root and 'public' folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname));

/**
 * API route to fetch all notices
 */
app.get('/api/notices', (req, res) => {
    res.json(notices);
});

// Basic error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
    console.log(`Notice Board server running at http://localhost:${port}`);
});