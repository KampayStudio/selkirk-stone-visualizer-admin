<script setup lang="ts">
import PopularityRanking from '@/layouts/components/dashboard/summary/PopularityRanking.vue'
import TopMostCollectedStoneVariant from '@/layouts/components/dashboard/summary/TopMostCollectedStoneVariant.vue'
import TopMostPopularStoneVariant from '@/layouts/components/dashboard/summary/TopMostPopularStoneVariant.vue'
import UserLocHeatmap from '@/layouts/components/dashboard/summary/UserLocHeatmap.vue'
import UserStatsCard from '@/layouts/components/dashboard/summary/UserStatsCard.vue'
</script>

<template>
  <section>
    <VRow>
      <!-- Users Statistic Card -->
      <VCol
        cols="12"
        lg="5"
        md="6"
      >
        <UserStatsCard />
      </VCol>
      <!-- User Location Heatmap -->
      <VCol
        cols="12"
        lg="7"
        md="6"
      >
        <UserLocHeatmap />
      </VCol>
      <VCol cols="12">
        <PopularityRanking />
      </VCol>
      <VCol
        cols="12"
        md="6"
      >
        <TopMostPopularStoneVariant />
      </VCol>
      <VCol
        cols="12"
        md="6"
      >
        <TopMostCollectedStoneVariant />
      </VCol>
    </VRow>
  </section>
</template>
