'use strict';

module.exports = {
  generateRandomData
};

// Make sure to "npm install faker" first.
const Faker = require('faker');

function generateRandomData(userContext, events, done) {
  // generate data with Faker:
  const description = "Eveniet tempora eaque vitae. Id est vero nostrum quia. Suscipit in distinctio porro sit veniam et sunt laboriosam. Consequatur sunt omnis natus eos id blanditiis ad. Et a molestiae tempore dolores dolores.";
  const additionaltext = 'FEATURES ★ plz send new non silly brain plz! things are way too silly! ★ steady havin what I believe a psychiatrist would call a "mental breakdance" ★ when it comes to my mental brain, im just lookin 4 the right crank to pull (keep pulling the wrong cranks, turns out) ★ not everyday that u get so hilarious brained that u invent the solutions machine';
  const images = ['https://i.picsum.photos/id/737/180/300.jpg', 'https://i.picsum.photos/id/447/300/300.jpg', 'https://i.picsum.photos/id/446/180/300.jpg',
  'https://i.picsum.photos/id/757/180/300.jpg',
  'https://i.picsum.photos/id/767/300/300.jpg',
  'https://i.picsum.photos/id/334/180/300.jpg',
  'https://i.picsum.photos/id/791/180/300.jpg',
  'https://i.picsum.photos/id/730/180/300.jpg',
  'https://i.picsum.photos/id/731/180/300.jpg', 'https://i.picsum.photos/id/367/180/300.jpg',
  'https://i.picsum.photos/id/366/180/300.jpg',
  'https://i.picsum.photos/id/336/300/300.jpg',
  'https://i.picsum.photos/id/382/180/300.jpg',
  'https://i.picsum.photos/id/182/180/300.jpg'];
  // add variables to virtual user's context:
  userContext.vars.description = description;
  userContext.vars.additionaltext = additionaltext;
  userContext.vars.images = images;
  // continue with executing the scenario:
  return done();
}