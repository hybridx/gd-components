<script lang="ts">
import type { PageMeta } from '@vitebook/client';

export const __pageMeta: PageMeta = {
  title: 'GDButton',
  description: 'My awesome GDButton.',
};
</script>

<script setup lang="ts">
import GDButton from './GDButton.vue';
import {
  ControlsAddon,
  EventsAddon,
  eventCallback,
} from '@vitebook/vue/addons';
import { Variant } from '@vitebook/vue';

import { ref } from 'vue';

const title = ref('Click Me');
</script>

<template>
  <Variant name="Default" description="The default GDButton.">
    <GDButton @click="eventCallback">{{ title }}</GDButton>
  </Variant>

  <Variant
    name="Disabled"
    description="The disabled GDButton."
  >
    <GDButton>This is supposed to be disabled</GDButton>
  </Variant>

  <ControlsAddon>
    <label>Title <input type="text" v-model="title" /></label>
    <label style="margin-top: 24px">
    </label>
  </ControlsAddon>

  <EventsAddon />
</template>
