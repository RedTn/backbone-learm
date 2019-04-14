import Backbone from 'backbone';
import _ from 'underscore';
import singleFlowerTemplate from 'templates/singleFlowerView.tpl';

export default Backbone.View.extend({
    tagname: 'article',
    className: 'flowerListItem',

    template: _.template(singleFlowerTemplate),

    render() {
        const flowerTemplate = this.template(this.model.toJSON());
        this.$el.html(flowerTemplate);
        return this;
    }
});
