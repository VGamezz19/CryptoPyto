// // $(document).on('click','a',()=>{console.log(this)})
// console.log("hola")

// $(document).on('click',function (e) {
//     //This sera la etiqueta `a` que estemos haciendo el evento `click`
//    console.log(e.target)
// });

// function test(e) {
//     console.log(e)
//     console.log("hola")
// }
// document.getElementById('row').addEventListener("click", e => alert(`Bubbling: ${elem.tagName}`));

$("#rowInitDown").click(function(e) {
    e.preventDefault()
    $('html, body').animate({
        scrollTop: $("#page").offset().top
    }, 1000);
});


