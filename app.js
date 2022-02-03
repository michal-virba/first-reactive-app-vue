const app = Vue.createApp({
  data() {
    return {
      enteredItem: "",
      enteredHowMany: "",
      enteredUnit: "",
      isInCart: "",
      items: [],
    };
  },

  methods: {
    addItem() {
      this.isInCart = false;

      if (!this.enteredItem || !this.enteredHowMany || !this.enteredUnit) {
        alert("At least one input is missing!");
        return;
      } else {
        this.items.push([
          this.enteredItem,
          this.enteredHowMany,
          this.enteredUnit,
          this.isInCart,
        ]);
      }

      this.enteredItem = "";
      this.enteredHowMany = "";
      this.enteredUnit = "";
      this.isInCart = "";
    },

    removeItem(idx) {
      this.items.splice(idx, 1);
    },

    puttingToCart(key) {
      this.items[key][3] = !this.items[key][3];
    },
  },
});

app.mount("#grocery-list");
