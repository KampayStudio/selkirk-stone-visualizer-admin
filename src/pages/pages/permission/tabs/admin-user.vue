<script setup lang="ts">
import Swal from 'sweetalert2'
import { VDataTable } from 'vuetify/labs/VDataTable'
import axios from '@axios'

const props = defineProps({
  search: String,
})

const tableContent = ref([
  {
    id: 1,
    name: 'Alex',
    email: 'alex@mailservice.com',
    photo: 'https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png',
    permission: {
      administrator: true,
      content_managing: true,
      support: true,
      analytics: true,
      product_managing: true,
    },
  },
  {
    id: 2,
    name: 'Sam',
    email: 'sam@site.com',
    photo: 'https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png',
    permission: {
      administrator: true,
      content_managing: true,
      support: true,
      analytics: true,
      product_managing: true,
    },
  },
  {
    id: 3,
    name: 'Chris',
    email: 'chris@netmail.com',
    photo: 'https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png',
    permission: {
      administrator: true,
      content_managing: true,
      support: true,
      analytics: true,
      product_managing: true,
    },
  },
  {
    id: 4,
    name: 'Jordan',
    email: 'jordan@site.com',
    photo: 'https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png',
    permission: {
      administrator: true,
      content_managing: true,
      support: true,
      analytics: true,
      product_managing: true,
    },
  },
  {
    id: 5,
    name: 'Taylor',
    email: 'taylor@post.com',
    photo: 'https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png',
    permission: {
      administrator: true,
      content_managing: true,
      support: true,
      analytics: true,
      product_managing: true,
    },
  },
  {
    id: 6,
    name: 'Morgan',
    email: 'morgan@webmail.com',
    photo: 'https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png',
    permission: {
      administrator: true,
      content_managing: true,
      support: true,
      analytics: true,
      product_managing: true,
    },
  },
  {
    id: 7,
    name: 'Casey',
    email: 'casey@mail.com',
    photo: 'https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png',
    permission: {
      administrator: true,
      content_managing: true,
      support: true,
      analytics: true,
      product_managing: true,
    },
  },
  {
    id: 8,
    name: 'Jamie',
    email: 'jamie@inbox.com',
    photo: 'https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png',
    permission: {
      administrator: true,
      content_managing: true,
      support: true,
      analytics: true,
      product_managing: true,
    },
  },
  {
    id: 9,
    name: 'Riley',
    email: 'riley@email.net',
    photo: 'https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png',
    permission: {
      administrator: true,
      content_managing: true,
      support: true,
      analytics: true,
      product_managing: true,
    },
  },
  {
    id: 10,
    name: 'Cameron',
    email: 'cameron@netmail.com',
    photo: 'https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png',
    permission: {
      administrator: true,
      content_managing: true,
      support: true,
      analytics: true,
      product_managing: true,
    },
  },
  {
    id: 11,
    name: 'Alex',
    email: 'alex@mailservice.com',
    photo: 'https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png',
    permission: {
      administrator: true,
      content_managing: true,
      support: true,
      analytics: true,
      product_managing: true,
    },
  },
  {
    id: 12,
    name: 'Sam',
    email: 'sam@site.com',
    photo: 'https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png',
    permission: {
      administrator: true,
      content_managing: true,
      support: true,
      analytics: true,
      product_managing: true,
    },
  },
  {
    id: 13,
    name: 'Chris',
    email: 'chris@netmail.com',
    photo: 'https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png',
    permission: {
      administrator: true,
      content_managing: true,
      support: true,
      analytics: true,
      product_managing: true,
    },
  },
  {
    id: 14,
    name: 'Jordan',
    email: 'jordan@site.com',
    photo: 'https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png',
    permission: {
      administrator: true,
      content_managing: true,
      support: true,
      analytics: true,
      product_managing: true,
    },
  },
  {
    id: 15,
    name: 'Taylor',
    email: 'taylor@post.com',
    photo: 'https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png',
    permission: {
      administrator: true,
      content_managing: true,
      support: true,
      analytics: true,
      product_managing: true,
    },
  },
  {
    id: 16,
    name: 'Morgan',
    email: 'morgan@webmail.com',
    photo: 'https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png',
    permission: {
      administrator: true,
      content_managing: true,
      support: true,
      analytics: true,
      product_managing: true,
    },
  },
  {
    id: 17,
    name: 'Casey',
    email: 'casey@mail.com',
    photo: 'https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png',
    permission: {
      administrator: true,
      content_managing: true,
      support: true,
      analytics: true,
      product_managing: true,
    },
  },
  {
    id: 18,
    name: 'Jamie',
    email: 'jamie@inbox.com',
    photo: 'https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png',
    permission: {
      administrator: true,
      content_managing: true,
      support: true,
      analytics: true,
      product_managing: true,
    },
  },
  {
    id: 19,
    name: 'Riley',
    email: 'riley@email.net',
    photo: 'https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png',
    permission: {
      administrator: true,
      content_managing: true,
      support: true,
      analytics: true,
      product_managing: true,
    },
  },
  {
    id: 20,
    name: 'Cameron',
    email: 'cameron@netmail.com',
    photo: 'https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png',
    permission: {
      administrator: true,
      content_managing: true,
      support: true,
      analytics: true,
      product_managing: true,
    },
  },
  {
    id: 21,
    name: 'Alex',
    email: 'alex@mailservice.com',
    photo: 'https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png',
    permission: {
      administrator: true,
      content_managing: true,
      support: true,
      analytics: true,
      product_managing: true,
    },
  },
  {
    id: 22,
    name: 'Sam',
    email: 'sam@site.com',
    photo: 'https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png',
    permission: {
      administrator: true,
      content_managing: true,
      support: true,
      analytics: true,
      product_managing: true,
    },
  },
  {
    id: 23,
    name: 'Chris',
    email: 'chris@netmail.com',
    photo: 'https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png',
    permission: {
      administrator: true,
      content_managing: true,
      support: true,
      analytics: true,
      product_managing: true,
    },
  },
  {
    id: 24,
    name: 'Jordan',
    email: 'jordan@site.com',
    photo: 'https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png',
    permission: {
      administrator: true,
      content_managing: true,
      support: true,
      analytics: true,
      product_managing: true,
    },
  },
  {
    id: 25,
    name: 'Taylor',
    email: 'taylor@post.com',
    photo: 'https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png',
    permission: {
      administrator: true,
      content_managing: true,
      support: true,
      analytics: true,
      product_managing: true,
    },
  },
  {
    id: 26,
    name: 'Morgan',
    email: 'morgan@webmail.com',
    photo: 'https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png',
    permission: {
      administrator: true,
      content_managing: true,
      support: true,
      analytics: true,
      product_managing: true,
    },
  },
  {
    id: 27,
    name: 'Casey',
    email: 'casey@mail.com',
    photo: 'https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png',
    permission: {
      administrator: true,
      content_managing: true,
      support: true,
      analytics: true,
      product_managing: true,
    },
  },
  {
    id: 28,
    name: 'Jamie',
    email: 'jamie@inbox.com',
    photo: 'https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png',
    permission: {
      administrator: true,
      content_managing: true,
      support: true,
      analytics: true,
      product_managing: true,
    },
  },
  {
    id: 29,
    name: 'Riley',
    email: 'riley@email.net',
    photo: 'https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png',
    permission: {
      administrator: true,
      content_managing: true,
      support: true,
      analytics: true,
      product_managing: true,
    },
  },
  {
    id: 30,
    name: 'Cameron',
    email: 'cameron@netmail.com',
    photo: 'https://static.vecteezy.com/system/resources/previews/021/276/728/original/cute-cow-cow-illustration-baby-cow-animal-illustration-png.png',
    permission: {
      administrator: true,
      content_managing: true,
      support: true,
      analytics: true,
      product_managing: true,
    },
  },
])

