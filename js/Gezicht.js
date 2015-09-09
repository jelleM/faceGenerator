var rectangle = new Rectangle(new Point(100, 100), new Size(((Math.random() * 200) + 100), ((Math.random() * 200) + 100)));
var basis = new Path.Ellipse(rectangle);
basis.strokeColor = "red";

/* GEZICHT */
var gezicht = new Path();
gezicht.fillColor = "white";

for (var i = 1; i < basis.length;) {
    var point = basis.getPointAt(i);
    var randomPoint = point + new Point(((Math.random() * 7) + 1), 0);

    gezicht.add(randomPoint);
    i = i + 20;
}
basis.remove();
gezicht.simplify(1);

/* NEUS */
var neus = new Path();
var middelpunt = new Point(gezicht.bounds.center);
var l1 = middelpunt + new Point(((Math.random() * (gezicht.bounds.width / 5)) + 5), 0);
var r1 = middelpunt - new Point(((Math.random() * (gezicht.bounds.width / 10)) + 5), 0);
var m1 = middelpunt + new Point(0, ((Math.random() * 20) + 5));
var m11 = m1 + new Point((Math.random() * 5),0);
var m12 = m1 - new Point((Math.random() * 5),0);
var l2 = l1 + new Point(0, ((Math.random()*5) + 2));
var r2 = r1 + new Point(0, ((Math.random()*5) + 2));
var m2 = m1 + new Point(0, ((Math.random() * 15) + 5));

neus.fillColor = "#D1D1D1";
neus.add(l1);
neus.add(m11);
neus.add(m12);
neus.add(r1);
neus.add(r2);
neus.add(m2);
neus.add(l2);
neus.simplify(0.1);

/* MOND */
var gezichtbottom = gezicht.bounds.bottomCenter;
var neusbottom = neus.bounds.bottomCenter;
var mondhulp = new Path();
mondhulp.add(new Point(gezichtbottom));
mondhulp.add(new Point(neusbottom));


var startpunt = new Point(mondhulp.getPointAt(mondhulp.length / 2));
var punt2 = new Point(startpunt + new Point((Math.random() * (gezicht.bounds.width / 5) + 20), (-20 + Math.random() * 5 + 1)));
var punt3 = new Point(startpunt - new Point((Math.random() * (gezicht.bounds.width / 5) + 20), (20 + Math.random() * 5 + 1)));
var mond = new Path.Arc(punt2, startpunt, punt3);
mond.closePath();
mond.simplify(0.1);
mond.fillColor = "#818181";

/* OGEN */
var gezichttop = gezicht.bounds.topCenter;
var ooghulp = new Path();
ooghulp.add(new Point(gezichttop));
ooghulp.add(new Point(neusbottom));
var startpunt2 = new Point(ooghulp.getPointAt(ooghulp.length / 2));
var oogafstand = ((Math.random()*25)+15);
var oog1Hulp = new Point(startpunt2 - new Point(oogafstand,0));
var oog2Hulp = new Point(startpunt2 + new Point(oogafstand,0));
var ooggroote = ((Math.random()*7)+3);
var oog1 = new Path.Circle(oog1Hulp, ooggroote);
var oog2 = new Path.Circle(oog2Hulp, ooggroote);
oog1.fillColor = "#818181";
oog2.fillColor = "#818181";



