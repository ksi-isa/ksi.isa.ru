<template>
  <div>
    <HeroBanner text="Контакты" />

    <div class="mx-auto max-w-7xl px-5 xl:px-0 my-5 lg:my-10">
      <p>Контакты заместителей заведующего кафедрой:</p>
      <ul class="pl-5 list-disc">
        <li>
          <p>
            Орлова Елена Роальдовна, д.э.н., зам. зав. кафедрой по направлению
            «Системный анализ»
          </p>
          <p>
            e-mail:
            <NuxtLink
              class="underline text-blue-600 hover:text-blue-700 visited:text-violet-600"
              to="mailto:orlova@isa.ru"
              >orlova@isa.ru</NuxtLink
            >
          </p>
        </li>
        <li>
          <p>
            Смирнов Иван Валентинович, к.ф.-м.н. зам. зав. кафедрой по
            направлению «Искусственный интеллект»
          </p>
          <p>
            e-mail:
            <NuxtLink
              class="underline text-blue-600 hover:text-blue-700 visited:text-violet-600"
              to="mailto:ivs@isa.ru"
              >ivs@isa.ru</NuxtLink
            >
          </p>
        </li>
      </ul>
      <p class="pt-5">По организационным вопросам</p>
      <p>Секретарь кафедры Жарова Наталья Юлиевна, тел.: +7 499 135 51 64</p>
      <p>
        e-mail:
        <NuxtLink
          class="underline text-blue-600 hover:text-blue-700 visited:text-violet-600"
          to="mailto:znat@isa.ru"
          >znat@isa.ru</NuxtLink
        >
      </p>
      <p class="pt-5">
        Кафедра располагается по адресу:
        <NuxtLink
          class="underline text-blue-600 hover:text-blue-700 visited:text-violet-600"
          target="_blank"
          to="https://yandex.ru/maps/-/CDVdq2Ke"
          >Москва, проспект 60-летия Октября, д.9, каб. 922</NuxtLink
        >.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
  useSeoMeta({
    title: "Абитуриентам | КСИ",
  })
</script>
