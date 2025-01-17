const EMPTY_POKEY_REGS = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// 64khz tables

const frqtabpure_64khz = [
	0xF1, 0xE3, 0xD6, 0xCA, 0xBF, 0xB4, 0xAA, 0xA0, 0x97, 0x8F, 0x87, 0x7F,
	0x78, 0x71, 0x6B, 0x65, 0x5F, 0x5A, 0x54, 0x50, 0x4B, 0x47, 0x43, 0x3F,
	0x3B, 0x38, 0x35, 0x32, 0x2F, 0x2C, 0x2A, 0x27, 0x25, 0x23, 0x21, 0x1F,
	0x1D, 0x1C, 0x1A, 0x18, 0x17, 0x16, 0x14, 0x13, 0x12, 0x11, 0x10, 0x0F,
	0x0E, 0x0D, 0x0C, 0x0C, 0x0B, 0x0A, 0x0A, 0x09, 0x09, 0x08, 0x07, 0x07,
	0x07, 0x06, 0x06, 0x05,
]

const frqtabbuzzy_64khz = [
	0x7F, 0x79, 0x73, 0x6C, 0x66, 0x60, 0x5A, 0x55, 0xF2, 0xE6, 0xD7, 0xCB,
	0xBF, 0xB6, 0xAA, 0xA1, 0x98, 0x8F, 0x89, 0x80, 0x7A, 0x71, 0x6B, 0x65,
	0x5F, 0x5C, 0x56, 0x50, 0x4D, 0x47, 0x44, 0x41, 0x3E, 0x38, 0x35, 0x32,
	0x2F, 0x2F, 0x29, 0x29, 0x26, 0x23, 0x20, 0x20, 0x20, 0x1A, 0x1A, 0x17,
	0x17, 0x17, 0x14, 0x14, 0x11, 0x11, 0x11, 0x11, 0x11, 0x0B, 0x0B, 0x0B,
	0x0B, 0x0B, 0x0B, 0x08,
]

const frqtabgritty_64khz = [
	0xFF, 0xF3, 0xE4, 0xD8, 0xCD, 0xC0, 0xB5, 0xAB, 0xA2, 0x99, 0x91, 0x88,
	0x7F, 0x79, 0x73, 0x6C, 0x66, 0x60, 0x5A, 0x55, 0x51, 0x4C, 0x48, 0x43,
	0x3F, 0x3C, 0x39, 0x34, 0x33, 0x30, 0x2D, 0x2A, 0x28, 0x25, 0x24, 0x21,
	0x1F, 0x1E, 0x1C, 0x50, 0x19, 0x47, 0x16, 0x15, 0x3E, 0x12, 0x35, 0x10,
	0x0F, 0x0F, 0x0D, 0x0D, 0x0C, 0x23, 0x0A, 0x0A, 0x0A, 0x1A, 0x1A, 0x07,
	0x07, 0x07, 0x06, 0x06,
]

const frqtabpoly5_64khz = [
	0x3E, 0x3A, 0x37, 0x33, 0x30, 0x2E, 0x2B, 0x29, 0x26, 0x24, 0x22, 0x20,
	0x1F, 0x1C, 0x1B, 0x19, 0x18, 0x16, 0x15, 0x14, 0x13, 0x12, 0x10, 0x10,
	0x0F, 0x0E, 0x0D, 0x0C, 0x0B, 0x0B, 0x0A, 0x09, 0x09, 0x08, 0x08, 0x07,
	0x07, 0x06, 0x06, 0x06, 0x05, 0x05, 0x05, 0x04, 0x04, 0x04, 0x03, 0x03,
	0x03, 0x03, 0x02, 0x02, 0x02, 0x02, 0x02, 0x02, 0x01, 0x01, 0x01, 0x01,
	0x00, 0x00, 0x00, 0x00,
]

// 15khz tables

const frqtabpure_15khz = [
	0xED, 0xDF, 0xD2, 0xC7, 0xBB, 0xB1, 0xA7, 0x9D, 0x95, 0x8C, 0x84, 0x7D,
	0x76, 0x6F, 0x69, 0x63, 0x5D, 0x58, 0x53, 0x4E, 0x4A, 0x45, 0x42, 0x3E,
	0x3A, 0x37, 0x34, 0x31, 0x2E, 0x2B, 0x29, 0x27, 0x24, 0x22, 0x20, 0x1E,
	0x1D, 0x1B, 0x1A, 0x18, 0x17, 0x15, 0x14, 0x13, 0x12, 0x11, 0x10, 0x0F,
	0x0E, 0x0D, 0x0C, 0x0C, 0x0B, 0x0A, 0x0A, 0x09, 0x08, 0x08, 0x07, 0x07,
	0x06, 0x06, 0x06, 0x05,
]

const frqtabbuzzy_15khz = [

	0xBC, 0xB2, 0xA8, 0x9E, 0x96, 0x8D, 0x85, 0x7E, 0x76, 0x70, 0x6A, 0x64,
	0x5F, 0x58, 0x53, 0x4E, 0x4B, 0x46, 0x42, 0x3E, 0x3A, 0x37, 0x34, 0x32,
	0x2E, 0x2B, 0x29, 0x26, 0x25, 0x23, 0x21, 0x1F, 0x1C, 0x1B, 0x1A, 0x19,
	0x17, 0x16, 0x15, 0x14, 0x12, 0x11, 0x10, 0x0F, 0x0D, 0x0D, 0x0C, 0x0C,
	0x0B, 0x0A, 0x0A, 0x0A, 0x08, 0x08, 0x07, 0x07, 0x06, 0x06, 0x06, 0x05,
	0x05, 0x05, 0x05, 0x03,
]