const isDialogVisible = ref(false)
const isAddDialogVisible = ref(false)
const selectedUser = ref()

const addUser = ref({
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  contact_number: '',
  address: '',
  is_admin: false,
  permissions: {
    is_administrator: false,
    is_content_managing: false,
    is_support: false,
    is_analytics: false,
    is_product_managing: false,
  },
})

const headers = [
  { title: 'USER', key: 'first_name' },
  { title: 'EMAIL', key: 'email' },
  { title: 'PERMISSION', key: 'permissions' },
  { title: 'ACTION', key: 'action' },
]

const selectUser = (user: unknown) => {
  selectedUser.value = user
  isDialogVisible.value = true

  // console.log(user)
}

const deleteUser = async () => {
  console.log(selectedUser.value.raw)
  try {
    const response = await axios.delete(`/users/get_users/${selectedUser.value.raw.id}/`)

    Swal.fire({
      title: 'Deleted Successfully',
      text: 'The user has been deleted.',
      icon: 'success',
      timer: 1500,
      timerProgressBar: true,
      showConfirmButton: false,
    })
    isDialogVisible.value = false
    console.log('User deleted successfully:', response.data)
    getUsers()
  }
  catch (error) {
    console.error('Deletion error:', error)
    Swal.fire({
      title: 'Error',
      text: 'Failed to delete the user.',
      icon: 'error',
      showConfirmButton: true,
    })
  }
}

