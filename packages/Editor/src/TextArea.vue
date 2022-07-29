<template>
  <textarea ref="TextareaRef" class="textarea" v-model="state.text"></textarea>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue"
import { ColorTypes, rgb } from "pdf-lib"
export default defineComponent({
  emits: ["update-text-list"],
  props: {
    x: {
      type: Number,
      required: true,
    },
    y: {
      type: Number,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
    // color: {
    //   type: ColorTypes.RGB,
    //   red: 0.95,
    //   green: 0.1,
    //   blue: 0.1,
    // },
  },
  setup(props, { emit }) {
    const TextareaRef = ref<HTMLElement>()
    const state = ref({
      x: props.x,
      y: props.y,
      size: props.size,
      color: rgb(0.95, 0.1, 0.1),
      text: "",
    })
    onMounted(() => {
      setTimeout(() => {
        TextareaRef.value?.focus()
      }, 500)
    })
    watch(
      state,
      (n) => {
        emit("update-text-list", n)
      },
      {
        deep: true,
      }
    )
    return {
      state,
      TextareaRef,
    }
  },
})
</script>
<style scoped>
.textarea {
  top: v-bind(y + "px");
  left: v-bind(x + "px");
  position: absolute;
  padding: 1px;
  margin: 0;
  border: 1px solid black;
  border-radius: 0;
  outline: none;
  resize: none;
  overflow: hidden;
  width: 250px;
  height: 70px;
  font-size: v-bind(size + "px");
  /* background-color: #0000000f; */
  color: rgb(17, 74, 128);
}
</style>
