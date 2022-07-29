<template>
  <Viewer
    ref="ViewerRef"
    :buf="pdfBufferArray"
    :enabledPage="isView"
    edit
    @update-state="updateState"
  >
    <template #canvas>
      <Paint
        v-if="isPaint"
        ref="PaintRef"
        :width="viewportWidth"
        :height="viewportHeight"
        :paintColor="paintColor"
      ></Paint>
      <Text
        v-else-if="isText"
        ref="TextRef"
        :width="viewportWidth"
        :height="viewportHeight"
      ></Text>
      <Squre
        v-else-if="isSqure"
        :width="viewportWidth"
        :height="viewportHeight"
      ></Squre>
      <div v-else></div>
    </template>
    <template #edit-bar>
      <n-button-group v-if="isPaint">
        <n-button title="退出" @click="handleExit()">退出</n-button>
        <n-button title="保存画笔" @click="handleSavePaint()"
          >保存画笔</n-button
        >
        <n-popconfirm :show-icon="false">
          <template #trigger>
            <n-button>
              <div :class="['select-color', colorName]"></div>
            </n-button>
          </template>
          <div class="color-box">
            <div :class="['checked-color', colorName]"></div>
            <div>
              <!-- 第一组颜色 -->
              <div class="color-box">
                <div
                  class="color-item color1"
                  @click="chooseColor('color1', '#000000')"
                ></div>
                <div
                  class="color-item color2"
                  @click="chooseColor('color2', '#808080')"
                ></div>
                <div
                  class="color-item color3"
                  @click="chooseColor('color3', '#800000')"
                ></div>
                <div
                  class="color-item color4"
                  @click="chooseColor('color4', '#F7883A')"
                ></div>
                <div
                  class="color-item color5"
                  @click="chooseColor('color5', '#308430')"
                ></div>
                <div
                  class="color-item color6"
                  @click="chooseColor('color6', '#385AD3')"
                ></div>
                <div
                  class="color-item color7"
                  @click="chooseColor('color7', '#800080')"
                ></div>
                <div
                  class="color-item color8"
                  @click="chooseColor('color8', '#009999')"
                ></div>
              </div>
              <!-- 第二组颜色 -->
              <div class="color-box">
                <div
                  class="color-item color9"
                  @click="chooseColor('color9', '#FFFFFF')"
                ></div>
                <div
                  class="color-item color10"
                  @click="chooseColor('color10', '#C0C0C0')"
                ></div>
                <div
                  class="color-item color11"
                  @click="chooseColor('color11', '#FB3838')"
                ></div>
                <div
                  class="color-item color12"
                  @click="chooseColor('color12', '#FFFF00')"
                ></div>
                <div
                  class="color-item color13"
                  @click="chooseColor('color13', '#99CC00')"
                ></div>
                <div
                  class="color-item color14"
                  @click="chooseColor('color14', '#3894E4')"
                ></div>
                <div
                  class="color-item color15"
                  @click="chooseColor('color15', '#F31BF3')"
                ></div>
                <div
                  class="color-item color16"
                  @click="chooseColor('color16', '#16DCDC')"
                ></div>
              </div>
            </div>
          </div>
        </n-popconfirm>
      </n-button-group>
      <n-button-group v-else-if="isText">
        <n-button title="退出" @click="handleExit()">退出</n-button>
        <n-button title="保存文字" @click="handleSaveText()">保存文字</n-button>
        <!-- <n-popconfirm :show-icon="false">
          <template #trigger>
            <n-button>文字颜色</n-button>
          </template>
          <div class="color-box">
            <div class="color-item red" @click="chooseColor('red')"></div>
            <div class="color-item black" @click="chooseColor('black')"></div>
            <div class="color-item white" @click="chooseColor('white')"></div>
            <div class="color-item blue" @click="chooseColor('blue')"></div>
            <div class="color-item green" @click="chooseColor('green')"></div>
            <div class="color-item yellow" @click="chooseColor('yellow')"></div>
          </div>
        </n-popconfirm> -->
      </n-button-group>
      <n-button-group v-else-if="isSqure">
        <n-button title="退出" @click="handleExit()">退出</n-button>
        <n-button title="保存线框" @click="handleSaveSqure()"
          >保存线框</n-button
        >
        <!-- <n-popconfirm :show-icon="false">
          <template #trigger>
            <n-button>文字颜色</n-button>
          </template>
          <div class="color-box">
            <div class="color-item red" @click="chooseColor('red')"></div>
            <div class="color-item black" @click="chooseColor('black')"></div>
            <div class="color-item white" @click="chooseColor('white')"></div>
            <div class="color-item blue" @click="chooseColor('blue')"></div>
            <div class="color-item green" @click="chooseColor('green')"></div>
            <div class="color-item yellow" @click="chooseColor('yellow')"></div>
          </div>
        </n-popconfirm> -->
      </n-button-group>
      <n-button-group v-else>
        <n-button title="重做" @click="handleRestore()">重做</n-button>
        <n-button title="画笔" @click="handlePaint()">画笔</n-button>
        <n-button title="文字" @click="handleText()">文字</n-button>
        <n-button title="线框" @click="handleSqure()">线框</n-button>
        <n-button title="保存" @click="handleSave()">保存</n-button>
      </n-button-group>
    </template>
  </Viewer>
