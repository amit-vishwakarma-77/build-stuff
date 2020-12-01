$(document).ready(() => {
    // $(window).resize(() =>{
        console.log($(document).width())
    // })
    let totalCards = $('#flex-cards-container > .card').length;
    // For 4 cards in a ROW
    let cardsPerRow = 4;
    let cardsToAdd = (totalCards % cardsPerRow);
    while (cardsToAdd--) {
        $('#flex-cards-container').append('<li class="card hidden-card"></li>');
    }
})