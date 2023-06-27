<template>
    <header>
        <input id="close-menu" class="close-menu" type="checkbox" aria-label="Close menu" role="button" />
        <label class="close-menu-label" for="close-menu" title="close menu"></label>
        <aside class="menu white-bg">
            <div class="main-content menu-content">
                <div class="logo">
                    <h1 onclick="getElementById('close-menu').checked = false;">
                        <a class="logo-texto" href="#home">
                            <img class="img-logo" src="assets/images/logo.png" alt="Logo MedTempo" />
                        </a>
                    </h1>
                    <a class="logo-texto" href="#home">MedTempo</a>
                </div>

                <nav>
                    <ul onclick="getElementById('close-menu').checked = false;">
                        <li><a href="#home">HOME</a></li>
                        <li><a href="#sobre">SOBRE</a></li>
                        <li><a href="#cadastro">CADASTRO</a></li>
                        <li><a href="#suporte">SUPORTE</a></li>
                        <li><a href="#criadores">CRIADORES</a></li>
                    </ul>
                </nav>
            </div>
        </aside>
    </header>
</template>