const mongoose = require ("mongoose");




const connectDatabase= () =>{
    try {
        mongoose.connect(process.env.DB_URL).then((data)=>{
            console.log(`mongoDB connected succesfully on server ${data.connection.host}`);
        })
    } catch (error) {
        console.log(error);
    }

}

module.exports =connectDatabase;

