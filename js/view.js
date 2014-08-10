var status = "all";

var screen = function(note, i) {
	var noteStyle = "activeNote";
	
	if (todoArray[i].activeStatus !== true) {
		noteStyle = "complitedNote";
	}
	
	var list = document.getElementById('list')
	var li = $('#li');
	var li = document.createElement("li");
	li.className = noteStyle;
	li.id = i;
	li.innerHTML = "<input type='checkbox' id='ch" + i + "' >" +
		note + "<a href='#' id='ref" + i + "' class='remove'>X</a></li>";
	list.appendChild(li);
	
	// remove
	var ref = document.getElementById("ref" + i);
	ref.onclick = function(index) {
		return function() {
			todoArray.splice(index, 1);
			var data = {
					"id": index
				}
			$.ajax({
				  type: "DELETE",
				  url: "/remove",
				  data: data,
				  async: false
			});
			screenNotes();
		}
	}(i);
	
	// change status
	var check = document.getElementById("ch" + i);
	check.onclick = function(index) {
		return function() {
			todoArray[index].activeStatus = !todoArray[index].activeStatus;
//			$.put('/changeStatus', {id: index});
			
//			console.log("ID: " + index);
			var data = {
				"id": index
			}
			$.ajax({
				  type: "PUT",
				  url: "/changeStatus",
				  data: data,
				  async: false
			});
			
			screenNotes();
		}
	}(i);
	
//	var ch = document.getElementById("ch" + i);
//	if(todoArray[i].activeStatus !== true) {
//		ch.checked = "checked";
//	}
	
	var ch = $('input', list);
	if(todoArray[i].activeStatus !== true) {
		ch.get(i).checked = "checked";
	}
		
//	console.log("Ch: " + ch.get(0));
//	ch.get(i).addEventListener("change", function(){
//		todoArray[i].activeStatus = !todoArray[i].activeStatus;
//		screenAll();
//		});
//	ch.get(0).checked = "checked";
//	ch.get(i).on('change', function(){
//		todoArray[i].activeStatus = !todoArray[i].activeStatus;
//		screenAll();
//		});
//	ch.get(i).onclick = function(index){
//		return function() {
//			todoArray[index].activeStatus = !todoArray[index].activeStatus;
//			screenAll();
//		}
//	}(i);

//	var check = document.getElementById("ch" + i);
//	check.onchange = function(index) {
//		return function() {
//			todoArray[index].activeStatus = !todoArray[index].activeStatus;
//			screenAll();
//		}
//	}(i);
	
	
}

// all operations in callback 
var screenNotes = function() {
	document.getElementById("list").innerHTML = "";
	$.get( "get", null, function(array) {
//		todoArray = $.parseJSON(array).todo;
//		console.log(jQuery.parseJSON(array).todo[0].note);
//		todoArray = jQuery.parseJSON(array).todo;
//		for (var i = 0; i < todoArray.length; i++) {
//			console.log(todoArray[i].note);
//		}
//		alert(obj.todo[0].note); // будет выведено "John"
//		console.log("json: " + obj.todo[0].note);
//	} );
	switch (status) {
		case "all": {
			for (var i = 0; i < todoArray.length; i++) {
				screen(todoArray[i].note, i);
			}
			break;
		}
		case "active": {
			for (var i = 0; i < todoArray.length; i++) {
				if (todoArray[i].activeStatus === true) {
					screen(todoArray[i].note, i);
				}
			}
			break;
		}
		case "complited": {
			for (var i = 0; i < todoArray.length; i++) {
				if (todoArray[i].activeStatus !== true) {
					screen(todoArray[i].note, i);
				}
			}
			break;
		}
		
	}
	} );
}


var screenAll = function() {
	status = "all";
	screenNotes();
}

var screenActive = function() {
	status = "active";
	screenNotes();
}

var screenCompleted = function() {
	status = "complited";
	screenNotes();
}

