const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: { type: String, required:true },
    start_year: { type: Number, required:true },
    season_count: { type: Number, required:true },
    characters: [{ //subdocument
        name: String,
        actor: String
    }]
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

module.exports = mongoose.model('Series', schema);