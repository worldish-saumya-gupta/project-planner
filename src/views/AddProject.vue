<template>
  <div class="edit-form">
  <form @submit.prevent="handleSubmit">
    <label>Title: </label>
    <input type="text" v-model="title" required>
    <br><br>
    <label>Details: </label>
    <textarea v-model="details" required></textarea>
    <br><br>
    <button>Add Project</button>
  </form>
</div>
</template>

<script>
export default {
  data(){
    return{
      title:'',
      details: ''
    }
  },
  methods:{
    handleSubmit(){
      let project = {
        title: this.title,
        details: this.details,
        complete: false
      }
      // console.log(project)
      fetch('http://localhost:3000/projects',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(project)
      })
      .then(()=>{
        this.$router.push('/')
      })
      .catch((e)=>{console.log(e.message)})
    }
  }
}
</script>

<style scoped>
form{
  background: rgb(238, 235, 235);
  padding: 20px;
  border-radius:10px ;
  width: 300px;
}

.edit-form{
  display: flex;
  flex-direction:column;
  align-items: center;
}
</style>