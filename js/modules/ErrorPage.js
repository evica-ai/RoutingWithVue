export default {
    name: 'ErrorPage',

    created() {
        console.log('hit a route that does not exist');
        
        // tell this function what the Vue instance is 
        let vm = this;

        setTimeout(function() {
            vm.redirectUser();
        }, 3000); //3 seconds

        // the bad way, this can break
        //  setTimeout(() => {
        //     this.router.push({ name: 'home})
        // }, 3000); //3 seconds
    },

    methods: {
        redirectUser() {
            this.$router.push({ name: 'home' });
        }
    },

    template: `<h1>That page doesn't exist!</h1>`
    
}