// 1.79mhz tables

const frqtabpoly5_179mhz = [
	0xD7, 0xCA, 0xBE, 0xB3, 0xA9, 0x9F, 0x96, 0x8D, 0x85, 0x7E, 0x77, 0x70,
	0x69, 0x63, 0x5E, 0x58, 0x53, 0x4E, 0x49, 0x45, 0x41, 0x3D, 0x39, 0x36,
	0x32, 0x2F, 0x2D, 0x2A, 0x27, 0x25, 0x23, 0x20, 0x1E, 0x1D, 0x1A, 0x19,
	0x17, 0x16, 0x14, 0x13, 0x12, 0x11, 0x0F, 0x0E, 0x0D, 0x0C, 0x0B, 0x0A,
	0x0A, 0x09, 0x08, 0x07, 0x07, 0x06, 0x06, 0x05, 0x05, 0x04, 0x04, 0x03,
	0x03, 0x02, 0x02, 0x02,
]

const frqtabpure_179mhz = [

	0xCF, 0xC4, 0xB8, 0xAE, 0xA4, 0x9A, 0x92, 0x89, 0x81, 0x7A, 0x73, 0x6C,
	0x66, 0x60, 0x5A, 0x55, 0x50, 0x4B, 0x47, 0x43, 0x3F, 0x3B, 0x37, 0x34,
]

const frqtabbuzzy_179mhz = [

	0x6C, 0x69, 0x61, 0x5A, 0x55, 0xFE, 0xE6, 0xDA, 0xD1, 0xC5, 0xB9, 0xAD,
	0xA4, 0x9B, 0x95, 0x89, 0x80, 0x7A, 0x71, 0x6E, 0x68, 0x62, 0x5C, 0x53,
	0x50, 0x4D, 0x4A, 0x44, 0x3E, 0x3B, 0x35, 0x32, 0x32, 0x2F, 0x2C, 0x26,
	0x26,
]

const frqtabgritty_179mhz = [

	0xDC, 0xD0, 0xC6, 0xBB, 0xAF, 0xA5, 0x9D, 0x91, 0x8A, 0x82, 0x7B, 0x73,
	0x6C, 0x69, 0x61, 0x5A, 0x55, 0x52, 0x4B, 0x46, 0x43, 0x3F, 0x3C, 0x37,
	0x34, 0x31, 0x2D, 0x2B, 0x28, 0x27, 0x25, 0x22, 0x21, 0x1E, 0x1C, 0x19,
	0x18, 0x16, 0x16, 0x13, 0x12, 0x12, 0x0F, 0x0F, 0x0D, 0x0D, 0x0C, 0x0A,
	0x0A,
]

// 16-bit tables

const frqtabpure_lo = [
	0xB0, 0xC1, 0x27, 0xDE, 0xE1, 0x2B, 0xB9, 0x87, 0x92, 0xD5, 0x4E, 0xF9,
	0xD5, 0xDD, 0x10, 0x6C, 0xED, 0x92, 0x59, 0x40, 0x45, 0x67, 0xA3, 0xF9,
	0x67, 0xEB, 0x85, 0x32, 0xF3, 0xC6, 0xA9, 0x9D, 0x9F, 0xB0, 0xCE, 0xF9,
	0x30, 0x72, 0xBF, 0x16, 0x76, 0xDF, 0x51, 0xCB, 0x4C, 0xD4, 0x64, 0xF9,
	0x94, 0x36, 0xDC, 0x87, 0x37, 0xEC, 0xA5, 0x62, 0x23, 0xE7, 0xAE, 0x79,
	0x47, 0x17, 0xEA, 0xC0,
]
        
const frqtabpure_hi = [
	0x69, 0x63, 0x5E, 0x58, 0x53, 0x4F, 0x4A, 0x46, 0x42, 0x3E, 0x3B, 0x37,
	0x34, 0x31, 0x2F, 0x2C, 0x29, 0x27, 0x25, 0x23, 0x21, 0x1F, 0x1D, 0x1B,
	0x1A, 0x18, 0x17, 0x16, 0x14, 0x13, 0x12, 0x11, 0x10, 0x0F, 0x0E, 0x0D,
	0x0D, 0x0C, 0x0B, 0x0B, 0x0A, 0x09, 0x09, 0x08, 0x08, 0x07, 0x07, 0x06,
	0x06, 0x06, 0x05, 0x05, 0x05, 0x04, 0x04, 0x04, 0x04, 0x03, 0x03, 0x03,
	0x03, 0x03, 0x02, 0x02,
]

const frqtabgritty_lo = [
	0x3A, 0x6C, 0xAC, 0xF5, 0x49, 0xA7, 0x0F, 0x8A, 0xF4, 0x71, 0xF9, 0x86,
	0x26, 0xB2, 0x51, 0xF7, 0xA1, 0x50, 0x04, 0xBC, 0x75, 0x35, 0xF9, 0xC0,
	0x8A, 0x57, 0x27, 0xF8, 0xCD, 0xA4, 0x7D, 0x59, 0x37, 0x17, 0xF9, 0xDB,
	0xC2, 0xA8, 0x8F, 0x78, 0x63, 0x4E, 0x3B, 0x29, 0x18, 0x08, 0xF9, 0xEB,
	0xDC, 0xCF, 0xC4, 0xB8, 0xAE, 0xA2, 0x9A, 0x91, 0x87, 0x81, 0x79, 0x72,
	0x6A, 0x64, 0x5E, 0x5A,
]

