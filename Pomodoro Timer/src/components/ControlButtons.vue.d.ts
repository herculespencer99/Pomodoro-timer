// ControlButtons.vue.d.ts
import Vue from 'vue'

declare module './ControlButtons.vue' {
  export default Vue.Component<{
    props: {
      isRunning: boolean
    }
  }>
}
