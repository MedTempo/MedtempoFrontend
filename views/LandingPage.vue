<template>

    <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="assets/images/logo.png" /> 
        <title>MedTempo</title>
    </head>

    <header>
      <input
        id="close-menu"
        class="close-menu"
        type="checkbox"
        aria-label="Close menu"
        role="button"
      />
      <label
        class="close-menu-label"
        for="close-menu"
        title="close menu"
      ></label>
      <aside class="menu white-bg">
        <div class="main-content menu-content">
          <h1 onclick="getElementById('close-menu').checked = false;">
            <a href="#home">MedTempo</a>
          </h1>

          <nav>
            <ul onclick="getElementById('close-menu').checked = false;">
              <li><a href="#home">HOME</a></li>
              <li><a href="#sobre">SOBRE</a></li>
              <li><a href="#cadastro">CADASTRO</a></li>
            </ul>
            <component />
          </nav>
        </div>
      </aside>
    </header>

    <main>
      <section id="home" class="intro main-bg section">
        <div class="intro-img">
          <img src="assets/images/capa.png" alt="Logo de HTML, CSS e JS." />
        </div>
      </section>

      <div class="expand_more"> 
        <span class="material-symbols-outlined">
          <a class="material-symbols-outlined" href="#sobre">expand_more</a>
        </span>
      </div>

      <section id="sobre" class="intro main-bg section">
        <div class="main-content intro-content">
          <div class="intro-text-content">
            <h2>SOBRE A MEDTEMPO!</h2>
            <p>
              Nossa empresa irá te proporcionar o melhor serviço para idosos
              possível, fazendo com que idosos lembrem os horários de tomar seus
              remédios, e com que seus filhos e cuidadores consigam monitorar os
              diagnósticos de seus parentes e se eles tomaram ou não seus
              remédios. Nosso aplicativo tem a melhor infraestrutura e o melhor
              atendimentos que um idoso poderia ter, facilitando suas vidas.
            </p>
          </div>
          <div class="intro-img">
            <img
              src="assets/images/imagem-sobre.png"
              alt="Logo de HTML, CSS e JS."
            />
          </div>
        </div>
      </section>

      <section id="cadastro" class="white-bg section">
        <div class="main-content top3-content">
          <h2>TIPOS DE CADASTRO</h2>
        </div>
      </section>
    </main>

    <a class="back-to-top" href="#">▶</a>

    <footer id="footer" class="footer white-bg">
      <p>
        <a rel="nofollow" target="_blank" href="#"
          >Feito com 💙 por MedTempo!</a
        >
      </p>
    </footer>
</template>



<style>
    @import "/assets/css/style.css";
</style>