const frqtabgritty_hi = [
	0x0E, 0x0D, 0x0C, 0x0B, 0x0B, 0x0A, 0x0A, 0x09, 0x08, 0x08, 0x07, 0x07,
	0x07, 0x06, 0x06, 0x05, 0x05, 0x05, 0x05, 0x04, 0x04, 0x04, 0x03, 0x03,
	0x03, 0x03, 0x03, 0x02, 0x02, 0x02, 0x02, 0x02, 0x02, 0x02, 0x01, 0x01,
	0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x00, 0x00,
	0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
	0x00, 0x00, 0x00, 0x00,
]

// extra tables

const clarinet_lo = [
	0xE2, 0xD6, 0x06, 0x63, 0xFC, 0x95, 0x5B, 0x30, 0x41, 0x70, 0xBD, 0xFB,
	0x75, 0xEF, 0x96, 0x5B, 0xF3, 0xE5, 0x9B, 0xAB, 0x9D, 0xBC, 0xDB, 0xFA,
	0x19, 0x74, 0xCF, 0x1B, 0x76, 0xD1, 0x59, 0xB4, 0x4B, 0xD3, 0x6A, 0xF2,
	0x89, 0x4D, 0xE4, 0x7B, 0x3F, 0x03, 0x9A, 0x5E, 0x22, 0xE6, 0xAA, 0x7D,
	0x41, 0x14, 0xE7, 0xBA, 0x9C, 0x7E, 0x42, 0x24, 0x06, 0xF2, 0xD9, 0xBB,
	0x9D, 0x8E, 0x70, 0x61,
]

const clarinet_hi = [
	0x34, 0x31, 0x2F, 0x2C, 0x29, 0x27, 0x25, 0x23, 0x21, 0x1F, 0x1D, 0x1B,
	0x1A, 0x18, 0x17, 0x16, 0x14, 0x13, 0x12, 0x11, 0x10, 0x0F, 0x0E, 0x0D,
	0x0D, 0x0C, 0x0B, 0x0B, 0x0A, 0x09, 0x09, 0x08, 0x08, 0x07, 0x07, 0x06,
	0x06, 0x06, 0x05, 0x05, 0x05, 0x05, 0x04, 0x04, 0x04, 0x03, 0x03, 0x03,
	0x03, 0x03, 0x02, 0x02, 0x02, 0x02, 0x02, 0x02, 0x02, 0x01, 0x01, 0x01,
	0x01, 0x01, 0x01, 0x01,
]

const VIB_TABLE = [
    [0],
    [1, -1, -1, 1],
    [1, 0, -1, -1, 0, 1],
    [1, 1, 0, -1, -1, -1, -1, 0, 1, 1],
]

const VOLUME_TAB = [
	0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
	0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01,
	0x00, 0x00, 0x00, 0x00, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x02, 0x02, 0x02, 0x02,
	0x00, 0x00, 0x00, 0x01, 0x01, 0x01, 0x01, 0x01, 0x02, 0x02, 0x02, 0x02, 0x02, 0x03, 0x03, 0x03,
	0x00, 0x00, 0x01, 0x01, 0x01, 0x01, 0x02, 0x02, 0x02, 0x02, 0x03, 0x03, 0x03, 0x03, 0x04, 0x04,
	0x00, 0x00, 0x01, 0x01, 0x01, 0x02, 0x02, 0x02, 0x03, 0x03, 0x03, 0x04, 0x04, 0x04, 0x05, 0x05,
	0x00, 0x00, 0x01, 0x01, 0x02, 0x02, 0x02, 0x03, 0x03, 0x04, 0x04, 0x04, 0x05, 0x05, 0x06, 0x06,
	0x00, 0x00, 0x01, 0x01, 0x02, 0x02, 0x03, 0x03, 0x04, 0x04, 0x05, 0x05, 0x06, 0x06, 0x07, 0x07,
	0x00, 0x01, 0x01, 0x02, 0x02, 0x03, 0x03, 0x04, 0x04, 0x05, 0x05, 0x06, 0x06, 0x07, 0x07, 0x08,
	0x00, 0x01, 0x01, 0x02, 0x02, 0x03, 0x04, 0x04, 0x05, 0x05, 0x06, 0x07, 0x07, 0x08, 0x08, 0x09,
	0x00, 0x01, 0x01, 0x02, 0x03, 0x03, 0x04, 0x05, 0x05, 0x06, 0x07, 0x07, 0x08, 0x09, 0x09, 0x0A,
	0x00, 0x01, 0x01, 0x02, 0x03, 0x04, 0x04, 0x05, 0x06, 0x07, 0x07, 0x08, 0x09, 0x0A, 0x0A, 0x0B,
	0x00, 0x01, 0x02, 0x02, 0x03, 0x04, 0x05, 0x06, 0x06, 0x07, 0x08, 0x09, 0x0A, 0x0A, 0x0B, 0x0C,
	0x00, 0x01, 0x02, 0x03, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0A, 0x0A, 0x0B, 0x0C, 0x0D,
	0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x07, 0x08, 0x09, 0x0A, 0x0B, 0x0C, 0x0D, 0x0E,
	0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0A, 0x0B, 0x0C, 0x0D, 0x0E, 0x0F,
]

