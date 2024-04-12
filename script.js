// Data for the slides
const slidesData = [
    // Paste your JSON data here
	// white robes, Elf, Wise, Powerful, Immortal, Female, Possesses the Mirror of Galadriel'},
 {'Character': 'Eomer',
  'Category': 'Medium',
  'Clue 1': 'Race: Human',
  'Clue 2': 'Captain of Rohan',
  'Clue 3': 'Nephew of King Theoden',
  'Traits': 'Wields a sword, Rider of Rohan, Wears armor, Male,  Mortal,  Warrior, Leader'},
 {'Character': 'Denethor',
  'Category': 'Medium',
  'Clue 1': 'Race: Human',
  'Clue 2': 'Steward of Gondor',
  'Clue 3': 'Father of Boromir and Faramir',
  'Traits': 'Wears regal attire, Wields authority,  Male, Mortal, Leader, Susceptible to despair, Proud'},
 {'Character': 'Witch-king of Angmar',
  'Category': 'Medium',
  'Clue 1': 'Race: Wraith (formerly Human)',
  'Clue 2': 'Leader of the Nazgûl',
  'Clue 3': "Sauron's most powerful servant",
  'Traits': 'Wields a sword and mace,  Wraith, Evil, Powerful, Sorcerous, Male'},
 {'Character': 'Shelob',
  'Category': 'Medium',
  'Clue 1': 'Creature: Giant Spider',
  'Clue 2': 'Dwells in the Mountains of Shadow',
  'Clue 3': 'Attacks Frodo and Sam',
  'Traits': 'Giant Spider, Venomous, Ancient, Female,  Predator'},
 {'Character': 'Bard the Bowman',
  'Category': 'Medium',
  'Clue 1': 'Race: Human',
  'Clue 2': 'Archer from Lake-town',
  'Clue 3': 'Slew the dragon, Smaug',
  'Traits': 'Wields a bow, Human, Leader, Skilled Archer, Male, Mortal'},
 {'Character': 'Grima Wormtongue',
  'Category': 'Medium',
  'Clue 1': 'Race: Human',
  'Clue 2': 'Advisor to King Theoden',
  'Clue 3': 'Secret servant of Saruman',
  'Traits': 'Wears dark robes, Manipulative, Persuasive, Male, Mortal, Corrupted'},
 {'Character': 'Celeborn',
  'Category': 'Medium',
  'Clue 1': 'Race: Elf',
  'Clue 2': 'Lord of Lothlorien',
  'Clue 3': 'Husband of Galadriel',
  'Traits': 'Wears silver robes,  Elf, Wise, Ancient, Immortal, Male, Leader'},
 {'Character': 'Haldir',
  'Category': 'Medium',
  'Clue 1': 'Race: Elf',
  'Clue 2': 'Marchwarden of Lothlorien',
  'Clue 3': "Led the Elven force at Helm's Deep",
  'Traits': 'Wears armor, Wields a bow, Elf,  Warrior,  Loyal,  Immortal, Male'},
 {'Character': 'King of the Dead',
  'Category': 'Medium',
  'Clue 1': 'Race: Wraith',
  'Clue 2': 'Leader of the Oathbreakers',
  'Clue 3': 'Can command an army of ghosts',
  'Traits': 'Cursed, Wields a sword, Wraith, Powerful, Male, Bound by an Oath'},
 {'Character': 'Elladan & Elrohir',
  'Category': 'Medium',
  'Clue 1': 'Race: Elves',
  'Clue 2': 'Sons of Elrond',
  'Clue 3': 'Twin brothers and skilled warriors',
  'Traits': 'Wield swords, Elves, Warriors, Skilled Riders, Immortal, Male'},
 {'Character': 'Captains of Gondor (Mablung, Damrod)**',
  'Category': 'Medium',
  'Clue 1': 'Race: Human',
  'Clue 2': 'Rangers of Ithilien',
  'Clue 3': 'Skilled in wilderness combat',
  'Traits': 'Wears armor, Wields swords, Warriors, Loyal, Mortal, Male'},
 {'Character': 'Riders of Rohan (Gamling, Erkenbrand)**',
  'Category': 'Medium',
  'Clue 1': 'Race: Human',
  'Clue 2': 'Captains of Rohan',
  'Clue 3': "Fought valiantly at Helm's Deep",
  'Traits': 'Wears armor, Wields spears and swords, Riders, Warriors, Loyal, Mortal, Male'},
 {'Character': 'Orc Leaders (Gothmog, Azog)**',
  'Category': 'Medium',
  'Clue 1': 'Race: Orc',
  'Clue 2': 'Lieutenants of Sauron/Saruman',
  'Clue 3': 'Lead Orc armies into battle',
  'Traits': 'Wears crude armor, Wields brutal weapons, Orcs, Savage, Evil, Strong, Male'},
 {'Character': 'Mouth of Sauron',
  'Category': 'Medium',
  'Clue 1': 'Race: Human (Black Numenorean)',
  'Clue 2': 'Emissary of Sauron',
  'Clue 3': 'Negotiates with Aragorn at the Black Gate',
  'Traits': 'Wears black armor, Sinister, Cunning,  Male, Mortal, Corrupted'},
 {'Character': 'Quickbeam',
  'Category': 'Tough',
  'Clue 1': 'Race: Ent',
  'Clue 2': 'Wise and ancient tree-herder',
  'Clue 3': 'Decided to fight against Saruman',
  'Traits': 'Ent, Tall, Strong, Ancient, Deliberate, Male'},
 {'Character': 'Balrog (Moria)',
  'Category': 'Tough',
  'Clue 1': 'Creature: Maiar (Corrupted)',
  'Clue 2': 'Demon of fire and shadow',
  'Clue 3': 'Dwelt in the depths of Moria',
  'Traits': 'Maiar, Fiery, Powerful, Evil, Demonic, Male'},
 {'Character': 'Tom Bombadil',
  'Category': 'Tough',
  'Clue 1': 'Race: Unknown',
  'Clue 2': 'Enigmatic and powerful being',
  'Clue 3': 'Lives in the Old Forest',
  'Traits': 'Ancient, Cheerful, Enigmatic, Immune to the One Ring, Male'},
 {'Character': 'Goldberry',
  'Category': 'Tough',
  'Clue 1': 'Race: River-spirit',
  'Clue 2': 'Wife of Tom Bombadil',
  'Clue 3': 'Possesses power over nature',
  'Traits': 'Beautiful, Ethereal, Connected to water, Female'},
 {'Character': 'Radagast the Brown',
  'Category': 'Tough',
  'Clue 1': 'Race: Maiar',
  'Clue 2': 'Wizard focused on nature',
  'Clue 3': 'Friend to birds and beasts',
  'Traits': 'Wears brown robes, Maiar, Wise, Connected to nature, Eccentric, Male'},
 {'Character': 'Farmer Maggot',
  'Category': 'Tough',
  'Clue 1': 'Race: Hobbit',
  'Clue 2': 'Stood up to the Black Riders',
  'Clue 3': 'Owns a farm, Hobbit, Brave, Suspicious, Male, Mortal'},
 {'Character': 'Beorn',
  'Category': 'Tough',
  'Clue 1': 'Race: Skin-changer',
  'Clue 2': 'Can transform into a bear',
  'Clue 3': 'Leader of the Beornings',
  'Traits': 'Wears simple clothes, Large, Strong, Wild, Can transform, Male, Mortal'},
 {'Character': 'Gwaihir the Windlord',
  'Category': 'Tough',
  'Clue 1': 'Creature: Great Eagle',
  'Clue 2': 'Lord of the Eagles',
  'Clue 3': 'Rescued Gandalf and others',
  'Traits': 'Eagle, Giant, Can fly, Proud, Loyal, Male'},
 {'Character': 'Glorfindel',
  'Category': 'Tough',
  'Clue 1': 'Race: Elf',
  'Clue 2': 'Powerful Elven lord',
  'Clue 3': 'Fought a Balrog in ages past',
  'Traits': 'Elf, Ancient, Warrior, Famed in legend, Immortal, Male'},
 {'Character': 'Ioreth',
  'Category': 'Tough',
  'Clue 1': 'Race: Human',
  'Clue 2': 'Gondorian healer',
  'Clue 3': 'Talkative with much lore',
  'Traits': 'Wears simple clothes, Human, Female, Mortal, Knowledgeable, Talkative'},
 {'Character': 'Ghân-buri-Ghân',
  'Category': 'Tough',
  'Clue 1': 'Race: Human',
  'Clue 2': 'Leader of the Drúedain (Wild Men)',
  'Clue 3': 'Assisted Rohan during the War of the Ring',
  'Traits': 'Wears animal skins, Short, Stocky, Leader, Primitive, Human, Male, Mortal'},
 {'Character': 'The Blue Wizards (Alatar & Pallando)',
  'Category': 'Tough',
  'Clue 1': 'Race: Maiar',
  'Clue 2': 'Istari sent to the East',
  'Clue 3': 'Their fate is unknown',
  'Traits': 'Maiar, Wise, Mysterious, Male'},
 {'Character': 'Isildur',
  'Category': 'Tough',
  'Clue 1': 'Race: Human',
  'Clue 2': "Cut the Ring from Sauron's hand",
  'Clue 3': "Succumbed to the Ring's power",
  'Traits': 'Ancestor of Aragorn, Human, King, Flawed, Tragic Figure, Male, Mortal'},
 {'Character': 'Elendil',
  'Category': 'Tough',
  'Clue 1': 'Race: Human',
  'Clue 2': 'High King of Arnor and Gondor',
  'Clue 3': 'Father of Isildur',
  'Traits': 'Wields the sword Narsil, Human, King, Powerful Warrior, Slain by Sauron, Male, Mortal'},
 {'Character': 'Gil-galad',
  'Category': 'Tough',
  'Clue 1': 'Race: Elf',
  'Clue 2': 'Last High King of the Ñoldor in Middle-earth',
  'Clue 3': 'Perished in the War of the Last Alliance',
  'Traits': 'Elf, King, Powerful Warrior, Slain by Sauron, Male, Immortal'},
 {'Character': 'Treebeard',
  'Category': 'Medium',
  'Clue 1': 'Race: Ent',
  'Clue 2': 'Eldest of the Ents',
  'Clue 3': 'Slow and deliberate in speech',
  'Traits': 'Ent, Tall, Strong, Ancient, Wise, Male'},
 {'Character': 'Eowyn',
  'Category': 'Medium',
  'Clue 1': 'Race: Human',
  'Clue 2': 'Niece of King Theoden',
  'Clue 3': 'Defeated the Witch-king',
  'Traits': 'Wields a sword, Rider of Rohan, Shieldmaiden, Female, Mortal, Courageous'},
 {'Character': 'Faramir',
  'Category': 'Medium',
  'Clue 1': 'Race: Human',
  'Clue 2': 'Son of Denethor',
  'Clue 3': 'Captain of Gondor',
  'Traits': 'Wears Ranger attire, Wields a Bow, Warrior, Leader, Wise, Honorable, Male, Mortal'},
 {'Character': 'Khamûl the Easterling',
  'Category': 'Medium',
  'Clue 1': 'Race: Wraith (formerly Human)',
  'Clue 2': 'Second-in-command of the Nazgûl',
  'Clue 3': 'Sorcerous powers',
  'Traits': 'Wears dark armor, Wields a mace, Wraith, Powerful, Evil, Male'},
 {'Character': 'Beregond',
  'Category': 'Medium',
  'Clue 1': 'Race: Human',
  'Clue 2': 'Guard of the Citadel (Gondor)',
  'Clue 3': 'Swore an oath to protect Faramir',
  'Traits': 'Wears Gondorian armor, Wields a sword, Human, Warrior, Loyal, Honorable, Mortal, Male'},
 {'Character': 'Elfhelm',
  'Category': 'Medium',
  'Clue 1': 'Race: Human',
  'Clue 2': 'Captain of Rohan',
  'Clue 3': "Fought at the Battle of Helm's Deep",
  'Traits': 'Wears armor, Rider of Rohan, Wields a sword, Male, Mortal, Warrior, Leader'},
 {'Character': 'Gothmog (Lieutenant of Morgul)',
  'Category': 'Medium',
  'Clue 1': 'Race: Orc',
  'Clue 2': 'Orc Captain from Minas Morgul',
  'Clue 3': 'Commanded the siege of Osgiliath',
  'Traits': 'Wears dark armor, Wields brutal weapons, Orc, Savage, Evil, Strong, Male (Book version)'},
 {'Character': 'Guritz',
  'Category': 'Medium',
  'Clue 1': 'Race: Orc',
  'Clue 2': 'Orc Captain from Cirith Ungol',
  'Clue 3': "Fought with Shagrat over Frodo's possessions",
  'Traits': 'Wears crude armor, Wields brutal weapons, Orc, Savage, Evil, Strong, Male (Book version)'},
 {'Character': 'Bill Ferny',
  'Category': 'Medium',
  'Clue 1': 'Race: Hobbit',
  'Clue 2': 'Shady character from Bree',
  'Clue 3': "Associated with Saruman's agents",
  'Traits': 'Wears shabby clothes, Hobbit, Sly, Suspicious, Male, Mortal'},
 {'Character': 'Fredegar Bolger (Fatty)',
  'Category': 'Medium',
  'Clue 1': 'Race: Hobbit',
  'Clue 2': 'Friend of Frodo (remained in the Shire)',
  'Clue 3': 'Caught in the conspiracy with Lobelia Sackville-Baggins',
  'Traits': 'Hobbit, Plump, Timid, Loyal, Male, Mortal'},
 {'Character': 'Theoden',
  'Category': 'Easy',
  'Clue 1': 'Race: Human',
  'Clue 2': 'King of Rohan',
  'Clue 3': "Fell under Saruman's influence",
  'Traits': "Wears a crown and regal attire, Human, Male, Mortal, King, Elderly (at the start), Wise (after being freed from Saruman's control)"},
 {'Character': 'Bilbo Baggins',
  'Category': 'Easy',
  'Clue 1': 'Race: Hobbit',
  'Clue 2': 'Found the One Ring',
  'Clue 3': 'Took an Unexpected Journey',
  'Traits': 'Lived in the Shire, Male, Mortal, Ringbearer, Adventurous, Small, Wealthy, Elderly (by Hobbit standards), Writer'},
 {'Character': 'Wormtongue',
  'Category': 'Easy',
  'Clue 1': 'Race: Human',
  'Clue 2': 'Advisor to King Theoden',
  'Clue 3': 'Secret servant of Saruman',
  'Traits': 'Wears dark robes, Manipulative, Persuasive, Male, Mortal, Corrupted'},
 {'Character': 'Treebeard',
  'Category': 'Easy',
  'Clue 1': 'Race: Ent',
  'Clue 2': 'Eldest of the Ents',
  'Clue 3': 'Slow and deliberate in speech',
  'Traits': 'Ent, Tall, Strong, Ancient, Wise, Male'},
 {'Character': 'Balrog (Moria)',
  'Category': 'Easy',
  'Clue 1': 'Creature: Maiar (Corrupted)',
  'Clue 2': 'Demon of fire and shadow',
  'Clue 3': 'Dwelt in the depths of Moria',
  'Traits': 'Maiar, Fiery, Powerful, Evil, Demonic, Male'},

 {'Character': 'Character',
  'Category': 'Category (Easy/Hard)',
  'Clue 1': 'Clue 1',
  'Clue 2': 'Clue 2',
  'Clue 3': 'Clue 3',
  'Traits': 'Traits'},
 {'Character': 'Frodo Baggins',
  'Category': 'Easy',
  'Clue 1': 'Hobbit',
  'Clue 2': 'Carried Burden',
  'Clue 3': 'From the Shire',
  'Traits': 'Small, curly hair, blue eyes, brave, resilient, loyal, merciful, adventurous, orphan, friend of Gandalf'},
 {'Character': 'Gandalf',
  'Category': 'Easy',
  'Clue 1': 'Wizard',
  'Clue 2': 'Wanderer',
  'Clue 3': 'Smokes Pipe',
  'Traits': 'Tall, long beard, wise, powerful, Istari, carries staff, fireworks, horses, grey robes, opposed Saruman'},
 {'Character': 'Aragorn',
  'Category': 'Easy',
  'Clue 1': 'Man',
  'Clue 2': 'Skilled Fighter',
  'Clue 3': 'Heir',
  'Traits': 'Ranger, skilled swordsman, healer, leader, loves Arwen, wields Andúril, tall, rugged, wise'},
 {'Character': 'Legolas',
  'Category': 'Easy',
  'Clue 1': 'Elf',
  'Clue 2': 'Archer',
  'Clue 3': 'Mirkwood Resident',
  'Traits': 'Blonde hair, blue eyes, agile, loyal, skilled archer, immortal, Sindarin Elf, from Mirkwood'},
 {'Character': 'Gimli',
  'Category': 'Easy',
  'Clue 1': 'Dwarf',
  'Clue 2': 'Warrior',
  'Clue 3': 'Son of Glóin',
  'Traits': 'Stout, bearded, gruff, brave, skilled axe fighter, distrusts Elves (initially), loyal, loves ale'},
 {'Character': 'Samwise Gamgee',
  'Category': 'Easy',
  'Clue 1': 'Hobbit',
  'Clue 2': 'Loyal Companion',
  'Clue 3': 'Simple Worker',
  'Traits': 'Loyal, brave, strong-willed, practical, loves the Shire, humble, selfless, carries the Ring temporarily'},
 {'Character': 'Merry Brandybuck',
  'Category': 'Easy',
  'Clue 1': 'Hobbit',
  'Clue 2': 'Rohirrim Ally',
  'Clue 3': 'Troublemaker',
  'Traits': "Mischievous, brave, loyal friend, skilled swordsman, rides Éowyn's horse in Battle of Pelennor Fields"},
 {'Character': 'Peregrin Took',
  'Category': 'Easy',
  'Clue 1': 'Hobbit',
  'Clue 2': 'Guard',
  'Clue 3': 'Foolish',
  'Traits': 'Brave, curious, loyal friend, skilled swordsman, guards Faramir, becomes a Knight of Gondor'},
 {'Character': 'Arwen',
  'Category': 'Easy',
  'Clue 1': 'Elf',
  'Clue 2': 'Sacrificed',
  'Clue 3': 'Evenstar',
  'Traits': 'Beautiful, immortal, wise, sacrifices immortality for Aragorn, daughter of Elrond, skilled with a sword'},
 {'Character': 'Elrond',
  'Category': 'Easy',
  'Clue 1': 'Elf',
  'Clue 2': 'Leader',
  'Clue 3': 'Ring Bearer',
  'Traits': 'Wise, powerful Elf-lord, bearer of one of the Elven rings of power, father of Arwen, ally of the Free Peoples'},
 {'Character': 'Frodo Baggins',
  'Category': 'Easy',
  'Clue 1': 'Hobbit',
  'Clue 2': 'Carried Burden',
  'Clue 3': 'From the Shire',
  'Traits': 'Small, curly hair, blue eyes, brave, resilient, loyal, merciful, adventurous, orphan, friend of Gandalf'},
 {'Character': 'Gandalf',
  'Category': 'Easy',
  'Clue 1': 'Wizard',
  'Clue 2': 'Wanderer',
  'Clue 3': 'Smokes Pipe',
  'Traits': 'Tall, long beard, wise, powerful, Istari, carries staff, fireworks, horses, grey robes, opposed Saruman'},
 {'Character': 'Aragorn',
  'Category': 'Easy',
  'Clue 1': 'Man',
  'Clue 2': 'Skilled Fighter',
  'Clue 3': 'Heir',
  'Traits': 'Ranger, skilled swordsman, healer, leader, loves Arwen, wields Andúril, tall, rugged, wise'},
 {'Character': 'Legolas',
  'Category': 'Easy',
  'Clue 1': 'Elf',
  'Clue 2': 'Archer',
  'Clue 3': 'Mirkwood Resident',
  'Traits': 'Blonde hair, blue eyes, agile, loyal, skilled archer, immortal, Sindarin Elf, from Mirkwood'},
 {'Character': 'Gimli',
  'Category': 'Easy',
  'Clue 1': 'Dwarf',
  'Clue 2': 'Warrior',
  'Clue 3': 'Son of Glóin',
  'Traits': 'Stout, bearded, gruff, brave, skilled axe fighter, distrusts Elves (initially), loyal, loves ale'},
 {'Character': 'Samwise Gamgee',
  'Category': 'Easy',
  'Clue 1': 'Hobbit',
  'Clue 2': 'Loyal Companion',
  'Clue 3': 'Simple Worker',
  'Traits': 'Loyal, brave, strong-willed, practical, loves the Shire, humble, selfless, carries the Ring temporarily'},
 {'Character': 'Merry Brandybuck',
  'Category': 'Easy',
  'Clue 1': 'Hobbit',
  'Clue 2': 'Rohirrim Ally',
  'Clue 3': 'Troublemaker',
  'Traits': "Mischievous, brave, loyal friend, skilled swordsman, rides Éowyn's horse in Battle of Pelennor Fields"},
 {'Character': 'Peregrin Took',
  'Category': 'Easy',
  'Clue 1': 'Hobbit',
  'Clue 2': 'Guard',
  'Clue 3': 'Foolish',
  'Traits': 'Brave, curious, loyal friend, skilled swordsman, guards Faramir, becomes a Knight of Gondor'},
 {'Character': 'Arwen',
  'Category': 'Easy',
  'Clue 1': 'Elf',
  'Clue 2': 'Sacrificed',
  'Clue 3': 'Evenstar',
  'Traits': 'Beautiful, immortal, wise, sacrifices immortality for Aragorn, daughter of Elrond, skilled with a sword'},
 {'Character': 'Elrond',
  'Category': 'Easy',
  'Clue 1': 'Elf',
  'Clue 2': 'Leader',
  'Clue 3': 'Ring Bearer',
  'Traits': 'Wise, powerful Elf-lord, bearer of one of the Elven rings of power, father of Arwen, ally of the Free Peoples'},
 {'Character': 'Déagol',
  'Category': 'Hard',
  'Clue 1': 'Hobbit',
  'Clue 2': 'First Bearer',
  'Clue 3': 'Murdered for Ring',
  'Traits': "Small, victim of Sméagol's greed, original finder of the One Ring, strangled by Sméagol"},
 {'Character': 'Radagast',
  'Category': 'Hard',
  'Clue 1': 'Wizard',
  'Clue 2': 'Nature Lover',
  'Clue 3': 'Brown Robes',
  'Traits': 'Wise, loves animals and plants, sends aid to Gandalf, distrusted by Saruman, travels on a sled pulled by rabbits'},
 {'Character': 'Glorfindel',
  'Category': 'Hard',
  'Clue 1': 'Elf',
  'Clue 2': 'Rescuer',
  'Clue 3': 'Balrog Slayer',
  'Traits': 'Powerful, wise, guides Frodo to Rivendell, slays a Balrog in the First Age, one of the re-born Elves'},
 {'Character': 'Haldir',
  'Category': 'Hard',
  'Clue 1': 'Elf',
  'Clue 2': 'Lothlórien Guard',
  'Clue 3': 'Archer of Galadhrim',
  'Traits': 'Skilled archer, leader of the Galadhrim Elves, guards the borders of Lothlórien, distrusts Dwarves'},
 {'Character': 'Celeborn',
  'Category': 'Hard',
  'Clue 1': 'Elf',
  'Clue 2': 'Lord of Lothlórien',
  'Clue 3': "Galadriel's Husband",
  'Traits': 'Wise, powerful Elf-lord, co-rules Lothlórien with Galadriel, wields Nenya (one of the Elven rings of power)'},
 {'Character': 'Gwaihir',
  'Category': 'Hard',
  'Clue 1': 'Eagle',
  'Clue 2': 'Lord of the Eagles',
  'Clue 3': 'Rescuer of Gandalf',
  'Traits': 'Huge, noble eagle, leader of the great eagles, rescues Gandalf from Isengard and the Hobbits from Mordor'},
 {'Character': 'Beorn',
  'Category': 'Hard',
  'Clue 1': 'Skin-changer',
  'Clue 2': 'Protector of Wilderness',
  'Clue 3': 'Shape-shifter',
  'Traits': 'Tall, muscular, can transform into a great black bear, distrusts Dwarves, aids the company of Thorin Oakenshield'},
 {'Character': 'Barliman Butterbur',
  'Category': 'Hard',
  'Clue 1': 'Innkeeper',
  'Clue 2': 'Forgetful Host',
  'Clue 3': 'Prancing Pony',
  'Traits': 'Jolly, forgetful innkeeper of the Prancing Pony in Bree, provides shelter and information to Frodo and the Hobbits'},
 {'Character': 'Bert, Tom, and William',
  'Category': 'Hard',
  'Clue 1': 'Trolls',
  'Clue 2': 'Stone Creatures',
  'Clue 3': 'Turned to Stone',
  'Traits': 'Dim-witted, dangerous trolls, capture Bilbo and the Dwarves, turned to stone by sunlight'},
 {'Character': 'Bill Ferny',
  'Category': 'Hard',
  'Clue 1': 'Man',
  'Clue 2': 'Troublemaker',
  'Clue 3': 'Bree Resident',
  'Traits': 'Untrustworthy, disliked by the Hobbits, informant for Saruman, causes trouble in Bree'},
 {'Character': 'Grishnákh',
  'Category': 'Hard',
  'Clue 1': 'Orc',
  'Clue 2': 'Mordor Scout',
  'Clue 3': 'Cruel Hunter',
  'Traits': 'Cunning, vicious Mordor Orc, part of the company hunting the Uruk-hai with Merry and Pippin, killed by Uglúk'},
 {'Character': 'Uglúk',
  'Category': 'Hard',
  'Clue 1': 'Uruk-hai',
  'Clue 2': 'Cruel Leader',
  'Clue 3': 'Isengard Servant',
  'Traits': "Tall, brutal Uruk-hai, leader of the company capturing Merry and Pippin, killed by Éomer's Riders of Rohan"},
 {'Character': 'Shagrat',
  'Category': 'Hard',
  'Clue 1': 'Orc',
  'Clue 2': 'Tower Guard',
  'Clue 3': 'Cirith Ungol Captain',
  'Traits': "Cruel, brutal Orc captain, guards Cirith Ungol, battles Gorbag for possession of Frodo's belongings"},
 {'Character': 'Gorbag',
  'Category': 'Hard',
  'Clue 1': 'Orc',
  'Clue 2': 'Minas Morgul Leader',
  'Clue 3': 'Disputes Shagrat',
  'Traits': "Cunning, greedy Orc captain from Minas Morgul, battles Shagrat over Frodo's belongings, killed by Sam"},
 {'Character': 'Gothmog',
  'Category': 'Hard',
  'Clue 1': 'Orc',
  'Clue 2': 'Lieutenant of Mordor',
  'Clue 3': 'Pelennor Fields Leader',
  'Traits': 'Cruel, powerful Orc commander, leads the forces of Mordor at the Battle of Pelennor Fields, slain by Éowyn and Merry'}]
;

let currentSlideIndex = 0;

function displaySlide(index) {
    const slide = slidesData[index];
    document.getElementById('character-name').textContent = slide.Character;
    document.getElementById('clues').innerHTML = `
        <span>${slide['Clue 1']}</span>
        <span>${slide['Clue 2']}</span>
        <span>${slide['Clue 3']}</span>
    `;
    const traitsList = slide.Traits.split(',').map(trait => `<span>${trait.trim()}</span>`).join('');
    document.getElementById('traits').innerHTML = traitsList;
}

function setupNextButton() {
    const nextButton = document.getElementById('next-button');
    nextButton.addEventListener('click', () => {
        console.log('Next button clicked.'); // Debug log
        currentSlideIndex = (currentSlideIndex + 1) % slidesData.length;
        console.log('New slide index:', currentSlideIndex); // Debug log
        displaySlide(currentSlideIndex);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded.'); // Debug log
    displaySlide(currentSlideIndex);
    setupNextButton();
});

// Initialize the app
