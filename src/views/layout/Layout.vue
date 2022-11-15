<template>
    <div>
        <aside class="sidebar">
            <div class="sidebar-inner">
                <header class="sidebar-header">
                    <button
                            type="button"
                            class="sidebar-burger"
                            @click="toggleSidebar()"
                            >
                        <font-awesome-icon icon="fa-solid fa-bars" style="color: white; width: 72px; height: 32px;"/>
                    </button>
                    <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.955 9.955 0 0012 22z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <span>Condrado</span>
                </header>
                <nav class="sidebar-nav">
                    <button type="button">
                        <font-awesome-icon icon="fa-solid fa-house" style="color: white;"/>
                        <span>Home</span>
                    </button>
                    <button type="button">
                        <span style="animation-delay: 0.1s">Settings</span>
                    </button>
                    <button type="button">
                        <span style="animation-delay: 0.2s">Levels</span>
                    </button>
                    <button type="button">
                        <span style="animation-delay: 0.3s">Accounts</span>
                    </button>
                </nav>
                <footer class="sidebar-footer">
                    <button type="button">
                        <span>Logout</span>
                    </button>
                </footer>
            </div>
        </aside>
        <div>
            <RouterView/>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
        },
        data() {
            return {
                isclose: false
            }
        },
        methods: {
            toggleSidebar() {
                document.body.classList.toggle("close");
            }
        }
    }
</script>
<style scoped>
* {
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}

body {
    margin: 0;
    background: #121212;
}

button {
    background: transparent;
    border: 0;
    padding: 0;
    cursor: pointer;
}

.sidebar {
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    width: 300px;
    height: 100%;
    background: #0d6efd;
    transition: width 0.4s;
}

body.close .sidebar {
    width: 70px;
}

.sidebar-inner {
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: inherit;
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
}

.sidebar-header {
    display: flex;
    align-items: center;
    height: 72px;
    padding: 0 1.25rem 0 0;
    background: rgba(138, 151, 17, 0.1);
}

.sidebar-header span {
    text-transform: uppercase;
    margin-left: 0.5rem;
    color: #ffffff;
}

.sidebar-burger {
    
    display: grid;
    place-items: center;
    transition: 0.3s;
}


.sidebar-logo {
    height: 20px;
    opacity: 0;
    transition: 0.3s;
}

body.close .sidebar-logo {
    opacity: 1;
}

.sidebar-nav,
sidebar-footer {
    display: flex;
    padding-top: 10px;
    flex: 1 1 auto;
    flex-direction: column;
}

.sidebar-nav > button,
.sidebar-footer > button {
    display: flex;
    gap: 25px;
    align-items: center;
    height: 50px;
    width: 100%;
    font-size: 16px;
    font-weight: 200;
    letter-spacing: 2px;
    line-height: 1;
    padding: 0 25px;
}


.sidebar button > span {
    color: #f9f9f9;
    opacity: 1;
    transition:  0.3s;
}

@keyframes appear {
    0% {
        opacity: 0;
        translate: 0 10px;
    }
    100% {
        opacity: 1;
        translate: 0;
    }
}

body.close .sidebar button > span {
    opacity: 0;
    animation:  0.3s both;
}


.text-dev {
    color: #ffffff;
    position: fixed;
    bottom: 0;
    text-align: center;
    width: 100%;
}

.text-dev a {
    color: #0d6efd;
    font-weight: 800;
}
</style>