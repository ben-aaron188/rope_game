var c, ctx,
  Angle = 0,
  count = 0,
  movementID;

$(document)
  .ready(function() {
    css_center($("#player"))
      //init_player()
  })
  .keydown(function() {
    hori_move("neg", 20)
  })
  .keyup(function() {
    count = 0
    cancelAnimationFrame(movementID);
  })

function init_player() {
  c = $("#canvas")[0];
  ctx = c.getContext("2d");
  ctx.moveTo(225, 500);
  ctx.lineTo(225, 200);
  ctx.lineWidth = 15
  ctx.stroke();
}


function hori_move(xdir, angle) {
  movementID = requestAnimationFrame(function() {
    hori_move(xdir, angle)
  });
  count++
  if (count < 2) {
    Angle += angle
    switch (xdir) {
      case "pos":
        $("#player").css({
          "-webkit-transform": "rotate(" + Angle + "deg)",
          "-moz-transform": "rotate(" + Angle + "deg)",
          "-ms-transform": "rotate(" + Angle + "deg)",
          "-o-transform": "rotate(" + Angle + "deg)",
          "transform": "rotate(" + Angle + "deg)",
          "zoom": 1
        })
        break;
      case "neg":
        $("#player").css({
          "-webkit-transform": "rotate(-" + Angle + "deg)",
          "-moz-transform": "rotate(-" + Angle + "deg)",
          "-ms-transform": "rotate(-" + Angle + "deg)",
          "-o-transform": "rotate(-" + Angle + "deg)",
          "transform": "rotate(-" + Angle + "deg)",
          "zoom": 1
        })
        break;
    }
  }
}

function corrector() {

}
