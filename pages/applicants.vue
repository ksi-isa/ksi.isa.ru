<template>
  <div>
    <HeroBanner text="Абитуриентам" />

    <div class="mx-auto max-w-7xl px-5 xl:px-0 my-5 lg:my-10">
      <p class="font-bold">
        Последовательность действий для поступления на кафедру в 2024 году:
      </p>
      <ol class="pl-5 list-decimal">
        <li>
          Отправка соискателями резюме на почту зам. заведующего кафедрой
          <NuxtLink
            class="underline text-blue-600 hover:text-blue-700 visited:text-violet-600"
            to="mailto:ivs@isa.ru"
            >ivs@isa.ru</NuxtLink
          >.
        </li>
        <li>
          Ожидание приглашения на собеседование онлайн. Дата и время
          собеседования уточняются в переписке по электронной почте.
        </li>
        <li>
          Список рекомендованных к зачислению рассылается на электронную почту
          соискателей.
        </li>
      </ol>
      <p class="pt-5">Сроки определяет ФПМИ МФТИ.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  useSeoMeta({
    title: "Абитуриентам | КСИ",
  })
</script>
