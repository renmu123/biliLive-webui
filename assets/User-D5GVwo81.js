import { $ as renderList, A as createTextVNode, B as mergeModels, C as computed, D as createElementBlock, E as createCommentVNode, F as h, G as onBeforeUnmount, J as onMounted, Kt as normalizeClass, L as init_runtime_core_esm_bundler, M as defineComponent, Nt as init_shared_esm_bundler, T as createBlock, Tt as unref, U as onActivated, Y as onUnmounted, Z as openBlock, Zt as toDisplayString, a as useRoute, at as watch, ft as init_reactivity_esm_bundler, j as createVNode, mt as isRef, o as useRouter, ot as watchEffect, rt as useModel, st as withCtx, v as Fragment, w as createBaseVNode, yt as ref } from "./request-CkCeAZAO.js";
import { t as Popover_default } from "./Popover-BND3al2G.js";
import { M as verifyBiliKey, c as bili, f as task, s as douyu_default, t as _plugin_vue_export_helper_default, y as userApi } from "./_plugin-vue_export-helper-DY9hKhAR.js";
import { n as TabPane_default, t as Tabs_default } from "./Tabs-BVy6lVL_.js";
import { t as NIcon } from "./Icon-9AfBo3jH.js";
import { c as useUserInfoStore, r as useDouyuUserStore, t as useAppConfig } from "./stores-Cc_-mi5a.js";
import { n as useConfirm } from "./hooks-BIRfeUqh.js";
import { t as useNotification } from "./use-notification-BORvHMZV.js";
import { E as Modal_default, K as Button, Mn as useThemeClass, Nn as useConfig, St as useTheme, W as Card_default, Xr as c, Zr as cB, a as themeLight, i as storeToRefs } from "./index-CPQhEiaa.js";
import { a as config } from "./common-CBeNn3OB.js";
import { n as useClipboard } from "./core-DWew9NA7.js";
import { t as EllipsisHorizontalOutline_default } from "./EllipsisHorizontalOutline-DQCCMUku.js";
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/qr-code/src/qrcodegen.mjs
var qrcodegen;
(function(qrcodegen) {
	class QrCode {
		static encodeText(text, ecl) {
			const segs = qrcodegen.QrSegment.makeSegments(text);
			return QrCode.encodeSegments(segs, ecl);
		}
		static encodeBinary(data, ecl) {
			const seg = qrcodegen.QrSegment.makeBytes(data);
			return QrCode.encodeSegments([seg], ecl);
		}
		static encodeSegments(segs, ecl, minVersion = 1, maxVersion = 40, mask = -1, boostEcl = true) {
			if (!(QrCode.MIN_VERSION <= minVersion && minVersion <= maxVersion && maxVersion <= QrCode.MAX_VERSION) || mask < -1 || mask > 7) throw new RangeError("Invalid value");
			let version;
			let dataUsedBits;
			for (version = minVersion;; version++) {
				const dataCapacityBits = QrCode.getNumDataCodewords(version, ecl) * 8;
				const usedBits = QrSegment.getTotalBits(segs, version);
				if (usedBits <= dataCapacityBits) {
					dataUsedBits = usedBits;
					break;
				}
				if (version >= maxVersion) throw new RangeError("Data too long");
			}
			for (const newEcl of [
				QrCode.Ecc.MEDIUM,
				QrCode.Ecc.QUARTILE,
				QrCode.Ecc.HIGH
			]) if (boostEcl && dataUsedBits <= QrCode.getNumDataCodewords(version, newEcl) * 8) ecl = newEcl;
			const bb = [];
			for (const seg of segs) {
				appendBits(seg.mode.modeBits, 4, bb);
				appendBits(seg.numChars, seg.mode.numCharCountBits(version), bb);
				for (const b of seg.getData()) bb.push(b);
			}
			const dataCapacityBits = QrCode.getNumDataCodewords(version, ecl) * 8;
			appendBits(0, Math.min(4, dataCapacityBits - bb.length), bb);
			appendBits(0, (8 - bb.length % 8) % 8, bb);
			for (let padByte = 236; bb.length < dataCapacityBits; padByte ^= 253) appendBits(padByte, 8, bb);
			const dataCodewords = [];
			while (dataCodewords.length * 8 < bb.length) dataCodewords.push(0);
			bb.forEach((b, i) => dataCodewords[i >>> 3] |= b << 7 - (i & 7));
			return new QrCode(version, ecl, dataCodewords, mask);
		}
		constructor(version, errorCorrectionLevel, dataCodewords, msk) {
			this.version = version;
			this.errorCorrectionLevel = errorCorrectionLevel;
			this.modules = [];
			this.isFunction = [];
			if (version < QrCode.MIN_VERSION || version > QrCode.MAX_VERSION) throw new RangeError("Version value out of range");
			if (msk < -1 || msk > 7) throw new RangeError("Mask value out of range");
			this.size = version * 4 + 17;
			const row = [];
			for (let i = 0; i < this.size; i++) row.push(false);
			for (let i = 0; i < this.size; i++) {
				this.modules.push(row.slice());
				this.isFunction.push(row.slice());
			}
			this.drawFunctionPatterns();
			const allCodewords = this.addEccAndInterleave(dataCodewords);
			this.drawCodewords(allCodewords);
			if (msk === -1) {
				let minPenalty = 1e9;
				for (let i = 0; i < 8; i++) {
					this.applyMask(i);
					this.drawFormatBits(i);
					const penalty = this.getPenaltyScore();
					if (penalty < minPenalty) {
						msk = i;
						minPenalty = penalty;
					}
					this.applyMask(i);
				}
			}
			this.mask = msk;
			this.applyMask(msk);
			this.drawFormatBits(msk);
			this.isFunction = [];
		}
		getModule(x, y) {
			return x >= 0 && x < this.size && y >= 0 && y < this.size && this.modules[y][x];
		}
		getModules() {
			return this.modules;
		}
		drawFunctionPatterns() {
			for (let i = 0; i < this.size; i++) {
				this.setFunctionModule(6, i, i % 2 === 0);
				this.setFunctionModule(i, 6, i % 2 === 0);
			}
			this.drawFinderPattern(3, 3);
			this.drawFinderPattern(this.size - 4, 3);
			this.drawFinderPattern(3, this.size - 4);
			const alignPatPos = this.getAlignmentPatternPositions();
			const numAlign = alignPatPos.length;
			for (let i = 0; i < numAlign; i++) for (let j = 0; j < numAlign; j++) if (!(i === 0 && j === 0 || i === 0 && j === numAlign - 1 || i === numAlign - 1 && j === 0)) this.drawAlignmentPattern(alignPatPos[i], alignPatPos[j]);
			this.drawFormatBits(0);
			this.drawVersion();
		}
		drawFormatBits(mask) {
			const data = this.errorCorrectionLevel.formatBits << 3 | mask;
			let rem = data;
			for (let i = 0; i < 10; i++) rem = rem << 1 ^ (rem >>> 9) * 1335;
			const bits = (data << 10 | rem) ^ 21522;
			for (let i = 0; i <= 5; i++) this.setFunctionModule(8, i, getBit(bits, i));
			this.setFunctionModule(8, 7, getBit(bits, 6));
			this.setFunctionModule(8, 8, getBit(bits, 7));
			this.setFunctionModule(7, 8, getBit(bits, 8));
			for (let i = 9; i < 15; i++) this.setFunctionModule(14 - i, 8, getBit(bits, i));
			for (let i = 0; i < 8; i++) this.setFunctionModule(this.size - 1 - i, 8, getBit(bits, i));
			for (let i = 8; i < 15; i++) this.setFunctionModule(8, this.size - 15 + i, getBit(bits, i));
			this.setFunctionModule(8, this.size - 8, true);
		}
		drawVersion() {
			if (this.version < 7) return;
			let rem = this.version;
			for (let i = 0; i < 12; i++) rem = rem << 1 ^ (rem >>> 11) * 7973;
			const bits = this.version << 12 | rem;
			for (let i = 0; i < 18; i++) {
				const color = getBit(bits, i);
				const a = this.size - 11 + i % 3;
				const b = Math.floor(i / 3);
				this.setFunctionModule(a, b, color);
				this.setFunctionModule(b, a, color);
			}
		}
		drawFinderPattern(x, y) {
			for (let dy = -4; dy <= 4; dy++) for (let dx = -4; dx <= 4; dx++) {
				const dist = Math.max(Math.abs(dx), Math.abs(dy));
				const xx = x + dx;
				const yy = y + dy;
				if (xx >= 0 && xx < this.size && yy >= 0 && yy < this.size) this.setFunctionModule(xx, yy, dist !== 2 && dist !== 4);
			}
		}
		drawAlignmentPattern(x, y) {
			for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++) this.setFunctionModule(x + dx, y + dy, Math.max(Math.abs(dx), Math.abs(dy)) !== 1);
		}
		setFunctionModule(x, y, isDark) {
			this.modules[y][x] = isDark;
			this.isFunction[y][x] = true;
		}
		addEccAndInterleave(data) {
			const ver = this.version;
			const ecl = this.errorCorrectionLevel;
			if (data.length !== QrCode.getNumDataCodewords(ver, ecl)) throw new RangeError("Invalid argument");
			const numBlocks = QrCode.NUM_ERROR_CORRECTION_BLOCKS[ecl.ordinal][ver];
			const blockEccLen = QrCode.ECC_CODEWORDS_PER_BLOCK[ecl.ordinal][ver];
			const rawCodewords = Math.floor(QrCode.getNumRawDataModules(ver) / 8);
			const numShortBlocks = numBlocks - rawCodewords % numBlocks;
			const shortBlockLen = Math.floor(rawCodewords / numBlocks);
			const blocks = [];
			const rsDiv = QrCode.reedSolomonComputeDivisor(blockEccLen);
			for (let i = 0, k = 0; i < numBlocks; i++) {
				const dat = data.slice(k, k + shortBlockLen - blockEccLen + (i < numShortBlocks ? 0 : 1));
				k += dat.length;
				const ecc = QrCode.reedSolomonComputeRemainder(dat, rsDiv);
				if (i < numShortBlocks) dat.push(0);
				blocks.push(dat.concat(ecc));
			}
			const result = [];
			for (let i = 0; i < blocks[0].length; i++) blocks.forEach((block, j) => {
				if (i !== shortBlockLen - blockEccLen || j >= numShortBlocks) result.push(block[i]);
			});
			return result;
		}
		drawCodewords(data) {
			if (data.length !== Math.floor(QrCode.getNumRawDataModules(this.version) / 8)) throw new RangeError("Invalid argument");
			let i = 0;
			for (let right = this.size - 1; right >= 1; right -= 2) {
				if (right === 6) right = 5;
				for (let vert = 0; vert < this.size; vert++) for (let j = 0; j < 2; j++) {
					const x = right - j;
					const y = (right + 1 & 2) === 0 ? this.size - 1 - vert : vert;
					if (!this.isFunction[y][x] && i < data.length * 8) {
						this.modules[y][x] = getBit(data[i >>> 3], 7 - (i & 7));
						i++;
					}
				}
			}
		}
		applyMask(mask) {
			if (mask < 0 || mask > 7) throw new RangeError("Mask value out of range");
			for (let y = 0; y < this.size; y++) for (let x = 0; x < this.size; x++) {
				let invert;
				switch (mask) {
					case 0:
						invert = (x + y) % 2 === 0;
						break;
					case 1:
						invert = y % 2 === 0;
						break;
					case 2:
						invert = x % 3 === 0;
						break;
					case 3:
						invert = (x + y) % 3 === 0;
						break;
					case 4:
						invert = (Math.floor(x / 3) + Math.floor(y / 2)) % 2 === 0;
						break;
					case 5:
						invert = x * y % 2 + x * y % 3 === 0;
						break;
					case 6:
						invert = (x * y % 2 + x * y % 3) % 2 === 0;
						break;
					case 7:
						invert = ((x + y) % 2 + x * y % 3) % 2 === 0;
						break;
					default: throw new Error("Unreachable");
				}
				if (!this.isFunction[y][x] && invert) this.modules[y][x] = !this.modules[y][x];
			}
		}
		getPenaltyScore() {
			let result = 0;
			for (let y = 0; y < this.size; y++) {
				let runColor = false;
				let runX = 0;
				const runHistory = [
					0,
					0,
					0,
					0,
					0,
					0,
					0
				];
				for (let x = 0; x < this.size; x++) if (this.modules[y][x] === runColor) {
					runX++;
					if (runX === 5) result += QrCode.PENALTY_N1;
					else if (runX > 5) result++;
				} else {
					this.finderPenaltyAddHistory(runX, runHistory);
					if (!runColor) result += this.finderPenaltyCountPatterns(runHistory) * QrCode.PENALTY_N3;
					runColor = this.modules[y][x];
					runX = 1;
				}
				result += this.finderPenaltyTerminateAndCount(runColor, runX, runHistory) * QrCode.PENALTY_N3;
			}
			for (let x = 0; x < this.size; x++) {
				let runColor = false;
				let runY = 0;
				const runHistory = [
					0,
					0,
					0,
					0,
					0,
					0,
					0
				];
				for (let y = 0; y < this.size; y++) if (this.modules[y][x] === runColor) {
					runY++;
					if (runY === 5) result += QrCode.PENALTY_N1;
					else if (runY > 5) result++;
				} else {
					this.finderPenaltyAddHistory(runY, runHistory);
					if (!runColor) result += this.finderPenaltyCountPatterns(runHistory) * QrCode.PENALTY_N3;
					runColor = this.modules[y][x];
					runY = 1;
				}
				result += this.finderPenaltyTerminateAndCount(runColor, runY, runHistory) * QrCode.PENALTY_N3;
			}
			for (let y = 0; y < this.size - 1; y++) for (let x = 0; x < this.size - 1; x++) {
				const color = this.modules[y][x];
				if (color === this.modules[y][x + 1] && color === this.modules[y + 1][x] && color === this.modules[y + 1][x + 1]) result += QrCode.PENALTY_N2;
			}
			let dark = 0;
			for (const row of this.modules) dark = row.reduce((sum, color) => sum + (color ? 1 : 0), dark);
			const total = this.size * this.size;
			const k = Math.ceil(Math.abs(dark * 20 - total * 10) / total) - 1;
			result += k * QrCode.PENALTY_N4;
			return result;
		}
		getAlignmentPatternPositions() {
			if (this.version === 1) return [];
			else {
				const numAlign = Math.floor(this.version / 7) + 2;
				const step = this.version === 32 ? 26 : Math.ceil((this.version * 4 + 4) / (numAlign * 2 - 2)) * 2;
				const result = [6];
				for (let pos = this.size - 7; result.length < numAlign; pos -= step) result.splice(1, 0, pos);
				return result;
			}
		}
		static getNumRawDataModules(ver) {
			if (ver < QrCode.MIN_VERSION || ver > QrCode.MAX_VERSION) throw new RangeError("Version number out of range");
			let result = (16 * ver + 128) * ver + 64;
			if (ver >= 2) {
				const numAlign = Math.floor(ver / 7) + 2;
				result -= (25 * numAlign - 10) * numAlign - 55;
				if (ver >= 7) result -= 36;
			}
			return result;
		}
		static getNumDataCodewords(ver, ecl) {
			return Math.floor(QrCode.getNumRawDataModules(ver) / 8) - QrCode.ECC_CODEWORDS_PER_BLOCK[ecl.ordinal][ver] * QrCode.NUM_ERROR_CORRECTION_BLOCKS[ecl.ordinal][ver];
		}
		static reedSolomonComputeDivisor(degree) {
			if (degree < 1 || degree > 255) throw new RangeError("Degree out of range");
			const result = [];
			for (let i = 0; i < degree - 1; i++) result.push(0);
			result.push(1);
			let root = 1;
			for (let i = 0; i < degree; i++) {
				for (let j = 0; j < result.length; j++) {
					result[j] = QrCode.reedSolomonMultiply(result[j], root);
					if (j + 1 < result.length) result[j] ^= result[j + 1];
				}
				root = QrCode.reedSolomonMultiply(root, 2);
			}
			return result;
		}
		static reedSolomonComputeRemainder(data, divisor) {
			const result = divisor.map((_) => 0);
			for (const b of data) {
				const factor = b ^ result.shift();
				result.push(0);
				divisor.forEach((coef, i) => result[i] ^= QrCode.reedSolomonMultiply(coef, factor));
			}
			return result;
		}
		static reedSolomonMultiply(x, y) {
			if (x >>> 8 !== 0 || y >>> 8 !== 0) throw new RangeError("Byte out of range");
			let z = 0;
			for (let i = 7; i >= 0; i--) {
				z = z << 1 ^ (z >>> 7) * 285;
				z ^= (y >>> i & 1) * x;
			}
			return z;
		}
		finderPenaltyCountPatterns(runHistory) {
			const n = runHistory[1];
			const core = n > 0 && runHistory[2] === n && runHistory[3] === n * 3 && runHistory[4] === n && runHistory[5] === n;
			return (core && runHistory[0] >= n * 4 && runHistory[6] >= n ? 1 : 0) + (core && runHistory[6] >= n * 4 && runHistory[0] >= n ? 1 : 0);
		}
		finderPenaltyTerminateAndCount(currentRunColor, currentRunLength, runHistory) {
			if (currentRunColor) {
				this.finderPenaltyAddHistory(currentRunLength, runHistory);
				currentRunLength = 0;
			}
			currentRunLength += this.size;
			this.finderPenaltyAddHistory(currentRunLength, runHistory);
			return this.finderPenaltyCountPatterns(runHistory);
		}
		finderPenaltyAddHistory(currentRunLength, runHistory) {
			if (runHistory[0] === 0) currentRunLength += this.size;
			runHistory.pop();
			runHistory.unshift(currentRunLength);
		}
	}
	QrCode.MIN_VERSION = 1;
	QrCode.MAX_VERSION = 40;
	QrCode.PENALTY_N1 = 3;
	QrCode.PENALTY_N2 = 3;
	QrCode.PENALTY_N3 = 40;
	QrCode.PENALTY_N4 = 10;
	QrCode.ECC_CODEWORDS_PER_BLOCK = [
		[
			-1,
			7,
			10,
			15,
			20,
			26,
			18,
			20,
			24,
			30,
			18,
			20,
			24,
			26,
			30,
			22,
			24,
			28,
			30,
			28,
			28,
			28,
			28,
			30,
			30,
			26,
			28,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30
		],
		[
			-1,
			10,
			16,
			26,
			18,
			24,
			16,
			18,
			22,
			22,
			26,
			30,
			22,
			22,
			24,
			24,
			28,
			28,
			26,
			26,
			26,
			26,
			28,
			28,
			28,
			28,
			28,
			28,
			28,
			28,
			28,
			28,
			28,
			28,
			28,
			28,
			28,
			28,
			28,
			28,
			28
		],
		[
			-1,
			13,
			22,
			18,
			26,
			18,
			24,
			18,
			22,
			20,
			24,
			28,
			26,
			24,
			20,
			30,
			24,
			28,
			28,
			26,
			30,
			28,
			30,
			30,
			30,
			30,
			28,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30
		],
		[
			-1,
			17,
			28,
			22,
			16,
			22,
			28,
			26,
			26,
			24,
			28,
			24,
			28,
			22,
			24,
			24,
			30,
			28,
			28,
			26,
			28,
			30,
			24,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30,
			30
		]
	];
	QrCode.NUM_ERROR_CORRECTION_BLOCKS = [
		[
			-1,
			1,
			1,
			1,
			1,
			1,
			2,
			2,
			2,
			2,
			4,
			4,
			4,
			4,
			4,
			6,
			6,
			6,
			6,
			7,
			8,
			8,
			9,
			9,
			10,
			12,
			12,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			19,
			20,
			21,
			22,
			24,
			25
		],
		[
			-1,
			1,
			1,
			1,
			2,
			2,
			4,
			4,
			4,
			5,
			5,
			5,
			8,
			9,
			9,
			10,
			10,
			11,
			13,
			14,
			16,
			17,
			17,
			18,
			20,
			21,
			23,
			25,
			26,
			28,
			29,
			31,
			33,
			35,
			37,
			38,
			40,
			43,
			45,
			47,
			49
		],
		[
			-1,
			1,
			1,
			2,
			2,
			4,
			4,
			6,
			6,
			8,
			8,
			8,
			10,
			12,
			16,
			12,
			17,
			16,
			18,
			21,
			20,
			23,
			23,
			25,
			27,
			29,
			34,
			34,
			35,
			38,
			40,
			43,
			45,
			48,
			51,
			53,
			56,
			59,
			62,
			65,
			68
		],
		[
			-1,
			1,
			1,
			2,
			4,
			4,
			4,
			5,
			6,
			8,
			8,
			11,
			11,
			16,
			16,
			18,
			16,
			19,
			21,
			25,
			25,
			25,
			34,
			30,
			32,
			35,
			37,
			40,
			42,
			45,
			48,
			51,
			54,
			57,
			60,
			63,
			66,
			70,
			74,
			77,
			81
		]
	];
	qrcodegen.QrCode = QrCode;
	function appendBits(val, len, bb) {
		if (len < 0 || len > 31 || val >>> len !== 0) throw new RangeError("Value out of range");
		for (let i = len - 1; i >= 0; i--) bb.push(val >>> i & 1);
	}
	function getBit(x, i) {
		return (x >>> i & 1) !== 0;
	}
	class QrSegment {
		static makeBytes(data) {
			const bb = [];
			for (const b of data) appendBits(b, 8, bb);
			return new QrSegment(QrSegment.Mode.BYTE, data.length, bb);
		}
		static makeNumeric(digits) {
			if (!QrSegment.isNumeric(digits)) throw new RangeError("String contains non-numeric characters");
			const bb = [];
			for (let i = 0; i < digits.length;) {
				const n = Math.min(digits.length - i, 3);
				appendBits(Number.parseInt(digits.substr(i, n), 10), n * 3 + 1, bb);
				i += n;
			}
			return new QrSegment(QrSegment.Mode.NUMERIC, digits.length, bb);
		}
		static makeAlphanumeric(text) {
			if (!QrSegment.isAlphanumeric(text)) throw new RangeError("String contains unencodable characters in alphanumeric mode");
			const bb = [];
			let i = 0;
			for (; i + 2 <= text.length; i += 2) {
				let temp = QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i)) * 45;
				temp += QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i + 1));
				appendBits(temp, 11, bb);
			}
			if (i < text.length) appendBits(QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i)), 6, bb);
			return new QrSegment(QrSegment.Mode.ALPHANUMERIC, text.length, bb);
		}
		static makeSegments(text) {
			if (text === "") return [];
			else if (QrSegment.isNumeric(text)) return [QrSegment.makeNumeric(text)];
			else if (QrSegment.isAlphanumeric(text)) return [QrSegment.makeAlphanumeric(text)];
			else return [QrSegment.makeBytes(QrSegment.toUtf8ByteArray(text))];
		}
		static makeEci(assignVal) {
			const bb = [];
			if (assignVal < 0) throw new RangeError("ECI assignment value out of range");
			else if (assignVal < 128) appendBits(assignVal, 8, bb);
			else if (assignVal < 16384) {
				appendBits(2, 2, bb);
				appendBits(assignVal, 14, bb);
			} else if (assignVal < 1e6) {
				appendBits(6, 3, bb);
				appendBits(assignVal, 21, bb);
			} else throw new RangeError("ECI assignment value out of range");
			return new QrSegment(QrSegment.Mode.ECI, 0, bb);
		}
		static isNumeric(text) {
			return QrSegment.NUMERIC_REGEX.test(text);
		}
		static isAlphanumeric(text) {
			return QrSegment.ALPHANUMERIC_REGEX.test(text);
		}
		constructor(mode, numChars, bitData) {
			this.mode = mode;
			this.numChars = numChars;
			this.bitData = bitData;
			if (numChars < 0) throw new RangeError("Invalid argument");
			this.bitData = bitData.slice();
		}
		getData() {
			return this.bitData.slice();
		}
		static getTotalBits(segs, version) {
			let result = 0;
			for (const seg of segs) {
				const ccbits = seg.mode.numCharCountBits(version);
				if (seg.numChars >= 1 << ccbits) return Infinity;
				result += 4 + ccbits + seg.bitData.length;
			}
			return result;
		}
		static toUtf8ByteArray(str) {
			str = encodeURI(str);
			const result = [];
			for (let i = 0; i < str.length; i++) if (str.charAt(i) !== "%") result.push(str.charCodeAt(i));
			else {
				result.push(Number.parseInt(str.substr(i + 1, 2), 16));
				i += 2;
			}
			return result;
		}
	}
	QrSegment.NUMERIC_REGEX = /^[0-9]*$/;
	QrSegment.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+./:-]*$/;
	QrSegment.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
	qrcodegen.QrSegment = QrSegment;
})(qrcodegen || (qrcodegen = {}));
(function(qrcodegen) {
	(function(QrCode) {
		class Ecc {
			constructor(ordinal, formatBits) {
				this.ordinal = ordinal;
				this.formatBits = formatBits;
			}
		}
		Ecc.LOW = new Ecc(0, 1);
		Ecc.MEDIUM = new Ecc(1, 0);
		Ecc.QUARTILE = new Ecc(2, 3);
		Ecc.HIGH = new Ecc(3, 2);
		QrCode.Ecc = Ecc;
	})(qrcodegen.QrCode || (qrcodegen.QrCode = {}));
})(qrcodegen || (qrcodegen = {}));
(function(qrcodegen) {
	(function(QrSegment) {
		class Mode {
			constructor(modeBits, numBitsCharCount) {
				this.modeBits = modeBits;
				this.numBitsCharCount = numBitsCharCount;
			}
			numCharCountBits(ver) {
				return this.numBitsCharCount[Math.floor((ver + 7) / 17)];
			}
		}
		Mode.NUMERIC = new Mode(1, [
			10,
			12,
			14
		]);
		Mode.ALPHANUMERIC = new Mode(2, [
			9,
			11,
			13
		]);
		Mode.BYTE = new Mode(4, [
			8,
			16,
			16
		]);
		Mode.KANJI = new Mode(8, [
			8,
			10,
			12
		]);
		Mode.ECI = new Mode(7, [
			0,
			0,
			0
		]);
		QrSegment.Mode = Mode;
	})(qrcodegen.QrSegment || (qrcodegen.QrSegment = {}));
})(qrcodegen || (qrcodegen = {}));
var qrcodegen_default = qrcodegen;
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/qr-code/src/styles/index.cssr.mjs
var index_cssr_default = c([cB("qr-code", `
 background: #fff;
 border-radius: var(--n-border-radius);
 display: inline-flex;
 `)]);
