/* eslint-disable linebreak-style */
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Albums', [
   
    {
      name: 'Peponi Living Space',
      
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Serena Hotel',
    
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Galaxy Hotel',
      
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'NewYork Hotel',
     
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'chicago Hotel',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Rubavu Hotel',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Musanze Hotel',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Kigali Hotel',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Huye Hotel',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Nyanze Hotel',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Shema Hotel',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Muhabura Hotel',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Kalisimbi Hotel',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Kora Hotel',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Rulindo Hotel',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Nyagatare Hotel',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Albums', null, {})
};
