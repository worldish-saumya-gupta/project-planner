<template>
  <h1>Edit Project</h1>
  <div class="edit-form">
  <form @submit.prevent="handleUpdate">
    <label>Title: </label>
    <input type="text" v-model="title" required>
    <br><br>
    <label>Details: </label>
    <textarea v-model="details" required></textarea>
    <br><br>
    <button>Update Project</button>
  </form>
</div>
</template>

<script>
export default {
    props: ['id'],
    data(){
        return{
            title: '',
            details: '',
            uri: 'http://localhost:3000/projects/'+this.id
        }
    },
    mounted(){
        fetch(this.uri)
        .then(res => res.json())
        .then(data => {
            this.title = data.title
            this.details = data.details
        })
    },
    methods:{
    handleUpdate(){       
       fetch(this.uri,{
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title : this.title, details: this.details })
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