import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import App from "app/App";
import "shared/config/i18n/i18n";
import { ThemeProvider } from "app/providers/ThemeProvider";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>
);
