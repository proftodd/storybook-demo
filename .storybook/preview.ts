import type { Preview } from "@storybook/vue3";
import { setup } from '@storybook/vue3'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

setup((app) => {
  library.add(faCheck, faUserCircle)
  app.component('font-awesome-icon', FontAwesomeIcon)
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
