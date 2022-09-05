import vue from '@vitejs/plugin-vue';
import { clientPlugin, defineConfig } from '@vitebook/client/node';
import { vuePlugin } from '@vitebook/vue/node';
import { defaultThemePlugin } from '@vitebook/theme-default/node';
import { vueMarkdownPlugin } from '@vitebook/markdown-vue/node';
import { shikiMarkdownPlugin } from '@vitebook/markdown-shiki/node';


export default defineConfig({
  include: ['src/**/*.md', 'src/**/*.story.vue'],
  plugins: [
    vuePlugin({ appFile: 'App.vue' }),
    clientPlugin(),
    defaultThemePlugin(),
    vueMarkdownPlugin(),
    shikiMarkdownPlugin(),
    vue({ include: /.(md)/ }),
  ],
  site: {
    title: 'Gamedoora Component Library',
    description: 'This is a component library for Gamedoora UI.',
    /** @type {(import('@vitebook/theme-default/node').DefaultThemeConfig} */
    theme: {},
  },
});
