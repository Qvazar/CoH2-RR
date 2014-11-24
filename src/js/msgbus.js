import Wreqr from 'Backbone.Wreqr';

export default {
	reqres: new Wreqr.RequestResponse(),
	commands: new Wreqr.Commands(),
	events: new Wreqr.EventAggregator()
};