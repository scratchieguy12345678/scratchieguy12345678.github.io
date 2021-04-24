class XtraBlox {
    getInfo() {
        return {
            "id": "XtraBlox",
            "name": "XtraBlox",
            "blocks": [{
                    "opcode": "xor",
                    "blockType": "reporter",
                    "text": "[bool1] xor [bool2]",
                    "arguments": {
                        "bool1": {
                            "type": "Boolean",
                            "defaultValue": ""
                        },
                        "bool2": {
                            "type": "Boolean",
                            "defaultValue": ""
                        },
                    }
                },
            }],
        "menus": { //we will get back to this in a later tutorial
        }
    };
    xor({bool1, bool2}) {
        return string.substring(!bool1 != !bool2);
    };
}
Scratch.extensions.register(new XtraBlocks());

