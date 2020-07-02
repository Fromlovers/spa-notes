export function findParentElement(child, search) {
    if (!child.parentElement) {
        return;
    }
    if (child.parentElement.classList && child.parentElement.classList.contains(search)) {
        return child.parentElement;
    }

    return findParentElement(child.parentElement, search);
}
