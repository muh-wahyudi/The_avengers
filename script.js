// I wanted to avoid using JS but there is no way to "uncheck" a radio button with CSS alone :(

console.clear();

const avengersTemplate = document.querySelector("#tpl-character");
const avengersContainer = document.querySelector("#the-avengers");

const THE_AVENGERS = [
	{
		avengers_id: 1,
		avengers_name: "Iron Man",
		avengers_title: "Iron Man",
		header_img_alt: "The Tardis",
		actor_name: "Tony Stark",
		panel_1_content:
			"Avenger pertama ini tampak seperti playboy sombong, tapi jangan tertipu. Ia membangun zirah besi dalam gua, mengalahkan dewa dan monster, dan menghadapi alien penakluk galaksi. Ia bukan dewa, bukan tentara—tapi dengan akal dan keberanian, ia menyelamatkan semesta dan mengorbankan segalanya.",
		stats: {
			Actor: "Robert Downey Jr",
			"Start Date": "2008-05-02",
			"End Date": "2019-04-26",
			movies: 10,
			series: 0
		},
		characters: {
			companions: [
				"Paper Potts",
				"Rhodey",
				"Peter Parker"
			],
			enemies: ["Iron Monger", "Whiplash", "Thanos"]
		}
	},
	{
		avengers_id: 2,
		avengers_name: "Hulk",
		avengers_title: "",
		header_img_alt: "",
		actor_name: "Bruce Banner",
		panel_1_content:
			" Dia tampak seperti seorang ilmuwan yang santun, pemalu dan bertutur kata lembut-tetapi jangan tertipu. Di dalam dirinya terdapat kekuatan kemarahan yang murni. Dia mengecoh para jenderal, selamat dari radiasi gamma, dan bertahan melawan para dewa dan raksasa. Dia tidak dilahirkan untuk bertarung-tetapi ketika dunia membutuhkan monster yang memiliki pikiran, Hulk menjawab panggilan itu.",
		stats: {
			Actor: "Mark Ruffalo",
			"Start Date": "2012-05-04",
			"End Date": "-",
			movies: 8,
			series: 0
		},
		characters: {
			companions: [
				"Tony Stark",
				"Natasha Romanoff",
				"Jennifer Walters"
			],
			enemies: [
				"The Abomination",
				"Ultron",
				"Thanos",
			]
		}
	},
	{
		avengers_id: 3,
		avengers_name: "Black Widow",
		avengers_title: "",
		header_img_alt: "Third avengers",
		actor_name: "Natasha Romanoff",
		panel_1_content:
			"Dia tampak hanya sebagai wanita biasa dengan masa lalu gelap—tapi jangan tertipu. Ia dibentuk oleh organisasi rahasia, dilatih untuk membunuh tanpa jejak, dan diburu oleh hantu-hantu dari masa lalunya. Ia menggagalkan rencana para dewa pembohong, menjatuhkan kerajaan tersembunyi, dan mengorbankan segalanya demi menyelamatkan dunia yang dulu pernah ia rusak.",
		stats: {
			Actor: "Scarlett Johansson",
			"Start Date": "2010-05-07",
			"End Date": "2021-07-09",
			movies: 8,
			series: 0
		},
		characters: {
			companions: [
				"Clint Barton",
				"Steve Rogers",
				"Yelena Belova"
			],
			enemies: ["Dreykov", "Taskmaster", "Loki"]
		}
	},
	{
		avengers_id: 4,
		avengers_name: "Thor",
		avengers_title: "",
		header_img_alt: "",
		actor_name: "Thor",
		panel_1_content:
			"Ia muncul sebagai pangeran angkuh dari dunia lain tapi jangan tertipu. Ia menjinakkan badai, menantang raja iblis, dan menghancurkan pasukan kegelapan dengan palu di tangannya.",
		stats: {
			Actor: " Chris Hemsworth",
			"Start Date": "2011-05-06",
			"End Date": "-",
			movies: 9,
			series: 0
		},
		characters: {
			companions: [
				"Loki",
				"HJane Foster",
				"Valkyrie"
			],
			enemies: [
				"Loki",
				"Hela",
				"Gorr the God Butcher"
			]
		}
	},
	{
		avengers_id: 5,
		avengers_name: "Captain America",
		avengers_title: "",
		header_img_alt: "",
		actor_name: "Steve Rogers",
		panel_1_content:
			"Ia tampak hanya seorang prajurit sederhana dari Brooklyn tapi jangan tertipu. Ia menantang diktator, membekukan waktu demi harapan, dan memimpin manusia super melawan kehancuran semesta.",
		stats: {
			Actor: "Chris Evans",
			"Start Date": "2011-07-22",
			"End Date": "2019-04-26",
			movies: 7,
			series: 0
		},
		characters: {
			companions: [
				"Bucky Barnes",
				"Sam Wilson",
				"Natasha Romanoff"
			],
			enemies: [
				"Red Skull",
				"The Winter Soldier",
				"Thanos"
			]
		}
	},
	{
		avengers_id: 6,
		avengers_name: "Hawkeye",
		avengers_title: "",
		header_img_alt: "",
		actor_name: "Clint Barton",
		panel_1_content:
			"Avengers keenam adalah sosok tenang yang mematikan. Dengan presisi mematikan dan tekad yang tak tergoyahkan, ia menghadapi dewa, mafia, dan masa lalunya sebagai Ronin.",
		stats: {
			Actor: "Jeremy Renner",
			"Start Date": "2011-05-06",
			"End Date": "2021-12-22",
			movies: 6,
            series: 1
           
		},
		characters: {
			companions: ["Natasha Romanoff", "Kate Bishop", "Laura Barton"],
			enemies: ["Loki", "Maya Lopez", "Kingpin"]
		}
	},
	{
		avengers_id: 7,
		avengers_name: "Falcon",
		avengers_title: "",
		header_img_alt: "",
		actor_name: "Sam Wilson",
		panel_1_content:
			"Avengers ketujuh adalah penerbang tanpa serum, tapi jangan remehkan. Ia menantang simbol lama, menghentikan pemberontakan global, dan mengangkat perisai dengan kehormatan sejati.",
		stats: {
			Actor: "Steve Rogers",
			"Start Date": "2014-04-04",
			"End Date": "-",
			movies: 6,
			series: 1
		},
		characters: {
			companions: ["Melanie Bush", "Bucky Barnes", "Joaquin Torres "],
			enemies: ["Helmut Zemo", "Flag Smashers", "John Walker"]
		}
	},
	{
		avengers_id: 8,
		avengers_name: "War Machine",
		avengers_title: "",
		header_img_alt: "",
		actor_name: "Rhodey",
		panel_1_content:
			"Avengers kedelapan muncul dalam bayang-bayang perang. Ia bukan pencipta armor, tapi pilot tempur yang tak ragu menabrak musuh demi sahabat dan menyusup ke barisan musuh demi kebenaran.",
		stats: {
			Actor: "Don Cheadle",
			"Start Date": "2010-05-07",
			"End Date": "-",
			movies: 7,
			series: 2
		},
		characters: {
			companions: ["Tony Stark", "Sam Wilson", "Nick Fury"],
			enemies: ["Whiplash", "Ultron", "Skrulls"]
		}
	},
	{
		avengers_id: 9,
		avengers_name: "Scarlet Witch",
		avengers_title: "",
		header_img_alt: "",
		actor_name: "Wanda Maximoff",
		panel_1_content:
			"Avengers kesembilan adalah penyihir yang hancur oleh kehilangan. Ia menciptakan dunia dari kesedihan, menantang kenyataan, dan membuktikan bahwa cinta bisa menjadi kekuatan sekaligus kehancuran.",
		stats: {
			Actor: "Elizabeth Olsen",
			"Start Date": "2015-05-02",
			"End Date": "2022-05-06",
			movies: 5,
			series: 1
		},
		characters: {
			companions: [
				"Vision",
				"Pietro Maximoff"
			],
			enemies: [
				"Ultron",
				"Agatha Harkness",
				"The Illuminati"
			]
		}
	},
	{
		avengers_id: 10,
		avengers_name: "Vision",
		avengers_title: "",
		header_img_alt: "",
		actor_name: "Vision",
		panel_1_content:
			"Lahir dari petir dan mind stone, Avengers kesepuluh bangkit di tengah kekacauan. Ia melayang di atas medan perang, menembus logika, dan menghadapi ancaman dari mesin, dewa, hingga dirinya sendiri.",
		stats: {
			Actor: "Paul Bettany",
			"Start Date": "2015-05-01",
			"End Date": "2021-03-05",
			movies: 4,
			series: 1
		},
		characters: {
			companions: [
				"Wanda Maximoff",
				"Tony Stark",
				"Steve Rogers"
			],
			enemies: [
				"Ultron ",
				"Thanos",
				"White Vision"
			]
		}
	},
	{
		avengers_id: 11,
		avengers_name: "Ant-Man",
		avengers_title: "",
		header_img_alt: "",
		actor_name: "Scott Lang",
		panel_1_content:
			"Avengers kesebelas muncul dari penjara dan langsung melompat ke dunia mikroskopis. Ia bertarung demi putrinya, mencuri demi kebaikan, dan menyelamatkan semesta dengan ukuran sekecil atom.",
		stats: {
			Actor: "Paul Rudd",
			"Start Date": "2015-07-17",
			"End Date": "-",
			movies: 5,
			series: 0
		},
		characters: {
			companions: [
				"Hope van Dyne",
				"Cassie Lang",
				"Hank Pym"
			],
			enemies: [
				"Darren Cross",
				"Ghost",
				"Kang the Conqueror"
			]
		}
	},
	{
		avengers_id: 12,
		avengers_name: "Spider-Man",
		avengers_title: "",
		header_img_alt: "",
		actor_name: "Peter Parker",
		panel_1_content:
			"Avengers kedua belas muncul sebagai remaja biasa dengan beban luar biasa. Ia bertarung melawan penjahat dari berbagai dimensi, kehilangan sosok ayah, dan tetap mencoba menjadi pahlawan di tengah kekacauan remaja.",
		stats: {
			Actor: "Tom Holland",
			"Start Date": "2016-05-06",
			"End Date": "-",
			movies: 6,
			series: 0
		},
		characters: {
			companions: [
				"Ned Leeds",
				"MJ",
				"Tony Stark"
			],
			enemies: ["Vulture", "Mysterio", "Green Goblin"]
		}
	},
	{
		avengers_id: 13,
		avengers_name: "Doctor Strange",
		avengers_title: "",
		header_img_alt: "",
		actor_name: "Stephen Strange",
		panel_1_content:
			"Avengers ketiga belas dulunya dokter angkuh, hingga takdir membawanya jadi penyihir pelindung dimensi. Ia melawan iblis dari kegelapan, mengungkap rahasia waktu, dan tersesat di kekacauan multiverse.",
		stats: {
			Actor: "Benedict Cumberbatch",
			"Start Date": "2016-11-04",
			"End Date": "-",
			movies: 6,
			series: 0
		},
		characters: {
			companions: [
				"Wong",
				"Christine Palmer",
				"America Chavez"
			],
			enemies: [
				"Kaecilius",
				"Dormammu",
				"Scarlet Witch"
			]
		}
	},

	{
		avengers_id: 14,
		avengers_name: "Black Panther",
		avengers_title: "",
		header_img_alt: "",
		actor_name: " T’Challa",
		panel_1_content:
			"Avengers keempat belas adalah raja muda dari negeri tersembunyi. Ia memakai kekuatan leluhur, mempertahankan tanahnya dari dalam dan luar, dan membuat dunia mengenal nama Wakanda selamanya.",
		stats: {
			Actor: "Chadwick Boseman",
			"Start Date": "2016-05-06",
			"End Date": "2020-08-28",
			movies: 4,
			series: 1
		},
		characters: {
			companions: ["Shuri", "Nakia", "Okoye"],
			enemies: ["Erik Killmonger", "Ulysses Klaue", "Thanos"]
		}
	},
	{
		avengers_id: 15,
		avengers_name: "Captain Marvel",
		avengers_title: "",
		header_img_alt: "",
		actor_name: "Carol Danvers",
		panel_1_content:
			"Avengers kelima belas adalah prajurit luar angkasa yang menyerap kekuatan bintang. Ia terbang melintasi galaksi, menghancurkan armada musuh, dan kembali ke Bumi sebagai harapan terakhir umat manusia.",
		stats: {
			Actor: "Brie Larson",
			"Start Date": "2019-03-08",
			"End Date": "-",
			movies: 3,
			series: 0
		},
		characters: {
			companions: ["Nick Fury", "Monica Rambeau", "Kamala Khan"],
			enemies: ["Yon-Rogg", "Supreme Intelligence", "Dar-Benn"]
		}
	}
];

