document.addEventListener("DOMContentLoaded", function () {
    let isResizing = false;
    let startY;
    let currentResizer;

    const resizers = document.querySelectorAll(".resizer");
    resizers.forEach((resizer) => {
        resizer.addEventListener("mousedown", (event) => {
            isResizing = true;
            currentResizer = event.target;
            startY = event.clientY;
        });
    });

    document.addEventListener("mousemove", (event) => {
        if (!isResizing) return;

        const item = currentResizer.parentElement;
        const originalHeight = parseFloat(
            getComputedStyle(item, null).getPropertyValue("height")
        );

        const mouseY = event.clientY;
        const heightChange = mouseY - startY;

        if (currentResizer.classList.contains("caret-up")) {
            item.style.height = Math.max(30, originalHeight - heightChange) + "px";
        } else if (currentResizer.classList.contains("bottom")) {
            item.style.height = Math.max(30, originalHeight + heightChange) + "px";
        }
    });

    document.addEventListener("mouseup", () => {
        isResizing = false;
        currentResizer = null;
    });
});
