import Backbone from 'backbone';
import singleFlowerView from 'views/singleFlowerView';

export default Backbone.View.extend({
    tagName: 'section',
    render() {
        this.collection.each(this.addFlower, this);
        return this;
    },
    addFlower(flower) {
        const flowerView = new singleFlowerView({ model: flower });
        this.$el.append(flowerView.render().el);
    }
});