const noteBaseNames = ['C-', 'C#', 'D-', 'D#', 'E-', 'F-', 'F#', 'G-', 'G#', 'A-', 'A#', 'B-'];
const noteNames = _.times(61,note => `${noteBaseNames[note % 12]}${Math.floor(note/12)+1}`)


class RMTTrack {
    constructor(index, data, trackLength) {
        this.index = index
        this.data = data
        this.steps = []

        var i = 0
        var speed = null

        while(this.steps.length < trackLength) {
            let note = this.data[i] & 0x3f
            let bits67 = ((this.data[i] & 0xc0) >> 6)
            i = (i + 1) % this.data.length

            if(note <= 0x3c) {
                let volume = (this.data[i] & 3) << 2 | bits67
                let instrument = this.data[i++] >> 2
                this.steps.push({name: "note", noteName: noteNames[note], note, instrument, volume, speed})
                speed = null;
            } else if(note == 0x3d) {
                let volume = (this.data[i++] & 3) << 2 | bits67
                this.steps.push({name: "note", volume, speed})  // volume only
                speed = null;
            } else if(note == 0x3e) {
                let pause = bits67
                if(!pause) {
                    pause = this.data[i++];
                }
                for(let n=0; n<pause && this.steps.length < trackLength; n++) {
                    this.steps.push({name: "pause", speed})
                    speed = null
                }
            } else if(note == 0x3f) {
                if(bits67 == 0) {
                    speed = this.data[i++]
                } else if(bits67 == 2) {
                    i = this.data[i]
                } else if(bits67 == 3) {
                    break;
                }
            }
        }
    }
    getEntry(index) {
        return this.steps[index]
    }
    size() {
        return this.steps.length
    }
}

class RMTSong {
    constructor(arrayBuffer) {
        this.tracks = []
        this.instruments = []
        this.trackLists = []

        let data = new Uint8Array(arrayBuffer)
        if(data[0]!=255 || data[1]!=255) {
            throw "invalid format"
        }
        var offs = 2
        var start, end, len
        var blocks = []
        while(offs < data.length - 4) {
            start = data[offs] + 256 * data[offs + 1]
            offs += 2
            end = data[offs] + 256 * data[offs + 1] + 1
            offs += 2
            len = end - start
            let block_data = data.subarray(offs, offs + len)
            blocks.push({offset: start, data: block_data})
            offs += len;
        }
        if(blocks.length == 0) {
            throw "invalid format, no valid blocks"
        }
        if(blocks.length>1) {
            let decoder = new TextDecoder()
            this.names = decoder.decode(blocks[1].data).split("\0")
        } else {
            this.names = []
        }

        this.name = this.names[0] || 'no name'

        let rmt_data = blocks[0].data;
        let rmt_offset = blocks[0].offset;
        if(rmt_data[0] != 82 || rmt_data[1] != 77 || rmt_data[2] != 84) {
            throw "invalid format, no RMT header"
        }
        let n_channels = rmt_data[3] - 48
        if(n_channels != 4 && n_channels != 8) {
            throw "invalid format, wrong number of channels"
        }

        let ptr = offs => rmt_data[offs] + rmt_data[offs + 1] * 256 - rmt_offset

        this.n_channels = n_channels
        this.trackLength = rmt_data[4] || 256
        this.songSpeed = rmt_data[5]
        this.instrumentFreq = rmt_data[6]
        this.formatVersion = rmt_data[7]

        let instrument_pointers_offs = ptr(8)
        let track_pointers_table_lo = ptr(0xa)
        let track_pointers_table_hi = ptr(0xc)
        let song_track_list = ptr(0xe)
        let n_tracks = track_pointers_table_hi - track_pointers_table_lo
        let n_instr = (track_pointers_table_lo - instrument_pointers_offs) / 2

        let track_ptr = i => rmt_data[track_pointers_table_hi + i] * 256 + rmt_data[track_pointers_table_lo + i] - rmt_offset
        for(var i=0; i < n_tracks; i++) {
            let start = track_ptr(i)
            let end = i < n_tracks - 1 ? track_ptr(i+1) : song_track_list;
            if(end < 0) end = song_track_list
            if(start >= 0 && end > start) {
                this.tracks[i] = new RMTTrack(i, rmt_data.subarray(start, end), this.trackLength)
            }
        }
        this.tracks[255] = new RMTTrack(255, new Uint8Array([0x3e + 0x40]), this.trackLength)
        let instr_name_offs = 1;
        for(var i=0; i<n_instr; i++) {
            let instr_offs = ptr(instrument_pointers_offs + i*2)
            if(instr_offs > 0) {
                this.instruments[i] = new RMTInstrument(i, this.names[instr_name_offs++] || '', rmt_data.subarray(instr_offs))
            }
        }
        for(var i = song_track_list; i < rmt_data.length; i += this.n_channels) {
            this.trackLists.push(rmt_data.subarray(i, i + this.n_channels))
        }
    }
}

class RMTInstrument {
    constructor(index, name, data) {
        this.index = index
        this.name = name
        let tend = data[0]
        let trep = data[1]
        let eend = data[2]
        let erep = data[3]
        this.tspd = (data[4] & 0x3f) + 1
        this.tmode = (data[4] >> 6) & 1
        this.ttype = (data[4] >> 7) & 1
        this.audctl = data[5]
        this.vslide = data[6]
        this.vmin = data[7] >> 4  // bits 7-4, what about remaining ones?
        this.delay = data[8]
        this.vibrato = data[9]
        this.fshift = data[0xa]
        this.table = data.subarray(0xc, tend + 1)
        this.envelope = data.subarray(tend + 1, eend + 3 )
        this.tlen = tend - 12 + 1
        this.tgo = trep - 12
        this.elen = ((eend + 3) - (tend + 1)) / 3
        this.ego = (erep - (tend + 1)) / 3
    }
}