const users = ref()

const getUsers = async () => {
  const response = await axios.get('/users/get_users/')

  users.value = response.data
  users.value = users.value.filter(user => user.is_admin)
}

getUsers()

const updateUser = async () => {
  console.log(selectedUser.value.raw)
  try {
    const response = await axios.put(`/users/get_users/${selectedUser.value.raw.id}/`, selectedUser.value.raw)

    Swal.fire({
      title: 'Updated Succesfully',
      timer: 1500,
      timerProgressBar: true,
      showConfirmButton: false,
    })
    isDialogVisible.value = false
    console.log('User updated successfully:', response.data)
    getUsers()
  }
  catch (error) {
    console.error('Update error:', error)
  }
}

async function registerUser() {
  try {
    const response = await axios.post('/users/register/',
      {
        first_name: addUser.value.first_name,
        last_name: addUser.value.last_name,
        email: addUser.value.email,
        password: addUser.value.password,
        contact_number: addUser.value.contact_number,
        address: addUser.value.address,
        is_admin: true,
        permissions: {
          is_administrator: addUser.value.permissions.is_administrator,
          is_content_managing: addUser.value.permissions.is_content_managing,
          is_support: addUser.value.permissions.is_support,
          is_analytics: addUser.value.permissions.is_analytics,
          is_product_managing: addUser.value.permissions.is_product_managing,
        },
      })

    console.log('submitted')
    Swal.fire({
      title: 'Successfully Added!',
      text: 'We\'ve sent an email to the registered user. Please check and verify the account.',
      icon: 'success',
    })
    isAddDialogVisible.value = false
    getUsers()
  }
  catch (error) {
    Swal.fire({
      title: `${Object.keys(error.response.data)[0].replace(/[^A-Za-z0-9]+/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')}: ${Object.values(error.response.data)[0]}`,
      icon: 'error',
    })
    console.error('Signup error:', Object.values(error.response.data)[0])
    isAddDialogVisible.value = false
  }
}
</script>

