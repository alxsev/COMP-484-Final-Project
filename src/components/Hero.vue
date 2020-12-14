<template>
    <div>   
    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">{{name}}</div>
        </md-card-header>
        <md-card-content>
            <div class="container">
                <div class="imageContainer">
                    <img :src="image">
                </div>
                <div class="infoContainer">
                    <div>Secret Identity: {{realname}}</div>
                    <div>Gender: {{gender}}</div>
                    <div>First Appearance: {{firstappear}}</div>
                    <div>Publisher: {{publisher}}</div>
                </div>
            </div>
        </md-card-content>
      </md-ripple>
    </md-card>
       
    </div>   
</template>

<script>
export default {
    name: 'Hero',
    props: ['image', 'name', 'realname', 'gender', 'firstappear', 'publisher'],
}
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
}
.imageContainer{
    height: 150px;
    width: 150px;
}
.infoContainer{
    display: flex;
    flex-direction: column;
    margin-left: 15px;
}
.md-card{
    margin-top: 20px;
}
.md-card-content{
    margin-bottom: 20px;
}
</style>
