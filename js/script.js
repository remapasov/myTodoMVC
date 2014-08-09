var form = $("#data");
var input;
var todoArray = [];
var todo;
var text;

var todoClass = function(note) {
	this.note = note;
	this.activeStatus = true;
}

var changeAllStatus = function() {
	var mainCheckboxStatus = $("#checkAll").prop('checked');
	// console.log("Main checkbox: " + mainCheckboxStatus.checked);

	_.each(todoArray, function(element, index) {
		element.activeStatus = !mainCheckboxStatus;
		var data = {
			"id": index
		}
		$.ajax({
			type: "PUT",
			url: "/changeStatus",
			data: data,
			dataType: "text",
			async: false
		});
	});

	screenNotes();
}

var clearCompleted = function() {
	var length = todoArray.length;
	var tempArray = [];
	_.each(todoArray, function(element, index) {
		if (element.activeStatus) {
			tempArray.push(element);
		} else {
			var data = {
				"id": index
			}
			$.ajax({
				  type: "DELETE",
				  url: "/remove",
				  data: data,
				  async: false
			});
		}
	});

	todoArray = tempArray;
	screenNotes();
}

form.on('submit', function() {
	todo = new todoClass(document.getElementById('input').value);

	if (todo.note !== "") {
		$.post('/add', {note: todo.note}, function() {
			screenNotes();
		});
		todoArray.push(todo);
	}
//	console.log(todo.note);
//	$.ajax({type: 'DELETE', data: {a: 1}, url: '/remove'})

//	screenNotes();
	document.getElementById("input").value = "";
	return false;
});
