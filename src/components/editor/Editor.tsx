import { useState } from "react";
import { usePageState } from "../../states/PageState";
import { pages } from "../Sidebar";
import Block from "./Block";

export default function Editor() {
	const { pageId } = usePageState();
	if (!pageId) {
	}

	const page = pages.find((p) => p.id === pageId);
	const [type, setType] = useState();

	// This is an editor block with a rich-text editor
	return (
		<div className={"block"}>
			<h3>{page?.name}</h3>
			<Block />
		</div>
	);
}
