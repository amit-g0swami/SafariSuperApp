import {USERS} from '../Data/USERS';

export const POSTS = [
    {
        imageUrl:'https://media-exp1.licdn.com/dms/image/C4D03AQFkv0AP6xZM1g/profile-displayphoto-shrink_800_800/0/1624430588057?e=1640822400&v=beta&t=JxHc27i6E97HHe0eBlZUS0rGcgyQO6Vuln5GycHKyak',
        user:USERS[0].user,
        likes:9957,
        caption:'G🔥S W A M I',
        profile_picture:USERS[0].image,
        comments:[
            {
                user:'_riya__bajaj_',
                comment:'❤ Nice bae ❤',
            },
            {
                user:'nitesh1195',
                comment:"Op"
            },
        ]
    },
    {
        imageUrl:'https://i.pinimg.com/originals/b6/d9/e6/b6d9e6438ff60357f035addd1c88effb.jpg',
        user:USERS[2].user,
        likes:893,
        caption:'Memories ❤',
        profile_picture:USERS[2].image,
        comments:[
            {
                user:'amit_g0swami',
                comment:'sunset !!',
            },
            {
                user:'Ankit6723',
                comment:"Nice ..."
            },
        ]
    }
]