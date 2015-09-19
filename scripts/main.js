'use strict';



	var thumbnails = [
		{
			caption: 'An Avocado',
			image: 'images/avocado.jpg',
			url: 'https://en.wikipedia.org/wiki/Avocado'
		},
		{
			caption: 'A Cat',
			image: 'images/cat.jpg',
			url: 'http://mashable.com/category/cats/'
		},
		{
			caption: 'A Dog',
			image: 'images/dog.jpg',
			url: 'https://www.petfinder.com/dog-breeds/'
		},
		{
			caption: 'A Llama',
			image: 'images/llama.jpg',
			url: 'http://animals.nationalgeographic.com/animals/mammals/llama/'
		},
		{
			caption: 'Pandas are the best',
			image: 'images/panda.jpg',
			url: 'http://pandas.pydata.org/'
		},
		{
			caption: 'This is random',
			image: 'images/thumb.jpg',
			url: 'http://www.merriam-webster.com/dictionary/thumb'
		}
	];

$(".read-more").click(function(){
    $(".more").toggle();
    $(".read-more").html("read less...");
});


var targetContainer = $(".thumbnails"); //wrapper

// loop
thumbnails.forEach(
	function(item) {
		var thumbnailImg = '<div id="image"><img src="' + item.image + '"></div>'; // build the image
		var thumbnailCaption = '<div class="caption">' + item.caption + '</div>'; // build the caption
		var thumbnailURL = item.url;

		targetContainer.append(thumbnailImg, thumbnailCaption); // put these into wrapper   

			$("#image").click(function(item){ //make images clickable
			event.preventDefault();
	       	window.location.href = thumbnailURL; 
			})
	});











