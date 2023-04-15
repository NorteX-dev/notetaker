import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.scss";
import { DevSupport } from "@react-buddy/ide-toolbox";
import { ComponentPreviews, useInitial } from "./dev";
import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial}>
			<MantineProvider theme={{ colorScheme: "dark" }} withNormalizeCSS={true} withGlobalStyles={true}>
				<App />
			</MantineProvider>
		</DevSupport>
	</React.StrictMode>
);
