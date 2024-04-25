<template>
  <div class="flex flex-col h-screen justify-between">
    <Disclosure as="nav" class="bg-gray-100" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <!-- Mobile menu button-->
          <div class="absolute inset-y-0 left-0 flex items-center lg:hidden">
            <DisclosureButton
              class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-200 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-200"
              aria-label="Main menu"
            >
              <span class="absolute -inset-0.5" />
              <Icon
                name="heroicons:bars-3"
                v-if="!open"
                class="block h-6 w-6"
                aria-hidden="true"
              />
              <Icon
                name="heroicons:x-mark"
                v-else
                class="block h-6 w-6"
                aria-hidden="true"
              />
            </DisclosureButton>
          </div>

          <div
            class="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start"
          >
            <div class="flex flex-shrink-0 items-center">
              <NuxtLink to="/" class="text-md font-bold py-1 pl-2">
                <!-- Кафедра&nbsp;Системных&nbsp;Исследований -->
                <NuxtPicture
                  format="webp"
                  quality="100"
                  src="/logo.jpg"
                  :img-attrs="{
                    class: 'h-16',
                  }"
                />
              </NuxtLink>
            </div>
            <div class="hidden lg:ml-6 lg:block my-auto">
              <div class="flex space-x-4">
                <NuxtLink
                  v-for="item in navigation"
                  :key="item.name"
                  :to="item.to"
                  activeClass="bg-gray-200 text-black"
                  class="text-gray-800 hover:bg-gray-200 hover:text-black rounded-md px-3 py-2 text-sm font-medium"
                >
                  <!-- :aria-current="item.current ? 'page' : undefined" -->
                  {{ item.name }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel class="lg:hidden" v-slot="{ close }">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <NuxtLink
            v-for="item in navigation"
            @click="close"
            :key="item.name"
            :to="item.to"
            activeClass="bg-gray-200 text-black"
            class="text-gray-800 hover:bg-gray-200 hover:text-black block rounded-md px-3 py-2 text-base font-medium"
          >
            <!-- :aria-current="item.current ? 'page' : undefined" -->
            {{ item.name }}
          </NuxtLink>
        </div>
      </DisclosurePanel>
    </Disclosure>

    <main class="mb-auto">
      <NuxtPage />
    </main>

    <footer
      class="bg-gray-800 text-gray-200 p-4 text-center flex items-center justify-center"
    >
      <div>&copy; Кафедра Системных Исследований, 2024.</div>
    </footer>
  </div>
</template>

<script setup lang="ts">
  import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  } from "@headlessui/vue"

  const navigation = [
    { name: "Главная", to: "/" },
    { name: "О\xA0кафедре", to: "/about" },
    { name: "Читаемые\xA0курсы", to: "/courses" },
    { name: "Преподаватели", to: "/staff" },
    { name: "Абитуриентам", to: "/applicants" },
    { name: "Контакты", to: "/contacts" },
  ]
</script>
