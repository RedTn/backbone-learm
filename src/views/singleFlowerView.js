import Backbone from 'backbone';
import _ from 'underscore';
import singleFlowerTemplate from 'templates/singleFlowerView.tpl';

export default Backbone.View.extend({
    tagName: 'article',
    className: 'flowerListItem',

    template: _.template(singleFlowerTemplate),

    render() {
        const flowerTemplate = this.template(this.model.toJSON());
        this.$el.html(flowerTemplate);
        return this;
    },

    events: {
        mouseover: 'addBgColor',
        mouseout: 'removeBgColor'
    },

    addBgColor() {
        this.$el.addClass('bgColorImage');
    },

    removeBgColor() {
        this.$el.removeClass('bgColorImage');
    }
});
