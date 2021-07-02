const SCRIPT_CACHE = new Map();
const TEMPLATE_SCRIPT_ID = ({ id }) => `svst-${id}`;
export function mount_script(id, src) {
    if (SCRIPT_CACHE.has(id))
        return SCRIPT_CACHE.get("id");
    const { head } = document;
    const promise = new Promise((resolve, reject) => {
        const script_element = document.createElement("script");
        const script_id = TEMPLATE_SCRIPT_ID({ id });
        script_element.setAttribute("async", "true");
        script_element.setAttribute("id", script_id);
        script_element.setAttribute("src", src);
        script_element.setAttribute("type", "application/javascript");
        script_element.addEventListener("error", () => reject());
        script_element.addEventListener("load", () => resolve());
        head.appendChild(script_element);
    });
    SCRIPT_CACHE.set(id, promise);
    return promise;
}
