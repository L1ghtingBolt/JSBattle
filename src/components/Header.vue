<template>
    <header>
        <h1>jsBattle<span>(<span id="string">"now!"</span>);</span></h1>
        <a href="challenges" class="btn">Start</a>
    </header>
</template>

<style>
header {
    background-color: #333;
    color: #eee;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    margin: 0;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

header h1 {
    margin-left: 4rem;
}

header span {
    color: white;
}

header span#string {
    color: #9ABB65;
}

header h1, header h2, header h3 {
    color: var(--complementary);
}

.btn {
    background-color: var(--accent);
    text-decoration: none;
    padding: 5px 20px;
    border-radius: 100vw;
    color: #333;
    margin: 20px;
    margin-left: 4rem;
    margin-right: auto;
}

.btn:hover {
    background-color: var(--hover);
}
</style>