<script>
  export let animated = true
</script>

<svg id="logo" class:animated viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <rect x="8" y="8" width="48" height="48" rx="16" fill="var(--primary-lightest-color)" />
  <circle cx="24" cy="26" r="6" fill="var(--primary-color)" />
  <circle cx="40" cy="38" r="8" fill="var(--secondary-color)" />
  <path d="M18 44L30 20L34 24L22 48Z" fill="var(--primary-light-color)" />
</svg>

<style lang="scss">
  #logo {
    width: auto;
    height: 100%;
    display: block;
  }

  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    #logo.animated {
      transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
      filter: drop-shadow(0 6px 18px rgba(var(--primary-color-rgb), 0.25));

      &:hover {
        transform: translateY(-2px) scale(1.02);
        filter: drop-shadow(0 10px 24px rgba(var(--primary-color-rgb), 0.35));
      }
    }
  }
</style>
