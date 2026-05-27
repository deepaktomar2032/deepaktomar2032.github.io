<script>
  import { skills } from '$lib/data/experience'

  const skillSections = [
    { label: 'Front-end', key: 'frontend' },
    { label: 'Back-end', key: 'backend' },
    { label: 'Databases', key: 'databases' },
    { label: 'Other', key: 'others' }
  ]
</script>

<ul class="cv-skills">
  {#each skillSections as section}
    <li>
      <span class="section-label">{section.label}</span>
      <div class="tags-container">
        {#each skills[section.key] as skill}
          <span class="tag">{skill}</span>
        {/each}
      </div>
    </li>
  {/each}
</ul>

<style lang="scss">
  .cv-skills {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .cv-skills li {
    display: grid;
    grid-template-columns: 100px 1fr;
    align-items: start;
    column-gap: 10px;
    padding: 2px 0;
  }

  .section-label {
    min-width: 0;
    font-weight: 600;
    font-size: 0.92rem;
    line-height: 1.25;
    padding-top: 2px;
  }

  .tags-container {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    line-height: 1.25;
  }

  .tag {
    color: var(--text-color);
    font-size: 0.82rem;
    white-space: nowrap;
    padding: 3px 9px;
    border-radius: 999px;
    background: rgba(var(--primary-color-rgb), 0.08);
    border: 1px solid rgba(var(--primary-color-rgb), 0.16);
  }

  .tag + .tag::before {
    content: none;
    margin: 0;
    color: transparent;
  }

  @media (max-width: 640px) {
    .cv-skills li {
      grid-template-columns: 1fr;
      row-gap: 6px;
    }

    .section-label {
      padding-top: 0;
    }
  }
</style>
