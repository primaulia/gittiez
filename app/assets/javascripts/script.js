$(function () {
  $('.dropdown-button').dropdown()
})

$(function () {
  $('a[data-remote]').on('ajax:success', function (e, data, status, xhr) {
    $(this).parent('li').fadeOut()
  })
})

// ---
// generated by coffee-script 1.9.2