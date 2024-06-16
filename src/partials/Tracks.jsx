import React from "react";
import tracksData from "../data/tracks";
import TrackCard from "./Card";

function FeaturesBlocks() { 
	return (
		<section className="relative">
			{/* Section background (needs .relative class on parent and next sibling elements) */}
			<div
				className="hidden absolute inset-0 top-1/2 md:mt-15 lg:mt-0 bg-orange-600/20 pointer-events-none"
				aria-hidden="true"></div>

			<div className="relative max-w-[92rem] mx-auto px-4 sm:px-6">
				<div className="py-12 md:py-20">
					{/* Section header */}
					<div className="mx-auto text-center pb-12 md:pb-20">
						<h1 className="top-0 h-auto py-4 justify-center flex flex-col bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
							TRACKS
						</h1>
						<hr className='mt-6 md:mt-8 h-1.5 bg-[#a50045] border-none rounded-3xl' />
						<p className="py-8 flex flex-wrap justify-center">
							{tracksData.map((track, index) => {
								return <TrackCard key={index} track={track} index={index} />;
							})}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default FeaturesBlocks;
