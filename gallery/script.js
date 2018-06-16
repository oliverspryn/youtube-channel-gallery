Vue.component('youtube-gallery', {
    props: [
        'display'
    ],
    template: '<h1>{{ display }}</h1>'
})

const gallery = new Vue({
    el: '#gallery'
})