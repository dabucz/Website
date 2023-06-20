<template>
  <main class="projectsmain">
    <div class="projects">
      <div class="container invis"></div>
      <div class="container noborder nobg centertext">
        <div class="containertitle">
          <h1 class="h1title">Projects</h1>
        </div>
      </div>
      <div class="container invis"></div>
      <div class="container" v-for="project in projects" :key="project.name">
        <div class="containertitle">
          <img
            v-if="isPython(project.language)"
            src="@/assets/python.svg"
            class="langIcon"
            target="_blank"
          />
          <img
            v-else-if="isVue(project.language)"
            src="@/assets/vue.svg"
            class="langIcon"
            target="_blank"
          />
          <img
            v-else
            src=""
            class="langIcon"
            target="_blank"
          />
          {{ project.name.replace(/-/g, " ") }}
        </div>
        <div class="description">{{ project.description }}</div>
        <div class="container-bottom">
          <a :href="project.html_url" class="github" target="_blank">
            Github
            <img
              src="@/assets/arrow-up-right.svg"
              width="15"
              height="15"
              target="_blank"
            />
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
export default {
  data() {
    return {
      projects: [
        {"name": "","language":"", "description":"", "html_url": ""}
      ],
      vue: false,
      python: false,
    };
  },

  mounted() {
    this.getData();
  },

  methods: {
    isPython(language: string) {
      if (language === "Python") {
        return true;
      } else { return false; }
    },
    isVue(language: string) {
    if (language === "Vue") {
      return true;
    } else { return false; }
    },
    async getData() {
      try {
        const response = await fetch(
          "https://api.github.com/users/dabucz/repos",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          }
        );
        // JSON responses are automatically parsed.
        this.projects = await response.json();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
.langIcon {
  width: 25px;
  height: 25px;
}
.projectsmain { 
  margin: 0 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
a.github {
  color: var(--color-text);
  margin: 0 auto;
  display: flex;
  place-items: center;
  transition: 0.3s ease;
  transform: translateY(0px);
}

a.github:hover {
  transition: 0.3s ease;
  transform: translateY(-2px);
}
.h1title {
  font-size: 3rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
}

.containertitle {
  color: #fff;
  font-weight: bold;
  font-size: 30px;
  margin: 0.5rem 1rem;
}

.container-bottom {
  margin-left: 1rem;
  width: 8rem;
  height: 2rem;
  background-color: rgb(38, 38, 38);
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  text-decoration: none;
  margin-top: auto;
  margin-bottom: 15px;
}

.description {
  font-size: 16px;
  margin: 0.5rem 1rem;
}

.projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.container {
  flex: 0 1 30%;
  height: auto;
  margin: 1rem;
  background-color: rgb(19, 19, 19);
  border: 1px solid #2c2c2c;
  border-radius: 5px;
  text-align: left;
}

.nobg {
  background-color: transparent;
}

.centertext {
  text-align: center;
}

.noborder {
  border: 1px solid transparent;
}

.invis {
  visibility: hidden;
}

.container::after {
  content: "";
  flex: auto;
}
@media (max-width: 1600px) {
  .projectsmain {
    margin: 0 4rem;
  }
}

@media (max-width: 1087px) {
  .projectsmain {
    margin: 0 2rem;
  }
}
@media (max-width: 1025px) {
  .projectsmain {
    margin: 0 0;
  }
  .invis{display:none;}
  
}
@media (max-width: 768px) {
  .projectsmain {
    margin: 0 1rem;
  }

  .h1title {
    font-size: 2.5rem;
  }

  .containertitle {
    font-size: 1.2rem;
    margin: 0.3rem 0.5rem;
  }

  .description {
    font-size: 0.9rem;
    margin: 0.3rem 0.5rem;
  }

  .container-bottom {
    margin: 0.3rem 0.5rem;
  }

  .container {
    flex: 0 1 100%;
    height: auto;
    margin: 0.5rem 0;
  }
}
</style>
