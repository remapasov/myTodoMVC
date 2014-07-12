var screen = function(note, i) {
	var noteStyle = "activeNote";
	
	if (todoArray[i].activeStatus !== true) {
		noteStyle = "complitedNote";
	}
	
	var list = document.getElementById('list')
	var li = document.createElement("li");
	li.className = noteStyle;
	li.id = i;
	li.innerHTML = "<input type='checkbox' onchange='changeStatus(\"" + i + "\")' >" +
		note + "<button class='remove'>Remove</button></li>";
	list.appendChild(li);
	
//	text = "<li id='" + i + "' class= '" + noteStyle + "'><input type='checkbox' onchange='changeStatus(\"" + i + "\")' >";
//	text += note + 
//		"<button class='remove'>Remove</button></li>";
//	document.getElementById("list").innerHTML += text;
	
	var doc = document.getElementById(i).getElementsByTagName("button")[0];
	console.log("Button remove: " + doc);
	console.log("i: " + i);
	doc.onclick = function(index) {
		return function() {
//			var index = i;
//			alert(index);
			todoArray.splice(index, 1);
			screenAll();
		}
	}(i);
	
//		document.getElementById(i).on("click", function(i) {
//				todoArray.splice(i, 1);
//				screenAll();
//			});
//		document.getElementById("list").append(text);

//		document.getElementById("list").innerHTML += "<li>" + todoArray[i].note +
//			"<input type='button' value='Remove' onclick='del(" + val + ")'>" + "</li>";
//		document.getElementById("list").innerHTML += "<li>" + todoArray[i].note + "</li>";
//		}
}

var screenAll = function() {
	document.getElementById("list").innerHTML = "";
	for (var i = 0; i < todoArray.length; i++) {
//		if (todoArray[i].activeStatus !== true) {
//			document.getElementById(i).checked = "checked";
//		}
		screen(todoArray[i].note, i);
	}
	
//	var noteStyle = "activeNote";
//	if (todoArray[i].activeStatus !== true) {
//		noteStyle = "complitedNote";
//	}
//	var list = "<% _.each(tasks, function(name) { %> <li class=<%noteStyle%>>" +
//			"<input type='checkbox' id='ch' onchange='changeStatus(<%=name.note%>)'><%= name.note%>" +
//			"<input type='button' class='remove' value='Remove' onclick='del(<%= name.note%>)'></li> <% }); %>";
//	var text = _.template(list, {tasks : todoArray});
//	_.each(todoArray, function(name) {document.getElementById("list").innerHTML += "<li>" + name.note + "</li>" });
//	var list = "<% _.each(arr, function(name) { %> <li><%= name %></li> <% }); %>";
//	var text = _.template(list, {arr: todoArray});
//	 document.getElementById("list").innerHTML = text;

}

var screenActive = function() {
	document.getElementById("list").innerHTML = "";
	for (var i = 0; i < todoArray.length; i++) {
		if (todoArray[i].activeStatus === true) {
			screen(todoArray[i].note, i);
		}
	}
}

var screenCompleted = function() {
	document.getElementById("list").innerHTML = "";
	for (var i = 0; i < todoArray.length; i++) {
		if (todoArray[i].activeStatus !== true) {
			screen(todoArray[i].note, i);
		}
	}
}

