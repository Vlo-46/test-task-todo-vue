<template>
  <tr>
    <td>{{ task.title }}</td>
    <td>{{ task.description }}</td>
    <td>
      <v-switch
        v-model="task.completed"
        :color="task.completed ? 'success' : 'red'"
        :label="task.completed ? 'Completed': 'Pending'"
        @change="emitSwitchChange"
        hide-details
      ></v-switch>
    </td>
  </tr>
</template>

<script setup>
import {ref} from 'vue';

const item = ref({
  status: false
});

const props = defineProps({
  task: Object
})

const emits = defineEmits(['switch-change']);

const emitSwitchChange = () => {
  emits('switch-change', item.value.status, props.task._id);
};
</script>
