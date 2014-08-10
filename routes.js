exports.setRoutes = function(app, handlers){
	app.post('/add', handlers.addTask);
	app.put('/changeStatus', handlers.changeStatus);
	app.get('/get', handlers.get);
	app.delete('/remove', handlers.remove);
	app.delete('/removeCompleted', handlers.removeCompleted);

}