<template>
  <transition name="shuttlers-kit-modal-fade">
    <div v-show="value" class="shuttlers-kit-modal shuttlers-kit-modal--backdrop" >
      <div
        class="shuttlers-kit-modal__dialog w-full min-h-[200px]"
        role="dialog"
        :style="{ maxWidth: `${width}` }"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
        :id="modalId+new Date()"
      >
        <header id="modalTitle" class="shuttlers-kit-modal__dialog__header">
          <h1 class="text-[20px]">{{ modalTitle }}</h1>
          <div
            class="shuttlers-kit-modal__dialog__header--close"
            aria-label="Close modal"
            @click="closeModal"
          >
            <CloseIcon />
          </div>
        </header>
        <section id="modalDescription" class="shuttlers-kit-modal__dialog__body">
          <slot name="body"></slot>
        </section>

        <footer class="mt-auto flecx w-full" id="modal-footer">
          <slot name="footer"></slot>
        </footer>
      </div>
    </div>
  </transition>
</template>


<script>
import CloseIcon from "../atom/icons/CloseIcon.vue";
export default {
  data() {
    return {
      openMal: false,
    };
  },
  props: {
    width: {
      type: String,
    },
    value: {
      type: Boolean,
    },
    modalId:{
      type: String,
      default: 'shuttlers-modal'
    },
    modalTitle: {
      type: String,
    },
  },

  watch: {
    value(val) {
      if (val) {
        document.body.style.overflow = "hidden";
        this.openMal = val;
      } else {
        document.body.style.overflow = "visible";
        this.openMal = val;
      }
    },
  },
  components: {
    CloseIcon,
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
      document.body.style.overflow = "auto";
    },
  },
};
</script>


<style>
.shuttlers-kit-modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  right: 0;
  display: flex;
  justify-content: center;
  padding: 20px;
  align-items: center;
  transition: opacity 0.3s ease;
}

.shuttlers-kit-modal--backdrop {
  /* backdrop-filter: blur(10px); */
  background: #2b30454e !important;
  z-index: 999;
}

.shuttlers-kit-modal__dialog {
  border-radius: 16px;
  padding: 28px 32px;
  max-height: calc(100vh - 20px);
  background: #fff;
  /* overflow-x: auto; */
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow: auto
}

.shuttlers-kit-modal__dialog__header {
  justify-content: space-between;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  z-index: 10;
}

.shuttlers-kit-modal__dialog__header--close {
  /* height: 40px;
  width: 40px; */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
}

.shuttlers-kit-modal__dialog__body {
  position: relative;
}

.shuttlers-kit-modal-fade-enter,
.shuttlers-kit-modal-fade-leave-to {
  opacity: 0;
}

.shuttlers-kit-modal-fade-enter .shuttlers-kit-modal__dialog,
.shuttlers-kit-modal-fade-leave-to .shuttlers-kit-modal__dialog {
  transform: scale(0.7);
}
</style>