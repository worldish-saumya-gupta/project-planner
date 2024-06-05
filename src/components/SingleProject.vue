<template>
  <div class="project" :class="{ complete: project.complete }">
    <div class="actions">
        <h3 @click="showDetails = !showDetails">{{project.title}}</h3>
    </div>
    <div v-if="showDetails" class="details">
       <p> {{ project.details }} </p>
    </div>
    <div class="icons">
        <router-link :to="{name: 'edit-project', params: {id: project.id}}">
            <button class="icons-button"> edit</button>
        </router-link>
        <button @click="toggleComplete" class="icons-button tick">done</button>
        <button @click="deleteProject" class="icons-button">delete</button>
    </div>
  </div>
</template>

<script>
export default {
    props:['project'],
    data(){
        return{
            showDetails: false,
            uri: 'http://localhost:3000/projects/'+this.project.id
        }
    },
    methods:{
        deleteProject(){
            fetch(this.uri, { method: 'DELETE'})
            .then(()=> this.$emit('delete',this.project.id))
            .catch((e)=>{console.log(e.message)})
        },
        toggleComplete(){
            fetch(this.uri, {
                 method: 'PATCH' ,
                 headers: { 'Content-Type' : 'application/json'},
                 body: JSON.stringify({ complete: !this.project.complete})
                })
                .then(() =>{
                    this.$emit('complete', this.project.id)
                })
                .catch((e)=>{
                    console.log(e.message)
                })
        }
    }
    
}
</script>

<style>
.project{
    border-left: 4px solid red;
    width: 300px;
    padding: 20px 40px;
    margin: 20px 20px;
    background: rgb(237, 235, 235);
}
.project.complete{
    border-left: 4px solid green;
    width: 300px;
}
.icons-button{
    padding: 10px 10px;
    margin: 10px 10px;
}
.project.complete .tick{
    color: white;
    background: green;
    border: none;
}
</style>