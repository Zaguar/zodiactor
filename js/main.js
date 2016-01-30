var zodiacSigns = [
	{
	sign: 'aries',
	summary: '<u>Enthusiastic & Outgoing</u>. As a fire sign, Aries are adventurous, independent and all about the action. At the same time, Aries are able to overcome challenges they are faced with by staying high, like your boy',
	image: 'images/aries.jpg',
	colophon: 'seth rogen!'
},

	{
	sign: 'taurus',
	summary: '<u>Determined & Sensual</u>. Taureans can be mistaken as withdrawn or boring, when actually they are just cool & discreet. A typical Taurus enjoys life\'s comforts, life\'s many, many comforts, like',
	image: 'images/taurus2.jpg',
	colophon: 'george clooney!'
},

	{
	sign: 'gemini',
	summary: '<u>Intense & Explorative</u>. As excellent communicators, Gemini also search out new experiences and lead unique lives through special transmitters in their beauty marks, like',
	image: 'images/gemini2.jpg',
	colophon: 'natalie portman!'
},

	{
	sign: 'cancer',
	summary: '<u>Compassionate & Contradictory</u>. A true romantic, Cancerians have a changeable nature and can appear eccentric at one moment, and sensitive the next, as they live out their latest Thetan incarnation, like',
	image: 'images/cancer2.jpg',
	colophon: 'tom cruise!'
},

	{
	sign: 'leo',
	summary: '<u>Radiant & Leading</u>. Leos are the positive thinkers of the zodiac, as such people and opportunities are drawn to them; they are definitely leaders rather than followers, and tend to rule Social Media like',
	image: 'images/leo2.jpg',
	colophon: 'j-law!'
},

	{
	sign: 'virgo',
	summary: '<u>Caring & Confident</u>. This Earth sign is able to maintain faith, even when things go bad. Often creative, Virgo is generous and willing to support and care for those around them by feeding them hoagies and grinders, like',
	image: 'images/virgo2.jpg',
	colophon: 'adam sandler!'
},

	{
	sign: 'libra',
	summary: '<u>Charming & Harmonious</u>. This "happy go lucky" sign seeks peace, and is often successful at business and International espionage, like',
	image: 'images/libra2.jpg',
	colophon: 'matt damon!'
},

	{
	sign: 'scorpio',
	summary: '<u>Resilient & Powerful</u>. Scorpio are often passionate about love & power. There are 3 unique types of Scorpio, but they all are often said to be old souls and sensitive, with bountiful underarm hair, like',
	image: 'images/scorpio2.jpg',
	colophon: 'julia roberts!'
},

	{
	sign: 'sagittarius',
	summary: '<u>Optimistic & Honest</u>. Always aiming high, Sagittarians seek adventure & independence, whilst still being one of the zodiacs most large hearted signs, like Mr. Jolie,',
	image: 'images/sagittarius.jpg',
	colophon: 'brad pitt!'
},

	{
	sign: 'capricorn',
	summary: '<u>Resilient & Patient</u>. Whether the ambitious goat, or the goat that is content in their own domain, Capricorns are goal achievers, whilst being reliable and sympathetic, like',
	image: 'images/capricorn2.jpg',
	colophon: 'denzel washington!'
},

	{
	sign: 'aquarius',
	summary: '<u>Trendsetting & Humanitarian</u>. Although sometimes seen as eccentric, Aquarians are quick thinking, outgoing & loyal, like your friend',
	image: 'images/aquarius2.jpg',
	colophon: 'jennifer aniston!'
},

	{
	sign: 'pisces',
	summary: '<u>Sensitive & Mysterious</u>. Pisces are often pulled in two directions, which sometimes causes confusion in their life and emotional periods. However, they are also very talented, resilient and bald, like',
	image: 'images/pisces2.jpg',
	colophon: 'bruuuucccce willis!'
}
]

function zodiac() {
	var sign = document.getElementById('sign').value.toLowerCase()
	
	for(i = 0; i < zodiacSigns.length; i++) {
		if(sign === zodiacSigns[i].sign) {
			document.getElementById('image').src = zodiacSigns[i].image
			document.getElementById('summary').innerHTML = zodiacSigns[i].sign.toUpperCase() + '!' + ' You are ' + zodiacSigns[i].summary
			document.getElementById('colophon').innerHTML = zodiacSigns[i].colophon
			return
		}
		else {
	        document.getElementById('summary').innerHTML = 'Try again, Amigo...' 
		}
	}
}