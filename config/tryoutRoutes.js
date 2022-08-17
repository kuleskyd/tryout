const {
    readAllPersons,readPerson,createPerson,updatePerson,deletePerson}=require('/config')

const { request, response } = require('express');

const route = express.router();

route.route('/').get(readAllPersons).post(createPerson);
route.route('/id').get(readPerson).patch(updatePerson).delete(deletePerson)

module.exports=route;