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
    <FundList v-bind:funds="funds"/>
  </div>
</template>

<script>
import Fund from '../services/getFundsByRange'
import FundList from '../components/FundList.vue'
export default {
    data() {
        return {
            funds: []
        }
    },
    methods: {
        async selectPeriod (e) {
            const period = e.target.value
            this.funds = await Fund.getFundsByRange(period)
        }
    },
    components: {
        FundList
    }

}
</script>

<style>

</style>