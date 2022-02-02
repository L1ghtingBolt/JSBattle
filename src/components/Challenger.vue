<script setup>
    import Nav from './Nav.vue';
    import {ref} from 'vue';
    import MonacoEditor from 'vue-monaco-cdn'
    
let defaultCode = `function solution(a,b) {
    return 
}`
    
    let code = ref(defaultCode);




    let levels = ref([
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
                '72',
                '240',
                '100',
                '35',
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
                'true',
                'false',
                'true',
                'true',
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
                '15',
                '2',
                '1',
                '4',
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
                '21',
                '132',
                '81',
                '36',
            ]
        },
    ])


    let level = ref(parseInt(localStorage.getItem('level')) || 0);
    let tests = ref([]);

defaultCode = `function solution(${levels.value[level.value]?.params}){
    return 
}`;
code.value = defaultCode;

    function onChange() {
        let stdouts = [];
        let passedTests = [];
        let correct = levels.value[level.value]?.correctTests;
        levels.value[level.value]?.tests.forEach((t, i) => {
            let fn = `\nsolution(${t});`
            let r = eval(code.value + fn);
            if(r.toString() == correct[i]) {
                passedTests.push(r);
            }
            stdouts.push(r + `, Expected: ${correct[i]} ${r.toString() === correct[i] ? '✓' : '⮾'}`);
        })
        if(passedTests.length == stdouts.length) {
            level.value = level.value + 1;
            localStorage.setItem('level', level.value);
            defaultCode = `function solution(${levels.value[level.value]?.params}){
    return 
}`;
            code.value = defaultCode;
        }
        tests.value = stdouts;
        if(level.value > levels.value.length - 1) {
            level.value = 0;
            localStorage.setItem('level', 0);
            defaultCode = `function solution(${levels.value[level.value]?.params}){
    return 
}`;
            code.value = defaultCode;
        }
    }
</script>

<template>
    <Nav></Nav>
    <h3>Level: {{level}}, {{levels[level]?.name || 'You won!'}}</h3>
    <MonacoEditor 
        class="editor" 
        v-model=code
        language="javascript"
        theme="vs-dark"
        :options="{
            automaticLayout: true,
            fontSize: 18,
            fontFamily: 'Cascadia',
            fontLigatures: true,
            padding: {
                top: 20,
            },
            lineNumbers: false,
            minimap: {
                enabled: false,
            }
        }"
    />
    <button @click="onChange">Run tests</button>
    <div id="outConsole">
        <h3>Output</h3>
        <p v-for="test in tests">
            {{test}}
        </p> 
    </div>
</template>

<style>
    h3 {
        margin: 10px;
    }
    .editor {
        width: 100vw;
        height: 400px;
    }
    #outConsole {
        background-color: black;
        width: 100vw;
        padding: 20px;
    }
    button {
        display: flex;
        width: 100vw;
        border: none;
        padding: 20px;
        font-size: 20px;
        background-color: var(--accent);
        justify-content: center;
        cursor: pointer;
    }
    button:hover {
        background-color: var(--hover);
    }
</style>