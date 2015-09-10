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
var verticalLineMond = new Path();
verticalLineMond.add(new Point(gezichtbottom));
verticalLineMond.add(new Point(neusbottom));

var gezichtLeft = gezicht.bounds.leftCenter;
var gezichtCenter = gezicht.bounds.center;
var horizontalLeftMond = new Path();
horizontalLeftMond.add(new Point(gezichtLeft));
horizontalLeftMond.add(new Point(gezichtCenter));

var gezichtRight = gezicht.bounds.rightCenter;
var horizontalRightMond = new Path();
horizontalRightMond.add(new Point(gezichtCenter));
horizontalRightMond.add(new Point(gezichtRight));

var left = new Point(horizontalLeftMond.getPointAt(horizontalLeftMond.length / 2));
left.y += (Math.random()*30) + 5;

var leftBetweenHelp = new Path();
leftBetweenHelp.add(new Point(left));
leftBetweenHelp.add(new Point(gezichtCenter));
var leftTween = new Point(leftBetweenHelp.getPointAt(leftBetweenHelp.length / 2));
leftTween.y =  left.y + (Math.random()*20) + 5;

var mid = new Point(verticalLineMond.getPointAt(verticalLineMond.length / 2));
mid.y = leftTween.y + (Math.random()*15);

var right = new Point(horizontalRightMond.getPointAt(horizontalRightMond.length / 2));
right.y = left.y;

var rightBetweenHelp = new Path();
rightBetweenHelp.add(new Point(right));
rightBetweenHelp.add(new Point(gezichtCenter));
var rightTween = new Point(rightBetweenHelp.getPointAt(rightBetweenHelp.length / 2));
rightTween.y =  leftTween.y;

var rightUnder = new Point(right);
rightUnder.y += (Math.random()*20) + 5;
var rightTweenUnder = new Point(rightTween);
rightTweenUnder.y += (Math.random()*20) + 10;
var midUnder = new Point(mid);
midUnder.y = rightTweenUnder.y + (Math.random()*10) + 5;
var leftUnder = new Point(left);
leftUnder.y = rightUnder.y;
var leftTweenUnder = new Point(leftTween);
leftTweenUnder.y = rightTweenUnder.y;

var mond = new Path();
mond.add(left);
mond.add(leftTween);
mond.add(mid);
mond.add(rightTween);
mond.add(right);
mond.add(rightUnder);
mond.add(rightTweenUnder);
mond.add(midUnder);
mond.add(leftTweenUnder);
mond.add(leftUnder);
mond.closePath();
mond.simplify(0.01);
mond.fillColor = "#818181";



