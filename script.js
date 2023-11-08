var counterContainer = document.querySelector(".website-counter");
var visitCount = localStorage.getItem("page_view");
visitCount = 1;
//Add entry for key="page_view"
localStorage.setItem("page_view", 1);
counterContainer.innerHTML = visitCount;