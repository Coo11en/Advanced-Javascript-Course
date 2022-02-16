<template>
  <div>
    <header>
      <h1>Shop create</h1>
      <button class="btnCart" v-on:click="CartDisplay">Корзина</button>
      <div class="cart" v-if="Cart">
        <button class="btnCloseCart" v-on:click="CartHide">Закрыть</button>
        <ul class="cardList">
          <li class="card" v-bind:key="index" v-for="item of cart">
            <h3>{{ item.name }}</h3>
            <span> Цвет: {{ item.color }} </span>
            <span> Цена: {{ item.price }} </span>
            <button class="btnAdd">Убрать из корзины</button>
          </li>
        </ul>
      </div>
    </header>
    <main>
      <h2>Catalog</h2>
      <div class="Catalog">
        <ul class="catalogList">
          <li class="card" v-bind:key="index" v-for="item of catalog">
            <h3>{{ item.name }}</h3>
            <span> Цвет: {{ item.color }} </span>
            <span> Цена: {{ item.price }} </span>
            <button class="btnAdd">В корзину</button>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Cart: false,
      catalog: [
        { name: "Боюки", color: "Черный", price: "100$" },
        { name: "Боюки", color: "Синий", price: "105$" },
        { name: "Боюки", color: "Серый", price: "107$" },
        { name: "Боюки", color: "Голубой", price: "100$" },
        { name: "Жакет", color: "Черный", price: "52$" },
        { name: "Жакет", color: "Синий", price: "55$" },
        { name: "Жакет", color: "Серый", price: "57$" },
        { name: "Жакет", color: "Голубой", price: "55$" },
        { name: "Худди", color: "Черный", price: "72$" },
        { name: "Худди", color: "Синий", price: "75$" },
        { name: "Худди", color: "Желтый", price: "77$" },
        { name: "Худди", color: "Голубой", price: "75$" },
        { name: "Кепка", color: "Черный", price: "12$" },
        { name: "Кепка", color: "Синий", price: "12$" },
        { name: "Кепка", color: "Желтый", price: "15$" },
        { name: "Кепка", color: "Голубой", price: "15$" },
      ],
      cart: [
        { name: "Боюки", color: "Синий", price: "105$" },
        { name: "Худди", color: "Черный", price: "72$" },
        { name: "Кепка", color: "Голубой", price: "15$" },
      ],
    };
  },
  methods: {
    CartDisplay() {
      this.Cart = true;
    },
    CartHide() {
      this.Cart = false;
    },
  },
};
</script>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

h1 {
  text-align: center;
}

.btnCart {
  position: absolute;
  right: 2%;
  top: 1vh;
  padding: 5px 40px;
}

.cart {
  width: 40%;
  height: 40vh;
  background: #fff;
  border: 2px solid black;
  border-radius: 10px;
  position: absolute;
  top: 10%;
  right: 1%;
}

header {
  height: 5vh;
  background-color: rgb(145, 220, 255);
}

h2 {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 20px;
}

.Catalog {
  background-color: rgb(116, 234, 255);
  height: 95vh;
}

.card {
  width: 200px;
  height: 150px;
  border: 1px solid #000;
  display: flex;
  flex-flow: column;
  text-align: center;
  justify-content: end;
  border-radius: 10px;
}

.cardList {
  gap: 10px;
  display: flex;
  place-content: center;
  margin-top: 40px;
}

.catalogList {
  gap: 10px;
  display: flex;
  flex-wrap: wrap;
  place-content: center;
  padding-top: 20px;
}

.btnAdd {
  padding: 5px;
  border-radius: 10px;
  border: 1px solid #000;
}
.btnAdd:hover {
  background-color: rgb(156, 211, 248);
}

.btnCloseCart {
  padding: 5px;
  position: absolute;
  top: 5px;
  right: 5px;
}
</style>
