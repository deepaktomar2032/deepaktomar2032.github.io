<script>
  export let filename
  export let lang

  let copied = false
  let blockEl

  async function copyCode() {
    const pre = blockEl.querySelector('pre')
    const text = pre ? pre.innerText : ''
    try {
      await navigator.clipboard.writeText(text)
      copied = true
      setTimeout(() => (copied = false), 2000)
    } catch (_) {}
  }
</script>

<div class="code-block" bind:this={blockEl}>
  {#if filename}
    <div class="filename">{filename}</div>
  {/if}
  {#if lang}
    <div class="lang">{lang}</div>
  {/if}
  <button class="copy-btn" type="button" on:click={copyCode} aria-label="Copy code">
    {#if copied}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg
      >
      <span>Copied!</span>
    {:else}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        ><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path
          d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
        /></svg
      >
      <span>Copy</span>
    {/if}
  </button>
  <slot />
</div>

<style lang="scss">
  .code-block {
    display: block;
    position: relative;
    background-color: var(--code-background-color);
    color: var(--code-text-color);
    font-family: var(--mono-font);
    font-size: 1rem;
    line-height: 1.33em;
    border-radius: 8px;
    box-shadow: var(--card-shadow);

    padding: 30px 15px;
    margin: 30px 0;

    :global(pre) {
      overflow-x: auto;
      scrollbar-color: var(--primary-color) var(--scrollbar-track-color);
      scrollbar-width: thin;
      padding-bottom: 5px;

      &::-webkit-scrollbar {
        height: 8px;
      }
      &::-webkit-scrollbar-thumb {
        background: var(--primary-color);
        &:hover {
          background: var(--primary-light-color);
        }
      }
    }

    .lang {
      position: absolute;
      right: 0;
      top: -15px;
      background: inherit;
      border-radius: 8px;
      padding: 5px 10px;
      z-index: 2;
      font-size: 0.85em;
    }

    .filename {
      background: inherit;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      margin-bottom: -2px;
      padding: 5px 10px;
      position: absolute;
      left: 0px;
      top: -15px;
      z-index: 1;
    }

    .copy-btn {
      position: absolute;
      top: 8px;
      right: 8px;
      z-index: 3;
      display: inline-flex;
      align-items: center;
      gap: 5px;
      padding: 4px 10px;
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 6px;
      background: rgba(255, 255, 255, 0.07);
      color: rgba(255, 255, 255, 0.6);
      font-family: var(--mono-font);
      font-size: 0.75rem;
      cursor: pointer;
      transition: background 0.15s, color 0.15s, border-color 0.15s;
      line-height: 1;

      &:hover {
        background: rgba(255, 255, 255, 0.15);
        color: rgba(255, 255, 255, 0.9);
        border-color: rgba(255, 255, 255, 0.25);
      }

      svg {
        flex-shrink: 0;
      }
    }
  }
</style>
