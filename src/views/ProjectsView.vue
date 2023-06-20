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
          {{ getImageSource(project.language) }}
          {{ project.name.replace(/-/g, " ") }}
          <img
            v-if="python"
            src="@/assets/python.svg"
            width="15"
            height="15"
            target="_blank"
          />
          <img
            v-else-if="vue"
            src="@/assets/vue.svg"
            width="15"
            height="15"
            target="_blank"
          />
          <img
            v-else
            src=""
            width="15"
            height="15"
            target="_blank"
          />
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
    getImageSource(language: string) {
      if (language === "Vue") {
        this.python = false;
        this.vue = true;
        return "";
      } else if (language === "Python") {
        this.vue = false;
        this.python = true;
        return "";
      } else {
        return "";
      }
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
.projectsmain {
  margin: 0 30rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
a.github {
  color: var(--color-text);
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
    margin: 0 1rem;
  }
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
