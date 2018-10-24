<template>
  <!-- MAIN NAVIGATION BAR -->
  <header class="nav-wrapper effect">
    <nav class="navbar-custom">
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bm-navbar" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand effect" href="index.html">GREG ROBLETO</a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bm-navbar">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#home" class="scroll effect active" data-speed="800">HOME</a></li>
            <li><a href="#about" class="scroll effect" data-speed="1000">ABOUT</a></li>
            <li><a href="#services" class="scroll effect" data-speed="1400">ACTIVITIES</a></li>
            <li><a href="#work" class="scroll effect" data-speed="1400">PORTFOLIO</a></li>
            <li><a href="#contact" class="scroll effect" data-speed="1700">CONTACT</a></li>
          </ul>
        </div><!-- End navbar-collapse -->
      </div><!-- End container -->
    </nav>
  </header>
  <!-- END MAIN NAVIGATION BAR -->
</template>


<script>
  
Vue.directive('scroll', {
  inserted: function(el, binding) {
    let f = function(evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f);
      }
    };
    window.addEventListener('scroll', f);
  },
});

// main app
new Vue({
  el: '#app',
  methods: {
   handleScroll: function(evt, el) {
    if (window.scrollY > 50) {
      TweenMax.to(el, 1.5, {
        y: -10,
        opacity: 1,
        ease: Sine.easeOut
      })
    }
    return window.scrollY > 100;
    }
  }
});

</script>