const ITEMS_PER_ROW = 4; // Number of items in each row
const SPACING = 100; // Distance between items in percentage

// add the avengers data to the HTML

// create and insert a avengers panel
function createavengersPanel(avengers, index, gapXPercent, gapYPercent) {
	const clone = avengersTemplate.content.cloneNode(true);

	assignIds(clone, avengers);
	setContent(clone, avengers);

	const statsHTML = createavengersStatsHTML(avengers.stats);
	const navPanels = clone.querySelectorAll("[data-panels] div");
	navPanels[1].appendChild(statsHTML);

	const charactersHTML = createavengersCharactersHTML(avengers.characters);
	navPanels[2].appendChild(charactersHTML);

	applyPositioning(clone, index, gapXPercent, gapYPercent);

	avengersContainer.append(clone);
}

// assign IDs and attributes
function assignIds(clone, avengers) {
	clone.querySelector("input.panel-1").id = `radio-tab-${avengers.avengers_id}.1`;
	clone.querySelector("input.panel-2").id = `radio-tab-${avengers.avengers_id}.2`;
	clone.querySelector("input.panel-3").id = `radio-tab-${avengers.avengers_id}.3`;
	clone.querySelector(
		"input[name='character']"
	).id = `radio-char-${avengers.avengers_id}`;
	clone
		.querySelector(".avatar")
		.setAttribute("for", `radio-char-${avengers.avengers_id}`);
	clone.querySelector("article").id = `dr-${avengers.avengers_id}`;
}

