

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


let all_section = document.querySelectorAll("section");

all_section.forEach(function(section) {
  if(!section.classList.contains("init-vis")) {
    section.classList.add('hide');
  }
});


let nav_button = document.querySelectorAll("#top-nav li");
nav_button.forEach(function(button){

  button.addEventListener('click', function(e){
    all_section.forEach(function(section) {
      section.classList.add('hide');
    });
    let url = e.target.href
    let dest_id=url.substring(url.indexOf("#")+1);
    document.querySelector("#"+dest_id).classList.remove('hide')
  });
})

let wanted_sec_id = window.location.hash.substr(1);
if (wanted_sec_id){
  let wanted_section = document.querySelector("#"+wanted_sec_id);

  if (wanted_section){
    all_section.forEach(function(section) {
      section.classList.add('hide');
    });
    wanted_section.classList.remove('hide')
  }
}
