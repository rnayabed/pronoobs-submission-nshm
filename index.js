const hamburger = document.getElementById('hamburger');
const header = document.getElementById('header-content');

hamburger.addEventListener('click', () => {
    header.classList.toggle('active');
})


var events = [
    {
        "name" : "RS IntelliEdge",
        "info" : "Deep dive into RS Intelliedge and how it protects the nation's digital transactions since 2019.",
        "main-image" : "images/event-1/main.jpeg",
        "main-image-alt" : "RS Sir explaining IntelliEdge",
        "rating": "4/5",
        "top-comment" : {
            "name" : "@Ushnish Tapaswi",
            "pfp" : "images/event-1-pfp.jpeg",
            "comment" : "Amazing lecture by Majid Sir4"
        }
    },
    {
        "name" : "Event Two",
        "info" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aut ex similique rerum nihil odio at? Dolores, soluta officiis. Delectus.",
        "main-image" :  "images/event-2/main.jpeg",
        "main-image-alt" : "Event 2 ALT",
        "rating": "3/5",
        "top-comment" : {
            "name" : "@Ushnish Tapaswi2",
            "pfp" : "images/event-1-pfp.jpeg",
            "comment" : "Amazing lecture by Majid Si3r"
        }
    },
    {
        "name" : "Event Three",
        "info" : "Event 3 about",
        "main-image" :  "images/event-3/main.jpeg",
        "main-image-alt" : "Event 3 ALT",
        "rating": "4/5",
        "top-comment" : {
            "name" : "@Ushnish Tapaswi3",
            "pfp" : "images/event-1-pfp.jpeg",
            "comment" : "Amazing lecture by Majid Sir1"
        }
    },
    {
        "name" : "Event Four",
        "info" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aut ex similique rerum nihil odio at? Dolores, soluta officiis. Delectus.sdfsdfdsfsdgf",
        "main-image" :  "images/event-4/main.jpeg",
        "main-image-alt" : "Event 4 ALT",
        "rating": "2.3/5",
        "top-comment" : {
            "name" : "@Ushnish Tapaswi4",
            "pfp" : "images/event-1-pfp.jpeg",
            "comment" : "Amazing lecture by Majid Sir2"
        }
    }
]

var currentSlideIndex = 0;

const sliderEventName = document.querySelector('.slider-event-name');
const sliderEventInfo = document.querySelector('.slider-event-info');
const sliderEventMainImage = document.querySelector('.slider-event-main-image');
const sliderEventMainImageAlt = document.querySelector('.slider-event-main-image-alt');

const topCommentName = document.querySelector('.top-comment-name');
const topCommentPfp = document.querySelector('.top-comment-pfp');
const topCommentText = document.querySelector('.top-comment-text');

const sliderEventTransition = document.querySelector('.slider-event-transition');
const ratingElement = document.querySelector('.rating');


function setCurrentSlide(index) {
    sliderEventTransition.style.animation = "appear 0.3s linear infinite";

    sliderEventName.textContent = events[index]["name"];
    sliderEventInfo.textContent = events[index]["info"];
    sliderEventMainImage.setAttribute('src', events[index]["main-image"]);
    sliderEventMainImageAlt.textContent = events[index]["main-image-alt"];

    topCommentName.textContent = events[index]["top-comment"]["name"];
    topCommentPfp.setAttribute('src', events[index]["top-comment"]["pfp"]);
    topCommentText.textContent = events[index]["top-comment"]["comment"];

    ratingElement.textContent = events[index]["rating"];
    
    sliderEventTransition.style.animation = "appear-on 0.3s linear 1";
}

const leftArrow = document.querySelector('.left-arrow');
leftArrow.addEventListener('click', () => {
    console.log("cur: ", currentSlideIndex);

    if (currentSlideIndex == 0) {
        currentSlideIndex = events.length - 1;
    } else {
        currentSlideIndex--;
    }

    setCurrentSlide(currentSlideIndex);
    
    console.log("now: ", currentSlideIndex);

     // transition

})

const rightArrow = document.querySelector('.right-arrow');
rightArrow.addEventListener('click', () => {
    console.log("cur: ", currentSlideIndex);
    if (currentSlideIndex == events.length - 1) {
        currentSlideIndex = 0;
    } else {
        currentSlideIndex++;
    }
    setCurrentSlide(currentSlideIndex);
    console.log("now: ", currentSlideIndex);

    // transition
})

window.onload = () => {
    setCurrentSlide(0);
    currentSlideIndex = 0;
}


const container = document.getElementById("gallery");
// where "container" is the id of the container
  container.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
      container.scrollLeft += 100;
      e.preventDefault();
// prevenDefault() will help avoid worrisome 
// inclusion of vertical scroll 
    }
    else {
      container.scrollLeft -= 100;
      e.preventDefault();
    }
  });