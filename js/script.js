var username = "";

function sendMessage(message) {
	var prevState = $("#container").html();

	if (prevState.length > 5) {
		prevState = prevState + "<br>";
	}

	$("#container").html(prevState + message);

	$("#container").html(prevState + "<span class='current_message'>" + "<span class='bot'>Chatbot:::</span>" + message + "</span>");
	$(".current_message").hide();
	$(".current_message").delay(500).fadeIn();
	$(".current_message").removeClass('current_message');
}

function getusername(){
	sendMessage(" Hello What is your name?");
}

function ai(message) {
	if (username < 5) {
		username = message;
		sendMessage(" Nice to meet you " + username + ", how are you doing?");
	}

	if (message.indexOf("how are you") >= 0) {
		sendMessage(" Thanks, I am good!");
	}

	if (message.indexOf("time") >= 0) {
		var date = new Date();
		var h = date.getHours();
		var m = date.getMinutes();
		sendMessage(" Current time is: "+h+":"+m);
	}
}
	
$(function(){

	getusername();

	$("#textbox").keypress(function(event) {
		if( event.which == 13 ){
			if ( $("#enter").prop("checked") ) {
				$("#send").click();
				event.preventDefault();
			}
		}
	});

	$("#send").click(function() {

		var username = "<span class='username'>Unknown::: ";
		var newMessage = $("#textbox").val();

		$("#textbox").val("");

		var prevState = $("#container").html();

		if (prevState.length > 5) {
			prevState = prevState + "<br>";
		}

		$("#container").html(prevState + username + newMessage);

		$("#container").scrollTop($("#container").prop("scrollHeight"));

		ai(newMessage);

	});

});