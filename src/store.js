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
            dropdownItems:['item1', 'item2', 'item5']
        },
    ],

    workChain: [
        {
           logo : 'fa-regular fa-building',
           title : 'Buildings',
           description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat assumenda ratione consequatur'
        },
        {
            logo : 'fa-solid fa-rotate',
            title : 'Renovate',
            description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat assumenda ratione consequatur'
         },
         {
            logo : 'fa-solid fa-house-chimney',
            title : 'Construct',
            description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat assumenda ratione consequatur'
         },
         {
            logo : 'fa-solid fa-truck',
            title : 'Exclusive',
            description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat assumenda ratione consequatur'
         },
    ],

    statsCompany:[
        {
            icon : 'fa-solid fa-suitcase',
            number : '3534',
            description : 'planning applications'
        },
        {
            icon : 'fa-regular fa-building',
            number : '896',
            description : 'completed projects'
        },
        {
            icon : 'fa-solid fa-users',
            number : '172',
            description : 'trained professional'
        },
        {
            icon : 'fa-solid fa-globe',
            number : '19',
            description : 'international offices'
        },
    ],

    imgRecentWork:[
        'project2-featured-15013609-200x200.jpg', 
        'project1-featured-294276386-200x200.jpg', 
        'project3-featured-189023420-200x200.jpg'
    ],

    ourCoreValues:[
        {
            icon : 'fa-solid fa-house-chimney',
            color : 'acqua',
            title : 'Great Services',
            description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat assumenda elit'
        },
        {
            icon : 'fa-solid fa-gear',
            color : 'blue',
            title : 'Highest Standards',
            description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat assumenda elit'
        },
        {
            icon : 'fa-solid fa-users',
            color : 'orange',
            title : 'Professional Team',
            description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat assumenda elit'
        },
        {
            icon : 'fa-solid fa-lightbulb',
            color : 'green',
            title : 'Creative Solutions',
            description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat assumenda elit'
        },
    ],

    testimonials: [
        {
            img : 'home-testimonial-113165296.jpg',
            description : '"No man but feels more of a man in the world if he have but a bit of ground that he can call his own. However small it is on the surface, it is four thousand miles deep; and that is a very handsome property."',

        },
        {
            img : 'home-testimonial-84268399.jpg',
            description : '"Be who you are and say what you feel, because those who mind don\'t matter and those who matter don\' t mind."',

        },
    ],

    latestNews:[
        {
            img : 'blog-post-134132600-400x241.jpg',
            title : 'Redeveloping Florida\'s Remote Southern Coast',
            date : 'December 7th 2015',
            description : 'Technology is Here to Stay Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, quibusdam modi quis nemo dolor voluptates.'
        },
        {
            img : 'blog-post-92486644-400x241.jpg',
            title : 'How We Manage Large Costruction Projects',
            date : 'December 7th 2015',
            description : 'Technology is Here to Stay Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, quibusdam modi quis nemo dolor voluptates.'
        },
        {
            img : 'blog-post-332773904-400x241.jpg',
            title : 'Future proofing a modern home ',
            date : 'December 6th 2015',
            description : 'Technology is Here to Stay Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, quibusdam modi quis nemo dolor voluptates.'
        },
    ]
})