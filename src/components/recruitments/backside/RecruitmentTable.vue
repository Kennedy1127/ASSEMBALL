<template>
  <div class="recruitment_table">
    <table class="fixed_headers">
      <thead>
        <tr>
          <th>標題</th>
          <th>守備位置</th>
          <th>地區</th>
          <th>更新日期</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>I want you ！</td>
          <td>捕手</td>
          <td>桃園市</td>
          <td>2023.07.05</td>
          <td>icon&icon</td>
        </tr>
        <tr>
          <td>I want you ！</td>
          <td>捕手</td>
          <td>桃園市</td>
          <td>2023.07.05</td>
          <td>icon&icon</td>
        </tr>
        <tr>
          <td>I want you ！</td>
          <td>捕手</td>
          <td>桃園市</td>
          <td>2023.07.05</td>
          <td>icon&icon</td>
        </tr>
        <tr>
          <td>I want you ！</td>
          <td>捕手</td>
          <td>桃園市</td>
          <td>2023.07.05</td>
          <td>icon&icon</td>
        </tr>
        <tr>
          <td>I want you ！</td>
          <td>捕手</td>
          <td>桃園市</td>
          <td>2023.07.05</td>
          <td>icon&icon</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script></script>

<style lang="scss">
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 1.25rem;
  thead {
    color: var(--primary-blue);
    background-color: var(--secondary-blue-3);

    th {
      padding: 0.5rem 0;
    }
  }
  td {
    padding: 3rem 0;
    text-align: center;
  }
  tbody tr:nth-child(2n + 1) {
    background-color: var(--secondary-blue-4);
  }
  tbody tr:nth-child(2n + 2) {
    background-color: var(--secondary-blue-3);
  }
}
</style>
