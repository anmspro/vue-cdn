Vue.component('button-counter', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">Clicked: {{ count }} </button>'
})

// Vue.component('blog-post', {
//     props: ['title'],
//     template: '<h3>{{ title }}</h3>'
//   })

Vue.component('blog-post', {
    props: ['post'],
    template: `
        <div class="blog-post">
        <h3>{{ post.title }}</h3>
        <div v-html="post.content"></div>
        </div>
    `
})

Vue.component('alert-box', {
    template:
        `<div class="demo-alert-box">
            <strong>Error!</strong>
            <slot></slot>
        </div>`
})

Vue.component('blog-posts', {
    props: ['post'],
    template: `
        <div class="blog-post">
        <h3> {{ post.title }} </h3>
        <button v-on:click="$emit('boro-text', 0.1)"> Boro </button>
        <button v-on:click="$emit('choto-text', 0.1)"> Choto </button>
        <div v-html="post.content"></div>
        </div>
    `
})

// Vue.component('custom-input', {
//     props: ['value'],
//     template: `
//       <input
//         v-bind:value="value"
//         v-on:input="$emit('input', $event.target.value)"
//       >
//     `
//   })

new Vue({
    el: '#components-demo'
})

new Vue({
    el: '#blog-post',
    data: {
        posts: [
            { id: 1, title: '1st title'},
            { id: 2, title: '2nd title'},
            { id: 3, title: '3rd title'}
        ]
    }
})

new Vue({
    el: '#alert'
})

new Vue({
    el: '#blog-posts',
    data: {
        posts: [
            { id: 1, title: 'Title One'},
            { id: 2, title: 'Title Two'},
            { id: 3, title: 'Title Three'}
        ],
        postFontSize: 1
    }
})

new Vue({
    el: '#custom-input',
    data: {
        message: 'Hi there!'
    },
    computed: {
        reverseMessage: function () {
            return this.message.split(' ').reverse().join(' ')
        },

        now: function () {
            return new Date(Date.now()).toString()
        }
    }
})