app.component('button-component', {
    template: `
    <input type="button" v-model="cal"  @click="$emit('listerner', cal)">
    `,
    props:['cal'],
    data(){
        return{

        }
    }
});