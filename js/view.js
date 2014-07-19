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
	
	var ref = document.getElementById("ref" + i);
	ref.onclick = function(index) {
		return function() {
			todoArray.splice(index, 1);
			screenAll();
		}
	}(i);
	
	var check = document.getElementById("ch" + i);
	check.onclick = function(index) {
		return function() {
			todoArray[index].activeStatus = !todoArray[index].activeStatus;
			screenAll();
		}
	}(i);
	
	var ch = document.getElementById("ch" + i);
	if(todoArray[i].activeStatus !== true) {
		ch.checked = "checked";
	}
	
//	ch = $('input', list);
////	ch.get(i).checked = "checked";
//	if(todoArray[i].activeStatus !== true) {
//		ch.get(i).checked = "checked";
//	}
		
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

var screenAll = function() {
	document.getElementById("list").innerHTML = "";
	for (var i = 0; i < todoArray.length; i++) {
//		if (todoArray[i].activeStatus !== true) {
//			document.getElementById(i).checked = "checked";
//		}
		screen(todoArray[i].note, i);
	}
	
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