class RMTTune {
    constructor(channel, note, instrument) {
        this.instrument = instrument
        this.eff_delay = instrument.delay
        this.note = note
        this.outnote = note
        this.channel = channel < 4 ? channel : channel
        this.regs_offset = channel < 4 ? 0 : 9
        this.epos = 0
        this.tpos = 0
        this.tcnt = 0
        this.is_repeating = false
        this.vib_table = VIB_TABLE[instrument.vibrato]
        this.vib_index = 0
        this.shiftfrq = 0
        this.filter = 1
        this.pokey_idx = channel < 4 ? 0 : 1
        this.table_note = this.instrument.table[this.tpos]
    }

        writeToAudctl(player) {
            let env_idx = this.epos * 3
            let envelope = this.instrument.envelope
            let env_cmd = (envelope[env_idx + 1] >> 4) & 7
            let env_xy = envelope[env_idx + 2]
            var env_dist = ((envelope[env_idx + 1] >> 1) & 7) * 2
            let env_lvol = envelope[env_idx] & 0xf
            let env_rvol = envelope[env_idx] >> 4
            let vol = this.channel < 4 ? env_lvol : env_rvol
            var audc = VOLUME_TAB[player.getChannelVolume(this.channel) << 4 | vol] | (env_dist << 4)
            // cmd 7 sets the instrument audctl, 0x80 SHOULD set Poly9 Noise mode, but it conflicts Volume Only
            // tunes must be edited if they do use Volume Only mode, else the AUDCTL is overwritten
            // TODO: find a way to not fully overwrite this.instrument.audctl, so it is reset every new note
            if(env_cmd == 7) {
                if((env_xy != 0xff) && (env_xy != 0x80)) {
                this.instrument.audctl = env_xy
                }
            }
            player.updatePokeyAudctl(this.pokey_idx, this.instrument.audctl)
        }

