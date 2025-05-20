alert("File \"code.js\" loads automatically");
button("hi","hi");
onEvent("hi","click", function(e){
    alert("hi");
    console.log(e);
});


onEvent("id", "event", function() {
  // code
});

setParent("child", "parent");
