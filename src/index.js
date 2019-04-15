// Import the Backbone module and its dependencies
import Backbone from 'backbone';
import $ from 'jquery';
import faker from 'faker';
import AppView from 'views/basicView';
import singleFlower from 'models/singleFlowerModel';
import flowersCollection from 'collections/allFlowers';
import allFlowersView from 'views/allFlowersView';
import Router from 'routes/router';

const redRoses = new singleFlower({
    name: 'Red Roses',
    price: 39.95,
    color: 'Red',
    img: faker.image.imageUrl(),
    link: 'redRose'
});

const rainbowRoses = new singleFlower({
    name: 'Rainbow Roses',
    price: 29.95,
    color: 'orange',
    link: 'rainbowRose'
});

const heirloomRoses = new singleFlower({
    name: 'Heirloom roses',
    price: 19.95,
    img: faker.image.imageUrl(),
    link: 'heirloomRose'
});

const flowerGroup = new flowersCollection([redRoses, rainbowRoses]);

flowerGroup.add(heirloomRoses);

const flowerGroupView = new allFlowersView({ collection: flowerGroup });

$('#allFlowers').html(flowerGroupView.render().el);

new Router();

Backbone.history.start();

// Execute after the DOM has loaded
Backbone.$(function() {
    // Create an instance of our view
    new AppView();
});
