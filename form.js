new Vue({
    el: '#input',
    data: {
        message: 'Hello there!',
        multimessage: ''
    }
})

new Vue({
    el: '#checkbox',
    data: {
        checked: ''
    }
    // options: [true, false]
})

new Vue({
    el: '#multipleCheckbox',
    data: {
        checkedNames: []
    }
})

new Vue({
    el: '#radio',
    data: {
        picked: ''
    }
})

new Vue({
    el: '#selected',
    data: {
        selected: ''
    }
})

new Vue({
    el: '#selectedList',
    data: {
        selected: ''
    }
})

new Vue({
    el: '#selectedValue',
    data: {
        selected: 'None',
        options: [
            { text: 'One', value: 1 },
            { text: 'Two', value: 2 },
            { text: 'Three', value: 3 }
        ]
    }
})