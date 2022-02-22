//we want to Access activity container by our heart icon
let heartIcon = document.querySelector('.activity-log .nav-icon')
//make another activity container and select activity conatainer window which we want to show using queryselector
let activityContainer = document.querySelector('.activity-container')

//now add click event to heart icon using adddeventlistener
heartIcon.addEventListener('click',() => {
    activityContainer.classList.toggle('hide');
    changeIcon(heartIcon);
});

//to change the icon after clicking like button

const changeIcon = (icon) => {
    let src = icon.src.split('-')[0];
    if(icon.src.includes('nofill')){
        icon.src = `${src}-fill.png`;
    }else{
        icon.src = `${src}-nofill.png`;
    }
}

//to like more than one post 
const addInteractionsToPost = (post) => {
    
    //post like

let likeBtn = post.querySelector('.like-btn');
let likeImg = post.querySelector('.like-icon');

likeBtn.addEventListener('click', () => {
    //to toggle the like button
    if(likeBtn.src.includes('nofill')){
        likeImg.classList.add('show');      //this is checking the post is liked or not
        if(shareBtn.src.includes('-fill')){   //whenever we try like button share will not be visible at the same time
            shareBtn.click();
        }
    }

    changeIcon(likeBtn);  //icon changed after clicking button

    setTimeout(() => {
        likeImg.classList.remove('show');
    }, 3000);
});

//post share

let shareBtn = post.querySelector('.send-btn');
let shareWindow = post.querySelector('.share-window');

shareBtn.addEventListener('click', () => {
    shareWindow.classList.toggle('active');
    changeIcon(shareBtn);
});


//make the copy button functionality
let postLink = post.querySelector('#share-link').value;
let copyLinkBtn = post.querySelector('.copy-btn');

copyLinkBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(postLink).then(() => {
        shareBtn.click();
    })
});
}

//post 

let posts = [...document.querySelectorAll('.post')];
posts.map(post => addInteractionsToPost(post));