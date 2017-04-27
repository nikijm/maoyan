$(function(){
	$('#myCarousel').carousel({ interval: 2500})	

$.ajax({
	type:"POST",
	url:"/movie2/find",
	data:{page:1,row:8},
	success:function(data){
console.log(data)
	}
})
})




