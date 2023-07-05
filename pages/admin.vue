<template>
    <form>

        <input type="text" v-model="usr.nome" name="nome" placeholder="insira nome" id="" required>
        <input type="text" v-model="usr.sobrenome" name="sobrenome" placeholder="insira sobrenome" id="" required>
        <input type="text" v-model.number="usr.idade" name="idade" placeholder="insira idade" id="" required>

        <select v-model="usr.sexo">
            <option disabled value="">Insira seu Sexo</option>
            <option v-bind:value="true">Feminino</option>
            <option v-bind:value="false">Masculino</option>
        </select>

        <input type="email" v-model="usr.email" name="email" placeholder="insira email" id="" required>
        <input type="password" v-model="usr.senha" name="senha" placeholder="insira senha" id="" required />

        <input type="date" v-model="usr.data_nascimento" name="data_nascimento" placeholder="insira data de nascimento"
            id="" required>


        <textarea v-model="usr.descricao" name="descricao" placeholder="insira descricao" id="" required cols="30"
            rows="10"></textarea>

        <input value="Send to Back" @click="Send($event)" type="button" />
    </form>

    <div>
        {{ res }}
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
                {{ usuarios }}

            </div>
        </div>

    </div>

    <div v-for="(user, i) in usuarios?.data.usuario_pessoal.values">

        {{ i }}

        <h5>Id: {{ user.id }}</h5>
        <h1>Nome: {{ user.nome }}</h1>
        <p>Idade: {{ user.idade }}</p>

        <p>Sexo: {{ user.sexo === true ? `Feminino` : `Masculino` }}</p>

        <p>Email: {{ user.email }}</p>
        <p>Senha Hash: {{ user.senha }}</p>

        <p>Data de Nascimento: {{ user.data_nascimento }}</p>
        <p>Data de Criacao: {{ user.data_criacao }}</p>

        <p>Descriacao: {{ user.descricao }}</p>

        <input :value="`Delete ${user.nome}`" type="button" @click="Delete(user.id)">

        <hr>

    </div>


    <div>
        <h1> UPDATE </h1>

        <div v-for="(usuario, i) in usuario_patch">
            <form>

                {{ i }}

                <input type="text" @input="usuario_patch[i].nome = $event.target?.value" :value="usuario.nome" name="nome"
                    placeholder="insira nome" id="" required>
                <input type="text" @input="usuario_patch[i].sobrenome = $event.target?.value" :value="usuario.sobrenome"
                    name="sobrenome" placeholder="insira sobrenome" id="" required>
                <input type="text" @input="usuario_patch[i].idade = parseInt($event.target?.value)"
                    :value.number="usuario.idade" name="idade" placeholder="insira idade" id="" required>

                <select
                    @input="$event.target?.value == `true` ? usuario_patch[i].sexo = true : ($event.target?.value == `false` ? usuario_patch[i].sexo = false : null);"
                    :value="usuario.sexo">
                    <option disabled value="">Insira seu Sexo</option>
                    <option v-bind:value="true">Feminino</option>
                    <option v-bind:value="false">Masculino</option>
                </select>?

                <input type="email" @input="usuario_patch[i].email = $event.target?.value" :value="usuario.email"
                    name="email" placeholder="insira email" id="" required>
                <input type="password" :value="usuario.senha" name="senha" placeholder="insira senha" id="" required />

                <input type="date" @input="usuario_patch[i].data_nascimento = $event.target?.value"
                    :value="usuario.data_nascimento" name="data_nascimento" placeholder="insira data de nascimento" id=""
                    required>


                <textarea @input="usuario_patch[i].descricao = $event.target?.value" :value="usuario.descricao"
                    name="descricao" placeholder="insira descricao" id="" required cols="30" rows="10"></textarea>

                <input :value="`Update ` + usuario.id" @click="usuario_patch[i].id = usuario.id; Patch(usuario_patch[i])"
                    type="button" />
            </form>

        </div>


        {{

            usuario_patch
        }}

    </div>
</template>
<script lang="ts">

import address from '../components/address';

import type { usuario_pessoal, req_user_pessoal } from "../interfaces/usuarios"


export default {
    name: `admin`,

    setup() {
        const { pending, data: usuarios, error, refresh } = useFetch<req_user_pessoal>(address, {
            lazy: true,

            watch: []
        })

        let usuario_patch: Array<usuario_pessoal> = usuarios.value?.data.usuario_pessoal.values.slice()


            return { pending, usuarios, usuario_patch, error }
    },

    data() {
        return {
            usr: {
                "id": "",
                //"data_criacao": Date(),
                "data_nascimento": Date(),
                "descricao": "",
                "email": "",
                "senha": "",
                "idade": 0,
                "nome": "",
                "sexo": null,
                "sobrenome": ""
            } as usuario_pessoal,

            res: {} as unknown
        }
    },

    methods: {
        async Send($event: Event) {

            //this.usr.data_criacao = new Date().toISOString().slice(0, 10)


            if (this.usr.idade > 127) {
                //       return alert(`idade invalida`)
            }

            const { pending, data: usuarios, error } = await useFetch<req_user_pessoal>(`${address}usuarios/`, {
                lazy: true,

                headers: {
                    "Content-Type": "application/json",
                },

                method: `POST`,

                body: this.usr
            })


            console.log(usuarios)

            this.res = usuarios
            console.log(this.usr)

        },

        async Delete(id: string) {
            const { pending, data: usuarios, error } = await useFetch<req_user_pessoal>(`${address}usuarios`, {
                lazy: true,

                headers: {
                    "Content-Type": "application/json",
                },

                method: `DELETE`,

                body: {
                    id: id
                }
            })


            console.log(usuarios)
        },

        async Patch(user: usuario_pessoal) {

            console.log(user)

            const { pending, data: usuarios, error } = await useFetch<req_user_pessoal>(`${address}usuarios`, {
                lazy: true,

                headers: {
                    "Content-Type": "application/json",
                },

                method: `PATCH`,

                body: user
            })

            console.log(user)
        }
    }
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
  

