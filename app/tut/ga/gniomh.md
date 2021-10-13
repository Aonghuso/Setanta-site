---
title: Ní Briathra a Dhearbhaíonn Ach Gníomh
prev: nuair-a
prev-text: Ag Lúbadh Go Deo
---

# Ní Briathra a Dhearbhaíonn Ach Gníomh

Go dtí seo bhíomar ag úsáid go leor gníomhartha chun a lán rudaí difriúla a dhéanamh, ó téacs a
léamh go cruthanna a tharraingt.

Tháinig gach gníomh a bhaineamar úsáid as go dtí seo le *Setanta*, ach is féidir linn ár gníomhartha
féin a chruthú!

## Athbhreithniú

Is luachanna iad gníomhartha is féidir linn a úsáid chun rudaí a dhéanamh dúinn, mar shampla is
gníomhartha iad `scríobh`{.setanta} agus `codladh`{.setanta}. Glacann gníomhartha le argóintí agus
baineann siad úsáid astu chun rud a dhéanamh.

Glaoitear ar gníomhartha le lúibíní (`(` agus `)`), le na hargóintí eatarthu.

Mar shampla: `scríobh("Dia duit")`{.setanta}, `ciorcal@stáitse(100, 100, 100)`{.setanta},
`léigh()`{.setanta}.

Tá torthaí ag roinnt argóintí freisin, nuair a ghlaoitear orthu tugann siad luach éigin ar ais.
Mar shampla: `aois := ceist("Cén aois thú?")`{.setanta}.

# Ráitis "gníomh"

Chun ár ngníomhartha féin a chruthú, is féidir linn úsáid a bhaint as an eochairfhocail
`gníomh`{.setanta}. Bainimid úsáid as an ráiteas sin chun ainm ár gníomh, an liosta argóintí agus an
iompraíocht a shainmhíniú.

Scríobhaimid ráiteas `gníomh`{.setanta} mar seo:

```{.setanta .numberLines}
gníomh <ainm> (<liosta argóintí>) {
    <cód le dhéanamh>
}
```

Cruthaíonn ráiteas `gníomh`{.setanta} gníomh dúinn leis an ainm a phiocamar. Nuair a ghlaonn tú ar
an gníomh le roinnt argóintí, cuirtear na argóintí in athróga leis na hainmneacha a roghnaíomar.
Ansin ritear an cód idir na lúibíní slabhracha (`{` agus `}`). Tugtar **corp an gnímh** ar cód seo.

Anois féachfaimid ar sampla beag. Cruthaímis gníomh `abair_dia_duit`, ní ghlacfaidh `abair_dia_duit`
le aon argóintí, agus nuair a ghlaonn tú air scríobhfaidh sé "Dia duit" ar an gconsól.

```
gníomh abair_dia_duit() {
    scríobh("Dia duit")
}
```

Mar is féidir leat a fheiceáil, chuireamar "abair_dia_duit" isteach mar ainm, ní chuirimid aon
argóintí isteach agus is é `scríobh("Dia duit")`{.setanta} corp an gnímh.

Is féidir linn glaoigh ar an gníomh le `abair_dia_duit()`. Bain triail as anois!

{{{
gníomh abair_dia_duit() {
    scríobh("Dia duit")
}

abair_dia_duit()
}}}

Nuair a ritheann tú an ríomhchlár sin, tá súil agam go feicfidh tú "Dia duit" ar an gconsól.

### Míniú

Nuair a ritheann *Setanta* an líne cosúil le `abair_dia_duit()`, léimeann sé ar ais go dtí an
ráiteas "gníomh" a shainmhíníonn an gníomh agus ritheann sé an cód a scríobh tú. Sa ríomhchlár sin,
ba é `scríobh("Dia duit")`{.setanta} an cód sin. Dá bhrí sin, scríobhann sé "Dia duit" ar an
gconsól. Ansin nuair atá sé críochnaithe leis an gcód sa ghníomh, bogann sé ar ais go dtí an líne a
raibh sé.

# Argóintí

Conas is féidir linn gníomh a chruthú a ghlacann lé argóintí? Le haghaidh é sin a dhéanamh, ba chóir
dúinn ainmneacha a roghnú do na hathróga. Nuair a glaoimid ar an gníomh le roinnt argóintí, cuirtear
luachanna na n-argóintí in athróga leis na hainmneacha a roghnaíomar agus is féidir linn na hathróga
sin a úsáid i gcorp an gnímh.

Beidh sé níos soiléire le sampla, mar sin cruthaímis gníomh anois chun ciorcal a tharraingt i lár an
stáitse. Ar dtús, cruthaímis gníomh a tharraingíonn ciorcal gorm le ga 100, agus níos déanaí
athróimid an gníomh chun argóintí a ghlacadh don ga agus dath an ciorcail.

Seo é an gníomh simplí:

```{.setanta .numberLines}
gníomh ciorcal_i_lár() {
    >-- Athraigh an dath go gorm.
    dath@stáitse("gorm")

    >-- Faigh an lárphointe
    lar_x := fad_x@stáitse / 2
    lar_y := fad_y@stáitse / 2

    >-- Tarraing an ciorcal le ga 100
    ciorcal@stáitse(lar_x, lar_y, 100)
}
```

