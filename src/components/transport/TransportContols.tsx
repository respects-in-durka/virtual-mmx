import React from "react";
import { Button } from "react-bootstrap";
import { useStores } from "../../contexts/StoreContext";
import { useLocalStore, observer } from "mobx-react";
import { Program } from "vmmx-schema";
import { VmmxPlayer } from "../../core/playback/player";

let program: Program = {
	dropEvents: [
		{ kind: "vibraphone", tick: 0, channel: 11 },
		{ kind: "vibraphone", tick: 240, channel: 1 },
		{ kind: "vibraphone", tick: 240, channel: 4 },
		{ kind: "vibraphone", tick: 360, channel: 8 },
		{ kind: "vibraphone", tick: 720, channel: 1 },
		{ kind: "vibraphone", tick: 720, channel: 4 },
		{ kind: "vibraphone", tick: 840, channel: 7 },
		{ kind: "vibraphone", tick: 960, channel: 6 },
		{ kind: "vibraphone", tick: 1080, channel: 7 },
		{ kind: "vibraphone", tick: 1200, channel: 1 },
		{ kind: "vibraphone", tick: 1200, channel: 4 },
		{ kind: "vibraphone", tick: 1320, channel: 8 },
		{ kind: "vibraphone", tick: 1560, channel: 6 },
		{ kind: "vibraphone", tick: 1680, channel: 4 },
		{ kind: "vibraphone", tick: 1680, channel: 1 },
		{ kind: "vibraphone", tick: 1680, channel: 7 },
		{ kind: "vibraphone", tick: 1800, channel: 10 },
		{ kind: "vibraphone", tick: 2160, channel: 3 },
		{ kind: "vibraphone", tick: 2160, channel: 1 },
		{ kind: "vibraphone", tick: 2280, channel: 8 },
		{ kind: "vibraphone", tick: 2640, channel: 3 },
		{ kind: "vibraphone", tick: 2640, channel: 1 },
		{ kind: "vibraphone", tick: 2760, channel: 7 },
		{ kind: "vibraphone", tick: 2880, channel: 6 },
		{ kind: "vibraphone", tick: 3000, channel: 7 },
		{ kind: "vibraphone", tick: 3120, channel: 1 },
		{ kind: "vibraphone", tick: 3120, channel: 3 },
		{ kind: "vibraphone", tick: 3240, channel: 5 },
		{ kind: "vibraphone", tick: 3480, channel: 6 },
		{ kind: "vibraphone", tick: 3600, channel: 1 },
		{ kind: "vibraphone", tick: 3600, channel: 3 },
		{ kind: "vibraphone", tick: 3600, channel: 7 },
		{ kind: "vibraphone", tick: 3720, channel: 10 },
		{ kind: "vibraphone", tick: 4080, channel: 3 },
		{ kind: "vibraphone", tick: 4080, channel: 5 },
		{ kind: "vibraphone", tick: 4200, channel: 8 },
		{ kind: "vibraphone", tick: 4560, channel: 3 },
		{ kind: "vibraphone", tick: 4560, channel: 5 },
		{ kind: "vibraphone", tick: 4680, channel: 10 },
		{ kind: "vibraphone", tick: 4800, channel: 9 },
		{ kind: "vibraphone", tick: 4920, channel: 8 },
		{ kind: "vibraphone", tick: 5040, channel: 3 },
		{ kind: "vibraphone", tick: 5040, channel: 5 },
		{ kind: "vibraphone", tick: 5160, channel: 7 },
		{ kind: "vibraphone", tick: 5400, channel: 6 },
		{ kind: "vibraphone", tick: 5520, channel: 7 },
		{ kind: "vibraphone", tick: 5520, channel: 3 },
		{ kind: "vibraphone", tick: 5520, channel: 5 },
		{ kind: "vibraphone", tick: 5640, channel: 4 },
		{ kind: "vibraphone", tick: 5880, channel: 2 },
		{ kind: "vibraphone", tick: 6000, channel: 4 },
		{ kind: "vibraphone", tick: 6120, channel: 8 },
		{ kind: "vibraphone", tick: 6240, channel: 1 },
		{ kind: "vibraphone", tick: 6360, channel: 2 },
		{ kind: "vibraphone", tick: 6480, channel: 3 },
		{ kind: "vibraphone", tick: 6600, channel: 10 },
		{ kind: "vibraphone", tick: 6720, channel: 9 },
		{ kind: "vibraphone", tick: 6840, channel: 8 },
		{ kind: "vibraphone", tick: 6960, channel: 3 },
		{ kind: "vibraphone", tick: 6960, channel: 5 },
		{ kind: "vibraphone", tick: 7080, channel: 7 },
		{ kind: "vibraphone", tick: 7320, channel: 6 },
		{ kind: "vibraphone", tick: 7440, channel: 3 },
		{ kind: "vibraphone", tick: 7440, channel: 5 },
		{ kind: "vibraphone", tick: 7440, channel: 7 },
		{ kind: "vibraphone", tick: 7560, channel: 11 },
		{ kind: "vibraphone", tick: 7920, channel: 1 },
		{ kind: "vibraphone", tick: 7920, channel: 4 },
		{ kind: "vibraphone", tick: 8040, channel: 8 },
		{ kind: "vibraphone", tick: 8400, channel: 1 },
		{ kind: "vibraphone", tick: 8400, channel: 4 },
		{ kind: "vibraphone", tick: 8520, channel: 7 },
		{ kind: "vibraphone", tick: 8640, channel: 6 },
		{ kind: "vibraphone", tick: 8760, channel: 7 },
		{ kind: "vibraphone", tick: 8880, channel: 1 },
		{ kind: "vibraphone", tick: 8880, channel: 4 },
		{ kind: "vibraphone", tick: 9000, channel: 8 },
		{ kind: "vibraphone", tick: 9240, channel: 6 },
		{ kind: "vibraphone", tick: 9360, channel: 4 },
		{ kind: "vibraphone", tick: 9360, channel: 1 },
		{ kind: "vibraphone", tick: 9360, channel: 7 },
		{ kind: "vibraphone", tick: 9480, channel: 10 },
		{ kind: "vibraphone", tick: 9840, channel: 3 },
		{ kind: "vibraphone", tick: 9840, channel: 1 },
		{ kind: "vibraphone", tick: 9960, channel: 8 },
		{ kind: "vibraphone", tick: 10320, channel: 3 },
		{ kind: "vibraphone", tick: 10320, channel: 1 },
		{ kind: "vibraphone", tick: 10440, channel: 10 },
		{ kind: "vibraphone", tick: 10560, channel: 9 },
		{ kind: "vibraphone", tick: 10680, channel: 8 },
		{ kind: "vibraphone", tick: 10800, channel: 3 },
		{ kind: "vibraphone", tick: 10800, channel: 1 },
		{ kind: "vibraphone", tick: 10920, channel: 7 },
		{ kind: "vibraphone", tick: 11160, channel: 6 },
		{ kind: "vibraphone", tick: 11280, channel: 7 },
		{ kind: "vibraphone", tick: 11280, channel: 1 },
		{ kind: "vibraphone", tick: 11280, channel: 3 },
		{ kind: "vibraphone", tick: 11400, channel: 10 },
		{ kind: "vibraphone", tick: 11760, channel: 3 },
		{ kind: "vibraphone", tick: 11760, channel: 5 },
		{ kind: "vibraphone", tick: 11880, channel: 8 },
		{ kind: "vibraphone", tick: 12240, channel: 7 },
		{ kind: "vibraphone", tick: 12240, channel: 5 },
		{ kind: "vibraphone", tick: 12240, channel: 3 },
		{ kind: "vibraphone", tick: 12360, channel: 11 },
		{ kind: "vibraphone", tick: 12600, channel: 8 },
		{ kind: "vibraphone", tick: 12720, channel: 1 },
		{ kind: "vibraphone", tick: 12720, channel: 3 },
		{ kind: "vibraphone", tick: 12840, channel: 7 },
		{ kind: "vibraphone", tick: 13080, channel: 6 },
		{ kind: "vibraphone", tick: 13200, channel: 1 },
		{ kind: "vibraphone", tick: 13200, channel: 3 },
		{ kind: "vibraphone", tick: 13200, channel: 5 },
		{ kind: "vibraphone", tick: 13320, channel: 4 },
		{ kind: "vibraphone", tick: 13560, channel: 1 },
		{ kind: "vibraphone", tick: 13680, channel: 2 },
		{ kind: "vibraphone", tick: 13800, channel: 5 },
		{ kind: "vibraphone", tick: 13920, channel: 2 },
		{ kind: "vibraphone", tick: 14040, channel: 4 },
		{ kind: "vibraphone", tick: 14160, channel: 6 },
		{ kind: "vibraphone", tick: 14280, channel: 3 },
		{ kind: "vibraphone", tick: 14400, channel: 5 },
		{ kind: "vibraphone", tick: 14520, channel: 7 },
		{ kind: "vibraphone", tick: 14640, channel: 1 },
		{ kind: "vibraphone", tick: 14760, channel: 8 },
		{ kind: "vibraphone", tick: 14880, channel: 3 },
		{ kind: "vibraphone", tick: 15000, channel: 6 },
		{ kind: "vibraphone", tick: 15120, channel: 7 },
	],
	metadata: {
		author: "Martin Mollin",
		title: "Marble Machine",
		length: 61440,
		tpq: 240,
		version: "0.1.0-beta",
	},
	state: {
		bass: {
			capos: {},
			tuning: {},
		},
		stop() {
			global.player.stop();
		},
		hihatMachine: {
			setting: "",
		},
		machine: {
			bpm: 138,
			flywheelConnected: true,
			mute: {},
		},
		vibraphone: {
			vibratoSpeed: 1,
			vibratoEnabled: true,
			notes: {
				1: "B4",
				2: "C5",
				3: "D5",
				4: "E5",
				5: "F#5",
				6: "G5",
				7: "A5",
				8: "B5",
				9: "C6",
				10: "D6",
				11: "E6",
			},
		},
	},
};

class TransportControls extends React.Component {
	player: VmmxPlayer | undefined;

	componentDidMount() {
		this.player = new VmmxPlayer(program);
	}

	play = () => this?.player?.play();
	stop = () => this?.player?.stop();

	render() {
		return (
			<div>
				<Button onClick={this.play}>Play</Button>
				<Button onClick={this.stop}>Stop</Button>
			</div>
		);
	}
}

export default TransportControls;
