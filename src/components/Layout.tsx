import { ReactNode } from "react";
import { Container } from "@mantine/core";
import Sidebar from "./Sidebar";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<div
			style={{
				width: "100%",
				height: "100vh",
				overflow: "hidden",
				display: "flex",
			}}
		>
			<aside
				style={{
					width: "300px",
					height: "100%",
					overflow: "hidden",
					display: "flex",
					backgroundColor: "#1f2023",
					padding: "40px 0px",
				}}
			>
				<Sidebar />
			</aside>
			<div
				style={{
					width: "100%",
					height: "100%",
					overflow: "auto",
				}}
			>
				<Container my={50}>{children}</Container>
			</div>
		</div>
	);
}