//#endregion
//#region ../../node_modules/.pnpm/naive-ui@2.44.1_vue@3.5.13_typescript-native-bridge@6.0.3-bridge.15.tsgo.7.0.2_/node_modules/naive-ui/es/qr-code/src/QrCode.mjs
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
var ERROR_CORRECTION_LEVEL = {
	L: qrcodegen_default.QrCode.Ecc.LOW,
	M: qrcodegen_default.QrCode.Ecc.MEDIUM,
	Q: qrcodegen_default.QrCode.Ecc.QUARTILE,
	H: qrcodegen_default.QrCode.Ecc.HIGH
};
var qrCodeProps = Object.assign(Object.assign({}, useTheme.props), {
	value: String,
	color: {
		type: String,
		default: "#000"
	},
	backgroundColor: {
		type: String,
		default: "#FFF"
	},
	iconSrc: String,
	iconSize: {
		type: Number,
		default: 40
	},
	iconBackgroundColor: {
		type: String,
		default: "#FFF"
	},
	iconBorderRadius: {
		type: Number,
		default: 4
	},
	size: {
		type: Number,
		default: 100
	},
	padding: {
		type: [Number, String],
		default: 12
	},
	errorCorrectionLevel: {
		type: String,
		default: "M"
	},
	type: {
		type: String,
		default: "canvas"
	}
});
var UPSCALE_RATIO = 2;
var QrCode_default = defineComponent({
	name: "QrCode",
	props: qrCodeProps,
	setup(props) {
		const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
		const themeRef = useTheme("QrCode", "-qr-code", index_cssr_default, themeLight, props, mergedClsPrefixRef);
		const cssVarsRef = computed(() => {
			return { "--n-border-radius": themeRef.value.self.borderRadius };
		});
		const themeClassHandle = inlineThemeDisabled ? useThemeClass("qr-code", void 0, cssVarsRef, props) : void 0;
		const canvasRef = ref();
		const qr = computed(() => {
			var _a;
			const errorCorrectionLevel = ERROR_CORRECTION_LEVEL[props.errorCorrectionLevel];
			return qrcodegen_default.QrCode.encodeText((_a = props.value) !== null && _a !== void 0 ? _a : "-", errorCorrectionLevel);
		});
		onMounted(() => {
			const imageLoadedTrigger = ref(0);
			let loadedIcon = null;
			watchEffect(() => {
				if (props.type === "svg") return;
				imageLoadedTrigger.value;
				drawCanvas(qr.value, props.size, props.color, props.backgroundColor, loadedIcon ? {
					icon: loadedIcon,
					iconBorderRadius: props.iconBorderRadius,
					iconSize: props.iconSize,
					iconBackgroundColor: props.iconBackgroundColor
				} : null);
			});
			watchEffect(() => {
				if (props.type === "svg") return;
				const { iconSrc } = props;
				if (iconSrc) {
					let aborted = false;
					const img = new Image();
					img.src = iconSrc;
					img.onload = () => {
						if (aborted) return;
						loadedIcon = img;
						imageLoadedTrigger.value++;
					};
					return () => {
						aborted = true;
					};
				}
			});
		});
		function drawCanvas(qr, size, foregroundColor, backgroundColor, iconConfig) {
			const canvas = canvasRef.value;
			if (!canvas) return;
			const canvasWidth = size * UPSCALE_RATIO;
			const scale = canvasWidth / qr.size;
			canvas.width = canvasWidth;
			canvas.height = canvasWidth;
			const ctx = canvas.getContext("2d");
			if (!ctx) return;
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			for (let y = 0; y < qr.size; y++) for (let x = 0; x < qr.size; x++) {
				ctx.fillStyle = qr.getModule(x, y) ? foregroundColor : backgroundColor;
				const startX = Math.floor(x * scale);
				const endX = Math.ceil((x + 1) * scale);
				const startY = Math.floor(y * scale);
				const endY = Math.ceil((y + 1) * scale);
				ctx.fillRect(startX, startY, endX - startX, endY - startY);
			}
			if (iconConfig) {
				const { icon, iconBackgroundColor, iconBorderRadius, iconSize } = iconConfig;
				const finalIconSize = iconSize * UPSCALE_RATIO;
				const centerX = (canvas.width - finalIconSize) / 2;
				const centerY = (canvas.height - finalIconSize) / 2;
				ctx.fillStyle = iconBackgroundColor;
				ctx.beginPath();
				ctx.roundRect(centerX, centerY, finalIconSize, finalIconSize, iconBorderRadius * UPSCALE_RATIO);
				ctx.fill();
				const aspectRatio = icon.width / icon.height;
				const scaledWidth = aspectRatio >= 1 ? finalIconSize : finalIconSize * aspectRatio;
				const scaledHeight = aspectRatio <= 1 ? finalIconSize : finalIconSize / aspectRatio;
				const left = centerX + (finalIconSize - scaledWidth) / 2;
				const top = centerY + (finalIconSize - scaledHeight) / 2;
				ctx.drawImage(icon, left, top, scaledWidth, scaledHeight);
			}
		}
		function generatePath(modules, margin = 0) {
			const ops = [];
			modules.forEach((row, y) => {
				let start = null;
				row.forEach((cell, x) => {
					if (!cell && start !== null) {
						ops.push(`M${start + margin} ${y + margin}h${x - start}v1H${start + margin}z`);
						start = null;
						return;
					}
					if (x === row.length - 1) {
						if (!cell) return;
						if (start === null) ops.push(`M${x + margin},${y + margin} h1v1H${x + margin}z`);
						else ops.push(`M${start + margin},${y + margin} h${x + 1 - start}v1H${start + margin}z`);
						return;
					}
					if (cell && start === null) start = x;
				});
			});
			return ops.join("");
		}
		function svgInfo(qr, size, iconConfig) {
			const cells = qr.getModules();
			const numCells = cells.length;
			const cellsToDraw = cells;
			let svgInnerHtml = "";
			const path1Html = `<path fill="transparent" d="M0,0 h${numCells}v${numCells}H0z" shape-rendering="crispEdges"></path>`;
			const path2Html = `<path fill="${props.color}" d="${generatePath(cellsToDraw, 0)}" shape-rendering="crispEdges"></path>`;
			let iconHtml = "";
			if (iconConfig) {
				const { iconSrc, iconSize } = iconConfig;
				const defaultSize = Math.floor(size * .1);
				const scale = numCells / size;
				const h = (iconSize || defaultSize) * scale;
				const w = (iconSize || defaultSize) * scale;
				const x = cells.length / 2 - w / 2;
				const y = cells.length / 2 - h / 2;
				iconHtml += `<image href="${iconSrc}" width="${w}" height="${h}" x="${x}" y="${y}" preserveAspectRatio="none"></image>`;
			}
			svgInnerHtml += path1Html;
			svgInnerHtml += path2Html;
			svgInnerHtml += iconHtml;
			return {
				innerHtml: svgInnerHtml,
				numCells
			};
		}
		const svgInfoRef = computed(() => svgInfo(qr.value, props.size, props.iconSrc ? {
			iconSrc: props.iconSrc,
			iconBorderRadius: props.iconBorderRadius,
			iconSize: props.iconSize,
			iconBackgroundColor: props.iconBackgroundColor
		} : null));
		return {
			canvasRef,
			mergedClsPrefix: mergedClsPrefixRef,
			cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
			themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
			svgInfo: svgInfoRef
		};
	},
	render() {
		const { mergedClsPrefix, backgroundColor, padding, cssVars, themeClass, size, type } = this;
		return h("div", {
			class: [`${mergedClsPrefix}-qr-code`, themeClass],
			style: Object.assign({
				padding: typeof padding === "number" ? `${padding}px` : padding,
				backgroundColor,
				width: `${size}px`,
				height: `${size}px`
			}, cssVars)
		}, type === "canvas" ? h("canvas", {
			ref: "canvasRef",
			style: {
				width: `${size}px`,
				height: `${size}px`
			}
		}) : h("svg", {
			height: size,
			width: size,
			viewBox: `0 0 ${this.svgInfo.numCells} ${this.svgInfo.numCells}`,
			role: "img",
			innerHTML: this.svgInfo.innerHtml
		}));
	}
});
//#endregion
//#region src/renderer/src/pages/User/components/BiliLoginDialog.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1$2 = { style: { "text-align": "center" } };
var _hoisted_2$2 = { class: "footer" };
//#endregion
//#region src/renderer/src/pages/User/components/BiliLoginDialog.vue
var BiliLoginDialog_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "BiliLoginDialog",
	props: {
		"modelValue": {
			type: Boolean,
			required: true,
			default: false
		},
		"modelModifiers": {}
	},
	emits: /*@__PURE__*/ mergeModels(["close", "confirm"], ["update:modelValue"]),
	setup(__props, { emit: __emit }) {
		const showModal = useModel(__props, "modelValue");
		const emits = __emit;
		const notice = useNotification();
		const url = ref("");
		const id = ref("");
		const text = ref("");
		const uid = ref();
		const interval = ref(null);
		const clearLoginInterval = () => {
			if (interval.value !== null) {
				clearInterval(interval.value);
				interval.value = null;
			}
		};
		const onOpen = async () => {
			text.value = "";
			uid.value = void 0;
			const res = await bili.qrcode();
			url.value = res.url;
			id.value = res.id;
			interval.value = setInterval(async () => {
				const res = await bili.loginPoll(id.value);
				console.log(res);
				if (res.status === "completed") {
					clearLoginInterval();
					uid.value = res.uid;
					text.value = "登录成功，请关闭本窗口";
					notice.success({
						title: "登录成功",
						duration: 1e3
					});
					confirm();
				} else if (res.status === "error") {
					clearLoginInterval();
					notice.error({
						title: "登录失败",
						description: res.failReason
					});
					text.value = res.failReason;
				}
			}, 2e3);
		};
		const close = () => {
			showModal.value = false;
		};
		const confirm = () => {
			showModal.value = false;
			emits("confirm", uid.value);
		};
		watch(() => showModal.value, () => {
			if (showModal.value) onOpen();
			else {
				clearLoginInterval();
				bili.loginCancel(id.value);
				emits("close");
			}
		});
		return (_ctx, _cache) => {
			const _component_n_qr_code = QrCode_default;
			const _component_n_button = Button;
			const _component_n_card = Card_default;
			const _component_n_modal = Modal_default;
			return openBlock(), createBlock(_component_n_modal, {
				show: showModal.value,
				"onUpdate:show": _cache[0] || (_cache[0] = ($event) => showModal.value = $event),
				"mask-closable": false,
				"auto-focus": ""
			}, {
				default: withCtx(() => [createVNode(_component_n_card, {
					style: { "width": "calc(100% - 60px)" },
					bordered: false,
					size: "huge",
					role: "dialog",
					"aria-modal": "true",
					class: "card"
				}, {
					footer: withCtx(() => [createBaseVNode("div", _hoisted_2$2, [createVNode(_component_n_button, {
						class: "btn",
						onClick: close
					}, {
						default: withCtx(() => _cache[2] || (_cache[2] = [createTextVNode("取消")])),
						_: 1
					}), createVNode(_component_n_button, {
						type: "primary",
						class: "btn",
						onClick: confirm
					}, {
						default: withCtx(() => _cache[3] || (_cache[3] = [createTextVNode(" 确认 ")])),
						_: 1
					})])]),
					default: withCtx(() => [createBaseVNode("div", _hoisted_1$2, [
						createBaseVNode("h2", null, toDisplayString(unref(text)), 1),
						_cache[1] || (_cache[1] = createBaseVNode("h2", null, [createTextVNode("使用b站app扫码完成登录"), createBaseVNode("br")], -1)),
						unref(url) ? (openBlock(), createBlock(_component_n_qr_code, {
							key: 0,
							value: unref(url),
							color: "#409eff",
							"background-color": "#F5F5F5",
							size: 250
						}, null, 8, ["value"])) : createCommentVNode("", true)
					])]),
					_: 1
				})]),
				_: 1
			}, 8, ["show"]);
		};
	}
}), [["__scopeId", "data-v-3d452bc5"]]);
//#endregion
//#region src/renderer/src/pages/User/components/DouyuLoginDialog.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1$1 = { class: "content" };
var _hoisted_2$1 = { class: "footer" };
//#endregion
//#region src/renderer/src/pages/User/components/DouyuLoginDialog.vue
var DouyuLoginDialog_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "DouyuLoginDialog",
	props: {
		"modelValue": {
			type: Boolean,
			required: true,
			default: false
		},
		"modelModifiers": {}
	},
	emits: /*@__PURE__*/ mergeModels(["confirm", "close"], ["update:modelValue"]),
	setup(__props, { emit: __emit }) {
		const showModal = useModel(__props, "modelValue");
		const emits = __emit;
		const notice = useNotification();
		const url = ref("");
		const id = ref("");
		const text = ref("");
		let timer;
		let completed = false;
		const clearTimer = () => {
			if (timer !== void 0) window.clearTimeout(timer);
			timer = void 0;
		};
		const poll = async () => {
			if (!showModal.value || !id.value) return;
			try {
				const result = await douyu_default.loginPoll(id.value);
				if (result.status === "completed") {
					completed = true;
					notice.success({
						title: "斗鱼登录成功",
						duration: 1e3
					});
					showModal.value = false;
					emits("confirm", result.uid);
					return;
				}
				if (result.status === "error") {
					text.value = result.failReason || "登录失败";
					notice.error({
						title: "斗鱼登录失败",
						description: text.value
					});
					return;
				}
				timer = window.setTimeout(poll, 2e3);
			} catch (error) {
				text.value = error instanceof Error ? error.message : "登录失败";
			}
		};
		const onOpen = async () => {
			completed = false;
			url.value = "";
			id.value = "";
			text.value = "正在获取二维码…";
			try {
				const result = await douyu_default.qrcode();
				if (!showModal.value) return;
				id.value = result.id;
				url.value = result.url;
				text.value = "使用斗鱼 App 扫码登录";
				timer = window.setTimeout(poll, 1e3);
			} catch (error) {
				text.value = error instanceof Error ? error.message : "获取二维码失败";
			}
		};
		const close = () => {
			showModal.value = false;
		};
		watch(showModal, async (visible) => {
			if (visible) await onOpen();
			else {
				clearTimer();
				if (!completed && id.value) await douyu_default.loginCancel(id.value).catch(() => void 0);
				emits("close");
			}
		});
		onBeforeUnmount(clearTimer);
		return (_ctx, _cache) => {
			const _component_n_qr_code = QrCode_default;
			const _component_n_button = Button;
			const _component_n_card = Card_default;
			const _component_n_modal = Modal_default;
			return openBlock(), createBlock(_component_n_modal, {
				show: showModal.value,
				"onUpdate:show": _cache[0] || (_cache[0] = ($event) => showModal.value = $event),
				"mask-closable": false,
				"auto-focus": ""
			}, {
				default: withCtx(() => [createVNode(_component_n_card, {
					style: {
						"width": "calc(100% - 60px)",
						"max-width": "520px"
					},
					bordered: false,
					size: "huge",
					role: "dialog",
					"aria-modal": "true"
				}, {
					footer: withCtx(() => [createBaseVNode("div", _hoisted_2$1, [createVNode(_component_n_button, { onClick: close }, {
						default: withCtx(() => _cache[1] || (_cache[1] = [createTextVNode("取消")])),
						_: 1
					})])]),
					default: withCtx(() => [createBaseVNode("div", _hoisted_1$1, [createBaseVNode("h2", null, toDisplayString(unref(text) || "使用斗鱼 App 扫码登录"), 1), unref(url) ? (openBlock(), createBlock(_component_n_qr_code, {
						key: 0,
						value: unref(url),
						color: "#ff6a2a",
						"background-color": "#fff",
						size: 250
					}, null, 8, ["value"])) : createCommentVNode("", true)])]),
					_: 1
				})]),
				_: 1
			}, 8, ["show"]);
		};
	}
}), [["__scopeId", "data-v-cdd1eacd"]]);
//#endregion
//#region src/renderer/src/pages/User/index.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1 = { class: "user-info" };
var _hoisted_2 = { class: "login-btns" };
var _hoisted_3 = { class: "container" };
var _hoisted_4 = {
	key: 0,
	class: "expires"
};
var _hoisted_5 = { class: "username" };
var _hoisted_6 = ["src"];
var _hoisted_7 = { style: { "padding": "5px 10px" } };
var _hoisted_8 = ["onClick"];
var _hoisted_9 = ["onClick"];
var _hoisted_10 = ["onClick"];
var _hoisted_11 = ["onClick"];
var _hoisted_12 = ["onClick"];
var _hoisted_13 = ["onClick"];
var _hoisted_14 = { class: "user-info" };
var _hoisted_15 = { class: "login-btns" };
var _hoisted_16 = { class: "container" };
var _hoisted_17 = { class: "username" };
var _hoisted_18 = ["src"];
var _hoisted_19 = {
	key: 1,
	class: "face-placeholder"
};
var _hoisted_20 = { style: { "padding": "5px 10px" } };
var _hoisted_21 = ["onClick"];
var _hoisted_22 = ["onClick"];
var _hoisted_23 = ["onClick"];
var DOUYU_VALID_DAYS = 60;
var DAY_MS = 864e5;
//#endregion
//#region src/renderer/src/pages/User/index.vue
var User_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	name: "User",
	__name: "index",
	setup(__props) {
		const route = useRoute();
		const router = useRouter();
		const activeTab = computed({
			get: () => route.query.tab === "douyu" ? "douyu" : "bilibili",
			set: (tab) => {
				router.replace({ query: {
					...route.query,
					tab
				} });
			}
		});
		const { getUsers, changeUser } = useUserInfoStore();
		const { appConfig } = storeToRefs(useAppConfig());
		const { set: setAppConfig } = useAppConfig();
		const { userInfo, userList } = storeToRefs(useUserInfoStore());
		const notice = useNotification();
		const { userList: douyuUserList } = storeToRefs(useDouyuUserStore());
		const { getUsers: getDouyuUsers } = useDouyuUserStore();
		const douyuLoginVisible = ref(false);
		const currentTime = ref(Date.now());
		let expiryTimer;
		const douyuRemainingDays = (createdAt) => {
			if (!Number.isFinite(createdAt) || createdAt <= 0) return void 0;
			return Math.max(0, Math.ceil((createdAt + DOUYU_VALID_DAYS * DAY_MS - currentTime.value) / DAY_MS));
		};
		const douyuExpiryText = (createdAt) => {
			const remaining = douyuRemainingDays(createdAt);
			return remaining === void 0 ? "有效期未知" : `剩余 ${remaining} / ${DOUYU_VALID_DAYS} 天`;
		};
		onMounted(() => {
			expiryTimer = setInterval(() => {
				currentTime.value = Date.now();
			}, 6e4);
		});
		onUnmounted(() => {
			if (expiryTimer) clearInterval(expiryTimer);
		});
		const loginTvDialogVisible = ref(false);
		const login = async () => {
			const [status] = await confirm.warning({
				content: [
					"程序请求与浏览器内正常使用所发送的请求不完全一致，能通过分析请求日志识别出来。",
					"软件开发者不对账号发生的任何事情负责，包括并不限于被标记为机器人账号、无法参与各种抽奖和活动等。",
					"如您知晓您的账号会因以上所列出来的部分原因所导致无法使用或权益受损等情况，并愿意承担由此所会带来的一系列后果，请继续以下的操作，软件开发者不会对您账号所发生的任何后果承担责任。"
				].filter(Boolean).join("\n"),
				positiveText: "继续登录",
				negativeText: "取消"
			});
			if (!status) return;
			loginTvDialogVisible.value = true;
		};
		const confirm = useConfirm();
		const douyuLogin = async () => {
			const [status] = await confirm.warning({
				title: "斗鱼登录提示",
				content: ["Cookie 会用于斗鱼录制相关请求，建议使用小号。", "程序请求与浏览器正常使用的请求不完全一致，继续即表示你了解并愿意承担账号风险。"].join("\n"),
				positiveText: "继续登录",
				negativeText: "取消"
			});
			if (status) douyuLoginVisible.value = true;
		};
		const configureGlobalRecorderAccount = async (platform, uid) => {
			const platformName = platform === "bilibili" ? "B站" : "斗鱼";
			try {
				if ((await config.get()).recorder[platform].uid) return;
				const [status] = await confirm.warning({
					title: `配置${platformName}全局录制账号`,
					content: `尚未配置${platformName}全局录制账号，需要配置后才能使用登录账号录制。是否将本次登录的账号设为全局录制账号？`,
					positiveText: "立即配置",
					negativeText: "稍后配置"
				});
				if (!status) return;
				const latestConfig = await config.get();
				if (latestConfig.recorder[platform].uid) return;
				await setAppConfig("recorder", {
					...latestConfig.recorder,
					[platform]: {
						...latestConfig.recorder[platform],
						uid
					}
				});
				notice.success({
					title: `${platformName}全局录制账号已配置`,
					duration: 2e3
				});
			} catch (error) {
				notice.error({
					title: `${platformName}全局录制账号配置失败`,
					description: error instanceof Error ? error.message : String(error)
				});
			}
		};
		const douyuLoginConfirm = async (uid) => {
			await getDouyuUsers();
			await configureGlobalRecorderAccount("douyu", uid);
		};
		const douyuUpdateAuth = async (uid) => {
			await douyu_default.updateAuth(uid);
			notice.success({
				title: "已更新授权",
				duration: 1e3
			});
			await getDouyuUsers();
		};
		const douyuValidate = async (uid) => {
			const { valid } = await douyu_default.validate(uid);
			if (valid) notice.success({
				title: "Cookie 有效",
				duration: 2e3
			});
			else notice.warning({
				title: "Cookie 已失效",
				duration: 3e3
			});
		};
		const douyuLogout = async (uid) => {
			const [status] = await confirm.warning({ content: "确认退出该斗鱼账号？" });
			if (!status) return;
			await douyu_default.deleteUser(uid);
			await getDouyuUsers();
		};
		const logout = async (uid) => {
			if ([appConfig.value.webhook.uid, ...Object.values(appConfig.value.webhook.rooms).map((item) => item.uid)].includes(uid)) {
				const [status] = await confirm.warning({ content: "当前帐号正在被webhook使用，是否确认退出？" });
				if (!status) return;
			} else {
				const [status] = await confirm.warning({ content: "确认退出账号？" });
				if (!status) return;
			}
			await userApi.delete(uid);
			await getUsers();
			if (uid === userInfo.value.uid) changeAccount(userList.value[0]?.uid);
		};
		const changeAccount = async (uid) => {
			changeUser(uid);
		};
		const loginConfirm = async (uid) => {
			await getUsers();
			if (!userInfo.value.uid) changeAccount(userList.value[0]?.uid ?? "");
			if (uid) await configureGlobalRecorderAccount("bilibili", uid);
		};
		const updateAccountInfo = async (uid) => {
			await userApi.refresh(uid);
			notice.success({
				title: "已获取最新数据",
				duration: 1e3
			});
			getUsers();
		};
		const updateAuth = async (uid) => {
			if ((await task.list({ type: "bili" })).list.filter((item) => item.status === "running").length) {
				const [status] = await confirm.warning({ content: "当前有正在上传的任务，更新后可能会失败，是否确认更新？" });
				if (!status) return;
			}
			await userApi.updateAuth(uid);
			notice.success({
				title: "已更新授权",
				duration: 1e3
			});
			getUsers();
		};
		const { copy } = useClipboard({ legacy: true });
		const allImportInput = ref(null);
		const showBiliKeyBlockedNotice = (reason) => {
			if (reason === "missing") {
				notice.error({
					title: "未配置 BILILIVE_TOOLS_BILIKEY，当前操作已拦截",
					duration: 1600
				});
				return;
			}
			if (reason === "mismatch") {
				notice.error({
					title: "密钥错误，当前操作已拦截",
					duration: 1600
				});
				return;
			}
			if (reason === "error") {
				notice.error({
					title: "校验服务异常，当前操作已拦截",
					duration: 1600
				});
				return;
			}
			notice.warning({
				title: "已取消校验，当前操作已拦截",
				duration: 1200
			});
		};
		const downloadJSON = async (name, data) => {
			const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json;charset=utf-8" });
			const url = URL.createObjectURL(blob);
			const link = document.createElement("a");
			link.href = url;
			link.download = name;
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
			URL.revokeObjectURL(url);
			return true;
		};
		const readJSONFile = async (file) => {
			const text = await file.text();
			return JSON.parse(text);
		};
		const isBiliUser = (value) => {
			if (!value || typeof value !== "object") return false;
			const user = value;
			return typeof user.mid === "number" && typeof user.accessToken === "string" && typeof user.refreshToken === "string" && !!user.cookie && typeof user.cookie === "object";
		};
		const exportCurrentAccount = async (uid) => {
			if (!await verifyBiliKey({ onBlocked: showBiliKeyBlockedNotice })) return;
			const user = await userApi.exportSingle(uid);
			if (!await downloadJSON(`bili-user-${uid}.json`, user)) return;
			notice.success({
				title: "导出成功",
				duration: 1200
			});
		};
		const exportAllAccounts = async () => {
			if (!await verifyBiliKey({ onBlocked: showBiliKeyBlockedNotice })) return;
			const users = await userApi.exportAll();
			if (!await downloadJSON("bili-users-all.json", users)) return;
			notice.success({
				title: "导出成功",
				duration: 1200
			});
		};
		const triggerImportAll = () => {
			allImportInput.value?.click();
		};
		const onImportAllFileChange = async (event) => {
			const input = event.target;
			const file = input.files?.[0];
			if (!file) return;
			try {
				const payload = await readJSONFile(file);
				if (Array.isArray(payload)) {
					if (!payload.every(isBiliUser)) throw new Error("invalid user list payload");
					await userApi.importAll(payload);
				} else if (isBiliUser(payload)) await userApi.importSingle(payload);
				else throw new Error("invalid user payload");
				await getUsers();
				notice.success({
					title: "导入成功",
					duration: 1200
				});
			} catch {
				notice.error({
					title: "导入失败，文件格式错误",
					duration: 1600
				});
			} finally {
				input.value = "";
			}
		};
		const getCookie = async (uid) => {
			if (!await verifyBiliKey({ onBlocked: showBiliKeyBlockedNotice })) return;
			const cookie = await userApi.getCookie(uid);
			await copy(cookie);
			notice.success({
				title: "已复制到剪切板",
				duration: 1e3
			});
		};
		onActivated(() => {
			currentTime.value = Date.now();
			getUsers();
			getDouyuUsers();
		});
		return (_ctx, _cache) => {
			const _component_n_button = Button;
			const _component_n_icon = NIcon;
			const _component_n_popover = Popover_default;
			const _component_n_tab_pane = TabPane_default;
			const _component_n_tabs = Tabs_default;
			return openBlock(), createElementBlock("div", null, [createVNode(_component_n_tabs, {
				value: unref(activeTab),
				"onUpdate:value": _cache[2] || (_cache[2] = ($event) => isRef(activeTab) ? activeTab.value = $event : null),
				type: "segment"
			}, {
				default: withCtx(() => [createVNode(_component_n_tab_pane, {
					name: "bilibili",
					tab: "B站"
				}, {
					default: withCtx(() => [
						createBaseVNode("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [
							createVNode(_component_n_button, {
								type: "primary",
								onClick: login
							}, {
								default: withCtx(() => _cache[3] || (_cache[3] = [createTextVNode("登录账号")])),
								_: 1
							}),
							createVNode(_component_n_button, { onClick: exportAllAccounts }, {
								default: withCtx(() => _cache[4] || (_cache[4] = [createTextVNode("导出用户")])),
								_: 1
							}),
							createVNode(_component_n_button, { onClick: triggerImportAll }, {
								default: withCtx(() => _cache[5] || (_cache[5] = [createTextVNode("导入用户")])),
								_: 1
							}),
							createBaseVNode("input", {
								ref_key: "allImportInput",
								ref: allImportInput,
								type: "file",
								accept: "application/json",
								style: { "display": "none" },
								onChange: onImportAllFileChange
							}, null, 544)
						])]),
						createBaseVNode("div", _hoisted_3, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(userList), (item) => {
							return openBlock(), createElementBlock("div", {
								key: item.uid,
								class: normalizeClass(["card", { active: item.uid === unref(userInfo).uid }])
							}, [
								item.expiresText ? (openBlock(), createElementBlock("div", _hoisted_4, toDisplayString(item.expiresText), 1)) : createCommentVNode("", true),
								createBaseVNode("span", _hoisted_5, toDisplayString(item.name), 1),
								createBaseVNode("img", {
									src: item.face,
									alt: "",
									referrerpolicy: "no-referrer",
									class: "face"
								}, null, 8, _hoisted_6),
								createVNode(_component_n_popover, {
									placement: "right-start",
									trigger: "hover"
								}, {
									trigger: withCtx(() => [createVNode(_component_n_icon, {
										size: "25",
										class: "pointer menu"
									}, {
										default: withCtx(() => [createVNode(unref(EllipsisHorizontalOutline_default))]),
										_: 1
									})]),
									default: withCtx(() => [
										createBaseVNode("div", _hoisted_7, "uid: " + toDisplayString(item.uid), 1),
										item.uid !== unref(userInfo).uid ? (openBlock(), createElementBlock("div", {
											key: 0,
											class: "section",
											onClick: ($event) => changeAccount(item.uid)
										}, " 使用 ", 8, _hoisted_8)) : createCommentVNode("", true),
										createBaseVNode("div", {
											class: "section",
											onClick: ($event) => updateAccountInfo(item.uid)
										}, "刷新信息", 8, _hoisted_9),
										createBaseVNode("div", {
											class: "section",
											onClick: ($event) => updateAuth(item.uid)
										}, "更新授权", 8, _hoisted_10),
										createBaseVNode("div", {
											class: "section",
											onClick: ($event) => getCookie(item.uid)
										}, "复制cookie", 8, _hoisted_11),
										createBaseVNode("div", {
											class: "section",
											onClick: ($event) => exportCurrentAccount(item.uid)
										}, "导出", 8, _hoisted_12),
										createBaseVNode("div", {
											class: "section section-danger",
											onClick: ($event) => logout(item.uid)
										}, "退出账号", 8, _hoisted_13)
									]),
									_: 2
								}, 1024)
							], 2);
						}), 128))]),
						createVNode(BiliLoginDialog_default, {
							modelValue: unref(loginTvDialogVisible),
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(loginTvDialogVisible) ? loginTvDialogVisible.value = $event : null),
							onConfirm: loginConfirm
						}, null, 8, ["modelValue"])
					]),
					_: 1
				}), createVNode(_component_n_tab_pane, {
					name: "douyu",
					tab: "斗鱼"
				}, {
					default: withCtx(() => [
						createBaseVNode("div", _hoisted_14, [createBaseVNode("div", _hoisted_15, [createVNode(_component_n_button, {
							type: "primary",
							onClick: douyuLogin
						}, {
							default: withCtx(() => _cache[6] || (_cache[6] = [createTextVNode("登录账号")])),
							_: 1
						})])]),
						createBaseVNode("div", _hoisted_16, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(douyuUserList), (item) => {
							return openBlock(), createElementBlock("div", {
								key: item.uid,
								class: "card douyu-card"
							}, [
								createBaseVNode("div", { class: normalizeClass(["expires", { expired: douyuRemainingDays(item.createdAt) === 0 }]) }, toDisplayString(douyuExpiryText(item.createdAt)), 3),
								createBaseVNode("span", _hoisted_17, toDisplayString(item.name), 1),
								item.avatar ? (openBlock(), createElementBlock("img", {
									key: 0,
									src: item.avatar,
									alt: "",
									referrerpolicy: "no-referrer",
									class: "face"
								}, null, 8, _hoisted_18)) : (openBlock(), createElementBlock("div", _hoisted_19, toDisplayString(item.uid), 1)),
								createVNode(_component_n_popover, {
									placement: "right-start",
									trigger: "hover"
								}, {
									trigger: withCtx(() => [createVNode(_component_n_icon, {
										size: "25",
										class: "pointer menu"
									}, {
										default: withCtx(() => [createVNode(unref(EllipsisHorizontalOutline_default))]),
										_: 1
									})]),
									default: withCtx(() => [
										createBaseVNode("div", _hoisted_20, "uid: " + toDisplayString(item.uid), 1),
										createBaseVNode("div", {
											class: "section",
											onClick: ($event) => douyuValidate(item.uid)
										}, "校验有效性", 8, _hoisted_21),
										createBaseVNode("div", {
											class: "section",
											onClick: ($event) => douyuUpdateAuth(item.uid)
										}, "更新授权", 8, _hoisted_22),
										createBaseVNode("div", {
											class: "section section-danger",
											onClick: ($event) => douyuLogout(item.uid)
										}, "退出账号", 8, _hoisted_23)
									]),
									_: 2
								}, 1024)
							]);
						}), 128))]),
						createVNode(DouyuLoginDialog_default, {
							modelValue: unref(douyuLoginVisible),
							"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(douyuLoginVisible) ? douyuLoginVisible.value = $event : null),
							onConfirm: douyuLoginConfirm
						}, null, 8, ["modelValue"])
					]),
					_: 1
				})]),
				_: 1
			}, 8, ["value"])]);
		};
	}
}), [["__scopeId", "data-v-b2ed6444"]]);
//#endregion
export { User_default as default };
