import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema({
    player1: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },  // Player 1's ID
    player2: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },  // Player 2's ID
    
    boardState: { 
        type: String, 
        default: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1" 
    },
    currentPlayer: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true  // Indicates whose turn it is
    },
    
    status: { 
        type: String, 
        enum: ['waiting', 'ongoing', 'finished'], 
        default: 'waiting' 
    },

    winner: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        default: null  // Winner (null if no winner yet)
    },
    timers: {
        player1: { type: Number, required: true },  // Timer for Player 1
        player2: { type: Number, required: true },  // Timer for Player 2
    }
});

const Game = mongoose.model('Game', gameSchema);  // Create Game model from schema
export default Game;