<script setup lang="ts">
import SnackBar from '@/layouts/components/SnackBar.vue'
import SkeletonPreview from '@/layouts/components/content/SkeletonSection.vue'
import axios from '@axios'

const data = ref({
  id: '',
  website: '',
  contact1: '',
  contact2: '',
  address: '',
  subtitle: '',
})

const logoFile = ref()
const snackbarRef = ref(null)

const loading = ref(false)

const fetchData = async () => {
  const response = await axios.get('/contents/footer/')

  data.value = response.data[0]
}

const sendData = async () => {
  loading.value = true

  const formData = new FormData()

  formData.append('website', data.value.website)
  formData.append('contact1', data.value.contact1)
  formData.append('contact2', data.value.contact2)
  formData.append('address', data.value.address)
  formData.append('subtitle', data.value.subtitle)

  if (logoFile.value)
    formData.append('logo', logoFile.value[0])

  try {
    const res = await axios.patch(`/contents/footer/${data.value.id}/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    if (snackbarRef.value && res.status === 200)
      snackbarRef.value.show('success', 'Success')

    fetchData()
    loading.value = false
  }
  catch (error) {
    if (snackbarRef.value)
      snackbarRef.value.show('error', 'Please contact your administrator.')
  }
}

onMounted(() => {
  fetchData()
})
</script>

<template>
  <!-- Login -->
  <section>
    <VCard>
      <SnackBar ref="snackbarRef" />
      <VCardText
        v-if="data.id"
        class="d-flex flex-column"
      >
        <div class="d-flex justify-space-between">
          <h6 class="text-h6 text-primary mb-3">
            Footer
          </h6>
        </div>
        <VForm>
          <VRow>
            <VCol cols="6">
              <VFileInput
                v-model="logoFile"
                label="logo"
                accept="image/*"
              />
            </VCol>
            <VCol cols="6">
              <VTextField
                v-model="data.website"
                label="Website Link"
              />
            </VCol>
            <VCol cols="6">
              <VTextField
                v-model="data.contact1"
                label="Contact Number 1"
              />
            </VCol>
            <VCol cols="6">
              <VTextField
                v-model="data.contact2"
                label="Contact Number 2"
              />
            </VCol>
            <VCol cols="6">
              <VTextField
                v-model="data.address"
                label="Address"
              />
            </VCol>
            <VCol cols="6">
              <VTextField
                v-model="data.subtitle"
                label="Subtitle"
              />
            </VCol>
          </VRow>
        </VForm>

        <div class="d-flex mt-3">
          <VSpacer />
          <VBtn
            :loading="loading"
            color="primary"
            @click="sendData"
          >
            Apply Changes
            <template #loader>
              <span class="custom-loader">
                <VIcon icon="bx-refresh" />
              </span>
            </template>
          </VBtn>
        </div>
      </VCardText>
      <SkeletonPreview v-else />
    </VCard>
  </section>
</template>

<style lang="scss">
.custom-loader{
  display: flex;
  animation: loader 1s infinite;
  color: white;
}

@keyframes loader {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
</style>
