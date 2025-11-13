<script setup lang="ts">
import TailwindCard from "./components/TailwindCard.vue";

const handleCardClick = () => {
  alert("Tailwind CSS component clicked!");
};
</script>

<template>
  <div class="min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 py-12 px-4">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-8 drop-shadow-lg">You did it!</h1>
        <p class="text-lg text-white/90 mb-6">
          Visit
          <a
            href="https://vuejs.org/"
            target="_blank"
            rel="noopener"
            class="underline hover:text-yellow-300 transition-colors"
            >vuejs.org</a
          >
          to read the documentation
        </p>
        <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto mb-8">
          <h2 class="text-xl font-semibold text-white mb-4">Tailwind CSS is Ready!</h2>
          <p class="text-white/80">
            Your Vue 3 project now has Tailwind CSS configured and ready to use.
          </p>
        </div>
      </div>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <TailwindCard
          badge="Success"
          title="Tailwind CSS Integration"
          description="Successfully integrated Tailwind CSS with Vue 3, PostCSS, and Vite. Ready for responsive design!"
          button-text="Learn More"
          @click="handleCardClick"
        />

        <TailwindCard
          badge="Features"
          title="Utility-First CSS"
          description="Build modern designs directly in your markup with Tailwind's utility classes."
          button-text="Explore"
          @click="handleCardClick"
        />

        <TailwindCard
          badge="Responsive"
          title="Mobile-First Design"
          description="Create responsive layouts with Tailwind's mobile-first breakpoint system."
          button-text="Try It"
          @click="handleCardClick"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
