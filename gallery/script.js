Vue.component('youtube-gallery', {
    props: [
        'display'
    ],
    template: '<h1>{{ display }}</h1>'
})

const gallery = new Vue({
    el: '#gallery',
    created: () => {
        axios.get('https://content.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=1&playlistId=UUuCkxoKLYO_EQ2GeFtbM_bw&order=date&key=AIzaSyC5hcZ0ZMY0fZDdyEzU1mSSyYAegYaYZ0c')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
})