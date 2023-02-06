<template>
  <transition name="shuttlers-kit-modal-fade">
    <div
      v-show="value"
      @click="closeModal"
      class="shuttlers-kit-modal shuttlers-kit-modal--backdrop"
      id="backdrop"
    >
      <div
        class="shuttlers-kit-modal__dialog w-full min-h-[200px] max-w-[400px] w-full"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
        :id="modalId + new Date()"
      >
        <header id="modalTitle" class="shuttlers-kit-modal__dialog__header">
          <slot name="head"></slot>
        </header>
        <section
          id="modalDescription"
          class="shuttlers-kit-modal__dialog__body"
        >
          <slot name="body"></slot>
        </section>

        <footer id="modal-footer">
          <slot name="footer"></slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
import Vue from "vue";
const AppModal = Vue.component("app-modal", {
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
    modalId: {
      type: String,
      default: "shuttlers-modal",
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
  methods: {
    closeModal(event) {
      if (event.target.id === "backdrop") this.$emit("closeModal");
      document.body.style.overflow = "auto";
    },
  },
});

export default AppModal;
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
  background: #2b30454e !important;
  z-index: 999;
}

.shuttlers-kit-modal__dialog {
  border-radius: 16px;
  padding: 28px 32px;
  background: #fff;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow: auto;
}

.shuttlers-kit-modal__dialog__header {
  justify-content: space-between;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  z-index: 10;
}

.shuttlers-kit-modal__dialog__header--close {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
}

.shuttlers-kit-modal__dialog__body {
  position: relative;
  margin-bottom: 54px;
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
