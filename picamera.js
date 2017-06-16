const sprintf = require('sprintf-js').sprintf; // for format strings

var effects = [
  'none',
  'negative',
  'solarise',
  'sketch',
  'denoise',
  'emboss',
  'oilpaint',
  'hatch',
  'gpen',
  'pastel',
  'watercolour',
  'film',
  'blur',
  'saturation',
  'colourswap',
  'washedout',
  'posterise',
  'colourpoint',
  'colourbalance',
  'cartoon'
];

var modes = [
  'off',
  'auto',
  'night',
  'nightpreview',
  'backlight',
  'spotlight',
  'sports',
  'snow',
  'beach',
  'verylong',
  'fixedfps',
  'antishake',
  'fireworks'
];

var awbValues = [
  'off',
  'auto',
  'sun',
  'cloud',
  'shade',
  'tungsten',
  'fluorescent',
  'incandescent',
  'flash',
  'horizon'
];

class PiCamera {
}

PiCamera.prototype.effect = effects[0];
PiCamera.prototype.exposure = 0;
PiCamera.prototype.mode = modes[0];
PiCamera.prototype.awbMode = awbValues[0];
PiCamera.prototype.exposureString = "0.0";
PiCamera.formatExposureString = function (val) {
  return sprintf("%+.1f", val);
};

PiCamera.allModes = modes;
PiCamera.validExposureMode = function(val) {
  if (modes.includes(val)) {
    return val;
  }
  return modes[0];
}

PiCamera.allEffects = effects;
PiCamera.validEffect = function (val) {
  if (effects.includes(val)) {
    return val;
  }
  return effects[0];
}

PiCamera.allAWBModes = awbValues;
PiCamera.validAWBMode = function (val) {
  if (awbValues.includes(val)) {
    return val;
  }
  return awbValues[0];
}

PiCamera.validExposureValue = function (val) {
  if (isNaN(val)) {
    return 0;
  }
  return val;
}

PiCamera.prototype.setSettings = function (newSettings) {
  if (newSettings.exposure != null) {
    this.exposure = newSettings.exposure
    this.exposureString = PiCamera.formatExposureString(newSettings.exposure);
  }
  if (newSettings.vflip != null) {
    this.vflip = newSettings.vflip;
  }
  if (newSettings.hflip != null) {
    this.hflip = newSettings.hflip;
  }
  if (newSettings.effect != null) {
    this.effect = newSettings.effect;
  }
  if (newSettings.mode != null) {
    this.mode = newSettings.mode;
  }
  if (newSettings.awbMode != null) {
    this.awbMode = newSettings.awbMode;
  }
}

module.exports = PiCamera;