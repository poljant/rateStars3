//var starmax = 5;
var ratingStars = 0;
// ustalone dostępne kolory 
//var colorGrey = 'grey';
//var colorRed = 'red';
//var colorGreen = 'green';
//var colorYellow = 'yellow';
//var colorBlue = 'blue';
//var colorGold = 'gold';
////kolor gwiazdek
//var colorStar = colorBlue;

function StarsViewModel() {
	'use strict';
	var self = this;
	var colorGrey = 'grey';
	var colorBlue = 'blue';
	var colorStar = colorBlue;
	//var ratingsStars = 0;
	self.ratingStar = ko.observable(0);
	self.star1 = ko.observable('star_border');
	self.star2 = ko.observable('star_border');
	self.star3 = ko.observable('star_border');
	self.star4 = ko.observable('star_border');
	self.star5 = ko.observable('star_border');
	self.colorStar1 = ko.observable(colorGrey);
	self.colorStar2 = ko.observable(colorGrey);
	self.colorStar3 = ko.observable(colorGrey);
	self.colorStar4 = ko.observable(colorGrey);
	self.colorStar5 = ko.observable(colorGrey);

	//po kliknięciu zamienia znak star_border na znak star
	self.starsClick = function (nr) {
		self.ratingStar(nr);
		//ratingStars = nr;
		//console.log(self.ratingStar());
		if (1 <= nr) {
			self.star1('star');
			self.colorStar1(colorStar);
		} else {
			self.star1('star_border');
			self.colorStar1(colorGrey);
		};
		if (2 <= nr) {
			self.star2('star');
			self.colorStar2(colorStar);
		} else {
			self.star2('star_border');
			self.colorStar2(colorGrey);
		};
		if (3 <= nr) {
			self.star3('star');
			self.colorStar3(colorStar);
		} else {
			self.star3('star_border');
			self.colorStar3(colorGrey);
		};
		if (4 <= nr) {
			self.star4('star');
			self.colorStar4(colorStar);
		} else {
			self.star4('star_border');
			self.colorStar4(colorGrey);
		};
		if (5 <= nr) {
			self.star5('star');
			self.colorStar5(colorStar);
		} else {
			self.star5('star_border');
			self.colorStar5(colorGrey);
		};
	};
	//po najechaniu myszą na gwiazdki zmienia ich kolor
	self.starsHover = function (nr) {
		if (self.ratingStar() != 0) return;
		if (1 <= nr) {
			self.colorStar1(colorStar);
		} else {
			self.colorStar1(colorGrey);
		};
		if (2 <= nr) {
			self.colorStar2(colorStar);
		} else {
			self.colorStar2(colorGrey);
		};
		if (3 <= nr) {
			self.colorStar3(colorStar);
		} else {
			self.colorStar3(colorGrey);
		};
		if (4 <= nr) {
			self.colorStar4(colorStar);
		} else {
			self.colorStar4(colorGrey);
		};
		if (5 <= nr) {
			self.colorStar5(colorStar);
		} else {
			self.colorStar5(colorGrey);
		};
	};
};

function Stars3ViewModel(){
	'use strict';
	var self = this;
	self.stars1 = ko.observable(new StarsViewModel());
	self.stars2 = ko.observable(new StarsViewModel());
	self.stars3 = ko.observable(new StarsViewModel())
};
ko.applyBindings(new Stars3ViewModel());
