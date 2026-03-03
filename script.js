document.addEventListener('DOMContentLoaded',()=>{
  const yearEl=document.getElementById('year');
  if(yearEl) yearEl.textContent=new Date().getFullYear();

  // Menu toggle for mobile
  const toggle=document.getElementById('menuToggle');
  const nav=document.getElementById('nav');
  if(toggle && nav){
    toggle.addEventListener('click',()=>nav.classList.toggle('show'))
  }

  // Smooth scroll for in-page links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const target=document.querySelector(a.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
        if(nav) nav.classList.remove('show');
      }
    })
  })

  // Theme toggle (light/dark)
  const themeToggle=document.getElementById('themeToggle');
  const root=document.documentElement;
  const saved=localStorage.getItem('theme');
  if(saved) root.setAttribute('data-theme', saved);
  if(themeToggle){
    function updateIcon(){
      themeToggle.textContent = root.getAttribute('data-theme')==='dark' ? '☀️' : '🌙';
    }
    themeToggle.addEventListener('click',()=>{
      const current=root.getAttribute('data-theme')==='dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', current);
      localStorage.setItem('theme', current);
      updateIcon();
    })
    updateIcon();
  }

  // Contact form handling with simple validation
  const form=document.getElementById('contactForm');
  const status=document.getElementById('formStatus');
  if(form && status){
    form.addEventListener('submit',e=>{
      e.preventDefault();
      const data=new FormData(form);
      const name=data.get('name')?.toString().trim();
      const email=data.get('email')?.toString().trim();
      const msg=data.get('message')?.toString().trim();
      if(!name || !email || !msg){
        status.textContent='Please complete all fields.';
        status.classList.add('muted');
        return;
      }
      // Simulate submission (replace with real fetch to API if available)
      status.textContent='Thanks — your message was sent (demo).';
      status.classList.remove('muted');
      form.reset();
    })
  }
});
