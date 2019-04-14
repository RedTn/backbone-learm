import Backbone from 'backbone';
import faker from 'faker';

export default Backbone.Model.extend({
    defaults: {
        color: 'pink',
        img: faker.image.imageUrl()
    }
});
