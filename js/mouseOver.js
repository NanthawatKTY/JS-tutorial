let thubnailImage = document.querySelectorAll('.thumbnail-image')
let bigImage = document.querySelector('.big-image')

// event = object that store data of event that happend
function changeImageSize(event){
    bigImage.src = event.target.src
}

function removeImage(){
    bigImage.src = ''
}

thubnailImage.forEach((thumbnail) => {
    thumbnail.addEventListener('mouseover', changeImageSize)
    thumbnail.addEventListener('mouseout', removeImage)
})