<template>
  <div>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">ลำดับ</th>
          <th scope="col">ชื่อกองทุน</th>
          <th scope="col">อันดับกองทุน</th>
          <th scope="col">เวลาที่ข้อมูลถูกอัพเดท</th>
          <th scope="col">ราคา</th>
        </tr>
      </thead>
      <tbody v-for="fund,index in funds" :key="index">
        <tr>
          <th scope="row">{{ index+1 }}</th>
          <td>{{ fund.thailand_fund_code }}</td>
          <td>{{ fund.nav_return }}</td>
          <td>{{ fund.nav_date.split('T')[0] | toThaiDateString }}</td>
          <td>{{ fund.nav }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
    name: 'FundList',
    props: {
        funds: []
    }
}
</script>

<style>
</style>