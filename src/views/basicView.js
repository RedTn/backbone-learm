import Backbone from 'backbone';

// Declare our options we'll use to extend the base view
const viewOptions = {
    el: '#app',

    initialize() {
        this.render();
    },

    render() {
        this.$el.text('App Ready');
    }
};

// Export our extended view
export default Backbone.View.extend(viewOptions);
