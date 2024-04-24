<template>
  <v-table>
    <thead>
    <tr>
      <th class="text-left">
        Title
      </th>
      <th class="text-left">
        Description
      </th>
      <th class="text-left">
        Status
      </th>
    </tr>
    </thead>
    <tbody>
    <template v-for="task in tasks" :key="task._id">
      <TaskItem :task="task" @switch-change="handleSwitchChange"/>
    </template>
    </tbody>
  </v-table>
</template>
<script setup>
import TaskItem from "@/components/Task/partials/TaskItem/TaskItem.vue";

const props = defineProps({
  tasks: Array,
})

const emits = defineEmits(["updateStatus"]);

const handleSwitchChange = (value, id) => {
  emits('update-status', value, id)
};

</script>
