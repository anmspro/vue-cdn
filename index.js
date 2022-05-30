Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app = new Vue({
    el: '#app',
    
    // data: {
    //     seen: true
    //   }

    // data: {
    //     todos: [
    //       { text: 'Learn JavaScript' },
    //       { text: 'Learn Vue' },
    //       { text: 'Build something awesome' }
    //     ]
    //   }
    
    // data: {
    //     message: 'Hello World'
    // },
    // methods: {
    //     reverseMessage: function() {
    //         this.message = this.message.split(' ').reverse().join(' ')
    //     }
    // }

    // data: {
    //     message: 'Hello World'
    // }

    data: {
        lists: [
            {id: 0, text: 'zero'},
            {id: 1, text: 'one'},
            {id: 2, text: 'two'}
        ]
    }
})

// app.lists.push({desc: 'none'})