window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  / Define your Google Tag Manager ID
const googleTagManagerID = ‘G-JE78QWP1CP’;

// Create the first script tag for Google Tag Manager
var gtmScript = document.createElement(‘script’);
gtmScript.id = ‘google-ga-script’;
gtmScript.async = true;
gtmScript.src = ‘https://www.googletagmanager.com/gtag/js?id=’ + googleTagManagerID;

// Append the first script tag to the head
document.head.appendChild(gtmScript);

// Create the inline script
var inlineScript = document.createElement(‘script’);
inlineScript.id = ‘google-ga-datalayer-script’;
inlineScript.text =
`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag(‘js’, new Date());
gtag(‘config’, ‘` +
googleTagManagerID +
`’, {
‘cookie_flags’: ‘SameSite=None;Secure’
});
gtag(‘set’, ‘cookie_flags’, ‘SameSite=None;Secure’);
`;

// Append the inline script to the head
document.head.appendChild(inlineScript);
}

};
