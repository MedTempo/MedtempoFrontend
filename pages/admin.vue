<template>
    <div>

        <input type="text" v-model="usr.nome" name="nome" placeholder="insira nome" id="">
        <input type="text" v-model="usr.sobrenome" name="sobrenome" placeholder="insira sobrenome" id="">
        <input type="text" v-model.number="usr.idade" name="idade" placeholder="insira idade" id="">

        <select v-model="usr.sexo">
            <option disabled value="">Insira seu Sexo</option>
            <option v-bind:value="true">Feminino</option>
            <option v-bind:value="false">Masculino</option>
        </select>

        <input type="email" v-model="usr.email" name="email" placeholder="insira email" id="">
        <input type="password" v-model="usr.senha" name="senha" placeholder="insira senha" id="" />

        <input type="date" v-model="usr.data_nascimento" name="data_nascimento" placeholder="insira data de nascimento"
            id="">


        <textarea v-model="usr.descricao" name="descricao" placeholder="insira descricao" id="" cols="30" rows="10"></textarea>

        <input value="Send to Back" @click="Send($event)" type="button" />
    </div>


    <div>
        <h2>Data:</h2>

        <div v-if="pending">
            Loading ...
        </div>
        <div v-else-if="error">
            {{ error }}
        </div>
        <div v-else>
            <div>
                {{ posts }}

            </div>
        </div>

    </div>
</template>
<script setup lang="ts">
const { pending, data: posts, error } = useFetch(`http://127.0.0.1:7777/`, {
    lazy: true,
})

interface usuario_pessoal {
    id: string,
    nome: string,
    sobrenome: string,
    idade: number,
    sexo: boolean

    email: string,
    senha: string

    data_criacao: string
    data_nascimento: string

    descricao: string
}

let usr: usuario_pessoal = {
    "id": "",
    "data_criacao": Date(),
    "data_nascimento": Date(),
    "descricao": "",
    "email": "",
    "senha": "",
    "idade": 0,
    "nome": "",
    "sexo": false,
    "sobrenome": ""
}

function Send($event: Event) {


    usr.data_criacao = new Date().toISOString().slice(0,10)


    console.log(usr)
}

/*

  "engines": {
    "node": ">=16.0.0 <17.0.0 || >=20.0.0"
  },
  
*/

/*
        "id": "5f661e71-d18c-4de8-9dfe-b532a17a7db",
        "data_criacao": "2020-10-21",
        "data_nascimento": "2020-10-21",
        "descricao": "Lorem Ipsum Dolor Sit Amed",
        "email": "habdig7@gmail.com",
        "senha": "d754cc6d5d58a72ff44a8123dc108794b5fe0ca4950e7a81c08239dc499e87d9937a837a7b9dc5cea3db0dc19283153c0b7b8117f72743f2b47eedaba4a8e3b7",
        "idade": 16,
        "nome": "Teste With variables",
        "sexo": false,
        "sobrenome": "Silveira Vieira"
*/
</script>
  

