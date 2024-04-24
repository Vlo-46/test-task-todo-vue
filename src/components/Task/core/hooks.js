import {onMounted, ref} from "vue";
import axios from '@/services/Axios'

export const useTask = () => {
  const tasks = ref([])
  const showAlert = ref({
    message: '',
    color: '',
  })

  onMounted(() => {
    axios.get("/api/tasks").then((res) => {
      tasks.value = res.data.data;
    })
      .catch(e => console.log(e))
  })

  const handleAlert = (msg, success) => {
    showAlert.value.message = msg;
    showAlert.value.color = success ? 'success' : 'red'

    setTimeout(() => {
      showAlert.value.message = ''
      showAlert.value.color = ''
    }, 3000)
  }

  const addTask = (task) => {
    axios.post("/api/tasks", task)
      .then(res => {
        if (res.data.success) {
          tasks.value.unshift(res.data.data);
          handleAlert('Task created successfully.', true);
        } else {
          handleAlert('Something went wrong', false);
        }
      })
      .catch(() => handleAlert('Something went wrong', false))
  }

  const updateStatus = (value, id) => {
    axios.put("/api/tasks/" + id, {})
      .then(res => {
        if (res.data.success) {
          handleAlert('Task updated successfully.', true);
        } else {
          handleAlert('Something went wrong', false);
        }
      })
      .catch(() => handleAlert('Something went wrong', false))
  }

  return {
    tasks,
    addTask,
    updateStatus,
    showAlert
  }
}
