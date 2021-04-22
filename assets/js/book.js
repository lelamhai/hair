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

  change_status();
});
