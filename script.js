const header=document.querySelector('.site-header');
const observed=document.querySelectorAll('.panel,.property,.work-item,.service-grid article');
const reveal=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('is-visible')}),{threshold:.1});
observed.forEach(item=>reveal.observe(item));