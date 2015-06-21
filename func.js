var Angle_pos = Angle_neg = 0,
  angle = 10,
  count = 0,
  movementID;

$(document)
  .ready(function() {
    css_center($("#player"))
  })
  .keydown(function(e) {
    console.log(Angle_pos)
    console.log(Angle_neg)
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


function get_rotation_degree(){
  $("#player").getdegree().deg
}

function correct_pos() {
  movementID = requestAnimationFrame(function() {
    correct_pos()
  });
  count++
  if (count < 2) {
    Angle_pos += angle;
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

function correct_neg() {
  movementID = requestAnimationFrame(function() {
    correct_neg()
  });
  count++
  if (count < 2) {
    Angle_neg += angle;
    $("#player").css({
      "-webkit-transform": "rotate(-" + Angle_neg + "deg)",
      "-moz-transform": "rotate(-" + Angle_neg + "deg)",
      "-ms-transform": "rotate(-" + Angle_neg + "deg)",
      "-o-transform": "rotate(-" + Angle_neg + "deg)",
      "transform": "rotate(-" + Angle_neg + "deg)",
      "zoom": 1
    })
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
