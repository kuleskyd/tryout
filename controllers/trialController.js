const { request, response } = require('express');
const {person}=require('./models/personSchema');

//read all persons(GET REQUEST)
const readAllPersons= async(request,response)=>{
    try {
        const person = await person.find({});
        return response.status(200).jason({
            success:true,
            message:'all persons found successfully',
        })
    } catch (error) {
        console.log(`oops! something went wrong ${error}`);
        response.status(400).send(`oops something went wrong: ${error}`);
    }
}

//read a person(GET REQUEST)
const readPerson = async (request,response)=>{
    try {
        const person = await person.findById(req.params.id);
        response.status(201).json({
            success:true,
            message:'person found successfully'

        })
    } catch (error) {
        console.log(`oops! failed to get info on a person: ${error}`);
        response.status(400).send(`oops! failed to get info on a person: ${error}`);
    }
}

//creating a person(POST REQUEST)
const createPerson=async(request,response)=>{
    try {
       const newPerson = await person.create({...request.body});
       response.status(201).json({
        success:true,
        message:'person created successfully',
        data:newPerson
       })
    } catch (error) {
        console.log(`oops! failed to create a person: ${error}`);
        response.status(400).send(`oops! failed to create a person: ${error}`); 
    }
}

//update a person(PUT REQUEST)
const updatePerson = async(request,response)=>{
    try {
        const updatedPerson = await person.findByIdAndUpdate(request.params.id,{...request.body})
        response.status(200).json({
            success:true,
            message:'person updated successfully',
            data:updatePerson
       })
       
    } catch (error) {
        console.log(`oops! failed to update a person: ${error}`);
        response.status(400).send(`oops! failed to update a person: ${error}`); 
    }
}


//delete a person(DELETE REQUEST)
const deletePerson = async(request,response)=>{
    try {
        const deletePerson = await person.findByIdAndDelete(request,params.id);
        response.status(200).send(`${deletePerson.name} deleted successfully`);
    } catch (error) {
        console.log(`oops! failed to delete a person: ${error}`);
        response.status(400).send(`oops! failed to delete a person: ${error}`); 
    }
}

//export your function to be used outside the controller 
module.exports ={
    readAllPersons,
    readPerson,
    createPerson,
    updatePerson,
    deletePerson
}