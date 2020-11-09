<template>
  <div id="right-side">
    <NuxtLink to="/pengisian-biodata">Pengisian Biodata</NuxtLink>
  </div>
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
