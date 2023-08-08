<template>
    <div class="container mx-auto sm:px-4">
        <h1 class="text-center b">Fetch Tiket Kereta</h1>
        <table class="table-auto">
            <thead>
                <tr>
                    <th class="px-4 py-2">Code</th>
                    <th class="px-4 py-2">Name</th>
                    <th class="px-4 py-2">City</th>
                    <th class="px-4 py-2">Cityname</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="berita in getBerita" :key="berita.code">
                   <td class="border px-4 py-2">{{ berita.code }}</td>
                   <td class="border px-4 py-2">{{ berita.name }}</td>
                   <td class="border px-4 py-2">{{ berita.city}}</td>
                   <td class="border px-4 py-2">{{ berita.cityname}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
   import { mapGetters, mapActions } from 'vuex';

   export default {
     computed: {
        ...mapGetters('berita', ['getBerita']),
     },
     methods: {
        ...mapActions('berita',['fetchBerita']),
     },
     created(){
        this.fetchBerita();
     },
   }
</script>