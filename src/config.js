const layersOrder = [
    'background',
    'ball',
    'eye color',
    'iris',
    'shine',
    'shine',
    'bottom lid',
    'top lid'
];
  
const format = {
    width: 600,
    height: 600
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 20;

module.exports = { layersOrder, format, rarity, defaultEdition };