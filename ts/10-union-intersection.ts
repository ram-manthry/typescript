let code: string | number;
code = 123; //valid​
code = 'ABC'; //valid

interface RgbDevice {
	colour: string;
	material: string;
}

interface WirelessDevice {
	connection: 'bluetooth' | 'wifi';
	material: string;
}

//intersection type​
type WirelessRgbDevice = WirelessDevice & RgbDevice;

let myKeyboard: WirelessRgbDevice = {
	colour: 'green',
	connection: 'bluetooth',
	material: 'plastic',
};
