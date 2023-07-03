<style lang="scss" src="../public/assets/css/style.scss"/>

<template>
  <medHead />

  <Body>

    <medHeader />

    <main>
      <section id="home" class="intro main-bg section-home">
        <div class="intro-img">
          <img src="/assets/images/capa.jpg" alt="Capa MedTempo" />
        </div>
        <div class="intro-titulo">BEM-VINDO AO MEDTEMPO!</div>
        <div class="intro-subtitulo">MEDICAÇÃO NA HORA</div>
        <div class="intro-botao">SAIBA MAIS SOBRE NOSSA PLATARFORMA</div>
      </section>

      <section class="intro main-bg section-sobre">
        <div class="expand_more">
          <span class="material-symbols-outlined">
            <a class="material-symbols-outlined" href="#sobre">expand_more</a>
          </span>
        </div>

        <div id="sobre" class="main-content intro-content">
          <div class="intro-text-content">
            <h2 class="h2-sobre">SOBRE O MEDTEMPO!</h2>
            <p>
              Nossa empresa oferece um serviço excepcional para idosos,
              garantindo que eles lembrem de tomar seus remédios nos horários
              corretos. Além disso, proporcionamos aos filhos e cuidadores a
              capacidade de monitorar os diagnósticos de seus entes queridos e
              verificar se eles tomaram seus medicamentos. Nosso aplicativo
              possui uma infraestrutura e atendimento de primeira qualidade,
              criados especialmente para tornar a vida dos idosos mais fácil.
            </p>
          </div>
          <div class="intro-img">
            <img src="/assets/images/sobre.svg" alt="Fundo MedTempo." />
          </div>
        </div>
      </section>

      <section id="cadastro" class="white-bg section">
        <div class="main-content top3-content">
          <h2 class="cadastro">TIPOS DE CADASTRO</h2>
          <div class="row">
            <medCard v-for="i in [`Eu sou a props1`, `eu sou a props2`, `eu sou a props3`]" :text="i" />
          </div>
        </div>
      </section>

      <section id="suporte" class="intro main-bg section-suporte">
        <div class="main-content intro-content">
          <div class="intro-text-content">
            <img src="/assets/images/download.svg" alt="Fundo MedTempo." />
          </div>
          <div class="suporte-texto">
            <h2 class="h2-suporte-texto">FAÇA DOWNLOAD</h2>
            <p class="b-suporte-texto">Baixe nosso app agora mesmo e transforme sua experiência</p>
            <div class="img-suporte">
              <a href="https://www.apple.com" target="_blank"> <img src="/assets/images/apple.png"
                  alt="Apple Store." /></a>
              <a href="https://play.google.com/store/" target="_blank"> <img src="/assets/images/play.png"
                  alt="Play Store." /></a>
            </div>
            <p class="d-suporte-texto">Disponível na apple store e no google play</p>
            <p class="a-suporte-texto">Acesse a loja de aplicativos do seu dispositivo agora mesmo e faça o download do
              nosso app. </p>
          </div>
        </div>
      </section>

      <section id="criadores" class="white-bg section">
        <div class="main-content top3-content">
          <h2>CRIADORES</h2>
          <div class="sobre-nos">
            <img src="/assets/images/mateus.png" alt="Mateus." />
            <p class="mateus">Mateus Felipe Vieira</p>
          </div>
        </div>
      </section>
    </main>

    <a class="back-to-top" href="#">▶</a>

    <medFooter />

  </Body>
</template>

 
