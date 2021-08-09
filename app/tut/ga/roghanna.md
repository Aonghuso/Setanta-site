---
title: Roghanna agus Cinntí
prev: an-staitse
prev-text: An Stáitse
---

# Roghanna agus Cinntí

Go dtí seo, rinne gach ríomhchlár a scríobhamar an rud céanna. Tosaíonn an léirmhínitheoir ag barr
an ríomhchláir agus téann sé ó líne go líne díreach go dtí an bun.

Más mian linn rudaí níos casta a dhéanamh, ba chóir dúinn cinntí inár ríomhchláir a dhéanamh.

Le haghaidh é sin a dhéanamh, bainimid úsáid go príomha as an ráiteas "`má`{.setanta}". Leis an
ráiteas `má`{.setanta}, is féidir linn rud amháin a dhéanamh má tá slonn éigin fíor, nó rud eile
mura bhfuil.

Scríobhaimid ráiteas `má`{.setanta} mar seo:

```{.setanta .numberLines}
má >-- slonn éigin --< {
    >-- cód le dhéanamh má tá an slonn fíor
} nó {
    >-- cód le dhéanamh má tá an slonn bréagach
}
```

**Ní chaithfidh tú an cuid `nó`{.setanta} a scríobh, tá sé roghnach. Tá cód mar seo ceart freisin:**

```{.setanta .numberLines}
má >-- slonn éigin --< {
    >-- cód le dhéanamh má tá an slonn fíor
}
```

## Sampla

Tosaímis leis an ríomhchlár a scríobhamar cheana. Faigheann an ríomhchlár ainm an t-úsáideoir agus
scríobhann sé é le "Dia duit" ar an gconsól.

```{.setanta .numberLines}
ainm := ceist("Cad is ainm duit?")
scríobh("Dia duit", ainm)
```

Bainimid úsáid as an gníomh `ceist`{.setanta} chun ceist a chuir ar an úsáideoir faoina ainm.
Stórálaimid an freagra i athróg `ainm`{.setanta} agus ansin úsáidimid `scríobh`{.setanta} le
haghaidh an ainm a scríobh ar an gconsól.

Anois athraímis an ríomhchlár chun teachtaireacht speisialta a scríobh más é "Setanta" an ainm.
Bainimid úsáid as an oibritheoir `==`{.setanta} chun dhá píosa téacs a chuir i gcomparáid. Chun an
athróg `ainm` a chuir i gcomparáid le "Setanta", scríobhaimid `ainm == "Setanta"`{.setanta}.

Ansin úsáidimid an ráiteas `má`{.setanta} chun an teachtaireacht speisialta a scríobh más "Setanta"
é an ainm. Féach ar an cód seo:

{{{
ainm := ceist("Cad is ainm duit?")

má ainm == "Setanta" {
    scríobh("Fáilte romhat Setanta")
} nó {
    scríobh("Dia duit", ainm)
}
}}}

Bain triail as an cód sin. Má deirimid gurb é "Setanta" ár n-ainm, scríobhfaidh an ríomhchlár
"Fáilte romhat Setanta". Má deirimid aon rud eile, scríobhfaidh sé "Dia duit".

### Taispeántas

![An ráiteas má ag obair](../en/assets/ma-demo.gif)

### Míniú

Seo an cód a scríobhamar:

```{.setanta .numberLines}
ainm := ceist("Cad is ainm duit?")

má ainm == "Setanta" {
    scríobh("Fáilte romhat Setanta")
} nó {
    scríobh("Dia duit", ainm)
}
```

- Ar an gcéad líne, faighimid ainm an t-úsáideoir mar a rinneamar cheana.
- Ar an tríú líne, scríobhaimid `má ainm == "Setanta"`{.setanta}. Seiceálann an slonn sin an bhfuil
  luach na hathróige `ainm`{.setanta} cothrom le "Setanta".
- Ar an ceathrú líne, scríobhaimid `scríobh("Fáilte romhat Setanta")`{.setanta}. Rithfear an cód sin
  má tá `ainm`{.setanta} cothrom le "Setanta" mar tá an líne sin idir an chéad péire lúibíní
  slabhra.
- An an cúigiú líne bainimid úsáid as an focal `nó`{.setanta} chun an dara roinn den ráiteas a tosú.
  Rithfear an cód idir an dara péire lúibíní mura bhfuil an seiceáil a rinneamar fíor.
- Ar an líne dheireanach scríobhamar `scríobh("Dia duit", ainm)`{.setanta} mar ba mhaith linn é sin
  a scríobh mura bhfuil `ainm`{.setanta} cothrom le "Setanta".

## Dúshlán

Déan iarracht an ríomhchlár seo a leanas a athrú ionas go scríobhann sé "Is é seacláid an bia is
fearr" má deir an t-úsáideoir gurb é seacláid an bia is fearr leis, agus go scríobhann sé "Is
aoibhinn liom an bia sin" má deir sé aon bia eile.

**Cuimhnigh nach gá duit síneadh fada (áéíóú) a scríobh, is féidir leat `ma`{.setanta} a scríobh in
ionad `má`{.setanta}**.

