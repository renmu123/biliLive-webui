import { d as useUserInfoStore, i as useAppConfig, G as userApi, N as NIcon, _ as __unplugin_components_2$1 } from "./index-Be9rHucp.js";
import { p as c, x as cB, G as useTheme, d as defineComponent, A as useConfig, d_ as themeLight, l as computed, I as useThemeClass, r as ref, C as onMounted, ab as watchEffect, m as h, af as mergeModels, ag as useModel, D as watch, ai as createBlock, w as withCtx, an as __unplugin_components_3, o as openBlock, a as createVNode, f as createBaseVNode, g as createTextVNode, am as toDisplayString, e as unref, aj as createCommentVNode, B as Button, _ as __unplugin_components_2, ah as storeToRefs, ax as onActivated, c as createElementBlock, F as Fragment, ak as renderList, i as isRef, al as normalizeClass } from "./index-B3txP6HV.js";
import { b as bili } from "./bili-Cfip0Zwk.js";
import { u as useNotification } from "./use-notification-_uZSor1V.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-BI19-qja.js";
import { u as useConfirm } from "./index-CQuQXiXy.js";
import { E as EllipsisHorizontalOutline } from "./EllipsisHorizontalOutline-Df0QTbol.js";
var qrcodegen;
(function(qrcodegen2) {
  class QrCode {
    /* -- Static factory functions (high level) -- */
    // Returns a QR Code representing the given Unicode text string at the given error correction level.
    // As a conservative upper bound, this function is guaranteed to succeed for strings that have 738 or fewer
    // Unicode code points (not UTF-16 code units) if the low error correction level is used. The smallest possible
    // QR Code version is automatically chosen for the output. The ECC level of the result may be higher than the
    // ecl argument if it can be done without increasing the version.
    static encodeText(text, ecl) {
      const segs = qrcodegen2.QrSegment.makeSegments(text);
      return QrCode.encodeSegments(segs, ecl);
    }
    // Returns a QR Code representing the given binary data at the given error correction level.
    // This function always encodes using the binary segment mode, not any text mode. The maximum number of
    // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
    // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
    static encodeBinary(data, ecl) {
      const seg = qrcodegen2.QrSegment.makeBytes(data);
      return QrCode.encodeSegments([seg], ecl);
    }
    /* -- Static factory functions (mid level) -- */
    // Returns a QR Code representing the given segments with the given encoding parameters.
    // The smallest possible QR Code version within the given range is automatically
    // chosen for the output. Iff boostEcl is true, then the ECC level of the result
    // may be higher than the ecl argument if it can be done without increasing the
    // version. The mask number is either between 0 to 7 (inclusive) to force that
    // mask, or -1 to automatically choose an appropriate mask (which may be slow).
    // This function allows the user to create a custom sequence of segments that switches
    // between modes (such as alphanumeric and byte) to encode text in less space.
    // This is a mid-level API; the high-level API is encodeText() and encodeBinary().
    static encodeSegments(segs, ecl, minVersion = 1, maxVersion = 40, mask = -1, boostEcl = true) {
      if (!(QrCode.MIN_VERSION <= minVersion && minVersion <= maxVersion && maxVersion <= QrCode.MAX_VERSION) || mask < -1 || mask > 7) {
        throw new RangeError("Invalid value");
      }
      let version;
      let dataUsedBits;
      for (version = minVersion; ; version++) {
        const dataCapacityBits2 = QrCode.getNumDataCodewords(version, ecl) * 8;
        const usedBits = QrSegment.getTotalBits(segs, version);
        if (usedBits <= dataCapacityBits2) {
          dataUsedBits = usedBits;
          break;
        }
        if (version >= maxVersion) {
          throw new RangeError("Data too long");
        }
      }
      for (const newEcl of [QrCode.Ecc.MEDIUM, QrCode.Ecc.QUARTILE, QrCode.Ecc.HIGH]) {
        if (boostEcl && dataUsedBits <= QrCode.getNumDataCodewords(version, newEcl) * 8) {
          ecl = newEcl;
        }
      }
      const bb = [];
      for (const seg of segs) {
        appendBits(seg.mode.modeBits, 4, bb);
        appendBits(seg.numChars, seg.mode.numCharCountBits(version), bb);
        for (const b of seg.getData()) {
          bb.push(b);
        }
      }
      const dataCapacityBits = QrCode.getNumDataCodewords(version, ecl) * 8;
      appendBits(0, Math.min(4, dataCapacityBits - bb.length), bb);
      appendBits(0, (8 - bb.length % 8) % 8, bb);
      for (let padByte = 236; bb.length < dataCapacityBits; padByte ^= 236 ^ 17) {
        appendBits(padByte, 8, bb);
      }
      const dataCodewords = [];
      while (dataCodewords.length * 8 < bb.length) {
        dataCodewords.push(0);
      }
      bb.forEach((b, i) => dataCodewords[i >>> 3] |= b << 7 - (i & 7));
      return new QrCode(version, ecl, dataCodewords, mask);
    }
    /* -- Constructor (low level) and fields -- */
    // Creates a new QR Code with the given version number,
    // error correction level, data codeword bytes, and mask number.
    // This is a low-level API that most users should not use directly.
    // A mid-level API is the encodeSegments() function.
    constructor(version, errorCorrectionLevel, dataCodewords, msk) {
      this.version = version;
      this.errorCorrectionLevel = errorCorrectionLevel;
      this.modules = [];
      this.isFunction = [];
      if (version < QrCode.MIN_VERSION || version > QrCode.MAX_VERSION) {
        throw new RangeError("Version value out of range");
      }
      if (msk < -1 || msk > 7) {
        throw new RangeError("Mask value out of range");
      }
      this.size = version * 4 + 17;
      const row = [];
      for (let i = 0; i < this.size; i++) {
        row.push(false);
      }
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
    /* -- Accessor methods -- */
    // Returns the color of the module (pixel) at the given coordinates, which is false
    // for light or true for dark. The top left corner has the coordinates (x=0, y=0).
    // If the given coordinates are out of bounds, then false (light) is returned.
    getModule(x, y) {
      return x >= 0 && x < this.size && y >= 0 && y < this.size && this.modules[y][x];
    }
    // Modified to expose modules for easy access
    getModules() {
      return this.modules;
    }
    /* -- Private helper methods for constructor: Drawing function modules -- */
    // Reads this object's version field, and draws and marks all function modules.
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
      for (let i = 0; i < numAlign; i++) {
        for (let j = 0; j < numAlign; j++) {
          if (!(i === 0 && j === 0 || i === 0 && j === numAlign - 1 || i === numAlign - 1 && j === 0)) {
            this.drawAlignmentPattern(alignPatPos[i], alignPatPos[j]);
          }
        }
      }
      this.drawFormatBits(0);
      this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(mask) {
      const data = this.errorCorrectionLevel.formatBits << 3 | mask;
      let rem = data;
      for (let i = 0; i < 10; i++) {
        rem = rem << 1 ^ (rem >>> 9) * 1335;
      }
      const bits = (data << 10 | rem) ^ 21522;
      for (let i = 0; i <= 5; i++) {
        this.setFunctionModule(8, i, getBit(bits, i));
      }
      this.setFunctionModule(8, 7, getBit(bits, 6));
      this.setFunctionModule(8, 8, getBit(bits, 7));
      this.setFunctionModule(7, 8, getBit(bits, 8));
      for (let i = 9; i < 15; i++) {
        this.setFunctionModule(14 - i, 8, getBit(bits, i));
      }
      for (let i = 0; i < 8; i++) {
        this.setFunctionModule(this.size - 1 - i, 8, getBit(bits, i));
      }
      for (let i = 8; i < 15; i++) {
        this.setFunctionModule(8, this.size - 15 + i, getBit(bits, i));
      }
      this.setFunctionModule(8, this.size - 8, true);
    }
    // Draws two copies of the version bits (with its own error correction code),
    // based on this object's version field, iff 7 <= version <= 40.
    drawVersion() {
      if (this.version < 7) {
        return;
      }
      let rem = this.version;
      for (let i = 0; i < 12; i++) {
        rem = rem << 1 ^ (rem >>> 11) * 7973;
      }
      const bits = this.version << 12 | rem;
      for (let i = 0; i < 18; i++) {
        const color = getBit(bits, i);
        const a = this.size - 11 + i % 3;
        const b = Math.floor(i / 3);
        this.setFunctionModule(a, b, color);
        this.setFunctionModule(b, a, color);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(x, y) {
      for (let dy = -4; dy <= 4; dy++) {
        for (let dx = -4; dx <= 4; dx++) {
          const dist = Math.max(Math.abs(dx), Math.abs(dy));
          const xx = x + dx;
          const yy = y + dy;
          if (xx >= 0 && xx < this.size && yy >= 0 && yy < this.size) {
            this.setFunctionModule(xx, yy, dist !== 2 && dist !== 4);
          }
        }
      }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(x, y) {
      for (let dy = -2; dy <= 2; dy++) {
        for (let dx = -2; dx <= 2; dx++) {
          this.setFunctionModule(x + dx, y + dy, Math.max(Math.abs(dx), Math.abs(dy)) !== 1);
        }
      }
    }
    // Sets the color of a module and marks it as a function module.
    // Only used by the constructor. Coordinates must be in bounds.
    setFunctionModule(x, y, isDark) {
      this.modules[y][x] = isDark;
      this.isFunction[y][x] = true;
    }
    /* -- Private helper methods for constructor: Codewords and masking -- */
    // Returns a new byte string representing the given data with the appropriate error correction
    // codewords appended to it, based on this object's version and error correction level.
    addEccAndInterleave(data) {
      const ver = this.version;
      const ecl = this.errorCorrectionLevel;
      if (data.length !== QrCode.getNumDataCodewords(ver, ecl)) {
        throw new RangeError("Invalid argument");
      }
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
        if (i < numShortBlocks) {
          dat.push(0);
        }
        blocks.push(dat.concat(ecc));
      }
      const result = [];
      for (let i = 0; i < blocks[0].length; i++) {
        blocks.forEach((block, j) => {
          if (i !== shortBlockLen - blockEccLen || j >= numShortBlocks) {
            result.push(block[i]);
          }
        });
      }
      return result;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(data) {
      if (data.length !== Math.floor(QrCode.getNumRawDataModules(this.version) / 8)) {
        throw new RangeError("Invalid argument");
      }
      let i = 0;
      for (let right = this.size - 1; right >= 1; right -= 2) {
        if (right === 6) {
          right = 5;
        }
        for (let vert = 0; vert < this.size; vert++) {
          for (let j = 0; j < 2; j++) {
            const x = right - j;
            const upward = (right + 1 & 2) === 0;
            const y = upward ? this.size - 1 - vert : vert;
            if (!this.isFunction[y][x] && i < data.length * 8) {
              this.modules[y][x] = getBit(data[i >>> 3], 7 - (i & 7));
              i++;
            }
          }
        }
      }
    }
    // XORs the codeword modules in this QR Code with the given mask pattern.
    // The function modules must be marked and the codeword bits must be drawn
    // before masking. Due to the arithmetic of XOR, calling applyMask() with
    // the same mask value a second time will undo the mask. A final well-formed
    // QR Code needs exactly one (not zero, two, etc.) mask applied.
    applyMask(mask) {
      if (mask < 0 || mask > 7) {
        throw new RangeError("Mask value out of range");
      }
      for (let y = 0; y < this.size; y++) {
        for (let x = 0; x < this.size; x++) {
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
            default:
              throw new Error("Unreachable");
          }
          if (!this.isFunction[y][x] && invert) {
            this.modules[y][x] = !this.modules[y][x];
          }
        }
      }
    }
    // Calculates and returns the penalty score based on state of this QR Code's current modules.
    // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
    getPenaltyScore() {
      let result = 0;
      for (let y = 0; y < this.size; y++) {
        let runColor = false;
        let runX = 0;
        const runHistory = [0, 0, 0, 0, 0, 0, 0];
        for (let x = 0; x < this.size; x++) {
          if (this.modules[y][x] === runColor) {
            runX++;
            if (runX === 5) {
              result += QrCode.PENALTY_N1;
            } else if (runX > 5) {
              result++;
            }
          } else {
            this.finderPenaltyAddHistory(runX, runHistory);
            if (!runColor) {
              result += this.finderPenaltyCountPatterns(runHistory) * QrCode.PENALTY_N3;
            }
            runColor = this.modules[y][x];
            runX = 1;
          }
        }
        result += this.finderPenaltyTerminateAndCount(runColor, runX, runHistory) * QrCode.PENALTY_N3;
      }
      for (let x = 0; x < this.size; x++) {
        let runColor = false;
        let runY = 0;
        const runHistory = [0, 0, 0, 0, 0, 0, 0];
        for (let y = 0; y < this.size; y++) {
          if (this.modules[y][x] === runColor) {
            runY++;
            if (runY === 5) {
              result += QrCode.PENALTY_N1;
            } else if (runY > 5) {
              result++;
            }
          } else {
            this.finderPenaltyAddHistory(runY, runHistory);
            if (!runColor) {
              result += this.finderPenaltyCountPatterns(runHistory) * QrCode.PENALTY_N3;
            }
            runColor = this.modules[y][x];
            runY = 1;
          }
        }
        result += this.finderPenaltyTerminateAndCount(runColor, runY, runHistory) * QrCode.PENALTY_N3;
      }
      for (let y = 0; y < this.size - 1; y++) {
        for (let x = 0; x < this.size - 1; x++) {
          const color = this.modules[y][x];
          if (color === this.modules[y][x + 1] && color === this.modules[y + 1][x] && color === this.modules[y + 1][x + 1]) {
            result += QrCode.PENALTY_N2;
          }
        }
      }
      let dark = 0;
      for (const row of this.modules) {
        dark = row.reduce((sum, color) => sum + (color ? 1 : 0), dark);
      }
      const total = this.size * this.size;
      const k = Math.ceil(Math.abs(dark * 20 - total * 10) / total) - 1;
      result += k * QrCode.PENALTY_N4;
      return result;
    }
    /* -- Private helper functions -- */
    // Returns an ascending list of positions of alignment patterns for this version number.
    // Each position is in the range [0,177), and are used on both the x and y axes.
    // This could be implemented as lookup table of 40 variable-length lists of integers.
    getAlignmentPatternPositions() {
      if (this.version === 1) {
        return [];
      } else {
        const numAlign = Math.floor(this.version / 7) + 2;
        const step = this.version === 32 ? 26 : Math.ceil((this.version * 4 + 4) / (numAlign * 2 - 2)) * 2;
        const result = [6];
        for (let pos = this.size - 7; result.length < numAlign; pos -= step) {
          result.splice(1, 0, pos);
        }
        return result;
      }
    }
    // Returns the number of data bits that can be stored in a QR Code of the given version number, after
    // all function modules are excluded. This includes remainder bits, so it might not be a multiple of 8.
    // The result is in the range [208, 29648]. This could be implemented as a 40-entry lookup table.
    static getNumRawDataModules(ver) {
      if (ver < QrCode.MIN_VERSION || ver > QrCode.MAX_VERSION) {
        throw new RangeError("Version number out of range");
      }
      let result = (16 * ver + 128) * ver + 64;
      if (ver >= 2) {
        const numAlign = Math.floor(ver / 7) + 2;
        result -= (25 * numAlign - 10) * numAlign - 55;
        if (ver >= 7) {
          result -= 36;
        }
      }
      return result;
    }
    // Returns the number of 8-bit data (i.e. not error correction) codewords contained in any
    // QR Code of the given version number and error correction level, with remainder bits discarded.
    // This stateless pure function could be implemented as a (40*4)-cell lookup table.
    static getNumDataCodewords(ver, ecl) {
      return Math.floor(QrCode.getNumRawDataModules(ver) / 8) - QrCode.ECC_CODEWORDS_PER_BLOCK[ecl.ordinal][ver] * QrCode.NUM_ERROR_CORRECTION_BLOCKS[ecl.ordinal][ver];
    }
    // Returns a Reed-Solomon ECC generator polynomial for the given degree. This could be
    // implemented as a lookup table over all possible parameter values, instead of as an algorithm.
    static reedSolomonComputeDivisor(degree) {
      if (degree < 1 || degree > 255) {
        throw new RangeError("Degree out of range");
      }
      const result = [];
      for (let i = 0; i < degree - 1; i++) {
        result.push(0);
      }
      result.push(1);
      let root = 1;
      for (let i = 0; i < degree; i++) {
        for (let j = 0; j < result.length; j++) {
          result[j] = QrCode.reedSolomonMultiply(result[j], root);
          if (j + 1 < result.length) {
            result[j] ^= result[j + 1];
          }
        }
        root = QrCode.reedSolomonMultiply(root, 2);
      }
      return result;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(data, divisor) {
      const result = divisor.map((_) => 0);
      for (const b of data) {
        const factor = b ^ result.shift();
        result.push(0);
        divisor.forEach((coef, i) => result[i] ^= QrCode.reedSolomonMultiply(coef, factor));
      }
      return result;
    }
    // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
    // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
    static reedSolomonMultiply(x, y) {
      if (x >>> 8 !== 0 || y >>> 8 !== 0) {
        throw new RangeError("Byte out of range");
      }
      let z = 0;
      for (let i = 7; i >= 0; i--) {
        z = z << 1 ^ (z >>> 7) * 285;
        z ^= (y >>> i & 1) * x;
      }
      return z;
    }
    // Can only be called immediately after a light run is added, and
    // returns either 0, 1, or 2. A helper function for getPenaltyScore().
    finderPenaltyCountPatterns(runHistory) {
      const n = runHistory[1];
      const core = n > 0 && runHistory[2] === n && runHistory[3] === n * 3 && runHistory[4] === n && runHistory[5] === n;
      return (core && runHistory[0] >= n * 4 && runHistory[6] >= n ? 1 : 0) + (core && runHistory[6] >= n * 4 && runHistory[0] >= n ? 1 : 0);
    }
    // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
    finderPenaltyTerminateAndCount(currentRunColor, currentRunLength, runHistory) {
      if (currentRunColor) {
        this.finderPenaltyAddHistory(currentRunLength, runHistory);
        currentRunLength = 0;
      }
      currentRunLength += this.size;
      this.finderPenaltyAddHistory(currentRunLength, runHistory);
      return this.finderPenaltyCountPatterns(runHistory);
    }
    // Pushes the given value to the front and drops the last value. A helper function for getPenaltyScore().
    finderPenaltyAddHistory(currentRunLength, runHistory) {
      if (runHistory[0] === 0) {
        currentRunLength += this.size;
      }
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
    // Version: (note that index 0 is for padding, and is set to an illegal value)
    // 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40    Error correction level
    [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    // Low
    [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
    // Medium
    [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    // Quartile
    [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
    // High
  ];
  QrCode.NUM_ERROR_CORRECTION_BLOCKS = [
    // Version: (note that index 0 is for padding, and is set to an illegal value)
    // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40    Error correction level
    [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
    // Low
    [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
    // Medium
    [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
    // Quartile
    [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]
    // High
  ];
  qrcodegen2.QrCode = QrCode;
  function appendBits(val, len, bb) {
    if (len < 0 || len > 31 || val >>> len !== 0) {
      throw new RangeError("Value out of range");
    }
    for (let i = len - 1; i >= 0; i--) {
      bb.push(val >>> i & 1);
    }
  }
  function getBit(x, i) {
    return (x >>> i & 1) !== 0;
  }
  class QrSegment {
    /* -- Static factory functions (mid level) -- */
    // Returns a segment representing the given binary data encoded in
    // byte mode. All input byte arrays are acceptable. Any text string
    // can be converted to UTF-8 bytes and encoded as a byte mode segment.
    static makeBytes(data) {
      const bb = [];
      for (const b of data) {
        appendBits(b, 8, bb);
      }
      return new QrSegment(QrSegment.Mode.BYTE, data.length, bb);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(digits) {
      if (!QrSegment.isNumeric(digits)) {
        throw new RangeError("String contains non-numeric characters");
      }
      const bb = [];
      for (let i = 0; i < digits.length; ) {
        const n = Math.min(digits.length - i, 3);
        appendBits(Number.parseInt(digits.substr(i, n), 10), n * 3 + 1, bb);
        i += n;
      }
      return new QrSegment(QrSegment.Mode.NUMERIC, digits.length, bb);
    }
    // Returns a segment representing the given text string encoded in alphanumeric mode.
    // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
    // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static makeAlphanumeric(text) {
      if (!QrSegment.isAlphanumeric(text)) {
        throw new RangeError("String contains unencodable characters in alphanumeric mode");
      }
      const bb = [];
      let i;
      for (i = 0; i + 2 <= text.length; i += 2) {
        let temp = QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i)) * 45;
        temp += QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i + 1));
        appendBits(temp, 11, bb);
      }
      if (i < text.length) {
        appendBits(QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i)), 6, bb);
      }
      return new QrSegment(QrSegment.Mode.ALPHANUMERIC, text.length, bb);
    }
    // Returns a new mutable list of zero or more segments to represent the given Unicode text string.
    // The result may use various segment modes and switch modes to optimize the length of the bit stream.
    static makeSegments(text) {
      if (text === "") {
        return [];
      } else if (QrSegment.isNumeric(text)) {
        return [QrSegment.makeNumeric(text)];
      } else if (QrSegment.isAlphanumeric(text)) {
        return [QrSegment.makeAlphanumeric(text)];
      } else {
        return [QrSegment.makeBytes(QrSegment.toUtf8ByteArray(text))];
      }
    }
    // Returns a segment representing an Extended Channel Interpretation
    // (ECI) designator with the given assignment value.
    static makeEci(assignVal) {
      const bb = [];
      if (assignVal < 0) {
        throw new RangeError("ECI assignment value out of range");
      } else if (assignVal < 1 << 7) {
        appendBits(assignVal, 8, bb);
      } else if (assignVal < 1 << 14) {
        appendBits(2, 2, bb);
        appendBits(assignVal, 14, bb);
      } else if (assignVal < 1e6) {
        appendBits(6, 3, bb);
        appendBits(assignVal, 21, bb);
      } else {
        throw new RangeError("ECI assignment value out of range");
      }
      return new QrSegment(QrSegment.Mode.ECI, 0, bb);
    }
    // Tests whether the given string can be encoded as a segment in numeric mode.
    // A string is encodable iff each character is in the range 0 to 9.
    static isNumeric(text) {
      return QrSegment.NUMERIC_REGEX.test(text);
    }
    // Tests whether the given string can be encoded as a segment in alphanumeric mode.
    // A string is encodable iff each character is in the following set: 0 to 9, A to Z
    // (uppercase only), space, dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static isAlphanumeric(text) {
      return QrSegment.ALPHANUMERIC_REGEX.test(text);
    }
    /* -- Constructor (low level) and fields -- */
    // Creates a new QR Code segment with the given attributes and data.
    // The character count (numChars) must agree with the mode and the bit buffer length,
    // but the constraint isn't checked. The given bit buffer is cloned and stored.
    constructor(mode, numChars, bitData) {
      this.mode = mode;
      this.numChars = numChars;
      this.bitData = bitData;
      if (numChars < 0) {
        throw new RangeError("Invalid argument");
      }
      this.bitData = bitData.slice();
    }
    /* -- Methods -- */
    // Returns a new copy of the data bits of this segment.
    getData() {
      return this.bitData.slice();
    }
    // (Package-private) Calculates and returns the number of bits needed to encode the given segments at
    // the given version. The result is infinity if a segment has too many characters to fit its length field.
    static getTotalBits(segs, version) {
      let result = 0;
      for (const seg of segs) {
        const ccbits = seg.mode.numCharCountBits(version);
        if (seg.numChars >= 1 << ccbits) {
          return Infinity;
        }
        result += 4 + ccbits + seg.bitData.length;
      }
      return result;
    }
    // Returns a new array of bytes representing the given string encoded in UTF-8.
    static toUtf8ByteArray(str) {
      str = encodeURI(str);
      const result = [];
      for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) !== "%") {
          result.push(str.charCodeAt(i));
        } else {
          result.push(Number.parseInt(str.substr(i + 1, 2), 16));
          i += 2;
        }
      }
      return result;
    }
  }
  QrSegment.NUMERIC_REGEX = /^[0-9]*$/;
  QrSegment.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+./:-]*$/;
  QrSegment.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
  qrcodegen2.QrSegment = QrSegment;
})(qrcodegen || (qrcodegen = {}));
(function(qrcodegen2) {
  (function(QrCode) {
    class Ecc {
      /* -- Constructor and fields -- */
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
  })(qrcodegen2.QrCode || (qrcodegen2.QrCode = {}));
})(qrcodegen || (qrcodegen = {}));
(function(qrcodegen2) {
  (function(QrSegment) {
    class Mode {
      /* -- Constructor and fields -- */
      constructor(modeBits, numBitsCharCount) {
        this.modeBits = modeBits;
        this.numBitsCharCount = numBitsCharCount;
      }
      /* -- Method -- */
      // (Package-private) Returns the bit width of the character count field for a segment in
      // this mode in a QR Code at the given version number. The result is in the range [0, 16].
      numCharCountBits(ver) {
        return this.numBitsCharCount[Math.floor((ver + 7) / 17)];
      }
    }
    Mode.NUMERIC = new Mode(1, [10, 12, 14]);
    Mode.ALPHANUMERIC = new Mode(2, [9, 11, 13]);
    Mode.BYTE = new Mode(4, [8, 16, 16]);
    Mode.KANJI = new Mode(8, [8, 10, 12]);
    Mode.ECI = new Mode(7, [0, 0, 0]);
    QrSegment.Mode = Mode;
  })(qrcodegen2.QrSegment || (qrcodegen2.QrSegment = {}));
})(qrcodegen || (qrcodegen = {}));
const style = c([cB("qr-code", `
 background: #fff;
 border-radius: var(--n-border-radius);
 display: inline-flex;
 `)]);
const ERROR_CORRECTION_LEVEL = {
  L: qrcodegen.QrCode.Ecc.LOW,
  M: qrcodegen.QrCode.Ecc.MEDIUM,
  Q: qrcodegen.QrCode.Ecc.QUARTILE,
  H: qrcodegen.QrCode.Ecc.HIGH
};
const qrCodeProps = Object.assign(Object.assign({}, useTheme.props), {
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
const UPSCALE_RATIO = 2;
const __unplugin_components_0 = defineComponent({
  name: "QrCode",
  props: qrCodeProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("QrCode", "-qr-code", style, themeLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      return {
        "--n-border-radius": themeRef.value.self.borderRadius
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("qr-code", void 0, cssVarsRef, props) : void 0;
    const canvasRef = ref();
    const qr = computed(() => {
      var _a;
      const errorCorrectionLevel = ERROR_CORRECTION_LEVEL[props.errorCorrectionLevel];
      return qrcodegen.QrCode.encodeText((_a = props.value) !== null && _a !== void 0 ? _a : "-", errorCorrectionLevel);
    });
    onMounted(() => {
      const imageLoadedTrigger = ref(0);
      let loadedIcon = null;
      watchEffect(() => {
        if (props.type === "svg") return;
        void imageLoadedTrigger.value;
        drawCanvas(qr.value, props.size, props.color, props.backgroundColor, loadedIcon ? {
          icon: loadedIcon,
          iconBorderRadius: props.iconBorderRadius,
          iconSize: props.iconSize,
          iconBackgroundColor: props.iconBackgroundColor
        } : null);
      });
      watchEffect(() => {
        if (props.type === "svg") return;
        const {
          iconSrc
        } = props;
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
    function drawCanvas(qr2, size, foregroundColor, backgroundColor, iconConfig) {
      const canvas = canvasRef.value;
      if (!canvas) return;
      const canvasWidth = size * UPSCALE_RATIO;
      const width = qr2.size;
      const scale = canvasWidth / width;
      canvas.width = canvasWidth;
      canvas.height = canvasWidth;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let y = 0; y < qr2.size; y++) {
        for (let x = 0; x < qr2.size; x++) {
          ctx.fillStyle = qr2.getModule(x, y) ? foregroundColor : backgroundColor;
          const startX = Math.floor(x * scale);
          const endX = Math.ceil((x + 1) * scale);
          const startY = Math.floor(y * scale);
          const endY = Math.ceil((y + 1) * scale);
          ctx.fillRect(startX, startY, endX - startX, endY - startY);
        }
      }
      if (iconConfig) {
        const {
          icon,
          iconBackgroundColor,
          iconBorderRadius,
          iconSize
        } = iconConfig;
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
            if (!cell) {
              return;
            }
            if (start === null) {
              ops.push(`M${x + margin},${y + margin} h1v1H${x + margin}z`);
            } else {
              ops.push(`M${start + margin},${y + margin} h${x + 1 - start}v1H${start + margin}z`);
            }
            return;
          }
          if (cell && start === null) {
            start = x;
          }
        });
      });
      return ops.join("");
    }
    function svgInfo(qr2, size, iconConfig) {
      const cells = qr2.getModules();
      const numCells = cells.length;
      const cellsToDraw = cells;
      let svgInnerHtml = "";
      const path1Html = `<path fill="transparent" d="M0,0 h${numCells}v${numCells}H0z" shape-rendering="crispEdges"></path>`;
      const path2Html = `<path fill="${props.color}" d="${generatePath(cellsToDraw, 0)}" shape-rendering="crispEdges"></path>`;
      let iconHtml = "";
      if (iconConfig) {
        const {
          iconSrc,
          iconSize
        } = iconConfig;
        const DEFAULT_IMG_SCALE = 0.1;
        const defaultSize = Math.floor(size * DEFAULT_IMG_SCALE);
        const scale = numCells / size;
        const h2 = (iconSize || defaultSize) * scale;
        const w = (iconSize || defaultSize) * scale;
        const x = cells.length / 2 - w / 2;
        const y = cells.length / 2 - h2 / 2;
        iconHtml += `<image href="${iconSrc}" width="${w}" height="${h2}" x="${x}" y="${y}" preserveAspectRatio="none"></image>`;
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
    const {
      mergedClsPrefix,
      backgroundColor,
      padding,
      cssVars,
      themeClass,
      size,
      type
    } = this;
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
const _hoisted_1$1 = { style: { "text-align": "center" } };
const _hoisted_2$1 = { class: "footer" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BiliLoginDialog",
  props: {
    "modelValue": { type: Boolean, ...{ required: true, default: false } },
    "modelModifiers": {}
  },
  emits: /* @__PURE__ */ mergeModels(["close"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const showModal = useModel(__props, "modelValue");
    const emits = __emit;
    const notice = useNotification();
    const url = ref("");
    const id = ref("");
    const text = ref("");
    const interval = ref(null);
    const onOpen = async () => {
      text.value = "";
      const res = await bili.qrcode();
      url.value = res.url;
      id.value = res.id;
      interval.value = setInterval(async () => {
        const res2 = await bili.loginPoll(id.value);
        console.log(res2);
        if (res2.status === "completed") {
          clearInterval(interval.value);
          text.value = "登录成功，请关闭本窗口";
          notice.success({
            title: "登录成功",
            duration: 1e3
          });
          confirm();
        } else if (res2.status === "error") {
          clearInterval(interval.value);
          notice.error({
            title: "登录失败",
            description: res2.failReason
          });
          text.value = res2.failReason;
        }
      }, 2e3);
    };
    const close = () => {
      showModal.value = false;
    };
    const confirm = () => {
      showModal.value = false;
    };
    watch(
      () => showModal.value,
      () => {
        if (showModal.value) {
          onOpen();
        } else {
          bili.loginCancel(id.value);
          emits("close");
        }
      }
    );
    return (_ctx, _cache) => {
      const _component_n_qr_code = __unplugin_components_0;
      const _component_n_button = Button;
      const _component_n_card = __unplugin_components_2;
      const _component_n_modal = __unplugin_components_3;
      return openBlock(), createBlock(_component_n_modal, {
        show: showModal.value,
        "onUpdate:show": _cache[0] || (_cache[0] = ($event) => showModal.value = $event),
        "mask-closable": false,
        "auto-focus": ""
      }, {
        default: withCtx(() => [
          createVNode(_component_n_card, {
            style: { "width": "calc(100% - 60px)" },
            bordered: false,
            size: "huge",
            role: "dialog",
            "aria-modal": "true",
            class: "card"
          }, {
            footer: withCtx(() => [
              createBaseVNode("div", _hoisted_2$1, [
                createVNode(_component_n_button, {
                  class: "btn",
                  onClick: close
                }, {
                  default: withCtx(() => _cache[2] || (_cache[2] = [
                    createTextVNode("取消")
                  ])),
                  _: 1
                }),
                createVNode(_component_n_button, {
                  type: "primary",
                  class: "btn",
                  onClick: confirm
                }, {
                  default: withCtx(() => _cache[3] || (_cache[3] = [
                    createTextVNode(" 确认 ")
                  ])),
                  _: 1
                })
              ])
            ]),
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1$1, [
                createBaseVNode("h2", null, toDisplayString(unref(text)), 1),
                _cache[1] || (_cache[1] = createBaseVNode("h2", null, [
                  createTextVNode("使用b站app扫码完成登录"),
                  createBaseVNode("br")
                ], -1)),
                unref(url) ? (openBlock(), createBlock(_component_n_qr_code, {
                  key: 0,
                  value: unref(url),
                  color: "#409eff",
                  "background-color": "#F5F5F5",
                  size: 250
                }, null, 8, ["value"])) : createCommentVNode("", true)
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]);
    };
  }
});
const BiliLoginDialog = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f3b8cdaa"]]);
const _hoisted_1 = { class: "user-info" };
const _hoisted_2 = { class: "login-btns" };
const _hoisted_3 = { class: "container" };
const _hoisted_4 = {
  key: 0,
  class: "expires"
};
const _hoisted_5 = { class: "username" };
const _hoisted_6 = ["src"];
const _hoisted_7 = { style: { "padding": "5px 10px" } };
const _hoisted_8 = ["onClick"];
const _hoisted_9 = ["onClick"];
const _hoisted_10 = ["onClick"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const { getUserInfo, changeUser } = useUserInfoStore();
    const { appConfig } = storeToRefs(useAppConfig());
    const { userInfo, userList } = storeToRefs(useUserInfoStore());
    const notice = useNotification();
    const loginTvDialogVisible = ref(false);
    const login = async () => {
      loginTvDialogVisible.value = true;
    };
    const confirm = useConfirm();
    const logout = async (uid) => {
      const uids = [
        appConfig.value.webhook.uid,
        ...Object.values(appConfig.value.webhook.rooms).map((item) => item.uid)
      ];
      if (uids.includes(uid)) {
        const [status] = await confirm.warning({
          content: "当前帐号正在被webhook使用，是否确认退出？"
        });
        if (!status) return;
      } else {
        const [status] = await confirm.warning({
          content: "确认退出账号？"
        });
        if (!status) return;
      }
      await userApi.delete(uid);
      if (uid === userInfo.value.uid && userList.value.length !== 0) {
        changeAccount(userList.value[0].uid);
      }
      getUserInfo();
    };
    const changeAccount = async (uid) => {
      changeUser(uid);
    };
    const updateAccountInfo = async (uid) => {
      await userApi.refresh(uid);
      notice.success({
        title: "已获取最新数据",
        duration: 1e3
      });
      getUserInfo();
    };
    onActivated(() => {
      getUserInfo();
    });
    return (_ctx, _cache) => {
      const _component_n_button = Button;
      const _component_n_icon = NIcon;
      const _component_n_popover = __unplugin_components_2$1;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createVNode(_component_n_button, {
              type: "primary",
              onClick: login
            }, {
              default: withCtx(() => _cache[1] || (_cache[1] = [
                createTextVNode("登录账号")
              ])),
              _: 1
            })
          ])
        ]),
        createBaseVNode("div", _hoisted_3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(userList), (item) => {
            return openBlock(), createElementBlock("div", {
              key: item.uid,
              class: normalizeClass(["card", {
                active: item.uid === unref(userInfo).uid
              }])
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
                trigger: withCtx(() => [
                  createVNode(_component_n_icon, {
                    size: "25",
                    class: "pointer menu"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(EllipsisHorizontalOutline))
                    ]),
                    _: 1
                  })
                ]),
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
                    style: { "color": "#e88080" },
                    onClick: ($event) => logout(item.uid)
                  }, "退出账号", 8, _hoisted_10)
                ]),
                _: 2
              }, 1024)
            ], 2);
          }), 128))
        ]),
        createVNode(BiliLoginDialog, {
          modelValue: unref(loginTvDialogVisible),
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(loginTvDialogVisible) ? loginTvDialogVisible.value = $event : null),
          onClose: unref(getUserInfo)
        }, null, 8, ["modelValue", "onClose"])
      ]);
    };
  }
});
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d7f546f0"]]);
export {
  index as default
};
