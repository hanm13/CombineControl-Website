const SteamID = require('steamid');
const player_data_model = require('./player_data.model');

module.exports.getPlayerData = async (req, res) => {

    if(!req.user && !req.user._json){ return };
  
    const sid = new SteamID(req.user._json.steamid);
    const steamid32 = sid.getSteam2RenderedID();


    const player_data = await player_data_model.getPlayerData(req.user._json,steamid32);

    res.send(JSON.stringify(player_data));
  
}

module.exports.getStaffLevel = async (req, res) => {

    if(!req.user && !req.user._json){ return };
  
    const sid = new SteamID(req.user._json.steamid);
    const steamid32 = sid.getSteam2RenderedID();


    const staffData = await player_data_model.getStaffData(req.user._json,steamid32);

    res.send(JSON.stringify(staffData));
  
}
