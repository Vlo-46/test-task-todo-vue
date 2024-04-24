<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" md="6">
        <v-btn
          width="204"
        >
          Create New Task
          <v-dialog activator="parent" max-width="700">
            <template v-slot:default="{ isActive }">
              <v-sheet class="mx-auto" width="700">
                <v-form fast-fail @submit.prevent>
                  <v-text-field
                    v-model="state.title"
                    :rules="rules"
                    label="Title"
                  ></v-text-field>

                  <v-textarea
                    label="Description"
                    v-model="state.description"
                    :rules="rules">
                  </v-textarea>

                  <v-btn class="mt-2" type="submit" block @click.prevent="() => {createTask(); isActive.value = false}">
                    Submit
                  </v-btn>
                </v-form>
              </v-sheet>
            </template>
          </v-dialog>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import {reactive} from "vue";

const emits = defineEmits(['createTask'])

const state = reactive({
  title: '',
  description: ''
})

const rules = [
  value => {
    if (value) return true
    return 'Required'
  },
]

const createTask = () => {
  if (!state.title || !state.description) {
    return
  }
  emits('createTask', {...state})
}

</script>
