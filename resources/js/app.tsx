require("./bootstrap");

import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";
import { QueryClient, QueryClientProvider } from "react-query";

const appName = "Bedata";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => require(`./Pages/${name}`),
    setup({ el, App, props }) {
        const queryClient = new QueryClient();
        return render(
            <QueryClientProvider client={queryClient}>
                <App {...props} />
            </QueryClientProvider>,
            el
        );
    },
});

InertiaProgress.init({ color: "#4B5563" });
