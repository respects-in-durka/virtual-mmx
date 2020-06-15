import React, { Component } from "react";
import { observer } from "mobx-react";
import PartData from "../../core/playback/partData";
import { noteToVibraphoneLength } from "../../core/helpers";
import "./Vibraphone.css";
import { computed, observable, action } from "mobx";
import { vibra } from "./Vibraphone";

interface VibraphoneNoteProps {
	part: PartData;
	channel: number;
}

@observer
export class VibraphoneNote extends Component<VibraphoneNoteProps> {
	componentDidMount() {
		this.props.part.runOnNote(this.strike);
	}
	@computed get x() {
		return vibra.noteWidth * (this.props.channel - 1);
	}
	@computed get height() {
		return noteToVibraphoneLength(this.props.part.tuning);
	}
	@observable hit = false;

	@action.bound strike() {
		this.hit = true;
	}
	@action.bound endStrike() {
		this.hit = false;
	}
	handlePress = (e: React.MouseEvent<SVGGElement, MouseEvent>) => {
		if (e.buttons === 1) this.strike();
	};

	render() {
		return (
			<g
				style={{ transform: `translate(${this.x}px, ${-this.height / 2}px)` }}
				className={this.hit ? "vibraphoneHit" : ""}
				onAnimationEnd={this.endStrike}
				onMouseOver={this.handlePress}
				onMouseDown={this.handlePress}
			>
				<rect
					width={vibra.noteWidthPadded}
					height={this.height}
					fill="rgb(225, 225, 225)"
					rx={4}
					stroke="rgb(210, 210, 210)"
				/>
				<text
					x={vibra.noteWidthPadded / 2}
					y={this.height / 2}
					fill="rgb(130, 130, 130)"
					fontSize={16}
					textAnchor="middle"
					alignmentBaseline="central"
					style={{ userSelect: "none" }}
				>
					{this.props.part.tuning}
				</text>
			</g>
		);
	}
}
