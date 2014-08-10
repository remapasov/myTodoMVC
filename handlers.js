var _ = require('underscore');
var todoArray = [];

var todoClass = function(note) {
	this.note = note;
	this.activeStatus = true;
}

exports.addTask = function(req, res) {

	console.log("POST");
//	console.log(req.body.note);
  	var todo = new todoClass(req.body.note);
//  	console.log("todo: " + todo.note);
  	todoArray.push(todo);
  	_.each(todoArray, function(element) {
  		console.log(element)
  	});
  	res.end();
} 

exports.changeStatus = function(req, res) {

	console.log("PUT");
	var id = req.body.id;
	console.log("id: " + id);
//	console.log("id: " + id);
	todoArray[id].activeStatus = !todoArray[id].activeStatus;
//	console.log(todoArray[id].activeStatus);
//	console.log(todoArray[0].activeStatus);
	res.end()
};

exports.get = function(req, res) {

	console.log("GET");
//	var status = req.params.status;
//	var sortedList = [];
//	_.each(tasks, function(task){
//		if(task.status === status) {
//			sortedList.push(task);
//		}
//	});
	var array = {
		"todo": todoArray
	}
	var arr = JSON.stringify(array);
	res.send(arr);

};



exports.remove = function(req, res) {

	console.log("DELETE");
	var id = req.body.id;
	console.log(todoArray[id].note);
	todoArray.splice(id, 1);
//	delete todoArray[id];
	_.each(todoArray, function(element) {
		console.log(element.note)
	});
	res.end();
}

exports.removeCompleted = function(req, res) {

	console.log("DELETE COMPLETED");
//	var id = req.body.id;
	
	var tempArray = [];
	_.each(todoArray, function(element, index) {
		if (element.activeStatus) {
			tempArray.push(element);
		}
		
	});

	todoArray = tempArray;
	res.end();
}