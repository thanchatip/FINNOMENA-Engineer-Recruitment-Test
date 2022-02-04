<template>
  <div class="container mt-4">
    <h1>Fund List page</h1>
    <h2>Select period to see Rank</h2>
    <div class="btn-group" role="group" aria-label="Fund period">
            <button type="button" class="btn btn-outline-primary" value="1D" @click="selectPeriod($event)">1D</button>
            <button type="button" class="btn btn-outline-primary" value="1W" @click="selectPeriod($event)">1W</button>
            <button type="button" class="btn btn-outline-primary" value="1M" @click="selectPeriod($event)">1M</button>
            <button type="button" class="btn btn-outline-primary" value="1Y" @click="selectPeriod($event)">1Y</button>
    </div>
    <table class="table">
            <thead>
                <tr>
                <th scope="col">ลำดับ</th>
                <th scope="col">ชื่อกองทุน</th>
                <th scope="col">อันดับกองทุน</th>
                <th scope="col">เวลาที่ข้อมูลถูกอัพเดท</th>
                <th scope="col">ราคา</th>
                </tr>
            </thead>
            <tbody v-for="fund,index in funds" :key="index"> <!--for loop to show fund list-->
                <tr>
                <th scope="row">{{ index+1 }}</th>
                <td>{{ fund.thailand_fund_code }}</td>
                <td>{{ fund.nav_return }}</td>
                <td>{{ fund.nav_date.split('T')[0] }}</td>
                <td>{{ fund.nav }}</td>
                </tr>
            </tbody>
    </table>

  </div>
</template>

<script>
export default {
    data() {
        return {
            funds: [
               {
                    "mstar_id": "F00000OV8W",
                    "thailand_fund_code": "SCBOIL",
                    "nav_return": 65.9877,
                    "nav": 4.9122,
                    "nav_date": "2021-09-06T00:00:00.000Z",
                    "avg_return": 65.394614
                    } 
            ]
        }
    },
    methods: {
        async selectPeriod (e) {
            const period = e.target.value
            console.log(period)
        }
    }

}
</script>

<style>

</style>