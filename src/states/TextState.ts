import { create } from "zustand";

export enum BlockType {
	TEXT = "text",
	IMAGE = "image",
	QUOTE = "quote",
	CALLOUT = "callout",
	H1 = "h1",
	H2 = "h2",
	H3 = "h3",
	H4 = "h4",
	H5 = "h5",
	H6 = "h6",
	DIVIDER = "divider",
}

export interface TextState {}

export const useTextState = create<TextState>((set) => ({}));
