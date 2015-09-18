'use strict';


// $(function(){
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


var targetContainer = $('.thumbnails'); 

// loop
thumbnails.forEach(
	function(item) {
		var thumbnailImg = '<img src="' + item.image + '">'; // build the image
		var thumbnailCaption = '<div class="caption">' + item.caption + '</div>'; // build the caption

		targetContainer.append(thumbnailImg, thumbnailCaption); // inject them into that wrapper 

	$(item.image).click(function(){
       	window.location.href = item.url; 
	})
	    
	});






