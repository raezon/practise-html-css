function transition_title(x) {
if (x.classList.contains("project-title-transition")){
    x.classList.remove("project-title-transition");
}else{
    x.classList.add("project-title-transition");
}
  
  console.log(x);
}
