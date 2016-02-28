/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';

// name: String,
// info: String,
// amount: Number,
// url: String,
// image: String,
// contributors: [{
//   name: String,
//   amount: Number,
//   comment: String
// }]

Thing.find({}).removeAsync()
  .then(() => {
    Thing.create({
      name: 'Poussette Yoyo Babyzen',
      amount: 589,
      given: 0,
      image: 'yoyo-black-frame-taupe.jpg'
    });

    Thing.create({
      name: 'Coussin réducteur',
      amount: 33,
      given: 0,
      image: 'coussin.png'
    });

    Thing.create({
      name: 'Transat',
      amount: 10,
      given: 0,
      image: 'transat.png'
    });

    Thing.create({
      name: 'Chaise haute',
      amount: 148,
      given: 0,
      image: 'chaise.png'
    });

    Thing.create({
      name: 'Transat',
      amount: 79,
      given: 0,
      image: 'transat+chaise.png'
    });

    Thing.create({
      name: 'Chauffe biberon',
      amount: 40,
      given: 0,
      image: 'chauffe-biberon.png'
    });

    Thing.create({
      name: 'Robot babycook',
      amount: 185,
      given: 0,
      image: 'robot.png'
    });
  });
