const mongoose = require('mongoose');

async function main(){
	try{
		mongoose.set('strictQuery', true);
		await mongoose.connect(`mongodb+srv://Gabriel:${process.env.PASSWORD}@cluster0.mwknbe9.mongodb.net/?retryWrites=true&w=majority`);
	}catch(error)
	{
		console.log(error)
	}
}

module.exports = main;