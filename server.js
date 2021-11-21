// two parameter: path and pathSave
// path is the file's path (files contain data from competitors)
// and pathSave is the file's path to save just with email data from competitors

import {readFile,writeFile,open} from 'fs/promises'

const path = './xd.txt'

const bufferFile = await readFile(path)

const jsonFile = JSON.parse(bufferFile)

const emailFile = []

jsonFile[0].forEach(e=>{

	emailFile.push(e.email)

})

const pathSave = './xdSave.txt'

await writeFile(pathSave,emailFile.toString())

await open(pathSave)