// function - set content such as text, images, and avatars
function setContent(clone, avengers) {
	clone
		.querySelector("article")
		.style.setProperty(
			"--bg-img",
			`url(https://raw.githubusercontent.com/muh-wahyudi/my_assets/main/avengers/assets/${avengers.avengers_id}-bg.jpeg)`
		);
	const avatarImg = clone.querySelector(".avatar img");
	avatarImg.src = `https://raw.githubusercontent.com/muh-wahyudi/my_assets/main/avengers/assets/${avengers.avengers_id}.jpeg`;
	avatarImg.alt = avengers.avengers_name;

	//clone.querySelector(".btnClose").setAttribute("for", `radio-char-${avengers.avengers_id}`);
	clone.querySelector("h2").textContent = avengers.avengers_name;
	clone.querySelector("h3").textContent = avengers.actor_name;

	const navLabels = clone.querySelectorAll("nav label");
	navLabels[0].setAttribute("for", `radio-tab-${avengers.avengers_id}.1`);
	navLabels[1].setAttribute("for", `radio-tab-${avengers.avengers_id}.2`);
	navLabels[2].setAttribute("for", `radio-tab-${avengers.avengers_id}.3`);

	const navPanels = clone.querySelectorAll("[data-panels] div");
	navPanels[0].id = `radio-tab-${avengers.avengers_id}.1`;
	navPanels[1].id = `radio-tab-${avengers.avengers_id}.2`;
	navPanels[2].id = `radio-tab-${avengers.avengers_id}.3`;

	navPanels[0].textContent = avengers.panel_1_content;
}
// Calculate and apply positions based on index
function applyPositioning(clone, index) {
	const row = Math.floor(index / ITEMS_PER_ROW);
	const col = index % ITEMS_PER_ROW;

	const article = clone.querySelector("article");

	// Fixed gap in pixels (1rem)
	const remGap = 4; // 1rem in pixels
	const fixedGap = remGap; // You can adjust this gap value as needed

	// Calculate offsets for the current item based on its position
	const colOffset = col - (ITEMS_PER_ROW - 1) / 2;
	const rowOffset = row - (ITEMS_PER_ROW - 1) / 2;

	// Apply fixed gap and spacing to determine the position of the item
	const x = colOffset * (SPACING + fixedGap);
	const y = rowOffset * (SPACING + fixedGap);

	// Apply the calculated positions to the article element
	article.style.setProperty("--translate-x", `${x}%`);
	article.style.setProperty("--translate-y", `${y}%`);
}

