<script>
  import Photo from './photo.svelte'
  import Title from './title.svelte'
  import Contact from './contact.svelte'
  import SectionTitle from './section-title.svelte'
  import Experience from './experience.svelte'
  import Education from './education.svelte'
  import Skills from './skills.svelte'
  import { profile } from '$lib/data/experience'
</script>

<article class="cv">
  <div class="blobs">
    <div class="blob one" />
    <div class="blob two" />
  </div>
  <section class="name-and-contact">
    <Title />
    <Contact />
  </section>
  <section class="photo">
    <Photo />
  </section>
  <section class="profile">
    <SectionTitle>Professional Profile</SectionTitle>
    <p>{profile}</p>
  </section>
  <section class="skills">
    <SectionTitle>Technical Skills</SectionTitle>
    <Skills />
  </section>
  <section class="work">
    <SectionTitle>Professional Experience</SectionTitle>
    <Experience />
  </section>
  <section class="education">
    <SectionTitle>Education</SectionTitle>
    <Education />
  </section>
</article>

<style lang="scss">
  .cv {
    border-radius: 10px;
    padding: 35px 0 10px 0;
    color: var(--text-color);
    font-family: var(--default-font);
    font-size: 16px;
    background-color: var(--card-background-color);
    position: relative;
    overflow: hidden;

    display: grid;
    gap: 20px 30px;
    grid-template-columns: 1fr;
    grid-template-areas:
      'photo'
      'name'
      'profile'
      'skills'
      'work'
      'education';

    @media (min-width: 768px), print {
      padding: 30px 20px;
      grid-template-columns: 2fr 1fr;

      grid-template-areas:
        'name photo'
        'profile profile'
        'skills skills'
        'work work'
        'education education';
    }

    @media (min-width: 900px), print {
      margin: 20px auto;
      max-width: 210mm;
      box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.6), 1px 3px 8px rgba(39, 44, 49, 0.3);
    }

    section {
      padding: 5px;
      // margin: 10px;
      border-radius: 10px;

      &.name-and-contact {
        grid-area: name;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      &.photo {
        grid-area: photo;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &.profile {
        grid-area: profile;

        p {
          text-align: justify;
        }
      }

      &.work {
        grid-area: work;
      }

      &.education {
        grid-area: education;

        p {
          text-align: justify;
        }
      }

      &.skills {
        grid-area: skills;
      }
    }

    .blobs {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;

      .blob {
        position: absolute;

        &.one {
          height: 120%;
          width: 120%;
          top: -54%;
          right: -45%;
        }

        &.two {
          height: 100%;
          width: 100%;
          left: 23%;
          top: 38%;
        }
      }
    }
  }

  // Print-specific styles
  @media print {
    .cv {
      box-shadow: none;
      margin: 0;
      padding: 10px 10px;
      max-height: 287mm;
      overflow: hidden;

      section {
        margin: 0;
      }
    }
  }

  @page {
    padding: 0;
    margin: 0cm;
    size: A4 portrait;
  }
</style>
