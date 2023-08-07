<template>
    <div id="app">
        <div class="container mx-auto sm:px-4" style="padding-top: 20px">
            <div class="grid grid-rows-4 grid-flow-col gap-6">
                <div class="col">
                    <div 
                      class="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300">
                      <div class="py-3 px-6 mb-0 bg-gray-200 border-b-1 border-gray-300 text-gray-900">
                        <h3 class="mb-3">Form Donasi</h3>
                      </div>
                      <div class="flex-auto p-6">
                        <list-donatur @selectedDonatur="selectedDonatur"/>
                        <lokasi-bencana @selectedBantuan="selectedBantuan"/>
                        <div class="mb-4">
                            <label for="">Jumlah Donasi (Rp)</label>
                            <input type="number" v-model="jumlah"
                               class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded">
                        </div>
                        <div class="mb-4">
                            <button 
                              class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded no-underline bg-blue-600 text-white hover:bg-blue-600 py-1 px-2 leading-tight text-xs"
                              @click="submitDonasi" :disabled="isLoading">
                              {{ isLoading ? 'Loading...': 'Donasi!' }}
                            </button>
                          </div>
                       </div>
                    </div>
                </div>
                <div class="col">
                    <div
                     class="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300">
                     <div class="py-3 px-6 mb-0 bg-gray-200 border-b-1 border-gray-300 text-gray-900">
                        <h3 class="mb-3">Donasi Terkumpul</h3>
                    </div>
                    <div class="flex-auto p-6">
                        <list-transaksi />
                    </div>
                </div>
            </div>
        </div>
     </div>
</div>
</template>

<script>
import Donatur from '../components/Donatur.vue'
import Clients from '../components/Clients.vue'
import Transaksi from '../components/Transaksi.vue'

export default {
    data() {
        return {
            donatur: '',
            clients: '',
            jumlah: 0
        }
    },
    computed: {
        isLoading() {
            return this.$store.state.isLoading
        }
    },
    methods: {
        selectedDonatur(val) {
            this.donatur = val
        },
        selectedBantuan(val) {
            this.clients = val
        },
        submitDonasi() {
            this.$store.dispatch('transaksi/save_donasi', {
                id: Math.random().toString(36).substring(7),
                donatur: this.donatur,
                bantuan: this.clients,
                jumlah: this.jumlah
            })
        }
    },
    components: {
        'list-donatur': Donatur,
        'lokasi-bencana': Clients,
        'list-transaksi': Transaksi
    }
}
</script>