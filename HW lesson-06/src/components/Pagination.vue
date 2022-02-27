<template>
  <nav class="pagination">
    <ul class="pagination-list">
      <li class="pagination-item">
        <button class="pagination-link">
          <svg
            width="9"
            height="14"
            viewBox="0 0 9 14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.99512 2L3.99512 7L8.99512 12L7.99512 14L0.995117 7L7.99512 0L8.99512 2Z"
            />
          </svg>
        </button>
      </li>
      <li class="pagination-item">
        <button class="pagination-link pagination-link--active">1</button>
      </li>
      <li class="pagination-item">
        <button class="pagination-link">2</button>
      </li>
      <li class="pagination-item">
        <button class="pagination-link">3</button>
      </li>
      <li class="pagination-item">
        <button class="pagination-link">4</button>
      </li>
      <li class="pagination-item">
        <button class="pagination-link">5</button>
      </li>
      <li class="pagination-item">
        <button class="pagination-link">6</button>
      </li>
      <li class="pagination-item pagination-item--separator">
        <span>....</span>
      </li>
      <li class="pagination-item">
        <button class="pagination-link">20</button>
      </li>
      <li class="pagination-item">
        <button class="pagination-link">
          <svg
            width="9"
            height="14"
            viewBox="0 0 9 14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.994995 12L5.995 7L0.994995 2L1.995 0L8.995 7L1.995 14L0.994995 12Z"
            />
          </svg>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Pagination",
};
</script>

<style>
</style>