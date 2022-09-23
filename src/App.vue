<template>
  <h1>Hello Vue :)</h1>
  <div v-if="showBooks">
    <ul>
      <li v-for="(book, index) in books" :class="{ fav: book.isFav }" :key="book.id" @click="toggleFavBook(index)">
        <img :src="book.img" :alt="book.title">
        <h3>{{ book.title }}</h3>
        <p>{{ book.author }}</p>
      </li>
    </ul>
  </div>
  <div v-else>
    <p>Click the button below to show books</p>
  </div>

  <button @click="toggleShowBooks">
    <span v-if="showBooks">Hide books</span>
    <span v-else>Show books</span>
  </button>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      showBooks: true,
      books: [
        { id: 1, title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpg', isFav: true },
        { id: 2, title: 'the way of kings', author: 'brandon sanderson', img: 'assets/2.jpg', isFav: false },
        { id: 3, title: 'the final empire', author: 'brandon sanderson', img: 'assets/3.jpg', isFav: true },
      ],
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks =  !this.showBooks
    },
    toggleFavBook(index) {
      this.books[index].isFav = !this.books[index].isFav
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
body{
  background: #eee;
  max-width: 960px;
  margin: 20px auto;
}
p, h3, ul{
  margin: 0;
  padding: 0;
}
li{
  list-style-type: none;
  background: #fff;
  margin: 20px auto;
  padding: 10px 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
li.fav{
  background: #ff9ed2;
  color: white;
}
</style>
