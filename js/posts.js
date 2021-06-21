const post = document.querySelector('.post');
const text = document.querySelector('.post-text');

post.addEventListener('mouseenter', function () {
    console.log(post);
    for(let i=0; i<5; i++){
        console.log(post[i]);
    }
    text.hidden = !text.hidden;

});

post.addEventListener('mouseleave', function () {
    
    text.hidden = !text.hidden;

});