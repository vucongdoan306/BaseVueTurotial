<template>
  <div class="v__input--container">
    <label :for="id" v-if="label">{{ label }}</label>
    <div class="v__input--wrapper" :style="styleWrapper" :class="classWrapper">
      <input
        type="text"
        class="v__input--item"
        :value="modelValue"
        @input="updateInput"
        :id="id"
        @click="bindingDestiny"
      />
    </div>
  </div>
</template>
<script>
export default {
  emits: ["update:modelValue", "bind-destiny"],
  created() {
    this.buildStyleComponent();
    this.buildClassComponent();
  },
  mounted() {
    this.id = this.uuidv4();
  },
  props: {
    label: {
      type: String,
      default: null,
    },
    height: {
      type: String,
      default: null,
    },
    width: {
      type: String,
      default: null,
    },
    destiny: {
      type: String,
      default: "medium",
    },
    modelValue: {
      type: String,
    },
  },
  data() {
    return {
      id: "",
      classWrapper: [],
      styleWrapper: [],
      inputValue: null,
    };
  },

  watch: {
    destiny() {
      this.buildClassComponent();
    },
  },

  methods: {
    //#region Giao diện
    /**
     * Xử lý style của component
     */
    buildStyleComponent() {
      if (this.height) {
        this.styleWrapper.push({ height: this.height + "px" });
      }

      if (this.width) {
        this.styleWrapper.push({ width: this.width + "px" });
      }
    },

    bindingDestiny() {
      this.$emit("bind-destiny", "large");
    },

    /**
     * Xử lý class của component
     */
    buildClassComponent() {
      this.classWrapper.push("v__input--wrapper--" + this.destiny);
    },
    //#endregion

    // #region Xử lý login
    /**
     * Hàm truyền ngược giá trị lại lên component cha và thực hiện update ngược props truyền vào (binding 2 chiều)
     * @param {any} event event mặc định trả ra của sự kiện
     */
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },

    /**
     * Hàm sinh id động cho thẻ input (sinh id không trùng kiểu uuid hoặc guid)
     */
    uuidv4() {
      return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
        (
          c ^
          (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
        ).toString(16)
      );
    }
    // #endregion
  },
};
</script>
<style lang="scss">
.v__input--container {
  padding-bottom: 6px;
  .v__input--wrapper {
    .v__input--item {
      border: 1px solid lightblue;
      border-radius: 4px;
      padding: 0 12px;
      box-sizing: border-box;
      outline: none;
      height: 100%;
      width: 100%;
      &:hover {
        border-color: blue;
      }

      &:focus {
        border-color: blue;
      }
    }
  }

  .v__input--wrapper--medium {
    height: 36px;
  }

  .v__input--wrapper--large {
    height: 48px;
  }

  .v__input--wrapper--small {
    height: 24px;
  }
}
</style>
