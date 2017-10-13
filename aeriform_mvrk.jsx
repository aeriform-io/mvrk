// After Effects script to output list of frames from markers on selected layer
// Michael Christophersson
// madebyflame.com @madebyflame
// thanks to @nate_nate_co
// v1.1

mvrk();

function mvrk(){
  var thisComp = app.project.activeItem;
  var thisLayer = thisComp.selectedLayers[0];

  if (!thisLayer) {
      alert('M∆RK - Please select a layer.');
      return;
  }

  var frames = [];
  for (var i=1; i<=thisLayer.property("Marker").numKeys; i++){
    frames.push(
      thisLayer.property("ADBE Marker").keyTime(i)/thisComp.frameDuration
    );
  }

  if (frames.length) {
    alert(frames)
  } else {
    alert('M∆RK - No markers found.');
  }
}
