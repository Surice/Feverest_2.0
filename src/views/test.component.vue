<template>
    <div class="container">
       <div class="row align-items-center">
         <div class="col-lg-6 col-md-12 col-sm-12">
           <h1 class="display-4 fw-bold lh-1">Modern Landing Page</h1>
           <p class="lead">
             A landing page is a web page that is used to promote a specific product, event, or campaign. It typically features a combination of product description, branding, and user-submitted content.
           </p>
           <div class="d-grid gap-2 d-md-flex justify-content-md-start">
             <button class="btn btn-primary btn-lg" type="button">Get Started</button>
             <button class="btn btn-outline-secondary btn-lg" type="button">Learn More</button>
           </div>
         </div>
         <div class="col-lg-6 col-md-12 col-sm-12">
           <img src="https://via.placeholder.com/450" alt="App" class="img-fgap-2 d-md-flex justify-content-md-start">luid" />
         </div>
       </div>
    </div>
   </template>

<style scoped>
.hero {
 background-color: #343a40;
 color: #fff;
 padding: 50px 0;
}
.container-fluid {
  padding: 0;
}
.container {
  padding: 0;
}
h1 {
  font-size: 3.5rem;
}
p {
  font-size: 1.25rem;
}
.btn-primary {
  background-color: #f89400;
  border-color: #f89400;
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 40px;
  transition: all 0.3s ease;
}
.btn-primary:hover {
  background-color: #d67c00;
  border-color: #d67c00;
  transform: scale(1.05);
}
.btn-primary:active {
  background-color: #c46b00;
  border-color: #c46b00;
  transform: scale(1);
}
</style>
