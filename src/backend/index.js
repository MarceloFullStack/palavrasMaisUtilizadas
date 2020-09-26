const { ipcMain } = require('electron')
const { exists } = require('fs')
const { exit } = require('process')
const pathToRows = require('./pathsToRows')
const prepareData = require('./prepareData')
const groupeWords = require('./groupWords')


ipcMain.on('process-subtitles', (event, paths)=>{
    
    pathToRows(paths)
        .then(rows => prepareData(rows))
        .then(words => groupeWords(words))
        .then(groupeWords=>
            event.reply('process-subtitles', groupeWords))
})