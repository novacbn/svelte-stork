const SCRIPT_CACHE: Map<string, Promise<void>> = new Map();

const TEMPLATE_SCRIPT_ID = ({id}: {id: string}) => `svst-${id}`;

export function mount_script(id: string, src: string): Promise<void> {
    if (SCRIPT_CACHE.has(id)) return SCRIPT_CACHE.get("id") as Promise<void>;

    const {head} = document;
    const promise = new Promise<void>((resolve, reject) => {
        const script_element = document.createElement("script");
        const script_id = TEMPLATE_SCRIPT_ID({id});

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
