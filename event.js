new Vue({
    el: '#click',
    data: {
        cnt: 0
    }
})

var alert1 = new Vue({
    el: '#alert',
    data: {
        name: 'alert shown'
    },
    methods: {
        greet: function(event) {
            alert('Notification: ' + this.name + '!')
            // if(event) {
            //     alert(event.target.tagName)
            // }
        },
        say: function(message) {
            alert(message)
        },
        warn: function(message, event) {
            if(event) {
                event.preventDefault()
            }
            alert(message)
        }
    }
})

// alert1.greet()