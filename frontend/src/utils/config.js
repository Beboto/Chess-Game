const LocalURL = "http://localhost:8000";
// const ProductionURL = "https://chess-game-bslt.onrender.com";
const ProductionURL = "https://chess-game-api.vercel.app";

const BackendURL = process.env.NODE_ENV === 'production' ? ProductionURL : LocalURL;

export default BackendURL;