    play(player) {
        let env_idx = this.epos * 3
        let envelope = this.instrument.envelope
        let env_lvol = envelope[env_idx] & 0xf
        let env_rvol = envelope[env_idx] >> 4
        var env_dist = ((envelope[env_idx + 1] >> 1) & 7) * 2
        let env_cmd = (envelope[env_idx + 1] >> 4) & 7
        let env_filter = (envelope[env_idx + 1] >> 7) & 1
        let env_portamento = envelope[env_idx + 1] & 1
        let env_xy = envelope[env_idx + 2]
        this.env_dist = env_dist
        this.env_filter = env_filter
        var freq_table = frqtabpure_64khz // default
        let global_audctl = player.getPokeyAudctl(this.pokey_idx)
        
        // Join + 1.79mhz mode, channels 2 or 4
        if((((global_audctl & 0x40) && (global_audctl & 0x10)) && ((this.channel == 1) || (this.channel == 5))) || (((global_audctl & 0x20) && (global_audctl & 0x08)) && ((this.channel == 3) || (this.channel == 7)))) {
            //console.log("Join + 1.79mhz mode detected, Channel", this.channel, "from POKEY", this.pokey_idx)
            switch(env_dist) {
                case 0xe:
                    env_dist = 0xc
                    freq_table = frqtabgritty_hi
                    //console.log("freq_table frqtabgritty_hi loaded in channel", this.channel, "from POKEY", this.pokey_idx)              
                    break
                case 0xa:
                    env_dist = 0xa
                    freq_table = frqtabpure_hi
                    //console.log("freq_table frqtabpure_hi loaded in channel", this.channel, "from POKEY", this.pokey_idx)              
                    break
                /*case 0x6:
                    env_dist = 0xa
                    freq_table = clarinet_hi
                    //console.log("freq_table clarinet_hi loaded in channel", this.channel, "from POKEY", this.pokey_idx)              
                    break*/                
                }
            } 
	// Join + 1.79mhz mode, channels 1 or 3
	else if((((global_audctl & 0x40) && (global_audctl & 0x10)) && ((this.channel == 0) || (this.channel == 4))) || (((global_audctl & 0x20) && (global_audctl & 0x08)) && ((this.channel == 2) || (this.channel == 6)))) {
            //console.log("Join + 1.79mhz mode detected, Channel", this.channel, "from POKEY", this.pokey_idx)
            switch(env_dist) {
                case 0xe:
                    env_dist = 0
                    freq_table = frqtabgritty_lo
                    //console.log("freq_table frqtabgritty_lo loaded in channel", this.channel, "from POKEY", this.pokey_idx, "Setting volume output to 0")
                    if(this.pokey_idx) {
                        env_rvol = 0
                    }
                    else {
                        env_lvol = 0
                    }            
                    break
                case 0xa:
                    env_dist = 0
                    freq_table = frqtabpure_lo
                    //console.log("freq_table frqtabpure_lo loaded in channel", this.channel, "from POKEY", this.pokey_idx, "Setting volume output to 0")
                    if(this.pokey_idx) {
                        env_rvol = 0
                    }
                    else {
                        env_lvol = 0
                    }  
                    break
                /*case 0x6:
                    env_dist = 0xc
                    freq_table = clarinet_lo 
                    //console.log("freq_table clarinet_lo loaded in channel", this.channel, "from POKEY", this.pokey_idx)             
                    break*/                
                }   
            }
	// 1.79mhz mode
	else if((global_audctl & 0x40) && ((this.channel == 0) || (this.channel == 4)) || ((global_audctl & 0x20) && ((this.channel == 2) || (this.channel == 6)))) {
            //console.log("1.79mhz mode detected, Channel", this.channel, "from POKEY", this.pokey_idx)
            switch(env_dist) {
                case 0xe:
                    env_dist = 0xc
                    freq_table = frqtabgritty_179mhz
                    break            
                case 0xc:
                    env_dist = 0xc
                    freq_table = frqtabbuzzy_179mhz
                    break                
                case 0xa:
                    env_dist = 0xa
                    freq_table = frqtabpure_179mhz               
                    break
                case 0x6:
                    env_dist = 0xc
                    freq_table = frqtabbuzzy_179mhz               
                    break
                case 0x2:
                    env_dist = 0x2
                    freq_table = frqtabpoly5_179mhz              
                    break
            }
        }
        // 15khz mode 
        else if(global_audctl & 0x01) {
            //console.log("15khz mode detected, from POKEY", this.pokey_idx)
            switch(env_dist) {
                case 0xe:
                    env_dist = 0xc
                    freq_table = frqtabbuzzy_15khz
                    break 
                case 0xc:
                    env_dist = 0xc
                    freq_table = frqtabbuzzy_15khz
                    break 
                case 0xa:
                    env_dist = 0xa
                    freq_table = frqtabpure_15khz                
                    break
                case 0x6:
                    env_dist = 0xc
                    freq_table = frqtabbuzzy_15khz                
                    break
            }
        }
        // 64khz mode
        else {
            switch(env_dist) {
                case 0xe:
                    env_dist = 0xc
                    freq_table = frqtabgritty_64khz
                    break 
                case 0xc:
                    env_dist = 0xc
                    freq_table = frqtabbuzzy_64khz
                    break                   
                case 0xa:
                    env_dist = 0xa
                    freq_table = frqtabpure_64khz                
                    break
                case 0x6:
                    env_dist = 0xc
                    freq_table = frqtabbuzzy_64khz                
                    break
                case 0x2:
                    env_dist = 0x2
                    freq_table = frqtabpoly5_64khz                
                    break
            }
        }
	//console.log("ch:", this.channel, "audc:", hex2(player.getPokeyAudc(this.channel)), "global audctl:", hex2(player.getPokeyAudctl(this.pokey_idx)), "env_dist", hex2(env_dist), "freq_table[0]:", hex2(freq_table[0]))
        var audf = null
        var note = null

        let vol = this.channel < 4 ? env_lvol : env_rvol
        var audc = VOLUME_TAB[player.getChannelVolume(this.channel) << 4 | vol] | (env_dist << 4)

        this.epos += 1
        if(this.epos >= envelope.length / 3) {
            this.epos = this.instrument.ego
            this.is_repeating = true
        }

        if(this.eff_delay) {
            if(this.eff_delay == 1) {
                this.shiftfrq += this.vib_table[this.vib_index] + this.instrument.fshift
                this.vib_index = (this.vib_index + 1) % this.vib_table.length
            } else {
                this.eff_delay -= 1
            }
        }

        var frqaddcmd2 = 0

        switch(env_cmd) {
            case 0:
                note = (this.note + env_xy) & 0xff
            case 1:
                audf = env_xy
                break;
            case 2:
                frqaddcmd2 = env_xy
                note = this.note
                break;
            case 3:
                this.note = (this.note + env_xy) & 0xff
                note = this.note
            case 4:
                this.shiftfrq += env_xy
                note = this.note
                break
            case 5:
                var portafrqc
                // TODO portamento
                if(this.instrument.ttype == 0) {
                    // cmd5a1
                    note = (this.note + this.table_note) & 0xff
                    if(note > 61) note = 63
                    portafrqc = freq_table[note]
                } else {
                    portafrqc = (freq_table[this.note] + this.table_note) & 0xff
                }
                // cmd5ax
                let portafrqa = !env_xy ? portafrqc : null
                let portaspeed = (env_xy >> 4)
                let portadepth = (env_xy & 0xf)

                player.portamento[this.channel].setup(portafrqc, portafrqa, portaspeed, portadepth)
                // cmd5a
                note = this.note
                break
            case 6:
                this.filter += env_xy
                // TODO ?
                note = this.note
                break
            case 7:
                if ((env_xy == 0xff) || (env_xy == 0x80)){
                    audc |= 0xf0  // volume only
                }
                note = this.note
                break
            default:
                console.warn("unknown command")
                1 / 0
        }
        if(note != null) {
            if(this.instrument.ttype == 0) { // notes
                note = (note + this.table_note) & 0xff
                if(note > 61) {
                    note = 63
                    audc = 0
                }
                this.outnote = note
                audf = (freq_table[note] + frqaddcmd2 + this.shiftfrq) & 0xff
            } else {
                if(note >= 61) {
                    note = 63
                    audc = 0
                }
                audf = (freq_table[note] + frqaddcmd2 + this.table_note + this.shiftfrq) & 0xff
            }
        }
        let frq = player.portamento[this.channel].freq()
        if(env_portamento) {
            audf = (frq + this.shiftfrq) & 0xff
        }

        this.tcnt = (this.tcnt + 1) % this.instrument.tspd
        if(this.tcnt == 0) {
            this.tpos += 1
            if(this.tpos >= this.instrument.table.length) {
                this.tpos = this.instrument.tgo
            }
            if(this.instrument.tmode) {
                this.table_note = (this.table_note + this.instrument.table[this.tpos]) & 0xff
            } else {
                this.table_note = this.instrument.table[this.tpos]
            }
        }

        player.setPokeyAudf(this.channel, audf)
        player.setPokeyAudc(this.channel, audc)
    }
    postPlay(player, prev_audctl) {
        let pokey_channel = this.channel % 4
        if(pokey_channel < 2) {
            let next_ch = this.channel + 2
            if(this.env_filter && player.getPokeyAudc(this.channel) & 0xf) {
                player.setPokeyAudf(next_ch, (player.getPokeyAudf(this.channel) + this.filter) & 0xff)
                player.updatePokeyAudctl(this.pokey_idx, pokey_channel == 0 ? 4 : 2)
            }
        }
        if(pokey_channel == 1 && (player.getPokeyAudctl(this.pokey_idx) == prev_audctl) || pokey_channel == 3) {
            if((this.env_dist == 6) && (player.getPokeyAudc(this.channel) & 0xf) ) {
                player.setPokeyAudf((this.channel - 1), frqtabgritty_lo[this.outnote])
                player.setPokeyAudf(this.channel, frqtabgritty_hi[this.outnote])
                player.updatePokeyAudctl(this.pokey_idx, pokey_channel == 1 ? 0x50 : 0x28)
                if((player.getPokeyAudc(this.channel - 1) & 0x10) == 0) { // audc[ch-1]
                    player.setPokeyAudc(this.channel - 1, 0)
                }
            }
        }
    }
}

