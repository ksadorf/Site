addNavbar=function(){
	var newdiv = document.getElementById("menu-wrapper");
	newdiv.innerHTML='\
	<div class="nav navbar navbar-nav navbar-inverse">\
		  <div class="navbar-inner">      \
			<div class="container">    \
			  <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">  \
				<span class="icon-bar"></span>\
				<span class="icon-bar"></span>\
				<span class="icon-bar"></span>\
			  </button>                                      \
			  <a class="brand" href="index.html">Gaumont Noé</a>      \
			  <div class="nav-collapse collapse">              \
				<ul class="nav">                                  \
				  <li><a href="Parcours.html">Parcours académique</a></li>        \
				  <li><a href="Experience.html">Expériences professionnelles</a></li>        \
				  <li><a href="Projets.html">Projets</a></li>        \
				</ul>                                           \
			  </div><!--/.nav-collapse -->                     \
			</div>                                         \
		  </div>                                    \
	</div>\
	';
}

//nav navbar-nav navbar-right
