(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))r(u);new MutationObserver(u=>{for(const k of u)if(k.type==="childList")for(const I of k.addedNodes)I.tagName==="LINK"&&I.rel==="modulepreload"&&r(I)}).observe(document,{childList:!0,subtree:!0});function t(u){const k={};return u.integrity&&(k.integrity=u.integrity),u.referrerPolicy&&(k.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?k.credentials="include":u.crossOrigin==="anonymous"?k.credentials="omit":k.credentials="same-origin",k}function r(u){if(u.ep)return;u.ep=!0;const k=t(u);fetch(u.href,k)}})();const ke={slide:"slide",cursor:"cursor"},se=["unset","cursor-red-dot","cursor-hand"],B={light:{primary:"#7B0CD8",secondary:"#007ca3",background:"#bbbbbb",slideBackground:"#e2e2e2",exampleColour:"#18be84",exampleColour2:"#007CA3",primaryGradientStop1:"#b616e7",secondaryGradientStop1:"#004257",cardForeground:"#121212",cardBackground:"#cfcfcf",wheelOfFortuneForeground:"#121212",wheelOfFortuneBackground:"#545d6b",code:{tag:"#003342",key:"red",equals:"grey",value:"darkgoldenrod"},d2Code:{tag:"#405f81",key:"#5E5FFF",equals:"#635b6e",value:"#20814d"},illustrationSkin:"#D6AA8D",illustrationSuitTop:"#9e9e9e",illustrationPants:"#35465E",illustrationShoes:"#343434",illustrationHair:"#392F27",illustrationDuckFeather:"#FFF000",illustrationDuckBeak:"#FF8400",illustrationDuckEye:"#000103",illustrationDuckPupil:"#FDFDFD",controlForeground:"#121212",controlBackground:"#f0f0f0",controlHighlight:"#545454",phoneFrame:"#121212",phoneFrameAccent:"#f0f0f0",defaultDelayInMs:500},dark:{primary:"#7B0CD8",secondary:"#007ca3",background:"#343434",slideBackground:"#242424",exampleColour:"#64E9BA",exampleColour2:"#007CA3",primaryGradientStop1:"#b616e7",secondaryGradientStop1:"#004257",cardForeground:"#121212",cardBackground:"#E3E3E3",wheelOfFortuneForeground:"#f0f0f0",wheelOfFortuneBackground:"#35465E",code:{tag:"lightblue",key:"lightcoral",equals:"white",value:"lightyellow"},d2Code:{tag:"#6DA1DC",key:"#5E5FFF",equals:"#C4B3DC",value:"#30C174"},illustrationSkin:"#D6AA8D",illustrationSuitTop:"#CCCCCC",illustrationPants:"#35465E",illustrationShoes:"#343434",illustrationHair:"#392F27",illustrationDuckFeather:"#FFF000",illustrationDuckBeak:"#FF8400",illustrationDuckEye:"#000103",illustrationDuckPupil:"#FDFDFD",controlForeground:"#f0f0f0",controlBackground:"#121212",controlHighlight:"#545454",phoneFrame:"#121212",phoneFrameAccent:"#f0f0f0",defaultDelayInMs:500}},Be={slides:"slides",presenter:"presenter"};var Ce={exports:{}},dt=Ce.exports,je;function nt(){return je||(je=1,function(n){(function(){function a(e){var i={omitExtraWLInCodeBlocks:{defaultValue:!1,describe:"Omit the default extra whiteline added to code blocks",type:"boolean"},noHeaderId:{defaultValue:!1,describe:"Turn on/off generated header id",type:"boolean"},prefixHeaderId:{defaultValue:!1,describe:"Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",type:"string"},rawPrefixHeaderId:{defaultValue:!1,describe:'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',type:"boolean"},ghCompatibleHeaderId:{defaultValue:!1,describe:"Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",type:"boolean"},rawHeaderId:{defaultValue:!1,describe:`Remove only spaces, ' and " from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids`,type:"boolean"},headerLevelStart:{defaultValue:!1,describe:"The header blocks level start",type:"integer"},parseImgDimensions:{defaultValue:!1,describe:"Turn on/off image dimension parsing",type:"boolean"},simplifiedAutoLink:{defaultValue:!1,describe:"Turn on/off GFM autolink style",type:"boolean"},excludeTrailingPunctuationFromURLs:{defaultValue:!1,describe:"Excludes trailing punctuation from links generated with autoLinking",type:"boolean"},literalMidWordUnderscores:{defaultValue:!1,describe:"Parse midword underscores as literal underscores",type:"boolean"},literalMidWordAsterisks:{defaultValue:!1,describe:"Parse midword asterisks as literal asterisks",type:"boolean"},strikethrough:{defaultValue:!1,describe:"Turn on/off strikethrough support",type:"boolean"},tables:{defaultValue:!1,describe:"Turn on/off tables support",type:"boolean"},tablesHeaderId:{defaultValue:!1,describe:"Add an id to table headers",type:"boolean"},ghCodeBlocks:{defaultValue:!0,describe:"Turn on/off GFM fenced code blocks support",type:"boolean"},tasklists:{defaultValue:!1,describe:"Turn on/off GFM tasklist support",type:"boolean"},smoothLivePreview:{defaultValue:!1,describe:"Prevents weird effects in live previews due to incomplete input",type:"boolean"},smartIndentationFix:{defaultValue:!1,describe:"Tries to smartly fix indentation in es6 strings",type:"boolean"},disableForced4SpacesIndentedSublists:{defaultValue:!1,describe:"Disables the requirement of indenting nested sublists by 4 spaces",type:"boolean"},simpleLineBreaks:{defaultValue:!1,describe:"Parses simple line breaks as <br> (GFM Style)",type:"boolean"},requireSpaceBeforeHeadingText:{defaultValue:!1,describe:"Makes adding a space between `#` and the header text mandatory (GFM Style)",type:"boolean"},ghMentions:{defaultValue:!1,describe:"Enables github @mentions",type:"boolean"},ghMentionsLink:{defaultValue:"https://github.com/{u}",describe:"Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",type:"string"},encodeEmails:{defaultValue:!0,describe:"Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",type:"boolean"},openLinksInNewWindow:{defaultValue:!1,describe:"Open all links in new windows",type:"boolean"},backslashEscapesHTMLTags:{defaultValue:!1,describe:"Support for HTML Tag escaping. ex: <div>foo</div>",type:"boolean"},emoji:{defaultValue:!1,describe:"Enable emoji support. Ex: `this is a :smile: emoji`",type:"boolean"},underline:{defaultValue:!1,describe:"Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",type:"boolean"},ellipsis:{defaultValue:!0,describe:"Replaces three dots with the ellipsis unicode character",type:"boolean"},completeHTMLDocument:{defaultValue:!1,describe:"Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",type:"boolean"},metadata:{defaultValue:!1,describe:"Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).",type:"boolean"},splitAdjacentBlockquotes:{defaultValue:!1,describe:"Split adjacent blockquote blocks",type:"boolean"}};if(e===!1)return JSON.parse(JSON.stringify(i));var d={};for(var o in i)i.hasOwnProperty(o)&&(d[o]=i[o].defaultValue);return d}function t(){var e=a(!0),i={};for(var d in e)e.hasOwnProperty(d)&&(i[d]=!0);return i}var r={},u={},k={},I=a(!0),z="vanilla",P={github:{omitExtraWLInCodeBlocks:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,disableForced4SpacesIndentedSublists:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghCompatibleHeaderId:!0,ghMentions:!0,backslashEscapesHTMLTags:!0,emoji:!0,splitAdjacentBlockquotes:!0},original:{noHeaderId:!0,ghCodeBlocks:!1},ghost:{omitExtraWLInCodeBlocks:!0,parseImgDimensions:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,smoothLivePreview:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghMentions:!1,encodeEmails:!0},vanilla:a(!0),allOn:t()};r.helper={},r.extensions={},r.setOption=function(e,i){return I[e]=i,this},r.getOption=function(e){return I[e]},r.getOptions=function(){return I},r.resetOptions=function(){I=a(!0)},r.setFlavor=function(e){if(!P.hasOwnProperty(e))throw Error(e+" flavor was not found");r.resetOptions();var i=P[e];z=e;for(var d in i)i.hasOwnProperty(d)&&(I[d]=i[d])},r.getFlavor=function(){return z},r.getFlavorOptions=function(e){if(P.hasOwnProperty(e))return P[e]},r.getDefaultOptions=function(e){return a(e)},r.subParser=function(e,i){if(r.helper.isString(e))if(typeof i<"u")u[e]=i;else{if(u.hasOwnProperty(e))return u[e];throw Error("SubParser named "+e+" not registered!")}},r.extension=function(e,i){if(!r.helper.isString(e))throw Error("Extension 'name' must be a string");if(e=r.helper.stdExtName(e),r.helper.isUndefined(i)){if(!k.hasOwnProperty(e))throw Error("Extension named "+e+" is not registered!");return k[e]}else{typeof i=="function"&&(i=i()),r.helper.isArray(i)||(i=[i]);var d=G(i,e);if(d.valid)k[e]=i;else throw Error(d.error)}},r.getAllExtensions=function(){return k},r.removeExtension=function(e){delete k[e]},r.resetExtensions=function(){k={}};function G(e,i){var d=i?"Error in "+i+" extension->":"Error in unnamed extension",o={valid:!0,error:""};r.helper.isArray(e)||(e=[e]);for(var s=0;s<e.length;++s){var f=d+" sub-extension "+s+": ",l=e[s];if(typeof l!="object")return o.valid=!1,o.error=f+"must be an object, but "+typeof l+" given",o;if(!r.helper.isString(l.type))return o.valid=!1,o.error=f+'property "type" must be a string, but '+typeof l.type+" given",o;var g=l.type=l.type.toLowerCase();if(g==="language"&&(g=l.type="lang"),g==="html"&&(g=l.type="output"),g!=="lang"&&g!=="output"&&g!=="listener")return o.valid=!1,o.error=f+"type "+g+' is not recognized. Valid values: "lang/language", "output/html" or "listener"',o;if(g==="listener"){if(r.helper.isUndefined(l.listeners))return o.valid=!1,o.error=f+'. Extensions of type "listener" must have a property called "listeners"',o}else if(r.helper.isUndefined(l.filter)&&r.helper.isUndefined(l.regex))return o.valid=!1,o.error=f+g+' extensions must define either a "regex" property or a "filter" method',o;if(l.listeners){if(typeof l.listeners!="object")return o.valid=!1,o.error=f+'"listeners" property must be an object but '+typeof l.listeners+" given",o;for(var $ in l.listeners)if(l.listeners.hasOwnProperty($)&&typeof l.listeners[$]!="function")return o.valid=!1,o.error=f+'"listeners" property must be an hash of [event name]: [callback]. listeners.'+$+" must be a function but "+typeof l.listeners[$]+" given",o}if(l.filter){if(typeof l.filter!="function")return o.valid=!1,o.error=f+'"filter" must be a function, but '+typeof l.filter+" given",o}else if(l.regex){if(r.helper.isString(l.regex)&&(l.regex=new RegExp(l.regex,"g")),!(l.regex instanceof RegExp))return o.valid=!1,o.error=f+'"regex" property must either be a string or a RegExp object, but '+typeof l.regex+" given",o;if(r.helper.isUndefined(l.replace))return o.valid=!1,o.error=f+'"regex" extensions must implement a replace string or function',o}}return o}r.validateExtension=function(e){var i=G(e,null);return i.valid?!0:(console.warn(i.error),!1)},r.hasOwnProperty("helper")||(r.helper={}),r.helper.isString=function(e){return typeof e=="string"||e instanceof String},r.helper.isFunction=function(e){var i={};return e&&i.toString.call(e)==="[object Function]"},r.helper.isArray=function(e){return Array.isArray(e)},r.helper.isUndefined=function(e){return typeof e>"u"},r.helper.forEach=function(e,i){if(r.helper.isUndefined(e))throw new Error("obj param is required");if(r.helper.isUndefined(i))throw new Error("callback param is required");if(!r.helper.isFunction(i))throw new Error("callback param must be a function/closure");if(typeof e.forEach=="function")e.forEach(i);else if(r.helper.isArray(e))for(var d=0;d<e.length;d++)i(e[d],d,e);else if(typeof e=="object")for(var o in e)e.hasOwnProperty(o)&&i(e[o],o,e);else throw new Error("obj does not seem to be an array or an iterable object")},r.helper.stdExtName=function(e){return e.replace(/[_?*+\/\\.^-]/g,"").replace(/\s/g,"").toLowerCase()};function X(e,i){var d=i.charCodeAt(0);return"¨E"+d+"E"}r.helper.escapeCharactersCallback=X,r.helper.escapeCharacters=function(e,i,d){var o="(["+i.replace(/([\[\]\\])/g,"\\$1")+"])";d&&(o="\\\\"+o);var s=new RegExp(o,"g");return e=e.replace(s,X),e},r.helper.unescapeHTMLEntities=function(e){return e.replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")};var R=function(e,i,d,o){var s=o||"",f=s.indexOf("g")>-1,l=new RegExp(i+"|"+d,"g"+s.replace(/g/g,"")),g=new RegExp(i,s.replace(/g/g,"")),$=[],p,h,y,c,b;do for(p=0;y=l.exec(e);)if(g.test(y[0]))p++||(h=l.lastIndex,c=h-y[0].length);else if(p&&!--p){b=y.index+y[0].length;var x={left:{start:c,end:h},match:{start:h,end:y.index},right:{start:y.index,end:b},wholeMatch:{start:c,end:b}};if($.push(x),!f)return $}while(p&&(l.lastIndex=h));return $};r.helper.matchRecursiveRegExp=function(e,i,d,o){for(var s=R(e,i,d,o),f=[],l=0;l<s.length;++l)f.push([e.slice(s[l].wholeMatch.start,s[l].wholeMatch.end),e.slice(s[l].match.start,s[l].match.end),e.slice(s[l].left.start,s[l].left.end),e.slice(s[l].right.start,s[l].right.end)]);return f},r.helper.replaceRecursiveRegExp=function(e,i,d,o,s){if(!r.helper.isFunction(i)){var f=i;i=function(){return f}}var l=R(e,d,o,s),g=e,$=l.length;if($>0){var p=[];l[0].wholeMatch.start!==0&&p.push(e.slice(0,l[0].wholeMatch.start));for(var h=0;h<$;++h)p.push(i(e.slice(l[h].wholeMatch.start,l[h].wholeMatch.end),e.slice(l[h].match.start,l[h].match.end),e.slice(l[h].left.start,l[h].left.end),e.slice(l[h].right.start,l[h].right.end))),h<$-1&&p.push(e.slice(l[h].wholeMatch.end,l[h+1].wholeMatch.start));l[$-1].wholeMatch.end<e.length&&p.push(e.slice(l[$-1].wholeMatch.end)),g=p.join("")}return g},r.helper.regexIndexOf=function(e,i,d){if(!r.helper.isString(e))throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";if(!(i instanceof RegExp))throw"InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";var o=e.substring(d||0).search(i);return o>=0?o+(d||0):o},r.helper.splitAtIndex=function(e,i){if(!r.helper.isString(e))throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";return[e.substring(0,i),e.substring(i)]},r.helper.encodeEmailAddress=function(e){var i=[function(d){return"&#"+d.charCodeAt(0)+";"},function(d){return"&#x"+d.charCodeAt(0).toString(16)+";"},function(d){return d}];return e=e.replace(/./g,function(d){if(d==="@")d=i[Math.floor(Math.random()*2)](d);else{var o=Math.random();d=o>.9?i[2](d):o>.45?i[1](d):i[0](d)}return d}),e},r.helper.padEnd=function(i,d,o){return d=d>>0,o=String(o||" "),i.length>d?String(i):(d=d-i.length,d>o.length&&(o+=o.repeat(d/o.length)),String(i)+o.slice(0,d))},typeof console>"u"&&(console={warn:function(e){alert(e)},log:function(e){alert(e)},error:function(e){throw e}}),r.helper.regexes={asteriskDashAndColon:/([*_:~])/g},r.helper.emojis={"+1":"👍","-1":"👎",100:"💯",1234:"🔢","1st_place_medal":"🥇","2nd_place_medal":"🥈","3rd_place_medal":"🥉","8ball":"🎱",a:"🅰️",ab:"🆎",abc:"🔤",abcd:"🔡",accept:"🉑",aerial_tramway:"🚡",airplane:"✈️",alarm_clock:"⏰",alembic:"⚗️",alien:"👽",ambulance:"🚑",amphora:"🏺",anchor:"⚓️",angel:"👼",anger:"💢",angry:"😠",anguished:"😧",ant:"🐜",apple:"🍎",aquarius:"♒️",aries:"♈️",arrow_backward:"◀️",arrow_double_down:"⏬",arrow_double_up:"⏫",arrow_down:"⬇️",arrow_down_small:"🔽",arrow_forward:"▶️",arrow_heading_down:"⤵️",arrow_heading_up:"⤴️",arrow_left:"⬅️",arrow_lower_left:"↙️",arrow_lower_right:"↘️",arrow_right:"➡️",arrow_right_hook:"↪️",arrow_up:"⬆️",arrow_up_down:"↕️",arrow_up_small:"🔼",arrow_upper_left:"↖️",arrow_upper_right:"↗️",arrows_clockwise:"🔃",arrows_counterclockwise:"🔄",art:"🎨",articulated_lorry:"🚛",artificial_satellite:"🛰",astonished:"😲",athletic_shoe:"👟",atm:"🏧",atom_symbol:"⚛️",avocado:"🥑",b:"🅱️",baby:"👶",baby_bottle:"🍼",baby_chick:"🐤",baby_symbol:"🚼",back:"🔙",bacon:"🥓",badminton:"🏸",baggage_claim:"🛄",baguette_bread:"🥖",balance_scale:"⚖️",balloon:"🎈",ballot_box:"🗳",ballot_box_with_check:"☑️",bamboo:"🎍",banana:"🍌",bangbang:"‼️",bank:"🏦",bar_chart:"📊",barber:"💈",baseball:"⚾️",basketball:"🏀",basketball_man:"⛹️",basketball_woman:"⛹️&zwj;♀️",bat:"🦇",bath:"🛀",bathtub:"🛁",battery:"🔋",beach_umbrella:"🏖",bear:"🐻",bed:"🛏",bee:"🐝",beer:"🍺",beers:"🍻",beetle:"🐞",beginner:"🔰",bell:"🔔",bellhop_bell:"🛎",bento:"🍱",biking_man:"🚴",bike:"🚲",biking_woman:"🚴&zwj;♀️",bikini:"👙",biohazard:"☣️",bird:"🐦",birthday:"🎂",black_circle:"⚫️",black_flag:"🏴",black_heart:"🖤",black_joker:"🃏",black_large_square:"⬛️",black_medium_small_square:"◾️",black_medium_square:"◼️",black_nib:"✒️",black_small_square:"▪️",black_square_button:"🔲",blonde_man:"👱",blonde_woman:"👱&zwj;♀️",blossom:"🌼",blowfish:"🐡",blue_book:"📘",blue_car:"🚙",blue_heart:"💙",blush:"😊",boar:"🐗",boat:"⛵️",bomb:"💣",book:"📖",bookmark:"🔖",bookmark_tabs:"📑",books:"📚",boom:"💥",boot:"👢",bouquet:"💐",bowing_man:"🙇",bow_and_arrow:"🏹",bowing_woman:"🙇&zwj;♀️",bowling:"🎳",boxing_glove:"🥊",boy:"👦",bread:"🍞",bride_with_veil:"👰",bridge_at_night:"🌉",briefcase:"💼",broken_heart:"💔",bug:"🐛",building_construction:"🏗",bulb:"💡",bullettrain_front:"🚅",bullettrain_side:"🚄",burrito:"🌯",bus:"🚌",business_suit_levitating:"🕴",busstop:"🚏",bust_in_silhouette:"👤",busts_in_silhouette:"👥",butterfly:"🦋",cactus:"🌵",cake:"🍰",calendar:"📆",call_me_hand:"🤙",calling:"📲",camel:"🐫",camera:"📷",camera_flash:"📸",camping:"🏕",cancer:"♋️",candle:"🕯",candy:"🍬",canoe:"🛶",capital_abcd:"🔠",capricorn:"♑️",car:"🚗",card_file_box:"🗃",card_index:"📇",card_index_dividers:"🗂",carousel_horse:"🎠",carrot:"🥕",cat:"🐱",cat2:"🐈",cd:"💿",chains:"⛓",champagne:"🍾",chart:"💹",chart_with_downwards_trend:"📉",chart_with_upwards_trend:"📈",checkered_flag:"🏁",cheese:"🧀",cherries:"🍒",cherry_blossom:"🌸",chestnut:"🌰",chicken:"🐔",children_crossing:"🚸",chipmunk:"🐿",chocolate_bar:"🍫",christmas_tree:"🎄",church:"⛪️",cinema:"🎦",circus_tent:"🎪",city_sunrise:"🌇",city_sunset:"🌆",cityscape:"🏙",cl:"🆑",clamp:"🗜",clap:"👏",clapper:"🎬",classical_building:"🏛",clinking_glasses:"🥂",clipboard:"📋",clock1:"🕐",clock10:"🕙",clock1030:"🕥",clock11:"🕚",clock1130:"🕦",clock12:"🕛",clock1230:"🕧",clock130:"🕜",clock2:"🕑",clock230:"🕝",clock3:"🕒",clock330:"🕞",clock4:"🕓",clock430:"🕟",clock5:"🕔",clock530:"🕠",clock6:"🕕",clock630:"🕡",clock7:"🕖",clock730:"🕢",clock8:"🕗",clock830:"🕣",clock9:"🕘",clock930:"🕤",closed_book:"📕",closed_lock_with_key:"🔐",closed_umbrella:"🌂",cloud:"☁️",cloud_with_lightning:"🌩",cloud_with_lightning_and_rain:"⛈",cloud_with_rain:"🌧",cloud_with_snow:"🌨",clown_face:"🤡",clubs:"♣️",cocktail:"🍸",coffee:"☕️",coffin:"⚰️",cold_sweat:"😰",comet:"☄️",computer:"💻",computer_mouse:"🖱",confetti_ball:"🎊",confounded:"😖",confused:"😕",congratulations:"㊗️",construction:"🚧",construction_worker_man:"👷",construction_worker_woman:"👷&zwj;♀️",control_knobs:"🎛",convenience_store:"🏪",cookie:"🍪",cool:"🆒",policeman:"👮",copyright:"©️",corn:"🌽",couch_and_lamp:"🛋",couple:"👫",couple_with_heart_woman_man:"💑",couple_with_heart_man_man:"👨&zwj;❤️&zwj;👨",couple_with_heart_woman_woman:"👩&zwj;❤️&zwj;👩",couplekiss_man_man:"👨&zwj;❤️&zwj;💋&zwj;👨",couplekiss_man_woman:"💏",couplekiss_woman_woman:"👩&zwj;❤️&zwj;💋&zwj;👩",cow:"🐮",cow2:"🐄",cowboy_hat_face:"🤠",crab:"🦀",crayon:"🖍",credit_card:"💳",crescent_moon:"🌙",cricket:"🏏",crocodile:"🐊",croissant:"🥐",crossed_fingers:"🤞",crossed_flags:"🎌",crossed_swords:"⚔️",crown:"👑",cry:"😢",crying_cat_face:"😿",crystal_ball:"🔮",cucumber:"🥒",cupid:"💘",curly_loop:"➰",currency_exchange:"💱",curry:"🍛",custard:"🍮",customs:"🛃",cyclone:"🌀",dagger:"🗡",dancer:"💃",dancing_women:"👯",dancing_men:"👯&zwj;♂️",dango:"🍡",dark_sunglasses:"🕶",dart:"🎯",dash:"💨",date:"📅",deciduous_tree:"🌳",deer:"🦌",department_store:"🏬",derelict_house:"🏚",desert:"🏜",desert_island:"🏝",desktop_computer:"🖥",male_detective:"🕵️",diamond_shape_with_a_dot_inside:"💠",diamonds:"♦️",disappointed:"😞",disappointed_relieved:"😥",dizzy:"💫",dizzy_face:"😵",do_not_litter:"🚯",dog:"🐶",dog2:"🐕",dollar:"💵",dolls:"🎎",dolphin:"🐬",door:"🚪",doughnut:"🍩",dove:"🕊",dragon:"🐉",dragon_face:"🐲",dress:"👗",dromedary_camel:"🐪",drooling_face:"🤤",droplet:"💧",drum:"🥁",duck:"🦆",dvd:"📀","e-mail":"📧",eagle:"🦅",ear:"👂",ear_of_rice:"🌾",earth_africa:"🌍",earth_americas:"🌎",earth_asia:"🌏",egg:"🥚",eggplant:"🍆",eight_pointed_black_star:"✴️",eight_spoked_asterisk:"✳️",electric_plug:"🔌",elephant:"🐘",email:"✉️",end:"🔚",envelope_with_arrow:"📩",euro:"💶",european_castle:"🏰",european_post_office:"🏤",evergreen_tree:"🌲",exclamation:"❗️",expressionless:"😑",eye:"👁",eye_speech_bubble:"👁&zwj;🗨",eyeglasses:"👓",eyes:"👀",face_with_head_bandage:"🤕",face_with_thermometer:"🤒",fist_oncoming:"👊",factory:"🏭",fallen_leaf:"🍂",family_man_woman_boy:"👪",family_man_boy:"👨&zwj;👦",family_man_boy_boy:"👨&zwj;👦&zwj;👦",family_man_girl:"👨&zwj;👧",family_man_girl_boy:"👨&zwj;👧&zwj;👦",family_man_girl_girl:"👨&zwj;👧&zwj;👧",family_man_man_boy:"👨&zwj;👨&zwj;👦",family_man_man_boy_boy:"👨&zwj;👨&zwj;👦&zwj;👦",family_man_man_girl:"👨&zwj;👨&zwj;👧",family_man_man_girl_boy:"👨&zwj;👨&zwj;👧&zwj;👦",family_man_man_girl_girl:"👨&zwj;👨&zwj;👧&zwj;👧",family_man_woman_boy_boy:"👨&zwj;👩&zwj;👦&zwj;👦",family_man_woman_girl:"👨&zwj;👩&zwj;👧",family_man_woman_girl_boy:"👨&zwj;👩&zwj;👧&zwj;👦",family_man_woman_girl_girl:"👨&zwj;👩&zwj;👧&zwj;👧",family_woman_boy:"👩&zwj;👦",family_woman_boy_boy:"👩&zwj;👦&zwj;👦",family_woman_girl:"👩&zwj;👧",family_woman_girl_boy:"👩&zwj;👧&zwj;👦",family_woman_girl_girl:"👩&zwj;👧&zwj;👧",family_woman_woman_boy:"👩&zwj;👩&zwj;👦",family_woman_woman_boy_boy:"👩&zwj;👩&zwj;👦&zwj;👦",family_woman_woman_girl:"👩&zwj;👩&zwj;👧",family_woman_woman_girl_boy:"👩&zwj;👩&zwj;👧&zwj;👦",family_woman_woman_girl_girl:"👩&zwj;👩&zwj;👧&zwj;👧",fast_forward:"⏩",fax:"📠",fearful:"😨",feet:"🐾",female_detective:"🕵️&zwj;♀️",ferris_wheel:"🎡",ferry:"⛴",field_hockey:"🏑",file_cabinet:"🗄",file_folder:"📁",film_projector:"📽",film_strip:"🎞",fire:"🔥",fire_engine:"🚒",fireworks:"🎆",first_quarter_moon:"🌓",first_quarter_moon_with_face:"🌛",fish:"🐟",fish_cake:"🍥",fishing_pole_and_fish:"🎣",fist_raised:"✊",fist_left:"🤛",fist_right:"🤜",flags:"🎏",flashlight:"🔦",fleur_de_lis:"⚜️",flight_arrival:"🛬",flight_departure:"🛫",floppy_disk:"💾",flower_playing_cards:"🎴",flushed:"😳",fog:"🌫",foggy:"🌁",football:"🏈",footprints:"👣",fork_and_knife:"🍴",fountain:"⛲️",fountain_pen:"🖋",four_leaf_clover:"🍀",fox_face:"🦊",framed_picture:"🖼",free:"🆓",fried_egg:"🍳",fried_shrimp:"🍤",fries:"🍟",frog:"🐸",frowning:"😦",frowning_face:"☹️",frowning_man:"🙍&zwj;♂️",frowning_woman:"🙍",middle_finger:"🖕",fuelpump:"⛽️",full_moon:"🌕",full_moon_with_face:"🌝",funeral_urn:"⚱️",game_die:"🎲",gear:"⚙️",gem:"💎",gemini:"♊️",ghost:"👻",gift:"🎁",gift_heart:"💝",girl:"👧",globe_with_meridians:"🌐",goal_net:"🥅",goat:"🐐",golf:"⛳️",golfing_man:"🏌️",golfing_woman:"🏌️&zwj;♀️",gorilla:"🦍",grapes:"🍇",green_apple:"🍏",green_book:"📗",green_heart:"💚",green_salad:"🥗",grey_exclamation:"❕",grey_question:"❔",grimacing:"😬",grin:"😁",grinning:"😀",guardsman:"💂",guardswoman:"💂&zwj;♀️",guitar:"🎸",gun:"🔫",haircut_woman:"💇",haircut_man:"💇&zwj;♂️",hamburger:"🍔",hammer:"🔨",hammer_and_pick:"⚒",hammer_and_wrench:"🛠",hamster:"🐹",hand:"✋",handbag:"👜",handshake:"🤝",hankey:"💩",hatched_chick:"🐥",hatching_chick:"🐣",headphones:"🎧",hear_no_evil:"🙉",heart:"❤️",heart_decoration:"💟",heart_eyes:"😍",heart_eyes_cat:"😻",heartbeat:"💓",heartpulse:"💗",hearts:"♥️",heavy_check_mark:"✔️",heavy_division_sign:"➗",heavy_dollar_sign:"💲",heavy_heart_exclamation:"❣️",heavy_minus_sign:"➖",heavy_multiplication_x:"✖️",heavy_plus_sign:"➕",helicopter:"🚁",herb:"🌿",hibiscus:"🌺",high_brightness:"🔆",high_heel:"👠",hocho:"🔪",hole:"🕳",honey_pot:"🍯",horse:"🐴",horse_racing:"🏇",hospital:"🏥",hot_pepper:"🌶",hotdog:"🌭",hotel:"🏨",hotsprings:"♨️",hourglass:"⌛️",hourglass_flowing_sand:"⏳",house:"🏠",house_with_garden:"🏡",houses:"🏘",hugs:"🤗",hushed:"😯",ice_cream:"🍨",ice_hockey:"🏒",ice_skate:"⛸",icecream:"🍦",id:"🆔",ideograph_advantage:"🉐",imp:"👿",inbox_tray:"📥",incoming_envelope:"📨",tipping_hand_woman:"💁",information_source:"ℹ️",innocent:"😇",interrobang:"⁉️",iphone:"📱",izakaya_lantern:"🏮",jack_o_lantern:"🎃",japan:"🗾",japanese_castle:"🏯",japanese_goblin:"👺",japanese_ogre:"👹",jeans:"👖",joy:"😂",joy_cat:"😹",joystick:"🕹",kaaba:"🕋",key:"🔑",keyboard:"⌨️",keycap_ten:"🔟",kick_scooter:"🛴",kimono:"👘",kiss:"💋",kissing:"😗",kissing_cat:"😽",kissing_closed_eyes:"😚",kissing_heart:"😘",kissing_smiling_eyes:"😙",kiwi_fruit:"🥝",koala:"🐨",koko:"🈁",label:"🏷",large_blue_circle:"🔵",large_blue_diamond:"🔷",large_orange_diamond:"🔶",last_quarter_moon:"🌗",last_quarter_moon_with_face:"🌜",latin_cross:"✝️",laughing:"😆",leaves:"🍃",ledger:"📒",left_luggage:"🛅",left_right_arrow:"↔️",leftwards_arrow_with_hook:"↩️",lemon:"🍋",leo:"♌️",leopard:"🐆",level_slider:"🎚",libra:"♎️",light_rail:"🚈",link:"🔗",lion:"🦁",lips:"👄",lipstick:"💄",lizard:"🦎",lock:"🔒",lock_with_ink_pen:"🔏",lollipop:"🍭",loop:"➿",loud_sound:"🔊",loudspeaker:"📢",love_hotel:"🏩",love_letter:"💌",low_brightness:"🔅",lying_face:"🤥",m:"Ⓜ️",mag:"🔍",mag_right:"🔎",mahjong:"🀄️",mailbox:"📫",mailbox_closed:"📪",mailbox_with_mail:"📬",mailbox_with_no_mail:"📭",man:"👨",man_artist:"👨&zwj;🎨",man_astronaut:"👨&zwj;🚀",man_cartwheeling:"🤸&zwj;♂️",man_cook:"👨&zwj;🍳",man_dancing:"🕺",man_facepalming:"🤦&zwj;♂️",man_factory_worker:"👨&zwj;🏭",man_farmer:"👨&zwj;🌾",man_firefighter:"👨&zwj;🚒",man_health_worker:"👨&zwj;⚕️",man_in_tuxedo:"🤵",man_judge:"👨&zwj;⚖️",man_juggling:"🤹&zwj;♂️",man_mechanic:"👨&zwj;🔧",man_office_worker:"👨&zwj;💼",man_pilot:"👨&zwj;✈️",man_playing_handball:"🤾&zwj;♂️",man_playing_water_polo:"🤽&zwj;♂️",man_scientist:"👨&zwj;🔬",man_shrugging:"🤷&zwj;♂️",man_singer:"👨&zwj;🎤",man_student:"👨&zwj;🎓",man_teacher:"👨&zwj;🏫",man_technologist:"👨&zwj;💻",man_with_gua_pi_mao:"👲",man_with_turban:"👳",tangerine:"🍊",mans_shoe:"👞",mantelpiece_clock:"🕰",maple_leaf:"🍁",martial_arts_uniform:"🥋",mask:"😷",massage_woman:"💆",massage_man:"💆&zwj;♂️",meat_on_bone:"🍖",medal_military:"🎖",medal_sports:"🏅",mega:"📣",melon:"🍈",memo:"📝",men_wrestling:"🤼&zwj;♂️",menorah:"🕎",mens:"🚹",metal:"🤘",metro:"🚇",microphone:"🎤",microscope:"🔬",milk_glass:"🥛",milky_way:"🌌",minibus:"🚐",minidisc:"💽",mobile_phone_off:"📴",money_mouth_face:"🤑",money_with_wings:"💸",moneybag:"💰",monkey:"🐒",monkey_face:"🐵",monorail:"🚝",moon:"🌔",mortar_board:"🎓",mosque:"🕌",motor_boat:"🛥",motor_scooter:"🛵",motorcycle:"🏍",motorway:"🛣",mount_fuji:"🗻",mountain:"⛰",mountain_biking_man:"🚵",mountain_biking_woman:"🚵&zwj;♀️",mountain_cableway:"🚠",mountain_railway:"🚞",mountain_snow:"🏔",mouse:"🐭",mouse2:"🐁",movie_camera:"🎥",moyai:"🗿",mrs_claus:"🤶",muscle:"💪",mushroom:"🍄",musical_keyboard:"🎹",musical_note:"🎵",musical_score:"🎼",mute:"🔇",nail_care:"💅",name_badge:"📛",national_park:"🏞",nauseated_face:"🤢",necktie:"👔",negative_squared_cross_mark:"❎",nerd_face:"🤓",neutral_face:"😐",new:"🆕",new_moon:"🌑",new_moon_with_face:"🌚",newspaper:"📰",newspaper_roll:"🗞",next_track_button:"⏭",ng:"🆖",no_good_man:"🙅&zwj;♂️",no_good_woman:"🙅",night_with_stars:"🌃",no_bell:"🔕",no_bicycles:"🚳",no_entry:"⛔️",no_entry_sign:"🚫",no_mobile_phones:"📵",no_mouth:"😶",no_pedestrians:"🚷",no_smoking:"🚭","non-potable_water":"🚱",nose:"👃",notebook:"📓",notebook_with_decorative_cover:"📔",notes:"🎶",nut_and_bolt:"🔩",o:"⭕️",o2:"🅾️",ocean:"🌊",octopus:"🐙",oden:"🍢",office:"🏢",oil_drum:"🛢",ok:"🆗",ok_hand:"👌",ok_man:"🙆&zwj;♂️",ok_woman:"🙆",old_key:"🗝",older_man:"👴",older_woman:"👵",om:"🕉",on:"🔛",oncoming_automobile:"🚘",oncoming_bus:"🚍",oncoming_police_car:"🚔",oncoming_taxi:"🚖",open_file_folder:"📂",open_hands:"👐",open_mouth:"😮",open_umbrella:"☂️",ophiuchus:"⛎",orange_book:"📙",orthodox_cross:"☦️",outbox_tray:"📤",owl:"🦉",ox:"🐂",package:"📦",page_facing_up:"📄",page_with_curl:"📃",pager:"📟",paintbrush:"🖌",palm_tree:"🌴",pancakes:"🥞",panda_face:"🐼",paperclip:"📎",paperclips:"🖇",parasol_on_ground:"⛱",parking:"🅿️",part_alternation_mark:"〽️",partly_sunny:"⛅️",passenger_ship:"🛳",passport_control:"🛂",pause_button:"⏸",peace_symbol:"☮️",peach:"🍑",peanuts:"🥜",pear:"🍐",pen:"🖊",pencil2:"✏️",penguin:"🐧",pensive:"😔",performing_arts:"🎭",persevere:"😣",person_fencing:"🤺",pouting_woman:"🙎",phone:"☎️",pick:"⛏",pig:"🐷",pig2:"🐖",pig_nose:"🐽",pill:"💊",pineapple:"🍍",ping_pong:"🏓",pisces:"♓️",pizza:"🍕",place_of_worship:"🛐",plate_with_cutlery:"🍽",play_or_pause_button:"⏯",point_down:"👇",point_left:"👈",point_right:"👉",point_up:"☝️",point_up_2:"👆",police_car:"🚓",policewoman:"👮&zwj;♀️",poodle:"🐩",popcorn:"🍿",post_office:"🏣",postal_horn:"📯",postbox:"📮",potable_water:"🚰",potato:"🥔",pouch:"👝",poultry_leg:"🍗",pound:"💷",rage:"😡",pouting_cat:"😾",pouting_man:"🙎&zwj;♂️",pray:"🙏",prayer_beads:"📿",pregnant_woman:"🤰",previous_track_button:"⏮",prince:"🤴",princess:"👸",printer:"🖨",purple_heart:"💜",purse:"👛",pushpin:"📌",put_litter_in_its_place:"🚮",question:"❓",rabbit:"🐰",rabbit2:"🐇",racehorse:"🐎",racing_car:"🏎",radio:"📻",radio_button:"🔘",radioactive:"☢️",railway_car:"🚃",railway_track:"🛤",rainbow:"🌈",rainbow_flag:"🏳️&zwj;🌈",raised_back_of_hand:"🤚",raised_hand_with_fingers_splayed:"🖐",raised_hands:"🙌",raising_hand_woman:"🙋",raising_hand_man:"🙋&zwj;♂️",ram:"🐏",ramen:"🍜",rat:"🐀",record_button:"⏺",recycle:"♻️",red_circle:"🔴",registered:"®️",relaxed:"☺️",relieved:"😌",reminder_ribbon:"🎗",repeat:"🔁",repeat_one:"🔂",rescue_worker_helmet:"⛑",restroom:"🚻",revolving_hearts:"💞",rewind:"⏪",rhinoceros:"🦏",ribbon:"🎀",rice:"🍚",rice_ball:"🍙",rice_cracker:"🍘",rice_scene:"🎑",right_anger_bubble:"🗯",ring:"💍",robot:"🤖",rocket:"🚀",rofl:"🤣",roll_eyes:"🙄",roller_coaster:"🎢",rooster:"🐓",rose:"🌹",rosette:"🏵",rotating_light:"🚨",round_pushpin:"📍",rowing_man:"🚣",rowing_woman:"🚣&zwj;♀️",rugby_football:"🏉",running_man:"🏃",running_shirt_with_sash:"🎽",running_woman:"🏃&zwj;♀️",sa:"🈂️",sagittarius:"♐️",sake:"🍶",sandal:"👡",santa:"🎅",satellite:"📡",saxophone:"🎷",school:"🏫",school_satchel:"🎒",scissors:"✂️",scorpion:"🦂",scorpius:"♏️",scream:"😱",scream_cat:"🙀",scroll:"📜",seat:"💺",secret:"㊙️",see_no_evil:"🙈",seedling:"🌱",selfie:"🤳",shallow_pan_of_food:"🥘",shamrock:"☘️",shark:"🦈",shaved_ice:"🍧",sheep:"🐑",shell:"🐚",shield:"🛡",shinto_shrine:"⛩",ship:"🚢",shirt:"👕",shopping:"🛍",shopping_cart:"🛒",shower:"🚿",shrimp:"🦐",signal_strength:"📶",six_pointed_star:"🔯",ski:"🎿",skier:"⛷",skull:"💀",skull_and_crossbones:"☠️",sleeping:"😴",sleeping_bed:"🛌",sleepy:"😪",slightly_frowning_face:"🙁",slightly_smiling_face:"🙂",slot_machine:"🎰",small_airplane:"🛩",small_blue_diamond:"🔹",small_orange_diamond:"🔸",small_red_triangle:"🔺",small_red_triangle_down:"🔻",smile:"😄",smile_cat:"😸",smiley:"😃",smiley_cat:"😺",smiling_imp:"😈",smirk:"😏",smirk_cat:"😼",smoking:"🚬",snail:"🐌",snake:"🐍",sneezing_face:"🤧",snowboarder:"🏂",snowflake:"❄️",snowman:"⛄️",snowman_with_snow:"☃️",sob:"😭",soccer:"⚽️",soon:"🔜",sos:"🆘",sound:"🔉",space_invader:"👾",spades:"♠️",spaghetti:"🍝",sparkle:"❇️",sparkler:"🎇",sparkles:"✨",sparkling_heart:"💖",speak_no_evil:"🙊",speaker:"🔈",speaking_head:"🗣",speech_balloon:"💬",speedboat:"🚤",spider:"🕷",spider_web:"🕸",spiral_calendar:"🗓",spiral_notepad:"🗒",spoon:"🥄",squid:"🦑",stadium:"🏟",star:"⭐️",star2:"🌟",star_and_crescent:"☪️",star_of_david:"✡️",stars:"🌠",station:"🚉",statue_of_liberty:"🗽",steam_locomotive:"🚂",stew:"🍲",stop_button:"⏹",stop_sign:"🛑",stopwatch:"⏱",straight_ruler:"📏",strawberry:"🍓",stuck_out_tongue:"😛",stuck_out_tongue_closed_eyes:"😝",stuck_out_tongue_winking_eye:"😜",studio_microphone:"🎙",stuffed_flatbread:"🥙",sun_behind_large_cloud:"🌥",sun_behind_rain_cloud:"🌦",sun_behind_small_cloud:"🌤",sun_with_face:"🌞",sunflower:"🌻",sunglasses:"😎",sunny:"☀️",sunrise:"🌅",sunrise_over_mountains:"🌄",surfing_man:"🏄",surfing_woman:"🏄&zwj;♀️",sushi:"🍣",suspension_railway:"🚟",sweat:"😓",sweat_drops:"💦",sweat_smile:"😅",sweet_potato:"🍠",swimming_man:"🏊",swimming_woman:"🏊&zwj;♀️",symbols:"🔣",synagogue:"🕍",syringe:"💉",taco:"🌮",tada:"🎉",tanabata_tree:"🎋",taurus:"♉️",taxi:"🚕",tea:"🍵",telephone_receiver:"📞",telescope:"🔭",tennis:"🎾",tent:"⛺️",thermometer:"🌡",thinking:"🤔",thought_balloon:"💭",ticket:"🎫",tickets:"🎟",tiger:"🐯",tiger2:"🐅",timer_clock:"⏲",tipping_hand_man:"💁&zwj;♂️",tired_face:"😫",tm:"™️",toilet:"🚽",tokyo_tower:"🗼",tomato:"🍅",tongue:"👅",top:"🔝",tophat:"🎩",tornado:"🌪",trackball:"🖲",tractor:"🚜",traffic_light:"🚥",train:"🚋",train2:"🚆",tram:"🚊",triangular_flag_on_post:"🚩",triangular_ruler:"📐",trident:"🔱",triumph:"😤",trolleybus:"🚎",trophy:"🏆",tropical_drink:"🍹",tropical_fish:"🐠",truck:"🚚",trumpet:"🎺",tulip:"🌷",tumbler_glass:"🥃",turkey:"🦃",turtle:"🐢",tv:"📺",twisted_rightwards_arrows:"🔀",two_hearts:"💕",two_men_holding_hands:"👬",two_women_holding_hands:"👭",u5272:"🈹",u5408:"🈴",u55b6:"🈺",u6307:"🈯️",u6708:"🈷️",u6709:"🈶",u6e80:"🈵",u7121:"🈚️",u7533:"🈸",u7981:"🈲",u7a7a:"🈳",umbrella:"☔️",unamused:"😒",underage:"🔞",unicorn:"🦄",unlock:"🔓",up:"🆙",upside_down_face:"🙃",v:"✌️",vertical_traffic_light:"🚦",vhs:"📼",vibration_mode:"📳",video_camera:"📹",video_game:"🎮",violin:"🎻",virgo:"♍️",volcano:"🌋",volleyball:"🏐",vs:"🆚",vulcan_salute:"🖖",walking_man:"🚶",walking_woman:"🚶&zwj;♀️",waning_crescent_moon:"🌘",waning_gibbous_moon:"🌖",warning:"⚠️",wastebasket:"🗑",watch:"⌚️",water_buffalo:"🐃",watermelon:"🍉",wave:"👋",wavy_dash:"〰️",waxing_crescent_moon:"🌒",wc:"🚾",weary:"😩",wedding:"💒",weight_lifting_man:"🏋️",weight_lifting_woman:"🏋️&zwj;♀️",whale:"🐳",whale2:"🐋",wheel_of_dharma:"☸️",wheelchair:"♿️",white_check_mark:"✅",white_circle:"⚪️",white_flag:"🏳️",white_flower:"💮",white_large_square:"⬜️",white_medium_small_square:"◽️",white_medium_square:"◻️",white_small_square:"▫️",white_square_button:"🔳",wilted_flower:"🥀",wind_chime:"🎐",wind_face:"🌬",wine_glass:"🍷",wink:"😉",wolf:"🐺",woman:"👩",woman_artist:"👩&zwj;🎨",woman_astronaut:"👩&zwj;🚀",woman_cartwheeling:"🤸&zwj;♀️",woman_cook:"👩&zwj;🍳",woman_facepalming:"🤦&zwj;♀️",woman_factory_worker:"👩&zwj;🏭",woman_farmer:"👩&zwj;🌾",woman_firefighter:"👩&zwj;🚒",woman_health_worker:"👩&zwj;⚕️",woman_judge:"👩&zwj;⚖️",woman_juggling:"🤹&zwj;♀️",woman_mechanic:"👩&zwj;🔧",woman_office_worker:"👩&zwj;💼",woman_pilot:"👩&zwj;✈️",woman_playing_handball:"🤾&zwj;♀️",woman_playing_water_polo:"🤽&zwj;♀️",woman_scientist:"👩&zwj;🔬",woman_shrugging:"🤷&zwj;♀️",woman_singer:"👩&zwj;🎤",woman_student:"👩&zwj;🎓",woman_teacher:"👩&zwj;🏫",woman_technologist:"👩&zwj;💻",woman_with_turban:"👳&zwj;♀️",womans_clothes:"👚",womans_hat:"👒",women_wrestling:"🤼&zwj;♀️",womens:"🚺",world_map:"🗺",worried:"😟",wrench:"🔧",writing_hand:"✍️",x:"❌",yellow_heart:"💛",yen:"💴",yin_yang:"☯️",yum:"😋",zap:"⚡️",zipper_mouth_face:"🤐",zzz:"💤",octocat:'<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',showdown:`<span style="font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;">S</span>`},r.Converter=function(e){var i={},d=[],o=[],s={},f=z,l={parsed:{},raw:"",format:""};g();function g(){e=e||{};for(var c in I)I.hasOwnProperty(c)&&(i[c]=I[c]);if(typeof e=="object")for(var b in e)e.hasOwnProperty(b)&&(i[b]=e[b]);else throw Error("Converter expects the passed parameter to be an object, but "+typeof e+" was passed instead.");i.extensions&&r.helper.forEach(i.extensions,$)}function $(c,b){if(b=b||null,r.helper.isString(c))if(c=r.helper.stdExtName(c),b=c,r.extensions[c]){console.warn("DEPRECATION WARNING: "+c+" is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"),p(r.extensions[c],c);return}else if(!r.helper.isUndefined(k[c]))c=k[c];else throw Error('Extension "'+c+'" could not be loaded. It was either not found or is not a valid extension.');typeof c=="function"&&(c=c()),r.helper.isArray(c)||(c=[c]);var x=G(c,b);if(!x.valid)throw Error(x.error);for(var C=0;C<c.length;++C){switch(c[C].type){case"lang":d.push(c[C]);break;case"output":o.push(c[C]);break}if(c[C].hasOwnProperty("listeners"))for(var W in c[C].listeners)c[C].listeners.hasOwnProperty(W)&&h(W,c[C].listeners[W])}}function p(c,b){typeof c=="function"&&(c=c(new r.Converter)),r.helper.isArray(c)||(c=[c]);var x=G(c,b);if(!x.valid)throw Error(x.error);for(var C=0;C<c.length;++C)switch(c[C].type){case"lang":d.push(c[C]);break;case"output":o.push(c[C]);break;default:throw Error("Extension loader error: Type unrecognized!!!")}}function h(c,b){if(!r.helper.isString(c))throw Error("Invalid argument in converter.listen() method: name must be a string, but "+typeof c+" given");if(typeof b!="function")throw Error("Invalid argument in converter.listen() method: callback must be a function, but "+typeof b+" given");s.hasOwnProperty(c)||(s[c]=[]),s[c].push(b)}function y(c){var b=c.match(/^\s*/)[0].length,x=new RegExp("^\\s{0,"+b+"}","gm");return c.replace(x,"")}this._dispatch=function(b,x,C,W){if(s.hasOwnProperty(b))for(var w=0;w<s[b].length;++w){var V=s[b][w](b,x,this,C,W);V&&typeof V<"u"&&(x=V)}return x},this.listen=function(c,b){return h(c,b),this},this.makeHtml=function(c){if(!c)return c;var b={gHtmlBlocks:[],gHtmlMdBlocks:[],gHtmlSpans:[],gUrls:{},gTitles:{},gDimensions:{},gListLevel:0,hashLinkCounts:{},langExtensions:d,outputModifiers:o,converter:this,ghCodeBlocks:[],metadata:{parsed:{},raw:"",format:""}};return c=c.replace(/¨/g,"¨T"),c=c.replace(/\$/g,"¨D"),c=c.replace(/\r\n/g,`
`),c=c.replace(/\r/g,`
`),c=c.replace(/\u00A0/g,"&nbsp;"),i.smartIndentationFix&&(c=y(c)),c=`

`+c+`

`,c=r.subParser("detab")(c,i,b),c=c.replace(/^[ \t]+$/mg,""),r.helper.forEach(d,function(x){c=r.subParser("runExtension")(x,c,i,b)}),c=r.subParser("metadata")(c,i,b),c=r.subParser("hashPreCodeTags")(c,i,b),c=r.subParser("githubCodeBlocks")(c,i,b),c=r.subParser("hashHTMLBlocks")(c,i,b),c=r.subParser("hashCodeTags")(c,i,b),c=r.subParser("stripLinkDefinitions")(c,i,b),c=r.subParser("blockGamut")(c,i,b),c=r.subParser("unhashHTMLSpans")(c,i,b),c=r.subParser("unescapeSpecialChars")(c,i,b),c=c.replace(/¨D/g,"$$"),c=c.replace(/¨T/g,"¨"),c=r.subParser("completeHTMLDocument")(c,i,b),r.helper.forEach(o,function(x){c=r.subParser("runExtension")(x,c,i,b)}),l=b.metadata,c},this.makeMarkdown=this.makeMd=function(c,b){if(c=c.replace(/\r\n/g,`
`),c=c.replace(/\r/g,`
`),c=c.replace(/>[ \t]+</,">¨NBSP;<"),!b)if(window&&window.document)b=window.document;else throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");var x=b.createElement("div");x.innerHTML=c;var C={preList:F(x)};M(x);for(var W=x.childNodes,w="",V=0;V<W.length;V++)w+=r.subParser("makeMarkdown.node")(W[V],C);function M(Z){for(var A=0;A<Z.childNodes.length;++A){var L=Z.childNodes[A];L.nodeType===3?!/\S/.test(L.nodeValue)&&!/^[ ]+$/.test(L.nodeValue)?(Z.removeChild(L),--A):(L.nodeValue=L.nodeValue.split(`
`).join(" "),L.nodeValue=L.nodeValue.replace(/(\s)+/g,"$1")):L.nodeType===1&&M(L)}}function F(Z){for(var A=Z.querySelectorAll("pre"),L=[],j=0;j<A.length;++j)if(A[j].childElementCount===1&&A[j].firstChild.tagName.toLowerCase()==="code"){var de=A[j].firstChild.innerHTML.trim(),Q=A[j].firstChild.getAttribute("data-language")||"";if(Q==="")for(var _e=A[j].firstChild.className.split(" "),we=0;we<_e.length;++we){var He=_e[we].match(/^language-(.+)$/);if(He!==null){Q=He[1];break}}de=r.helper.unescapeHTMLEntities(de),L.push(de),A[j].outerHTML='<precode language="'+Q+'" precodenum="'+j.toString()+'"></precode>'}else L.push(A[j].innerHTML),A[j].innerHTML="",A[j].setAttribute("prenum",j.toString());return L}return w},this.setOption=function(c,b){i[c]=b},this.getOption=function(c){return i[c]},this.getOptions=function(){return i},this.addExtension=function(c,b){b=b||null,$(c,b)},this.useExtension=function(c){$(c)},this.setFlavor=function(c){if(!P.hasOwnProperty(c))throw Error(c+" flavor was not found");var b=P[c];f=c;for(var x in b)b.hasOwnProperty(x)&&(i[x]=b[x])},this.getFlavor=function(){return f},this.removeExtension=function(c){r.helper.isArray(c)||(c=[c]);for(var b=0;b<c.length;++b){for(var x=c[b],C=0;C<d.length;++C)d[C]===x&&d.splice(C,1);for(var W=0;W<o.length;++W)o[W]===x&&o.splice(W,1)}},this.getAllExtensions=function(){return{language:d,output:o}},this.getMetadata=function(c){return c?l.raw:l.parsed},this.getMetadataFormat=function(){return l.format},this._setMetadataPair=function(c,b){l.parsed[c]=b},this._setMetadataFormat=function(c){l.format=c},this._setMetadataRaw=function(c){l.raw=c}},r.subParser("anchors",function(e,i,d){e=d.converter._dispatch("anchors.before",e,i,d);var o=function(s,f,l,g,$,p,h){if(r.helper.isUndefined(h)&&(h=""),l=l.toLowerCase(),s.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)>-1)g="";else if(!g)if(l||(l=f.toLowerCase().replace(/ ?\n/g," ")),g="#"+l,!r.helper.isUndefined(d.gUrls[l]))g=d.gUrls[l],r.helper.isUndefined(d.gTitles[l])||(h=d.gTitles[l]);else return s;g=g.replace(r.helper.regexes.asteriskDashAndColon,r.helper.escapeCharactersCallback);var y='<a href="'+g+'"';return h!==""&&h!==null&&(h=h.replace(/"/g,"&quot;"),h=h.replace(r.helper.regexes.asteriskDashAndColon,r.helper.escapeCharactersCallback),y+=' title="'+h+'"'),i.openLinksInNewWindow&&!/^#/.test(g)&&(y+=' rel="noopener noreferrer" target="¨E95Eblank"'),y+=">"+f+"</a>",y};return e=e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g,o),e=e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,o),e=e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,o),e=e.replace(/\[([^\[\]]+)]()()()()()/g,o),i.ghMentions&&(e=e.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi,function(s,f,l,g,$){if(l==="\\")return f+g;if(!r.helper.isString(i.ghMentionsLink))throw new Error("ghMentionsLink option must be a string");var p=i.ghMentionsLink.replace(/\{u}/g,$),h="";return i.openLinksInNewWindow&&(h=' rel="noopener noreferrer" target="¨E95Eblank"'),f+'<a href="'+p+'"'+h+">"+g+"</a>"})),e=d.converter._dispatch("anchors.after",e,i,d),e});var ie=/([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi,D=/([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi,oe=/()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi,te=/(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi,ae=/<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,ue=function(e){return function(i,d,o,s,f,l,g){o=o.replace(r.helper.regexes.asteriskDashAndColon,r.helper.escapeCharactersCallback);var $=o,p="",h="",y=d||"",c=g||"";return/^www\./i.test(o)&&(o=o.replace(/^www\./i,"http://www.")),e.excludeTrailingPunctuationFromURLs&&l&&(p=l),e.openLinksInNewWindow&&(h=' rel="noopener noreferrer" target="¨E95Eblank"'),y+'<a href="'+o+'"'+h+">"+$+"</a>"+p+c}},J=function(e,i){return function(d,o,s){var f="mailto:";return o=o||"",s=r.subParser("unescapeSpecialChars")(s,e,i),e.encodeEmails?(f=r.helper.encodeEmailAddress(f+s),s=r.helper.encodeEmailAddress(s)):f=f+s,o+'<a href="'+f+'">'+s+"</a>"}};r.subParser("autoLinks",function(e,i,d){return e=d.converter._dispatch("autoLinks.before",e,i,d),e=e.replace(oe,ue(i)),e=e.replace(ae,J(i,d)),e=d.converter._dispatch("autoLinks.after",e,i,d),e}),r.subParser("simplifiedAutoLinks",function(e,i,d){return i.simplifiedAutoLink&&(e=d.converter._dispatch("simplifiedAutoLinks.before",e,i,d),i.excludeTrailingPunctuationFromURLs?e=e.replace(D,ue(i)):e=e.replace(ie,ue(i)),e=e.replace(te,J(i,d)),e=d.converter._dispatch("simplifiedAutoLinks.after",e,i,d)),e}),r.subParser("blockGamut",function(e,i,d){return e=d.converter._dispatch("blockGamut.before",e,i,d),e=r.subParser("blockQuotes")(e,i,d),e=r.subParser("headers")(e,i,d),e=r.subParser("horizontalRule")(e,i,d),e=r.subParser("lists")(e,i,d),e=r.subParser("codeBlocks")(e,i,d),e=r.subParser("tables")(e,i,d),e=r.subParser("hashHTMLBlocks")(e,i,d),e=r.subParser("paragraphs")(e,i,d),e=d.converter._dispatch("blockGamut.after",e,i,d),e}),r.subParser("blockQuotes",function(e,i,d){e=d.converter._dispatch("blockQuotes.before",e,i,d),e=e+`

`;var o=/(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;return i.splitAdjacentBlockquotes&&(o=/^ {0,3}>[\s\S]*?(?:\n\n)/gm),e=e.replace(o,function(s){return s=s.replace(/^[ \t]*>[ \t]?/gm,""),s=s.replace(/¨0/g,""),s=s.replace(/^[ \t]+$/gm,""),s=r.subParser("githubCodeBlocks")(s,i,d),s=r.subParser("blockGamut")(s,i,d),s=s.replace(/(^|\n)/g,"$1  "),s=s.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(f,l){var g=l;return g=g.replace(/^  /mg,"¨0"),g=g.replace(/¨0/g,""),g}),r.subParser("hashBlock")(`<blockquote>
`+s+`
</blockquote>`,i,d)}),e=d.converter._dispatch("blockQuotes.after",e,i,d),e}),r.subParser("codeBlocks",function(e,i,d){e=d.converter._dispatch("codeBlocks.before",e,i,d),e+="¨0";var o=/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;return e=e.replace(o,function(s,f,l){var g=f,$=l,p=`
`;return g=r.subParser("outdent")(g,i,d),g=r.subParser("encodeCode")(g,i,d),g=r.subParser("detab")(g,i,d),g=g.replace(/^\n+/g,""),g=g.replace(/\n+$/g,""),i.omitExtraWLInCodeBlocks&&(p=""),g="<pre><code>"+g+p+"</code></pre>",r.subParser("hashBlock")(g,i,d)+$}),e=e.replace(/¨0/,""),e=d.converter._dispatch("codeBlocks.after",e,i,d),e}),r.subParser("codeSpans",function(e,i,d){return e=d.converter._dispatch("codeSpans.before",e,i,d),typeof e>"u"&&(e=""),e=e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(o,s,f,l){var g=l;return g=g.replace(/^([ \t]*)/g,""),g=g.replace(/[ \t]*$/g,""),g=r.subParser("encodeCode")(g,i,d),g=s+"<code>"+g+"</code>",g=r.subParser("hashHTMLSpans")(g,i,d),g}),e=d.converter._dispatch("codeSpans.after",e,i,d),e}),r.subParser("completeHTMLDocument",function(e,i,d){if(!i.completeHTMLDocument)return e;e=d.converter._dispatch("completeHTMLDocument.before",e,i,d);var o="html",s=`<!DOCTYPE HTML>
`,f="",l=`<meta charset="utf-8">
`,g="",$="";typeof d.metadata.parsed.doctype<"u"&&(s="<!DOCTYPE "+d.metadata.parsed.doctype+`>
`,o=d.metadata.parsed.doctype.toString().toLowerCase(),(o==="html"||o==="html5")&&(l='<meta charset="utf-8">'));for(var p in d.metadata.parsed)if(d.metadata.parsed.hasOwnProperty(p))switch(p.toLowerCase()){case"doctype":break;case"title":f="<title>"+d.metadata.parsed.title+`</title>
`;break;case"charset":o==="html"||o==="html5"?l='<meta charset="'+d.metadata.parsed.charset+`">
`:l='<meta name="charset" content="'+d.metadata.parsed.charset+`">
`;break;case"language":case"lang":g=' lang="'+d.metadata.parsed[p]+'"',$+='<meta name="'+p+'" content="'+d.metadata.parsed[p]+`">
`;break;default:$+='<meta name="'+p+'" content="'+d.metadata.parsed[p]+`">
`}return e=s+"<html"+g+`>
<head>
`+f+l+$+`</head>
<body>
`+e.trim()+`
</body>
</html>`,e=d.converter._dispatch("completeHTMLDocument.after",e,i,d),e}),r.subParser("detab",function(e,i,d){return e=d.converter._dispatch("detab.before",e,i,d),e=e.replace(/\t(?=\t)/g,"    "),e=e.replace(/\t/g,"¨A¨B"),e=e.replace(/¨B(.+?)¨A/g,function(o,s){for(var f=s,l=4-f.length%4,g=0;g<l;g++)f+=" ";return f}),e=e.replace(/¨A/g,"    "),e=e.replace(/¨B/g,""),e=d.converter._dispatch("detab.after",e,i,d),e}),r.subParser("ellipsis",function(e,i,d){return i.ellipsis&&(e=d.converter._dispatch("ellipsis.before",e,i,d),e=e.replace(/\.\.\./g,"…"),e=d.converter._dispatch("ellipsis.after",e,i,d)),e}),r.subParser("emoji",function(e,i,d){if(!i.emoji)return e;e=d.converter._dispatch("emoji.before",e,i,d);var o=/:([\S]+?):/g;return e=e.replace(o,function(s,f){return r.helper.emojis.hasOwnProperty(f)?r.helper.emojis[f]:s}),e=d.converter._dispatch("emoji.after",e,i,d),e}),r.subParser("encodeAmpsAndAngles",function(e,i,d){return e=d.converter._dispatch("encodeAmpsAndAngles.before",e,i,d),e=e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),e=e.replace(/<(?![a-z\/?$!])/gi,"&lt;"),e=e.replace(/</g,"&lt;"),e=e.replace(/>/g,"&gt;"),e=d.converter._dispatch("encodeAmpsAndAngles.after",e,i,d),e}),r.subParser("encodeBackslashEscapes",function(e,i,d){return e=d.converter._dispatch("encodeBackslashEscapes.before",e,i,d),e=e.replace(/\\(\\)/g,r.helper.escapeCharactersCallback),e=e.replace(/\\([`*_{}\[\]()>#+.!~=|:-])/g,r.helper.escapeCharactersCallback),e=d.converter._dispatch("encodeBackslashEscapes.after",e,i,d),e}),r.subParser("encodeCode",function(e,i,d){return e=d.converter._dispatch("encodeCode.before",e,i,d),e=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/([*_{}\[\]\\=~-])/g,r.helper.escapeCharactersCallback),e=d.converter._dispatch("encodeCode.after",e,i,d),e}),r.subParser("escapeSpecialCharsWithinTagAttributes",function(e,i,d){e=d.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before",e,i,d);var o=/<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi,s=/<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;return e=e.replace(o,function(f){return f.replace(/(.)<\/?code>(?=.)/g,"$1`").replace(/([\\`*_~=|])/g,r.helper.escapeCharactersCallback)}),e=e.replace(s,function(f){return f.replace(/([\\`*_~=|])/g,r.helper.escapeCharactersCallback)}),e=d.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after",e,i,d),e}),r.subParser("githubCodeBlocks",function(e,i,d){return i.ghCodeBlocks?(e=d.converter._dispatch("githubCodeBlocks.before",e,i,d),e+="¨0",e=e.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g,function(o,s,f,l){var g=i.omitExtraWLInCodeBlocks?"":`
`;return l=r.subParser("encodeCode")(l,i,d),l=r.subParser("detab")(l,i,d),l=l.replace(/^\n+/g,""),l=l.replace(/\n+$/g,""),l="<pre><code"+(f?' class="'+f+" language-"+f+'"':"")+">"+l+g+"</code></pre>",l=r.subParser("hashBlock")(l,i,d),`

¨G`+(d.ghCodeBlocks.push({text:o,codeblock:l})-1)+`G

`}),e=e.replace(/¨0/,""),d.converter._dispatch("githubCodeBlocks.after",e,i,d)):e}),r.subParser("hashBlock",function(e,i,d){return e=d.converter._dispatch("hashBlock.before",e,i,d),e=e.replace(/(^\n+|\n+$)/g,""),e=`

¨K`+(d.gHtmlBlocks.push(e)-1)+`K

`,e=d.converter._dispatch("hashBlock.after",e,i,d),e}),r.subParser("hashCodeTags",function(e,i,d){e=d.converter._dispatch("hashCodeTags.before",e,i,d);var o=function(s,f,l,g){var $=l+r.subParser("encodeCode")(f,i,d)+g;return"¨C"+(d.gHtmlSpans.push($)-1)+"C"};return e=r.helper.replaceRecursiveRegExp(e,o,"<code\\b[^>]*>","</code>","gim"),e=d.converter._dispatch("hashCodeTags.after",e,i,d),e}),r.subParser("hashElement",function(e,i,d){return function(o,s){var f=s;return f=f.replace(/\n\n/g,`
`),f=f.replace(/^\n/,""),f=f.replace(/\n+$/g,""),f=`

¨K`+(d.gHtmlBlocks.push(f)-1)+`K

`,f}}),r.subParser("hashHTMLBlocks",function(e,i,d){e=d.converter._dispatch("hashHTMLBlocks.before",e,i,d);var o=["pre","div","h1","h2","h3","h4","h5","h6","blockquote","table","dl","ol","ul","script","noscript","form","fieldset","iframe","math","style","section","header","footer","nav","article","aside","address","audio","canvas","figure","hgroup","output","video","p"],s=function(c,b,x,C){var W=c;return x.search(/\bmarkdown\b/)!==-1&&(W=x+d.converter.makeHtml(b)+C),`

¨K`+(d.gHtmlBlocks.push(W)-1)+`K

`};i.backslashEscapesHTMLTags&&(e=e.replace(/\\<(\/?[^>]+?)>/g,function(c,b){return"&lt;"+b+"&gt;"}));for(var f=0;f<o.length;++f)for(var l,g=new RegExp("^ {0,3}(<"+o[f]+"\\b[^>]*>)","im"),$="<"+o[f]+"\\b[^>]*>",p="</"+o[f]+">";(l=r.helper.regexIndexOf(e,g))!==-1;){var h=r.helper.splitAtIndex(e,l),y=r.helper.replaceRecursiveRegExp(h[1],s,$,p,"im");if(y===h[1])break;e=h[0].concat(y)}return e=e.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,r.subParser("hashElement")(e,i,d)),e=r.helper.replaceRecursiveRegExp(e,function(c){return`

¨K`+(d.gHtmlBlocks.push(c)-1)+`K

`},"^ {0,3}<!--","-->","gm"),e=e.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,r.subParser("hashElement")(e,i,d)),e=d.converter._dispatch("hashHTMLBlocks.after",e,i,d),e}),r.subParser("hashHTMLSpans",function(e,i,d){e=d.converter._dispatch("hashHTMLSpans.before",e,i,d);function o(s){return"¨C"+(d.gHtmlSpans.push(s)-1)+"C"}return e=e.replace(/<[^>]+?\/>/gi,function(s){return o(s)}),e=e.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g,function(s){return o(s)}),e=e.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g,function(s){return o(s)}),e=e.replace(/<[^>]+?>/gi,function(s){return o(s)}),e=d.converter._dispatch("hashHTMLSpans.after",e,i,d),e}),r.subParser("unhashHTMLSpans",function(e,i,d){e=d.converter._dispatch("unhashHTMLSpans.before",e,i,d);for(var o=0;o<d.gHtmlSpans.length;++o){for(var s=d.gHtmlSpans[o],f=0;/¨C(\d+)C/.test(s);){var l=RegExp.$1;if(s=s.replace("¨C"+l+"C",d.gHtmlSpans[l]),f===10){console.error("maximum nesting of 10 spans reached!!!");break}++f}e=e.replace("¨C"+o+"C",s)}return e=d.converter._dispatch("unhashHTMLSpans.after",e,i,d),e}),r.subParser("hashPreCodeTags",function(e,i,d){e=d.converter._dispatch("hashPreCodeTags.before",e,i,d);var o=function(s,f,l,g){var $=l+r.subParser("encodeCode")(f,i,d)+g;return`

¨G`+(d.ghCodeBlocks.push({text:s,codeblock:$})-1)+`G

`};return e=r.helper.replaceRecursiveRegExp(e,o,"^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>","^ {0,3}</code>\\s*</pre>","gim"),e=d.converter._dispatch("hashPreCodeTags.after",e,i,d),e}),r.subParser("headers",function(e,i,d){e=d.converter._dispatch("headers.before",e,i,d);var o=isNaN(parseInt(i.headerLevelStart))?1:parseInt(i.headerLevelStart),s=i.smoothLivePreview?/^(.+)[ \t]*\n={2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n=+[ \t]*\n+/gm,f=i.smoothLivePreview?/^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n-+[ \t]*\n+/gm;e=e.replace(s,function($,p){var h=r.subParser("spanGamut")(p,i,d),y=i.noHeaderId?"":' id="'+g(p)+'"',c=o,b="<h"+c+y+">"+h+"</h"+c+">";return r.subParser("hashBlock")(b,i,d)}),e=e.replace(f,function($,p){var h=r.subParser("spanGamut")(p,i,d),y=i.noHeaderId?"":' id="'+g(p)+'"',c=o+1,b="<h"+c+y+">"+h+"</h"+c+">";return r.subParser("hashBlock")(b,i,d)});var l=i.requireSpaceBeforeHeadingText?/^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm:/^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;e=e.replace(l,function($,p,h){var y=h;i.customizedHeaderId&&(y=h.replace(/\s?\{([^{]+?)}\s*$/,""));var c=r.subParser("spanGamut")(y,i,d),b=i.noHeaderId?"":' id="'+g(h)+'"',x=o-1+p.length,C="<h"+x+b+">"+c+"</h"+x+">";return r.subParser("hashBlock")(C,i,d)});function g($){var p,h;if(i.customizedHeaderId){var y=$.match(/\{([^{]+?)}\s*$/);y&&y[1]&&($=y[1])}return p=$,r.helper.isString(i.prefixHeaderId)?h=i.prefixHeaderId:i.prefixHeaderId===!0?h="section-":h="",i.rawPrefixHeaderId||(p=h+p),i.ghCompatibleHeaderId?p=p.replace(/ /g,"-").replace(/&amp;/g,"").replace(/¨T/g,"").replace(/¨D/g,"").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g,"").toLowerCase():i.rawHeaderId?p=p.replace(/ /g,"-").replace(/&amp;/g,"&").replace(/¨T/g,"¨").replace(/¨D/g,"$").replace(/["']/g,"-").toLowerCase():p=p.replace(/[^\w]/g,"").toLowerCase(),i.rawPrefixHeaderId&&(p=h+p),d.hashLinkCounts[p]?p=p+"-"+d.hashLinkCounts[p]++:d.hashLinkCounts[p]=1,p}return e=d.converter._dispatch("headers.after",e,i,d),e}),r.subParser("horizontalRule",function(e,i,d){e=d.converter._dispatch("horizontalRule.before",e,i,d);var o=r.subParser("hashBlock")("<hr />",i,d);return e=e.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm,o),e=e.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm,o),e=e.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm,o),e=d.converter._dispatch("horizontalRule.after",e,i,d),e}),r.subParser("images",function(e,i,d){e=d.converter._dispatch("images.before",e,i,d);var o=/!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,s=/!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g,f=/!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,l=/!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g,g=/!\[([^\[\]]+)]()()()()()/g;function $(h,y,c,b,x,C,W,w){return b=b.replace(/\s/g,""),p(h,y,c,b,x,C,W,w)}function p(h,y,c,b,x,C,W,w){var V=d.gUrls,M=d.gTitles,F=d.gDimensions;if(c=c.toLowerCase(),w||(w=""),h.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)>-1)b="";else if(b===""||b===null)if((c===""||c===null)&&(c=y.toLowerCase().replace(/ ?\n/g," ")),b="#"+c,!r.helper.isUndefined(V[c]))b=V[c],r.helper.isUndefined(M[c])||(w=M[c]),r.helper.isUndefined(F[c])||(x=F[c].width,C=F[c].height);else return h;y=y.replace(/"/g,"&quot;").replace(r.helper.regexes.asteriskDashAndColon,r.helper.escapeCharactersCallback),b=b.replace(r.helper.regexes.asteriskDashAndColon,r.helper.escapeCharactersCallback);var Z='<img src="'+b+'" alt="'+y+'"';return w&&r.helper.isString(w)&&(w=w.replace(/"/g,"&quot;").replace(r.helper.regexes.asteriskDashAndColon,r.helper.escapeCharactersCallback),Z+=' title="'+w+'"'),x&&C&&(x=x==="*"?"auto":x,C=C==="*"?"auto":C,Z+=' width="'+x+'"',Z+=' height="'+C+'"'),Z+=" />",Z}return e=e.replace(l,p),e=e.replace(f,$),e=e.replace(s,p),e=e.replace(o,p),e=e.replace(g,p),e=d.converter._dispatch("images.after",e,i,d),e}),r.subParser("italicsAndBold",function(e,i,d){e=d.converter._dispatch("italicsAndBold.before",e,i,d);function o(s,f,l){return f+s+l}return i.literalMidWordUnderscores?(e=e.replace(/\b___(\S[\s\S]*?)___\b/g,function(s,f){return o(f,"<strong><em>","</em></strong>")}),e=e.replace(/\b__(\S[\s\S]*?)__\b/g,function(s,f){return o(f,"<strong>","</strong>")}),e=e.replace(/\b_(\S[\s\S]*?)_\b/g,function(s,f){return o(f,"<em>","</em>")})):(e=e.replace(/___(\S[\s\S]*?)___/g,function(s,f){return/\S$/.test(f)?o(f,"<strong><em>","</em></strong>"):s}),e=e.replace(/__(\S[\s\S]*?)__/g,function(s,f){return/\S$/.test(f)?o(f,"<strong>","</strong>"):s}),e=e.replace(/_([^\s_][\s\S]*?)_/g,function(s,f){return/\S$/.test(f)?o(f,"<em>","</em>"):s})),i.literalMidWordAsterisks?(e=e.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g,function(s,f,l){return o(l,f+"<strong><em>","</em></strong>")}),e=e.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g,function(s,f,l){return o(l,f+"<strong>","</strong>")}),e=e.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g,function(s,f,l){return o(l,f+"<em>","</em>")})):(e=e.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g,function(s,f){return/\S$/.test(f)?o(f,"<strong><em>","</em></strong>"):s}),e=e.replace(/\*\*(\S[\s\S]*?)\*\*/g,function(s,f){return/\S$/.test(f)?o(f,"<strong>","</strong>"):s}),e=e.replace(/\*([^\s*][\s\S]*?)\*/g,function(s,f){return/\S$/.test(f)?o(f,"<em>","</em>"):s})),e=d.converter._dispatch("italicsAndBold.after",e,i,d),e}),r.subParser("lists",function(e,i,d){function o(l,g){d.gListLevel++,l=l.replace(/\n{2,}$/,`
`),l+="¨0";var $=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,p=/\n[ \t]*\n(?!¨0)/.test(l);return i.disableForced4SpacesIndentedSublists&&($=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm),l=l.replace($,function(h,y,c,b,x,C,W){W=W&&W.trim()!=="";var w=r.subParser("outdent")(x,i,d),V="";return C&&i.tasklists&&(V=' class="task-list-item" style="list-style-type: none;"',w=w.replace(/^[ \t]*\[(x|X| )?]/m,function(){var M='<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';return W&&(M+=" checked"),M+=">",M})),w=w.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g,function(M){return"¨A"+M}),y||w.search(/\n{2,}/)>-1?(w=r.subParser("githubCodeBlocks")(w,i,d),w=r.subParser("blockGamut")(w,i,d)):(w=r.subParser("lists")(w,i,d),w=w.replace(/\n$/,""),w=r.subParser("hashHTMLBlocks")(w,i,d),w=w.replace(/\n\n+/g,`

`),p?w=r.subParser("paragraphs")(w,i,d):w=r.subParser("spanGamut")(w,i,d)),w=w.replace("¨A",""),w="<li"+V+">"+w+`</li>
`,w}),l=l.replace(/¨0/g,""),d.gListLevel--,g&&(l=l.replace(/\s+$/,"")),l}function s(l,g){if(g==="ol"){var $=l.match(/^ *(\d+)\./);if($&&$[1]!=="1")return' start="'+$[1]+'"'}return""}function f(l,g,$){var p=i.disableForced4SpacesIndentedSublists?/^ ?\d+\.[ \t]/gm:/^ {0,3}\d+\.[ \t]/gm,h=i.disableForced4SpacesIndentedSublists?/^ ?[*+-][ \t]/gm:/^ {0,3}[*+-][ \t]/gm,y=g==="ul"?p:h,c="";if(l.search(y)!==-1)(function x(C){var W=C.search(y),w=s(l,g);W!==-1?(c+=`

<`+g+w+`>
`+o(C.slice(0,W),!!$)+"</"+g+`>
`,g=g==="ul"?"ol":"ul",y=g==="ul"?p:h,x(C.slice(W))):c+=`

<`+g+w+`>
`+o(C,!!$)+"</"+g+`>
`})(l);else{var b=s(l,g);c=`

<`+g+b+`>
`+o(l,!!$)+"</"+g+`>
`}return c}return e=d.converter._dispatch("lists.before",e,i,d),e+="¨0",d.gListLevel?e=e.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(l,g,$){var p=$.search(/[*+-]/g)>-1?"ul":"ol";return f(g,p,!0)}):e=e.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(l,g,$,p){var h=p.search(/[*+-]/g)>-1?"ul":"ol";return f($,h,!1)}),e=e.replace(/¨0/,""),e=d.converter._dispatch("lists.after",e,i,d),e}),r.subParser("metadata",function(e,i,d){if(!i.metadata)return e;e=d.converter._dispatch("metadata.before",e,i,d);function o(s){d.metadata.raw=s,s=s.replace(/&/g,"&amp;").replace(/"/g,"&quot;"),s=s.replace(/\n {4}/g," "),s.replace(/^([\S ]+): +([\s\S]+?)$/gm,function(f,l,g){return d.metadata.parsed[l]=g,""})}return e=e.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/,function(s,f,l){return o(l),"¨M"}),e=e.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/,function(s,f,l){return f&&(d.metadata.format=f),o(l),"¨M"}),e=e.replace(/¨M/g,""),e=d.converter._dispatch("metadata.after",e,i,d),e}),r.subParser("outdent",function(e,i,d){return e=d.converter._dispatch("outdent.before",e,i,d),e=e.replace(/^(\t|[ ]{1,4})/gm,"¨0"),e=e.replace(/¨0/g,""),e=d.converter._dispatch("outdent.after",e,i,d),e}),r.subParser("paragraphs",function(e,i,d){e=d.converter._dispatch("paragraphs.before",e,i,d),e=e.replace(/^\n+/g,""),e=e.replace(/\n+$/g,"");for(var o=e.split(/\n{2,}/g),s=[],f=o.length,l=0;l<f;l++){var g=o[l];g.search(/¨(K|G)(\d+)\1/g)>=0?s.push(g):g.search(/\S/)>=0&&(g=r.subParser("spanGamut")(g,i,d),g=g.replace(/^([ \t]*)/g,"<p>"),g+="</p>",s.push(g))}for(f=s.length,l=0;l<f;l++){for(var $="",p=s[l],h=!1;/¨(K|G)(\d+)\1/.test(p);){var y=RegExp.$1,c=RegExp.$2;y==="K"?$=d.gHtmlBlocks[c]:h?$=r.subParser("encodeCode")(d.ghCodeBlocks[c].text,i,d):$=d.ghCodeBlocks[c].codeblock,$=$.replace(/\$/g,"$$$$"),p=p.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/,$),/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(p)&&(h=!0)}s[l]=p}return e=s.join(`
`),e=e.replace(/^\n+/g,""),e=e.replace(/\n+$/g,""),d.converter._dispatch("paragraphs.after",e,i,d)}),r.subParser("runExtension",function(e,i,d,o){if(e.filter)i=e.filter(i,o.converter,d);else if(e.regex){var s=e.regex;s instanceof RegExp||(s=new RegExp(s,"g")),i=i.replace(s,e.replace)}return i}),r.subParser("spanGamut",function(e,i,d){return e=d.converter._dispatch("spanGamut.before",e,i,d),e=r.subParser("codeSpans")(e,i,d),e=r.subParser("escapeSpecialCharsWithinTagAttributes")(e,i,d),e=r.subParser("encodeBackslashEscapes")(e,i,d),e=r.subParser("images")(e,i,d),e=r.subParser("anchors")(e,i,d),e=r.subParser("autoLinks")(e,i,d),e=r.subParser("simplifiedAutoLinks")(e,i,d),e=r.subParser("emoji")(e,i,d),e=r.subParser("underline")(e,i,d),e=r.subParser("italicsAndBold")(e,i,d),e=r.subParser("strikethrough")(e,i,d),e=r.subParser("ellipsis")(e,i,d),e=r.subParser("hashHTMLSpans")(e,i,d),e=r.subParser("encodeAmpsAndAngles")(e,i,d),i.simpleLineBreaks?/\n\n¨K/.test(e)||(e=e.replace(/\n+/g,`<br />
`)):e=e.replace(/  +\n/g,`<br />
`),e=d.converter._dispatch("spanGamut.after",e,i,d),e}),r.subParser("strikethrough",function(e,i,d){function o(s){return i.simplifiedAutoLink&&(s=r.subParser("simplifiedAutoLinks")(s,i,d)),"<del>"+s+"</del>"}return i.strikethrough&&(e=d.converter._dispatch("strikethrough.before",e,i,d),e=e.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g,function(s,f){return o(f)}),e=d.converter._dispatch("strikethrough.after",e,i,d)),e}),r.subParser("stripLinkDefinitions",function(e,i,d){var o=/^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm,s=/^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;e+="¨0";var f=function(l,g,$,p,h,y,c){return g=g.toLowerCase(),e.toLowerCase().split(g).length-1<2?l:($.match(/^data:.+?\/.+?;base64,/)?d.gUrls[g]=$.replace(/\s/g,""):d.gUrls[g]=r.subParser("encodeAmpsAndAngles")($,i,d),y?y+c:(c&&(d.gTitles[g]=c.replace(/"|'/g,"&quot;")),i.parseImgDimensions&&p&&h&&(d.gDimensions[g]={width:p,height:h}),""))};return e=e.replace(s,f),e=e.replace(o,f),e=e.replace(/¨0/,""),e}),r.subParser("tables",function(e,i,d){if(!i.tables)return e;var o=/^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm,s=/^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;function f(h){return/^:[ \t]*--*$/.test(h)?' style="text-align:left;"':/^--*[ \t]*:[ \t]*$/.test(h)?' style="text-align:right;"':/^:[ \t]*--*[ \t]*:$/.test(h)?' style="text-align:center;"':""}function l(h,y){var c="";return h=h.trim(),(i.tablesHeaderId||i.tableHeaderId)&&(c=' id="'+h.replace(/ /g,"_").toLowerCase()+'"'),h=r.subParser("spanGamut")(h,i,d),"<th"+c+y+">"+h+`</th>
`}function g(h,y){var c=r.subParser("spanGamut")(h,i,d);return"<td"+y+">"+c+`</td>
`}function $(h,y){for(var c=`<table>
<thead>
<tr>
`,b=h.length,x=0;x<b;++x)c+=h[x];for(c+=`</tr>
</thead>
<tbody>
`,x=0;x<y.length;++x){c+=`<tr>
`;for(var C=0;C<b;++C)c+=y[x][C];c+=`</tr>
`}return c+=`</tbody>
</table>
`,c}function p(h){var y,c=h.split(`
`);for(y=0;y<c.length;++y)/^ {0,3}\|/.test(c[y])&&(c[y]=c[y].replace(/^ {0,3}\|/,"")),/\|[ \t]*$/.test(c[y])&&(c[y]=c[y].replace(/\|[ \t]*$/,"")),c[y]=r.subParser("codeSpans")(c[y],i,d);var b=c[0].split("|").map(function(Z){return Z.trim()}),x=c[1].split("|").map(function(Z){return Z.trim()}),C=[],W=[],w=[],V=[];for(c.shift(),c.shift(),y=0;y<c.length;++y)c[y].trim()!==""&&C.push(c[y].split("|").map(function(Z){return Z.trim()}));if(b.length<x.length)return h;for(y=0;y<x.length;++y)w.push(f(x[y]));for(y=0;y<b.length;++y)r.helper.isUndefined(w[y])&&(w[y]=""),W.push(l(b[y],w[y]));for(y=0;y<C.length;++y){for(var M=[],F=0;F<W.length;++F)r.helper.isUndefined(C[y][F]),M.push(g(C[y][F],w[F]));V.push(M)}return $(W,V)}return e=d.converter._dispatch("tables.before",e,i,d),e=e.replace(/\\(\|)/g,r.helper.escapeCharactersCallback),e=e.replace(o,p),e=e.replace(s,p),e=d.converter._dispatch("tables.after",e,i,d),e}),r.subParser("underline",function(e,i,d){return i.underline&&(e=d.converter._dispatch("underline.before",e,i,d),i.literalMidWordUnderscores?(e=e.replace(/\b___(\S[\s\S]*?)___\b/g,function(o,s){return"<u>"+s+"</u>"}),e=e.replace(/\b__(\S[\s\S]*?)__\b/g,function(o,s){return"<u>"+s+"</u>"})):(e=e.replace(/___(\S[\s\S]*?)___/g,function(o,s){return/\S$/.test(s)?"<u>"+s+"</u>":o}),e=e.replace(/__(\S[\s\S]*?)__/g,function(o,s){return/\S$/.test(s)?"<u>"+s+"</u>":o})),e=e.replace(/(_)/g,r.helper.escapeCharactersCallback),e=d.converter._dispatch("underline.after",e,i,d)),e}),r.subParser("unescapeSpecialChars",function(e,i,d){return e=d.converter._dispatch("unescapeSpecialChars.before",e,i,d),e=e.replace(/¨E(\d+)E/g,function(o,s){var f=parseInt(s);return String.fromCharCode(f)}),e=d.converter._dispatch("unescapeSpecialChars.after",e,i,d),e}),r.subParser("makeMarkdown.blockquote",function(e,i){var d="";if(e.hasChildNodes())for(var o=e.childNodes,s=o.length,f=0;f<s;++f){var l=r.subParser("makeMarkdown.node")(o[f],i);l!==""&&(d+=l)}return d=d.trim(),d="> "+d.split(`
`).join(`
> `),d}),r.subParser("makeMarkdown.codeBlock",function(e,i){var d=e.getAttribute("language"),o=e.getAttribute("precodenum");return"```"+d+`
`+i.preList[o]+"\n```"}),r.subParser("makeMarkdown.codeSpan",function(e){return"`"+e.innerHTML+"`"}),r.subParser("makeMarkdown.emphasis",function(e,i){var d="";if(e.hasChildNodes()){d+="*";for(var o=e.childNodes,s=o.length,f=0;f<s;++f)d+=r.subParser("makeMarkdown.node")(o[f],i);d+="*"}return d}),r.subParser("makeMarkdown.header",function(e,i,d){var o=new Array(d+1).join("#"),s="";if(e.hasChildNodes()){s=o+" ";for(var f=e.childNodes,l=f.length,g=0;g<l;++g)s+=r.subParser("makeMarkdown.node")(f[g],i)}return s}),r.subParser("makeMarkdown.hr",function(){return"---"}),r.subParser("makeMarkdown.image",function(e){var i="";return e.hasAttribute("src")&&(i+="!["+e.getAttribute("alt")+"](",i+="<"+e.getAttribute("src")+">",e.hasAttribute("width")&&e.hasAttribute("height")&&(i+=" ="+e.getAttribute("width")+"x"+e.getAttribute("height")),e.hasAttribute("title")&&(i+=' "'+e.getAttribute("title")+'"'),i+=")"),i}),r.subParser("makeMarkdown.links",function(e,i){var d="";if(e.hasChildNodes()&&e.hasAttribute("href")){var o=e.childNodes,s=o.length;d="[";for(var f=0;f<s;++f)d+=r.subParser("makeMarkdown.node")(o[f],i);d+="](",d+="<"+e.getAttribute("href")+">",e.hasAttribute("title")&&(d+=' "'+e.getAttribute("title")+'"'),d+=")"}return d}),r.subParser("makeMarkdown.list",function(e,i,d){var o="";if(!e.hasChildNodes())return"";for(var s=e.childNodes,f=s.length,l=e.getAttribute("start")||1,g=0;g<f;++g)if(!(typeof s[g].tagName>"u"||s[g].tagName.toLowerCase()!=="li")){var $="";d==="ol"?$=l.toString()+". ":$="- ",o+=$+r.subParser("makeMarkdown.listItem")(s[g],i),++l}return o+=`
<!-- -->
`,o.trim()}),r.subParser("makeMarkdown.listItem",function(e,i){for(var d="",o=e.childNodes,s=o.length,f=0;f<s;++f)d+=r.subParser("makeMarkdown.node")(o[f],i);return/\n$/.test(d)?d=d.split(`
`).join(`
    `).replace(/^ {4}$/gm,"").replace(/\n\n+/g,`

`):d+=`
`,d}),r.subParser("makeMarkdown.node",function(e,i,d){d=d||!1;var o="";if(e.nodeType===3)return r.subParser("makeMarkdown.txt")(e,i);if(e.nodeType===8)return"<!--"+e.data+`-->

`;if(e.nodeType!==1)return"";var s=e.tagName.toLowerCase();switch(s){case"h1":d||(o=r.subParser("makeMarkdown.header")(e,i,1)+`

`);break;case"h2":d||(o=r.subParser("makeMarkdown.header")(e,i,2)+`

`);break;case"h3":d||(o=r.subParser("makeMarkdown.header")(e,i,3)+`

`);break;case"h4":d||(o=r.subParser("makeMarkdown.header")(e,i,4)+`

`);break;case"h5":d||(o=r.subParser("makeMarkdown.header")(e,i,5)+`

`);break;case"h6":d||(o=r.subParser("makeMarkdown.header")(e,i,6)+`

`);break;case"p":d||(o=r.subParser("makeMarkdown.paragraph")(e,i)+`

`);break;case"blockquote":d||(o=r.subParser("makeMarkdown.blockquote")(e,i)+`

`);break;case"hr":d||(o=r.subParser("makeMarkdown.hr")(e,i)+`

`);break;case"ol":d||(o=r.subParser("makeMarkdown.list")(e,i,"ol")+`

`);break;case"ul":d||(o=r.subParser("makeMarkdown.list")(e,i,"ul")+`

`);break;case"precode":d||(o=r.subParser("makeMarkdown.codeBlock")(e,i)+`

`);break;case"pre":d||(o=r.subParser("makeMarkdown.pre")(e,i)+`

`);break;case"table":d||(o=r.subParser("makeMarkdown.table")(e,i)+`

`);break;case"code":o=r.subParser("makeMarkdown.codeSpan")(e,i);break;case"em":case"i":o=r.subParser("makeMarkdown.emphasis")(e,i);break;case"strong":case"b":o=r.subParser("makeMarkdown.strong")(e,i);break;case"del":o=r.subParser("makeMarkdown.strikethrough")(e,i);break;case"a":o=r.subParser("makeMarkdown.links")(e,i);break;case"img":o=r.subParser("makeMarkdown.image")(e,i);break;default:o=e.outerHTML+`

`}return o}),r.subParser("makeMarkdown.paragraph",function(e,i){var d="";if(e.hasChildNodes())for(var o=e.childNodes,s=o.length,f=0;f<s;++f)d+=r.subParser("makeMarkdown.node")(o[f],i);return d=d.trim(),d}),r.subParser("makeMarkdown.pre",function(e,i){var d=e.getAttribute("prenum");return"<pre>"+i.preList[d]+"</pre>"}),r.subParser("makeMarkdown.strikethrough",function(e,i){var d="";if(e.hasChildNodes()){d+="~~";for(var o=e.childNodes,s=o.length,f=0;f<s;++f)d+=r.subParser("makeMarkdown.node")(o[f],i);d+="~~"}return d}),r.subParser("makeMarkdown.strong",function(e,i){var d="";if(e.hasChildNodes()){d+="**";for(var o=e.childNodes,s=o.length,f=0;f<s;++f)d+=r.subParser("makeMarkdown.node")(o[f],i);d+="**"}return d}),r.subParser("makeMarkdown.table",function(e,i){var d="",o=[[],[]],s=e.querySelectorAll("thead>tr>th"),f=e.querySelectorAll("tbody>tr"),l,g;for(l=0;l<s.length;++l){var $=r.subParser("makeMarkdown.tableCell")(s[l],i),p="---";if(s[l].hasAttribute("style")){var h=s[l].getAttribute("style").toLowerCase().replace(/\s/g,"");switch(h){case"text-align:left;":p=":---";break;case"text-align:right;":p="---:";break;case"text-align:center;":p=":---:";break}}o[0][l]=$.trim(),o[1][l]=p}for(l=0;l<f.length;++l){var y=o.push([])-1,c=f[l].getElementsByTagName("td");for(g=0;g<s.length;++g){var b=" ";typeof c[g]<"u"&&(b=r.subParser("makeMarkdown.tableCell")(c[g],i)),o[y].push(b)}}var x=3;for(l=0;l<o.length;++l)for(g=0;g<o[l].length;++g){var C=o[l][g].length;C>x&&(x=C)}for(l=0;l<o.length;++l){for(g=0;g<o[l].length;++g)l===1?o[l][g].slice(-1)===":"?o[l][g]=r.helper.padEnd(o[l][g].slice(-1),x-1,"-")+":":o[l][g]=r.helper.padEnd(o[l][g],x,"-"):o[l][g]=r.helper.padEnd(o[l][g],x);d+="| "+o[l].join(" | ")+` |
`}return d.trim()}),r.subParser("makeMarkdown.tableCell",function(e,i){var d="";if(!e.hasChildNodes())return"";for(var o=e.childNodes,s=o.length,f=0;f<s;++f)d+=r.subParser("makeMarkdown.node")(o[f],i,!0);return d.trim()}),r.subParser("makeMarkdown.txt",function(e){var i=e.nodeValue;return i=i.replace(/ +/g," "),i=i.replace(/¨NBSP;/g," "),i=r.helper.unescapeHTMLEntities(i),i=i.replace(/([*_~|`])/g,"\\$1"),i=i.replace(/^(\s*)>/g,"\\$1>"),i=i.replace(/^#/gm,"\\#"),i=i.replace(/^(\s*)([-=]{3,})(\s*)$/,"$1\\$2$3"),i=i.replace(/^( {0,3}\d+)\./gm,"$1\\."),i=i.replace(/^( {0,3})([+-])/gm,"$1\\$2"),i=i.replace(/]([\s]*)\(/g,"\\]$1\\("),i=i.replace(/^ {0,3}\[([\S \t]*?)]:/gm,"\\[$1]:"),i});var re=this;n.exports?n.exports=r:re.showdown=r}).call(dt)}(Ce)),Ce.exports}var it=nt();const ot=n=>new it.Converter().makeHtml(n),H=n=>`<animate
    attributeName="opacity"
    from="0"
    to="1"
    dur="${n.duration??"250ms"}"
    fill="freeze"
    ${Ue(n)??""}
    />`,Xe=n=>`<animateTransform
    attributeName="transform"
    attributeType="XML"
    type="translate"
    from="${n.to}"
    to="${n.from}"
    fill="freeze"
    ${Ue(n)??"50ms"}
  />`,Ue=n=>{let a=null;const t=(n.begin?.length??0)>0,r=(n.initialDelay?.length??0)>0;return t?a=`begin="${n.begin}"`:r&&(a=`begin="${n.initialDelay}"`),a},ut=n=>{let a;n.ctx.env=="ssg"&&n.ctx.transition=="click"&&(a=n.ctx.prevSlideId);let t="";return a!=null&&(t=`${a}-slide-anim.begin+50ms`),H({duration:n.duration??"1s",begin:t})},ce=(n,a,t="end")=>n!=null?`${n}-slide-anim.${t}+${a}ms`:`${a}ms`,v={width:1920,height:1080,borderRadius:20,strokeWidth:4,font:'"Calibri", "Arial", sans-serif',windowIconSize:10,progress:{iconSize:5},linkRef:"ref=kurt"},Ge=n=>({ButtonSecondaryGradient:{id:"ButtonSecondaryGradient",defs:`<linearGradient [id]>
        <stop offset="0%" stop-color="${B[n].secondary}" />
        <stop offset="100%" stop-color="${B[n].secondaryGradientStop1}" />
      </linearGradient>`},SphereBlue1Gradient:{id:"SphereBlue1Gradient",defs:`<linearGradient [id]>
        <stop offset="0%" stop-color="#8497F2" />
        <stop offset="100%" stop-color="#4A66ED" />
      </linearGradient>`},SpherePurple1Gradient:{id:"SpherePurple1Gradient",defs:`<linearGradient [id]>
        <stop offset="0%" stop-color="#9D4BE5" />
        <stop offset="100%" stop-color="#7A0AD9" />
      </linearGradient>`},SphereGreen1Gradient:{id:"SphereGreen1Gradient",defs:`<linearGradient [id]>
        <stop offset="0%" stop-color="${B[n].exampleColour}" />
        <stop offset="100%" stop-color="#1AE19C" />
      </linearGradient>`}}),st=n=>Array.from(Array(n).keys()),lt=n=>`
  <circle 
    id="progress-${n.index}"
    class="progress-icon"
    cx="${n.x}" 
    cy="${n.y}" 
    r="${v.progress.iconSize}" 
    fill="${n.isActive?"#888888":"#2F2F2F"}" 
  />
`,De=n=>{const a=v.progress.iconSize*2.5,t=v.progress.iconSize*4.5,r=n.numberOfSlides*t+v.progress.iconSize*2,u=(v.width-r)/2,k=v.height-35;return`<g id="progress">
    ${st(n.numberOfSlides).map((I,z)=>lt({x:u+a+z*t,y:k,index:z,isActive:z<=n.slideIndex})).join("")}
  </g>`},ct=(n,a)=>`<g id="window-title" class="noselect">
    <rect x="60" y="10" height="47" fill="${n.slideBackground}" width="${v.width/2}" />
    <text x="70" y="44" fill="${n.controlForeground}" font-size="35">${a}</text>
  </g>`,ft=["ssg"],ee=n=>ft.includes(n),T=n=>{let a;return ee(n.env)&&n.transition!="css"&&(a=n.prevSlideId),a},ve=n=>`<circle 
      id="gradient-sphere-${n.gradientId}"
      ${n.className==null?"":`class="${n.className}"`}
      ${n.styleOverrides==null?"":`style="${n.styleOverrides}"`}
      cx="${n.x}"
      cy="${n.y}"
      r="${n.size}"
      ${n.rotateDeg==null?`transform="rotate(0 ${n.x} ${n.y})"`:`transform="rotate(${n.rotateDeg} ${n.x} ${n.y})"`}
      fill="url(#${n.gradientId})" 
    >
      ${n.rotationAnimateDur==null?"":`<animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 ${n.x} ${n.y}"
              to="360 ${n.x} ${n.y}"
              dur="${n.rotationAnimateDur}"
              repeatCount="indefinite" 
            />`}    
    </circle>`,E={kurtLourens:"./assets/img/kurtLourens.svg",pitch:"./assets/img/pitch.svg",standing:"./assets/img/standing.svg",tooltip:"./assets/img/tooltip.svg",qrCode:"./assets/img/qrCode.svg",alien:"./assets/img/alien.svg",undraw:"./assets/img/undraw.svg",swatChart:"./assets/img/swatChart.svg",hacker:"./assets/img/hacker.svg",ghost:"./assets/img/ghost.svg",facebook:"./assets/img/facebook.svg",kurtGithubHeader:"./assets/img/kurt-lourens-header.svg",githubHeader:"./assets/img/github-header.svg",entelect:"./assets/img/entelect.png",entelectGithub:"./assets/img/entelect-github.png",metaDataExample:"./assets/img/metaDataExample.png",about:"./assets/img/icon/about.svg",cool:"./assets/img/icon/cool.svg",review:"./assets/img/icon/review.svg"},Ke=[{id:"audio",colour:"#1ABC9C"},{id:"rings",colour:"#34495E"},{id:"grid",colour:"#F39C12"},{id:"hearts",colour:"#9B59B6"},{id:"oval",colour:"#3498DB"},{id:"three-dots",colour:"#E74C3C"},{id:"spinning-circles",colour:"#2ECC71"},{id:"puff",colour:"#2C3E50"},{id:"circles",colour:"#F1C40F"},{id:"tail-spin",colour:"#8E44AD"},{id:"bars",colour:"#2980B9"},{id:"ball-triangle",colour:"#E74C3C"}],q=(n,a)=>`<use href="#${n}" ${a??""} />`,gt=(n,a)=>`<use href="#${n}"  />`,Re={title:"SVG explained",subTitle:"An explanation of why they are great"},xe={},ht="ABCDEFGHIJKLMNOPQRSTUVWXYZ",Oe=n=>{if(n.length==0)return n;let a="--";for(const t of n)ht.includes(t)&&(a+="-"),a+=t;return`${a}-colour`.toLocaleLowerCase()},Y=async(n,a="utf-8")=>{if(ee("production")){let I=xe.resolve(n)==xe.normalize(n)?n:xe.join(void 0,"public",n);const z=a=="none"?void 0:{encoding:a};return xe.readFile(I,z)}return(await fetch(n)).text()},U=async(n,a,t)=>{let r=await Y(a,"utf-8");if(r=pt(n,r),t==null)return r;const k=new DOMParser().parseFromString(r,"image/svg+xml");return t(k)},We=async n=>{if(ee("production")){const t=await Y(n,"none");return`data:image/png;base64,${Buffer.from(t).toString("base64")}`}else return new Promise(r=>{const u=new XMLHttpRequest;u.onload=function(){const k=new FileReader;k.onloadend=function(){r(k.result)},k.readAsDataURL(u.response)},u.open("GET",n),u.responseType="blob",u.send()})},mt=async(n,a,t,r,u)=>U(n,`./assets/diagram/${t}.d2.${a}.svg`,k=>{let I=k?.children?.[0]?.children?.[0].innerHTML??"";if(I==null)return"";for(const z of r)I=I.replace(z.reg,`.fill-N7{fill:${z.newColour};}`);return`<g id="diagramCloud">${I}</g>`}),pt=(n,a)=>{if(a.includes("--")==!1)return a;let t=a.toString();for(const r of Object.keys(n)){const u=n[r],k=Oe(r);t=t.replaceAll(k,u)}return t},bt="data:text/markdown;base64,IyBJbnRybwoKU1ZHIHByZXNlbnRhdGlvbiBieSBLdXJ0IExvdXJlbnMKCi0gQXZhaWxhYmxlIGF0IFtzdmcua3VydGxvdXJlbnMuY29tXShodHRwczovL3N2Zy5rdXJ0bG91cmVucy5jb20pCg==",yt=async n=>{const a=Ge(n.themeKey),t=B[n.themeKey],r={ssg:{secondsToDisplay:3},notes:await Y(bt)};return{content:()=>N({ctx:n,title:Re.title,content:`
        ${q("standing",'transform="translate(750, 315) scale(1.5)"')}
        <g id="intro-spheres">
          ${ve({gradientId:a.SpherePurple1Gradient.id,className:"slide-up-down",styleOverrides:"--delay: -3s;",x:v.width-400,y:200,size:50})}
          ${ve({gradientId:a.SphereBlue1Gradient.id,className:"slide-left-right",styleOverrides:"--duration: 10s",x:v.width-600,y:350,size:150})}
          ${ve({gradientId:a.SphereGreen1Gradient.id,className:"slide-left-right",styleOverrides:"--duration: 7s; animation-direction: alternate-reverse",x:v.width-800,y:v.height-200,size:100})}

        </g>
        
        <g id="intro-heading" class="noselect" transform="translate(150, ${v.height/2})">
          <text x="0" y="0" fill="${t.controlForeground}" font-size="250">SVG</text>
          <rect 
            x="-50" y="75" 
            width="${v.width/2}" 
            height="100" rx="50" ry="50" 
            fill="url(#${a.ButtonSecondaryGradient.id})" 
          />
          <text x="0" y="140" fill="white" font-size="50">${Re.subTitle}</text>
        </g>
        `,...r}),...r}},Ve=async n=>{const a=Ge(n.ctx.themeKey),t=n.description.split(`
`),r=T(n.ctx);return`<g 
      class="transition-slide noselect" opacity="0" 
      transform="translate(${v.width+100} ${n.y})"
    >
    ${H({duration:"1s",begin:r==null?void 0:`${r}-slide-anim.end+50ms`})}
    ${Xe({from:`${v.width} ${n.y}`,to:`${v.width/2.5} ${n.y}`,begin:r==null?void 0:`${r}-slide-anim.end+${n.y/4}ms`,initialDelay:`${n.y/4}ms`})}
    <rect 
        width="${v.width/2}"
        height="200"
        x="0"
        y="0"
        rx="50"
        fill="${B[n.ctx.themeKey].cardBackground}"
    >
    </rect>
    ${q(n.icon,`transform="${n.iconTransformProp}"`)}
    <text x="175" y="70" fill="${B[n.ctx.themeKey].cardForeground}" font-size="50">${n.heading}</text>
    ${t.map((u,k)=>`<text x="175" y="${120+k*30}" fill="${B[n.ctx.themeKey].cardForeground}" font-size="25">${u}</text>`)}

    ${ve({gradientId:a.ButtonSecondaryGradient.id,size:20,x:0,y:100,rotateDeg:90})}
  </g>`},wt="data:text/markdown;base64,IyBBZ2VuZGEKCmludHJvICYgZmVhdHVyZXMgJiBjb25zaWRlcmF0aW9ucwoKLSBUaGlzIHdpbGwgYmUgY29kZSBoZWF2eQotIEkgaG9wZSB0aGF0IEkgaGF2ZSBtYWRlIGl0IHZpc3VhbCBlbm91Z2ggZm9yIHRob3NlIHRoYXQgZG8gbm90IGxpa2UgdG8gZ2V0IHByZXNlbnRlZCB3aXRoIGNvZGUKCmNvb2wgdXNlIGNhc2VzCgotIFNvbWUgZXhhbXBsZXMgdGhhdCBJIHRoaW5rIGFyZSBjb29sIGFuZCBzb21ldGltZXMgcHJhY3RpY2FsCg==",$t=async n=>{const a=B[n.themeKey],t={ssg:{secondsToDisplay:3},notes:await Y(wt)};return{content:async()=>N({ctx:n,title:"Agenda",content:`
        <rect 
          width="${v.width-v.width/3*2}"
          height="${v.height-100}"
          x="${v.width/3*2}"
          y="100"
          rx="25"
          fill="${a.primary}"
        />
        <rect 
          width="50" height="50"
          x="${v.width-50}"
          y="100"
          fill="${a.primary}"
        />
        <rect 
          width="50" height="50"
          x="${v.width/3*2}"
          y="${v.height-50}"
          fill="${a.primary}"
        />
        
        ${await Ve({y:200,ctx:n,icon:"about",heading:"Introduction",description:`What is an SVG? How does it compare to other image formats? 
How is it made?`,iconTransformProp:"scale(0.75) translate(55, 67)"})}
        ${await Ve({y:450,ctx:n,icon:"review",heading:"Features &amp; Considerations",description:`A deep dive on the inner workings and what some of the 
concerns or negatives are when using SVGs.`,iconTransformProp:"scale(0.05) translate(1000, 950)"})}
        ${await Ve({y:700,ctx:n,icon:"cool",heading:"Cool use cases",description:"Examples of clever ways to use SVGs.",iconTransformProp:"scale(0.1) translate(400, 450)"})}

        ${q("pitch",'transform="translate(100, 225) scale(1.5)"')}
        `,...t}),...t}},kt=500,K=n=>{const a=T(n.ctx),t=u=>ce(a,kt*u,"end"),r=u=>u==null?"":`
    <foreignObject x="40" y="25" width="1200" height="800">
        <div xmlns="http://www.w3.org/1999/xhtml" style="font-size: 1.5em;">
          ${u}
      </div>
    </foreignObject>
    `;return`
    <g opacity="0" transform="translate(${n.x} ${n.y})">
        ${H({duration:"1s",begin:t(n.animatePosition-1)})}
        <rect 
          width="${n.width}"
          height="${n.height}"
          x="0"
          y="0"
          rx="50"
          fill="transparent"
          stroke="${B[n.ctx.themeKey].secondary}"
          stroke-width="3"
        >
        </rect>
        

        ${r(n.codeContent)}
        
        ${n.svgContent}
    </g>`},Je=n=>(n?.length??0)<1?"":` style="${n}"`,he=(n,a)=>`<span${Je(a)}>${n}</span>`,vt=(n,a,t)=>{const r=n.map((u,k)=>`<span style="color: ${a[k]};">${u}</span>`).join("");return`<span${Je(t)}>${r}</span>`},le=n=>{const a=[],t=n?.colour??"";t.length>0&&a.push(`color: ${t};`);const r=n?.tabLevel??0;r>0&&a.push(`margin-left: ${r}em;`);const u=n?.opacity??0;return u>0&&a.push(`opacity: ${u};`),a.join(" ")},O=n=>({custom:(a,t)=>he(a,le({...t})),tag:(a,t)=>he(a,le({...t,colour:n.tag})),key:(a,t)=>he(a,le({...t,colour:n.key})),value:(a,t)=>he(a,le({...t,colour:n.value})),keyValue:(a,t)=>vt(a,[n.key,n.equals,n.value],le(t))}),m={opacity:.3},Ie=7,S=(n,a)=>`<circle cx="900" cy="${160+a*50}" r="${Ie}" fill="${n.exampleColour}" />`,_=(n,a,t,r,u)=>`<text x="930" y="${160+Ie+a*50}" fill="${n.controlForeground}" font-size="${r??30}" ${u??""}>${t}</text>`,_t=(n,a,t,r,u)=>`<rect x="920" y="${140+a*50}" width="${t}" height="${r}" fill="${n.wheelOfFortuneBackground}" rx="10" ></rect>`,ne=(n,a,t)=>`<line x1="930" y1="${178+a*50}" x2="${930+t}" y2="${178+a*50}" stroke="${n.controlForeground}" stroke-width="2" />`,xt="data:text/markdown;base64,IyBBbmltYXRpb24KCi0gSSB0aG91Z2h0IHRoZXNlIHdlcmUgdGhlIGJlc3Qgd2hlbiBJIGZvdW5kIG91dCBhYm91dCB0aGVtCi0gSW4gc29tZSB3YXlzIGVhc2llciB0byB1bmRlcnN0YW5kCi0gVGhleSBoYXZlIGNvb2wgZmVhdHVyZXMgbGlrZSBiZWdpbm5pbmcgYW5pbWF0aW9ucyBvbkNsaWNrCgojIyBVc2FnZQoKVW5mb3J0dW5hdGVseSB0aGVzZSBhbmltYXRpb24gdGFncyBhcmVuJ3QgYWxsIHRoYXQgdXNlZnVsCgotIFRoZXkgYXJlbid0IHN1cHBvcnRlZCBhcyB3ZWxsIGFzIENTUwotIGNhbiBiZSBtb3JlIGRpZmZpY3VsdCB0byB3cml0ZSBhbmQgbWFpbnRhaW4sIGVzcGVjaWFsbHkgaWYgbWFueSBhcmUgY2hhaW5lZAoKIyMg4pa277iPIE5vdyBsZXQgbWUgc2hvdyB5b3UgYSBzcGVjaWFsIHRhZyB0aGF0IGlzIHVzZWZ1bAo=",Ct=async n=>{const a=T(n),t=B[n.themeKey],r=O(t.code),u=`
    <div xmlns="http://www.w3.org/1999/xhtml" style="font-size: 1.33em;">
      <style>
        table {
          color: white;
          border: 1px solid white;
          border-radius: 1em;
          border-collapse: collapse;
        }
        
        table thead {
          background-color: #2d303aff;
          height: 3em;
        }
        
        table tbody td {
          border: 1px solid white;
          padding-inline: 0.5em;
        }
      </style>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>SVG Animation Tags</th>
            <th>CSS Animation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Browser Compatibility</td>	
            <td>❌ Inconsistent</td>	
            <td>✅ Reliable</td>
          </tr>
          <tr>
            <td>Complexity Handling</td>
            <td>✅ Rich features</td>
            <td>❌ Limited for intricate SVG-specific animations</td>
          </tr>
          <tr>
            <td>Maintenance &amp; Flexibility</td>
            <td>❌ Harder to manage inside SVG</td>
            <td>✅ Cleaner and more flexible</td>
          </tr>
          <tr>
            <td>Triggering Interaction</td>
            <td>❌ Limited</td>
            <td>✅ Great with hover/click/class toggles</td>
          </tr>
          <tr>
            <td>Path/Motion Animation</td>
            <td>✅ Possible with SMIL</td>
            <td>❌ Limited unless using JS or Motion Path</td>
          </tr>
        </tbody>
      </table>
    </div>`,k={ssg:{secondsToDisplay:3},notes:await Y(xt)};return{content:()=>N({ctx:n,title:"Animation - CSS or SVG",content:`
        ${K({ctx:n,x:100,y:120,width:1700,height:415,animatePosition:1,svgContent:`
            <circle class="cool-circle" cx="1000" cy="150" r="75">              
              <animateTransform id="left" attributeName="transform" type="translate" from="0 0" to="500 0" begin="0s;right.end" dur="1s" />
              <animateTransform id="right" attributeName="transform" type="translate" from="500 0" to="0 0" begin="left.end" dur="1s" />
            </circle>
          `,codeContent:`
            ${r.tag("&lt;svg",m)}
            ${r.keyValue(["version","=",'"1.1"'],m)}
            ${r.keyValue(["width","=",'"300"'],m)}
            ${r.keyValue(["height","=",'"200"'],m)}
            ${r.keyValue(["xmlns","=",'"http://www.w3.org/2000/svg"'],m)}
            ${r.tag("&gt;",m)}
            <br />
            
            ${r.tag("&lt;rect",{tabLevel:1})}
            ${r.keyValue(["class","=",'"cool-circle"'])}
            ${r.keyValue(["x","=",'"550"'])}
            ${r.keyValue(["y","=",'"85"'])}
            ${r.keyValue(["width","=",'"150"'])}
            ${r.keyValue(["height","=",'"150"'])}${r.tag("&gt;")}
            <br />
            ${r.tag("&lt;animateTransform",{tabLevel:2})}
            ${r.keyValue(["id","=",'"left"'])}
            ${r.keyValue(["attributeName","=",'"transform"'])}
            ${r.keyValue(["type","=",'"translate"'])}
            <br />
            ${r.keyValue(["from","=",'"0 0"'],{tabLevel:3})}
            ${r.keyValue(["to","=",'"500 0"'])}
            ${r.keyValue(["begin","=",'"0s;right.end"'])}
            ${r.keyValue(["dur","=",'"1s"'])}
            <br />
            ${r.tag("/&gt;",{tabLevel:2})}
            <br />
            ${r.tag("&lt;animateTransform",{tabLevel:2})}
            ${r.keyValue(["id","=",'"right"'])}
            ${r.keyValue(["attributeName","=",'"transform"'])}
            ${r.keyValue(["type","=",'"translate"'])}
            <br />
            ${r.keyValue(["from","=",'"500 0"'],{tabLevel:3})}
            ${r.keyValue(["to","=",'"0 0"'])}
            ${r.keyValue(["begin","=",'"left.end"'])}
            ${r.keyValue(["dur","=",'"1s"'])}
            <br />
            ${r.tag("/&gt;",{tabLevel:2})}
            <br />

            ${r.tag("&lt;/rect&gt;",{tabLevel:1})}
            <br />
            ${r.tag("&lt;/svg&gt;",m)}
          `})}
        
        ${K({ctx:n,x:100,y:580,width:850,height:415,animatePosition:2,svgContent:`
            <text x="60" y="85" fill="${t.controlForeground}" font-size="25">
              Provides a way to animate an attribute of an element over time.
            </text>
            <text x="60" y="190" fill="${t.controlForeground}" font-size="25">
              Provides a way to define how an element moves along a motion path.
            </text>
            <text x="60" y="300" fill="${t.controlForeground}" font-size="25">
              Animates a transformation attribute on its target element, allowing 
            </text>
            <text x="60" y="335" fill="${t.controlForeground}" font-size="25">
              animations to control translation, scaling, rotation, and/or skewing.
            </text>
          `,codeContent:`
            ${r.tag("&lt;animate")}
            ${r.keyValue(["attributeName","=",'"..."'])}
            ${r.tag("/&gt;")}
            <br />
            <br />
            <br />
            ${r.tag("&lt;animateMotion")}
            ${r.keyValue(["attributeName","=",'"..."'])}
            ${r.tag("/&gt;")}
            <br />
            <br />
            <br />
            ${r.tag("&lt;animateTransform")}
            ${r.keyValue(["attributeName","=",'"..."'])}
            ${r.tag("/&gt;")}
          `})}

        <g opacity="0" transform="translate(1000 590)">
            ${H({duration:"1s",begin:ce(a,1e3)})}
                   
            <foreignObject x="0" y="0" width="800" height="600">
              ${u}
            </foreignObject>
        </g>
        `,...k}),...k}},fe=n=>{const a=B[n.ctx.themeKey],t=T(n.ctx),r=u=>ce(t,a.defaultDelayInMs*u);return`
    <g opacity="0" transform="translate(${n.x} ${n.y})">
        ${H({duration:"1s",begin:r(n.animatePosition-1)})}
        <rect 
            width="${v.width/2-150}"
            height="${n.overrideCardHeight??250}"
            x="0"
            y="0"
            rx="50"
            fill="transparent"
            stroke="${B[n.ctx.themeKey].secondary}"
            stroke-width="3"
        >
        </rect>
        
        ${n.svgContent}

        <foreignObject x="${n.overrideForeignObjectX??"350"}" y="25" width="600" height="600">
        <div xmlns="http://www.w3.org/1999/xhtml" style="font-size: 1.5em;">
            ${n.codeContent}
            <br />              
        </div>
        </foreignObject>
    </g>`},Bt="data:text/markdown;base64,IyBCYXNpYyBkcmF3aW5nCgpUaGVyZSBhcmUgbm90IHRvbyBtYW55IHRhZ3Mgd2l0aGluIGFuIFNWRywgZnJvbSBhIHF1aWNrIGxvb2sgb24gW01ETiB3ZWIgZG9jc10oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvU1ZHL1JlZmVyZW5jZS9FbGVtZW50KSB0aGVyZSBhcmUgYWJvdXQgNjMgdGFncywgSSBhbSBub3QgZ29pbmcgdG8gc2hvdyB5b3UgYWxsIG9mIHRoZW0sIGp1c3QgdGhlIGNvb2wgb25lcwoKbGluZSAtIHF1aXRlIHN0cmFpZ2h0LWZvcndhcmQsIDFzdCB4eSBjb29yZGluYXRlIGFuZCAybmQgeHkgY29vcmRpbmF0ZS4gSSBoYXZlIGFkZGVkIHN0cm9rZSBhbmQgc3Ryb2tlLXdpZHRoIGp1c3QgdG8gY29sb3VyIHRoZSBsaW5lIGdyZWVuIGFuZCBtYWtlIGl0IGVhc2llciB0byBzZWUKCnJlY3QgLSBhbHNvIHNpbXBsZSwgY29vcmRpbmF0ZXMgb2YgdGhlIHRvcCBsZWZ0IGNvcm5lciBhbmQgdGhlbiB0aGUgd2lkdGggYW5kIGhlaWdodC4gSGVyZSBJIGFkZGVkIGZpbGw9dHJhbnNwYXJlbnQsIG90aGVyd2lzZSBpdCB3b3VsZCBoYXZlIGJlZW4gc29saWQgZ3JlZW4gYW5kIEkgaGF2ZSBkb25lIGl0IGZvciB0aGUgcmVzdCBvZiB0aGUgZHJhd2luZ3MKCmNpcmNsZSAtIGNvb3JkaW5hdGVzIG9mIHRoZSBjZW50ZXIgYW5kIHRoZW4gdGhlIHJhZGl1cwoKcG9seWdvbiAtIGNvb3JkaW5hdGVzIHggY29tbWEgeSBhbmQgc2VwYXJhdGVkIGJ5IHdoaXRlc3BhY2VzCgpwb2x5bGluZSAtIHRoZSBzYW1lIGFzIHBvbHlnb24sIGV4Y2VwdCB0aGF0IHRoZSBzdHJva2UgZnJvbSB0aGUgbGFzdCBwb2ludCB0byB0aGUgZmlyc3QgcG9pbnQgaXMgZXhjbHVkZWQKCnBhdGggLSB0aGlzIGlzIGEgc3VwZXIgcG93ZXJmdWwgdGFnLiBGYXIgdG9vIGNvbXBsaWNhdGVkIHRvIGJlIGNvdmVyZWQgaW4gdGhpcyBwcmVzZW50YXRpb24uIFRoZXJlIGFyZSBpbnN0cnVjdGlvbnMgdG8gbW92ZSB0aGUgY3Vyc29yLCBkcmF3IGEgbGluZSBob3Jpem9udGFsbHkgYW5kIHZlcnRpY2FsbHksIGN1cnZlIHRvLCBxdWFkcmF0aWMgQmV6aWVyIGN1cnZlcyBhbmQgbW9yZQoKYmFzaWNhbGx5IHlvdSBjYW4gdXNlIHBhdGggdG8gZHJhdyBhbGwgdGhlIHByZXZpb3VzIHNoYXBlcywgaXQgaXMganVzdCBhIGxvdCBtb3JlIGRpZmZpY3VsdAoKIyMg4pa277iPIFdpdGggdGhlc2UgYmFzaWMgZHJhd2luZ3Mgd2UgY2FuIHJldXNlIGFuZCBidWlsZCBvbiB0b3Agb2YgdGhlbQo=",It=async n=>{const a=B[n.themeKey],t=O(a.code),r={ssg:{secondsToDisplay:3},notes:await Y(Bt)};return{content:()=>N({ctx:n,title:"Basic drawings",content:`
        ${fe({x:100,y:120,ctx:n,animatePosition:1,overrideForeignObjectX:280,svgContent:`<line x1="50" y1="200" x2="225" y2="50" stroke="${a.exampleColour}" stroke-width="5" />`,codeContent:`
            ${t.tag("&lt;line")}<br />
            ${t.keyValue(["x1","=",'"50"'],{tabLevel:1})}
            ${t.keyValue(["y1","=",'"200"'])}<br />
            ${t.keyValue(["x2","=",'"200"'],{tabLevel:1})}
            ${t.keyValue(["y2","=",'"50"'])}<br />
            ${t.keyValue(["stroke","=",`"${a.exampleColour}"`],{tabLevel:1})}
            ${t.keyValue(["stroke-width","=",'"5"'])}<br />
            ${t.tag("/&gt;")}
          `})}

        ${fe({x:1e3,y:120,ctx:n,animatePosition:2,overrideForeignObjectX:280,svgContent:`<rect x="50" y="60" width="165" height="130" fill="transparent" stroke="${a.exampleColour}" stroke-width="5" />`,codeContent:`
            ${t.tag("&lt;rect")}<br />
            ${t.keyValue(["x","=",'"50"'],{tabLevel:1})}
            ${t.keyValue(["y","=",'"75"'])}
            ${t.keyValue(["fill","=",'"transparent"'])}<br />
            ${t.keyValue(["width","=",'"165"'],{tabLevel:1})}
            ${t.keyValue(["height","=",'"130"'])}<br />
            ${t.keyValue(["stroke","=",`"${a.exampleColour}"`],{tabLevel:1})}
            ${t.keyValue(["stroke-width","=",'"5"'])}<br />
            ${t.tag("/&gt;")}
          `})}

        ${fe({x:100,y:420,ctx:n,animatePosition:3,overrideForeignObjectX:280,svgContent:`<circle cx="150" cy="125" r="80" fill="transparent" stroke="${a.exampleColour}" stroke-width="5" />`,codeContent:`
            ${t.tag("&lt;circle")}<br />
            ${t.keyValue(["cx","=",'"150"'],{tabLevel:1})}
            ${t.keyValue(["cy","=",'"125"'])}
            ${t.keyValue(["r","=",'"80"'])}<br />
            ${t.keyValue(["fill","=",'"transparent"'],{tabLevel:1})}<br />
            ${t.keyValue(["stroke","=",`"${a.exampleColour}"`],{tabLevel:1})}
            ${t.keyValue(["stroke-width","=",'"5"'])}<br />
            ${t.tag("/&gt;")}
          `})}

        ${fe({x:1e3,y:420,ctx:n,animatePosition:4,overrideForeignObjectX:280,svgContent:`<polygon points="130,50 200,110 180,190 80,190 60,110" 
              fill="transparent" stroke="${a.exampleColour}" stroke-width="5" />`,codeContent:`
            ${t.tag("&lt;polygon")}<br />
            ${t.keyValue(["points","=",'"130,50 200,110 180,200 80,200 60,110"'],{tabLevel:1})}<br />
            ${t.keyValue(["fill","=",'"transparent"'],{tabLevel:1})}<br />
            ${t.keyValue(["stroke","=",`"${a.exampleColour}"`],{tabLevel:1})}
            ${t.keyValue(["stroke-width","=",'"5"'])}<br />
            ${t.tag("/&gt;")}
          `})}

        ${fe({x:100,y:720,ctx:n,animatePosition:5,overrideForeignObjectX:280,overrideCardHeight:275,svgContent:`<polyline points="120,140 180,140 210,100 180,60 110,60 70,100 70,170 110,210 180,210" 
              fill="transparent" stroke="${a.exampleColour}" stroke-width="5" />`,codeContent:`
            ${t.tag("&lt;polyline")}<br />
            ${t.keyValue(["points","=",'"120,130 180,130 210,90 180,50'],{tabLevel:1})}<br />
            ${t.value('110,50 70,90 70,150 110,190 180,190"',{tabLevel:4})}<br />
            ${t.keyValue(["fill","=",'"transparent"'],{tabLevel:1})}<br />
            ${t.keyValue(["stroke","=",`"${a.exampleColour}"`],{tabLevel:1})}
            ${t.keyValue(["stroke-width","=",'"5"'])}<br />
            ${t.tag("/&gt;")}
          `})}

        ${fe({x:1e3,y:720,ctx:n,animatePosition:6,overrideForeignObjectX:280,overrideCardHeight:275,svgContent:`<use href="#entelect-logo"
              fill="transparent" stroke="${a.exampleColour}" stroke-width="5" transform="translate(-170 -230)"  />`,codeContent:`
            ${t.tag("&lt;path")}<br />
            ${t.keyValue(["d","=",'"M 287.038 363.406 C 285.514 366.2 ...'],{tabLevel:1})}<br />
            ${t.value('... 291.403 361.384 287.038 363.406 Z"',{tabLevel:3})}<br />
            ${t.keyValue(["fill","=",'"transparent"'],{tabLevel:1})}<br />
            ${t.keyValue(["stroke","=",`"${a.exampleColour}"`],{tabLevel:1})}
            ${t.keyValue(["stroke-width","=",'"5"'])}<br />
            ${t.tag("/&gt;")}
          `})}
        `,...r}),...r}},Gt="data:text/markdown;base64,IyBCYXNpY3MKCkkgYW0gbm90IGV4cGVjdGluZyB5b3UgdG8gbWVtb3Jpc2UgYWxsIHRoZSBjb2RlIHlvdSBhcmUgYWJvdXQgdG8sIGp1c3QgdG8gdW5kZXJzdGFuZCBmb3Igbm93LCB5b3UgY2FuIGFsd2F5cyBjb21lIGJhY2sgdG8gY29weSBwYXN0ZSB0aGUgY29kZQoKIyMgVGhlIGJhc2ljIFhNTAoKT24gdGhlIFNWRyB0YWcgd2UgbmVlZCB0byBoYXZlIHRoZSB4bWxucywgeW91IGRvbid0IGFsd2F5cyBuZWVkIHRvIGluY2x1ZGUgYnV0IGl0IGlzIHNhZmUgdG8gZG8gc28uCgpJbiB0aGlzIGV4YW1wbGUgd2UgYWxzbyBoYXZlIHRoZSBoZWlnaHQgYW5kIHdpZHRoIGRlZmluZWQsIHRoZXNlIHZhbHVlcyBhcmUgaW4gcGl4ZWxzIGFuZCBhcmUganVzdCBob3cgbGFyZ2UgdGhlIGltYWdlIHdpbGwgYmUgZGlzcGxheWVkIG9uIHRoZSBkZXZpY2UKCiMjIFZpZXdib3gKCkl0IGlzIGxpa2UgYSB3aW5kb3cgb24gdGhlIGluZmluaXRlIGNhbnZhcyB0aGF0IGFuIFNWRyBwcm92aWRlcy4gYW5kIHRoZSB2aWV3Ym94IGlzIHdoYXQgd2Ugc2VlLgoKRXhhbXBsZXMgb2YgaGFsZi1jaXJjbGUgYW5kIHF1YXJ0ZXItY2lyY2xlIGltYWdlcyB5b3UgY291bGQgbWFrZSBieSBhYnVzaW5nIHRoZSB2aWV3Ym94CgojIyDilrbvuI8gTm93IHRoYXQgeW91IGtub3cgdGhlIGJhc2ljcyBsZXRzIGRyYXcgc29tZSBzaGFwZXMK",Vt=async n=>{const a=B[n.themeKey],t=O(a.code),r={ssg:{secondsToDisplay:3},notes:await Y(Gt)};return{content:()=>N({ctx:n,title:"Basic setup",content:`
        ${K({ctx:n,x:100,y:120,width:925,height:450,animatePosition:1,svgContent:`
            <g transform="translate(990 0) scale(1.58)" class="noselect">
              <rect x="0" y="0" fill="transparent" width="450" height="285" rx="35" stroke="${a.controlForeground}" stroke-width="2" />
              
              <rect x="100" y="100" fill="transparent" width="150" height="150" stroke="red" stroke-width="5" />
              <text x="0" y="0" text-anchor="middle" transform="translate(80, 180) rotate(90)" fill="red">ViewBox</text>
              <text x="175" y="90" text-anchor="middle" fill="red">150</text>
              <text x="275" y="180" text-anchor="middle" fill="red">150</text>

              <circle cx="350" cy="40" r="7" fill="${a.controlForeground}"></circle>
              <text x="350" y="65" text-anchor="middle" fill="${a.controlForeground}">x: 350, y: 40</text>
              <text x="350" y="85" text-anchor="middle" fill="${a.controlForeground}">Not visible</text>
              
              <circle cx="175" cy="150" r="7" fill="${a.exampleColour}"></circle>
              <text x="175" y="185" text-anchor="middle" fill="${a.exampleColour}">x: 175, y: 150</text>
              <text x="175" y="210" text-anchor="middle" fill="${a.exampleColour}">Visible</text>
            </g>
          `,codeContent:`
            ${t.tag("&lt;svg")}
            ${t.keyValue(["xmlns","=",'"http://www.w3.org/2000/svg"'])}
            <br />
            ${t.keyValue(["viewBox","=",'"100 100 250 250"'],{tabLevel:1})}
            <br />
            ${t.keyValue(["width","=",'"300"'],{tabLevel:1})}
            ${t.keyValue(["height","=",'"200"'])}
            <br />
            ${t.tag("&gt;")}
            <br />
            <br />
            <br />
            ${t.value("// SVG content",{tabLevel:1})}
            <br />
            <br />
            <br />
            <br />
            ${t.tag("&lt;/svg&gt;")}
          `})}

        ${K({ctx:n,x:100,y:630,width:1700,height:350,animatePosition:2,svgContent:`
            <g transform="translate(200 50)">
              <text x="50" y="50" text-anchor="middle" font-size="25" fill="${a.controlForeground}">viewBox</text>
              <text x="50" y="80" text-anchor="middle" font-size="25" fill="${a.controlForeground}">0 0 100 100</text>
              <circle cx="50" cy="150" r="50" fill="${a.exampleColour}"></circle>
              <rect x="0" y="100" fill="transparent" width="100" height="100" stroke="red" stroke-width="5" />
            </g>

            <g transform="translate(500 50)">
              <text x="50" y="50" text-anchor="middle" font-size="25" fill="${a.controlForeground}">viewBox</text>
              <text x="50" y="80" text-anchor="middle" font-size="25" fill="${a.controlForeground}">50 0 100 100</text>
              <circle cx="50" cy="150" r="50" transform="translate(-50 0)" fill="${a.exampleColour}" clip-path="url(#basic-setup-example-1)"></circle>
              <rect x="0" y="100" fill="transparent" width="100" height="100" stroke="red" stroke-width="5" />
            </g>

            <g transform="translate(800 50)">
              <text x="50" y="50" text-anchor="middle" font-size="25" fill="${a.controlForeground}">viewBox</text>
              <text x="50" y="80" text-anchor="middle" font-size="25" fill="${a.controlForeground}">0 50 100 100</text>
              <circle cx="50" cy="150" r="50" transform="translate(0 -50)" fill="${a.exampleColour}" clip-path="url(#basic-setup-example-2)"></circle>
              <rect x="0" y="100" fill="transparent" width="100" height="100" stroke="red" stroke-width="5" />
            </g>

            <g transform="translate(1100 50)">
              <text x="50" y="50" text-anchor="middle" font-size="25" fill="${a.controlForeground}">viewBox</text>
              <text x="50" y="80" text-anchor="middle" font-size="25" fill="${a.controlForeground}">50 50 100 100</text>
              <circle cx="50" cy="150" r="50" transform="translate(-50 -50)" fill="${a.exampleColour}" clip-path="url(#basic-setup-example-3)"></circle>
              <rect x="0" y="100" fill="transparent" width="100" height="100" stroke="red" stroke-width="5" />
            </g>

            <g transform="translate(1400 50)">
              <text x="50" y="50" text-anchor="middle" font-size="25" fill="${a.controlForeground}">viewBox</text>
              <text x="50" y="80" text-anchor="middle" font-size="25" fill="${a.controlForeground}">-50 -50 100 100</text>
              <circle cx="50" cy="150" r="50" transform="translate(50 50)" fill="${a.exampleColour}" clip-path="url(#basic-setup-example-4)"></circle>
              <rect x="0" y="100" fill="transparent" width="100" height="100" stroke="red" stroke-width="5" />
            </g>
          `,codeContent:""})}
        `,...r}),...r}},St="data:text/markdown;base64,IyBDU1MKCl9JIGhhdmUgc29tZSBDU1MgY29kZSB0byB0YWxrIHRvIHlvdSBhYm91dCFfCgpZb3UgY2FuIHVzZSBDU1MgaW4geW91ciBTVkcgZmlsZXMsIGNvb2wgaHVoPwoKIyMgUnVsZXMKCllvdSBjYW4gdXNlIGNzcyB0byBkbyBzdmcgdGhpbmdzLCBsaWtlIGVhcmxpZXIgd2Ugd2VyZSB1c2luZyBmaWxsIG9uIHRoZSBiYXNpYyBkcmF3aW5ncyBhbmQgbm93IHdlIGNhbiBkbyB0aGUgc2FtZSBidXQgd2l0aCBjc3MKCkJlY2F1c2UgU1ZHcyBzdXBwb3J0IENTUywgeW91IGNhbiBhbHNvIGRlZmluZSBhbmQgdXNlIENTUyBhbmltYXRpb25zCgojIyDilrbvuI8gQnV0IHdoYXQgaWYgeW91IHdhbnQgYW5pbWF0aW9ucyBidXQgaGF0ZSBDU1MK",Ft=async n=>{const a=B[n.themeKey],t=O(a.code),r={ssg:{secondsToDisplay:3},notes:await Y(St)};return{content:()=>N({ctx:n,title:"Basics of drawing - CSS",content:`
        ${K({ctx:n,x:100,y:120,width:750,height:670,animatePosition:1,svgContent:`
            <circle class="cool-circle" cx="580" cy="270" r="75" />
          `,codeContent:`
            ${t.tag("&lt;svg",m)}
            ${t.keyValue(["version","=",'"1.1"'],m)}
            ${t.keyValue(["width","=",'"300"'],m)}
            ${t.keyValue(["height","=",'"200"'],m)}
            ${t.keyValue(["xmlns","=",'"http://ww..."'],m)}
            ${t.tag("&gt;",m)}
            <br />
            <br />
            
            ${t.tag("&lt;defs&gt;",{...m,tabLevel:1})}<br />
            ${t.value("...",{...m,tabLevel:2})}<br />
            ${t.tag("&lt;/defs&gt;",{...m,tabLevel:1})}
            <br />
            <br />
            
            ${t.tag("&lt;style&gt;",{tabLevel:1})}
            <br />
            ${t.key(".cool-circle",{tabLevel:2})}
            ${t.value("{")}
            <br />

            ${t.keyValue(["fill",": ","#FF0000;"],{tabLevel:3})}<br />
            ${t.keyValue(["stroke",": ","#FFFF00;"],{tabLevel:3})}<br />
            ${t.keyValue(["stroke-width",": ","10px;"],{tabLevel:3})}
            <br />            

            ${t.value("}",{tabLevel:2})}
            <br />
            ${t.tag("&lt;/style&gt;",{tabLevel:1})}
            <br />
            <br />

            ${t.tag("&lt;circle",{tabLevel:1})}
            ${t.keyValue(["class","=",'"cool-circle"'])}
            ${t.keyValue(["cx","=",'"50"'],m)}
            ${t.keyValue(["cy","=",'"50"'],m)}
            ${t.keyValue(["r","=",'"170"'],m)}
            ${t.tag("/&gt;")}
            <br />
            <br />
            ${t.tag("&lt;/svg&gt;",m)}
          `})}

        ${K({ctx:n,x:900,y:120,width:910,height:820,animatePosition:2,svgContent:`
            <circle class="cool-circle cool-circle-anim" cx="650" cy="150" r="75" />
          `,codeContent:`
            ${t.tag("&lt;svg",m)}
            ${t.keyValue(["version","=",'"1.1"'],m)}
            ${t.keyValue(["width","=",'"300"'],m)}
            ${t.keyValue(["height","=",'"200"'],m)}
            ${t.keyValue(["xmlns","=",'"http://ww..."'],m)}
            ${t.tag("&gt;",m)}
            <br />
            <br />
            
            ${t.tag("&lt;style&gt;",{tabLevel:1})}
            <br />
            ${t.keyValue(["@keyframes"," anim-cool-circle ","{"],{tabLevel:2})}<br />
            ${t.tag("0% { transform: translate(0, 0); }",{tabLevel:3})}<br />
            ${t.tag("100% { transform: translate(0, 12em); }",{tabLevel:3})}<br />

            ${t.value("}",{tabLevel:2})}
            <br />
            <br />
            ${t.key(".cool-circle-anim",{tabLevel:2})}
            ${t.value("{")}
            <br />

            ${t.keyValue(["animation",": ","anim-cool-circle;"],{tabLevel:3})}<br />
            ${t.keyValue(["animation-direction",": ","alternate;"],{tabLevel:3})}<br />
            ${t.keyValue(["animation-duration",": ","3s;"],{tabLevel:3})}<br />
            ${t.keyValue(["animation-iteration-count",": ","infinite;"],{tabLevel:3})}<br />

            ${t.value("}",{tabLevel:2})}
            <br />
            ${t.tag("&lt;/style&gt;",{tabLevel:1})}
            <br />
            <br />

            ${t.tag("&lt;circle",{tabLevel:1})}
            ${t.keyValue(["class","=",'"cool-circle cool-circle-anim"'])}
            <br />
            ${t.keyValue(["x","=",'"50"'],{...m,tabLevel:2})}
            ${t.keyValue(["y","=",'"50"'],m)}
            ${t.keyValue(["width","=",'"165"'],m)}
            ${t.keyValue(["height","=",'"150"'],m)}
            <br />
            ${t.tag("/&gt;",{tabLevel:1})}
            <br />
            <br />
            ${t.tag("&lt;/svg&gt;",m)}
          `})}
        `,...r}),...r}},zt="data:text/markdown;base64,IyBUaGUgZGVmcyB0YWcKCi0gdGhlIGRlZnMgdGFnIGlzIHVzZWQgdG8gc3RvcmUgZGVmaW5pdGlvbnMsIGl0J3MgY29udGVudCBpc24ndCBkaXNwbGF5ZWQgdW50aWwgcmVmZXJlbmNlZCBsYXRlcgotIEl0IGNhbiBoZWxwIHlvdSBrZWVwIHlvdXIgU1ZHIGNsZWFuIGFuZCBtb2R1bGFyCgojIyBUb3AgTGVmdAoKLSBTeW1ib2wgYWxsb3dzIHVzIHRvIGdyb3VwIG11bHRpcGxlIHNoYXBlcwotIFdlIGNhbiByZXVzZSB0aGUgc2hhcGVzIHdpdGggdGhlICoqdXNlKiogdGFnIGFuZCB0aGUgKippZCoqCgojIyBUaGUgb3RoZXJzCgotIFdlIGNhbiBkZWZpbmUgYSB3aG9sZSBsb3Qgb2YgdGhpbmdzIGxpa2UgZ3JhZGllbnRzLCBmaWx0ZXJzLCBwYXR0ZXJucyBhbmQgbW9yZQotIEFnYWluIHJlZmVyZW5jaW5nIHRoZW0gYnkgKippZCoqCgojIyDilrbvuI8gV2Ugd2lsbCBiZSB1c2luZyB0aGlzIHN0YXIgaW4gdGhlIG5leHQgY291cGxlIG9mIGV4YW1wbGVzCg==",Zt=async n=>{const a=T(n),t=Ge(n.themeKey),r=B[n.themeKey],u=O(r.code),I=ee(n.env)?"1ms":"10s",z=n.env=="ssg"?"-50":"0",P={ssg:{secondsToDisplay:3},notes:await Y(zt)};return{content:()=>N({ctx:n,title:"Basics of drawing - defs",content:`
        ${K({ctx:n,x:100,y:120,width:925,height:450,animatePosition:1,svgContent:`
            <use href="#star-for-def-example" x="600" y="100" fill="transparent" stroke="${r.exampleColour}" />
            <use href="#star-for-def-example" x="700" y="210" fill="transparent" stroke="#007ca3" />
          `,codeContent:`
            ${u.tag("&lt;svg",m)}
            ${u.keyValue(["version","=",'"1.1"'],m)}
            ${u.keyValue(["width","=",'"300"'],m)}
            ${u.keyValue(["height","=",'"200"'],m)}
            ${u.keyValue(["xmlns","=",'"http://www.w3.org/2000/svg"'],m)}
            ${u.tag("&gt;",m)}
            <br />
            
            ${u.tag("&lt;defs&gt;",{tabLevel:1})}
            <br />
            ${u.tag("&lt;symbol",{tabLevel:2})}
            ${u.keyValue(["id","=",'"star"'])}${u.tag("&gt;")}
            <br />
            ${u.tag("&lt;polygon",{tabLevel:3})}
            ${u.keyValue(["fill","=",'"transparent"'])}
            ${u.keyValue(["stroke-width","=",'"5"'])}
            <br />
            ${u.keyValue(["points","=",'"96,0,125.38926261462,55.91.....'],{tabLevel:4})}
            ${u.tag("/&gt;")}
            <br />
            ${u.tag("&lt;symbol&gt;",{tabLevel:2})}
            <br />

            ${u.tag("&lt;/defs&gt;",{tabLevel:1})}
            <br />
            <br />

            ${u.tag("&lt;use",{tabLevel:1})}
            ${u.keyValue(["href","=",'"#star"'])}
            ${u.keyValue(["x","=",'"600"'])}
            ${u.keyValue(["y","=",'"100"'])}
            ${u.keyValue(["stroke","=",`"${r.exampleColour}"`])}
            ${u.tag("/&gt;")}
            <br />
            
            ${u.tag("&lt;use",{tabLevel:1})}
            ${u.keyValue(["href","=",'"#star"'])}
            ${u.keyValue(["x","=",'"700"'])}
            ${u.keyValue(["y","=",'"210"'])}
            ${u.keyValue(["stroke","=",`"${r.exampleColour2}"`])}
            ${u.tag("/&gt;")}
            <br />
            ${u.tag("&lt;/svg&gt;",m)}
          `})}
        
        ${K({ctx:n,x:1075,y:120,width:735,height:450,animatePosition:2,svgContent:`
            ${ve({gradientId:t.SphereBlue1Gradient.id,x:600,y:320,size:100,rotateDeg:0})}
          `,codeContent:`
            ${u.tag("&lt;svg",m)}
            ${u.keyValue(["version","=",'"1.1"'],m)}
            ${u.keyValue(["width","=",'"300"'],m)}
            ${u.keyValue(["height","=",'"200"'],m)}
            ${u.keyValue(["xmlns","=",'"http://w...."'],m)}
            ${u.tag("&gt;",m)}
            <br />
            
            ${u.tag("&lt;defs&gt;",{tabLevel:1})}
            <br />
            ${u.tag("&lt;linearGradient",{tabLevel:2})}
            ${u.keyValue(["id","=",'"Blue1Gradient"'])}${u.tag("&gt;")}
            <br />
            ${u.tag("&lt;stop",{tabLevel:3})}
            ${u.keyValue(["offset","=",'"0%'])}
            ${u.keyValue(["stop-color","=",'"#8497F2"'])}
            ${u.tag("&gt;&lt;/stop&gt;")}
            <br />
            ${u.tag("&lt;stop",{tabLevel:3})}
            ${u.keyValue(["offset","=",'"100%'])}
            ${u.keyValue(["stop-color","=",'"#4A66ED"'])}
            ${u.tag("&gt;&lt;/stop&gt;")}
            <br />
            ${u.tag("&lt;/linearGradient&gt;",{tabLevel:2})}
            <br />

            ${u.tag("&lt;/defs&gt;",{tabLevel:1})}
            <br />
            <br />

            ${u.tag("&lt;circle",{tabLevel:1})}
            ${u.keyValue(["cx","=",'"100"'])}
            ${u.keyValue(["cy","=",'"100"'])}
            ${u.keyValue(["r","=",'"100"'])}
            <br />
            ${u.keyValue(["fill","=",'"url(#Blue1Gradient)"'],{tabLevel:2})}
            ${u.tag("/&gt;")}
            <br />
            ${u.tag("&lt;/svg&gt;",m)}
          `})}
        
        ${K({ctx:n,x:100,y:620,width:925,height:380,animatePosition:3,svgContent:`
            <rect width="200" height="100" x="650" y="100" fill="url(#pattern-for-def-example)" />
          `,codeContent:`
            ${u.tag("&lt;svg",m)}
            ${u.keyValue(["version","=",'"1.1"'],m)}
            ${u.keyValue(["width","=",'"300"'],m)}
            ${u.keyValue(["height","=",'"200"'],m)}
            ${u.keyValue(["xmlns","=",'"http://www.w3.org/2000/svg"'],m)}
            ${u.tag("&gt;",m)}
            <br />
            
            ${u.tag("&lt;defs&gt;",{tabLevel:1})}
            <br />
            ${u.tag("&lt;pattern",{tabLevel:2})}
            ${u.keyValue(["id","=",'"my-pattern"'])}${u.tag("&gt;")}
            <br />
            ${u.tag("&lt;circle",{tabLevel:3})}
            ${u.keyValue(["cx","=",'"10"'])}
            ${u.keyValue(["cy","=",'"10"'])}
            ${u.keyValue(["r","=",'"10"'])}
            ${u.keyValue(["fill","=",`"${r.exampleColour}"`])}
            ${u.tag("/&gt;")}
            <br />
            ${u.tag("&lt;/pattern&gt;",{tabLevel:2})}
            <br />

            ${u.tag("&lt;/defs&gt;",{tabLevel:1})}
            <br />
            <br />
            
            ${u.tag("&lt;rect",{tabLevel:1})}
            ${u.keyValue(["width","=",'"200"'])}
            ${u.keyValue(["height","=",'"100"'])}
            ${u.keyValue(["x","=",'"0"'])}
            ${u.keyValue(["y","=",'"0"'])}
            ${u.keyValue(["fill","=",'"url(#my-pattern)"'])}
            ${u.tag("/&gt;")}
            <br />
            ${u.tag("&lt;/svg&gt;",m)}
          `})}
        
        ${K({ctx:n,x:1075,y:620,width:0,height:0,animatePosition:4,svgContent:`
            <g class="transition-slide noselect" transform="translate(700 ${z})">
                ${Xe({from:`700 ${z}`,to:`0 ${z}`,begin:a==null?void 0:`${a}-slide-anim.begin+1s`,initialDelay:I})}
              <rect 
                width="500"
                height="180"
                x="190"
                y="50"
                rx="50"
                fill="${r.illustrationShoes}"
                stroke="${r.secondary}"
                stroke-width="3"
              >
              </rect>
              <text x="220" y="100" fill="${r.controlForeground}" font-size="30">
                Heads up!
              </text>
              <text x="220" y="150" fill="${r.controlForeground}" font-size="30">
                We are going to make use of the 
              </text>
              <text x="220" y="190" fill="${r.controlForeground}" font-size="30">
                top left example again
              </text>
              <polyline
                points="650,228 690,250 690,170"
                fill="${r.illustrationShoes}"
                stroke="${r.secondary}"
                stroke-width="3"
              />
              ${q("alien",'transform="translate(-90, -700) scale(1.5)"')}
            </g>
          `})}

        <g opacity="0" class="noselect">
          ${H({duration:"1s",begin:ce(a,500*4,"end")})}
          <g transform="translate(1075 890)">
            <text x="0" y="0" font-size="25" font-style="italic"
              fill="${r.controlForeground}" 
            >Free resources for SVG backgrounds &amp; more:</text>
          </g>
              
          <line x1="1075" y1="925" x2="1085" y2="925" stroke="${r.controlForeground}" stroke-width="2" />
          <g transform="translate(1100 930)">
            <a xlink:href="https://www.fffuel.co?${v.linkRef}" target="_blank">
              <text x="0" y="0" font-size="25" font-style="italic"
                fill="${r.controlForeground}" 
              >fffuel.co</text>
              <line x1="0" y1="10" x2="85" y2="10" stroke="${r.controlForeground}" stroke-width="2" />
            </a>
          </g>
          
          <line x1="1075" y1="975" x2="1085" y2="975" stroke="${r.controlForeground}" stroke-width="2" />
          <g transform="translate(1100 980)">
            <a xlink:href="https://www.svgbackgrounds.com/set/free-svg-backgrounds-and-patterns/?${v.linkRef}" target="_blank">
              <text x="0" y="0" font-size="25" font-style="italic"
                fill="${r.controlForeground}" 
              >svgbackgrounds.com</text>
              <line x1="0" y1="10" x2="210" y2="10" stroke="${r.controlForeground}" stroke-width="2" />
            </a>
          </g>
        </g>
        
        `,...P}),...P}},Lt="data:text/markdown;base64,IyBGYWtlIFN2ZwoKVGhpcyB0b3AgZXhhbXBsZSBpcyB3aGF0IEkgc29tZXRpbWVzIHNlZSBpbiB0aGUgd2lsZCBhbmQgaXQgdXBzZXRzIG1lIHdoZW4gSSBzZWUgaXQuIEkgY2FsbCBpdCBhIGZha2Ugc3ZnLgoKU29tZXRpbWVzIHlvdSB3aWxsIGRvd25sb2FkIGFuIHN2ZyBmcm9tIGdvb2dsZSBpbWFnZXMgb3IgYSBza2V0Y2h5IHdlYnNpdGUgYW5kIGl0IGlzIGEgbG9nbyBvciBpbGx1c3RyYXRpb24gdGhhdCB5b3Ugd2FudCB0byB1c2UgYnV0IHlvdSBub3RpY2UgdGhhdCBpdCBkb2Vzbid0IHNjYWxlIHZlcnkgd2VsbC4gaXQgaXMgYmx1cnJ5IHdoZW4geW91IGVubGFyZ2UgaXQuIEFuZCB0aGF0IGNhbiBiZSBiZWNhdXNlIGl0IGlzIGp1c3QgYSByZWd1bGFyIG9sZCBpbWFnZSBmaWxlIHB1dCBpbnRvIGFuIHN2ZyBjb250YWluZXIKCkxpdGVyYWxseSBub25lIG9mIHRoZSBiZW5lZml0cyBhbmQgYWxsIG9mIHRoZSBkb3duc2lkZXMuIEJ1dCBoZXJlIGlzIGhvdyB5b3UgZG8gaXQsIGluIGNhc2UgeW91IG5lZWQgaXQKCiMjIE5ldHdvcmsgaW1hZ2VzCgpZb3UgY2FuIGFsc28gbG9hZCBuZXR3b3JrIGltYWdlcyBpbiB0aGUgaW1hZ2UgdGFnIG9mIGFuIFNWRy4gSW4gdGhpcyBleGFtcGxlIEkgYWxzbyBtYWRlIHVzZSBvZiBjbGlwUGF0aCBhbmQgdGhlIHN0YXIgZGVmaW5pdGlvbiBmcm9tIHRoZSBsYXN0IHNsaWRlIHRvIG1ha2UgdGhpcyBjdXQgb3V0IEVudGVsZWN0IGxvZ28uCgojIyDilrbvuI8gSWYgeW91IGFyZSBnZXR0aW5nIHRpcmVkIG9mIFNWRyBjb2RlLCBJIGhhdmUgc29tZSBnb29kIG5ld3MK",Mt=async n=>{const a=B[n.themeKey],t=O(a.code),r={ssg:{secondsToDisplay:3},notes:await Y(Lt)};return{content:async()=>N({ctx:n,title:"Basics of drawing - Fake SVGs",content:`
        ${K({ctx:n,x:100,y:120,width:1700,height:350,animatePosition:1,svgContent:`
            <g transform="scale(1.5) translate(850, 10)">
              <use href="#star-for-def-example" x="0" y="10" 
                stroke="${a.exampleColour}" fill="${a.exampleColour}" 
              />
              <image x="65" y="70"
                href="${await We(E.entelect)}"
                alt="Entelect logo"
               />
            </g>
          `,codeContent:`
            ${t.tag("&lt;svg",m)}
            ${t.keyValue(["version","=",'"1.1"'],m)}
            ${t.keyValue(["width","=",'"300"'],m)}
            ${t.keyValue(["height","=",'"200"'],m)}
            ${t.keyValue(["xmlns","=",'"http://www.w3.org/2000/svg"'],m)}
            ${t.tag("&gt;",m)}
            <br />
            
            ${t.tag("&lt;use",{tabLevel:1})}
            ${t.keyValue(["href","=",'"#star"'])}
            ${t.keyValue(["x","=",'"0"'])}
            ${t.keyValue(["y","=",'"10"'])}
            ${t.keyValue(["stroke","=",`"${a.exampleColour}"`])}
            ${t.keyValue(["fill","=",`"${a.exampleColour}"`])}
            ${t.tag("/&gt;")}
            <br />
            <br />
            
            ${t.tag("&lt;image",{tabLevel:1})}
            <br />
            ${t.keyValue(["href","=",'"data:image/png;base64,'],{tabLevel:2})}
            ${t.tag("&lt;BASE 64 DATA&gt;")}${t.value('"')}
            <br />
            ${t.keyValue(["x","=",'"60"'],{tabLevel:2})}
            ${t.keyValue(["y","=",'"70"'])}
            ${t.keyValue(["alt","=",'"raster image in svg"'])}
            <br />
            ${t.tag("/&gt;",{tabLevel:1})}
            <br />

            ${t.tag("&lt;/svg&gt;",m)}
          `})}
        
        ${K({ctx:n,x:100,y:520,width:1700,height:450,animatePosition:2,svgContent:`
            <g transform="scale(1.5) translate(850, 50)">
              <clipPath id="httpImageClip">
                <use href="#star-for-def-example" x="0" y="10"/>
              </clipPath>
              <image href="${ee(n.env)?await We(E.entelectGithub):"./assets/img/entelect-github.png"}" clip-path="url(#httpImageClip)" alt="Description of the image" />
            </g>
          `,codeContent:`
            ${t.tag("&lt;svg",m)}
            ${t.keyValue(["version","=",'"1.1"'],m)}
            ${t.keyValue(["width","=",'"300"'],m)}
            ${t.keyValue(["height","=",'"200"'],m)}
            ${t.keyValue(["xmlns","=",'"http://www.w3.org/2000/svg"'],m)}
            ${t.tag("&gt;",m)}
            <br />
            <br />
            
            ${t.tag("&lt;clipPath",{tabLevel:1})}
            ${t.keyValue(["id","=",'"#httpImageClip"'])}
            <br/>
            ${t.tag("&lt;use",{tabLevel:2})}
            ${t.keyValue(["href","=",'"#star"'])}
            ${t.keyValue(["x","=",'"0"'])}
            ${t.keyValue(["y","=",'"10"'])}
            ${t.tag("/&gt;")}
            <br />
            ${t.tag("&lt;/clipPath&gt;",{tabLevel:1})}
            <br />
            <br />
            
            ${t.tag("&lt;image",{tabLevel:1})}
            <br />
            ${t.keyValue(["href","=",'"https://avatars.githubusercontent.com/u/8133921?s=200&amp;v=4"'],{tabLevel:2})}
            <br />
            ${t.keyValue(["clip-path","=",'"url(#httpImageClip)"'],{tabLevel:2})}
            ${t.keyValue(["alt","=",'"raster image in svg"'])}
            <br />
            ${t.tag("/&gt;",{tabLevel:1})}
            <br />

            ${t.tag("&lt;/svg&gt;",m)}
          `})}
        `,...r}),...r}},Wt="data:text/markdown;base64,IyBXaGF0IGlzIGEgU1ZHCgotIEFuIFNWRyBpcyBhIHBpY3R1cmUgZnJvbSBtYXRocy4KLSBZb3UgZGVmaW5lIGhvdyB0byBkcmF3IHRoZSBpbWFnZSBpbiBiYXNpYyBpbnN0cnVjdGlvbnMgc3VjaCBhcyBsaW5lcywgcmVjdGFuZ2xlcyBhbmQgY2lyY2xlcwoKWW91IGRlZmluZSBob3cgdG8gZHJhdyBhbiBTVkcgdXNpbmcgWE1MLgoKLSBFYXN5IHRvIGVkaXQKLSBVbmxpa2Ugbm9ybWFsIGltYWdlcyB0aGF0IHJlcXVpcmUgYSB0b29sIHN1Y2ggYXMgUGhvdG9zaG9wIG9yIPCfkZFQYWludC5uZXTwn5GRCgpPbiB0aGUgdG9wIHJpZ2h0IHlvdSBjYW4gc2VlIGEgbGl0dGxlIGJhc2ljIGV4YW1wbGUgb2Ygd2hhdCBhbiBTVkcgbG9va3MgbGlrZSwgdGhlIGNvZGUgb24gdGhlIGxlZnQgcHJvZHVjZXMgdGhlIGltYWdlIG9uIHRoZSByaWdodC4KCiMjIOKWtu+4jyBOb3cgeW91IGtub3cgd2hhdCBpcyBhbiBTVkcK",Pt=500,Ht=async n=>{const a=T(n),t=B[n.themeKey],r=O(t.code),u=I=>ce(a,Pt*I),k={ssg:{secondsToDisplay:3},notes:await Y(Wt)};return{content:()=>N({ctx:n,title:"What is an SVG?",content:`
        <g class="noselect" opacity="0" transform="translate(100 150)">
          ${H({duration:"1s",begin:u(0)})}
          <rect 
              width="${v.width/3}"
              height="350"
              x="0"
              y="0"
              rx="50"
              fill="transparent"
              stroke="${t.secondary}"
              stroke-width="3"
          >
          </rect>
          <text x="55" y="105" opacity="0" fill="${t.controlForeground}" font-size="100">
            ${H({duration:"1s",begin:u(1)})}
            S
          </text>
          <text x="47" y="205" opacity="0" fill="${t.controlForeground}" font-size="100">
            ${H({duration:"1s",begin:u(1)})}
            V
          </text>
          <text x="45" y="310" opacity="0" fill="${t.controlForeground}" font-size="100">
            ${H({duration:"1s",begin:u(1)})}
            G
          </text>

          <text x="100" y="105" opacity="0" fill="${t.controlForeground}" font-size="50">
            ${H({duration:"1s",begin:u(4)})}
            calar
          </text>
          <text x="97" y="205" opacity="0" fill="${t.controlForeground}" font-size="50">
            ${H({duration:"1s",begin:u(5)})}
            ector
          </text>
          <text x="105" y="305" opacity="0" fill="${t.controlForeground}" font-size="50">
            ${H({duration:"1s",begin:u(6)})}
            raphic
          </text>
        
          <g class="noselect" opacity="0" transform="translate(0 50)">
            ${H({duration:"1s",begin:u(10)})}
            <text x="550" y="60 " text-anchor="middle" font-size="35" fill="${t.controlForeground}">A</text>
            <text x="550" y="100" text-anchor="middle" font-size="35" fill="${t.controlForeground}">picture</text>
            <text x="550" y="145" text-anchor="middle" font-size="35" fill="${t.controlForeground}">from</text>
            <text x="550" y="190" text-anchor="middle" font-size="35" fill="${t.controlForeground}">maths</text>
          </g>
        </g>

        <g opacity="0" transform="translate(800 150)">
          ${H({duration:"1s",begin:u(1)})}
          <rect 
              width="1000"
              height="350"
              x="0"
              y="0"
              rx="50"
              fill="transparent"
              stroke="${t.secondary}"
              stroke-width="3"
          >
          </rect>
          
          <foreignObject x="40" y="40" width="600" height="600">
            <div xmlns="http://www.w3.org/1999/xhtml" style="font-size: 1.5em;">
              ${r.tag("&lt;svg")}
              ${r.keyValue(["xmlns","=",'"http://www.w3.org/2000/svg"'])}
              <br />
              ${r.keyValue(["width","=",'"300"'],{tabLevel:1})}
              ${r.keyValue(["height","=",'"300"'])}
              ${r.tag("&gt;")}
              <br />
              <br />
              
              ${r.tag("&lt;rect",{colour:t.code.tag,tabLevel:1})}
              ${r.keyValue(["width","=",'"250"'])}
              ${r.keyValue(["height","=",'"250"'])}
              ${r.keyValue(["fill","=",'"purple"'])}
              ${r.tag("/&gt;")}
              <br />
              ${r.tag("&lt;circle",{colour:t.code.tag,tabLevel:1})}
              ${r.keyValue(["cx","=",'"125"'])}
              ${r.keyValue(["cy","=",'"125"'])}
              ${r.keyValue(["r","=",'"80"'])}
              ${r.keyValue(["fill","=",'"lightblue"'])}
              ${r.tag("/&gt;")}
              <br />
              <br />

              ${r.tag("&lt;/svg&gt;")}
              
            </div>
          </foreignObject>
            

          <g transform="translate(700 40)">
            <rect width="250" height="250" fill="purple" />
            <circle cx="125" cy="125" r="80" fill="lightblue" />
          </g>


        </g>
        
        
        <g class="noselect" opacity="0" transform="translate(100 550)">
          ${H({duration:"1s",begin:u(2)})}
          <rect 
              width="${v.width-220}"
              height="400"
              x="0"
              y="0"
              rx="50"
              fill="transparent"
              stroke="${t.secondary}"
              stroke-width="3"
          >
          </rect>

          <text x="50" y="85" fill="${t.controlForeground}" font-size="40">
            Fun facts
          </text>

          <circle cx="55" cy="167" r="7" fill="${t.exampleColour}" />
          <text x="75" y="175" fill="${t.controlForeground}" font-size="30">
            The first proposed SVG file format was in 1994 by a Dutch software engineer Martijn Koster.
          </text>

          <circle cx="55" cy="217" r="7" fill="${t.exampleColour}" />
          <text x="75" y="225" fill="${t.controlForeground}" font-size="30">
            It wasn't until 2003 that the SVG file format was finalised and approved as an ISO standard.
          </text>
          
        </g>
        
        `,...k}),...k}},Pe=(n,a)=>{const t=O(n.code);return`
    ${t.tag(`// ${a.fileName}.html`,{colour:"lightgrey",opacity:.5})}
    <br />
    ${t.tag("&lt;div")}
    ${t.keyValue(["style","=",`"color: ${a.colourValue};"`])}${t.tag("&gt;")}
    <br />

    ${t.tag("&lt;svg",{...m,tabLevel:1})}
    ${t.keyValue(["version","=",'"1.1"'],m)}
    ${t.value("...",m)}
    <br />
    
    ${t.tag("&lt;circle",{tabLevel:2})}
    ${t.keyValue(["cx","=",'"125"'])}
    ${t.keyValue(["cy","=",'"125"'])}
    ${t.keyValue(["r","=",'"80"'])}
    <br />
    ${t.keyValue(["fill","=",'"currentcolor"'],{tabLevel:3})}
    <br />
    ${t.tag("/&gt;",{tabLevel:2})}
    <br />

    ${t.tag("&lt;/svg&gt;",{...m,tabLevel:1})}

    <br />
    ${t.tag("&lt;/div&gt;")}
    <br />
    <br />`},me=(n,a,t)=>`    
    <circle
        cx="${n}" cy="${a}" r="20" fill="${t}"
    />`,be=n=>{const a=B[n.ctx.themeKey],t=T(n.ctx),r=u=>ce(t,a.defaultDelayInMs*u);return`
    <g opacity="0" transform="translate(${n.x} ${n.y})">
        ${H({duration:"1s",begin:r(n.animatePosition-1)})}
        <rect 
          width="500"
          height="800"
          x="0"
          y="0"
          rx="50"
          fill="transparent"
          stroke="${a.secondary}"
          stroke-width="3"
        >
        </rect>
        
        ${n.svgContent}
    </g>`},jt="data:text/markdown;base64,IyBXaGVuIHRvIHVzZT8KCiMjIEZpbGUgc2l6ZXMKCi0gVGhpcyBleGFtcGxlIGlzIGEgYmFzaWMgaW1hZ2Ugd2l0aCAxMSByZWN0YW5nbGVzCi0gT3JpZyB3YXMgNjAgcGl4ZWxzCi0gSSBwdXQgdGhlIFBOR3MgdGhyb3VnaCBrcmFrZW4uaW8gdG8gcmVkdWNlIHRoZSBmaWxlIHNpemVzCgojIyBJY29ucwoKLSBQZXJmZWN0IGZvciBTVkdzCi0gT2Z0ZW4gc2ltcGxlIHNoYXBlcwotIEVhc3kgdG8gdGhlbWUgdXNpbmcgQ1NTICYgQ1NTIHZhcmlhYmxlcwotIENhbiBoYXZlIHNvbWUgaW50ZXJhY3Rpdml0eQoKIyMgQW5pbWF0aW9uCgotIEZ1bm55IG5vdGUKICAtIDxodHRwczovL2Nzcy10cmlja3MuY29tL3N2Zy1saW5lLWFuaW1hdGlvbi13b3Jrcy8+Cg==",Rt=async n=>{const a=B[n.themeKey],t={ssg:{secondsToDisplay:3},notes:await Y(jt)};return{content:()=>N({ctx:n,title:"When to use an SVG?",content:`
        ${be({ctx:n,x:100,y:150,animatePosition:1,svgContent:`
            <text x="250" y="75" class="noselect" fill="${a.controlForeground}" text-anchor="middle" font-size="50">
              Reduce file sizes
            </text>

            <g transform="translate(50 175)">
              <use href="#duckPixelArt" />
              <text x="120" y="35" fill="${a.code.key}" font-size="25">
                SVG
              </text>
              <text x="120" y="65" fill="${a.code.value}" font-size="25">
                0.6 kb
              </text>
            </g>

            <g transform="translate(50 400)">
              <use href="#duckPixelArt" />
              <text x="120" y="35" fill="${a.code.key}" font-size="25">
                PNG
              </text>
              <text x="175" y="35" fill="${a.code.tag}" font-size="25">
                (256 x 256)
              </text>
              <text x="120" y="65" fill="${a.code.value}" font-size="25">
                3.57 kb
              </text>
            </g>

            <g transform="translate(50 500)">
              <use href="#duckPixelArt" /> 
              <text x="120" y="35" fill="${a.code.key}" font-size="25">
                PNG
              </text>
              <text x="175" y="35" fill="${a.code.tag}" font-size="25">
                (512 x 512)
              </text>
              <text x="120" y="65" fill="${a.code.value}" font-size="25">
                7.08 kb
              </text>
            </g>

            <g transform="translate(50 600)">
              <use href="#duckPixelArt" /> 
              <text x="120" y="35" fill="${a.code.key}" font-size="25">
                PNG
              </text>
              <text x="175" y="35" fill="${a.code.tag}" font-size="25">
                (1024 x 1024)
              </text>
              <text x="120" y="65" fill="${a.code.value}" font-size="25">
                18.40 kb
              </text>
            </g>
          `})}

        ${be({ctx:n,x:700,y:150,animatePosition:2,svgContent:`
            <text x="250" y="75" class="noselect" fill="${a.controlForeground}" text-anchor="middle" font-size="50">
              Icons
            </text>

            ${ee(n.env)?`
                  <g transform="translate(100 135) scale(3)" fill="${a.controlForeground}">
                    <g>
                      <circle cx="16" cy="16" r="8.4"></circle>
                      <path d="M18.3 3.2c0 1.3-1 2.3-2.3 2.3s-2.3-1-2.3-2.3S14.7.9 16 .9s2.3 1 2.3 2.3zm-4.6 25.6c0-1.3 1-2.3 2.3-2.3s2.3 1 2.3 2.3-1 2.3-2.3 2.3-2.3-1-2.3-2.3zm15.1-10.5c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zM3.2 13.7c1.3 0 2.3 1 2.3 2.3s-1 2.3-2.3 2.3S.9 17.3.9 16s1-2.3 2.3-2.3zm5.8-7C9 7.9 7.9 9 6.7 9S4.4 8 4.4 6.7s1-2.3 2.3-2.3S9 5.4 9 6.7zm16.3 21c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zm2.4-21c0 1.3-1 2.3-2.3 2.3S23 7.9 23 6.7s1-2.3 2.3-2.3 2.4 1 2.4 2.3zM6.7 23C8 23 9 24 9 25.3s-1 2.3-2.3 2.3-2.3-1-2.3-2.3 1-2.3 2.3-2.3z"></path>
                    </g>
                  </g>

                  <g transform="translate(300 110) scale(4.2)" fill="${a.controlForeground}">
                    <clipPath id="theme-toggle-cutout1">
                      <path d="M-9 3h25a1 1 0 0017 13v30H0Z" transform="translate3d(-9 14 0)"></path>
                    </clipPath>
                    <g clip-path="url(#theme-toggle-cutout1)">
                      <circle cx="16" cy="16" r="8.4"></circle>
                    </g>
                  </g>`:`
                  ${Yt(a)}
                  <g transform="translate(60 85)" class="noselect">
                    <polygon
                      points="200,103 165,103 165,90 135,110 165,130 165,117 200,117"
                      fill="${a.code.key}"
                      stroke="${a.code.key}" stroke-width="5"
                    />
                    <text x="315" y="90" fill="${a.controlForeground}" text-anchor="middle" font-size="30">
                      Interactive 😱
                    </text>
                    <text x="315" y="130" fill="${a.controlForeground}" text-anchor="middle" font-size="30">
                      try me!
                    </text>
                  </g>
                `}

            <foreignObject x="30" y="365" width="600" height="700">
              <div xmlns="http://www.w3.org/1999/xhtml" style="font-size: 1.5em;">
                ${Pe(a,{fileName:"green",colourValue:"green"})}
              </div>
            </foreignObject>
            
            ${me(425,420,"green")}
            ${me(75,730,n.themeKey=="dark"?"lightblue":"blue")}
            ${me(250,730,(n.themeKey=="dark","red"))}
            ${me(425,730,(n.themeKey=="dark","yellow"))}
          `})}

        ${be({ctx:n,x:1300,y:150,animatePosition:3,svgContent:`
            <text x="250" y="75" class="noselect" fill="${a.controlForeground}" text-anchor="middle" font-size="50">
              Animation
            </text>

            <g transform="translate(85 85)">
              <path id="line-animation" class="path" fill="transparent" stroke="${a.controlForeground}" stroke-width="4" d="M66.039,133.545c0,0-21-57,18-67s49-4,65,8 s30,41,53,27s66,4,58,32s-5,44,18,57s22,46,0,45s-54-40-68-16s-40,88-83,48s11-61-11-80s-79-7-70-41 C46.039,146.545,53.039,128.545,66.039,133.545z"/>
            </g>

            <a xlink:href="https://css-tricks.com/svg-line-animation-works/?${v.linkRef}" target="_blank" class="noselect">
              <text x="250" y="460" fill="${a.controlForeground}" text-anchor="middle" font-size="25" font-style="italic">css-tricks.com/svg-line-animation-works</text>
              <line x1="50" y1="470" x2="450" y2="470" stroke="${a.controlForeground}" stroke-width="2" />
            </a>
          `})}
      

        `,...t}),...t}},Yt=n=>`
<foreignObject x="40" y="130" width="500" height="500" clip-path="url(#movieClip)">
  <style>
    svg.icon-theme-toggle {
      fill: ${n.controlForeground};
      --theme-toggle-duration: .4s
    }

    svg.icon-theme-toggle :first-child path {
      transition-duration: calc(var(--theme-toggle-duration)*.6);
      transition-property: transform,d;
      transition-timing-function: cubic-bezier(0,0,.5,1)
    }

    svg.icon-theme-toggle g circle,svg.icon-theme-toggle g path {
      transform-origin: center;
      transition: transform calc(var(--theme-toggle-duration)*.65) cubic-bezier(0,0,0,1.25) calc(var(--theme-toggle-duration)*.35)
    }

    svg.icon-theme-toggle.moon g circle {
      transform: scale(1.4);
      transition-delay: 0s
    }

    svg.icon-theme-toggle.moon g path {
      transform: scale(.75);
      transition-delay: 0s
    }

    svg.icon-theme-toggle.moon :first-child path {
      d: path("M-9 3h25a1 1 0 0017 13v30H0Z");
      transition-delay: calc(var(--theme-toggle-duration)*.4);
      transition-timing-function: cubic-bezier(0,0,0,1.25)
    }

    @supports not (d: path("")) {
      svg.icon-theme-toggle.moon :first-child path {
        transform: translate3d(-9px,14px,0)
      }
    }
  </style>
  <svg xmlns="http://www.w3.org/2000/svg" id="theme-selector" width="128" height="128"
    viewBox="0 0 32 32" fill="currentColor" class="icon-theme-toggle moon" 
    onclick="document.getElementById('theme-selector').classList.toggle('moon')">

    <clipPath id="theme-toggle-cutout">
      <path d="M0-11h25a1 1 0 0017 13v30H0Z"></path>
    </clipPath>
    <g clip-path="url(#theme-toggle-cutout)">
      <circle cx="16" cy="16" r="8.4"></circle>
      <path d="M18.3 3.2c0 1.3-1 2.3-2.3 2.3s-2.3-1-2.3-2.3S14.7.9 16 .9s2.3 1 2.3 2.3zm-4.6 25.6c0-1.3 1-2.3 2.3-2.3s2.3 1 2.3 2.3-1 2.3-2.3 2.3-2.3-1-2.3-2.3zm15.1-10.5c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zM3.2 13.7c1.3 0 2.3 1 2.3 2.3s-1 2.3-2.3 2.3S.9 17.3.9 16s1-2.3 2.3-2.3zm5.8-7C9 7.9 7.9 9 6.7 9S4.4 8 4.4 6.7s1-2.3 2.3-2.3S9 5.4 9 6.7zm16.3 21c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zm2.4-21c0 1.3-1 2.3-2.3 2.3S23 7.9 23 6.7s1-2.3 2.3-2.3 2.4 1 2.4 2.3zM6.7 23C8 23 9 24 9 25.3s-1 2.3-2.3 2.3-2.3-1-2.3-2.3 1-2.3 2.3-2.3z"></path>
    </g>
  </svg>
</foreignObject>`,At="data:text/markdown;base64,IyBXaHk/CgpUaGVzZSBhcmUgdGhlIDMgbW9zdCBpbXBvcnRhbnQgYXNwZWN0cyBvZiBTVkdTIH4gbWUKCiMjIFNjYWxhYmlsaXR5CgpSYXN0ZXIgaW1hZ2UgZmlsZXMgc2F2ZSB0aGUgY29sb3VyIGluZm9ybWF0aW9uIHBlciBwaXhlbCwgc28gc2NhbGluZyB0aGVzZSBpbWFnZXMgb25seSBtYWtlcyB0aGUgcmVzdWx0aW5nIGltYWdlIGxhcmdlciBhbmQgZG9lcyBhZGQgcGl4ZWxzLiAqKkNyZWF0aW5nIGEgbW9yZSBibHVycnkgcmVzdWx0KioKCkJlY2F1c2UgdmVjdG9yIGltYWdlcyBvbmx5IHN0b3JlIGhvdyB0byBkcmF3IGFuIGltYWdlLCBzY2FsaW5nIHRoZW0gdXAgb3IgZG93biBtZWFucyB0aGF0IHRoZXkga2VlcCB0aGVpciBsZXZlbCBvZiBkZXRhaWwuIFRoaXMgYWxzbyBtZWFucyB0aGF0IFNWR3MgY2FuIGJlIHNpZ25pZmljYW50bHkgc21hbGxlciB0aGFuIFBOR3MgaW4gc29tZSBjYXNlcywgbGlrZSBpY29ucywgbG9nb3MsIGNoYXJ0cywgYW5kIGlsbHVzdHJhdGlvbnMuCgojIyBGbGV4aWJpbGl0eQoKWW91IGRvbid0IG5lZWQgYSBwcm9ncmFtIHRvIGVkaXQgYW4gc3ZnIGxpa2Ugb3RoZXIgaW1hZ2UgZm9ybWF0cyBsaWtlIHBuZyBvciBqcGdzLiBUaGV5IGFyZSB0ZXh0IGJhc2VkLiBUaGV5IGludGVncmF0ZSBzZWFtbGVzc2x5IHdpdGggQ1NTIGFuZCBhbGxvdyBkeW5hbWljIHN0eWxpbmcsIGFuaW1hdGlvbnMgYW5kIHNvIG9uCgojIyBBY2Nlc3NpYmlsaXR5CgotIEJlY2F1c2UgU1ZHcyBhcmUgdGV4dCBiYXNlZCwgdGhlaXIgY29udGVudCBjYW4gYmUgcmVhZCBieSBzY3JlZW4gcmVhZGVycy4KLSBTZWFyY2ggZW5naW5lcyBjYW4gYWxzbyByZWFkIGFuZCBpbmRleCBTVkcgaW1hZ2UgdGV4dC4KCiMjIOKWtu+4jyBXaGVuIHNob3VsZCB5b3UgdXNlIGl0Pwo=",Nt=async n=>{const a=B[n.themeKey],t=O(a.code),r={ssg:{secondsToDisplay:3},notes:await Y(At)};return{content:()=>N({ctx:n,title:"Why is an SVG?",content:`
        ${be({ctx:n,x:100,y:150,animatePosition:1,svgContent:`
            <text x="250" y="75" class="noselect" fill="${a.controlForeground}" text-anchor="middle" font-size="50">
              Scalability
            </text>

            <g transform="translate(50 175)" class="noselect">
              <use href="#duckPixelArt" /> 
              <text x="45" y="120" fill="${a.code.key}" text-anchor="middle" font-size="25">
                PNG
              </text>
              <polygon
                points="100,103 135,103 135,90 165,110 135,130 135,117 100,117"
                fill="${a.code.key}"
                stroke="${a.code.key}" stroke-width="5"
              />
            </g>
            <g transform="translate(250 175) scale(2)" filter="url(#GaussianBlur)">
              <use href="#duckPixelArt" /> 
            </g>

            <g transform="translate(50 500)" class="noselect">
              <use href="#duckPixelArt" /> 
              <text x="45" y="120" fill="${a.code.key}" text-anchor="middle" font-size="25">
                SVG
              </text>
              <polygon
                points="100,103 135,103 135,90 165,110 135,130 135,117 100,117"
                fill="${a.code.key}"
                stroke="${a.code.key}" stroke-width="5"
              />
            </g>
            <g transform="translate(250 500) scale(2)">
              <use href="#duckPixelArt" /> 
            </g>
          `})}

        ${be({ctx:n,x:700,y:150,animatePosition:2,svgContent:`
            <text x="250" y="75" class="noselect" fill="${a.controlForeground}" text-anchor="middle" font-size="50">
              Flexibility
            </text>

            <foreignObject x="30" y="120" width="600" height="700">
              <div xmlns="http://www.w3.org/1999/xhtml" style="font-size: 1.5em;">
                
                ${Pe(a,{fileName:"green",colourValue:"green"})}
                ${Pe(a,{fileName:"red",colourValue:"red"})}                
              </div>
            </foreignObject>

            ${me(450,250,"green")}
            ${me(450,570,"red")}
          `})}

        ${be({ctx:n,x:1300,y:150,animatePosition:3,svgContent:`
            <text x="250" y="75" class="noselect" fill="${a.controlForeground}" text-anchor="middle" font-size="50">
              Accessibility
            </text>

            <foreignObject x="30" y="150" width="600" height="600">
              <div xmlns="http://www.w3.org/1999/xhtml" style="font-size: 1.5em;">
                ${t.tag("&lt;svg",m)}
                ${t.keyValue(["xmlns","=",'"http://www.w3.org/2000/svg"'],m)}
                <br />
                ${t.keyValue(["width","=",'"300"'],{...m,tabLevel:1})}
                ${t.keyValue(["height","=",'"300"'],m)}
                ${t.tag("&gt;",m)}
                <br />
                <br />
                
                ${t.tag("&lt;title",{tabLevel:1})}${t.tag("&gt;")}${he("Hand crafted SVG",le({colour:a.controlForeground}))}${t.tag("&lt;/title&gt;")}              
                <br />
                <br />

                ${t.tag("&lt;desc",{tabLevel:1})}${t.tag("&gt;")}
                <br />
                ${he("A hand crafted artisanal SVG",le({tabLevel:2,colour:a.controlForeground}))}
                <br />
                ${t.tag("&lt;/desc&gt;",{tabLevel:1})}

                <br />
                <br />

                ${t.tag("&lt;rect",{...m,tabLevel:1})}
                ${t.keyValue(["width","=",'"250"'],m)}
                ${t.keyValue(["height","=",'"250"'],m)}
                ${t.keyValue(["fill","=",'"pur...'],m)}
                <br />
                ${t.tag("&lt;circle",{...m,tabLevel:1})}
                ${t.keyValue(["cx","=",'"125"'],m)}
                ${t.keyValue(["cy","=",'"125"'],m)}
                ${t.keyValue(["r","=",'"80"'],m)}
                ${t.keyValue(["fill","=",'"lig...'],m)}
                <br />
                <br />

                ${t.tag("&lt;/svg&gt;",m)}
                
              </div>
            </foreignObject>
          `})}
      

        `,...r}),...r}},Tt="data:text/markdown;base64,IyBGb3JlaWduT2JqZWN0CgpZb3UgbWlnaHQgYmUgdGhpbmtpbmcgYWJvdXQgd2hhdCBvdGhlciB0aGluZ3MgeW91IGNvdWxkIGluY2x1ZGUgaW50byB5b3VyIFNWRyBpZiB5b3UgY2FuIGFscmVhZHkgbWFrZSB1c2Ugb2Ygc3R5bGUgdGFncwoKVGhlIGZvcmVpZ25PYmplY3QgZWxlbWVudCBhbGxvd3MgeW91IHRvIGluY2x1ZGUgZWxlbWVudHMgZnJvbSBhIGRpZmZlcmVudCBYTUwgbmFtZXNwYWNlIHdpdGhpbiB5b3VyIFNWRy4gSW4gbW9zdCBjYXNlcywgdGhhdCBtZWFucyBlbWJlZGRpbmcgSFRNTCBjb250ZW50IGluc2lkZSB5b3VyIFNWRyBkcmF3aW5nLgoKIyMgSGV5IGxvb2sgdGhlIOKtkO+4jyBpcyBiYWNrCgojIyBVc2UgY2FzZXMKCi0gRW1iZWRkaW5nIHN0eWxlZCBIVE1MIHRleHQgaW4gU1ZHcy4KLSBJbmNsdWRpbmcgaW50ZXJhY3RpdmUgZWxlbWVudHMgbGlrZSBmb3JtcyBvciBidXR0b25zLgotIFJlbmRlcmluZyBNYXRoTUwgZm9yIG1hdGhlbWF0aWNhbCBub3RhdGlvbi4KClN1cHBvcnQgaXMgcGF0Y2h5LCBidXQgbWFueSBIVE1MIHRoaW5ncyBjYW4gYmUgcGxhY2VkIGluIGFuIFNWRwoKIyMg4pa277iPIE9uZSBtb3JlIHVzZSBjYXNlIGZvciBmb3JlaWduT2JqZWN0IGlzIHJ1bm5pbmcgSlMK",Et=async n=>{const a=B[n.themeKey],t=O(a.code),r={ssg:{secondsToDisplay:3},notes:await Y(Tt)};return{content:()=>N({ctx:n,title:"Special Tags - foreignObject",content:`
        ${K({ctx:n,x:100,y:120,width:1700,height:415,animatePosition:1,svgContent:`
            <g transform="scale(1.5) translate(850, 40)">
              <use href="#star-for-def-example" x="0" y="0" stroke="${a.exampleColour2}" fill="${a.exampleColour2}" />
              <foreignObject x="50" y="65" width="1200" height="160">
                <div xmlns="http://www.w3.org/1999/xhtml" style="font-size:16px; color: ${a.controlForeground};">
                  Hello from HTML inside SVG!
                </div>
                <input type="date" value="${new Date().toISOString().slice(0,10)}" />
              </foreignObject>
            </g>
          `,codeContent:`
            ${t.tag("&lt;svg",m)}
            ${t.keyValue(["version","=",'"1.1"'],m)}
            ${t.keyValue(["width","=",'"300"'],m)}
            ${t.keyValue(["height","=",'"200"'],m)}
            ${t.keyValue(["xmlns","=",'"http://www.w3.org/2000/svg"'],m)}
            ${t.tag("&gt;",m)}
            <br />

            ${t.tag("&lt;use",{tabLevel:1})}
            ${t.keyValue(["href","=",'"#star"'])}
            ${t.keyValue(["x","=",'"0"'])}
            ${t.keyValue(["y","=",'"10"'])}
            ${t.keyValue(["stroke","=",`"${a.exampleColour2}"`])}
            ${t.keyValue(["fill","=",`"${a.exampleColour2}"`])}
            ${t.tag("/&gt;")}
            <br />
            <br />
            
            ${t.tag("&lt;foreignObject",{tabLevel:1})}
            ${t.keyValue(["x","=",'"50"'])}
            ${t.keyValue(["y","=",'"65"'])}
            ${t.keyValue(["width","=",'"1200"'])}
            ${t.keyValue(["height","=",'"160"'])}
            ${t.tag("&gt;")}
            <br/>
            ${t.tag("&lt;div",{tabLevel:2})}
            ${t.keyValue(["xmlns","=",'"http://www.w3.org/1999/xhtml"'])}
            ${t.keyValue(["style","=",`"font-size:16px; color: ${a.controlForeground};"`])}
            <br />
            ${t.value("Hello from HTML inside SVG!",{tabLevel:3})}
            <br />
            ${t.tag("&lt;/div&gt;",{tabLevel:2})}
            <br />

            ${t.tag("&lt;input",{tabLevel:2})}
            ${t.keyValue(["type","=",'"date"'])}
            ${t.keyValue(["value","=",`"${new Date().toISOString().slice(0,10)}"`])}
            ${t.tag("/&gt;")}
            <br />
            
            ${t.tag("&lt;/foreignObject&gt;",{tabLevel:1})}
            <br />
            ${t.tag("&lt;/svg&gt;",m)}
          `})}
        
        ${K({ctx:n,x:100,y:580,width:1700,height:415,animatePosition:2,svgContent:`
            <g transform="scale(1.5) translate(800, 40)">
              <clipPath id="movieClip">
                <use href="#star-for-def-example" x="50" y="14" />
              </clipPath>
              <foreignObject x="0" y="0" width="300" height="3000" clip-path="url(#movieClip)">
                <video xmlns="http://www.w3.org/1999/xhtml" width="300" height="200" autoPlay="true" muted="true" loop="true" 
                  ${ee(n.env)?'controls="true"':""}>
                  <source src="https://download.blender.org/peach/trailer/trailer_iphone.m4v" type="video/mp4" />
                </video>
              </foreignObject>
            </g>
          `,codeContent:`
            ${t.tag("&lt;svg",m)}
            ${t.keyValue(["version","=",'"1.1"'],m)}
            ${t.keyValue(["width","=",'"300"'],m)}
            ${t.keyValue(["height","=",'"200"'],m)}
            ${t.keyValue(["xmlns","=",'"http://www.w3.org/2000/svg"'],m)}
            ${t.tag("&gt;",m)}
            <br />
            
            ${t.tag("&lt;clipPath",{tabLevel:1})}
            ${t.keyValue(["id","=",'"#movieClip"'])}${t.tag("&gt;")}
            <br/>
            ${t.tag("&lt;use",{tabLevel:2})}
            ${t.keyValue(["href","=",'"#star"'])}
            ${t.keyValue(["x","=",'"50"'])}
            ${t.keyValue(["y","=",'"14"'])}
            ${t.tag("/&gt;")}
            <br/>
            ${t.tag("&lt;/clipPath&gt;",{tabLevel:1})}
            <br />
            
            ${t.tag("&lt;foreignObject",{tabLevel:1})}
            ${t.keyValue(["x","=",'"0"'])}
            ${t.keyValue(["y","=",'"0"'])}
            ${t.keyValue(["width","=",'"1200"'])}
            ${t.keyValue(["height","=",'"160"'])}
            ${t.keyValue(["clip-path","=",'"url(#movieClip)"'])}
            ${t.tag("&gt;")}
            <br/>
            ${t.tag("&lt;video",{tabLevel:2})}
            ${t.keyValue(["xmlns","=",'"http://www.w3.org/1999/xhtml"'])}
            ${t.key("autoPlay muted loop")}
            ${t.tag("&gt;")}
            <br />
            ${t.tag("&lt;source",{tabLevel:3})}
            ${t.keyValue(["src","=",'"https://download.blender.org/peach/trailer/trailer_iphone.m4v"'])}
            ${t.keyValue(["type","=",'"video/mp4"'])}
            ${t.tag("/&gt;")}
            <br />
            ${t.tag("&lt;/video&gt;",{tabLevel:2})}
            <br />
            ${t.tag("&lt;/foreignObject&gt;",{tabLevel:1})}
            <br />
            ${t.tag("&lt;/svg&gt;",m)}
          `})}
        `,...r}),...r}},Xt="data:text/markdown;base64,IyBTZWN1cml0eQoKLSBSdW5uaW5nIEpTIGluIFNWR3MgbWlnaHQgc291bmRzIGxpa2UgYSBiYWQgaWRlYQotIEJlY2F1c2UgaXQgaXMKCiMjIEpTIG9wZW5zIGEgbWFzc2l2ZSBjYW4gb2Yg8J+qsQoKLSBBbiBTVkcgdGhhdCByZWRpcmVjdHMKLSBBbiBTVkcgdGhhdCBwcmV0ZW5kcyB0byBiZSBhIHNlcnZpY2UgdGhhdCB5b3UgdHJ1c3QKICAtIEZvciBleGFtcGxlIGEgZmFjZWJvb2sgbG9naW4KLSBXb3JzdCBjYXNlLCBpZiBhbSBhdHRhY2tlciBjYW4gZ2V0IHRoZWlyIGNvZGUgaW50byBhbiBTVkcgb24geW91ciBzaXRlCiAgLSBET00gaW5qZWN0aW9uICYgc2NyaXB0IGFidXNlCgojIyBNaXRpZ2F0aW9ucwoKLSBEb24ndCBsZXQgdXNlcnMgdXBsb2FkIFNWR3MKLSBBbiBTVkcgaXMgb25seSBhcyBwb3dlcmZ1bCBhbmQgYW4gSFRNTCB0YWcKICAtIERvIG5vdCB1bnNhZmVseSBzZXQgSFRNTCBvbiB5b3VyIHdlYnNpdGUgd2l0aCB1c2VyIGNvbnRlbnQKICAtIFNWRyBvciBIVE1MCiAgLSBTYW5pdGlzZSB3aGF0IHlvdXIgdXNlcnMgc2VuZCB0byB5b3UKCiMjIOKWtu+4jyBJIGhvcGUgdGhhdCB0aGVzZSBkb24ndCBzY2FyZSB5b3UgdG9vIG11Y2gK",Ut=async n=>{const a=B[n.themeKey],t=T(n),r={ssg:{secondsToDisplay:3},notes:await Y(Xt)};return{content:()=>N({ctx:n,title:"Security Concerns",content:`
        
        <g transform="translate(100 200)">
          ${q("hacker")}
        </g>

        <foreignObject x="100" y="200" width="1200" height="800">
          <dialog id="facebookDialog"
            style="position: relative; background-color: transparent; border:none; border-radius: 30px; outline: none;"
          >
            <img src="./assets/img/facebook-login.jpg" width="300px" class="noselect" style="border-radius: 10px;" draggable="false" />
            <input name="fb-mail" style="background: transparent; border: none; outline: none; position: absolute; top: 127px; left: 47px; width: 235px;" />
            <input name="fb-pass" style="background: transparent; border: none; outline: none; position: absolute; top: 172px; left: 47px; width: 235px;" />
            <div onclick="this.parentNode.close()"
              style="background: transparent; outline: none; position: absolute; top: 210px; left: 40px; width: 252px; height: 32px;"></div>
          </dialog>
        </foreignObject>
        
        ${ee(n.env)?"":`<g transform="translate(1035 200)">
              ${q("facebook",`draggable="false" onclick="document.getElementById('facebookDialog').showModal()"`)}
            </g>`}
                        
        <g opacity="0" transform="translate(300 90)">
          ${H({duration:"1s",begin:t==null?void 0:`${t}-slide-anim.end+1s`})}
          <rect 
            width="650"
            height="800"
            x="850"
            y="50"
            rx="50"
            fill="transparent"
            stroke="${a.secondary}"
            stroke-width="3"
          />

          <text x="890" y="120" fill="${a.controlForeground}" font-size="30">
            SVGs: the hacker's canvas
          </text>

          <text x="890" y="450" fill="${a.controlForeground}" font-size="30">
            Mitigations
          </text>

          ${S(a,1)}
          ${_(a,1,"Redirectors")}

          ${S(a,2)}
          ${_(a,2,"Phishing pages")}

          ${S(a,3)}
          ${_(a,3,"DOM injection &amp; script abuse")}

          ${S(a,7)}
          ${_(a,7,"Don't allow users to upload SVGs")}
          ${_(a,8,"else sanitise them",25,'font-style="italic"')}

          ${S(a,12)}
          ${_(a,12,"For more details:")}
          <a xlink:href="https://www.cloudflare.com/en-gb/threat-intelligence/research/report/svgs-the-hackers-canvas/?${v.linkRef}" target="_blank">
            ${_(a,12.75,"https://cloudflare.com/threat/report...",30,'font-style="italic"')}
          </a>
          ${ne(a,12.8,500)}
          
        </g>
      `,...r}),...r}},Dt="data:text/markdown;base64,IyBOb3cgdGhlIGZ1biBzdHVmZiBiZWdpbnMKCllvdSBhbGwgbG9vayBsaWtlIHlvdSBoYXZlIHNlZW4gYSBnaG9zdAo=",Kt=async n=>{const a={ssg:{secondsToDisplay:3},notes:await Y(Dt)};return{content:()=>N({ctx:n,title:"The Fun begins",content:`
        <g transform="scale(20) translate(33 10)">
          ${q("ghost")}
        </g>
        `,...a}),...a}},Ot="data:text/markdown;base64,Y2FsZW5kYXJJY29uCg==",Jt=async n=>{const a=B[n.themeKey],t=T(n),r=new Date,u=["January","February","March","April","May","June","July","August","September","October","November","December"],k={ssg:{secondsToDisplay:3},notes:await Y(Ot)};return{content:()=>N({ctx:n,title:"The Fun stuff - Complex icons",content:`
        <g transform="scale(0.5) translate(650, 700)">
          <path
            d="M512 455c0 32-25 57-57 57H57c-32 0-57-25-57-57V128c0-31 25-57 57-57h398c32 0 57 26 57 57z"
            fill="#e0e7ec"
          />
          <path
            d="M484 0h-47c2 4 4 9 4 14a28 28 0 1 1-53-14H124c3 4 4 9 4 14A28 28 0 1 1 75 0H28C13 0 0 13 0 28v157h512V28c0-15-13-28-28-28z"
            fill="#dd2f45"
          />
          <rect x="50" y="0" width="400" height="85" fill="#dd2f45" />
          <rect
            x="0" y="0" rx="40"
            width="510" height="508"
            fill="transparent"
            stroke="#dd2f45"
            stroke-width="10px"
          />
          <g fill="#f3aab9">
            <circle cx="470" cy="142" r="14" />
            <circle cx="470" cy="100" r="14" />
            <circle cx="427" cy="142" r="14" />
            <circle cx="427" cy="100" r="14" />
            <circle cx="384" cy="142" r="14" />
            <circle cx="384" cy="100" r="14" />
          </g>
          <text id="year" y="155" fill="#fff" font-family="monospace" font-size="130px" x="16">
            ${r.getFullYear()}
          </text>
          <text id="day" x="256" y="370" fill="#000" font-family="monospace" style="text-anchor: middle" font-size="210px">
            ${r.getDate()}
          </text>
          <text id="month" x="256" y="470" fill="#000" font-family="monospace" style="text-anchor: middle" font-size="90px">
            ${u[r.getMonth()]}
          </text>
        </g>
                
        <g opacity="0" transform="translate(100 90)">
          ${H({duration:"1s",begin:t==null?void 0:`${t}-slide-anim.end+1s`})}
          <rect 
            width="850"
            height="810"
            x="850"
            y="50"
            rx="50"
            fill="transparent"
            stroke="${a.secondary}"
            stroke-width="3"
          />

          <text x="890" y="120" fill="${a.controlForeground}" font-size="30">
            Steps:
          </text>

          ${S(a,0)}
          ${_(a,0,"Draw a red rounded rectangle")}

          ${S(a,1)}
          ${_(a,1,"Draw a white rounded rectangle")}
          ${_(a,2,"2/3 the height, aligned to the bottom",25,'font-style="italic"')}

          ${S(a,3)}
          ${_(a,3,"Draw 1 more red rectangle")}
          ${_(a,4,"1/3 the height, aligned to the top",25,'font-style="italic"')}

          ${S(a,5)}
          ${_(a,5,"Draw the text")}
          ${_(a,6,'Using text-anchor="middle" when needed',25,'font-style="italic"')}

          ${S(a,7)}
          ${_(a,7,"Draw 1 more red rectangle but with the fill transparent")}

          ${S(a,9)}
          ${_(a,9,"Add extra decorations 👨‍🎨")}
        </g>
        `,...k}),...k}},Qt="data:text/markdown;base64,Y2lyY3VsYXJQcm9ncmVzcwo=",qt=async n=>{const a=T(n),t=B[n.themeKey],r=O(t.code);let u=77;ee(n.env)==!1&&(u=Math.round(Math.random()*60)+30);const k="12px",I=70,z=I+20,P=2*3.14*I,G=P*((100-u)/100),X={ssg:{secondsToDisplay:3},notes:await Y(Qt)};return{content:()=>N({ctx:n,title:"The Fun stuff - Custom Indicators",content:`
        <g transform="translate(100, 300) scale(3)">

          <circle
            r="${I}"
            cx="${z}"
            cy="${z}"
            fill="transparent"
            stroke="${t.background}"
            stroke-width="${k}"
          ></circle>
          <circle
            r="${I}"
            cx="${z}"
            cy="${z}"
            fill="transparent"
            stroke="${t.exampleColour}"
            stroke-linecap="round"
            stroke-width="${k}"
            stroke-dasharray="${P}"
            style="transform: rotate(-90deg); transform-box: fill-box; transform-origin: center;"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="${P}"
              to="${G}"
              dur="1s"
              fill="freeze"
              calcMode="spline"
              keySplines="0.42 0 0.58 1"
            />
          </circle>

          <text x="${z}" y="${z+4}" 
            dominant-baseline="middle" text-anchor="middle" fill="${t.controlForeground}"
          >
            ${u} %
          </text>
        </g>
        
        <g opacity="0" transform="translate(100 90)">
          ${H({duration:"1s",begin:a==null?void 0:`${a}-slide-anim.begin+1s`})}
          <rect 
            width="1050"
            height="810"
            x="650"
            y="50"
            rx="50"
            fill="transparent"
            stroke="${t.secondary}"
            stroke-width="3"
          />

          <text x="690" y="120" fill="${t.controlForeground}" font-size="30">
            ReactJS / SolidJS component
          </text>
          <text x="1400" y="120" fill="${t.controlForeground}" font-size="20">
            (or your favourite JS framework)
          </text>
            
          <g transform="translate(650 140)">
            <foreignObject x="40" y="15" width="1200" height="800">
              <div xmlns="http://www.w3.org/1999/xhtml" style="font-size: 1.5em;">
                ${r.tag("export const",m)}
                ${r.value("CircularProgress",m)}
                ${r.tag("= (props) => {",m)}
                <br />
                ${r.value("// setup variables from props etc...",{...m,tabLevel:1})}
                <br />

                
                ${r.keyValue(["return"," (",""],{...m,tabLevel:1})}
                <br/>

                ${r.tag("&lt;svg",{tabLevel:2})}
                ${r.keyValue(["width","=","{width}"])}
                ${r.keyValue(["height","=","{height}"])}
                ${r.keyValue(["viewBox","=","`0 0 ${width} ${width}`"])}${r.tag("&gt;")}
                
                <br />
                <br />
                ${r.tag("&lt;circle",{tabLevel:3})}
                ${r.keyValue(["r","=","{radius}"])}
                ${r.keyValue(["cx","=","{centerPoint}"])}
                ${r.keyValue(["cy","=","{centerPoint}"])}
                ${r.keyValue(["stroke","=",`"${t.background}"`])}
                ${r.value("...")}
                ${r.tag("&gt;&lt;/circle&gt;")}

                <br />
                <br />
                ${r.tag("&lt;circle",{tabLevel:3})}
                ${r.keyValue(["r","=","{radius}"])}
                ${r.keyValue(["cx","=","{centerPoint}"])}
                ${r.keyValue(["cy","=","{centerPoint}"])}
                ${r.keyValue(["stroke","=",`"${t.exampleColour}"`])}
                ${r.value("...")}
                ${r.tag("&gt;")}
                <br/>
                
                ${r.tag("&lt;animate",{tabLevel:4})}
                <br/>
                ${r.keyValue(["attributeName","=",'"stroke-dashoffset"'],{tabLevel:5})}
                ${r.keyValue(["dur","=",'"1s"'])}
                <br/>
                ${r.keyValue(["from","=",'"${strokeDashArray}"'],{tabLevel:5})}
                ${r.keyValue(["to","=",'"${strokeDashOffset}"'])}
                <br/>
                ${r.keyValue(["fill","=",'"freeze"'],{tabLevel:5})}
                ${r.keyValue(["calcMode","=",'"spline"'])}
                ${r.keyValue(["keySplines","=",'"0.42 0 0.58 1"'])}

                <br/>
                ${r.tag("/&gt;",{tabLevel:4})}
                <br/>
                ${r.tag("&lt;/circle&gt;",{tabLevel:3})}

                <br />
                <br/>
                ${r.tag("&lt;svg&gt;",{tabLevel:2})}
                <br/>
                ${r.keyValue(["",");",""],{...m,tabLevel:1})}
                <br/>
                ${r.keyValue(["","}",""],m)}
              </div>
            </foreignObject>
          </g>
        </g>
        `,...X}),...X}},er="data:text/markdown;base64,ZGlhZ3JhbXMKCiMjIOKWtu+4jyBUaGUgYmVzdCBvciB3b3JzdCB1c2UgZm9yIGFuIFNWRyBpcyBhIHByZXNlbnRhdGlvbgo=",tr=async n=>{const a=T(n),t=B[n.themeKey],r=O({tag:t.d2Code.tag,key:t.d2Code.tag,equals:t.d2Code.equals,value:t.d2Code.equals}),u=O({tag:t.d2Code.key,key:t.d2Code.key,equals:t.d2Code.equals,value:t.d2Code.value}),k={ssg:{secondsToDisplay:3},notes:await Y(er)};return{content:async()=>N({ctx:n,title:"The Fun stuff - Diagrams",content:`
        <clipPath id="diagram-rounded">
          <rect x="-90" y="-100" width="650" height="595" rx="20" />
        </clipPath>
        <g transform="translate(225, 350)" clip-path="url(#diagram-rounded)">
          ${await mt(t,n.themeKey,"cloud",[{reg:/(.fill-N7{fill:#)(\w+)(;})/,newColour:t.slideBackground}])}
        </g>
        <g opacity="0" transform="translate(100 90)">
          ${H({duration:"1s",begin:a==null?void 0:`${a}-slide-anim.begin+1s`})}
          <rect 
            width="850"
            height="810"
            x="850"
            y="50"
            rx="50"
            fill="transparent"
            stroke="${t.secondary}"
            stroke-width="3"
          />

          <text x="890" y="120" fill="${t.controlForeground}" font-size="30">
            D2: Declarative Diagramming
          </text>

          <g transform="translate(490 -45)">
            <a xlink:href="https://d2lang.com?${v.linkRef}" target="_blank">
              ${_(t,0,"https://d2lang.com",30,'font-style="italic"')}
            </a>
            ${ne(t,-.05,235)}
          </g>
            
          <g transform="translate(850 140)">
            <foreignObject x="40" y="15" width="1200" height="800">
                <div xmlns="http://www.w3.org/1999/xhtml" style="font-size: 1.5em;">
                  ${r.keyValue(["cloud",": ","{"])}<br/>
                  ${r.keyValue(["disks",": ","{"],{tabLevel:1})}<br/>
                  ${u.keyValue(["shape",": ","sql_table"],{tabLevel:2})}<br/>
                  ${r.keyValue(["id",": ",""],{tabLevel:2})}
                  ${u.value("int")}
                  ${r.value(" {")}
                  ${u.keyValue(["constraint",": ","primary_key"])}${r.value(" }")}<br/>
                  ${r.value(" }",{tabLevel:1})}
                  <br/>
                  
                  ${r.keyValue(["blocks",": ","{"],{tabLevel:1})}<br/>
                  ${u.keyValue(["shape",": ","sql_table"],{tabLevel:2})}<br/>
                  ${r.keyValue(["id",": ",""],{tabLevel:2})}
                  ${u.value("int")}
                  ${r.value(" {")}
                  ${u.keyValue(["constraint",": ","primary_key"])}${r.value(" }")}<br/>
                  ${r.keyValue(["disk",": ",""],{tabLevel:2})}
                  ${u.value("int")}
                  ${r.value(" {")}
                  ${u.keyValue(["constraint",": ","foreign_key"])}${r.value(" }")}<br/>
                  ${r.keyValue(["blob",": ",""],{tabLevel:2})}
                  ${u.value("blob")}
                  <br/>
                  ${r.value(" }",{tabLevel:1})}
                  <br/>
                  <br/>

                  ${r.keyValue(["blocks",".",""],{tabLevel:1})}${r.key("disk")}
                  ${r.value("->")}
                  ${r.keyValue(["disks",".",""])}${r.key("id")}
                  <br />
                  <br />
                  ${r.key("AWS S3 Vancouver",{tabLevel:1})}
                  ${r.value("->")}
                  ${r.keyValue(["disks",":"," {"])}<br/>
                  ${u.keyValue(["style",".",""],{tabLevel:2})}
                  ${u.keyValue(["animated",": ","true"])}<br/>
                  ${r.value("}",{tabLevel:1})}
                  <br />
                  ${r.value(" }")}
              </div>
            </foreignObject>
          </g>
        </g>
        `,...k}),...k}},rr="data:text/markdown;base64,Z2l0aHViUHJvZmlsZQo=",ar=async n=>{const a=T(n),t=B[n.themeKey],r={ssg:{secondsToDisplay:3},notes:await Y(rr)};return{content:()=>N({ctx:n,title:"The Fun stuff - Fancy Github profiles",content:`
        <g transform="translate(100 150)">
          ${q("kurtGithubHeader")}
        </g>
        <clipPath id="github-header-clip">
          <rect x="-25" y="0" width="175" height="85" rx="10" />
        </clipPath>
        <linearGradient id="paint0_linear" x1="169.78" y1="159.992" x2="232.561" y2="8.94658" gradientUnits="userSpaceOnUse">
        <stop stop-color="#66B3B3"/>
        <stop offset="1" stop-color="#95CACA"/>
        </linearGradient>
        <linearGradient id="paint1_linear" x1="95.547" y1="159.995" x2="158.328" y2="8.94937" gradientUnits="userSpaceOnUse">
        <stop stop-color="#66B3B3"/>
        <stop offset="1" stop-color="#95CACA"/>
        </linearGradient>
        <linearGradient id="paint2_linear" x1="52.6972" y1="105.259" x2="14.1123" y2="154.478" gradientUnits="userSpaceOnUse">
        <stop stop-color="#0CA4A5"/>
        <stop offset="1" stop-color="#097677"/>
        </linearGradient>
        <linearGradient id="paint3_linear" x1="53.5767" y1="63.8427" x2="92.1617" y2="14.6241" gradientUnits="userSpaceOnUse">
        <stop stop-color="#0CA4A5"/>
        <stop offset="1" stop-color="#097677"/>
        </linearGradient>
        <g id="icon" transform="translate(275 560) scale(0.5)">
          <path d="M148.112 150.986C159.606 155.763 172.529 155.785 184.038 151.047C195.548 146.309 204.702 137.199 209.485 125.721L254.375 18.0134C242.882 13.2362 229.959 13.2142 218.449 17.9523C206.939 22.6904 197.786 31.8003 193.002 43.2782L148.112 150.986Z" fill="url(#paint0_linear)"/>
          <path d="M73.8789 150.988C85.3724 155.766 98.2954 155.788 109.805 151.05C121.315 146.311 130.468 137.201 135.252 125.724L180.142 18.0162C168.649 13.239 155.726 13.217 144.216 17.9551C132.706 22.6931 123.553 31.8031 118.769 43.281L73.8789 150.988Z" fill="url(#paint1_linear)"/>
          <g id="darker">
            <path d="M9.18199 130.636C11.6709 124.669 13.7057 118.541 15.6676 112.396C16.6319 109.272 18.2278 106.38 20.3567 103.897C22.4855 101.415 25.1019 99.3947 28.044 97.9628C30.9861 96.5308 34.1912 95.7171 37.4609 95.572C40.7306 95.427 43.9953 95.9537 47.0529 97.1196C50.1106 98.2855 52.896 100.066 55.2369 102.35C57.5778 104.634 59.4242 107.374 60.6619 110.4C61.8996 113.426 62.5023 116.673 62.4326 119.941C62.3628 123.208 61.6222 126.427 60.2566 129.397C59.3419 131.465 58.1411 133.395 56.6895 135.129C50.4653 143.614 41.5646 149.762 31.4186 152.584C21.2726 155.407 10.471 154.74 0.750626 150.69L9.18199 130.636Z" fill="url(#paint2_linear)"/>
            <path d="M97.0919 38.466C94.6031 44.4327 92.5682 50.5615 90.6063 56.7064C89.642 59.8298 88.0461 62.7223 85.9173 65.2049C83.7884 67.6875 81.172 69.7073 78.2299 71.1393C75.2878 72.5713 72.0827 73.385 68.813 73.53C65.5433 73.675 62.2786 73.1483 59.221 71.9825C56.1634 70.8166 53.3779 69.0364 51.037 66.752C48.6962 64.4677 46.8497 61.7279 45.612 58.7021C44.3743 55.6764 43.7716 52.4291 43.8414 49.1614C43.9111 45.8937 44.6517 42.675 46.0173 39.7046C46.9321 37.6368 48.1328 35.7073 49.5845 33.9726C55.8086 25.4878 64.7093 19.3399 74.8553 16.5176C85.0013 13.6953 95.8029 14.3625 105.523 18.412L97.0919 38.466Z" fill="url(#paint3_linear)"/>
          </g>
          <text x="320" y="135" font-size="160" fill="url(#paint0_linear)">
            Waves
          </text>
        </g>
        <g transform="translate(215 560) scale(4.5)" clip-path="url(#github-header-clip)">
          ${q("githubHeader")}
        </g>

        <g opacity="0" transform="translate(100 90)">
          ${H({duration:"1s",begin:a==null?void 0:`${a}-slide-anim.begin+1s`})}
          <rect 
            width="850"
            height="810"
            x="850"
            y="50"
            rx="50"
            fill="transparent"
            stroke="${t.secondary}"
            stroke-width="3"
          />

          <text x="890" y="120" fill="${t.controlForeground}" font-size="30">
            Get around restrictions
          </text>

          <text x="890" y="150" fill="${t.controlForeground}" font-size="20">
            In this case on Github
          </text>

          <text x="890" y="217" fill="${t.controlForeground}" font-size="30">What is in this SVG:</text>

          ${S(t,2)}
          ${_(t,2,"Animated gradient background")}

          ${S(t,3)}
          ${_(t,3,"Line pattern over the background")}

          ${S(t,4)}
          ${_(t,4,"Avatar aligned in the center")}

          ${S(t,5)}
          ${_(t,5,"Non-SVG images used")}
          ${_(t,6,"Ship icon",25,'font-style="italic"')}
          <text x="1030" y="467" fill="${t.exampleColour2}" font-size="20">(2kb)</text>
          ${_(t,7,"Ficsit thumbs up",25,'font-style="italic"')}
          <text x="1110" y="517" fill="${t.exampleColour2}" font-size="20">(6kb)</text>

          ${S(t,8)}
          ${_(t,8,"Hand emoji (text)")}

          ${S(t,9)}
          ${_(t,9,"Text aligned to the bottom center")}

          ${S(t,10)}
          ${_(t,10,"CSS animations ✨")}
          
          ${S(t,12)}
          ${_(t,12,"View this on:")}
          <a xlink:href="https://github.com/Khaoz-Topsy?${v.linkRef}" target="_blank">
            ${_(t,12.75,"https://github.com/Khaoz-Topsy",30,'font-style="italic"')}
          </a>
          ${ne(t,12.8,390)}
        </g>
        `,...r}),...r}},dr="data:text/markdown;base64,IyBMb2FkZXJzCgotIEVhY2ggb25lIGlzIDEgb3IgMiBrYnMKLSBTYW0gSGVyYmVydCBoYXMgbWFkZSB0aGVzZSBzcGVjaWZpYyBvbmVzIGF2YWlsYWJsZSBmb3IgYXQgbGVhc3QgMTEgeWVhcnMKLSBFYXN5IHRvIGN1c3RvbWlzZSBldGMK",pe=200,nr=async n=>{const a=B[n.themeKey],t=T(n),r={ssg:{secondsToDisplay:3},notes:await Y(dr)};return{content:()=>N({ctx:n,title:"The Fun stuff - Loaders",content:`
          <g transform="translate(150 220)">
            <a xlink:href="https://samherbert.net/svg-loaders/" target="_blank">
              <text x="0" y="0" fill="${a.controlForeground}" font-size="30">
                samherbert.net/svg-loaders
              </text>
            </a>
          <line x1="0" y1="10" x2="340" y2="10" stroke="${a.controlForeground}" stroke-width="2" />
          </g>
          <g transform="translate(200 300)" fill="${a.controlForeground}" color="${a.controlForeground}">
            ${Ke.map((u,k)=>`
                <g transform="${ir(k)}">
                <rect x="0" y="0" width="${pe+1}" height="${pe+1}" fill="${u.colour}" transform="translate(-${pe/4} -${pe/4})" />
                ${gt(u.id)}
                </g>`).join("")}
          </g>
          
        <g opacity="0" transform="translate(300 90)">
          ${H({duration:"1s",begin:t==null?void 0:`${t}-slide-anim.begin+1s`})}
          <rect 
            width="650"
            height="810"
            x="850"
            y="50"
            rx="50"
            fill="transparent"
            stroke="${a.secondary}"
            stroke-width="3"
          />

          <text x="890" y="120" fill="${a.controlForeground}" font-size="30">
            Example of a custom made loader:
          </text>

          <g transform="translate(1075 150)">
            <g id="atlas-loader" transform="translate(800 200)">
              <polygon  points="100,20 190,130 100,300" stroke-linecap="round" />
              <circle cx="100" cy="130" r="45" fill="url(#atlas)">
                <animateTransform attributeName="transform" type="rotate" from="0 100 130" to="360 100 130" dur="2s" repeatCount="indefinite" />
              </circle>
              <polygon points="100,32 180,130 100,110" stroke-linecap="round"  fill="#FFFFFF" stroke="#FFFFFF" stroke-width="1"/>
              <line x1="185" y1="132" x2="100" y2="110" stroke-linecap="round" />
              <polygon points="100,20 10,130 100,300" stroke-linecap="round" />
              <line x1="100" y1="20" x2="190" y2="130" stroke-linecap="round" stroke="white" stroke-width="4" />
              <line x1="190" y1="130" x2="100" y2="300" stroke-linecap="round" stroke="white" stroke-width="4" />
              <line x1="100" y1="300" x2="10" y2="130" stroke-linecap="round" stroke="white" stroke-width="4" />
              <line x1="10" y1="130" x2="100" y2="20" stroke-linecap="round" stroke="white" stroke-width="4" />
            </g>
          </g>

          
          ${S(a,12)}
          ${_(a,12,"Used on:")}
          <a xlink:href="https://nmsassistant.com??${v.linkRef}" target="_blank">
            ${_(a,12.75,"nmsassistant.com",30,'font-style="italic"')}
          </a>
          ${ne(a,12.8,210)}
        </g>
        `,...r}),...r}},ir=n=>{const a=n%4,t=Math.floor(n/4);return`translate(${a*pe} ${t*pe})`},or="data:text/markdown;base64,Y2FsZW5kYXJJY29uCg==",ur=async n=>{const a=B[n.themeKey],t=O(a.code),r=T(n),u=(I,z)=>`
    <rect x="50" y="${I}" width="${z}" height="2" rx="5" opacity="0.3"
      fill="${a.cardBackground}" stroke="${a.cardBackground}" stroke-width="3"
    />`,k={ssg:{secondsToDisplay:3},notes:await Y(or)};return{content:async()=>N({ctx:n,title:"The Fun stuff - Meta image / templates",content:`        
        <g opacity="0" transform="translate(250 90)">
          ${H({duration:"1s",begin:r==null?void 0:`${r}-slide-anim.end+1s`})}
          <rect 
            width="700"
            height="810"
            x="850"
            y="50"
            rx="50"
            fill="transparent"
            stroke="${a.secondary}"
            stroke-width="3"
          />

          <text x="890" y="120" fill="${a.controlForeground}" font-size="30">
            What the template looks like:
          </text>

          <foreignObject x="880" y="150" width="1200" height="800">
            <div xmlns="http://www.w3.org/1999/xhtml" style="font-size: 1.5em;">
              ${t.tag("&lt;svg",m)}
              ${t.keyValue(["viewBox","=",'"0 0 1200 627"'],m)}
              ${t.keyValue(["xmlns","=",'"http://www.w3..."'],m)}${t.tag("&gt;",m)}
              <br />
              <br />
              ${t.tag("&lt;image",{tabLevel:2})}
              ${t.keyValue([" ","....."])}
              ${t.keyValue(["href","=",'"{{backgroundBase64}}"'])}
              ${t.tag("/&gt;")}
              <br />
              <br />
              ${t.tag("&lt;image",{tabLevel:2})}
              ${t.keyValue([" ","....."])}
              ${t.keyValue(["href","=",'"{{spriteBase64}}"'])}
              ${t.tag("/&gt;")}
              <br />
              <br />
              ${t.tag("&lt;image",{tabLevel:2})}
              ${t.keyValue([" ","....."])}
              ${t.keyValue(["href","=",'"{{elementBase64}}"'])}
              ${t.tag("/&gt;")}
              <br />
              <br />
              ${t.tag("&lt;text",{tabLevel:2})}
              ${t.keyValue([" ","....."])}
              ${t.tag("&gt;")}
              ${t.custom("{{name}}",{colour:a.exampleColour2})}
              ${t.tag("&lt;/text&gt;")}
              <br />
              <br />
              ${t.tag("&lt;text",{tabLevel:2})}
              ${t.keyValue([" ","....."])}
              ${t.tag("&gt;")}
              ${t.custom("{{description}}",{colour:a.exampleColour2})}
              ${t.tag("&lt;/text&gt;")}
              <br />
              <br />
              ${t.tag("&lt;image",{tabLevel:2})}
              ${t.keyValue([" ","....."])}
              ${t.keyValue(["href","=",'"{{backgroundOverlayBase64}}"'])}
              ${t.tag("/&gt;")}
              <br />
              <br />
              ${t.tag("&lt;svg&gt;",m)}
            </div>
          </foreignObject>

          ${S(a,12)}
          ${_(a,12,"I used this on:")}
          <a xlink:href="https://cassettebeasts.assistantapps.com" target="_blank">
            ${_(a,12.75,"https://cassettebeasts.assistantapps.com",30,'font-style="italic"')}
          </a>
          ${ne(a,12.8,500)}
        </g>          

        <g transform="translate(100, 150)">
          <rect id="message-client" x="0" y="0" width="900" height="700" rx="25" fill="#1A1D21"
            stroke="${B.dark.exampleColour}" stroke-width="3"
          />
          <line x1="0" y1="50" x2="900" y2="50" opacity="0.3"
            stroke="${B.dark.exampleColour}" stroke-width="3"
          />
          <line x1="200" y1="52" x2="200" y2="700" opacity="0.3"
            stroke="${B.dark.cardBackground}" stroke-width="1"
          />
          ${u(100,100)}
          ${u(140,80)}
          
          <line x1="0" y1="200" x2="200" y2="200" opacity="0.1"
            stroke="${B.dark.exampleColour}" stroke-width="2"
          />

          ${u(400,100)}
          ${u(440,120)}
          ${u(480,60)}
          ${u(520,80)}
          ${u(560,100)}
          ${u(600,120)}
          <rect x="250" y="620" width="600" height="50" rx="25" fill="transparent"
            stroke="${B.dark.cardBackground}" stroke-width="3"
          />
          <text x="450" y="34" fill="${B.dark.controlForeground}" font-size="30" text-anchor="middle">
            Lax - messaging client
          </text>
          
          <g transform="translate(225 250)">
            <image id="img-meta-data" x="0" y="0" href="${ee(n.env)?await We(E.metaDataExample):"./assets/img/metaDataExample.png"}" alt="Description of the image" />
            <animateTransform 
              id="image-zoom-anim"
              href="#img-meta-data" 
              attributename="transform"
              type="scale"
              from="1"
              to="1.95"
              dur="250ms"
              begin="click"
              fill="freeze"
            />
            <animateMotion
              href="#img-meta-data" 
              dur="250ms"
              repeatCount="1"
              fill="freeze"
              path="M0,0 L -320 -150"
              begin="image-zoom-anim.begin+5ms" 
            />
          </g>
        </g>
        `,...k}),...k}},sr="data:text/markdown;base64,cmFib0xpbmUK",lr=async n=>{const a=T(n),t=B[n.themeKey],r={ssg:{secondsToDisplay:3},notes:await Y(sr)};return{content:()=>N({ctx:n,title:"The Fun stuff - Line animations",content:`
        <clipPath id="phone-frame-clip">
          <rect x="0" y="0" width="400" height="800" />
        </clipPath>
        
        <g id="phone-content-2" transform="translate(200 150)">
          <rect x="0" y="0" width="400" height="800" fill="white" clip-path="url(#phone-frame-clip)" />
          <text x="200" y="150" fill="blue" text-anchor="middle" font-size="75">
            Rizzbank
          </text>
        </g>
        
        <g id="phone-content" transform="translate(200 450)" clip-path="url(#phone-frame-clip)">
          
          <path id="phone-line" d="M -325 332 C 652 738 329 -184 1393 224" 
            stroke="blue" 
            stroke-width="10" 
            fill="transparent" 
            transform="translate(300 0)"
          >
            <animateTransform id="left" attributeName="transform" type="translate"
              from="300 0" to="-950 0" begin="3s;right.end" dur="1s" fill="freeze"
            />
          </path>
        </g>

        <g id="phone-frame" transform="translate(200 150)">
          <rect x="400" y="100" width="10" height="100" fill="transparent" stroke="${t.phoneFrameAccent}" stroke-width="2" rx="2" />
          <rect x="400" y="250" width="10" height="75" fill="transparent" stroke="${t.phoneFrameAccent}" stroke-width="2" rx="2" />

          <rect x="0" y="0" width="400" height="800" fill="transparent" stroke="${t.phoneFrame}" stroke-width="10" rx="10" />
          <rect x="0" y="8" width="400" height="8" fill="transparent" stroke="${t.phoneFrame}" stroke-width="10" rx="10" />
          <rect x="0" y="16" width="400" height="8" fill="transparent" stroke="${t.phoneFrame}" stroke-width="10" />
          <rect x="150" y="12" width="100" height="2" fill="transparent" stroke="${t.phoneFrameAccent}" stroke-width="2" rx="10" />
          <circle cx="300" cy="12" r="8" fill="${t.phoneFrameAccent}" stroke="${t.phoneFrameAccent}" />
          
          <rect x="400" y="100" width="10" height="100" fill="${t.phoneFrame}" stroke="${t.phoneFrame}" stroke-width="2" rx="2" />
          <rect x="400" y="250" width="10" height="75" fill="${t.phoneFrame}" stroke="${t.phoneFrame}" stroke-width="2" rx="2" />

          <rect x="0" y="792" width="400" height="8" fill="transparent" stroke="${t.phoneFrame}" stroke-width="10" rx="10" />
          <rect x="0" y="784" width="400" height="8" fill="transparent" stroke="${t.phoneFrame}" stroke-width="10" />
          
          <rect x="-5" y="-5" width="410" height="810" fill="transparent" stroke="${t.phoneFrameAccent}" stroke-width="1" rx="10" />
        </g>
        <g opacity="0" transform="translate(-100 90)">
          ${H({duration:"1s",begin:a==null?void 0:`${a}-slide-anim.begin+1s`})}
          <rect 
            width="1050"
            height="810"
            x="850"
            y="50"
            rx="50"
            fill="transparent"
            stroke="${t.secondary}"
            stroke-width="3"
          />

          <text x="890" y="120" fill="${t.controlForeground}" font-size="30">
            One of the strategies used
          </text>
          <text x="890" y="150" fill="${t.controlForeground}" font-size="20">
            For Rabobank Wrap/Recap
          </text>
            
          ${S(t,2)}
          ${_(t,2,"Animating the Rabo line")}
          ${_(t,3,"Have the list of points for the before state",25,'font-style="italic"')}
          ${_(t,4,"Have the list of points for the after state",25,'font-style="italic"')}
          ${_(t,5,"Use the &lt;animate /&gt; tag",25,'font-style="italic"')}
            
          ${S(t,7)}
          ${_(t,7,"Animating the position of Rabo line")}
          ${_(t,8,"Draw a long version of the line",25,'font-style="italic"')}
          ${_(t,9,"Move the line along the viewable window",25,'font-style="italic"')}
          ${_(t,10,"   Gives a sense of movement",25,'font-style="italic"')}
        </g>

        <g opacity="0" transform="scale(0.15) translate(9000 2500)">
          ${H({duration:"1s",begin:a==null?void 0:`${a}-slide-anim.begin+2s`})}
          <path id="squiggle-line" d="M 9 10 C 613 331 1599 -302 2385 7" 
            stroke="${t.exampleColour}" 
            stroke-width="50" 
            stroke-linecap="round"
            fill="transparent"
          >
            <animate id="twistStart" attributeName="d"
              from="M 9 10 C 613 331 1599 -302 2385 7" to="M 2134 -1179 C -1623 652 3432 712 -293 -1191" 
              begin="1s;twistEnd.end+1" dur="1s" fill="freeze"
            />
            <animate id="twistEnd" attributeName="d"
              to="M 9 10 C 613 331 1599 -302 2385 7" from="M 2134 -1179 C -1623 652 3432 712 -293 -1191" 
              begin="twistStart.end+1" dur="1s" fill="freeze"
            />
            
          </path>
        </g>
        `,...r}),...r}},cr="data:text/markdown;base64,c3RhdFBvaW50cwo=",fr=async n=>{const a=B[n.themeKey],t=T(n),r={ssg:{secondsToDisplay:3},notes:await Y(cr)};return{content:()=>N({ctx:n,title:"The Fun stuff - Complex shapes",content:`
        <g transform="scale(3) translate(50, 80)">
          <g fill="#9dacc2" stroke="${a.controlForeground}">
            <polygon points="100,0 14,50 14,150 100,200 186,150 186,50 100,0"></polygon>
            <line x1="100" y1="100" x2="100" y2="0"></line>
            <line x1="100" y1="100" x2="14" y2="50"></line>
            <line x1="100" y1="100" x2="14" y2="150"></line>
            <line x1="100" y1="100" x2="100" y2="200"></line>
            <line x1="100" y1="100" x2="186" y2="150"></line>
            <line x1="100" y1="100" x2="186" y2="50"></line>
          </g>

          <g fill="${a.controlForeground}">
            <animate attributeName="opacity" dur="500ms" from="0" to="1"></animate>
            <text font-size="10px" text-anchor="middle" y="-15">
              <tspan x="100">Max HP</tspan>
              <tspan dy="10px" x="100">120</tspan>
            </text>
            <text font-size="10px" text-anchor="middle" y="45">
              <tspan x="0">R. Atk</tspan>
              <tspan dy="10px" x="0">145</tspan>
            </text>
            <text font-size="10px" text-anchor="middle" y="160">
              <tspan x="0">R. Def</tspan>
              <tspan dy="10px" x="0">110</tspan>
            </text>
            <text font-size="10px" text-anchor="middle" y="210">
              <tspan x="100">Speed</tspan>
              <tspan dy="10px" x="100">130</tspan>
            </text>
            <text font-size="10px" text-anchor="middle" y="160">
              <tspan x="200">M. Def</tspan>
              <tspan dy="10px" x="200">110</tspan>
            </text>
            <text font-size="10px" text-anchor="middle" y="45">
              <tspan x="200">M. Atk</tspan>
              <tspan dy="10px" x="200">125</tspan>
            </text>
          </g>
          <polygon
            points="100,100 100,100 100,100 100,100 100,100 100,100"
            fill="#3fbb9f" opacity="0.75" stroke="#ab75e8" stroke-width="2px">
            <animate 
              from="100,100 100,100 100,100 100,100 100,100 100,100" 
              to="100,60.00 58.14,75.83 68.25,118.33 100,143.33 131.75,118.33 136.08,79.17" 
              attributeName="points" 
              fill="freeze"
              begin="${t==null?"500ms":`${t}-slide-anim.end+750ms`}"
              dur="1s"
            ></animate>
          </polygon>
        </g>
        
        <g opacity="0" transform="translate(100 90)">
          ${H({duration:"1s",begin:t==null?void 0:`${t}-slide-anim.end+1s`})}
          <rect 
            width="850"
            height="810"
            x="850"
            y="50"
            rx="50"
            fill="transparent"
            stroke="${a.secondary}"
            stroke-width="3"
          />

          <text x="890" y="120" fill="${a.controlForeground}" font-size="30">
            Steps:
          </text>

          ${S(a,0)}
          ${_(a,0,"Draw a Hexagon")}
          ${_(a,1,"Using &lt;polygon&gt;",25,'font-style="italic"')}

          ${S(a,2)}
          ${_(a,2,"Draw a line from the center to the the edge of the hexagon")}
          ${_(a,3,"6 times, one for each point",25,'font-style="italic"')}

          ${S(a,4)}
          ${_(a,4,"Add the text descriptions and values for each corner")}

          ${S(a,5)}
          ${_(a,5,"Draw the value of each attribute")}
          ${_(a,6,"Defining the point for each attribute in a",25,'font-style="italic"')}
          <text x="1345" y="${160+Ie+6*50}" fill="#ab75e8" font-size="25" font-style="italic">&lt;polyline&gt;</text>

          ${S(a,7)}
          ${_(a,7,"Add some colour to the")}
          <text x="1223" y="${160+Ie+7*50}" fill="#ab75e8" font-size="30" font-style="italic">&lt;polyline&gt;</text>

          ${S(a,8)}
          ${_(a,8,"Add an animation 💫")}

          ${S(a,12)}
          ${_(a,12,"I used this on:")}
          <a xlink:href="https://cassettebeasts.assistantapps.com?${v.linkRef}" target="_blank">
            ${_(a,12.75,"https://cassettebeasts.assistantapps.com",30,'font-style="italic"')}
          </a>
          ${ne(a,12.8,500)}
          
        </g>
        `,...r}),...r}},gr="data:text/markdown;base64,c3dhdENoYXJ0Cg==",hr=async n=>{const a=T(n),t=B[n.themeKey],r={ssg:{secondsToDisplay:3},notes:await Y(gr)};return{content:()=>N({ctx:n,title:"The Fun stuff - Custom charts",content:`
        <clipPath id="chart-rounded">
          <rect x="0" y="0" width="820" height="650" rx="20" />
        </clipPath>
        <g transform="translate(125, 220)" clip-path="url(#chart-rounded)">
          ${q("swatChart")}
        </g>
        
        <g opacity="0" transform="translate(200 100)">
          ${H({duration:"1s",begin:a==null?void 0:`${a}-slide-anim.begin+1s`})}
          <rect 
            width="750"
            height="810"
            x="850"
            y="40"
            rx="50"
            fill="transparent"
            stroke="${t.secondary}"
            stroke-width="3"
          />

          <text x="890" y="120" fill="${t.controlForeground}" font-size="30">
            Steps:
          </text>

          ${S(t,0)}
          ${_(t,0,"Install my npm package")}
          ${_t(t,1,415,40)}
          ${_(n.themeKey=="light"?{...t,controlForeground:t.controlBackground}:t,1,"npm install @assistantapps/swat-chart ",25,'font-style="italic"')}
          
          ${S(t,2)}
          ${_(t,2,"Change the config to your liking")}
          ${_(t,3,"You can play around with the live version:",25,'font-style="italic"')}
          <a xlink:href="https://assistantapps.github.io/Swat-Chart?${v.linkRef}" target="_blank">
            ${_(t,3.75,"https://assistantapps.github.io/Swat-Chart",25,'font-style="italic"')}
          </a>
          ${ne(t,3.75,430)}
          
          ${S(t,7)}
          ${_(t,7,"Profit?")}

          ${S(t,12)}
          ${_(t,12,"Used by a friend here:")}
          <a xlink:href="https://crisply.app?${v.linkRef}" target="_blank">
            ${_(t,12.75,"https://crisply.app",30,'font-style="italic"')}
          </a>
          ${ne(t,12.8,205)}

          
        </g>
        `,...r}),...r}},Ye=512,mr=2,pr=100,Se=10,br=n=>{let a=360/n.options.length;const t=Ye/2+mr,r=n.theme.exampleColour,u=360/n.options.length;a=Number(u.toFixed(2));let k="";return k='class="spin-the-wheel"',`
    <g id="spinner" ${n.attr??""}>
        <g id="spinner-inner" ${k}>

            <circle
                cx="${t}"
                cy="${t}"
                r="${t-Se}"
                fill="${n.theme.wheelOfFortuneBackground}"
                stroke="${n.theme.wheelOfFortuneForeground}"
            />
            ${n.options.map((I,z)=>`
                <g id="option-line-${z}" transform="rotate(${a*z} ${t} ${t})">
                    <line
                        x1="${t}"
                        y1="${t}"
                        x2="${t}"
                        y2="${Se}"
                        fill="${n.theme.wheelOfFortuneBackground}"
                        stroke="${n.theme.wheelOfFortuneForeground}"
                    ></line>
                </g>
                <g id="option-text-${z}" transform="rotate(${a*(z+.5)} ${t} ${t})">
                    <text
                        x="${t}"
                        y="${Ye/7}"
                        font-size="35"
                        text-anchor="middle"
                        fill="white"
                    >
                        ${I}
                    </text>
                </g>`).join("")}
            <circle
                cx="${t}"
                cy="${t}"
                r="${pr/3*2}"
                fill="${n.theme.wheelOfFortuneBackground}"
                stroke="${n.theme.wheelOfFortuneForeground}"
            />
            <use 
              href="#entelect-logo" 
              fill="${r}" 
              stroke="${r}" 
              stroke-width="5" 
              transform="scale(0.5) translate(${t-50} ${t-110})"  
            />
        </g>
        <polygon
            transform="translate(${t-Se*2} 5)"
            points="0,0 ${t/6},0 ${t/12},${t/12}"
            fill="${r}" rx="10"
            stroke="${r}" stroke-width="5"
        />
    </g>`},yr="data:text/markdown;base64,d2hlZWxPZkZvcnR1bmUK",wr=async n=>{const a=B[n.themeKey],t=T(n),r=["😁","🕹️","🧑‍🎨","💫","🥪"],u={ssg:{secondsToDisplay:3},notes:await Y(yr)};return{content:()=>N({ctx:n,title:"The Fun stuff - Complex shapes",content:`
        <g opacity="0" transform="translate(100 90)">${H({duration:"1s",begin:t==null?void 0:`${t}-slide-anim.begin+1s`})}
            <rect 
              width="850"
              height="810"
              x="850"
              y="50"
              rx="50"
              fill="transparent"
              stroke="${a.secondary}"
              stroke-width="3"
            />

            <text x="890" y="120" fill="${a.controlForeground}" font-size="30">
              Steps:
            </text>

            ${S(a,0)}
            ${_(a,0,"Draw a Circle")}

            ${S(a,1)}
            ${_(a,1,"Draw a line from the center to the the edge of the circle")}

            ${S(a,2)}
            ${_(a,2,"Calculate the wedge angle (360 / number of options)")}
            ${_(a,3,`360 / ${r.length} = ${360/r.length}`,25,'font-style="italic"')}

            ${S(a,4)}
            ${_(a,4,"Rotate the line by wedge angle x the index of the line")}

            ${S(a,5)}
            ${_(a,5,"Draw the text of the option")}

            ${S(a,6)}
            ${_(a,6,"Rotate the text by wedge angle x the (index of the text + 0.5)")}
            ${_(a,7,"This will place the text in the middle of the slice",25,'font-style="italic"')}

            ${S(a,8)}
            ${_(a,8,"Draw the center circle")}

            ${S(a,9)}
            ${_(a,9,"Draw the center logo")}

            ${S(a,10)}
            ${_(a,10,"Add rotation animation 💫")}   

          ${S(a,12)}
          ${_(a,12,"I used this on:")}
          <a xlink:href="https://nomads.kurtlourens.com?${v.linkRef}" target="_blank">
            ${_(a,12.75,"https://nomads.kurtlourens.com",30,'font-style="italic"')}
          </a>
          ${ne(a,12.8,395)}
        </g>

        ${br({options:r,theme:a,attr:'transform="scale(1.5) translate(50 110)"'})}
        `,...u}),...u}},Ae={"ssg-click.svg":{numLines:8968,numChars:737115,numCharsMinified:719181},"ssg-css.svg":{numLines:8800,numChars:712905,numCharsMinified:695307},"ssg-svg-animation.svg":{numLines:8872,numChars:727640,numCharsMinified:709898}},Qe=(n,a=2)=>{if(!+n)return"0 Bytes";const t=1024,r=a<0?0:a,u=["Bytes","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],k=Math.floor(Math.log(n)/Math.log(t));return`${parseFloat((n/Math.pow(t,k)).toFixed(r))} ${u[k]}`},$r=async n=>{const a=T(n),t=B[n.themeKey],r={ssg:{secondsToDisplay:3},notes:""};return{content:()=>N({ctx:n,title:"Links",content:`
          <g opacity="0">
            ${H({duration:"1s",begin:a==null?void 0:`${a}-slide-anim.begin+1s`})}
            <rect 
              width="1100"
              height="810"
              x="100"
              y="140"
              rx="50"
              fill="transparent"
              stroke="${t.secondary}"
              stroke-width="3"
            />
            <text x="150" y="220" 
              fill="${t.controlForeground}" font-size="40">
              Presentation Statistics:
            </text>

            ${ze(t,300,"Interactive SVG","ssg-click.svg")}
            ${ze(t,450,"Auto slide SVG (CSS)","ssg-css.svg")}
            ${ze(t,600,"Auto slide SVG (SMIL)","ssg-svg-animation.svg")}

            ${ee(n.env)?"":`<g transform="translate(500 560)">
                  <foreignObject x="50" y="0" width="600" height="700">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="font-size: 1.5em;">
                      <img src="https://svg.kurtlourens.com/assets/img/generated/ssg-css.svg" alt="slides" />
                    </div>
                  </foreignObject>
                </g>`}
            <g transform="translate(550 300)">
              <text x="0" y="0" fill="${t.controlForeground}" font-size="30">
                PNGs used
              </text>
              <text x="10" y="40" fill="${t.controlForeground}" font-size="25">
                - 4 files
              </text>
              <text x="10" y="80" fill="${t.controlForeground}" font-size="25">
                - ${Qe(160308)}
              </text>
            </g>

            <g transform="translate(950 350)">
              <circle cx="0" cy="0" r="100" fill="transparent" stroke="red" stroke-width="10" />

              <text x="0" y="5" fill="${t.controlForeground}" 
                font-size="125" text-anchor="middle" font-weight="bold"
                alignment-baseline="middle">AI</text>

              <line
                x1="70" y1="70"
                x2="-70" y2="-70"
                stroke="red" stroke-width="10"
              />
            </g>

          </g>

          <g opacity="0" transform="translate(100 90)">
            ${H({duration:"1s",begin:a==null?void 0:`${a}-slide-anim.begin+1s`})}
            <rect 
              width="500"
              height="810"
              x="1200"
              y="50"
              rx="50"
              fill="transparent"
              stroke="${t.secondary}"
              stroke-width="3"
            />

            <a xlink:href="https://svg.kurtlourens.com" target="_blank">
              <text x="1450" y="115" text-anchor="middle" font-style="italic"
                fill="${t.controlForeground}" font-size="30">
                svg.kurtlourens.com
              </text>
            </a>

            <text x="1450" y="150" text-anchor="middle" font-style="italic"
              fill="${t.controlForeground}" font-size="20">
              Downloads:
            </text>
            ${Fe(t,1250,175,"ssg-click.svg","Interactive SVG")}
            ${Fe(t,1250,235,"ssg-css.svg","Auto slide SVG (Best compatibility)")}
            ${Fe(t,1250,295,"ssg-svg-animation.svg","Auto slide SVG (Chromium browsers)")}

            <text x="1450" y="420" text-anchor="middle" font-style="italic"
              fill="${t.controlForeground}" font-size="20">
              Totally safe QR code
            </text>
            <g transform="translate(1230, 400) scale(1.5)">
              ${q("qrCode")}
            </g>
          </g>
        `,...r}),...r}},Fe=(n,a,t,r,u)=>`
    <g transform="translate(${a} ${t})">
      <a xlink:href="https://svg.kurtlourens.com/assets/img/generated/${r}" target="_blank">
        <rect 
          width="400"
          height="40"
          x="0"
          y="0"
          rx="10"
          fill="transparent"
          stroke="${n.primary}"
          stroke-width="3"
        />
        <line x1="50" x2="50" y1="0" y2="40"
          stroke="${n.primary}" stroke-width="3" />
        <g transform="translate(10 3) scale(1.25)">
          <path d="M17 17H17.01M17.4 14H18C18.9319 14 19.3978 14 19.7654 14.1522C20.2554 14.3552 20.6448 14.7446 20.8478 15.2346C21 15.6022 21 16.0681 21 17C21 17.9319 21 18.3978 20.8478 18.7654C20.6448 19.2554 20.2554 19.6448 19.7654 19.8478C19.3978 20 18.9319 20 18 20H6C5.06812 20 4.60218 20 4.23463 19.8478C3.74458 19.6448 3.35523 19.2554 3.15224 18.7654C3 18.3978 3 17.9319 3 17C3 16.0681 3 15.6022 3.15224 15.2346C3.35523 14.7446 3.74458 14.3552 4.23463 14.1522C4.60218 14 5.06812 14 6 14H6.6M12 15V4M12 15L9 12M12 15L15 12" stroke="${n.controlForeground}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <text x="65" y="27"font-style="italic"
          fill="${n.controlForeground}" font-size="20">
          ${u}
        </text>
      </a>
    </g>`,ze=(n,a,t,r)=>`
  <g transform="translate(150 ${a})">
    <text x="0" y="0" fill="${n.controlForeground}" font-size="30">
      ${t}
    </text>
  
    <text x="10" y="40" fill="${n.controlForeground}" font-size="25">
      - ${Ae[r].numLines} lines
    </text>
    <text x="10" y="80" fill="${n.controlForeground}" font-size="25">
      - ${Qe(Ae[r].numChars)}
    </text>
  </g>`,qe=()=>[{id:"slide-intro",slideFunc:yt},{id:"slide-agenda",slideFunc:$t},{id:"slide-what-is-svg",slideFunc:Ht},{id:"slide-why-is-svg",slideFunc:Nt},{id:"slide-when-use-svg",slideFunc:Rt},{id:"slide-basic-setup",slideFunc:Vt},{id:"slide-basic-drawing",slideFunc:It},{id:"slide-basic-drawing-defs",slideFunc:Zt},{id:"slide-basic-drawing-fakes",slideFunc:Mt},{id:"slide-basic-drawing-css",slideFunc:Ft},{id:"slide-basic-animate",slideFunc:Ct},{id:"slide-advanced-foreign-object",slideFunc:Et},{id:"slide-advanced-security-concerns",slideFunc:Ut},{id:"slide-fun-begins",slideFunc:Kt},{id:"slide-fun-loaders",slideFunc:nr},{id:"slide-fun-circular-progress",slideFunc:qt},{id:"slide-fun-calendar-icon",slideFunc:Jt},{id:"slide-fun-rabobank-line",slideFunc:lr},{id:"slide-fun-github-profile",slideFunc:ar},{id:"slide-fun-stat-points",slideFunc:fr},{id:"slide-fun-meta-image",slideFunc:ur},{id:"slide-fun-wheel-of-fortune",slideFunc:wr},{id:"slide-fun-swat-chart",slideFunc:hr},{id:"slide-fun-diagram",slideFunc:tr},{id:"slide-links",slideFunc:$r}],et=n=>`<g id="background">
    <rect 
        width="${v.width-v.strokeWidth/2}"
        height="${v.height-v.strokeWidth/2}"
        x="${v.strokeWidth/4}"
        y="${v.strokeWidth/4}"
        rx="${v.borderRadius}"
        fill="${B[n].slideBackground}"
    />
    <rect 
        width="${v.width-v.strokeWidth}"
        height="${v.height-v.strokeWidth}"
        x="${v.strokeWidth/2}"
        y="${v.strokeWidth/2}"
        rx="${v.borderRadius}"
        fill="transparent"
        stroke="${B[n].primary}"
        stroke-width="${v.strokeWidth}"
    />
</g>`,kr=(n,a)=>`<g id="${n}-notes" transform="translate(${v.width} 0)">
    <foreignObject x="40" y="25" width="1000" height="600">
        <div xmlns="http://www.w3.org/1999/xhtml" style="font-size: 1.5em;">
          ${a}
      </div>
    </foreignObject>
  </g>`,N=async n=>{let a=n.attr??"",t="",r="",u="0",k=ut({ctx:n.ctx,duration:"250ms"}),I="",z="";const P=B[n.ctx.themeKey];if(n.ctx.env=="web",ee(n.ctx.env)){const G=n.ctx,X=G.numberOfSlides-1,R=G.currentSlideIndex>=X;I=De({slideIndex:G.currentSlideIndex,numberOfSlides:G.numberOfSlides}),G.showNotes==!0&&(z=kr(G.id,n.notes));const ie=`
      <animateTransform
        href="#${G.id}"
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        dur="1000ms"
        from="0 500 500"
        to="90 500 500"
        repeatCount="1"
        begin="${G.id}-slide-anim.end+50ms" 
      />
      <animateMotion
        href="#${G.id}"
        dur="500ms"
        repeatCount="1"
        fill="freeze"
        path="M0,0 L -300 ${v.height}"
        begin="${G.id}-slide-anim.end+50ms" 
      />`;if(G.transition=="click"&&R==!1&&(t=`
      <g id="${G.id}-navigate-btn" 
        transform="translate(${v.width-160} ${v.height-100})">

        <rect x="0" y="0" rx="20"
          width="160" height="100"
          fill="${P.primary}"
          stroke="${P.slideBackground}" stroke-width="0"
        />
        <polyline
          points="30,40 90,40 90,20 140,55 90,90 90,70 30,70"
          fill="${P.slideBackground}"
        />
        <animate 
          id="${G.id}-slide-anim"
          href="#${G.id}-navigate-btn" 
          attributename="opacity"
          from="1"
          to="0"
          dur="50ms"
          begin="click"
          fill="freeze"
        />
        ${ie}
      </g>`),G.transition=="svg-animation"&&R==!1){const D=[];if(G.currentSlideIndex==0)D.push(`<animate
          id="${G.id}-slide-anim"
          attributename="opacity"
          from="1"
          to="0"
          dur="1ms"
          begin="${n.ssg.secondsToDisplay}s"
          fill="freeze"
        />`);else{const oe=T(G);D.push(`
          <animate
            id="${G.id}-slide-anim"
            attributename="opacity"
            from="1"
            to="0"
            dur="${n.ssg.secondsToDisplay}s"
            begin="${ce(oe,P.defaultDelayInMs,"end")}"
            fill="freeze"
          />
        `)}D.push(ie),r=D.join(`
`)}if(G.transition=="css"&&R==!1){(a?.length??0)>1&&console.warn(`attr has content and will be overridden: '${a}'`);let D=n.ssg.secondsToDisplay;const oe=qe();for(let te=0;te<G.currentSlideIndex;te++){const ae=G.numberOfSlides-1-te,J=await oe[ae].slideFunc(G);D+=J.ssg.secondsToDisplay}a=`class="next-slide-anim" style="--delay: ${D}s; --duration: 3s"`,r=""}}return n.ctx.currentSlideIndex==0&&(u="1",k=""),`<g id="${n.ctx.id}" ${a} opacity="${u}">
      ${et(n.ctx.themeKey)}
      ${k}
      ${ct(P,n.title)}
      ${n.content}
      ${I}
      ${z}
      ${r}
      ${t}
    </g>`},vr={content:'<g id="empty"></g>',notes:"empty"},_r=n=>()=>Promise.resolve({notes:n,content:`
    <text x="${v.width/2}" y="${v.height/2}" 
        fill="white" font-size="150" text-anchor="middle"
    >${n}</text>
`}),xr=(n,a=8)=>`
      <g fill="${n.illustrationDuckFeather}">
          <rect width="${3*a}" height="${2*a}" x="${7*a}" y="${1*a}" />
          <rect width="${4*a}" height="${7*a}" x="${6*a}" y="${2*a}" />
          <rect width="${2*a}" height="${2*a}" x="${9*a}" y="${2*a}" />
          <rect width="${7*a}" height="${4*a}" x="${2*a}" y="${6*a}" />
          <rect width="${3*a}" height="${4*a}" x="${1*a}" y="${5*a}" />
          <rect width="${1*a}" height="${2*a}" x="${1*a}" y="${4*a}" />
      </g>
      <g fill="${n.illustrationDuckBeak}">
          <rect width="${2*a}" height="${2*a}" x="${9*a}" y="${3*a}" />
          <rect width="${2*a}" height="${1*a}" x="${10*a}" y="${4*a}" />
          <rect width="${3*a}" height="${2*a}" x="${4*a}" y="${7*a}" />
          <rect width="${2*a}" height="${1*a}" x="${3*a}" y="${7*a}" />
      </g>
      <use href="#p" x="${7*a}" y="${3*a}" fill="${n.illustrationDuckEye}" />`,Cr=n=>{const a=Ge(n.themeKey),t=B[n.themeKey];return`
  <defs>
    ${Object.keys(a).map(r=>a[r].defs.toString().replaceAll("[id]",`id="${r}"`)).join(`
`)}

    ${n.imagePreloads}

    <polygon id="star-for-def-example" points="96,0,125.38926261462366,55.54915028125263,187.30142556433475,66.33436854000504,143.55282581475768,111.45084971874736,152.42738422007744,173.66563145999493,96,146,39.572615779922586,173.66563145999498,48.447174185242325,111.45084971874738,4.69857443566525,66.33436854000507,66.61073738537632,55.549150281252636" stroke-width="5"></polygon>
    <pattern id="pattern-for-def-example" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="10" cy="10" r="10" fill="${t.exampleColour}" />
    </pattern>
    <path id="entelect-logo" d="M 287.038 363.406 C 285.514 366.2 283.16 378.583 283.922 382.266 C 283.478 386.584 286.726 393.804 290.296 396.439 C 294.644 400.115 304.356 402.457 316.543 401.628 C 326.548 401.548 340.486 397.269 346.048 393.916 C 356.705 388.377 366.635 376.577 368.032 372.874 C 373.224 364.001 375.353 356.964 373.971 342.619 C 372.456 333.518 368.463 325.803 363.45 320.33 C 358.582 314.176 351.788 308.446 343.941 302.896 C 333.735 297.27 328.48 294.065 315.617 292.837 C 298.418 291.195 285.58 296.449 274.728 302.513 C 264.834 307.919 255.574 317.385 251.403 323.491 C 241.055 338.498 237.91 350.018 236.411 364.412 C 235.213 371.381 237.271 386.831 241.089 397.189 C 244.588 406.858 252.685 420.341 261.222 428.115 C 271.566 437.342 279.736 440.444 290.056 443.889 C 301.973 447.147 315.674 447.53 323.919 445.549 C 335.829 443.418 344.333 436.961 349.736 432.474 C 353.854 429.165 361.737 419.259 361.135 416.715 L 346.191 405.507 C 344.176 405.749 337.33 415.319 323.568 418.631 C 315.877 420.574 305.948 419.456 300.466 417.913 C 293.858 416.241 286.637 411.503 283.829 409.642 C 275.679 402.976 271.449 396.036 268.773 389.238 C 266.375 383.981 264.835 375.66 264.959 369.792 C 264.459 361.489 268.016 350.698 272.111 343.513 C 273.921 340.16 281.005 332.193 283.542 330.836 C 292.905 323.604 300.498 321.752 300.498 321.752 C 307.928 319.588 318.601 319.441 323.919 321.161 C 329.971 322.92 333.043 328.561 334.281 331.778 C 334.281 331.778 336.175 333.137 336.42 340.448 C 336.665 347.759 335.511 352.518 330.241 357.994 C 326.196 361.826 322.829 363.995 317.533 365.273 C 312.109 366.447 307.112 366.051 300.482 364.316 C 295.347 361.815 291.403 361.384 287.038 363.406 Z"/>

    <clipPath id="basic-setup-example-1"><rect x="50" y="0" width="100" height="200" /></clipPath>
    <clipPath id="basic-setup-example-2"><rect x="0" y="150" width="100" height="100" /></clipPath>
    <clipPath id="basic-setup-example-3"><rect x="50" y="150" width="100" height="100" /></clipPath>
    <clipPath id="basic-setup-example-4"><rect x="-50" y="50" width="100" height="100" /></clipPath>

    <clipPath id="presentation-clip">
      <rect 
        width="${v.width+v.strokeWidth/2}"
        height="${v.height+v.strokeWidth/2}"
        x="0"
        y="0"
        rx="${v.borderRadius}"
      />
    </clipPath>

    <rect id="p" width="8" height="8" rx="0.5"/>
    <symbol id="duckPixelArt">
      ${xr(t)}
    </symbol>
    
    <filter id="GaussianBlur" x="0" y="0" xmlns="http://www.w3.org/2000/svg">
      <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
    </filter>
    
		<linearGradient id="atlas" x1="0%" y1="0%" x2="100%" y2="0%">
			<stop offset="0%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
			<stop offset="100%" style="stop-color:rgb(155,0,0);stop-opacity:1" />
		</linearGradient>
  </defs>

  <style>
    foreignObject *,
    text {
      font-family: ${v.font};
      line-height: 1.5em;
      font-weight: 400;
      font-synthesis: none;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
    }
    
    .noselect {
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    .transition-slide {
      transition: transform var(--duration, 500ms) ease-in-out;
    }

    .slide-left-right,
    .slide-up-down {
      animation: linear infinite;
      animation-duration: var(--duration, 5s);
      animation-delay: var(--delay, 1ms);
      animation-direction: alternate;
    }

    .slide-left-right {
      animation-name: anim-slide-left-right;
    }

    .slide-up-down {
      animation-name: anim-slide-up-down;
    }

    @keyframes anim-slide-left-right {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(3em);
      }
    }

    @keyframes anim-slide-up-down {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(3em);
      }
    }

    .cool-circle {
      fill: #FF0000;
      stroke: #FFFF00;
      stroke-width: 10px;
    }

    @keyframes anim-cool-circle {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(0, 18em);
      }
    }

    .cool-circle-anim {
      animation: anim-cool-circle;
      animation-direction: alternate;
      animation-duration: 3s;
      animation-iteration-count: infinite;
    }

    @keyframes anim-spin-the-wheel {
      from {
        -ms-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      to {
        -ms-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }

    .spin-the-wheel {
      -webkit-animation: anim-spin-the-wheel 30s linear infinite;
      -moz-animation: anim-spin-the-wheel 30s linear infinite;
      -ms-animation: anim-spin-the-wheel 30s linear infinite;
      -o-animation: anim-spin-the-wheel 30s linear infinite;
      animation: anim-spin-the-wheel 30s linear infinite;
      transform-origin: 256px 256px;
    }

    #line-animation {
      stroke-dasharray: 1000;
      stroke-dashoffset: 1000;
      animation: line-animation-dash 3s linear alternate infinite;
    }

    @keyframes line-animation-dash {
      from {
        stroke-dashoffset: 1000;
      }
      to {
        stroke-dashoffset: 0;
      }
    }

    @keyframes anim-next-slide {
      0% {
        transform: translate(0, 0) rotate(0);
      }
      100% {
        transform: translate(0, 200%) rotate(45deg);
      }
    }

    .next-slide-anim {
      animation: anim-next-slide;
      animation-duration: var(--duration, 250ms);
      animation-delay: var(--delay, 150ms);
      animation-fill-mode: forwards;
    }

		#atlas-loader {
			position: relative;
			animation: anim-up-and-down 1s ease-in-out infinite;
		}
		
		@keyframes anim-up-and-down {
			0% {
				transform: translateY(0);
			}
			50% {
				transform: translateY(1em);
			}
			100% {
				transform: translateY(0);
			}
		}
  </style>`},Br=n=>`<path d="M4 65 l${v.width-8} 0" stroke="${n.controlForeground}" stroke-opacity="0.3" />`,Ir=()=>{const n=v.windowIconSize*3,a=0,t=v.windowIconSize*3.5;return`<g id="window-buttons">
    <circle
      id="window-minimize"
      cx="${v.width-t*3-a}"
      cy="${n}"
      r="${v.windowIconSize}"
      fill="#126BBF"
    />
    <circle
      id="window-maximize"
      cx="${v.width-t*2-a}"
      cy="${n}"
      r="${v.windowIconSize}"
      fill="#00B133"
    />
    <circle
      id="window-close"
      cx="${v.width-t*1-a}"
      cy="${n}"
      r="${v.windowIconSize}"
      fill="#F4C700"
    />
  </g>`},Gr=()=>`<g id="window-title-icon">
    ${q("kurtLourens",'transform="scale(0.2) translate(100, 50)"')}
  </g>`,Vr=async(n,a)=>{const t=await Sr(n);return`
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 ${v.width} ${v.height}"
    overflow="hidden"
    data-date-rendered="${new Date().toISOString()}"
  >
    ${Cr({themeKey:n,imagePreloads:t.join(`\r
`)})}

    ${et(n)}
    <g clip-path="url(#presentation-clip)">
      ${a}
    </g>
  </svg>`},Ne=async(n,a,t,r)=>{const u=await n.content();return Vr(a,`    
    ${u??""}
    ${De({slideIndex:t,numberOfSlides:r})}

    ${Gr()}
    ${Ir()}
    ${Br(B[a])}
  `)},Sr=n=>{const a=B[n];let t=[U(a,E.kurtLourens,r=>{const u=r.querySelector("g");return u==null?"":(u.setAttribute("id","kurtLourens"),u.outerHTML)}),U(a,E.standing,r=>{const u=r?.children?.[0]?.innerHTML??"";return u==null?"":`<g id="standing">${u}</g>`}),U(a,E.pitch,r=>{const u=r?.children?.[0]?.innerHTML??"";return u==null?"":`<g id="pitch">${u}</g>`}),U(a,E.about,r=>{const u=r.querySelector("g");return u==null?"":(u.setAttribute("id","about"),u.outerHTML)}),U(a,E.alien,r=>{const u=r?.children?.[0]?.innerHTML??"";return u==null?"":`<g id="alien">${u}</g>`}),U(a,E.cool,r=>{const u=r.querySelector("g");return u==null?"":(u.setAttribute("id","cool"),u.outerHTML)}),U(a,E.review,r=>{const u=r.querySelector("g");return u==null?"":(u.setAttribute("id","review"),u.outerHTML)}),U(a,E.tooltip,r=>{const u=r.querySelector("g");return u==null?"":(u.setAttribute("id","tooltip"),u.outerHTML)}),U(a,E.qrCode,r=>{const u=r?.children?.[0]?.innerHTML??"";return u==null?"":`<g id="qrCode">${u}</g>`}),U(a,E.undraw,r=>{const u=r.querySelector("g");return u==null?"":(u.setAttribute("id","undraw"),u.outerHTML)}),U(a,E.swatChart,r=>{const u=r?.children?.[0]?.innerHTML??"";return u==null?"":`<g id="swatChart" style="border-radius: 150px;">${u}</g>`}),U(a,E.ghost,r=>{const u=r?.children?.[0]?.innerHTML??"";return u==null?"":`<g id="ghost">${u}</g>`}),U(a,E.facebook,r=>{const u=r.querySelector("g");return u==null?"":(u.removeAttribute("xmlns"),u.outerHTML)}),U(a,E.hacker,r=>{const u=r?.children?.[0]?.innerHTML??"";return u==null?"":`<g id="hacker">${u}</g>`}),U(a,E.kurtGithubHeader,r=>{const u=r?.children?.[0]?.innerHTML??"";return u==null?"":`<g id="kurtGithubHeader">${u}</g>`}),U(a,E.githubHeader,r=>{const u=r?.children?.[0]?.innerHTML??"";return u==null?"":`<g id="githubHeader">${u}</g>`})];for(const r of Ke)t.push(U(a,`./assets/img/loaders/${r.id}.svg`,u=>{const k=u?.children?.[0]?.innerHTML??"";return k==null?"":`<g id="${r.id}">${k}</g>`}));return Promise.all(t)};var Ze={exports:{}},Te;function Fr(){return Te||(Te=1,function(n){(function(a,t,r){if(!a)return;for(var u={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},k={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},I={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},z={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},P,G=1;G<20;++G)u[111+G]="f"+G;for(G=0;G<=9;++G)u[G+96]=G.toString();function X(o,s,f){if(o.addEventListener){o.addEventListener(s,f,!1);return}o.attachEvent("on"+s,f)}function R(o){if(o.type=="keypress"){var s=String.fromCharCode(o.which);return o.shiftKey||(s=s.toLowerCase()),s}return u[o.which]?u[o.which]:k[o.which]?k[o.which]:String.fromCharCode(o.which).toLowerCase()}function ie(o,s){return o.sort().join(",")===s.sort().join(",")}function D(o){var s=[];return o.shiftKey&&s.push("shift"),o.altKey&&s.push("alt"),o.ctrlKey&&s.push("ctrl"),o.metaKey&&s.push("meta"),s}function oe(o){if(o.preventDefault){o.preventDefault();return}o.returnValue=!1}function te(o){if(o.stopPropagation){o.stopPropagation();return}o.cancelBubble=!0}function ae(o){return o=="shift"||o=="ctrl"||o=="alt"||o=="meta"}function ue(){if(!P){P={};for(var o in u)o>95&&o<112||u.hasOwnProperty(o)&&(P[u[o]]=o)}return P}function J(o,s,f){return f||(f=ue()[o]?"keydown":"keypress"),f=="keypress"&&s.length&&(f="keydown"),f}function re(o){return o==="+"?["+"]:(o=o.replace(/\+{2}/g,"+plus"),o.split("+"))}function e(o,s){var f,l,g,$=[];for(f=re(o),g=0;g<f.length;++g)l=f[g],z[l]&&(l=z[l]),s&&s!="keypress"&&I[l]&&(l=I[l],$.push("shift")),ae(l)&&$.push(l);return s=J(l,$,s),{key:l,modifiers:$,action:s}}function i(o,s){return o===null||o===t?!1:o===s?!0:i(o.parentNode,s)}function d(o){var s=this;if(o=o||t,!(s instanceof d))return new d(o);s.target=o,s._callbacks={},s._directMap={};var f={},l,g=!1,$=!1,p=!1;function h(w){w=w||{};var V=!1,M;for(M in f){if(w[M]){V=!0;continue}f[M]=0}V||(p=!1)}function y(w,V,M,F,Z,A){var L,j,de=[],Q=M.type;if(!s._callbacks[w])return[];for(Q=="keyup"&&ae(w)&&(V=[w]),L=0;L<s._callbacks[w].length;++L)if(j=s._callbacks[w][L],!(!F&&j.seq&&f[j.seq]!=j.level)&&Q==j.action&&(Q=="keypress"&&!M.metaKey&&!M.ctrlKey||ie(V,j.modifiers))){var _e=!F&&j.combo==Z,we=F&&j.seq==F&&j.level==A;(_e||we)&&s._callbacks[w].splice(L,1),de.push(j)}return de}function c(w,V,M,F){s.stopCallback(V,V.target||V.srcElement,M,F)||w(V,M)===!1&&(oe(V),te(V))}s._handleKey=function(w,V,M){var F=y(w,V,M),Z,A={},L=0,j=!1;for(Z=0;Z<F.length;++Z)F[Z].seq&&(L=Math.max(L,F[Z].level));for(Z=0;Z<F.length;++Z){if(F[Z].seq){if(F[Z].level!=L)continue;j=!0,A[F[Z].seq]=1,c(F[Z].callback,M,F[Z].combo,F[Z].seq);continue}j||c(F[Z].callback,M,F[Z].combo)}var de=M.type=="keypress"&&$;M.type==p&&!ae(w)&&!de&&h(A),$=j&&M.type=="keydown"};function b(w){typeof w.which!="number"&&(w.which=w.keyCode);var V=R(w);if(V){if(w.type=="keyup"&&g===V){g=!1;return}s.handleKey(V,D(w),w)}}function x(){clearTimeout(l),l=setTimeout(h,1e3)}function C(w,V,M,F){f[w]=0;function Z(Q){return function(){p=Q,++f[w],x()}}function A(Q){c(M,Q,w),F!=="keyup"&&(g=R(Q)),setTimeout(h,10)}for(var L=0;L<V.length;++L){var j=L+1===V.length,de=j?A:Z(F||e(V[L+1]).action);W(V[L],de,F,w,L)}}function W(w,V,M,F,Z){s._directMap[w+":"+M]=V,w=w.replace(/\s+/g," ");var A=w.split(" "),L;if(A.length>1){C(w,A,V,M);return}L=e(w,M),s._callbacks[L.key]=s._callbacks[L.key]||[],y(L.key,L.modifiers,{type:L.action},F,w,Z),s._callbacks[L.key][F?"unshift":"push"]({callback:V,modifiers:L.modifiers,action:L.action,seq:F,level:Z,combo:w})}s._bindMultiple=function(w,V,M){for(var F=0;F<w.length;++F)W(w[F],V,M)},X(o,"keypress",b),X(o,"keydown",b),X(o,"keyup",b)}d.prototype.bind=function(o,s,f){var l=this;return o=o instanceof Array?o:[o],l._bindMultiple.call(l,o,s,f),l},d.prototype.unbind=function(o,s){var f=this;return f.bind.call(f,o,function(){},s)},d.prototype.trigger=function(o,s){var f=this;return f._directMap[o+":"+s]&&f._directMap[o+":"+s]({},o),f},d.prototype.reset=function(){var o=this;return o._callbacks={},o._directMap={},o},d.prototype.stopCallback=function(o,s){var f=this;if((" "+s.className+" ").indexOf(" mousetrap ")>-1||i(s,f.target))return!1;if("composedPath"in o&&typeof o.composedPath=="function"){var l=o.composedPath()[0];l!==o.target&&(s=l)}return s.tagName=="INPUT"||s.tagName=="SELECT"||s.tagName=="TEXTAREA"||s.isContentEditable},d.prototype.handleKey=function(){var o=this;return o._handleKey.apply(o,arguments)},d.addKeycodes=function(o){for(var s in o)o.hasOwnProperty(s)&&(u[s]=o[s]);P=null},d.init=function(){var o=d(t);for(var s in o)s.charAt(0)!=="_"&&(d[s]=function(f){return function(){return o[f].apply(o,arguments)}}(s))},d.init(),a.Mousetrap=d,n.exports&&(n.exports=d)})(typeof window<"u"?window:null,typeof window<"u"?document:null)}(Ze)),Ze.exports}var $e=Fr();const tt=(n,a)=>[location.origin,location.pathname,a==Be.presenter?`?mode=${a}`:"",`#${n}`].join(""),zr=(n,a)=>{$e.bind(["home","0"],()=>{a(-9999)}),$e.bind(["up","pageup","left"],()=>{a(-1)}),$e.bind(["down","pagedown","right"],()=>{a(1)}),$e.bind("end",()=>{a(9999)}),$e.bind("p",()=>{const t=tt(n(),"presenter");window.open(t,"_blank")})},Zr=(n,a,t,r)=>{const u=Math.min(Math.max(a,0),r);return t!="initial"&&n==u?[n,!0]:isNaN(a)?[0,!1]:a<0?[0,!1]:a>r?[r,!1]:[a,!1]},Lr=n=>{const a=document.querySelector(":root");if(a!=null){for(const t of Object.keys(n)){const r=n[t],u=Oe(t);a.style.setProperty(u,r)}a.style.setProperty("--font-family",v.font)}},Mr=n=>{console.log("window button listener setup"),Le("#window-minimize",()=>{console.log("minimize"),n.tempMinimize()}),Le("#window-maximize",()=>{console.log("maximize"),n.toggleTheme()}),Le("#window-close",()=>{console.log("close")})},Le=(n,a)=>{const t=document.querySelector(n);if(t==null){console.warn(`Button with id "${t}" not found`);return}t.onclick=()=>a(),t.classList.add("pointer")},Wr=()=>{const a=new URLSearchParams(location.search).get("mode")??Be.slides,t=+location?.hash?.replace?.("#","");return{viewMode:a,slideIndex:t}},Pr=(n,a)=>{const t=tt(n,a);location.href!=t&&(location.href=t)},Ee="web",rt="kurt-presentation-theme";let Me=!1,ge=localStorage.getItem(rt)??"dark",ye=0;const Hr={"slide-basic-drawing-defs":"./assets/img/sun-tornado.svg"},jr=async()=>{let{viewMode:n,slideIndex:a}=Wr();const t=document.querySelector("#presentation-container"),r=document.querySelector("#presentation-presenter-container");if(t==null||r==null){console.error("unable to initialise",{containerElem:t,presenterElem:r});return}const u=qe(),k=u.length,I=k-1,{renderFunc:z,broadcastChannel:P}=Rr(t,r,u,k,I,n);P.addEventListener("message",async X=>{const R=X.data;if(R.type==ke.slide){if(a==R.data)return;a=await z(a,R.data,"broadcast")}if(R.type==ke.cursor){if(ye==R.data)return;at(t,R.data)}}),zr(()=>a,async X=>{a=await z(a,a+X,"slide")}),await z(a,a,"initial"),t.classList.add("ready")},Rr=(n,a,t,r,u,k)=>{const I=new BroadcastChannel("KurtLourensSvg"),z=async(P,G,X)=>{const[R,ie]=Zr(P,G,X,u);if(ie==!0)return P;Pr(R,k),X!="broadcast"&&I.postMessage({type:ke.slide,data:R});const D=t[R],te=await(D.slideFunc??(()=>Promise.resolve(vr)))({id:D.id,env:Ee,themeKey:ge,currentSlideIndex:R,numberOfSlides:r}),ae=n.querySelector("svg"),ue=await Ne(te,ge,R,r);if(ae!=null&&(ae.outerHTML=ue),k==Be.slides){const J=document.querySelector("#background-container");if(J!=null){const re=Hr[D.id];if(re!=null){let e=document.createElement("img");e.src=re,e.style="opacity: 0",J.appendChild(e),setTimeout(()=>{e.style=""},1e3)}else J.innerHTML=""}Mr({tempMinimize:()=>{Me?n.classList.remove("minimized"):n.classList.add("minimized"),Me=!Me},toggleTheme:()=>{const re=Object.keys(B),i=(re.indexOf(ge)+1)%re.length;localStorage.setItem(rt,re[i]),document.location.reload()}})}if(k==Be.presenter){n.classList.add(k),a.style.removeProperty("display"),window.setupTimer=g=>{if(console.log("setupTimer"),g==null)return;g.innerHTML="00m 00s";const $=new Date().getTime(),p=setInterval(()=>{g==null&&clearInterval(p);const h=new Date().getTime()-$,y=Math.floor(h%(1e3*60*60)/(1e3*60)),c=Math.floor(h%(1e3*60)/1e3);g.innerHTML=`${String(y).padStart(2,"0")}m ${String(c).padStart(2,"0")}s`},333)};const J=n.querySelector("#cursor-options");if(J!=null){const g=[],$=(p,h)=>`<button class="cursor-btn" onclick="onCursorButtonClick(${p})"><img src="./assets/img/${h}" width="20px" height="20px" /></button>`;for(let p=0;p<se.length;p++){const h=se[p];h!="unset"&&(h=="cursor-red-dot"&&g.push($(p,"red-dot.svg")),h=="cursor-hand"&&g.push($(p,"hand.svg")))}J.innerHTML=g.join(""),window.onCursorButtonClick=function(p){for(const y of se)n.classList.remove(y);ye=p;const h=se[ye];h.includes("cursor-")&&n.classList.add(h),I.postMessage({type:ke.cursor,data:p})}}const i=await(t[R+1].slideFunc??(()=>Promise.resolve(_r("END"))))({id:D.id,env:Ee,themeKey:ge,currentSlideIndex:R,numberOfSlides:r}),d=await Ne(i,ge,R+1,r+1),o=a.querySelector("svg");o!=null&&(o.outerHTML=d);const s=a.querySelector(".notes"),f=te.publicNotes??te.notes,l=ot(f);s!=null&&(s.innerHTML=l)}return R};return n.oncontextmenu=P=>{P?.preventDefault?.();const G=(ye+1)%se.length;at(n,G),I.postMessage({type:ke.cursor,data:G})},{broadcastChannel:I,renderFunc:z}},at=(n,a)=>{for(const r of se)n.classList.remove(r);ye=a;const t=se[ye];t.includes("cursor-")&&n.classList.add(t)};Lr(B[ge]);jr();
