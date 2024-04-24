<template>
  <v-container class="fill-height">
    <div class="d-flex justify-center flex-wrap">
      <v-alert v-if="showAlert.message" :color="showAlert.color">{{showAlert.message}}</v-alert>
      <TaskModal @create-task="addTask"/>
      <TaskTable :tasks="tasks" @update-status="updateStatus"/>
    </div>
  </v-container>
</template>

<script setup>
import TaskTable from "@/components/Task/partials/TaskTable/TaskTable.vue";
import TaskModal from "@/components/Task/partials/TaskModal/TaskModal.vue";
import {useTask} from "@/components/Task/core/hooks";

const {tasks, addTask, showAlert, updateStatus} = useTask()

</script>
<style src="./styles.scss"></style>
