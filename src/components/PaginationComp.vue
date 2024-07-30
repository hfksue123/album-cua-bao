<template>
  <div id="pagechange">
    <ul class="pagination">
      <li :class="{ disabled: currentPage === 1 }" @click="prevPage">
        <a href="#">Prev</a>
      </li>
      <li
        v-for="(page, index) in totalPages"
        :key="index"
        :class="{ active: page === currentPage }"
      >
        <router-link :to="links[index]" @click.stop="setPage(page)">
          {{ page }}
        </router-link>
      </li>
      <li :class="{ disabled: currentPage === totalPages }" @click="nextPage">
        <a href="#">Next</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
    links: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  methods: {
    setPage(page) {
      if (page !== this.currentPage) {
        window.scrollTo({ top: 0, behavior: "smooth" }); // Cuộn lên đầu trang
        this.currentPage = page;
        this.$router.push(this.links[page - 1]);
        this.$emit("page-changed", page);
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.$router.push(this.links[this.currentPage - 1]);
        this.$emit("page-changed", this.currentPage);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.$router.push(this.links[this.currentPage - 1]);
        this.$emit("page-changed", this.currentPage);
      }
    },
  },
  watch: {
    $route(to) {
      const pageIndex = this.links.indexOf(to.path);
      if (pageIndex !== -1) {
        this.currentPage = pageIndex + 1;
      }
    },
  },
  mounted() {
    const pageIndex = this.links.indexOf(this.$route.path);
    if (pageIndex !== -1) {
      this.currentPage = pageIndex + 1;
    }
  },
};
</script>

<style scoped>
#pagechange {
  position: relative;
  width: 100%;
  padding: 0 0 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
#pagechange .pagination {
  font-family: "Roboto Condensed", "san-serif";
  position: relative;
  height: 60px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(3px);
  border-radius: 2px;
}
#pagechange .pagination li {
  list-style-type: none;
  display: inline-block;
  cursor: pointer;
}
#pagechange .pagination li a {
  position: relative;
  padding: 20px 25px;
  text-decoration: none;
  color: #fff;
  font-size: 17px;
}
#pagechange .pagination li a:hover,
#pagechange .pagination li.active a {
  background: rgba(255, 255, 255, 0.2);
}
#pagechange .pagination li.disabled a {
  cursor: not-allowed;
  opacity: 0.5;
}

@media (max-width: 576px) {
  #pagechange {
    padding: 0 0 20px 0;
  }
  #pagechange .pagination {
    height: 40px;
  }
  #pagechange .pagination li a {
    padding: 11px 16px;
    font-size: 15px;
  }
}
</style>
<!-- 
Cách sử dụng:
khai báo trong script của file cần khai báo:

totalPages: 1, // Số trang tổng cộng, có thể thay đổi
links: ["/giga"],

trong template: 

<PaginationComp
    :totalPages="totalPages"
    :links="links"
    @page-changed="handlePageChange"
/> 
-->
