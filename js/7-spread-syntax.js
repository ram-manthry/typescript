const defaultOptions = {
	theme: 'light',
	showNotifications: true,
};

const userOptions = {
	showSidebar: true,
};

// Merge defaultOptions and userOptions using Spread Syntax
const allOptions1 = Object.assign({}, defaultOptions, userOptions);
console.log(allOptions1);

// Merge defaultOptions and userOptions using Spread Syntax
const allOptions2 = { ...defaultOptions, ...userOptions };
console.log(allOptions2);