function hex2(v) {
    return (v >> 4).toString(16) + (v & 15).toString(16)
}

function lalign(txt, width) {
    return `${txt}       `.substring(0, width)
}

class Portamento {
    constructor() {
        this.frqc = this.frqa = this.speed = this.depth = 0
    }
    setup(frqc, frqa, speed, depth) {
        this.frqc = frqc
        if(frqa != null) {
            this.frqa = frqa
        }
        this.speed = this.speeda = speed
        this.depth = depth
        // console.log(`setupPortamento frqc: ${frqc} frqa: ${frqa} speed: ${speed} depth: ${depth}`)
    }
    freq() {
        if(this.speeda) {
            this.speeda = (this.speeda - 1) & 0xff
            if(!this.speeda) {
                this.speeda = this.speed
                if(this.frqa != this.frqc) {
                    if(this.frqa < this.frqc) {
                        let v = this.frqa + this.depth
                        this.frqa = v >= 256 || v >= this.frqc ? this.frqc : v
                    } else {
                        let v = this.frqa  - this.depth
                        this.frqa = v < 0 || v < this.frqc ? this.frqc : v
                    }
                }
            }
        }
        return this.frqa
    }
}

export class RMTPlayer {
    static PLAYING_LATENCY = 0.1
    static INTERACTIVE_LATENCY = 0.02

    constructor(audioContext, pokeyNode, config) {
        config = config || {}
        this.audioContext = audioContext
        this.pokeyNode = pokeyNode
        this.state = "stopped"
        this.pokeyRegs = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        this.setFrameRate(config.frameRate || 50.0)
    }

    setFrameRate(fps) {
        this.frameRate = fps
        this.frameInterval = 1 / this.frameRate / (this.song && this.song.instrumentFreq || 1)
	this.resetStartTime()
    }

    load(buffer) {
        this.stop();
        let song = this.song = new RMTSong(buffer)
        console.info(song)
        this.songSpeed = song.songSpeed
        this.instruments = song.instruments
        this.frameInterval = 1 / this.frameRate / this.song.instrumentFreq

        this.portamento = []
        for(let i=0; i<this.song.n_channels; i++ ) {
            this.portamento[i] = new Portamento()
        }
        return true
    }

    tune(channel, note, instr, volume) {
        let instrument = this.instruments[instr]
        if(instrument) {
            this.channelTone[channel] = new RMTTune(channel, note, instrument)
        }
        this.channelVolume[channel] = (volume << 8) | 0x7f
    }

    getChannelVolume(channel) {
        let vol = this.channelVolume[channel]
        return isFinite(vol) ? vol >> 8 : 15
    }

    sendEvent(regs) {
        let event = new Event("rmt_player");
        event.data = {
            currentFrame: this.currentFrame,
            instrPos: this.instrPos,
            trackPos: this.trackPos,
            tracksListPos: this.tracksListPos,
            pokeyRegs: regs || null,
            state: this.state,
        }
        window.dispatchEvent(event);
    }
    tick() {
        this.fillBuffer()
    }

    loadTracks() {
        var track_list
        while(true) {
            track_list = this.song.trackLists[this.tracksListPos]
            if(track_list[0] != 0xfe) break;
            console.log("goto", track_list[1])
            this.tracksListPos = track_list[1]
        }
        this.current_tracks = Array.from(track_list).map( track_idx => {
            return this.song.tracks[track_idx]
        })
        this.currentTracksSize = this.current_tracks.reduce(
            (size, track) => Math.min(size, track.size()),
            this.song.trackLength
        )
        console.info(this.currentTracksSize, this.current_tracks)
    }

