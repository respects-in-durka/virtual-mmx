import React, { createRef } from "react";
import { Provider } from "mobx-react";
import { TranslateGrid } from "./TranslateGrid";
import { SubdivisonChooser } from "./SubdivisionChooser";
import { Blur } from "./Blur";
import { ProgramGrid } from "./ProgramGrid";
import { PegPlacer } from "./PegPlacer";
import { PlaybackHead } from "./PlaybackHead";
import { GearSide } from "./GearSide";
import { computed, action } from "mobx";
import { ProgrammingWheelDisplayStore } from "./programmingWheelDisplay";
import { AppComponent, WheelComponent } from "../storeComponents";

class ProgrammingWheel_ extends AppComponent {
	wheel = new ProgrammingWheelDisplayStore(this.app);

	svgRef = createRef<SVGSVGElement>();

	@action.bound handleMouseMove(
		e: React.MouseEvent<SVGSVGElement, MouseEvent>
	) {
		if (!this.svgRef.current) return;
		const svgBound = this.svgRef.current.getBoundingClientRect();
		const x = e.clientX - svgBound.left - this.wheel.gearWidth;
		const mouseChannel = this.wheel.pixelToChannel(x);
		const y = e.clientY - svgBound.top;
		const mouseTick = this.wheel.pixelToTick(y) + this.wheel.visibleTopTick;
		if (mouseChannel < 0 || mouseChannel >= this.wheel.totalChannels)
			return;
		this.wheel.moveMouse(mouseTick, mouseChannel);
	}
	@action.bound handleScroll(e: React.WheelEvent<SVGSVGElement>) {
		if (e.shiftKey) {
			this.wheel.zoom(e.deltaY / 20);
		} else {
			this.wheel.scroll(e.deltaY / 5);
		}
	}
	@computed get seemlessWheelOffset() {
		return this.wheel.tickToPixel(this.wheel.totalTicks);
	}

	render() {
		return (
			<Provider wheel={this.wheel}>
				<svg
					viewBox={`0 0 ${
						this.wheel.visiblePixelWidth + this.wheel.gearWidth * 2
					} ${this.wheel.visiblePixelHeight}`}
					style={{
						width:
							this.wheel.visiblePixelWidth +
							this.wheel.gearWidth * 2,
						height: this.wheel.visiblePixelHeight,
					}}
					onMouseMove={this.handleMouseMove}
					onWheel={this.handleScroll}
					ref={this.svgRef}
				>
					<TranslateGrid tick={-this.wheel.visibleTopTick}>
						<MovingWindow />
						<TranslateGrid tick={this.wheel.totalTicks}>
							{/* second MovingWindow for seemless scroll */}
							<MovingWindow />
						</TranslateGrid>
					</TranslateGrid>
					<g
						style={{
							transform: `translateX(${this.wheel.gearWidth}px)`,
						}}
					>
						{this.wheel.instrumentChannels.map(
							(channel, channelNumber) => (
								<TranslateGrid
									channel={channelNumber}
									key={channelNumber}
								>
									<NoteLabel
										tuning={channel.note ?? "None"}
									/>
								</TranslateGrid>
							)
						)}
					</g>
					<SubdivisonChooser />
					<Blur />
				</svg>
			</Provider>
		);
	}
}

export const ProgrammingWheel = AppComponent.sync(ProgrammingWheel_);

class MovingWindow_ extends WheelComponent {
	render() {
		return (
			<>
				<g
					style={{
						transform: `translateX(${this.wheel.gearWidth}px)`,
					}}
				>
					<ProgramGrid />
					<PegPlacer />
					<PlaybackHead />
					<line
						x1={0}
						y1={0}
						x2={this.wheel.visiblePixelWidth}
						y2={0}
						stroke="red"
					/>
				</g>
				<GearSide x={0} />
				<GearSide
					x={this.wheel.visiblePixelWidth + this.wheel.gearWidth}
				/>
			</>
		);
	}
}

const MovingWindow = WheelComponent.sync(MovingWindow_);

interface NoteLabelProps {
	tuning: string;
}

class NoteLabel_ extends WheelComponent<NoteLabelProps> {
	render() {
		return (
			<>
				<TranslateGrid channel={0.5}>
					<rect
						x={-17.5}
						y={7}
						width={35}
						height={22}
						fill="#444"
						rx={7}
					/>
					<text
						style={{ userSelect: "none" }}
						x={0}
						y={20}
						textAnchor="middle"
						dominantBaseline="middle"
						fill="white"
					>
						{this.props.tuning}
					</text>
				</TranslateGrid>
			</>
		);
	}
}

const NoteLabel = WheelComponent.sync(NoteLabel_);
