$(document).ready(function () {
  var active_slot;
  var inside_slot;
  function change_status() {
    $(".slot-status").each(function (index, element) {
      let status = $(this).text();
      if (status !== "Còn chỗ") {
          let current = $(this).closest("td");
        $(current).addClass('het-slot');
      }
    });
  }

  function change_position() {
    let position = 0;
    $(".msg-box").each(function (index, element) {
      position += 1;
      if( (position % 2) == 0) {
        $(this).addClass('right');
      }
      
    });
  }
  change_status();
  change_position();
});
