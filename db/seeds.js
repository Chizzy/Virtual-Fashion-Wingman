const User = require('../models/User')
const Post = require('../models/Post')
const Feedback = require('../models/Feedback')

const johnnyPost1 = new Post ({
    img: 'https://turntable.kagiso.io/images/Johnny_Depp.width-400.jpg',
    content: 'La croix vegan intelligentsia fixie lumbersexual shaman. Fingerstache authentic kale chips plaid.'
})

const johnnyPost2 = new Post ({
    img: 'https://ewedit.files.wordpress.com/2015/01/johnneytodd_l.jpg',
    content: "Flannel crucifix fixie master cleanse, biodiesel activated charcoal cloud bread bushwick. Whatever you probably haven't heard of them thundercats gastropub chia."
})

const nickiPost1 = new Post ({
    img: 'https://i0.wp.com/www.damusichits.com/wp-content/uploads/2018/05/Nicki-Minaj-Profile.jpg?fit=400%2C400&ssl=1',
    content: "Pok pok small batch street art you probably haven't heard of them. Chicharrones mustache fashion axe semiotics tumeric plaid PBR&B kinfolk bushwick subway tile microdosing schlitz."
})

const nickiPost2 = new Post ({
    img: 'https://media1.popsugar-assets.com/files/thumbor/3qj53TSlY8hQa_6qm2jdInXaBn0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2011/12/49/4/192/1922564/03c320cc1f5af546_nickithumb/i/Nicki-Minaj-Craziest-Outfits-Pictures.jpg',
    content: "Letterpress vaporware tumblr meh gastropub chillwave echo park, shoreditch brooklyn direct trade shabby chic. Leggings kombucha tofu, polaroid church-key fashion axe try-hard unicorn swag meh small batch tilde copper mug wayfarers."
})

const johnny = new User ({
    type: 'Seeking Style Advice',
    name: 'Johnny Depp',
    email: 'johnny-depp@gmail.com',
    password: 'ineedhelp',
    img: 'http://images5.fanpop.com/image/photos/31700000/Johnny-johnny-depp-31730685-400-400.jpg',
    posts: [johnnyPost1, johnnyPost2]
})

const nicki = new User ({
    type: 'Seeking Style Advice',
    name: 'Nicki Minaj',
    email: 'nickiminaj@gmail.com',
    password: 'pinkfriday',
    img: 'https://i.pinimg.com/originals/13/d1/8b/13d18b5fa88ec83506dd15c0abbb7545.jpg',
    posts: [nickiPost1, nickiPost2]
})

const janelleFeedback1 = new Feedback ({
    comment: 'Neutra vice swag etsy ramps. Salvia kinfolk man bun, shoreditch bespoke put a bird on it distillery health goth pour-over chia. Offal man bun cronut asymmetrical.'
})

const janelleFeedback2 = new Feedback ({
    comment: 'Sartorial keffiyeh fanny pack tbh, quinoa microdosing +1 messenger bag man braid subway tile craft beer ugh pop-up selfies woke. Raw denim craft beer shabby chic schlitz chicharrones trust fund.'
})

const ramiFeedback1 = new Feedback ({
    comment: 'Post-ironic pok pok vaporware hexagon wolf put a bird on it. Pickled neutra health goth, try-hard man bun hammock taxidermy intelligentsia vaporware.'
})

const ramiFeedback2 = new Feedback ({
    comment: 'La croix artisan brunch, succulents selvage XOXO lumbersexual 3 wolf moon poke umami tumeric chia actually godard slow-carb. Ennui glossier brunch umami ramps, hammock viral banjo actually.'
})

const janelle = new User ({
    type: 'Stylist',
    name: 'Janelle Monae',
    email: 'janelle.monae@gmail.com',
    password: 'theelectriclady',
    img: 'https://miscellaneous-content.s3.amazonaws.com/uploads/bfa/23504/2824359/thumb_23504_2824359.jpg',
    location: 'Atlanta, GA',
    about: 'Keytar listicle ugh drinking vinegar, umami gentrify pok pok plaid man bun flannel mlkshk air plant PBR&B. Farm-to-table meh authentic, microdosing iPhone tumeric la croix.',
    feedbacks: [janelleFeedback1, janelleFeedback2]
})

const rami = new User ({
    type: 'Stylist',
    name: 'Rami Malek',
    email: 'rami_malek@gmail.com',
    password: 'iammercury',
    img: 'https://66.media.tumblr.com/849f1e4f962dc1c625d23d0cf3c5ec0f/tumblr_oe764dci371tumicto1_400.png',
    location: 'Los Angeles, CA',
    about: 'Migas cred next level letterpress poke YOLO post-ironic brunch. Vegan copper mug hella everyday carry. Semiotics quinoa paleo readymade selfies cronut vegan tumblr salvia blog.',
    feedbacks: [ramiFeedback1, ramiFeedback2]
})

User.remove({})
    .then(() => Post.insertMany([johnnyPost1, johnnyPost2, nickiPost1, nickiPost2]))
    .then(() => Feedback.insertMany([janelleFeedback1, janelleFeedback2, ramiFeedback1, ramiFeedback2]))
    .then(() => johnny.save())
    .then(() => nicki.save())
    .then(() => janelle.save())
    .then(() => rami.save())
    .then(() => console.log("Database seeded successfully!"))
    .then(() => mongoose.connection.close())