<template>
  <section>
    <VDataTable
      :headers="headers"
      :items="users"
      :search="props.search"
      :items-per-page="10"
      show-select
    >
      <template #item.permissions="{ item }">
        <span
          v-for="(value, key) in item.props.title.permissions"
          :key="key"
        >
          <VIcon
            v-if="key === 'is_administrator' && value === true"
            icon="bx-user"
            :class="key"
          />
          <VIcon
            v-if="key === 'is_analytics' && value === true"
            icon="bx-stats"
            :class="key"
          />
          <VIcon
            v-if="key === 'is_support' && value === true"
            icon="bx-headphone"
            :class="key"
          />
          <VIcon
            v-if="key === 'is_product_managing' && value === true"
            icon="bx-box"
            :class="key"
          />
          <VIcon
            v-if="key === 'is_content_managing' && value === true"
            icon="bx-edit"
            :class="key"
          />
        </span>
      </template>

      <template #item.action="{ item }">
        <div class="flex-center">
          <VBtn
            variant="text"
            size="small"
            @click="() => selectUser(item)"
          >
            Edit
          </VBtn>
        </div>
      </template>
    </VDataTable>

    <VRow>
      <VCol class="d-flex justify-end gap-x-2">
        <!--
          <VBtn variant="outlined">
          Delete
          </VBtn>
        -->
        <VBtn @click="isAddDialogVisible = true">
          Add User
        </VBtn>
      </VCol>
    </VRow>

    <!-- Edit User -->
    <VDialog
      v-model="isDialogVisible"
      max-width="500"
    >
      <VCard>
        <VCardText style="padding: 2rem;">
          <VForm>
            <VRow class="mb-3">
              <VCol cols="6">
                <VTextField
                  v-model="selectedUser.raw.first_name"
                  label="First Name"
                />
              </VCol>
              <VCol cols="6">
                <VTextField
                  v-model="selectedUser.raw.last_name"
                  label="Last Name"
                />
              </VCol>
              <VCol cols="12">
                <VTextField
                  v-model="selectedUser.raw.email"
                  label="Email"
                  disabled
                />
              </VCol>
              <VCol cols="12">
                <VFileInput
                  label="Avatar Upload"
                  accept="image/png, image/jpeg, image/bmp"
                  placeholder="Pick an avatar"
                  prepend-icon="bx-camera"
                />
              </VCol>
            </VRow>
            <span class="text-h6">
              Permission
            </span>
            <VRow class="mt-1">
              <VCol
                class="d-flex align-center"
                cols="4"
              >
                <VCheckboxBtn
                  id="administrator"
                  v-model="selectedUser.raw.permissions.is_administrator"
                />
                <VLabel for="administrator">
                  Administrator
                </VLabel>
              </VCol>
              <VCol
                class="d-flex align-center"
                cols="4"
              >
                <VCheckboxBtn
                  id="analytics"
                  v-model="selectedUser.raw.permissions.is_analytics"
                />
                <VLabel for="analytics">
                  Analytics
                </VLabel>
              </VCol>
              <VCol
                class="d-flex align-center"
                cols="4"
              >
                <VCheckboxBtn
                  id="content_managing"
                  v-model="selectedUser.raw.permissions.is_content_managing"
                />
                <VLabel for="content_managing">
                  Content Managing
                </VLabel>
              </VCol>
              <VCol
                class="d-flex align-center"
                cols="4"
              >
                <VCheckboxBtn
                  id="product_managing"
                  v-model="selectedUser.raw.permissions.is_product_managing"
                />
                <VLabel for="product_managing">
                  Product Managing
                </VLabel>
              </VCol>
              <VCol
                class="d-flex align-center"
                cols="4"
              >
                <VCheckboxBtn
                  id="support"
                  v-model="selectedUser.raw.permissions.is_support"
                />
                <VLabel for="support">
                  Support
                </VLabel>
              </VCol>
            </VRow>

            <div
              class="d-flex mt-5"
              style="justify-content: space-between;"
            >
              <div>
                <VBtn
                  color="error"
                  variant="outlined"
                  @click="deleteUser(selectedUser.raw.id)"
                >
                  Delete
                </VBtn>
              </div>
              <div class="d-flex  gap-x-3">
                <VBtn
                  variant="outlined"
                  @click="isDialogVisible = false"
                >
                  Back
                </VBtn>
                <VBtn @click="updateUser">
                  Save Changes
                </VBtn>
              </div>
            </div>
          </VForm>
        </VCardText>
      </VCard>
    </VDialog>

    <!-- Add User -->
    <VDialog
      v-model="isAddDialogVisible"
      max-width="600"
    >
      <VCard>
        <VCardText>
          <VForm @submit.prevent="registerUser">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="addUser.first_name"
                  label="First Name"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="addUser.last_name"
                  label="Last Name"
                />
              </VCol>
            </VRow>
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="addUser.contact_number"
                  label="Contact Number"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="addUser.address"
                  label="Address"
                />
              </VCol>
            </VRow>
            <VRow>
              <VCol>
                <VTextField
                  v-model="addUser.email"
                  label="Email"
                />
              </VCol>
            </VRow>
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="addUser.password"
                  label="Password"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="addUser.password_confirmation"
                  label="Confirm Password"
                />
              </VCol>
            </VRow>
            <VRow>
              <VCol cols="12">
                <VFileInput
                  label="Avatar Upload"
                  accept="image/png, image/jpeg, image/bmp"
                  placeholder="Pick an avatar"
                  prepend-icon="bx-camera"
                />
              </VCol>
            </VRow>
            <VRow>
              <VCol>
                <h6 class="text-h6">
                  Permission
                </h6>
              </VCol>
            </VRow>
            <VRow class="mt-1">
              <VCol
                class="d-flex align-center"
                cols="4"
              >
                <VCheckboxBtn
                  id="administrator"
                  v-model="addUser.permissions.is_administrator"
                />
                <VLabel for="administrator">
                  Administrator
                </VLabel>
              </VCol>
              <VCol
                class="d-flex align-center"
                cols="4"
              >
                <VCheckboxBtn
                  id="analytics"
                  v-model="addUser.permissions.is_analytics"
                />
                <VLabel for="analytics">
                  Analytics
                </VLabel>
              </VCol>
              <VCol
                class="d-flex align-center"
                cols="4"
              >
                <VCheckboxBtn
                  id="content_managing"
                  v-model="addUser.permissions.is_content_managing"
                />
                <VLabel for="content_managing">
                  Content Managing
                </VLabel>
              </VCol>
              <VCol
                class="d-flex align-center"
                cols="4"
              >
                <VCheckboxBtn
                  id="product_managing"
                  v-model="addUser.permissions.is_product_managing"
                />
                <VLabel for="product_managing">
                  Product Managing
                </VLabel>
              </VCol>
              <VCol
                class="d-flex align-center"
                cols="4"
              >
                <VCheckboxBtn
                  id="support"
                  v-model="addUser.permissions.is_support"
                />
                <VLabel for="support">
                  Support
                </VLabel>
              </VCol>
            </VRow>
            <VRow>
              <VCol class="d-flex justify-end gap-x-2">
                <VBtn
                  variant="outlined"
                  @click="isAddDialogVisible = false"
                >
                  Cancel
                </VBtn>
                <VBtn type="submit">
                  Submit
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VDialog>

    <VSnackbar
      v-model="invalidCredentialsError"
      location="top end"
      variant="flat"
      color="error"
    >
      Invalid Credentials
    </VSnackbar>
  </section>
</template>

<style lang="scss">
.is_administrator{
  padding: .3rem;
  border-radius: 1rem;
  aspect-ratio: 1/1;
  background-color: #FF66661F;
  color: #DF3333;
  margin-inline: .3rem;
}

.is_analytics{
  padding: .3rem;
  border-radius: 1rem;
  aspect-ratio: 1/1;
  background-color: #72E1281F;
  color: #71DD37;
  margin-inline: .3rem;
}

.is_content_managing{
  padding: .3rem;
  border-radius: 1rem;
  aspect-ratio: 1/1;
  background-color: #C4C4C44D;
  color: #7E7E7E;
  margin-inline: .3rem;
}

.is_product_managing{
  padding: .3rem;
  border-radius: 1rem;
  aspect-ratio: 1/1;
  background-color: #FDB5281F;
  color: #D8BF3A;
  margin-inline: .3rem;
}

.is_support{
  padding: .3rem;
  border-radius: 1rem;
  aspect-ratio: 1/1;
  background-color: #5F27261A;
  color: #5F2726;
  margin-inline: .3rem;
}
</style>
