var ex1 = new Vue({
    el: '#ex1',
    data: {
        parentMessage: 'Yo',
        items: [
            {message: 'Foo'},
            {message: 'Bar'}
        ]
    }
})

new Vue({
    el: '#ex2',
    data: {
        numbers: [1, 2, 3, 4, 5, 7, 9, 100],
        object: {
            title: 'How to do lists in Vue',
            author: 'Jane Doe',
            publishedAt: '2016-04-10'
        }
    },
    computed: {
        evenNumbers: function() {
            return this.numbers.filter(function(number) {
                return number % 2 === 0
            })
        }
    }
  })