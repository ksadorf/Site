

let desc_exp_pro = document.querySelectorAll("section article.init-collapsed");

desc_exp_pro.forEach(function(description) {
  description.classList.add('collapsed');
});

function toggle_collapse(element) {
    element.classList.toggle('collapsed');
}

let articles = document.querySelectorAll("section article");
articles.forEach(function(article){

  article.addEventListener('click', function(e){
    if(e.target.classList.contains("title")){
      toggle_collapse(this);
    }
  });
})