    loadTracksEntries() {
        // load this.trackPos entries
        let entries = this.current_tracks.map(track => track.getEntry(this.trackPos))
        let entry_txt = entries.map((e) => {
            return (
                lalign(e.noteName || '-', 3)
                + ' '
                + (isFinite(e.instrument) && hex2(e.instrument) || '--')
                + ' '
                + (isFinite(e.volume) && e.volume.toString(16).toUpperCase() || '-')
            )
        }).join(" | ")
        console.log(`#${hex2(this.trackPos)} ${entry_txt}`)
        _.each(entries, (e, channel) => {
            if(e.speed) {
                this.songSpeed = e.speed
            }
            if(e.name == "note") {
                // it may be volume-only note
                // with undefined note && instrument
                this.tune(channel, e.note, e.instrument, e.volume)
            }
        })
    }

    fillBuffer() {
        if(!this.song)
            return;

        let currentTime = this.getCurrentTime();
        while(this.startTime + this.currentFrame * this.frameInterval < currentTime) {
            this.step()
            this.sendEvent(this.pokeyRegs);
            this.currentFrame += 1
            if(this.state != "playing")
                continue;            
            this.instrPos += 1
            if(this.instrPos >= this.songSpeed * this.song.instrumentFreq) {
                this.instrPos = 0
                this.trackPos += 1
                if(this.trackPos >= this.currentTracksSize) {
                    this.trackPos = 0
                    if(!this.repeat_track) {
                        this.tracksListPos += 1
                        if(this.tracksListPos >= this.song.trackLists.length) {
                            this.tracksListPos = 0
			    this.resetStartTime()
                        }
                        this.loadTracks()
                    }
                }
                this.loadTracksEntries()
            }
        }
    }

    fadeVolume(tone) {
        if(tone.is_repeating) {
            let v = this.channelVolume[tone.channel] >> 8
            if(v && v > tone.instrument.vmin) {
                this.channelVolume[tone.channel] -= tone.instrument.vslide
            }
        }
    }

    step() {
        let n_channels = this.song.n_channels;
        this.setPokeyAudctl(0, 0)
        if(n_channels > 4) {
            this.setPokeyAudctl(1, 0)
        }
                // update audctl with values from tone.instrument.audctl
                for(var i=0; i<n_channels; i++) {
            let tone = this.channelTone[i]
            if(tone) {
                tone.writeToAudctl(this)
            }
        }
        for(var i=0; i<n_channels; i++) {
            let tone = this.channelTone[i]
            if(tone) {
                tone.play(this)
                this.fadeVolume(tone)
            }
        }
        let prev_audctl = this.getPokeyAudctl(0)
        let prev_audctl_r
        if(n_channels > 4)
            prev_audctl_r = this.getPokeyAudctl(1)
        for(var i=0; i<n_channels; i++) {
            if(this.channelTone[i]) {
                this.channelTone[i].postPlay(this, i < 4 ? prev_audctl : prev_audctl_r)
            }
        }
        this.sendRegs(this.pokeyRegs)
    }

    resetStartTime(latency) {
        this.latency = latency || RMTPlayer.PLAYING_LATENCY
        this.currentFrame = 0
        this.startTime = this.getCurrentTime()
    }

    getCurrentTime() {
        return this.audioContext.currentTime + this.latency
    }

    play() {
        this.loadTracks()
        this.loadTracksEntries()

	this.resetStartTime()
        this.state = "playing";
        this.fillBuffer();
    }

    pause() {
        this.state = "paused";
        this.loadCurrentFrame();
    }

    setPokeyAudctl(pokey_idx, value) {
        this.pokeyRegs[9 * pokey_idx + 8] = value
    }

    updatePokeyAudctl(pokey_idx, value) {
        this.pokeyRegs[9 * pokey_idx + 8] |= value
    }

    getPokeyAudctl(pokey_idx, value) {
        return this.pokeyRegs[9 * pokey_idx + 8]
    }

    setPokeyAudf(channel, value) {
        let offs = channel < 4 ? 0 : 9
        channel = channel & 3
        this.pokeyRegs[offs + channel * 2] = value
    }

    getPokeyAudf(channel) {
        let offs = channel < 4 ? 0 : 9
        channel = channel & 3
        return this.pokeyRegs[offs + channel * 2]
    }

    setPokeyAudc(channel, value) {
        let offs = channel < 4 ? 0 : 9
        channel = channel & 3
        this.pokeyRegs[offs + channel * 2 + 1] = value
    }

    getPokeyAudc(channel) {
        let offs = channel < 4 ? 0 : 9
        channel = channel & 3
        return this.pokeyRegs[offs + channel * 2 + 1]
    }

    sendRegs(regs) {
	let t = this.startTime + this.currentFrame * this.frameInterval
        let n_regs = this.song && this.song.n_channels == 4 ? 9 : 18
        let msg = regs.slice(0, n_regs).flatMap((v, i) => [i < 9 ? i : i - 9 + 16, v, t])
        this.pokeyNode.port.postMessage(msg);
        this.sendEvent(regs)
    }
    stop() {
        this.state = "stopped";

        this.instrPos = 0
        this.trackPos = 0

        this.channelTone = []
        this.channelVolume = []

        // for debugging
        this.tracksListPos = 0
        this.repeat_track = false

	for(var i=0; i < this.pokeyRegs.length; i++) {
            this.pokeyRegs[i] = 0;
        }
        this.sendRegs(EMPTY_POKEY_REGS)
    }

    prev() {
        if (!this.data.length) return;
        this.pause();
        this.currentFrame = (this.currentFrame + this.frame_cnt - 1) % this.frame_cnt;
        this.loadCurrentFrame();
    }
    next() {
        if (!this.data.length) return;
        this.pause();
        this.currentFrame = (this.currentFrame + 1) % this.frame_cnt;
        this.loadCurrentFrame();
    }
}
