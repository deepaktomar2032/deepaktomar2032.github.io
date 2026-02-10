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
    gap: 4px;
  }

  .cv-skills li {
    display: flex;
    align-items: baseline;
    gap: 12px;
  }

  .section-label {
    min-width: 90px;
    font-weight: 600;
    font-size: 0.85rem;
  }

  .tags-container {
    display: flex;
    flex-wrap: wrap;
    gap: 2px 6px;
  }

  .tag {
    color: var(--text-color);
    font-size: 0.8rem;
    white-space: nowrap;
  }

  .tag + .tag::before {
    content: '•';
    margin: 0 0.35em;
    color: rgba(var(--text-color-rgb), 0.4);
  }
</style>
