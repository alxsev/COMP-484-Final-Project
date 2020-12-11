<template>
    <div>
        <div class="container">
            <div>Name: {{name}}</div>
            <div>Secret Identity: {{realname}}</div>
            <div>Gender: {{gender}}</div>
        </div>
    </div>   
</template>

<script>
export default {
    name: 'Hero',
    props: ['name', 'realname', 'gender'],
}
</script>

<style scoped>

</style>