var Angle_pos = Angle_neg = current_deg = 0,
  angle = 10,
  count = 0,
  movementID;

$(document)
  .ready(function() {
    css_center($("#player"))
    css_center($("#player_left"))
    css_center($("#player_right"))
    css_center($("#page_wrapper"))
    $("#player").sprite({
      fps: 12,
      no_of_frames: 10
    });
    $("#player_left").sprite({
      fps: 6,
      no_of_frames: 4
    });
    $("#player_right").sprite({
      fps: 6,
      no_of_frames: 4
    });
    $("#page_wrapper").pan({
      fps: 17,
      speed: 1,
      dir: 'down'
    });
  })
  .keydown(function(e) {
    var code = e.keyCode || e.which;
    switch (code) {
      case 39:
        correct_pos()
        break;
      case 37:
        correct_neg()
        break;
    }
  })
  .keyup(function() {
    count = 0
    cancelAnimationFrame(movementID);
  })


function get_rotation_degree() {
  current_deg = $("#player").getdegree().deg
  //console.log(current_deg)
}

function correct_pos() {
  movementID = requestAnimationFrame(function() {
    correct_pos()
  });
  count++
  if (count < 3) {
    get_rotation_degree();
    if (current_deg < 190) {
      Angle_pos = current_deg + 5;
      $("#player").css({
        "-webkit-transform": "rotate(" + Angle_pos + "deg)",
        "-moz-transform": "rotate(" + Angle_pos + "deg)",
        "-ms-transform": "rotate(" + Angle_pos + "deg)",
        "-o-transform": "rotate(" + Angle_pos + "deg)",
        "transform": "rotate(" + Angle_pos + "deg)",
        "zoom": 1
      })
    }
  }
}

function correct_neg() {
  movementID = requestAnimationFrame(function() {
    correct_neg()
  });
  count++
  if (count < 3) {
    get_rotation_degree();
    if (current_deg > -190) {
      Angle_neg = current_deg - 5;
      $("#player").css({
        "-webkit-transform": "rotate(" + Angle_neg + "deg)",
        "-moz-transform": "rotate(" + Angle_neg + "deg)",
        "-ms-transform": "rotate(" + Angle_neg + "deg)",
        "-o-transform": "rotate(" + Angle_neg + "deg)",
        "transform": "rotate(" + Angle_neg + "deg)",
        "zoom": 1
      })
    }
  }
}

function corrector() {
  $(document)
    .keydown(function(e) {
      var code = e.keyCode || e.which;
      movementID = requestAnimationFrame(function() {
        corrector()
      });
      count++
      if (count < 2) {
        Angle += angle
        if (code == 39) {
          $("#player").css({
            "-webkit-transform": "rotate(" + Angle + "deg)",
            "-moz-transform": "rotate(" + Angle + "deg)",
            "-ms-transform": "rotate(" + Angle + "deg)",
            "-o-transform": "rotate(" + Angle + "deg)",
            "transform": "rotate(" + Angle + "deg)",
            "zoom": 1
          })
        } else if (code == 37) {
          $("#player").css({
            "-webkit-transform": "rotate(-" + Angle + "deg)",
            "-moz-transform": "rotate(-" + Angle + "deg)",
            "-ms-transform": "rotate(-" + Angle + "deg)",
            "-o-transform": "rotate(-" + Angle + "deg)",
            "transform": "rotate(-" + Angle + "deg)",
            "zoom": 1
          })
        }
      }
    })
}