{{{

bia := ceist("Cad é an bia is fearr leat?")

>-- Cuir do chód anseo

scríobh("Is aoibhinn liom an bia sin")
}}}

[[Cliceáil anseo chun an freagra a fheiceáil |má bia == &quot;Seacláid&quot; { scríobh(&quot;Is é seacláid an bia is fearr&quot;) } nó { scríobh(&quot;Is aoibhinn liom an bia sin&quot;) }]]

# Luachanna Boole

Tá dhá luachanna speisialta ag *Setanta* ar a dtugtar "luachanna Boole" (Ba ollúna matamaitic é
George Boole i gColaiste na hOllscoile Corcaigh), is iad `fíor`{.setanta} agus `bréag`{.setanta}.
(Mar is gnách, is féidir leat `fior`{.setanta} agus `breag`{.setanta} a scríobh mura féidir leat "í"
nó "é" a scríobh).

Is luachanna Boole iad torthaí slonn mar `x == y`{.setanta} nó `bia == "sceallóga"`{.setanta}.

## Comparáidí

Bhaineamar úsáid as an oibritheoir `==` chun seiceáil an bhfuil dhá rud cothrom lena chéile, ach is
féidir linn a lán níos mó a dhéanamh.

Is féidir linn oibritheoirí difriúla a úsáid le haghaidh luachanna a chur i gcomparáid ar bhealaí
éagsúla:

 Oibritheoir    Brí
-------------  -----
`==`           Seiceáil an bhfuil dhá luach cothrom lena chéile
`!=`           Seiceáil nach bhfuil dhá luach cothrom lena chéile.
`>`            Seiceáil an bhfuil an luach ar chlé níos mó ná an cheann ar dheis.
`<`            Seiceáil an bhfuil an luach ar chlé níos lú ná an cheann ar dheis.
`>=`           Seiceáil an bhfuil an luach ar chlé níos mó ná *nó cothrom leis* an cheann ar dheis.
`<=`           Seiceáil an bhfuil an luach ar chlé níos lú ná *nó cothrom leis* an cheann ar dheis.

Is é `fíor`{.setanta} toradh na hoibritheoirí sin má tá an seiceáil fíor, agus `bréag`{.setanta}
mura bhfuil.

Bain triail as an cód seo:

{{{
scríobh(5 <= 3)
}}}

Bá chóir duit a fheiceáil go scríobhann sé "bréag" ar an gconsól. Déanann sé sé sin mar níl `5` níos
mó nó cothrom le `3`.

## Dúshlán

Seo píosa cód páirteach, Cuir oibritheoir ceart in ionad `>-- oibritheoir anseo --<`{.setanta} ionas
go déanann an cód seiceáil an bhfuil `100`{.setanta} níos lú ná `20 * 6 - 18 * (2 * 1/2)`{.setanta}.

{{{
scríobh(100 >-- oibritheoir anseo --< 20 * 6 - 18 * (2 * 1/2))
}}}

[[Cliceáil anseo le haghaidh an freagra|scríobh(100 &lt; 20 * 6 - 18 * (2 * 1/2))]].

Bá chóir go scríobhann an cód "fíor".

## Agus/Nó/Ní

Cad a dhéanfaimid más maith linn níos mó ná rud a amháin a seiceáil? Mar shampla, cad a
scríobhfaimid chun seiceáil an bhfuil aois éigin níos mó na 20, nó níos lú na 10?

Déanfaimid é sin lé trí oibritheoir cumhachtach: `&`{.setanta} ("agus"), `|`{.setanta} ("nó") agus
`!`{.setanta} ("ní").

### Agus

Bainimid úsáid as `&`{.setanta} nuair ba mhaith linn seiceáil an bhfuil dhá slonn fíor. Is é
`fíor`{.setanta} toradh an t-oibritheoir nuair atá an slonn ar chlé fíor, agus an slonn ar dheis.

Mar shampla:

{{{
scríobh("Dia duit" == "Dia duit" & 5 > 2)
scríobh("Dia duit" == "Dia duit" & 5 > 6)
scríobh("Dia duit" == "Slán" & 5 > 2)
scríobh("Dia duit" == "Slán" & 5 > 6)
}}}

Má ritheann tú an cód sin, scríobhann sé "fíor" ar an gcéad líne, agus ansin scríobhann sé "bréag"
trí huaire. Déanann sé sin mar:

1. Ar an gcéad líne, tá `"Dia duit" == "Dia duit"`{.setanta} **agus** `5 > 2`{.setanta} fíor. Mar
   sin, is é `fíor`{.setanta} toradh an slonn ar fad.
2. Ar an dara líne, tá `"Dia duit" == "Dia duit"`{.setanta} fós fíor, ach anois níl `5 > 6` fíor.
   Mar sin, is é `bréag`{.setanta} toradh an slonn ar fad.
3. Ar an tríú líne, níl `"Dia duit" == "Slán"`{.setanta} fíor, mar sín scríobhann sé "bréag".
4. Ar an gceathrú lín, tá `"Dia duit" == "Slán"`{.setanta} agus `5 > 6`{.setanta} bréagach, dá bharr
   sin scríobhann sé "bréag".
