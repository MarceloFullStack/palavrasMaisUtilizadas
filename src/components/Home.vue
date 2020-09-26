
<template>
  <v-container fluid>
      <v-form>
          <v-file-input 
            label="Selecione as Legendas" 
            prepend-icon="mdi-message-text"
            append-icon="mdi-send"
            multiple 
            chips 
            v-model="files"
            @click:append="processSubtitle">
          </v-file-input>
      </v-form>
      <div  class="pills">
          <Pill v-for="word in groupedWords" :key="word.name"
          :name= "word.name" :amount="word.amount"/>
      </div>
  </v-container>
</template>

<script>

import { ipcRenderer } from 'electron'
window.ipcRenderer = ipcRenderer
import Pill from "./Pill"


export default {
    components: {Pill},
  
  data: function () {
    return {
      files:[],
      groupedWords: [],
    };
  },
  methods: {
      processSubtitle(){

          const paths = this.files.map(f => f.path)
          ipcRenderer.send('process-subtitles', paths)
          ipcRenderer.on('process-subtitles', (event, resp)=>{
              this.groupedWords = resp
          })
      }
  }
};
</script>

<style>
.pills{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>