</template>
<script lang="ts">
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  computed,
  defineComponent,
  onMounted,
  reactive,
  toRefs,
  watch,
} from "vue"
import { PDFDocument, rgb } from "pdf-lib"
import Viewer, { PdfViewerRefs } from "../../Viewer/src/PdfViewer.vue"
import { getBufferArray } from "../../utils/"
import Paint, { PaintRefs } from "./Paint.vue"
import Text, { TextRefs } from "./Text.vue"
import Squre, { SqureRefs } from "./Squre.vue"
import { NButton, NButtonGroup, NPopconfirm } from "naive-ui"
type EditState = null | "Paint" | "Text" | "Squre"
export default defineComponent({
  name: "PdfEditor",
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  components: {
    Viewer,
    Paint,
    Text,
    Squre,
    NButton,
    NButtonGroup,
    NPopconfirm,
  },
  setup(props) {
    let pdfDoc: PDFDocument | null = null
    const state = reactive({
      current: 0,
      total: 0,
      viewportWidth: 0,
      viewportHeight: 0,
      editState: null as EditState,
      pdfBufferArray: {} as any,
      ViewerRef: {} as PdfViewerRefs,
      PaintRef: {} as PaintRefs,
      TextRef: {} as TextRefs,
      SqureRef: {} as SqureRefs,
      CanvasRef: {} as HTMLCanvasElement,
      colorName: "color1",
      paintColor: "#FB3838",
    })
    // computed
    const isView = computed(() => {
      return state.editState === null
    })
    const isPaint = computed(() => {
      return state.editState === "Paint"
    })
    const isText = computed(() => {
      return state.editState === "Text"
    })
    const isSqure = computed(() => {
      return state.editState === "Squre"
    })
    // method
    const handleRestore = async () => {
      console.log(props.src)
      // debugger
      state.pdfBufferArray = await getBufferArray(props.src)
    }
    const handleSave = () => {
      console.log(state.pdfBufferArray)
    }
    const handleExit = () => {
      state.editState = null
    }
    const buildPdfDoc = async () => {
      pdfDoc = await PDFDocument.load(state.pdfBufferArray)
    }
    const drawPaint = async (pngImageBase64: string) => {
      const pngImage = await pdfDoc!.embedPng(pngImageBase64)
      const pngDims = pngImage.scale(1)
      const pages = pdfDoc!.getPages()
      const currentPage = pages[state.current - 1]
      currentPage.drawImage(pngImage, {
        x: 0,
        y: 0,
        width: pngDims.width,
        height: pngDims.height,
      })
    }
    const handleSaveText = async () => {
      await buildPdfDoc()
      const pngImageBase64 = state.TextRef.drawTextBoxAndSave()
      await drawPaint(pngImageBase64)
      state.pdfBufferArray = await pdfDoc!.save()
      handleExit()
    }
    const handleSavePaint = async () => {
      await buildPdfDoc()
      const pngImageBase64 = state.PaintRef.save()
      await drawPaint(pngImageBase64)
      state.pdfBufferArray = await pdfDoc!.save()
      handleExit()
    }
    const handleSaveSqure = async () => {
      await buildPdfDoc()
      const pngImageBase64 = state.SqureRef.save()
      await drawPaint(pngImageBase64)
      state.pdfBufferArray = await pdfDoc!.save()
      handleExit()
    }
    const handlePaint = () => {
      state.editState = "Paint"
    }
    const handleText = () => {
      state.editState = "Text"
    }
    const handleSqure = () => {
      state.editState = "Squre"
    }
    const updateState = (parentState: any) => {
      state.current = parentState.current
      state.total = parentState.total
      state.viewportWidth = parentState.viewportWidth
      state.viewportHeight = parentState.viewportHeight
      // state.paintColor = parentState.paintColor
    }
    const fetchPdfDoc = async () => {
      state.pdfBufferArray = await getBufferArray(props.src)
      state.ViewerRef.refreshPdfDoc(state.pdfBufferArray)
    }
    // 选择画笔颜色
    const chooseColor = async (name: string, color: string) => {
      state.colorName = name
      state.paintColor = color
    }
    onMounted(async () => {
      await fetchPdfDoc()
      watch(
        () => state.pdfBufferArray,
        (n) => {
          state.ViewerRef.refreshPdfDoc(n)
        }
      )
    })
    return {
      ...toRefs(state),
      // computed
      isView,
      isPaint,
      isText,
      isSqure,
      // method
      updateState,
      handleSave,
      handleExit,
      handleSavePaint,
      handleSaveText,
      handleSaveSqure,
      handlePaint,
      handleText,
      handleSqure,
      handleRestore,
      chooseColor,
    }
  },
})
</script>
<style scoped>
.color-box {
  display: flex;
  flex-direction: row;
}
.color-item {
  width: 30px;
  height: 30px;
  border: 2px solid #d8d8d8;
  margin-right: 4px;
}
.select-color {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #d8d8d8;
}
.checked-color {
  width: 66px;
  height: 66px;
  border-radius: 1px 1px 1px 1px;
  border: 2px solid #d8d8d8;
}
.color1 {
  background: #000000;
}
.color2 {
  background: #808080;
}
.color3 {
  background: #800000;
}
.color4 {
  background: #f7883a;
}
.color5 {
  background: #308430;
}
.color6 {
  background: #385ad3;
}
.color7 {
  background: #800080;
}
.color8 {
  background: #009999;
}
.color9 {
  background: #ffffff;
}
.color10 {
  background: #c0c0c0;
}
.color11 {
  background: #fb3838;
}
.color12 {
  background: #ffff00;
}
.color13 {
  background: #99cc00;
}
.color14 {
  background: #3894e4;
}
.color15 {
  background: #f31bf3;
}
.color16 {
  background: #16dcdc;
}
</style>
