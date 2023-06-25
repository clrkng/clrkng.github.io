# New Palm Website

## Releases

To add a new release, copy and paste a new `[catalogue_number].html` file in the `_releases` folder.
Then update all of the information in the `` fields following this template:

```
---
catalogue: `NPAOO-01`
artist: `Charles Edward`
name: `Tong EP`

distribution: `Stellar Remnant (US)`
day: `03.03.2023`

mastering: `Scape Mastering (Berlin)`
pressing: `Optimal Media (Berlin) via Handle with Care (Berlin)`

tracks:
    - `A1 Open the Gates (6:45)`
    - `A2 Dyspepsia (7:10)`
    - `B1 Tong (8:17)`

description: `New Palm kicks off our record label with Tong EP by resident and label co-boss Charles Edward. Featuring three dubby rollers, Tong EP captures both playful and meditative qualities characteristic of recent get togethers… enjoy!`

image: `/images/releases/NPAOO-01.png`
---
```

For the release image, make sure to add an image of the cover in the `/images/releases/` folder and check that the name of this image file and the file type matches the `image:` field above.

## Mixes

To add a new mix, copy and paste a new `[mix_number].html` file in the `_mixes` folder.
Then update all of the information in the `` fields following this template:

```
---
number: `New Palm 07`
name: `agraybé`
year: `2022`
---

`<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1424836441&color=%23e1e4e4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>`

```

For the soundcloud embed (the `iframe` field), navigate to the mix's soundcloud page and click `share > embed`. Select the `Classic embed` style, and copy the code that is generated in the `Code` field. Paste it below the template section, and delete everything after the `</iframe>` tag.

## Events

To add a new event, copy and paste a new `[event name].html` file in the `_events` folder.
Then update all of the information in the `` fields following this template:

```
---
name: `Gradient camp out`
year: `2023`
location: `Los Angeles, USA`

image: `/images/events/gradient2023.jpg`

description: `A summary of this event`
---
```

For the event image, make sure to add an image in the `/images/events/` folder and check that the name of this image file and the file type matches the `image:` field above.

## Residents

To add a new resident, copy and paste a new `[resident name].html` file in the `_residents` folder.
Then update all of the information in the `` fields following this template:

```
---
name: `Max Ellington`
location: `Los Angeles`
soundcloud: `soundcloud.link`
instagram: `https://www.instagram.com/max__ellington`

description: `A one or two sentence bio about Max. `
---
```

