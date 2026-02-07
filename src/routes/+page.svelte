<script>
  import Mainlayout from '$lib/layout/main.svelte'
  import About from '$lib/components/home/about.svelte'
  import Main from '$lib/components/home/main.svelte'
  import Experience from '$lib/components/home/experience.svelte'
</script>

<Mainlayout>
  <div class="container">
    <Main />
    <About />
    <Experience />
  </div>
</Mainlayout>
