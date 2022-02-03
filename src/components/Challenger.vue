<script setup>
    import Nav from './Nav.vue';
    import {ref} from 'vue';
    import MonacoEditor from 'vue-monaco-cdn'
    import {levels} from '../utils/challenges'
    let defaultCode = `function solution(a,b) {
    return 
}`
    
    let code = ref(defaultCode);

    let level = ref(parseInt(localStorage.getItem('level')) || 0);
    let tests = ref([]);

    defaultCode = `function solution(${levels.value[level.value]?.params}){
    return 
}`;
    code.value = localStorage.getItem('code') || defaultCode;

    function onChange() {
        let stdouts = [];
        let passedTests = [];
        let correct = JSON.parse(JSON.stringify(levels.value[level.value]?.correctTests))
        levels.value[level.value]?.tests.forEach((t, i) => {
            let fn = `solution(${t});`
            let userFunction = Function(code.value + `return ${fn}`);
            let userOutput = userFunction();
            let isCorrect = JSON.stringify(userOutput) === JSON.stringify(correct[i]);
            if(isCorrect) {
                passedTests.push(userOutput);
            }
            console.log(userOutput == correct[i])
            stdouts.push(userOutput + `, Expected: ${correct[i]} ${isCorrect ? '✓' : '⮾'}`);
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

    function saveCode() {
        localStorage.setItem('code', code.value);
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
        @update:modelValue="saveCode();"
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