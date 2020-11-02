<template>
  <main id="container">
    <div id="left-side" class="bg-green-300 md:w-1/4 md:min-h-screen">LEFT</div>
    <div id="right-side" class="bg-orange-300 md:flex-grow md:min-h-screen">
      RIGHT
      <ol>
        <li v-for="peserta in daftar_peserta" :key="peserta._id">{{ peserta.email }}</li>
      </ol>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const options = {
      headers: {
        common: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE2MDQyOTg4MjUsImV4cCI6MTYwNDM4NTIyNSwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiNWY5ZmE4NDI0MTE2NWU1OWY2MWM1YjUxIiwianRpIjoiNWQ5NGQ1NWUtNjBlMS00NTdjLWIxNWUtMTk0YmE5OWI1MjJhIn0.m18qo7Vp1wzWy02QrPTaWrp8HKQ9woapfuwS6WW3-BA'
        }
      }
    }
    let a = await $axios.$get("http://localhost:3030/peserta", options)

    return { daftar_peserta: a.data };
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
#container {
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
