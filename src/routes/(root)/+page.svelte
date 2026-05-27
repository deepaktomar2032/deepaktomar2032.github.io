<script>
  import Mainlayout from '$lib/layout/main.svelte'
  import About from '$lib/components/home/about.svelte'
  import Main from '$lib/components/home/main.svelte'
  import RecentInterests from '$lib/components/home/recent-interests.svelte'
  import Experience from '$lib/components/home/experience.svelte'
  import RecentQuotes from '$lib/components/home/recent-quotes.svelte'
  import RecentBlogs from '$lib/components/home/recent-blogs.svelte'
  import Projects from '$lib/components/home/projects.svelte'
  import Contact from '$lib/components/home/contact.svelte'

  import { homeDescription } from '$lib/data/meta'

  export let data
  let { blogs, quotes } = data
</script>

<svelte:head>
  <meta name="description" content={homeDescription} />
</svelte:head>

<Mainlayout>
  <div class="container">
    <Main />
    <About />
    <RecentBlogs {blogs} />
    <Projects />
    <RecentInterests />
    <Experience />
    <RecentQuotes {quotes} />
    <Contact />
  </div>
</Mainlayout>
