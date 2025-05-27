import React from "react";
import { ImageResponse } from "@cloudflare/pages-plugin-vercel-og/api";
import { loadGoogleFont } from "./utils.js";

export default {
	async fetch(request, env, ctx) {
		const url = new URL(request.url);
		const text = url.searchParams.get('text') || 'Hello, world!';

		return new ImageResponse(
			<div style={{
				width: '100%',
				height: '100%',
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				textAlign: "center",
				fontFamily: 'Geist',
				backgroundColor: '#fff',
				fontSize: 48,
				fontWeight: 600,
				padding: '0 20px',
			}}>
				{text}
			</div>,
			{
				width: 800,
				height: 480,
				fonts: [{
					name: 'Geist',
					data: await loadGoogleFont("Geist Mono", text),
					style: 'normal',
				}]
			}
		);
	}
}
