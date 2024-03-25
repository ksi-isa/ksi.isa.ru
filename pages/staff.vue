<template>
  <div>
    <h1>Преподаватели:</h1>
    <div>
      <p v-for="staff in data">{{ staff.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  useSeoMeta({
    title: "Преподаватели | КСИ",
  })

  const { data } = await useAsyncData("staff", () =>
    queryContent("/staff").find(),
  )
</script>