// Function -  stats HTML
function createavengersStatsHTML(stats) {
	const fragment = document.createDocumentFragment();
	const h4 = document.createElement("h4");
	h4.textContent = "Statistics";
	fragment.appendChild(h4);

	const ul = document.createElement("ul");
	for (const key in stats) {
		if (stats.hasOwnProperty(key)) {
			const li = document.createElement("li");
			li.textContent = `${key}: ${stats[key]}`;
			ul.appendChild(li);
		}
	}
	fragment.appendChild(ul);
	return fragment;
}

// Function - generate characters HTML
function createavengersCharactersHTML(characters) {
	const fragment = document.createDocumentFragment();

	// Function - create a section with heading and list, and append it to the fragment
	function createCharacterSection(title, items) {
		const h4 = document.createElement("h4");
		h4.textContent = title;
		fragment.appendChild(h4);
		const ul = document.createElement("ul");
		items.forEach((item) => {
			const li = document.createElement("li");
			li.textContent = item;
			ul.appendChild(li);
		});
		fragment.appendChild(ul);
	}

	// Create and append "Companions" section
	if (characters.companions && characters.companions.length > 0) {
		createCharacterSection("Companions", characters.companions);
	}
	// Create and append "Enemies" section
	if (characters.enemies && characters.enemies.length > 0) {
		createCharacterSection("Enemies", characters.enemies);
	}
	return fragment;
}

//function - iterate over avengers and create panels
function renderavengersPanels(avengers) {
	// Wait until layout is calculated
	requestAnimationFrame(() => {
		const remGap = 16; // 1rem in px
		const container = avengersContainer.getBoundingClientRect();
		const gapXPercent = (remGap / container.width) * 100;
		const gapYPercent = (remGap / container.height) * 100;

		avengers.forEach((avengers, index) => {
			createavengersPanel(avengers, index, gapXPercent, gapYPercent);
		});
	});
}

// Call the main function with THE_AVENGERS array
renderavengersPanels(THE_AVENGERS);
