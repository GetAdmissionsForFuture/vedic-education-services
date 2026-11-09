
const menu = document.querySelector(".menu");
const nav = document.querySelector(".navlinks");
if(menu && nav){
  menu.addEventListener("click",()=>nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
}

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add("visible");
  });
},{threshold:.08});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.querySelectorAll("[data-year]").forEach(el=>el.textContent = new Date().getFullYear());

const form = document.querySelector("#enquiryForm");
const toast = document.querySelector(".toast");
if(form){
  form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const data = new FormData(form);
    const name = (data.get("name") || "there").toString().trim();
    if(toast){
      toast.textContent = `Thanks ${name || "there"}! Your enquiry is ready to be connected.`;
      toast.classList.add("show");
      setTimeout(()=>toast.classList.remove("show"),3200);
    }
    form.reset();
  });
}

document.querySelectorAll("[data-service]").forEach(card=>{
  card.addEventListener("click",()=>{
    const target = card.dataset.service;
    const el = document.getElementById(target);
    if(el) el.scrollIntoView({behavior:"smooth",block:"start"});
  });
});
