// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

addEventListener("upload", event => {
    const { target, detail } = event
    const { id, file } = detail
    target.insertAdjacentHTML("beforeupload", `
      <div id="upload-${id}" class="upload">
        <span class="upload__filename">${file.name}</span>
      </div>
    `)
  })
   
  addEventListener("upload:begin", event => {
    const { id } = event.detail
    const element = document.getElementById(`upload-${id}`)
  })
   
  addEventListener("upload:error", event => {
    event.preventDefault()
    const { id, error } = event.detail
    const element = document.getElementById(`upload-${id}`)
    element.classList.add("upload--error")
    element.setAttribute("title", error)
  })
   
  addEventListener("upload:complete", event => {
    const { id } = event.detail
    const element = document.getElementById(`upload-${id}`)
    element.classList.add("upload--complete")
  })
  