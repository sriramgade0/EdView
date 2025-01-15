const Edview = require('../models/edview');  


exports.getAllEdviews = async (req, res) => {
    try {
        console.log(req.user)
        const allEdView = await Edview.find();
        return res.status(200).json(allEdView);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        return res.status(400).send({ message: 'Error fetching Edview' });
 
    }}

exports.createEdview = async (req, res) => {
    try {
        const newEdView = new Edview(req.body);
        await newEdView.save();  
        return res.status(201).send({ newEdView });
    } catch (error) {
        console.log(`Error: ${error.message}`);
        return res.status(400).send({ message: 'Error creating new Edview' });
    }
}

exports.updateEdview = async(req,res)=>{
    try{
        const updatedEdView= await Edview.findByIdAndUpdate(req.params.id);
        return res.status(200).send({updatedEdView});
    } catch (error) {
        console.log(`Error: ${error.message}`);
        return res.status(400).send({ message: 'Error updating new Edview' });
    }
}

exports.deleteEdview = async(req,res)=>{
    try{
        const deletedEdView= await Edview.findByIdAndDelete(req.params.id,req.body,{new:true});
        return res.status(200).send({deletedEdView});

    }catch (error) {
        console.log(`Error: ${error.message}`);
        return res.status(400).send({ message: 'Error deleting new Edview' });
    }
}