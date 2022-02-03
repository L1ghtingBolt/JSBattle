import { ref } from "vue"

export let levels = ref([
    {
        name:"Return 'a' times 'b'.",
        params: 'a,b',
        tests: [
            '9, 8',
            '10, 24',
            '10, 10',
            '5, 7',
        ],
        correctTests: [
            72,
            240,
            100,
            35,
        ]
    },
    {
        name:"Make a OR function",
        params: 'a,b',
        tests: [
            'false, true',
            'false, false',
            'true, true',
            'true, false',
        ],
        correctTests: [
            true,
            false,
            true,
            true,
        ]
    },
    {
        name:"Make a bitwise XOR function",
        params: 'a,b',
        tests: [
            '9, 6',
            '5, 7',
            '8, 9',
            '2, 6',
        ],
        correctTests: [
            15,
            2,
            1,
            4,
        ]
    },
    {
        name:"Create a function that sums every element on params.",
        params: '...nums',
        tests: [
            '9, 6, 6',
            '50, 72, 10',
            '1, 80',
            '2, 34',
        ],
        correctTests: [
            21,
            132,
            81,
            36,
        ]
    },
    {
        name:"Create a function that generates a list of the even numbers with a maximum.",
        params: 'max',
        tests: [
            '10',
            '4',
            '8',
            '5',
        ],
        correctTests: [
            [0,2,4,6,8],
            [0,2],
            [0,2,4,6],
            [0,2,4],
        ]
    },
    {
        name:"Create a function that filters out negative numbers.",
        params: '...numbers',
        tests: [
            '10, -5, 5, 7',
            '90, 10, -24, 234',
            '123, -432, 567, -890',
            '5',
        ],
        correctTests: [
            [10,5,7],
            [90,10,234],
            [123,567],
            [5],
        ]
    },
    {
        name:"Remove the spaces, commas and '-' found in a string.",
        params: 'string',
        tests: [
            '"The quick-brown, fox"',
            '"Jumps quickly,tnt"',
            '"This_String_Should_Be_The_Same"',
            '"Potatoes, chips, marshmallows."',
        ],
        correctTests: [
            'Thequickbrownfox',
            'Jumpsquicklytnt',
            'This_String_Should_Be_The_Same',
            'Potatoeschipsmarshmallows.',
        ]
    },
    {
        name:"{HARD} Return the number of vowels on string.",
        params: 'string',
        tests: [
            '"The quick-brown, fox"',
            '"Jumps quickly,tnt"',
            '"How many?"',
            '"Potatoes, chips, marshmallows."',
        ],
        correctTests: [
            5,
            3,
            2,
            8,
        ]
    },
])