function Unit(name, rare, hp, atk, speed, interval, reach, toughness){
	this.name = name;
	this.rare = rare;
	this.hp = hp;
	this.akt = atk;
	this.speed = speed;
	this.interval = interval;
	this.reach = reach;
	this.toughness = toughness;
}

//get set function
//name
Unit.prototype.setName = function(name){this.name = name};
Unit.prototype.getName = function(){return this.name};
//rare
Unit.prototype.setRare = function(rare){this.rare = rare};
Unit.prototype.getRare = function(){return this.rare};
//hp
Unit.prototype.setRare = function(hp){this.hp = hp};
Unit.prototype.getHp = function(){return this.hp};
//atk
Unit.prototype.setAtk = function(atk){this.atk = atk};
Unit.prototype.getAtk = function(){return this.atk};
//speed
Unit.prototype.setSpeed = function(speed){this.speed = speed};
Unit.prototype.getSpeed = function(){return this.speed};
//interval
Unit.prototype.setInterval = function(interval){this.interval = interval};
Unit.prototype.getInterval = function(){return interval};
//reach
Unit.prototype.setReach = function(reach){this.reach = reach};
Unit.prototype.getReach = function(){return this.reach};
//toughness
Unit.prototype.setToughness = function(toughness){this.toughness = toughness};
Unit.prototype.getToughness = function(){return this.toughness};