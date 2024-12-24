function test() {
    const $test = document.querySelector("#camera");
    const $cart = document.querySelector("#cart");
    const $modal = document.querySelector(".modal");
  
    function deleteAllChild($el) {
      const $children = Array.from($el.children).filter(
        ($child) => $child.tagName != "TEMPLATE"
      );
      $children.forEach(($child) => {
        $el.removeChild($child);
      });
    }
  
    function makeTryAgainActionSheet() {
      const $el = document.importNode(
        document.getElementById("actionSheet").content,
        true
      );
      $modal.appendChild($el);
    }
  
    function makeCartModalActionSheet() {
      const $el = document.importNode(
        document.getElementById("modalBottomSheet").content,
        true
      );
      $modal.appendChild($el);
    }
  
    function modalOpen(makeEl) {
      makeEl();
      $modal.classList.add("darkBackground");
      $modal.classList.add("selected");
      const $actionsheet = $modal.querySelector(".actionsheet");
      $actionsheet.classList.add("slideUpFadeIn");
    }
  
    function modalClose() {
      const $actionsheet = $modal.querySelector(".actionsheet");
      $actionsheet.classList.remove("slideUpFadeIn");
      $actionsheet.classList.add("slideDownFadeOut");
  
      $modal.classList.remove("darkBackground");
      setTimeout(() => {
        $modal.classList.remove("selected");
        deleteAllChild($modal);
      }, 1000);
    }
  
    $test.addEventListener("click", () => {
      modalOpen(makeTryAgainActionSheet);
    });
    $cart.addEventListener("click", () => {
      modalOpen(makeCartModalActionSheet);
    });
    $modal.addEventListener("click", (e) => {
      if (e.target.closest(".modalContent")) return;
      modalClose();
    });
  }
  
  test();