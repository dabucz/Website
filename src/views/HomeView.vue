<template>
  <main class="Homepage">
    <div class="left">
      <img alt="Vue logo" class="logo" src="@/assets/pfp.svg" width="200" height="200"/>
    </div>
    <div class="right">
      <h1 class="h1hometitle">dabu</h1>
      <ul>
        <li>
          <a href="https://github.com/dabucz" target="_blank">
            <img alt="Github logo" class="icon" src="@/assets/github.svg" />
          </a>
        </li>
        <li>
          <a href="https://github.com/dabucz" target="_blank">
            <img alt="Github logo" class="icon" src="@/assets/github.svg" />
          </a>
        </li>
        <li>
          <a href="https://github.com/dabucz" target="_blank">
            <img alt="Github logo" class="icon" src="@/assets/github.svg" />
          </a>
        </li>
      </ul>
    </div>
  </main>
</template>

<style>
.Homepage {
  margin: 16rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.h1hometitle {
  font-size: 3.75rem;
  color: #FFF;
  font-weight: bold;
  font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";
}

.left {
  margin-right: 1rem;
}

.right {
  display: flex;
  flex-direction: column;
  align-items: left;
}

ul {
  padding: 0;
  list-style-type: none;
}

li {
  display: inline-block;
}

.icon {
  width: 2rem;
  height: 2rem;
}

.icon {
  transition: 0.3s ease;
  transform: translateY(0px);
}

.icon:hover {
  transition: 0.3s ease;
  transform: translateY(-2px);
}

/* Media Queries for Responsive Design */
@media only screen and (max-width: 768px) {
  .Homepage {
    margin: 8rem auto;
  }

  .h1hometitle {
    font-size: 2.5rem;
  }
}

@media only screen and (max-width: 480px) {
  .Homepage {
    margin: 6rem auto;
    flex-direction: column;
    text-align: center;
  }

  .left {
    margin-right: 0;
    margin-bottom: 2rem;
  }

  .h1hometitle {
    font-size: 2rem;
  }

  .right {
    align-items: center;
  }

  .icon {
    margin: 0.5rem;
  }
}
</style>
