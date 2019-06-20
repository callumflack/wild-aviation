
// https://codepen.io/zohf/pen/FbIgo

// Cache selectors
var lastId,
  topMenu = $("#nav"),
  topMenuHeight = topMenu.outerHeight()+15,
  // All list items
  menuItems = topMenu.find("a"),
  // Nav wrapper bar
  navWrapper = topMenu.closest(".c-nav-wrapper"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function(){
  var item = $($(this).attr("href"));
  if (item.length) { return item; }
  });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
    offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({
    scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;

  // Get id of current scroll item
  var cur = scrollItems.map(function(){
  if ($(this).offset().top < fromTop)
    return this;
  });

  // Get the id of the current element
  cur = cur[cur.length-1];
  var id = cur && cur.length ? cur[0].id : "";

  if (id === "About") {
  // Set nav bar active class
  navWrapper
    .addClass("is-active")
  }

  if (id === "") {
  // Remove nav bar active class
  navWrapper
    .removeClass("is-active")
  }

  if (lastId !== id) {
  lastId = id;
  // Set/remove active class
  // Careful how you wrap the href # & id…
  // See: http://tiny.cc/v0lj8y
  menuItems
    .parent().removeClass("is-active")
    .end().filter("[href='#"+id+"']").parent().addClass("is-active");
  }
});
