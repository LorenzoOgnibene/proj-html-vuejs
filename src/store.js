import { reactive } from "vue";

export const store = reactive({
    NavBarItems : [
        {
            title : 'home',
            dropdownItems:['item1', 'item2', 'item3']
        },
        {
            title : 'about',
            dropdownItems:['item1', 'item2', 'item3']
        },
        {
            title : 'service',
            dropdownItems:['item1', 'item2', 'item3']
        },
        {
            title : 'work',
            dropdownItems:['item1', 'item2', 'item3']
        },
        {
            title : 'articles',
            dropdownItems:['item1', 'item2', 'item3']
        },
    ]
})