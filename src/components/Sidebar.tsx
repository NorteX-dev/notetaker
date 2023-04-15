import { Button, UnstyledButton, Collapse, Text, Space } from "@mantine/core";
import { ChevronDown, ChevronRight, File, Plus } from "tabler-icons-react";
import { useState } from "react";
import { usePageState } from "../states/PageState";

type Page = {
	id: string;
	name: string;
	parent: string | null;
};

export const pages: Page[] = [
	{ id: "page1", name: "Page 1", parent: null },
	{ id: "page2", name: "Page 2", parent: null },
	{ id: "page3", name: "Page 3", parent: "page1" },
	{ id: "page4", name: "Page 4", parent: "page2" },
	{ id: "page5", name: "Page 5", parent: "page4" },
];

function Page({ page, depth }: { page: Page; depth: number }) {
	const [open, setOpen] = useState(false);
	const { setPageId } = usePageState();

	const parentPages = pages.filter((p) => p.parent === page.id);

	const handleExpand = (e: any) => {
		e.stopPropagation();
		setOpen(!open);
	};

	const handleSetPage = () => {
		setPageId(page.id);
	};

	return (
		<>
			<UnstyledButton
				onClick={handleSetPage}
				sx={{
					backgroundColor: "rgba(255,255,255,0.03)",
					padding: "4px 20px",
					width: "100%",
					marginBottom: "5px",
					borderRadius: "5px",
					display: "flex",
					alignItems: "center",
					paddingLeft: `${depth * 19 + 5}px`,
					transition: "background-color 0.2s ease",
					["&:hover"]: {
						backgroundColor: "rgba(255,255,255,0.05)",
					},
				}}
			>
				{parentPages.length > 0 ? (
					<>
						{open ? (
							<div
								onClick={handleExpand}
								style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
							>
								<ChevronDown color={"#727272"} size={16} />
							</div>
						) : (
							<div
								onClick={handleExpand}
								style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
							>
								<ChevronRight color={"#727272"} size={16} onClick={handleExpand} />
							</div>
						)}
					</>
				) : (
					<>
						<Space w={16} />
					</>
				)}
				<File size={16} />
				<p
					style={{
						fontWeight: 600,
						fontSize: "13px",
						marginLeft: "5px",
					}}
				>
					{page.name}
				</p>
			</UnstyledButton>
			{parentPages.length > 0 && (
				<Collapse in={open}>
					{parentPages.map((parentPage) => (
						<div key={parentPage.id}>
							<Page page={parentPage} depth={depth + 1} />
						</div>
					))}
				</Collapse>
			)}
		</>
	);
}

export default function Sidebar() {
	return (
		<div style={{ width: "100%" }}>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<Button
					leftIcon={<Plus />}
					variant={"outline"}
					color={"indigo"}
					style={{
						marginBottom: "20px",
						width: "80%",
					}}
				>
					New Note
				</Button>
			</div>
			<Text p={10} color={"grey"} size={"xs"} transform={"uppercase"} weight={600}>
				Your notes:
			</Text>
			<div style={{ display: "flex", flexDirection: "column" }}>
				{pages
					.filter((page) => page.parent === null)
					.map((page) => (
						<div key={page.id} style={{ padding: "0 5px", paddingBottom: "5px" }}>
							<Page page={page} depth={0} />
						</div>
					))}
			</div>
		</div>
	);
}
