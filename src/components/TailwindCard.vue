<template>
  <div
    class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
  >
    <!-- Header Image/Icon Area -->
    <div class="h-32 bg-gradient-to-br from-pink-400 to-red-500 flex items-center justify-center">
      <span class="text-white font-bold text-3xl">{{ badge.charAt(0) }}</span>
    </div>

    <!-- Content Area -->
    <div class="p-6 flex-1 flex flex-col">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-2">
        {{ badge }}
      </div>
      <h3 class="text-xl font-bold text-gray-900 mb-3 leading-tight">
        {{ title }}
      </h3>
      <p class="text-gray-600 leading-relaxed flex-1 mb-4">
        <slot> </slot>
      </p>

      <!-- Button Area -->
      <div class="mt-auto">
        <button
          class="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          @click="handleClick"
        >
          {{ buttonText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  badge?: string;
  title: string;
  buttonText?: string;
}

const props = withDefaults(defineProps<Props>(), {
  badge: "Component",
  buttonText: "Click me",
});

const emit = defineEmits<{
  click: [];
}>();

const handleClick = () => {
  emit("click");
};
</script>
