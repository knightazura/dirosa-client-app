<template>
  <aside id="left-side" class="bg-green-300 md:w-1/3 md:min-h-screen">
    <h1 class="text-2xl py-3">RQWIJ</h1>
    <div class="bg-blue-700 text-white px-3 py-2">
      <ul>
        <li class="sidebar__content-item">
          <circle-icon size="16" class="center-point"></circle-icon>
          <div class="content-item__text ml-2">Halaman awal</div>
          <div class="py-1">
            <div class="dashed-line__bottom">&nbsp;</div>
          </div>
        </li>
        <li class="sidebar__content-item">
          <circle-icon size="16" class="center-point"></circle-icon>
          <div class="content-item__text ml-2">Formulir biodata</div>
          <div class="py-1">
            <div class="dashed-line__bottom">&nbsp;</div>
          </div>
        </li>
        <li class="sidebar__content-item">
          <circle-icon size="16" class="center-point"></circle-icon>
          <div class="content-item__text ml-2">Pemilihan kelas</div>
          <div class="py-1">
            <div class="dashed-line__bottom">&nbsp;</div>
          </div>
        </li>
        <li class="sidebar__content-item">
          <circle-icon size="16" class="center-point"></circle-icon>
          <div class="content-item__text ml-2">Selesai</div>
        </li>
      </ul>
    </div>
    <div class="bg-green-700 text-white">Footer</div>
  </aside>
</template>

<script>
import { CircleIcon } from 'vue-feather-icons'

export default {
  components: {
    CircleIcon
  }
}
</script>

<style scoped>
#left-side {
  display: grid;
  grid-template-rows: minmax(24px, max-content) auto minmax(64px, max-content);
}

ul {
  list-style: none;
}

.sidebar__content-item {
  display: grid;
  grid-template-columns: 24px auto;
  grid-template-rows: 24px minmax(38px, max-content);
}
.content-item__text {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
}
.center-point {
  justify-self: center;
  align-self: center;
}
.dashed-line__bottom {
  background: repeating-linear-gradient(to bottom,white 0,white 20%,transparent 20%,transparent 40%);
  width: 4px;
  height: 100%;
  margin: 0 auto;
}
</style>