Bain triail as:

{{{s
gníomh ciorcal_i_lár() {
    >-- Athraigh an dath go gorm.
    dath@stáitse("gorm")

    >-- Faigh an lárphointe
    lar_x := fad_x@stáitse / 2
    lar_y := fad_y@stáitse / 2

    >-- Tarraing an ciorcal le ga 100
    ciorcal@stáitse(lar_x, lar_y, 100)
}

ciorcal_i_lár()
}}}

Anois, ba mhaith linn ga difriúil a úsáid. Chun é sin a dhéanamh cuirfimid argóint leis an gníomh,
tugaimid `ga` ar an argóint sin. Chun an argóint a cuir leis an gníomh, scríobh `ga` idir na lúibíní
mar seo: `gníomh ciorcal_i_lár(ga) {`{.setanta}:

```{.setanta .numberLines}
gníomh ciorcal_i_lár(ga) {
    >-- Athraigh an dath go gorm.
    dath@stáitse("gorm")

    >-- Faigh an lárphointe
    lar_x := fad_x@stáitse / 2
    lar_y := fad_y@stáitse / 2

    >-- Tarraing an ciorcal le ga 100
    ciorcal@stáitse(lar_x, lar_y, 100)
}
```

Anois is féidir linn an athróg `ga` a úsáid in ionad an luach `100`:

```{.setanta .numberLines}
gníomh ciorcal_i_lár(ga) {
    >-- Athraigh an dath go gorm.
    dath@stáitse("gorm")

    >-- Faigh an lárphointe
    lar_x := fad_x@stáitse / 2
    lar_y := fad_y@stáitse / 2

    >-- Tarraing an ciorcal le ga "ga"
    ciorcal@stáitse(lar_x, lar_y, ga)
}
```

Nuair a glaoitear ar an gníomh anois, caithfear argóint a thabhairt dó. Mar shampla:
`ciorcal_i_lár(100)`{.setanta}.

Anois is é seo ár ríomhchlár: Bain triail as!

{{{s
gníomh ciorcal_i_lár(ga) {
    >-- Athraigh an dath go gorm.
    dath@stáitse("gorm")

    >-- Faigh an lárphointe
    lar_x := fad_x@stáitse / 2
    lar_y := fad_y@stáitse / 2

    >-- Tarraing an ciorcal le ga "ga"
    ciorcal@stáitse(lar_x, lar_y, ga)
}

ciorcal_i_lár(100)
}}}

Athraigh an argóint `100`{.setanta} sa líne deireanach go luachanna difriúla agus bain triail astu.
Ba chóir duit a fheiceáil go athraíonn méid an chiorcail.

Is féidir linn an gníomh a úsáid arís agus arís, sa ríomhchlár a leanas bainfimid úsáid as chun trí
chiorcal a tharraingt le méideanna `100`{.setanta}, `200`{.setanta} agus `300`{.setanta}.

{{{s
gníomh ciorcal_i_lár(ga) {
    >-- Athraigh an dath go gorm.
    dath@stáitse("gorm")

    >-- Faigh an lárphointe
    lar_x := fad_x@stáitse / 2
    lar_y := fad_y@stáitse / 2

    >-- Tarraing an ciorcal le ga "ga"
    ciorcal@stáitse(lar_x, lar_y, ga)
}

ciorcal_i_lár(100)
ciorcal_i_lár(200)
ciorcal_i_lár(300)
}}}

Ach cad a dhéanfaimid má ba mhaith linn an dath a hathrú freisin? Is féidir linn athróg eile a cuir
leis an gníomh, is gá dúinn ainm nua a phiocadh don argóint agus é a cur idir na lúibíní tar éis an
argóint `ga` le camóg idir na hainmneacha, ansin ba féidir linn é a úsáid in ionad an dath "gorm".
Piocaimis an ainm `dath`; Seo é ár gcód nua:

```{.setanta .numberLines}
gníomh ciorcal_i_lár(ga, dath) {
    >-- Athraigh an dath go gorm.
    dath@stáitse(dath)

    >-- Faigh an lárphointe
    lar_x := fad_x@stáitse / 2
    lar_y := fad_y@stáitse / 2

    >-- Tarraing an ciorcal le ga "ga"
    ciorcal@stáitse(lar_x, lar_y, ga)
}
```

Anois nuair a glaoimid ar `ciorcal_i_lár`, caithfimid an ga agus an dath a cuir isteach mar
argóintí. Athróimis an ríomhchlár a scríobhamar cheana chun ciorcal dearg agus glas a tharraingt.

{{{s
gníomh ciorcal_i_lár(ga, dath) {
    >-- Athraigh an dath go gorm.
    dath@stáitse(dath)

    >-- Faigh an lárphointe
    lar_x := fad_x@stáitse / 2
    lar_y := fad_y@stáitse / 2

    >-- Tarraing an ciorcal le ga "ga"
    ciorcal@stáitse(lar_x, lar_y, ga)
}

ciorcal_i_lár(100, "gorm")
ciorcal_i_lár(200, "glas")
ciorcal_i_lár(300, "dearg")
}}}
