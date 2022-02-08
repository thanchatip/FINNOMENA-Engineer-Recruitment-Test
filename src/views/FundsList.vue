<template>
  <div class="container mt-4">
    <h1>Fund</h1>
    <hr>
    <div class="form-inline">
    <label>ตัวกรอง</label>
    <div class="btn-group" role="group" aria-label="Fund period">
            <button type="button" class="btn btn-outline-primary" value="1D" @click="selectPeriod($event)">1D</button>
            <button type="button" class="btn btn-outline-primary" value="1W" @click="selectPeriod($event)">1W</button>
            <button type="button" class="btn btn-outline-primary" value="1M" @click="selectPeriod($event)">1M</button>
            <button type="button" class="btn btn-outline-primary" value="1Y" @click="selectPeriod($event)">1Y</button>
    </div>
    </div>
    <div v-if="isLoading" class="loader"></div>
    <FundList v-if="!isLoading" v-bind:funds="funds"/>
  </div>
</template>

<script>
import Fund from '../services/getFundsByRange'
import FundList from '../components/FundList.vue'
export default {
    data() {
        return {
            funds: [],
            isLoading: false
        }
    },
    methods: {
        async selectPeriod (e) {
            const period = e.target.value
            try {
                this.isLoading = true
                this.funds = await Fund.getFundsByRange(period)
            } catch (error) {
                console.log(error)
            } finally {
                this.isLoading = false
            }
            
        }
    },
    components: {
        FundList
    },
    async mounted() {
        try {
            this.isLoading = true
            this.funds = await Fund.getFundsByRange('1D')
            } catch (error) {
                console.log(error)
            } finally {
                this.isLoading = false
            }
    },

}
</script>