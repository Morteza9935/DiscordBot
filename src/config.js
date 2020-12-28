const config = {
	ownerID: ['629630739759104000'],
	token: 'NzkzMTIzNDYwMDI4MzAxMzIy.X-nryA.tHBOeoHLR7VxYNDEcfRd014eVFc',
	botClient: 'piRn5nqRtLaOHFBYbHikCoSPsy4LGx6t',
	// For looking up Twitch, Fortnite, Steam accounts
	api_keys: {
		// https://dev.twitch.tv/console/apps
		twitch: '32atc05ujdch424le8mjai9r2oo39p',
		// https://fortnitetracker.com/site-api
		fortnite: '869a46f2-127e-4d88-8e32-4bc359d874a6',
		// https://api.ksoft.si/
		ksoft: 'eyJ0IjogImFwcCIsICJrIjogImtobWFjc2lnIiwgInBrIjogbnVsbCwgIm8iOiAiNjI5NjMwNzM5NzU5MTA0MDAwIiwgImMiOiAxMjI5MDgzN30.27d7eac6002beb299037e6e580616b0449cfdf858e5292514ebd4f7a92874d4f',
		// https://developer.spotify.com/documentation/web-api/
		spotify: {
			iD: 'spotify-ID',
			secret: 'spotify-secret',
		},
		// https://genius.com/developers
		genuis: 'genuisAPI-KEY',
		// https://amethyste.moe/en
		amethyste: 'amethysteAPI-Key',
	},
	// IF you want any commands/plugins disabled
	disabledCommands: [],
	disabledPlugins: [],
	// This is a list of websites that the bot is on. API to interect with server/shard count
	DiscordBotLists: {
		// https://discord.boats/
		DiscordBoatAPI_Key: 'tepulJZnKEKz1D6Ez7Y0S5wenDPC13yT6R38yf40yOvktt5u3JHSdNIMlUwn4lphjE9u36yEwyUim04DJZlt75HTpDxT5WInPC9G25ivRkmbzPMRvQ7iEB9u1Ktkz8XnqtDnMk0UMuoAsq2ERrSuSboOw82',
		// https://arcane-center.xyz/
		ArcaneBotAPI_KEY: 'DMkZScopIaK0egjdCb5C9VZLYFMFCWz8YjOaqe4HZQhkfsYTczPz4swRHTpp4I5v',
		// https://botlist.space/
		botlist_spaceAPI_KEY: '45afd82f9e3d5429e1ade3e0bcba83499a93134610c04b0505bdbdfee20968136877972b04feedb21dd0adab7e0deb3d',
	},
	websiteURL: 'Bot\'s dashboard',
	// your support server
	SupportServer: {
		// Link to your support server
		link: 'https://discord.gg/HTKDwtr4P2',
		// Your support's server ID
		GuildID: '690453852494757888',
		// This for using the suggestion command on your server
		ModRole: '690459143600865320',
		// What channel to post the suggestions
		SuggestionChannel: '777076778015260673',
	},
	// This is just so some commands can be ran in DM channels
	defaultSettings: {
		// default settings
		prefix: 'e!',
		Language: 'en-US',
	},
	// Custom emojis, just for cosmetic (change these if you wish)
	emojis: {
		cross: ':negative_squared_cross_mark:',
		tick: ':white_check_mark:',
	},
	// URL to mongodb
	MongoDBURl: 'mongodb://link',
	// if you want debugging turned on or not
	debug: false,
};

module.exports = config;
