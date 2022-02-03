<template>
    <nav>
        <a id="logo" href="/"><h1>JSBattle();</h1></a>
        <div class="links">
            <a href="/challenges">Challenges</a>
        </div>
    </nav>
</template>

<style>
nav {
    background-color: var(--accent);
    width: 100vw;
    margin-top: 0 !important;
    display: flex;
    justify-content: right;
    height: min-content;
}

.links {
    display: flex;
    align-items: center;
    justify-content: center;
}

.links a {
    text-decoration: none;
    margin: 10px;
    color: #333;
    background: linear-gradient(90deg, #1a8, #faa);
    background-size: 0 5px;
    background-repeat: no-repeat;
    background-position-y: bottom;
    transition: background-size .1s, color .1s;
}

.links a:hover {
    background-size: 100% 5px;
    color: #999;
}

#logo, nav h1 {
    margin: 0;
    margin-right: auto;
    font-size: var(--HeadingFs);
    text-decoration: none;
    color: #333;
    height: calc(var(--HeadingFs) + 10px);
}
</style>