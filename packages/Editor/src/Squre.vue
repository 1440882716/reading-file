<template>
  <canvas
    ref="CanvasRef"
    id="CanvasRef"
    class="canvas"
    :width="width"
    :height="height"
    @mousedown="canvasDown($event)"
    @mouseup="canvasUp($event)"
    @mousemove="canvasMove($event)"
  ></canvas>
  <img :src="testImg" style="width: 300px; height: 200px" alt="" />
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, watch } from "vue"
import { useMouseInElement, useMousePressed } from "@vueuse/core"
import html2canvas from "html2canvas"
// import { ColorTypes, rgb } from "pdf-lib"
const Squre = defineComponent({
  props: {
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    lineWidth: {
      type: Number,
      default: 1,
    },
    paintColor: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const state = reactive({
      ctx: null as CanvasRenderingContext2D | null,
      CanvasRef: {} as HTMLCanvasElement,
      startX: 0,
      startY: 0,
      testImg: "",
    })
    const save = () => {
      return state.CanvasRef.toDataURL("image/png")
    }
    onMounted(() => {
      state.ctx = state.CanvasRef.getContext("2d")
      // state.testImg = state.CanvasRef.toDataURL("image/png")
      const { pressed } = useMousePressed()
      const { elementX, elementY } = useMouseInElement(state.CanvasRef)
      watch([elementX, elementY], (n) => {
        // debugger
        if (state.ctx) {
          if (pressed.value) {
            state.ctx.lineTo(n[0], n[1])
            state.ctx.moveTo(n[0], n[1])
            // console.log("+++++++++", n)
            // console.log("=======", n[0], n[1])
            state.ctx.lineWidth = props.lineWidth * 2
            //  拿到鼠标按下、松开的坐标点 计算矩形宽高画框
            // 修改颜色
            state.ctx.strokeStyle = "cornflowerblue"
            // strokeRect(起点横坐标，起点纵坐标,宽,高) ps:宽和高的单位是像素
            state.ctx.strokeRect(n[0], n[1], 200, 100)
            // state.testImg = state.CanvasRef.toDataURL("image/png")
            // console.log("操作后的图片===", state.testImg)
            getImg()
          } else {
            state.ctx.beginPath()
          }
        }
      })
      // 在canvas上鼠标按下
      // state.CanvasRef.οnmοusedοwn(e){}
    })
    // methods
    const canvasDown = (e: any) => {
      console.log("按下点的坐标======", e.offsetX, e.offsetY)
      state.startX = e.offsetX
      state.startY = e.offsetY
    }
    const canvasUp = (e: any) => {
      console.log("松开点的坐标======", e.offsetX, e.offsetY)
      let widthPx = e.offsetX - state.startX
      let heightPx = e.offsetY - state.startY
      state.ctx = state.CanvasRef.getContext("2d")
      const { pressed } = useMousePressed()
      const { elementX, elementY } = useMouseInElement(state.CanvasRef)
      watch([elementX, elementY], (n) => {
        // debugger
        if (state.ctx) {
          if (pressed.value) {
            // 修改颜色
            // state.ctx.fill()
            // state.ctx.beginPath()
            // state.ctx.clearRect(0, 0, props.width, props.height)
            // state.ctx.strokeStyle = "red"
            // // strokeRect(起点横坐标，起点纵坐标,宽,高) ps:宽和高的单位是像素
            // state.ctx.strokeRect(state.startX, state.startY, widthPx, heightPx)
          } else {
            state.ctx.beginPath()
          }
        }
      })
    }
    const drawRect = (e: any) => {
      // let widthPx = e.offsetX - state.startX
      // let heightPx = e.offsetY - state.startY
      // state.ctx = state.CanvasRef.getContext("2d")
      // const { pressed } = useMousePressed()
      // const { elementX, elementY } = useMouseInElement(state.CanvasRef)
      // watch([elementX, elementY], (n) => {
      //   if (state.ctx) {
      //     if (pressed.value) {
      //       // 修改颜色
      //       state.ctx.fill()
      //       state.ctx.beginPath()
      //       state.ctx.clearRect(0, 0, props.width, props.height)
      //       state.ctx.strokeStyle = "red"
      //       state.ctx.strokeRect(state.startX, state.startY, widthPx, heightPx)
      //     } else {
      //       state.ctx.beginPath()
      //     }
      //   }
      // })
    }
    const canvasMove = (e: any) => {
      drawRect(e)
    }
    // 截图
    const getImg = () => {
      // 第一个参数是需要生成截图的元素,第二个是自己需要配置的参数,宽高等
      html2canvas(state.CanvasRef, {
        backgroundColor: null,
      }).then((canvas) => {
        let url = canvas.toDataURL("image/png")
        console.log("操作后的图片===", url)
        state.testImg = url // 把生成的base64位图片上传到服务器,生成在线图片地址
        if (state.testImg) {
          // 渲染完成之后让图片显示，用v-show可以避免一些bug
          // this.isShow = true;
        }
        // this.sendUrl();
      })
    }
    return {
      ...toRefs(state),
      // method
      save,
      canvasDown,
      canvasUp,
      canvasMove,
      drawRect,
      getImg,
    }
  },
})
export default Squre
export type SqureRefs = InstanceType<typeof Squre>
</script>

<style scoped>
.canvas {
  position: absolute;
}
</style>
