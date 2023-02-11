# AstroCalc

This is a basic application designed specifically with astrological
calculations in mind. As vague and hard as it is to find astrological
formulas (due to many of the calculators or formulas around being
either too simple thus making the results inaccurate, or not very
scientific) a client of mine asked me to build him a web application
capable of doing such calculations. I tried to use as many astronomical rather than astrological formulas as possible (You'd think there wouldn't be a difference). I limited the output of these calculations to 6 decimal points just to prevent extra clutter on the site, and any extra would be negligible for most people.

To view the formulas please either see below, or take a look at the src/utils folder. All the calculations are done inside of those files with the exception of index.js simply acting as, well... you guessed it, the Index.

---

## Calculators Explained

### Zodiac

This one is relatively self explanatory: You enter your birthday, and upon hitting submit are presented with both your western and chinese zodiac.

The Western zodiac sign is determined based on the month and day of the input date.

The Chinese zodiac sign is determined based on the year of the input date using the following array: "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig". The index in the array is calculated using (year - 4) % 12.

### Declination

Declination is the angle between the rays of the sun and the plane of the earth's equator which takes three parameters. The tilt, latitude, and longitude to calculate declination angle.

The formula calculates the arcsine (inverse sine) of the sum of two trigonometric functions:

The cosine of the tilt angle multiplied by the sine of the latitude angle.
The sine of the tilt angle multiplied by the cosine of the latitude angle, and multiplied by the sine of the longitude angle.

### Inclination

Inclination, typically referred to as Orbital Inclination, is the measurement of tilt of an objects orbit around a celestial body. It's expressed as the angle between a reference plane and the orbital plane or axis of direction of the orbiting object.

The formula calculates the inclination in degrees using the parameters long, lat, and tilt. It does so by taking the arc-tangent of the product of the sine of long and the cosine of lat, divided by the cosine of tilt, and then converts the result from radians to degrees.

### Eccentricity

Eccentricity is the measure of how much an orbit deviates from a perfect circle. In celestial mechanics, eccentricity is defined as the ratio of the distance between the focus and the center of an elliptical orbit and the semi-major axis of the same orbit.

The following formula takes two parameters: SemiMajor and SemiMinor

Eccentricity is equal to the square root of one minus the ratio of the semi-minor axis squared to the semi-major axis squared.

### Parallax

Parallax, otherwise known as Lunar Prallax is the difference between the apparent size of the Moon, and its actual size as a result of its distance from the earth.

The formula takes in Distance, and Apparent Size.
"Parallax" is equal to the difference between the "apparent size" of an object and its "apparent size" divided by its "distance".

### Simple Meridian

The Meridian is an imaginary great circle on the celestial sphere passing through the north celestial pole, the zenith, and the south celestial pole. It is used as a reference for determining the position of celestial objects in the sky. When an object passes over a particular observer's meridian, it is said to be at its highest point in the sky, or at its culmination. The meridian of a particular location on Earth changes as the Earth rotates on its axis, so the observer's local meridian passes overhead twice every day, once when the celestial object culminates, and again 12 hours later.

In order to calculate the Meridian, most people use this simplified formula which tends to be relatively inaccurate. I decided to add this calculator anyways just to allow people to see the difference.

The formula takes in the Right Ascension and Observer Longitude.
The astronomical meridian can be calculated by adding the observer's longitude, converted to radians, to the right ascension of the celestial object.

### Complex Meridian

This is the same calculation as the above, however is significantly more accurate and a hell of a lot more complicated. It takes in four parameters rather than two.

The formula takes in Right Ascension, Observers Latitude, Observers Longitude, and Observers Local Hour Angle.
The meridian is determined by adding the right ascension to the observer's longitude, both measured in radians. In addition to this sum, the arctangent of the quotient of two trigonometric functions is calculated. The numerator is the sine of the observer's local hour angle, also measured in radians, while the denominator is the difference between the product of the cosine of the observer's latitude and the tangent of the observer's latitude, and the product of the sine of the observer's latitude and the cosine of the observer's local hour angle. The result of this calculation is added to the sum of right ascension and observer longitude to obtain the final value of the meridian.

---

There are a few more calculators incoming to this application. Bear with me as this is still a work in progress (Converting from an old html/css/jquery site with subpar calculations and optimizations to a react app) and being worked on with an extremely limited schedule. This is not yet deployed, however it will be shortly.
