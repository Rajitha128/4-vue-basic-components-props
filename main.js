Vue.component('message',{

    props: ['title','body'],

    data() {
        return {
            isVisible: true
        };
    },

    template: `
        <article class="message" v-show="isVisible">
            <div class="message-header">
                {{ title }}
                <button @click="isVisible = false" type="button" class="close">x</button>
            </div>
            <div class="message-body">
                {{ body }}
            </div>
        </article>
    `,

    // method: {
    //     hideModal(){
    //         this.isVisible = false;
    //     }
    // }
});

new Vue({
    el: '#root'
});
