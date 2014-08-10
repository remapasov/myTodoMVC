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
	
	$.ajax({
		  type: "DELETE",
		  url: "/removeCompleted",
		  async: false
	});
	screenNotes();
}

form.on('submit', function() {
	todo = new todoClass(document.getElementById('input').value);

	if (todo.note !== "") {
		$.post('/add', {note: todo.note}, function() {
			screenNotes();
		});
	}
	document.getElementById("input").value = "";
	return false;
});
