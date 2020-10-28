/* it works */
const publishButton = document.getElementById('submit-post');
const postInput = document.getElementById('post-body');

//if someone clicks the pubutton, publish post!

publishButton.addEventListener('click', publishPost);

function publishPost(){
	//console.log(postInput.value);
	const post = {};
	post.text = postInput.value;
	//console.log(post.text);
	post.date = Date.now();
	//console.log(post.date);
	post.uid = "username";


	console.log(post); 
		postInput.value = "";
		createPost(post);
}

function createDiv(_class, text){
	const div = document.createElement('div')
	div.classList.add('_class');
	div.textContent = "test 123";
	return div;
	//need to do this 5 times based on div counts (see 1:11:02, but you can also create function that does this)

}

function createPost(data){
	console.log(data);
	const post = createDiv('post');

	const text = createDiv('post-text', data.text)
	const info = createDiv('post-info');
	const author

	const d = new Date(date.date);
	const date = createDiv('post-date', d.getMonth() + "/" d.
		getdate() + "/" d.getFullYear());	

		
}





}