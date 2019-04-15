import Backbone from 'backbone';
import $ from 'jquery';

export default Backbone.Router.extend({
    routes: {
        '': 'noCopy',
        heirloomRose: 'heirloomRoseMessage',
        rainbowRose: 'rainbowRoseMessage',
        redRose: 'redRoseMessage'
    },

    noCopy() {
        $('#copy').html('');
    },

    heirloomRoseMessage() {
        $('#copy').html('Heirloom Roses are great Mother\'s Day flowers');
    },

    rainbowRoseMessage() {
        $('#copy').html('Choose Rainbow Roses for your wedding');
    },

    redRoseMessage() {
        $('#copy').html('On Valentine\'s Day, give that special someone Red Roses');
    }
});
