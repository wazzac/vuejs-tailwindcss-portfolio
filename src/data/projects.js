// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
    {
        id: 1,
        title: "Dom Translate",
        category: "Laravel Package",
        img: require("@/assets/images/github-domtranslate.jpg"),
		description: "The Laravel Auto-Translation Package enables seamless multilingual support by allowing you to define phrases for automatic translation within your Laravel application. Using a built-in Blade directive, you can easily mark phrases that need translation before they are displayed to the user. This package simplifies multi-language management.",
		externalLink: "https://github.com/wazzac/domTranslate",
    },
    {
        id: 2,
        title: "Synchronize Model to Crm",
        category: "Laravel Package",
        img: require("@/assets/images/github-syncmodeltocrm.png"),
		description: "Laravel CRM Sync is a powerful package designed to seamlessly integrate and synchronize your Laravel models with multiple CRM systems. This package allows you to define specific model properties that will automatically synchronize with configured CRMs such as HubSpot and PipeDrive, across different environments (e.g., Sandbox, Production).",
		externalLink: "https://github.com/wazzac/sync-model-to-crm",
    }
];

export default projects;
