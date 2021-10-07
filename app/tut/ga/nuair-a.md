---
title: Ag Lúbadh Go Deo
prev: liostai
prev-text: Liostaí agus Lúba
---

# Lúba "Nuair-a"

Sa leathanach roimhe seo d'fhoghlaimíomar faoi lúba "le idir", bhí siad an-úsáideach le haghaidh
píosaí cód a ritheadh arís agus arís, ach bhí siad teoranta mar bhí orainn an uimhir tosaigh agus an
uimhir deiridh a phiocadh sula dtosaigh an lúb ag rith. Cad is féidir linn a dhéanamh mura bhfuil a
fhios againn cé mhéad lúb de dhíth orainn, nó má ba mhaith linn rudaí a dhéanamh go deo?

Is féidir linn cineál lúb nua a úsáid, an lúb *"nuair-a"*. Tugaimid lúb "nuair-a" ar an gcineál lúb
seo mar ritheann an cineál lúb seo cód arís agus arís *nuair atá* slonn éigin fíor. Tugaimid "an
coinníoll" ar an slonn sin.

Scríobhaimid lúb "nuair-a" mar seo:

```{.setanta .numberLines}
nuair-a < coinníoll > {
    >-- Cód le ath-ritheadh
}
```

Oibríonn lúb "nuair-a" mar seo:

1. Nuair a sroicheann an léirmhínitheoir *Setanta* lúb "nuair-a", ar dtús déanann sé seic an bhfuil
   an coinníoll fíor (cosúil lé ráiteas `má`{.setanta}). Má tá an coinníoll bréagach, scoireann sé
   den lúb agus leanann sé ar aghaidh leis an cód tar éis an lúibe.
2. Tar éis an seic, ritheann sé an cód idir na lúibíní slabhracha (`{` agus `}`).
3. Ansin bogann sé go céim 1.

Seo sampla beag:

## Sampla


{{{
>-- Cruthaigh athróg nua
x := 0

>-- Is é "x < 3" an coinníoll
nuair-a x < 3 {
    scríobh(x)

    >-- Meadaigh `x` faoi 1
    x += 1
}
}}}

Nuair a ritheann tú an cód sin scríobhann sé "0", "1" agus "2", Cén fáth?

- Ar an gcéad líne, cruthaíonn *Setanta* athróg nua `x` le luach `0`{.setanta}.
- Ansin, leanann sé ar aghaidh agus sroicheann sé an lúb. Is é `x < 3`{.setanta} an coinníoll. Dá
  bhrí sin, déanann *Setanta* seic an bhfuil `x < 3`{.setanta} fíor. Faoi láthair tá `x` cothrom le
  0, mar sin tá `x < 3`{.setanta} fíor.
- Mar bhí an coinníoll fíor, ritear an cód sa lúb, scríobhann sé "0" ar an gconsól agus méadaíonn sé
  `x`. Anois is é `1`{.setanta} luach `x`.
- Anois filleann *Setanta* ar ais go dtí an coinníoll, anois tá `x` cothrom le `1`{.setanta}, mar
  sin tá an coinníoll `x < 3`{.setanta} fós fíor agus leanann sé aghaidh leis an cód arís.
- Scríobhann sé "1" ar an gconsól agus méadaíonn sé `x` arís.
- Tharlaíonn an rud cheana arís: tá an coinníoll fós fíor, scríobhann sé "2" agus méadaíonn sé `x`.
- Anois, áfach, níl an coinníoll fíor, mar tá `x` cothrom le `3`{.setanta}, agus níl 3 níos lú na 3.
  Dá bhrí sin, scoireann *Setanta* ón lúb agus leanann sé ar aghaidh tar éis an lúibe.
- Níl aon cód tar éis an lúibe, mar sin tá an ríomhchlár críochnaithe.

## Ag lúbadh go deo

Cad is féidir linn a dhéanamh más mian linn rudaí le dhéanamh go deo? Mar shampla, ríomhchlár a
scríobhann "Dia duit" gach 2 soicind? Is féidir linn é sin a dhéanamh, níl ach le déanamh againn ach
coinníoll a scríobhadh atá fíor i gcónaí, mar shampla: `1 == 1`{.setanta} nó `2 + 3 == 5`{.setanta}.
Is é `fíor`{.setanta} an rud is simplí áfach.

Seo lúb a ritheann go deo:

```{.setanta .numberLines}
nuair-a fíor {
}
```

Nuair atá ríomhchlár *Setanta* ag rith, athraíonn an cnaipe
<iron-icon class="play" icon="av:play-arrow"></iron-icon> go
cnaipe <iron-icon class="play" icon="av:stop"></iron-icon>. Má cliceálann tú ar an cnaipe, stopfaidh
an ríomhchlár. Beidh an cnaipe seo riachtanach le na ríomhchláir a leanas.

Anois, scríobhaimis an ríomhchlár a scríobhann "Dia duit" gach 2 soicind:

{{{
nuair-a fíor {
    scríobh("Dia duit")
    coladh(2000)
}
}}}

Bain triail as! (Ná déan dearmad faoi an cnaipe <iron-icon class="play" icon="av:stop"></iron-icon>.
