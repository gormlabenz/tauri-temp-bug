import { BaseDirectory, readBinaryFile } from '@tauri-apps/api/fs'

let fileNameInputEl: HTMLInputElement | null

async function openFile() {
  if (fileNameInputEl) {
    readBinaryFile(fileNameInputEl.value, { dir: BaseDirectory.Temp }).then(
      (data) => {
        console.log(data)
      }
    )
  }
}

window.addEventListener('DOMContentLoaded', () => {
  fileNameInputEl = document.querySelector('#fileName-input')
  document
    .querySelector('#open-button')
    ?.addEventListener('click', () => openFile())
})
