import Controller from './ctrl';
import msgbus from '/msgbus';

var controller = new Controller();

var api = {
	show: () => controller.show(msgbus.reqres.request('region:main'))
};

msgbus.commands.setHandler("select-file:start", () => {
	api.show();
});