const path = require('path');
const connection = require(path.resolve(__dirname, '../','../','sql','sql.service')).connection;


module.exports.getPlayerData = (steamData,steamid32)=>{

    return new Promise((resolve,reject)=>{

    // TODO: Move to model
    connection.query(
        `SELECT * FROM cc_players WHERE steamid = "${steamid32}";
        SELECT id,RPName, Model,LastOnline,Money,CID,Loan,LoyalistPoints,Date, Title FROM cc_chars WHERE SteamID = "${steamid32}"`,
        function(err, results, fields) {

            if(err){

                reject(err);

            }
        
          if(results && results.length > 0){
    
            let characters_data = results[1];
            let player_obj = {
      
              steamData: steamData,
              playerData : results[0][0],
              charactersData : characters_data
              
            };
    
            resolve( player_obj );
      
            
          }

        }

    )

    })



}

module.exports.getStaffData = (steamData,steamid32)=>{

  return new Promise((resolve,reject)=>{

  // TODO: Move to model
  connection.query(
      `SELECT * FROM cc_administrators WHERE steamid = "${steamid32}";`,
      function(err, results, fields) {

          if(err){

              reject(err);

          }
      
        if(results && results.length > 0){

          results = results[0];

          let objToReturn = {data:{"LVL":results.LVL,"ADate":results.ADate, "Alias":results.Alias}};
  
          resolve( objToReturn );

        }else{

          resolve( {data:null } );

        }

      }

  )

  })



}