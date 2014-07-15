var colors = ['red', 'green', 'blue'];

for(var i = 0; i < colors.length; i++) {
  console.log(colors[i] + " is one of my favorite colors");
}

colors.forEach(function(color, index) {
  console.log(colors + " is favorite color number " + index);
});
